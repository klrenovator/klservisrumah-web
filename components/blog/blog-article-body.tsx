import React from "react";
import Link from "next/link";

type InlineToken = string | React.ReactNode;

function renderInline(text: string, keyPrefix: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  const pattern = /(\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|\*([^*]+)\*)/g;
  let cursor = 0;
  let match: RegExpExecArray | null;
  let index = 0;
  while ((match = pattern.exec(text))) {
    if (match.index > cursor) tokens.push(text.slice(cursor, match.index));
    const key = `${keyPrefix}-${index++}`;
    if (match[2] && match[3]) {
      const href = match[3];
      tokens.push(
        href.startsWith("/") ? (
          <Link key={key} href={href} className="font-bold text-[#0284C7] underline decoration-sky-200 underline-offset-2 hover:text-[#075985]">
            {match[2]}
          </Link>
        ) : (
          <a key={key} href={href} className="font-bold text-[#0284C7] underline decoration-sky-200 underline-offset-2" rel="nofollow noopener noreferrer">
            {match[2]}
          </a>
        )
      );
    } else if (match[4]) {
      tokens.push(<strong key={key} className="font-extrabold text-slate-700">{match[4]}</strong>);
    } else if (match[5]) {
      tokens.push(<code key={key} className="rounded bg-slate-100 px-1.5 py-0.5 text-[0.9em] text-slate-700">{match[5]}</code>);
    } else if (match[6]) {
      tokens.push(<em key={key}>{match[6]}</em>);
    }
    cursor = pattern.lastIndex;
  }
  if (cursor < text.length) tokens.push(text.slice(cursor));
  return tokens;
}

function cells(line: string) {
  return line.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
}

function isTableDivider(line: string) {
  return cells(line).every((cell) => /^:?-{3,}:?$/.test(cell));
}

/**
 * Small, dependency-free Markdown renderer for the trusted production article
 * store. It creates semantic React elements without injecting raw HTML.
 */
export function BlogArticleBody({ content }: { content: string }) {
  const lines = content.replace(/\r\n?/g, "\n").split("\n");
  const blocks: React.ReactNode[] = [];
  let cursor = 0;
  let block = 0;

  while (cursor < lines.length) {
    const line = lines[cursor].trim();
    if (!line) {
      cursor += 1;
      continue;
    }

    const heading = line.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const className = level === 2
        ? "mt-9 text-2xl font-extrabold tracking-tight text-[#075985] sm:text-3xl"
        : "mt-6 text-xl font-extrabold tracking-tight text-[#075985]";
      const children = renderInline(heading[2], `heading-${block}`);
      blocks.push(level === 2
        ? <h2 key={block++} className={className}>{children}</h2>
        : level === 3
          ? <h3 key={block++} className={className}>{children}</h3>
          : <h4 key={block++} className={className}>{children}</h4>);
      cursor += 1;
      continue;
    }

    if (/^(-{3,}|\*{3,})$/.test(line)) {
      blocks.push(<hr key={block++} className="my-4 border-slate-200" />);
      cursor += 1;
      continue;
    }

    if (line.startsWith("|") && cursor + 1 < lines.length && isTableDivider(lines[cursor + 1])) {
      const tableLines = [line];
      cursor += 2;
      while (cursor < lines.length && lines[cursor].trim().startsWith("|")) {
        tableLines.push(lines[cursor].trim());
        cursor += 1;
      }
      const [header, ...rows] = tableLines.map(cells);
      blocks.push(
        <div key={block++} className="my-3 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <thead className="bg-sky-50 text-[#075985]">
              <tr>{header.map((cell, index) => <th key={index} className="border-b border-slate-200 px-4 py-3 font-extrabold">{renderInline(cell, `th-${block}-${index}`)}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-slate-100 last:border-0 odd:bg-white even:bg-slate-50/60">
                  {row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-3 align-top">{renderInline(cell, `td-${block}-${rowIndex}-${cellIndex}`)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    const unordered = /^[-*]\s+/.test(line);
    const ordered = /^\d+\.\s+/.test(line);
    if (unordered || ordered) {
      const items: string[] = [];
      const itemPattern = ordered ? /^\d+\.\s+(.+)$/ : /^[-*]\s+(.+)$/;
      while (cursor < lines.length) {
        const item = lines[cursor].trim().match(itemPattern);
        if (!item) break;
        items.push(item[1]);
        cursor += 1;
      }
      const listItems = items.map((item, index) => <li key={index}>{renderInline(item, `li-${block}-${index}`)}</li>);
      blocks.push(ordered
        ? <ol key={block++} className="ml-6 list-decimal space-y-2 marker:font-bold marker:text-[#0284C7]">{listItems}</ol>
        : <ul key={block++} className="ml-6 list-disc space-y-2 marker:text-[#0284C7]">{listItems}</ul>);
      continue;
    }

    const paragraph: string[] = [];
    while (cursor < lines.length) {
      const candidate = lines[cursor].trim();
      if (!candidate) break;
      if (/^(#{2,4})\s+/.test(candidate) || /^(-{3,}|\*{3,})$/.test(candidate) || /^[-*]\s+/.test(candidate) || /^\d+\.\s+/.test(candidate)) break;
      if (candidate.startsWith("|") && cursor + 1 < lines.length && isTableDivider(lines[cursor + 1])) break;
      paragraph.push(candidate);
      cursor += 1;
    }
    if (paragraph.length) {
      blocks.push(<p key={block++} className="leading-7">{renderInline(paragraph.join(" "), `p-${block}`)}</p>);
    } else {
      cursor += 1;
    }
  }

  return <div className="space-y-5">{blocks}</div>;
}
