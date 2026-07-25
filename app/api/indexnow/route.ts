import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const trigger = searchParams.get("trigger");

  if (trigger !== "auto" && trigger !== "manual") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const host = "www.klservisrumah.my";
    const key = "e7492c813de342fca1deeb6b05df8445";
    const keyLocation = `https://${host}/${key}.txt`;

    const payload = {
      host: host,
      key: key,
      // Required by the IndexNow spec so Bing/Yandex can verify key ownership.
      // It was computed but never sent, which makes submissions fail verification.
      keyLocation: keyLocation,
      urlList: [
        `https://${host}/`,
        `https://${host}/services`,
        `https://${host}/areas`,
        `https://${host}/blog`,
        `https://${host}/pricing`,
        `https://${host}/problems`,
        `https://${host}/faq`,
        `https://${host}/contact`
      ]
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      return NextResponse.json({ success: true, message: "IndexNow Ping Sent to Bing/Yahoo!" });
    } else {
      return NextResponse.json({ success: false, error: await response.text() });
    }
  } catch (error: any) {
    return NextResponse.json({ error: "Failed to send IndexNow ping", details: error.message }, { status: 500 });
  }
}
