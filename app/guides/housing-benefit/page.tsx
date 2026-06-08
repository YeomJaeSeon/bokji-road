import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "주거급여 신청 방법 완벽 가이드 2026 — 임차료·수선비 지원 자격과 금액",
  description:
    "2026년 주거급여 신청 방법, 자격 조건, 지역별 지원금액을 완벽 안내합니다. 기준 중위소득 48% 이하라면 임차가구 월세를, 자가가구는 집 수리비를 지원받을 수 있습니다.",
  keywords: [
    "주거급여 신청", "주거급여 자격조건", "주거급여 금액 2026", "임차급여", "수선유지급여",
    "주거급여 기준 중위소득", "청년 주거급여", "주거급여 지역별 금액", "월세 지원 정부",
    "주거급여 신청방법",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/housing-benefit" },
  openGraph: {
    title: "주거급여 신청 방법 완벽 가이드 2026 | 복지로드",
    description: "중위소득 48% 이하라면 월세·수리비를 정부가 지원합니다.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/housing-benefit", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "주거급여 신청 방법 완벽 가이드 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/housing-benefit",
  inLanguage: "ko", datePublished: "2026-06-08", dateModified: "2026-06-08",
};

const RENT_TABLE = [
  { region: "서울", r1: "341,000", r2: "383,000", r3: "456,000", r4: "527,000", r5: "545,000", r6: "646,000" },
  { region: "경기·인천", r1: "268,000", r2: "300,000", r3: "358,000", r4: "414,000", r5: "428,000", r6: "507,000" },
  { region: "광역시·세종·특례시", r1: "216,000", r2: "244,000", r3: "290,000", r4: "336,000", r5: "347,000", r6: "414,000" },
  { region: "그 외 지역", r1: "178,000", r2: "201,000", r3: "239,000", r4: "278,000", r5: "287,000", r6: "340,000" },
];

const REPAIR_TABLE = [
  { level: "경보수", amount: "457만원", cycle: "3년 주기", works: "도배·장판·창호 등" },
  { level: "중보수", amount: "849만원", cycle: "5년 주기", works: "오급수·난방·지붕 등" },
  { level: "대보수", amount: "1,241만원", cycle: "7년 주기", works: "기초·지붕 전체 등 구조 보수" },
];

const INCOME_TABLE = [
  { members: "1인", income: "1,114,223원" },
  { members: "2인", income: "1,841,305원" },
  { members: "3인", income: "2,357,329원" },
  { members: "4인", income: "2,864,957원" },
  { members: "5인", income: "3,347,806원" },
];

const APPLY_STEPS = [
  {
    step: 1,
    title: "자격 확인",
    desc: "소득인정액이 기준 중위소득 48% 이하인지 확인합니다. 복지로(bokjiro.go.kr) '복지서비스 모의계산'으로 미리 확인할 수 있습니다.",
  },
  {
    step: 2,
    title: "신청서 제출",
    desc: "주민센터 방문 또는 복지로(bokjiro.go.kr) 온라인 신청. 임대차계약서, 신분증, 통장 사본, 소득·재산 증빙 서류를 지참합니다.",
  },
  {
    step: 3,
    title: "조사 및 결정",
    desc: "한국토지주택공사(LH) 또는 지자체가 주택 조사를 실시합니다. 임차가구는 임대차 계약 확인, 자가가구는 주택 상태 확인 후 지원 수준을 결정합니다.",
  },
  {
    step: 4,
    title: "급여 지급",
    desc: "임차급여는 매월 20일 계좌로 지급됩니다. 수선유지급여는 공사업체가 직접 공사를 진행합니다.",
  },
];

export default function HousingBenefitPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">주거급여</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">주거</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          주거급여 신청 방법 완벽 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">임차료·수선비 지원 자격·금액·신청절차 한 번에</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 6분</p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        주거급여는 기초생활보장제도 4대 급여 중 하나로, 소득이 낮은 가구의 <strong>월세(임차료) 또는 집 수리비(수선유지비)</strong>를 정부가 직접 지원하는 제도입니다. 2026년 기준 <strong>기준 중위소득 48% 이하</strong>라면 신청할 수 있어, 1인 가구 기준 월 소득 약 111만원 이하이면 해당됩니다.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        주거급여는 생계급여와 달리 <strong>부양의무자 기준이 없습니다.</strong> 부모나 자녀가 소득이 있어도 본인 소득·재산만 보기 때문에 의외로 받을 수 있는 분이 많습니다.
      </p>

      <AdSlotHorizontal slot="9008000001" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">2026년 주거급여 소득 기준</h2>
        <p className="text-sm text-gray-600 mb-3">소득인정액이 아래 금액 이하이면 신청 가능합니다.</p>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-2 bg-amber-600 text-white text-sm font-bold">
            <div className="p-3">가구원 수</div>
            <div className="p-3">소득인정액 기준 (월)</div>
          </div>
          {INCOME_TABLE.map((row, i) => (
            <div key={i} className={`grid grid-cols-2 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <div className="p-3 text-gray-700">{row.members}</div>
              <div className="p-3 font-semibold text-amber-700">{row.income} 이하</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">임차급여 — 지역·가구원수별 지원 상한액</h2>
        <p className="text-sm text-gray-600 mb-3">실제 임차료와 아래 상한액 중 <strong>낮은 금액</strong>을 지원합니다.</p>
        <div className="rounded-xl border border-gray-200 overflow-x-auto">
          <table className="w-full text-sm min-w-[500px]">
            <thead className="bg-amber-600 text-white">
              <tr>
                <th className="p-3 text-left">지역</th>
                <th className="p-2 text-center">1인</th>
                <th className="p-2 text-center">2인</th>
                <th className="p-2 text-center">3인</th>
                <th className="p-2 text-center">4인</th>
                <th className="p-2 text-center">5인</th>
                <th className="p-2 text-center">6인</th>
              </tr>
            </thead>
            <tbody>
              {RENT_TABLE.map((row, i) => (
                <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <td className="p-3 font-semibold text-gray-700">{row.region}</td>
                  <td className="p-2 text-center text-amber-700">{row.r1}</td>
                  <td className="p-2 text-center text-amber-700">{row.r2}</td>
                  <td className="p-2 text-center text-amber-700">{row.r3}</td>
                  <td className="p-2 text-center text-amber-700">{row.r4}</td>
                  <td className="p-2 text-center text-amber-700">{row.r5}</td>
                  <td className="p-2 text-center text-amber-700">{row.r6}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">단위: 원/월</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">수선유지급여 — 자가가구 집 수리비 지원</h2>
        <p className="text-sm text-gray-600 mb-3">집을 소유하고 있지만 수리가 어려운 저소득 가구에 지원합니다.</p>
        <div className="space-y-3">
          {REPAIR_TABLE.map((row) => (
            <div key={row.level} className="bg-white border border-amber-100 rounded-xl p-4 flex gap-4 items-start">
              <div className="w-16 text-center flex-shrink-0">
                <p className="font-bold text-amber-700 text-sm">{row.level}</p>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-800">{row.amount}</p>
                <p className="text-xs text-gray-500 mt-0.5">{row.cycle} · {row.works}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdSlotHorizontal slot="9008000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">신청 방법 (단계별)</h2>
        <div className="space-y-3">
          {APPLY_STEPS.map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">{item.step}</div>
              <div>
                <p className="font-bold text-gray-800 mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
        <p className="font-bold text-blue-800 mb-2">청년 주거급여 분리지급</p>
        <p className="text-sm text-gray-700">부모와 떨어져 사는 만 19~30세 미만 청년이라면 부모 가구와 별도로 주거급여를 신청할 수 있습니다. 학교·직장 등의 사유로 부모와 다른 지역에 거주하는 경우 해당됩니다.</p>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
        <p className="font-bold text-emerald-800 mb-3">관련 가이드</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/guides/basic-living-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">기초생활수급 전체 가이드 →</Link>
          <Link href="/guides/emergency-welfare" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">긴급복지지원</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 129 복지 콜센터 (무료, 월~금 9~18시) · 주민센터 방문 신청 가능</p>
    </article>
  );
}
