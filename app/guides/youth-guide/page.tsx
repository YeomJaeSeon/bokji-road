import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "2026 청년 복지혜택 완전 가이드 — 월세·취업·적금·생활비 지원 총정리",
  description:
    "만 19~34세 청년이 받을 수 있는 복지혜택을 총정리했습니다. 청년도약계좌, 청년월세 특별지원, 국민취업지원제도, 근로장려금, 청년내일채움공제 등 2026년 기준 안내.",
  keywords: [
    "청년 복지혜택", "청년 지원금", "청년도약계좌", "청년월세 지원",
    "국민취업지원제도", "청년 취업 지원", "청년 생활비 지원", "2026 청년 혜택",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/youth-guide" },
  openGraph: {
    title: "2026 청년 복지혜택 완전 가이드 | 복지로드",
    description: "청년도약계좌, 월세 지원, 취업 지원, 생활비까지 청년 혜택 총정리.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/youth-guide", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "2026 청년 복지혜택 완전 가이드",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/youth-guide",
  inLanguage: "ko", datePublished: "2026-05-01", dateModified: "2026-05-28",
};

const BENEFITS = [
  {
    category: "자산 형성",
    icon: "💰",
    color: "bg-emerald-50 border-emerald-200",
    items: [
      {
        name: "청년도약계좌",
        target: "만 19~34세, 개인 소득 7,500만원 이하",
        amount: "5년 만기 최대 5,000만원 (월 최대 70만원 + 정부기여금)",
        link: "/compare/youth-savings",
        linkLabel: "자세히 보기",
      },
      {
        name: "청년 내일저축계좌",
        target: "만 19~34세, 기준 중위소득 100% 이하 근로·사업소득자",
        amount: "3년 만기 최대 1,440만원 (본인 월 10만원 + 정부 10~30만원)",
        link: "/#benefits",
        linkLabel: "혜택 확인",
      },
    ],
  },
  {
    category: "주거 지원",
    icon: "🏠",
    color: "bg-blue-50 border-blue-200",
    items: [
      {
        name: "청년 월세 특별지원",
        target: "만 19~34세 독립 거주 청년, 소득·재산 기준 충족",
        amount: "월 최대 20만원 × 12개월 (연 최대 240만원)",
        link: "/#benefits",
        linkLabel: "혜택 확인",
      },
      {
        name: "청년 주거급여 분리지급",
        target: "주거급여 수급 가구의 독립 거주 미혼 자녀 (만 19~30세)",
        amount: "지역·가구원 수에 따른 기준 임대료 지원",
        link: "/#benefits",
        linkLabel: "혜택 확인",
      },
    ],
  },
  {
    category: "취업·훈련 지원",
    icon: "💼",
    color: "bg-amber-50 border-amber-200",
    items: [
      {
        name: "국민취업지원제도 (1유형)",
        target: "15~69세 저소득 구직자 (취업 경험 기준)",
        amount: "구직촉진수당 월 50만원 × 최대 6개월 + 취업 지원 서비스",
        link: "/#benefits",
        linkLabel: "혜택 확인",
      },
      {
        name: "청년 내일채움공제",
        target: "중소·중견기업 취업 청년 (만 15~34세)",
        amount: "2년 만기 최대 1,200만원 (청년 400만원 + 기업·정부 800만원)",
        link: "/#benefits",
        linkLabel: "혜택 확인",
      },
      {
        name: "국민내일배움카드",
        target: "취업 준비 중인 국민 누구나 (재직자 포함)",
        amount: "최대 500만원 직업훈련비 지원 (본인 부담 15~55%)",
        link: "/#benefits",
        linkLabel: "혜택 확인",
      },
    ],
  },
  {
    category: "생활비·소득 지원",
    icon: "📑",
    color: "bg-rose-50 border-rose-200",
    items: [
      {
        name: "근로장려금 (단독 가구)",
        target: "연 소득 2,200만원 미만 단독 가구",
        amount: "연 최대 165만원 (5월 정기신청)",
        link: "/guides/eitc-guide",
        linkLabel: "신청 가이드",
      },
      {
        name: "청년 교통비 지원 (지자체별)",
        target: "지역별 다름 (서울·경기 등 청년 교통비 지원)",
        amount: "월 최대 3~7만원 교통비 환급 (지역별 상이)",
        link: "/#benefits",
        linkLabel: "혜택 확인",
      },
    ],
  },
];

export default function YouthGuidePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">청년 혜택 총정리</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-lime-100 text-lime-700 px-2.5 py-1 rounded-full">청년</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          2026 청년 복지혜택 완전 가이드<br />
          <span className="text-lg font-normal text-gray-500">월세·취업·적금·생활비 지원 한 번에 총정리</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 5월 · 읽는 시간 약 7분</p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        대한민국 청년(만 19~34세)을 위한 정부 복지혜택은 생각보다 훨씬 다양합니다. 취업 준비 중이든, 사회초년생이든, 직장인이든 — 본인의 상황에 맞는 혜택을 받을 수 있습니다. 많은 청년들이 신청 방법을 몰라서, 또는 자신이 해당된다는 것 자체를 몰라서 혜택을 놓치고 있습니다.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        이 가이드에서는 <strong>2026년 기준 청년이 받을 수 있는 주요 복지혜택</strong>을 분야별로 정리했습니다. 자산 형성, 주거 지원, 취업·훈련 지원, 생활비 지원 순으로 확인해보세요.
      </p>

      <AdSlotHorizontal slot="7006000001" />

      <div className="bg-lime-50 border border-lime-200 rounded-2xl p-4 mb-8 mt-6">
        <p className="font-bold text-lime-800 mb-2">✅ 청년 혜택 체크리스트 — 나는 몇 개 받고 있나요?</p>
        <div className="grid grid-cols-2 gap-1 text-sm text-gray-700">
          {["청년도약계좌 가입", "청년 월세 지원 신청", "국민내일배움카드 발급", "국민취업지원제도 신청", "근로장려금 5월 신청", "청년 내일채움공제"].map((item) => (
            <p key={item} className="flex items-center gap-1.5">
              <span className="w-4 h-4 border-2 border-lime-400 rounded flex-shrink-0 inline-block" />
              {item}
            </p>
          ))}
        </div>
      </div>

      {BENEFITS.map((section) => (
        <section key={section.category} className="mb-8">
          <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-4">
            <span>{section.icon}</span>{section.category}
          </h2>
          <div className="space-y-4">
            {section.items.map((item) => (
              <div key={item.name} className={`rounded-2xl border p-5 ${section.color}`}>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-gray-800">{item.name}</h3>
                  <Link href={item.link} className="flex-shrink-0 text-xs text-emerald-600 border border-emerald-300 px-2.5 py-1 rounded-lg hover:bg-emerald-50 font-semibold transition-colors">
                    {item.linkLabel} →
                  </Link>
                </div>
                <div className="space-y-1.5 text-sm">
                  <p><span className="text-xs font-semibold text-gray-500 mr-1">대상</span>{item.target}</p>
                  <p><span className="text-xs font-semibold text-emerald-600 mr-1">지원</span><strong>{item.amount}</strong></p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <AdSlotHorizontal slot="7006000002" />

      <section className="mb-8 mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">청년 혜택 신청 우선순위</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          청년 복지혜택은 종류가 많아 어디서부터 시작해야 할지 막막할 수 있습니다. 아래 순서로 확인해보세요.
        </p>
        <div className="space-y-3">
          {[
            { rank: 1, title: "청년도약계좌 먼저 가입", desc: "소득 기준만 맞다면 가장 먼저 가입해야 할 혜택입니다. 5년 만기라 지금 가입할수록 유리합니다. 은행 앱에서 신청 가능합니다." },
            { rank: 2, title: "근로장려금 5월에 꼭 신청", desc: "소득이 있다면 해당 여부를 확인하세요. 연소득 2,200만원 미만 단독 가구라면 최대 165만원을 받을 수 있습니다." },
            { rank: 3, title: "청년 월세 지원 확인", desc: "독립해서 월세로 살고 있다면 청년 월세 특별지원을 신청하세요. 매년 신청 기간이 있으므로 놓치지 마세요." },
            { rank: 4, title: "국민내일배움카드 발급", desc: "취업 준비 중이거나 스킬업이 필요하다면 최대 500만원의 직업훈련 지원을 받을 수 있습니다." },
          ].map((item) => (
            <div key={item.rank} className="flex gap-3 bg-white border border-gray-100 rounded-xl p-4">
              <div className="w-7 h-7 bg-lime-500 text-white rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0">{item.rank}</div>
              <div>
                <p className="font-bold text-gray-800 text-sm mb-0.5">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
        <p className="font-bold text-emerald-800 mb-3">관련 서비스</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/#benefits" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">전체 청년 혜택 보기 →</Link>
          <Link href="/compare/youth-savings" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">청년도약계좌 비교</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">자세한 혜택 조건은 <a href="tel:129" className="text-emerald-600">☎ 129</a> 또는 <a href="https://www.bokjiro.go.kr" target="_blank" rel="noopener noreferrer" className="text-emerald-600">복지로</a>에서 확인하세요.</p>
    </article>
  );
}
