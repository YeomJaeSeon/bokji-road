import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "의료급여 1종 2종 차이 완벽 정리 2026 — 자격·본인부담금·신청방법",
  description:
    "2026년 의료급여 1종과 2종의 차이, 본인부담금, 자격 조건을 완벽 안내합니다. 의료급여 수급자가 되면 병원비를 거의 내지 않아도 됩니다. 신청 방법과 혜택을 한 번에 확인하세요.",
  keywords: [
    "의료급여 1종 2종 차이", "의료급여 자격", "의료급여 신청방법", "의료급여 본인부담금",
    "의료급여 수급자", "의료급여 1종 대상", "의료급여 2종 대상", "의료급여란",
    "건강보험 의료급여 차이", "의료급여 병원비",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/medical-benefit" },
  openGraph: {
    title: "의료급여 1종·2종 차이 완벽 정리 2026 | 복지로드",
    description: "의료급여 1종·2종 자격·본인부담금 차이와 신청 방법 한 번에 정리.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/medical-benefit", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "의료급여 1종 2종 차이 완벽 정리 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/medical-benefit",
  inLanguage: "ko", datePublished: "2026-06-13", dateModified: "2026-06-13",
};

const TYPE_COMPARE = [
  { category: "대상", type1: "근로무능력 가구, 희귀·중증난치질환자, 시설수급자, 행려환자 등", type2: "근로능력이 있는 기초수급자 가구 (1종 해당 아닌 수급자)" },
  { category: "1차(의원) 본인부담", type1: "1,000원", type2: "1,000원" },
  { category: "2차(병원) 본인부담", type1: "1,500원", type2: "급여비용의 15%" },
  { category: "3차(종합병원) 본인부담", type1: "2,000원", type2: "급여비용의 15%" },
  { category: "입원 본인부담", type1: "없음 (무료)", type2: "급여비용의 10%" },
  { category: "약국 본인부담", type1: "500원", type2: "500원" },
  { category: "연간 본인부담 상한", type1: "없음 (거의 전액 지원)", type2: "80만원" },
];

const ELIGIBILITY = [
  { icon: "👨‍👩‍👦", group: "기초생활수급자 (의료급여 기준)", desc: "생계급여·의료급여 수급자로 선정된 가구. 소득인정액이 기준 중위소득 40% 이하." },
  { icon: "🏥", group: "희귀·중증난치질환자", desc: "보건복지부 지정 희귀질환, 중증난치질환 등록자." },
  { icon: "♿", group: "장애인 수급자", desc: "장애인연금 수급자, 장애인 기초생활수급자 등 일부." },
  { icon: "🏛️", group: "국가유공자 등", desc: "국가보훈 의료 혜택 대상자 중 일부. 별도 기준 적용." },
];

const APPLY_STEPS = [
  { step: 1, title: "기초생활수급 신청", desc: "의료급여는 기초생활수급자 신청과 동시에 처리됩니다. 주민센터에서 '기초생활수급 신청'을 하면 의료급여 여부도 함께 결정됩니다." },
  { step: 2, title: "소득·재산 조사", desc: "담당 공무원이 소득·재산을 조사하여 수급 자격과 급여 종류(1종·2종)를 결정합니다." },
  { step: 3, title: "의료급여증 수령", desc: "수급자로 선정되면 의료급여증이 발급됩니다. 병원 방문 시 의료급여증 또는 신분증을 제시하면 됩니다." },
  { step: 4, title: "병원 이용", desc: "1차 의원을 먼저 이용하고, 필요 시 2차·3차 병원으로 의뢰받는 것이 원칙입니다. 의뢰 없이 3차 병원 직접 방문 시 본인부담이 올라갈 수 있습니다." },
];

const FAQ = [
  { q: "의료급여와 건강보험의 차이는 무엇인가요?", a: "건강보험은 가입자가 보험료를 내고 이용하는 제도이고, 의료급여는 저소득층에게 국가가 의료비를 지원하는 제도입니다. 의료급여 수급자는 보험료를 내지 않고도 훨씬 낮은 본인부담으로 의료 서비스를 이용할 수 있습니다." },
  { q: "1종인지 2종인지 어떻게 알 수 있나요?", a: "의료급여증에 종류가 표시되어 있습니다. 또는 주민센터나 건강보험공단(1577-1000)에 문의하면 확인할 수 있습니다." },
  { q: "치과·한방 치료도 의료급여가 적용되나요?", a: "치과·한방도 의료급여 적용이 됩니다. 다만 급여 항목과 비급여 항목이 구분되므로, 임플란트나 교정 등 비급여는 전액 본인 부담입니다." },
  { q: "소득이 생기면 의료급여가 바뀌나요?", a: "매년 소득·재산 조사를 통해 수급 자격을 재확인합니다. 소득인정액이 기준을 초과하면 의료급여가 탈락하거나 종류가 변경될 수 있습니다." },
];

export default function MedicalBenefitPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">의료급여</span>
      </nav>
      <div className="mb-6">
        <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">의료급여</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          의료급여 1종·2종 차이 완벽 정리 2026<br />
          <span className="text-lg font-normal text-gray-500">자격 조건·본인부담금·신청 방법 한 번에</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 5분</p>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
        <p className="font-bold text-blue-800 mb-1">의료급여 1종이면 병원비가 거의 무료</p>
        <p className="text-sm text-gray-700">의료급여 1종 수급자는 의원 1,000원, 입원 무료. <strong>연간 병원비 부담이 건강보험의 1/10 수준</strong>으로 줄어듭니다.</p>
      </div>

      <AdSlotHorizontal slot="9027000001" />

      <section className="mt-4 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">1종 vs 2종 비교</h2>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-3 bg-blue-600 text-white text-sm font-bold">
            <div className="p-3">구분</div><div className="p-3">1종</div><div className="p-3">2종</div>
          </div>
          {TYPE_COMPARE.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <div className="p-3 font-semibold text-gray-700">{row.category}</div>
              <div className="p-3 text-blue-700 font-semibold">{row.type1}</div>
              <div className="p-3 text-gray-700">{row.type2}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">※ 비급여 항목(임플란트·성형 등)은 1종·2종 모두 전액 본인 부담.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">의료급여 대상자</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {ELIGIBILITY.map((e) => (
            <div key={e.group} className="bg-white border border-blue-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{e.icon}</span>
                <p className="font-bold text-gray-800 text-sm">{e.group}</p>
              </div>
              <p className="text-xs text-gray-600">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlotHorizontal slot="9027000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">신청 절차</h2>
        <div className="space-y-3">
          {APPLY_STEPS.map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">{item.step}</div>
              <div>
                <p className="font-bold text-gray-800 mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">자주 묻는 질문</h2>
        <div className="space-y-3">
          {FAQ.map((item) => (
            <details key={item.q} className="bg-gray-50 rounded-xl group">
              <summary className="flex justify-between items-center px-4 py-3 cursor-pointer font-semibold text-gray-800 list-none text-sm">
                Q. {item.q}<span className="text-gray-400 group-open:rotate-45 transition-transform text-lg flex-shrink-0 ml-2">+</span>
              </summary>
              <div className="px-4 pb-4 pt-2 text-sm text-gray-600 leading-relaxed border-t border-gray-100">A. {item.a}</div>
            </details>
          ))}
        </div>
      </section>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
        <p className="font-bold text-emerald-800 mb-3">관련 가이드</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/guides/basic-living-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">기초생활수급 신청 →</Link>
          <Link href="/guides/near-poverty-line" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">차상위계층 가이드</Link>
          <Link href="/guides/medical-expense-support" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">의료비 지원 총정리</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 129 복지 콜센터 · 건강보험공단 1577-1000</p>
    </article>
  );
}
