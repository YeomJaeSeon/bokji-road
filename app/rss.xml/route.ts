import { NextResponse } from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bokji-road.vercel.app";

const ITEMS = [
  {
    title: "2026년 달라지는 복지혜택 총정리 — 기초연금·실업급여·부모급여 인상",
    link: `${SITE_URL}/news/2026-welfare-changes`,
    description: "2026년부터 기초연금 349,700원으로 인상, 실업급여 상한 68,100원, 기준 중위소득 4.5% 인상 등 달라지는 복지 정책을 한눈에 정리했습니다.",
    pubDate: "Wed, 01 Jan 2026 09:00:00 +0900",
  },
  {
    title: "복지로(bokjiro.go.kr) 사용 방법 — 온라인으로 복지 신청하기",
    link: `${SITE_URL}/news/how-to-use-bokjiro`,
    description: "복지로 사이트에서 복지혜택을 직접 신청하는 방법을 단계별로 안내합니다. 주민센터 방문 없이 집에서 신청하세요.",
    pubDate: "Sun, 15 Feb 2026 09:00:00 +0900",
  },
  {
    title: "2026 청년 복지혜택 완전 가이드 — 월세·취업·적금·생활비 지원 총정리",
    link: `${SITE_URL}/guides/youth-guide`,
    description: "만 19~34세 청년이 받을 수 있는 복지혜택을 총정리. 청년도약계좌, 청년월세 특별지원, 국민취업지원제도 등 2026년 기준 안내.",
    pubDate: "Thu, 01 May 2026 09:00:00 +0900",
  },
  {
    title: "실업급여 신청 완벽 가이드 2026 — 자격조건·수령액·신청방법",
    link: `${SITE_URL}/guides/unemployment-guide`,
    description: "실업급여 자격 조건, 수령액 계산, 신청 단계, 주의사항까지 한 번에. 자발적 퇴직도 받을 수 있는 경우 포함.",
    pubDate: "Thu, 01 May 2026 09:00:00 +0900",
  },
  {
    title: "기초연금 신청 자격과 방법 완벽 가이드 2026 — 소득인정액·감액기준",
    link: `${SITE_URL}/guides/basic-pension-guide`,
    description: "2026년 기초연금 수급 자격, 소득인정액 계산, 신청 절차를 단계별로 안내합니다. 선정기준액 247만원 기준.",
    pubDate: "Thu, 01 May 2026 09:00:00 +0900",
  },
  {
    title: "부모급여·아동수당 신청 가이드 2026 — 0세 100만원·1세 50만원",
    link: `${SITE_URL}/guides/parental-allowance-guide`,
    description: "부모급여와 아동수당 지급 금액, 신청 방법, 어린이집 이용 시 차이점을 안내합니다.",
    pubDate: "Thu, 01 May 2026 09:00:00 +0900",
  },
  {
    title: "근로장려금·자녀장려금 신청 완벽 가이드 2026",
    link: `${SITE_URL}/guides/eitc-guide`,
    description: "5월 정기신청·9월 반기신청 방법, 가구 유형별 지급액, 자녀장려금 동시 신청까지 총정리.",
    pubDate: "Thu, 01 May 2026 09:00:00 +0900",
  },
  {
    title: "기초생활수급자 신청 방법 완벽 가이드 2026 — 생계·주거·의료·교육급여",
    link: `${SITE_URL}/guides/basic-living-guide`,
    description: "기초생활수급자 신청 자격, 소득인정액 계산, 4대 급여 지급 금액, 신청 방법을 단계별로 안내합니다.",
    pubDate: "Thu, 01 May 2026 09:00:00 +0900",
  },
];

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>복지로드 — 복지혜택 신청 가이드 &amp; 뉴스</title>
    <link>${SITE_URL}</link>
    <description>임신·출산부터 노년까지 생애주기별 정부 복지혜택 안내. 신청 방법, 자격 조건, 최신 정책 변경 정보를 제공합니다.</description>
    <language>ko</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${ITEMS.map((item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${item.pubDate}</pubDate>
    </item>`).join("")}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
