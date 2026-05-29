import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "기초연금 vs 노령연금(국민연금) 차이점 비교 | 복지로드",
  description: "기초연금과 노령연금(국민연금)의 수급 자격, 지급 금액, 신청 방법 차이를 쉽게 비교해보세요. 두 연금을 동시에 받을 수 있는지도 확인하세요.",
  keywords: [
    "기초연금 vs 노령연금", "기초연금 국민연금 차이", "기초연금 조건", "노령연금 수령액",
    "기초연금 동시수령", "기초연금 신청방법", "2026 기초연금", "연금 비교",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/compare/pension-types" },
  openGraph: {
    title: "기초연금 vs 노령연금(국민연금) 비교 | 복지로드",
    description: "수급 조건·금액·동시수령 여부를 한눈에 비교해보세요.",
    type: "article",
    locale: "ko_KR",
    url: "https://bokji-road.vercel.app/compare/pension-types",
    siteName: "복지로드",
  },
};

const ITEMS = [
  { category: "공식 명칭",       a: "기초연금",                     b: "노령연금 (국민연금)" },
  { category: "운영 주체",       a: "보건복지부",                   b: "국민연금공단" },
  { category: "재원",            a: "국가·지자체 세금",             b: "가입자 보험료 + 국가 보조" },
  { category: "수급 나이",       a: "만 65세 이상",                 b: "출생연도별 61~65세" },
  { category: "가입 조건",       a: "없음 (납부 이력 불필요)",      b: "10년 이상 납부",         highlight: "a" },
  { category: "소득·재산 조건",  a: "소득하위 70% 이하",           b: "없음 (납부 이력만)",      highlight: "b" },
  { category: "2024년 기준 최대 월수령액", a: "단독 334,810원\n부부 535,680원", b: "납부 금액·기간에 따라 다름\n평균 약 62만원" },
  { category: "동시 수령",       a: "노령연금과 동시 수령 가능\n(단, 연금액에 따라 감액)", b: "기초연금과 동시 수령 가능", highlight: "a" },
  { category: "감액 규정",       a: "국민연금 수령액이 높으면 기초연금 감액\n(최대 50% 감액)", b: "기초연금 수령 시 감액 없음" },
  { category: "신청처",          a: "주민센터, 복지로, 국민연금공단", b: "국민연금공단, 복지로" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "기초연금 vs 노령연금(국민연금) 차이점 비교",
  description: "기초연금과 노령연금의 수급 자격, 지급 금액, 동시 수령 여부 비교",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/compare/pension-types",
  inLanguage: "ko",
};

export default function PensionTypesComparePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/" className="text-sm text-emerald-600 hover:text-emerald-700">← 홈으로</Link>

      <h1 className="text-2xl font-extrabold text-gray-900 mt-3 mb-1">
        기초연금 vs 노령연금(국민연금) 비교
      </h1>
      <p className="text-sm text-gray-500 mb-6">헷갈리는 두 연금의 차이와 동시 수령 여부를 쉽게 설명해드려요.</p>

      <AdSlotHorizontal slot="5000000010" />

      {/* 요약 카드 */}
      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="bg-cyan-50 border-2 border-cyan-300 rounded-2xl p-5">
          <div className="text-2xl mb-2">🏛️</div>
          <h2 className="text-lg font-extrabold text-cyan-800 mb-1">기초연금</h2>
          <p className="text-sm text-cyan-700">가입 이력 없어도 받을 수 있는<br />노후 기본 소득 보장</p>
          <div className="mt-3 bg-cyan-100 rounded-xl p-3 text-center">
            <p className="text-xs text-cyan-600">2024 기준 최대 (단독)</p>
            <p className="text-xl font-extrabold text-cyan-700">월 334,810원</p>
          </div>
        </div>
        <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-5">
          <div className="text-2xl mb-2">🏦</div>
          <h2 className="text-lg font-extrabold text-blue-800 mb-1">노령연금 (국민연금)</h2>
          <p className="text-sm text-blue-700">납부 기간·금액에 따라 수령<br />평생 지급하는 공적 연금</p>
          <div className="mt-3 bg-blue-100 rounded-xl p-3 text-center">
            <p className="text-xs text-blue-600">수급자 평균</p>
            <p className="text-xl font-extrabold text-blue-700">월 약 62만원</p>
          </div>
        </div>
      </div>

      {/* 비교 테이블 */}
      <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
        <div className="grid grid-cols-3 bg-gray-800 text-white text-sm font-bold">
          <div className="p-3">항목</div>
          <div className="p-3 text-cyan-300">기초연금</div>
          <div className="p-3 text-blue-300">노령연금</div>
        </div>
        {ITEMS.map((row, i) => (
          <div key={i} className={`grid grid-cols-3 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <div className="p-3 font-semibold text-gray-700">{row.category}</div>
            <div className={`p-3 whitespace-pre-line ${row.highlight === "a" ? "text-emerald-700 font-semibold" : "text-gray-600"}`}>{row.a}</div>
            <div className={`p-3 whitespace-pre-line ${row.highlight === "b" ? "text-emerald-700 font-semibold" : "text-gray-600"}`}>{row.b}</div>
          </div>
        ))}
      </div>

      <AdSlotHorizontal slot="5000000011" />

      {/* 핵심 정리 */}
      <div className="space-y-4 mt-6">
        <h2 className="text-lg font-bold text-gray-800">핵심 정리</h2>

        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-sm text-gray-700 space-y-2">
          <p className="font-semibold text-emerald-800">✅ 두 연금 동시에 받을 수 있나요?</p>
          <p>네, 가능합니다. 단, 국민연금(노령연금) 수령액이 일정 금액 이상이면 기초연금이 최대 50%까지 감액됩니다.</p>
          <p className="text-xs text-gray-500">2024년 기준: 노령연금 월 502,210원 초과 시 감액 시작</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-gray-700 space-y-2">
          <p className="font-semibold text-blue-800">💡 국민연금을 안 냈어도 기초연금 받을 수 있나요?</p>
          <p>네. 기초연금은 국민연금 납부 이력과 무관하게 만 65세 이상, 소득하위 70% 이하이면 신청 가능합니다.</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 text-sm text-gray-700">
          <p className="font-semibold text-yellow-800">⚠️ 주의: '기초노령연금'은 구 명칭</p>
          <p>과거에 '기초노령연금'이라 불렸지만 2014년에 '기초연금'으로 개편되었습니다. 동일한 제도입니다.</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Link href="/benefits/basic-pension"
          className="bg-cyan-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-cyan-700 transition-colors text-sm">
          기초연금 상세 보기 →
        </Link>
        <Link href="/calculator"
          className="bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors text-sm">
          연금 수령액 계산기 →
        </Link>
      </div>
    </div>
  );
}
