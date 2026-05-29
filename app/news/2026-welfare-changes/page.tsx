import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "2026년 달라지는 복지혜택 총정리 — 기초연금·실업급여·부모급여 인상",
  description:
    "2026년부터 기초연금 349,700원으로 인상, 실업급여 상한 68,100원, 기준 중위소득 4.5% 인상 등 달라지는 복지 정책을 한눈에 정리했습니다. 놓치면 손해 보는 변경 사항 확인하세요.",
  keywords: [
    "2026 복지혜택 변경", "2026 기초연금 인상", "2026 실업급여", "2026 기준 중위소득",
    "2026 부모급여", "2026 근로장려금", "복지혜택 달라진점", "2026 복지 정책",
  ],
  alternates: { canonical: "https://bokjiroad.com/news/2026-welfare-changes" },
  openGraph: {
    title: "2026년 달라지는 복지혜택 총정리 | 복지로드",
    description: "기초연금·실업급여·근로장려금 등 2026년 주요 변경 사항.",
    type: "article", locale: "ko_KR",
    url: "https://bokjiroad.com/news/2026-welfare-changes", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "2026년 달라지는 복지혜택 총정리",
  description: "2026년 기초연금·실업급여·근로장려금·부모급여 등 주요 복지 정책 변경 사항 총정리",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokjiroad.com" },
  url: "https://bokjiroad.com/news/2026-welfare-changes",
  datePublished: "2026-01-01",
  dateModified: "2026-05-28",
  inLanguage: "ko",
};

const CHANGES = [
  {
    category: "기초연금",
    icon: "👴",
    color: "border-cyan-200 bg-cyan-50",
    badgeColor: "bg-cyan-100 text-cyan-700",
    items: [
      { label: "최대 지급액 (단독)", before: "334,810원/월", after: "349,700원/월", up: true },
      { label: "최대 지급액 (부부)", before: "535,680원/월", after: "559,520원/월", up: true },
      { label: "선정기준액 (단독)", before: "213만원", after: "247만원", up: true },
      { label: "선정기준액 (부부)", before: "340.8만원", after: "395.2만원", up: true },
    ],
    note: "2026년부터 수급 기준이 완화되고 지급액이 인상됩니다. 기존에 탈락했던 분도 재신청을 검토해보세요.",
  },
  {
    category: "실업급여 (구직급여)",
    icon: "💼",
    color: "border-blue-200 bg-blue-50",
    badgeColor: "bg-blue-100 text-blue-700",
    items: [
      { label: "1일 지급 상한액", before: "66,000원", after: "68,100원", up: true },
      { label: "1일 지급 하한액", before: "64,192원", after: "66,240원", up: true },
    ],
    note: "최저임금 인상에 따라 실업급여 상한액·하한액이 모두 상향됩니다. 실직자에게 더 높은 지원금이 지급됩니다.",
  },
  {
    category: "근로장려금",
    icon: "💰",
    color: "border-emerald-200 bg-emerald-50",
    badgeColor: "bg-emerald-100 text-emerald-700",
    items: [
      { label: "단독 가구 최대 지급액", before: "165만원", after: "165만원", up: false },
      { label: "홑벌이 가구 최대", before: "285만원", after: "285만원", up: false },
      { label: "맞벌이 가구 최대", before: "330만원", after: "330만원", up: false },
      { label: "재산 기준", before: "2.4억 미만", after: "2.4억 미만", up: false },
    ],
    note: "2026년 근로장려금 지급액은 전년과 동일합니다. 단, 5월 정기신청을 반드시 챙겨야 합니다.",
  },
  {
    category: "기준 중위소득",
    icon: "📊",
    color: "border-amber-200 bg-amber-50",
    badgeColor: "bg-amber-100 text-amber-700",
    items: [
      { label: "1인 가구", before: "2,228,445원", after: "전년 대비 4.5% 인상", up: true },
      { label: "4인 가구", before: "5,729,913원", after: "전년 대비 4.5% 인상", up: true },
    ],
    note: "기준 중위소득 인상으로 생계·주거·의료·교육급여의 선정 기준도 함께 상향됩니다. 기존 미수급자도 재신청 가능합니다.",
  },
  {
    category: "부모급여",
    icon: "👶",
    color: "border-pink-200 bg-pink-50",
    badgeColor: "bg-pink-100 text-pink-700",
    items: [
      { label: "0세 가정 양육 (현금)", before: "1,000,000원/월", after: "1,000,000원/월", up: false },
      { label: "1세 가정 양육 (현금)", before: "500,000원/월", after: "500,000원/월", up: false },
    ],
    note: "부모급여 금액은 2025년과 동일하게 유지됩니다. 아동수당(만 8세 미만 월 10만원)도 유지됩니다.",
  },
];

export default function WelfareChanges2026Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link>
        <span>/</span>
        <Link href="/news" className="hover:text-emerald-600">복지 뉴스</Link>
        <span>/</span>
        <span className="text-gray-700">2026년 변경사항</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">정책 변경</span>
        <span className="text-xs text-gray-400 ml-2">2026. 01. 01 · 읽는 시간 약 6분</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          2026년 달라지는 복지혜택 총정리<br />
          <span className="text-lg font-normal text-gray-500">기초연금·실업급여·기준 중위소득 변경 한눈에</span>
        </h1>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6 text-sm text-gray-700">
        <p className="font-bold text-emerald-800 mb-1">📌 핵심 요약</p>
        <ul className="space-y-1">
          <li>• 기초연금: 단독 가구 최대 <strong>349,700원/월</strong>으로 인상 (전년 334,810원)</li>
          <li>• 실업급여: 1일 상한액 <strong>68,100원</strong>으로 인상 (전년 66,000원)</li>
          <li>• 기준 중위소득: 전년 대비 <strong>4.5% 인상</strong> → 수급 기준 완화</li>
          <li>• 부모급여·근로장려금: 전년과 동일 유지</li>
        </ul>
      </div>

      <AdSlotHorizontal slot="8001000001" />

      <p className="text-gray-700 leading-relaxed mb-6 mt-6">
        새해가 시작되면 정부 복지혜택의 지급 금액과 수급 기준이 조정됩니다. 2026년에는 기초연금 인상, 실업급여 상한액 상향, 기준 중위소득 인상 등 여러 가지 변화가 있습니다. 특히 기준 중위소득이 4.5% 인상되면서 기초생활수급 대상 범위가 넓어져, 그동안 수급 자격이 아깝게 탈락했던 분들도 재신청을 검토해볼 만합니다.
      </p>

      {CHANGES.map((change) => (
        <section key={change.category} className={`mb-8 rounded-2xl border p-5 ${change.color}`}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">{change.icon}</span>
            <h2 className="text-lg font-bold text-gray-800">{change.category}</h2>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${change.badgeColor}`}>2026년 변경</span>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-200 mb-3">
            <div className="grid grid-cols-3 bg-gray-800 text-white text-xs font-bold">
              <div className="p-2">항목</div>
              <div className="p-2 text-center text-gray-300">2025년</div>
              <div className="p-2 text-center text-yellow-300">2026년</div>
            </div>
            {change.items.map((item, i) => (
              <div key={item.label} className={`grid grid-cols-3 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="p-2 text-gray-700 font-medium">{item.label}</div>
                <div className="p-2 text-center text-gray-500">{item.before}</div>
                <div className={`p-2 text-center font-bold ${item.up ? "text-emerald-700" : "text-gray-600"}`}>
                  {item.up && "▲ "}{item.after}
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-700 bg-white rounded-xl px-4 py-3">{change.note}</p>
        </section>
      ))}

      <AdSlotHorizontal slot="8001000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">기준 중위소득 인상의 의미</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          기준 중위소득은 생계급여(32%)·의료급여(40%)·주거급여(48%)·교육급여(50%) 등 기초생활보장 급여의 선정 기준이 됩니다. 2026년에는 전년 대비 4.5% 인상되었기 때문에, 동일한 소득과 재산을 가진 가구라도 수급 자격을 새로 얻을 수 있습니다.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          예를 들어 1인 가구의 경우 생계급여 기준 소득인정액이 약 68만원에서 71만원으로 올라갑니다. 지난해 소득이 기준을 조금 초과해 탈락했다면, 올해는 충족될 수 있으니 꼭 재신청해 보시기 바랍니다.
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm">
          <p className="font-bold text-yellow-800 mb-1">💡 꼭 확인하세요</p>
          <p className="text-gray-700">매년 1월에 기준 중위소득이 발표되면, 그에 맞게 복지혜택의 수급 기준도 바뀝니다. 가구 소득·재산 변화가 없더라도 기준이 완화됐을 수 있으니, 과거에 신청했다가 탈락한 분들도 <strong>매년 다시 신청</strong>하는 것을 권장합니다.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">2026년 새롭게 챙겨야 할 혜택</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          지급액 인상 외에도 2026년부터 달라지는 부분이 있습니다. 특히 <strong>근로장려금 반기신청</strong>은 9월에도 신청할 수 있어 연말에 생활비가 필요한 분들에게 유리합니다. 3월에 상반기분을 먼저 신청하고 9월에 하반기분을 추가로 신청하면 연간 지급액을 분산해 받을 수 있습니다.
        </p>
        <p className="text-gray-700 leading-relaxed">
          또한 실업급여를 수급 중인 분이라면, 1일 지급액 상한이 오른 만큼 기존 계산보다 더 많은 금액을 받게 됩니다. 고용센터에 문의하거나 복지로드 계산기를 통해 예상 수령액을 다시 확인해보세요.
        </p>
      </section>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mb-6">
        <p className="font-bold text-emerald-800 mb-3">관련 서비스</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/calculator" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">수령액 계산기 →</Link>
          <Link href="/guides" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">신청 가이드 보기</Link>
          <Link href="/news" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 뉴스 목록</Link>
        </div>
      </div>

      <p className="text-xs text-gray-400 leading-relaxed">
        본 내용은 정보 제공 목적으로 작성되었습니다. 정확한 2026년 기준은 보건복지부, 고용노동부 공식 발표 또는{" "}
        <a href="https://www.bokjiro.go.kr" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">복지로(bokjiro.go.kr)</a>에서 확인하세요.
      </p>
    </article>
  );
}
