#!/usr/bin/env python3
"""
Render the WhatsApp AI agent Markdown manuals to production-ready PDFs.

Usage:  python3 scripts/md-to-pdf.py FILE.md [FILE.md ...]

Deliberately a small, dependency-light renderer (reportlab only) rather than a
full Markdown engine: these documents use a known, fixed subset of Markdown
(headings, tables, lists, blockquotes, fenced code, bold/italic/inline-code),
and hand-controlling the layout is what keeps prices legible in tables and the
ASCII decision-tree diagrams unbroken across pages.

CJK: reportlab's built-in STSong-Light CID font is used for any run containing
Han characters, so the Chinese response templates render without shipping a
font binary.
"""

import re
import sys
import os
from datetime import date

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, Table, TableStyle,
    KeepTogether, HRFlowable, PageBreak, CondPageBreak,
)

pdfmetrics.registerFont(UnicodeCIDFont("STSong-Light"))
CJK = "STSong-Light"

# ── Brand palette (KL Servis Rumah site colours) ────────────────────────────
NAVY = colors.HexColor("#075985")
BLUE = colors.HexColor("#0284C7")
SKY = colors.HexColor("#0EA5E9")
SKY_BG = colors.HexColor("#E0F2FE")
SLATE = colors.HexColor("#475569")
LIGHT = colors.HexColor("#F1F5F9")
BORDER = colors.HexColor("#CBD5E1")
WA_GREEN = colors.HexColor("#25D366")
RED = colors.HexColor("#B91C1C")
RED_BG = colors.HexColor("#FEF2F2")

CJK_RE = re.compile(r"[\u2e80-\u9fff\u3000-\u303f\uff00-\uffef]")


# ── Inline markdown → reportlab markup ──────────────────────────────────────
def esc(t):
    return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def wrap_cjk(t):
    """Wrap contiguous CJK runs in the CID font so they render, not tofu."""
    out, buf, is_cjk = [], [], None
    for ch in t:
        c = bool(CJK_RE.match(ch))
        if is_cjk is None:
            is_cjk = c
        if c != is_cjk:
            seg = "".join(buf)
            out.append(f'<font name="{CJK}">{seg}</font>' if is_cjk else seg)
            buf, is_cjk = [], c
        buf.append(ch)
    if buf:
        seg = "".join(buf)
        out.append(f'<font name="{CJK}">{seg}</font>' if is_cjk else seg)
    return "".join(out)


def inline(t):
    """Convert inline Markdown to reportlab mini-HTML."""
    t = esc(t)
    # inline code first, so its contents are not re-processed
    codes = []

    def stash(m):
        codes.append(m.group(1))
        return f"\x00{len(codes) - 1}\x00"

    t = re.sub(r"`([^`]+)`", stash, t)
    t = re.sub(r"\*\*\*(.+?)\*\*\*", r"<b><i>\1</i></b>", t)
    t = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", t)
    t = re.sub(r"(?<!\*)\*([^*\n]+)\*(?!\*)", r"<i>\1</i>", t)
    t = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r"<b>\1</b>", t)
    t = wrap_cjk(t)

    def pop(m):
        c = esc(codes[int(m.group(1))])
        return (f'<font face="Courier" size="8.4" color="#0369A1"'
                f' backColor="#F1F5F9"> {c} </font>')

    t = re.sub(r"\x00(\d+)\x00", pop, t)
    return t


def has_cjk(t):
    return bool(CJK_RE.search(t))


# ── Styles ──────────────────────────────────────────────────────────────────
def styles():
    INK = colors.HexColor("#1E293B")

    def S(name, **kw):
        kw.setdefault("fontName", "Helvetica")
        kw.setdefault("textColor", INK)
        kw.setdefault("alignment", TA_LEFT)
        return ParagraphStyle(name, **kw)

    return {
        "title": S("title", fontSize=27, leading=32, textColor=NAVY,
                   spaceAfter=4, fontName="Helvetica-Bold"),
        "subtitle": S("subtitle", fontSize=13.5, leading=18, textColor=BLUE,
                      spaceAfter=14, fontName="Helvetica-Bold"),
        "h1": S("h1", fontSize=17, leading=21, textColor=colors.white,
                fontName="Helvetica-Bold", backColor=NAVY,
                borderPadding=(7, 8, 7, 8), spaceBefore=16, spaceAfter=11),
        "h2": S("h2", fontSize=13.5, leading=17, textColor=NAVY,
                fontName="Helvetica-Bold", spaceBefore=13, spaceAfter=6),
        "h3": S("h3", fontSize=11.2, leading=14.5, textColor=BLUE,
                fontName="Helvetica-Bold", spaceBefore=10, spaceAfter=4),
        "h4": S("h4", fontSize=10, leading=13, textColor=SLATE,
                fontName="Helvetica-Bold", spaceBefore=8, spaceAfter=3),
        "body": S("body", fontSize=9.3, leading=13.4, spaceAfter=5.5),
        "li": S("li", fontSize=9.3, leading=13.2, spaceAfter=2.6,
                leftIndent=13, bulletIndent=3),
        "quote": S("quote", fontSize=9.4, leading=13.6, leftIndent=10,
                   rightIndent=6, spaceBefore=4, spaceAfter=7,
                   textColor=NAVY, backColor=SKY_BG,
                   borderPadding=(7, 8, 7, 9), borderColor=SKY, borderWidth=0),
        "warn": S("warn", fontSize=9.4, leading=13.6, leftIndent=10,
                  rightIndent=6, spaceBefore=4, spaceAfter=7, textColor=RED,
                  backColor=RED_BG, borderPadding=(7, 8, 7, 9),
                  fontName="Helvetica-Bold"),
        "code": S("code", fontName="Courier", fontSize=7.5, leading=9.6,
                  textColor=colors.HexColor("#0F172A")),
        "th": S("th", fontName="Helvetica-Bold", fontSize=8.4, leading=11,
                textColor=colors.white),
        "td": S("td", fontSize=8.4, leading=11),
        "meta": S("meta", fontSize=8.6, leading=12.4, textColor=SLATE,
                  spaceAfter=3),
    }


# ── Page furniture ──────────────────────────────────────────────────────────
class Doc(BaseDocTemplate):
    def __init__(self, path, doc_title, **kw):
        super().__init__(path, pagesize=A4,
                         leftMargin=17 * mm, rightMargin=15 * mm,
                         topMargin=19 * mm, bottomMargin=17 * mm,
                         title=doc_title, author="KL Servis Rumah",
                         subject="WhatsApp AI Agent documentation", **kw)
        self.doc_title = doc_title
        frame = Frame(self.leftMargin, self.bottomMargin,
                      self.width, self.height, id="body",
                      leftPadding=0, rightPadding=0,
                      topPadding=0, bottomPadding=0)
        self.addPageTemplates([PageTemplate(id="main", frames=[frame],
                                           onPage=self._chrome)])

    def _chrome(self, canvas, doc):
        if canvas.getPageNumber() == 1:   # cover page stays clean
            return
        canvas.saveState()
        w, h = A4
        y = h - 12 * mm
        canvas.setStrokeColor(BORDER)
        canvas.setLineWidth(0.5)
        canvas.line(17 * mm, y, w - 15 * mm, y)
        canvas.setFont("Helvetica-Bold", 7.4)
        canvas.setFillColor(NAVY)
        canvas.drawString(17 * mm, y + 2.6 * mm, "KL SERVIS RUMAH")
        canvas.setFont("Helvetica", 7.4)
        canvas.setFillColor(SLATE)
        canvas.drawRightString(w - 15 * mm, y + 2.6 * mm, self.doc_title)

        fy = 12 * mm
        canvas.setStrokeColor(BORDER)
        canvas.line(17 * mm, fy + 4 * mm, w - 15 * mm, fy + 4 * mm)
        canvas.setFont("Helvetica", 7)
        canvas.setFillColor(SLATE)
        canvas.drawString(17 * mm, fy,
                          "Internal operations document \u00b7 verified against "
                          "klservisrumah.my \u00b7 v1.0")
        canvas.setFont("Helvetica-Bold", 7.6)
        canvas.setFillColor(NAVY)
        canvas.drawRightString(w - 15 * mm, fy,
                               f"Page {canvas.getPageNumber() - 1}")
        canvas.restoreState()


def cover(st, title, subtitle, meta_lines, avail_w):
    f = [Spacer(1, 30 * mm)]
    bar = Table([[""]], colWidths=[avail_w], rowHeights=[3.6 * mm])
    bar.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), WA_GREEN)]))
    f += [bar, Spacer(1, 9 * mm)]
    f.append(Paragraph("KL SERVIS RUMAH",
                       ParagraphStyle("brand", fontName="Helvetica-Bold",
                                      fontSize=11, textColor=SKY,
                                      spaceAfter=8)))
    f.append(Paragraph(title, st["title"]))
    f.append(Paragraph(subtitle, st["subtitle"]))
    f.append(Spacer(1, 5 * mm))
    f.append(HRFlowable(width="100%", thickness=0.8, color=BORDER))
    f.append(Spacer(1, 5 * mm))
    for line in meta_lines:
        f.append(Paragraph(inline(line), st["meta"]))
    f.append(Spacer(1, 12 * mm))

    warn = ("<b>SOURCE-OF-TRUTH NOTICE</b><br/>Every fact, price, warranty, "
            "coverage area and policy in this document is taken verbatim from "
            "the KL Servis Rumah repository and live website. The AI agent must "
            "not state anything that is not written here. If it is not in this "
            "document, the agent does not know it \u2014 it must say so and hand "
            "over to the supervisor.")
    box = Table([[Paragraph(warn, ParagraphStyle(
        "cw", fontName="Helvetica", fontSize=9, leading=13.4,
        textColor=NAVY))]], colWidths=[avail_w])
    box.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), SKY_BG),
        ("BOX", (0, 0), (-1, -1), 0.8, SKY),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
    ]))
    f.append(box)
    f.append(Spacer(1, 8 * mm))
    f.append(Paragraph(
        "WhatsApp +60 11-1662 7349 &nbsp;\u00b7&nbsp; info@klservisrumah.my "
        "&nbsp;\u00b7&nbsp; www.klservisrumah.my",
        ParagraphStyle("cf", fontName="Helvetica-Bold", fontSize=8.6,
                       textColor=SLATE)))
    f.append(PageBreak())
    return f


# ── Table rendering ─────────────────────────────────────────────────────────
def split_row(line):
    line = line.strip()
    if line.startswith("|"):
        line = line[1:]
    if line.endswith("|"):
        line = line[:-1]
    out, cur, i = [], "", 0
    while i < len(line):
        if line[i] == "\\" and i + 1 < len(line):
            cur += line[i + 1]
            i += 2
            continue
        if line[i] == "|":
            out.append(cur.strip())
            cur = ""
            i += 1
            continue
        cur += line[i]
        i += 1
    out.append(cur.strip())
    return out


def build_table(rows, st, avail_w):
    header, body = rows[0], rows[1:]
    n = max(len(header), max((len(r) for r in body), default=0))
    header = header + [""] * (n - len(header))
    body = [r + [""] * (n - len(r)) for r in body]

    # Width by content weight, clamped so no column collapses.
    weights = []
    for c in range(n):
        cells = [header[c]] + [r[c] for r in body]
        longest = max((len(x) for x in cells), default=1)
        avg = sum(len(x) for x in cells) / max(len(cells), 1)
        weights.append(max(6.0, min(longest, avg * 2.1 + 6)))
    total = sum(weights)
    min_w = avail_w * (0.10 if n > 2 else 0.16)
    widths = [max(min_w, avail_w * w / total) for w in weights]
    scale = avail_w / sum(widths)
    widths = [w * scale for w in widths]

    def cell(txt, style):
        s = style
        if has_cjk(txt):
            s = ParagraphStyle(style.name + "cjk", parent=style, leading=style.leading + 1.6)
        return Paragraph(inline(txt), s)

    data = [[cell(h, st["th"]) for h in header]]
    data += [[cell(c, st["td"]) for c in r] for r in body]

    t = Table(data, colWidths=widths, repeatRows=1, hAlign="LEFT")
    style = [
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("GRID", (0, 0), (-1, -1), 0.4, BORDER),
        ("LINEBELOW", (0, 0), (-1, 0), 1.0, BLUE),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 4.2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4.2),
    ]
    for i in range(1, len(data)):
        if i % 2 == 0:
            style.append(("BACKGROUND", (0, i), (-1, i), LIGHT))
    t.setStyle(TableStyle(style))
    return t


# Courier has no box-drawing glyphs, so the diagrams would render as tofu.
# Substituting 1 char for 1 char keeps every column of the ASCII art aligned.
BOX_ASCII = str.maketrans({
    "\u2500": "-", "\u2501": "-", "\u2502": "|", "\u2503": "|",
    "\u250c": "+", "\u250d": "+", "\u250e": "+", "\u250f": "+",
    "\u2510": "+", "\u2511": "+", "\u2512": "+", "\u2513": "+",
    "\u2514": "+", "\u2515": "+", "\u2516": "+", "\u2517": "+",
    "\u2518": "+", "\u2519": "+", "\u251a": "+", "\u251b": "+",
    "\u251c": "+", "\u2520": "+", "\u2523": "+",
    "\u2524": "+", "\u2528": "+", "\u252b": "+",
    "\u252c": "+", "\u2530": "+", "\u2533": "+",
    "\u2534": "+", "\u2538": "+", "\u253b": "+",
    "\u253c": "+", "\u2542": "+", "\u254b": "+",
    "\u2550": "=", "\u2551": "|",
    "\u25ba": ">", "\u25b6": ">", "\u2192": ">", "\u2794": ">",
    "\u2022": "*", "\u25e6": "-", "\u2713": "v", "\u2610": "[",
    "\u26a0": "!", "\u2014": "-", "\u2013": "-", "\u00b7": ".",
    "\u2018": "'", "\u2019": "'", "\u201c": '"', "\u201d": '"',
})


def code_block(lines, st, avail_w):
    lines = [l.translate(BOX_ASCII) for l in lines]
    txt = "<br/>".join(
        esc(l).replace(" ", "&nbsp;") if l.strip() else "&nbsp;" for l in lines)
    p = Paragraph(txt, st["code"])
    t = Table([[p]], colWidths=[avail_w], hAlign="LEFT")
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#F8FAFC")),
        ("BOX", (0, 0), (-1, -1), 0.6, BORDER),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    return t


def callout(text, st, avail_w, warn=False):
    style = st["warn"] if warn else st["quote"]
    p = Paragraph(inline(text), ParagraphStyle(
        style.name + "_in", parent=style, leftIndent=0, rightIndent=0,
        backColor=None, borderPadding=0, spaceBefore=0, spaceAfter=0))
    t = Table([[p]], colWidths=[avail_w], hAlign="LEFT")
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), RED_BG if warn else SKY_BG),
        ("LINEBEFORE", (0, 0), (0, -1), 2.6, RED if warn else SKY),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    return t


def _lookahead(raw, j):
    """Space to reserve after a heading so it is not left orphaned.

    Looks at what actually follows: a diagram or table needs more room held
    back than a paragraph does.
    """
    n = len(raw)
    while j < n and not raw[j].strip():
        j += 1
    if j >= n:
        return 18 * mm
    nxt = raw[j].strip()
    if nxt.startswith("```"):
        depth = 0
        k = j + 1
        while k < n and not raw[k].strip().startswith("```"):
            depth += 1
            k += 1
        return min(115 * mm, 16 * mm + depth * 3.4 * mm)
    if nxt.startswith("|"):
        return 46 * mm
    return 24 * mm


# ── Main conversion ─────────────────────────────────────────────────────────
def convert(md_path, pdf_path):
    st = styles()
    raw = open(md_path, encoding="utf-8").read().split("\n")

    # Header block: "# TITLE" / "## SUBTITLE" then metadata until the first rule.
    title = subtitle = ""
    meta, i = [], 0
    while i < len(raw):
        l = raw[i].strip()
        if l.startswith("# ") and not title:
            title = l[2:].strip()
        elif l.startswith("## ") and title and not subtitle:
            subtitle = l[3:].strip()
        elif l == "---" and title:
            i += 1
            break
        elif l and title:
            meta.append(re.sub(r"^>\s*", "", l))
        i += 1

    doc = Doc(pdf_path, title)
    aw = doc.width
    flow = cover(st, title, subtitle,
                 meta + [f"Rendered {date.today():%d %B %Y}"], aw)
    flow.append(CondPageBreak(1 * mm))

    body, first_h1 = [], True
    n = len(raw)
    while i < n:
        line = raw[i]
        s = line.strip()

        if not s:
            i += 1
            continue

        # fenced code / ASCII diagrams
        if s.startswith("```"):
            i += 1
            buf = []
            while i < n and not raw[i].strip().startswith("```"):
                buf.append(raw[i].rstrip())
                i += 1
            i += 1
            if buf:
                body.append(Spacer(1, 3))
                body.append(code_block(buf, st, aw))
                body.append(Spacer(1, 6))
            continue

        # tables
        if s.startswith("|") and i + 1 < n and re.match(
                r"^\|[\s:\-|]+\|?$", raw[i + 1].strip()):
            rows = [split_row(s)]
            i += 2
            while i < n and raw[i].strip().startswith("|"):
                rows.append(split_row(raw[i].strip()))
                i += 1
            body.append(Spacer(1, 3))
            body.append(build_table(rows, st, aw))
            body.append(Spacer(1, 7))
            continue

        # horizontal rule
        if re.match(r"^(---+|\*\*\*+)$", s):
            body.append(Spacer(1, 4))
            body.append(HRFlowable(width="100%", thickness=0.5, color=BORDER))
            body.append(Spacer(1, 4))
            i += 1
            continue

        # headings
        m = re.match(r"^(#{1,6})\s+(.*)$", s)
        if m:
            lvl, txt = len(m.group(1)), m.group(2).strip()
            if lvl == 1:
                if not first_h1:
                    body.append(CondPageBreak(88 * mm))
                    body.append(Spacer(1, 6))
                first_h1 = False
                body.append(Paragraph(inline(txt), st["h1"]))
            elif lvl == 2:
                body.append(CondPageBreak(_lookahead(raw, i + 1)))
                body.append(Paragraph(inline(txt), st["h2"]))
                body.append(HRFlowable(width="100%", thickness=0.5, color=SKY,
                                       spaceAfter=5))
            elif lvl == 3:
                body.append(CondPageBreak(_lookahead(raw, i + 1)))
                body.append(Paragraph(inline(txt), st["h3"]))
            else:
                body.append(Paragraph(inline(txt), st["h4"]))
            i += 1
            continue

        # blockquote (possibly multi-line)
        if s.startswith(">"):
            buf = []
            while i < n and raw[i].strip().startswith(">"):
                buf.append(re.sub(r"^>\s?", "", raw[i].strip()))
                i += 1
            text = "<br/>".join(x for x in buf if x != "")
            warn = bool(re.search(r"\u26a0|NEVER|HARD RULE|Never |not offered|"
                                  r"NOT OFFERED|does NOT", text))
            body.append(callout(text, st, aw, warn=warn))
            continue

        # lists
        m = re.match(r"^(\s*)([-*+]|\d+\.)\s+(.*)$", line)
        if m:
            items = []
            while i < n:
                mm_ = re.match(r"^(\s*)([-*+]|\d+\.)\s+(.*)$", raw[i])
                if not mm_:
                    if raw[i].strip() and raw[i].startswith("  ") and items:
                        items[-1] = (items[-1][0], items[-1][1],
                                     items[-1][2] + " " + raw[i].strip())
                        i += 1
                        continue
                    break
                indent = len(mm_.group(1)) // 2
                marker = mm_.group(2)
                items.append((indent, marker, mm_.group(3).strip()))
                i += 1
            for indent, marker, txt in items:
                bullet = marker if marker[0].isdigit() else (
                    "\u2022" if indent == 0 else "\u25e6")
                stl = ParagraphStyle(
                    f"li{indent}", parent=st["li"],
                    leftIndent=13 + indent * 12, bulletIndent=3 + indent * 12)
                body.append(Paragraph(inline(txt), stl, bulletText=bullet))
            body.append(Spacer(1, 4))
            continue

        # paragraph
        buf = [s]
        i += 1
        while i < n:
            nx = raw[i].strip()
            if (not nx or nx.startswith(("#", ">", "|", "```", "---"))
                    or re.match(r"^(\s*)([-*+]|\d+\.)\s+", raw[i])):
                break
            buf.append(nx)
            i += 1
        if len(buf) > 1 and all(b.startswith("**") for b in buf):
            body.append(Paragraph("<br/>".join(inline(b) for b in buf),
                                  st["body"]))
        else:
            body.append(Paragraph(inline(" ".join(buf)), st["body"]))

    flow += body
    doc.build(flow)

    def _first(canvas_doc):
        pass

    return pdf_path


if __name__ == "__main__":
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        sys.exit(1)
    for src in args:
        out = os.path.splitext(src)[0] + ".pdf"
        convert(src, out)
        size = os.path.getsize(out)
        print(f"  {os.path.basename(out):46s} {size / 1024:8.1f} KB")
