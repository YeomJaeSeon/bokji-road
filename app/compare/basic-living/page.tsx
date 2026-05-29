import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "기초생활수급자 생계급여 vs 주거급여 vs 의료급여 vs 교육급여 비교 | 복지로드",
  description:
    "기초생활수급자 4대 급여(생계·주거·의료·교육급여)의 수급 기준, 지급 금액, 신청 방법을 한눈에 비교해보세요. 기준 중위소득별 수급 자격도 확인하세요.",
  keywords: [
    "기초생활수급자", "생계급여", "주거급여", "의료급여", "교육급여",
    "기초생활수급 조건", "기준 중위소득", "생계급여 신청", "주거급여 신청",
    "기초생활보장제도", "2026 기초생활수급", "차상위계층",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/compare/basic-living" },
  openGraph: {
    title: "기초생활수급 4대 급여 비교 | 복지로드",
    description: "생계·주거·의료·교육급여 수급 기준과 지급 금액을 한눈에 비교하세요.",
    type: "article",
    locale: "ko_KR",
    url: "https://bokji-road.vercel.app/compare/basic-living",
    siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "기초생활수급자 4대 급여 비교 — 생계·주거·의료·교육급여",
  description: "기초생활수급자 4대 급여의 수급 기준, 지급 금액, 신청 방법 비교",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/compare/basic-living",
  inLanguage: "ko",
};

const BENEFITS = [
  {
    name: "생계급여",
    icon: "🍚",
    color: "bg-red-50 border-red-300 text-red-800",
    badgeColor: "bg-red-100 text-red-700",
    standard: "기준 중위소득 32% 이하",
    amount: "선정기준액 – 소득인정액\n(1인 가구 최대 약 713,102원/월)",
    method: "현금 지급 (매월)",
    apply: "주민센터, 복지로",
    note: "식비·생활비 등 기본 생활 지원",
  },
  {
    name: "주거급여",
    icon: "🏠",
    color: "bg-blue-50 border-blue-300 text-blue-800",
    badgeColor: "bg-blue-100 text-blue-700",
    standard: "기준 중위소득 48% 이하",
    amount: "임차가구: 지역별 기준임대료 지원\n자가가구: 주택 수선유지비 지원",
    method: "임차료 직접 지급 또는 수선비용",
    apply: "주민센터, 복지로, LH 마이홈",
    note: "임차료·수선비를 직접 지원, 소득 가장 넓은 범위",
  },
  {
    name: "의료급여",
    icon: "🏥",
    color: "bg-emerald-50 border-emerald-300 text-emerald-800",
    badgeColor: "bg-emerald-100 text-emerald-700",
    standard: "기준 중위소득 40% 이하",
    amount: "1종: 입원 0원, 외래 1,000~2,000원\n2종: 입원 10%, 외래 15%",
    method: "의료기관 이용 시 본인부담 경감",
    apply: "주민센터, 복지로",
    note: "1종(근로 불가)·2종(근로 가능) 구분 적용",
  },
  {
    name: "교육급여",
    icon: "📚",
    color: "bg-yellow-50 border-yellow-300 text-yellow-800",
    badgeColor: "bg-yellow-100 text-yellow-700",
    standard: "기준 중위소득 50% 이하",
    amount: "초등 487,000원/년\n중등 588,000원/년\n고등 554,000원/년 + 교과서·수업료",
    method: "교육활동지원비 (연 1회)",
    apply: "교육비 원클릭 신청(edu.gov.kr)",
    note: "4대 급여 중 소득 기준이 가장 넓음",
  },
];

const ROWS = [
  { label: "소득 기준", key: "standard" as const },
  { label: "지원 내용", key: "amount" as const },
  { label: "지급 방법", key: "method" as const },
  { label: "신청처", key: "apply" as const },
];

const INCOME_TABLE = [
  { size: "1인", mid: "2,228,445", p32: "712,000", p40: "891,000", p48: "1,070,000", p50: "1,114,000" },
  { size: "2인", mid: "3,682,609", p32: "1,178,000", p40: "1,473,000", p48: "1,768,000", p50: "1,841,000" },
  { size: "3인", mid: "4,714,657", p32: "1,509,000", p40: "1,886,000", p48: "2,263,000", p50: "2,357,000" },
  { size: "4인", mid: "5,729,913", p32: "1,834,000", p40: "2,292,000", p48: "2,750,000", p50: "2,865,000" },
];

export default function BasicLivingComparePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/" className="text-sm text-emerald-600 hover:text-emerald-700">← 홈으로</Link>

      <h1 className="text-2xl font-extrabold text-gray-900 mt-3 mb-1">
        기초생활수급 4대 급여 비교
      </h1>
      <p className="text-sm text-gray-500 mb-6">생계·주거·의료·교육급여의 조건과 금액을 한눈에 확인하세요.</p>

      <AdSlotHorizontal slot="6000000001" />

      {/* 요약 카드 4개 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
        {BENEFITS.map((b) => (
          <div key={b.name} className={`rounded-2xl border-2 p-4 ${b.color}`}>
            <div className="text-2xl mb-1">{b.icon}</div>
            <p className="font-extrabold text-sm">{b.name}</p>
            <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${b.badgeColor}`}>
              {b.standard.split(" ")[2]}
            </span>
          </div>
        ))}
      </div>

      {/* 비교 테이블 */}
      <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
        <div className="grid grid-cols-5 bg-gray-800 text-white text-xs font-bold">
          <div className="p-3">항목</div>
          {BENEFITS.map((b) => (
            <div key={b.name} className="p-3">{b.icon} {b.name}</div>
          ))}
        </div>
        {ROWS.map((row, i) => (
          <div key={row.label} className={`grid grid-cols-5 text-xs border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <div className="p-3 font-semibold text-gray-700">{row.label}</div>
            {BENEFITS.map((b) => (
              <div key={b.name} className="p-3 text-gray-600 whitespace-pre-line leading-relaxed">{b[row.key]}</div>
            ))}
          </div>
        ))}
        <div className="grid grid-cols-5 text-xs border-t border-gray-100 bg-white">
          <div className="p-3 font-semibold text-gray-700">특이사항</div>
          {BENEFITS.map((b) => (
            <div key={b.name} className="p-3 text-gray-500">{b.note}</div>
          ))}
        </div>
      </div>

      <AdSlotHorizontal slot="6000000002" />

      {/* 기준 중위소득표 */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-3">2026년 가구별 소득 기준액 (원/월)</h2>
        <div className="rounded-2xl border border-gray-200 overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-3 text-left">가구 수</th>
                <th className="p-3 text-right">중위소득 100%</th>
                <th className="p-3 text-right text-red-300">생계 (32%)</th>
                <th className="p-3 text-right text-emerald-300">의료 (40%)</th>
                <th className="p-3 text-right text-blue-300">주거 (48%)</th>
                <th className="p-3 text-right text-yellow-300">교육 (50%)</th>
              </tr>
            </thead>
            <tbody>
              {INCOME_TABLE.map((row, i) => (
                <tr key={row.size} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 font-semibold text-gray-700">{row.size} 가구</td>
                  <td className="p-3 text-right text-gray-600">{row.mid}</td>
                  <td className="p-3 text-right text-red-600 font-semibold">{row.p32}</td>
                  <td className="p-3 text-right text-emerald-600 font-semibold">{row.p40}</td>
                  <td className="p-3 text-right text-blue-600 font-semibold">{row.p48}</td>
                  <td className="p-3 text-right text-yellow-600 font-semibold">{row.p50}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">* 소득인정액 = 실제 소득 + 재산 환산액. 정확한 기준은 복지로에서 확인하세요.</p>
      </div>

      {/* 핵심 정리 */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-gray-800">핵심 정리</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-gray-700 space-y-2">
          <p className="font-semibold text-blue-800">💡 4대 급여는 중복 수급 가능</p>
          <p>소득인정액이 각 급여의 기준을 모두 충족하면 복수 급여를 동시에 받을 수 있습니다. 예: 기준 중위소득 32% 이하이면 생계·주거·의료·교육급여 모두 신청 가능합니다.</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-sm text-gray-700 space-y-2">
          <p className="font-semibold text-emerald-800">✅ 신청은 한 번에 — 통합 신청</p>
          <p>주민센터 방문 또는 복지로(bokjiro.go.kr)에서 4대 급여를 동시에 통합 신청할 수 있습니다. 매년 정기 조사로 자격이 유지·변경됩니다.</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 text-sm text-gray-700">
          <p className="font-semibold text-yellow-800">⚠️ 부양의무자 기준 확인 필요</p>
          <p>생계급여·의료급여는 일부 경우 부양의무자(직계혈족·배우자) 기준이 적용될 수 있습니다. 주거급여·교육급여는 부양의무자 기준이 폐지되었습니다.</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Link href="/calculator"
          className="bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors text-sm">
          복지 수령액 계산기 →
        </Link>
        <Link href="/#benefits"
          className="border border-emerald-300 text-emerald-700 font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors text-sm">
          전체 혜택 보기 →
        </Link>
      </div>
    </div>
  );
}
