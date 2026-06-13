import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "노인장기요양등급 신청 방법 2026 — 1~5등급 판정 기준·혜택 총정리",
  description:
    "2026년 노인장기요양보험 등급 신청 방법과 1~5등급·인지지원등급 판정 기준을 완벽 안내합니다. 재가급여·시설급여 혜택과 본인부담금, 신청 절차를 한 번에 확인하세요.",
  keywords: [
    "노인장기요양등급 신청", "장기요양등급 판정기준", "장기요양 1등급 2등급",
    "장기요양 재가급여", "장기요양 시설급여", "장기요양 신청방법",
    "요양보험 등급 신청", "장기요양등급 인정조사", "노인요양원 입소 조건", "장기요양보험 혜택",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/long-term-care" },
  openGraph: {
    title: "노인장기요양등급 신청 방법 2026 | 복지로드",
    description: "1~5등급·인지지원등급 판정 기준부터 재가·시설급여 혜택까지 총정리.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/long-term-care", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "노인장기요양등급 신청 방법 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/long-term-care",
  inLanguage: "ko", datePublished: "2026-06-13", dateModified: "2026-06-13",
};

const GRADES = [
  { grade: "1등급", score: "95점 이상", desc: "일상생활 전반에 전적인 도움 필요. 와상 상태 등 최중증.", benefit: "시설급여(요양원) 또는 재가급여 최대한 이용" },
  { grade: "2등급", score: "75~95점 미만", desc: "일상생활 대부분에 상당한 도움 필요.", benefit: "시설급여 또는 재가급여" },
  { grade: "3등급", score: "60~75점 미만", desc: "일상생활 일부에 부분적 도움 필요.", benefit: "주로 재가급여 (방문요양·목욕·간호 등)" },
  { grade: "4등급", score: "51~60점 미만", desc: "일상생활 일부에 약간의 도움 필요.", benefit: "재가급여 (방문요양·주간보호 등)" },
  { grade: "5등급", score: "45~51점 미만", desc: "치매 진단 + 일정 장기요양 필요 인정.", benefit: "치매 특화 재가급여 (치매전담형 주간보호 등)" },
  { grade: "인지지원등급", score: "45점 미만 + 치매 진단", desc: "경증 치매로 인지 기능 지원 필요.", benefit: "주간보호 서비스 (야간 보호 포함)" },
];

const BENEFITS_TABLE = [
  { type: "방문요양", desc: "요양보호사가 가정 방문 — 신체활동·가사활동 지원", who: "재가급여" },
  { type: "방문목욕", desc: "목욕차량 방문, 입욕 보조", who: "재가급여" },
  { type: "방문간호", desc: "간호사·간호조무사 방문, 의료 처치·약 복용 관리", who: "재가급여" },
  { type: "주야간보호", desc: "주간 또는 야간 시설 이용. 낮 동안 돌봄 후 귀가", who: "재가급여" },
  { type: "단기보호", desc: "시설에서 일정 기간 돌봄 (최대 연 9일→ 연장 가능)", who: "재가급여" },
  { type: "노인요양시설", desc: "요양원·요양병원 입소. 24시간 케어", who: "시설급여" },
];

const APPLY_STEPS = [
  { step: 1, title: "국민건강보험공단 신청", desc: "공단 지사 방문, 우편, 팩스 또는 노인장기요양보험 홈페이지(longtermcare.or.kr)·전화(1577-1000)로 신청합니다. 본인 또는 가족·대리인이 신청 가능." },
  { step: 2, title: "공단 직원 방문 조사 (인정조사)", desc: "신청 후 공단 직원이 방문해 '장기요양인정조사표'에 따라 신체 기능·인지 기능·행동 변화 등을 평가합니다. (약 30분 소요)" },
  { step: 3, title: "등급판정위원회 심의", desc: "조사 결과와 의사 소견서를 바탕으로 등급판정위원회가 등급을 결정합니다. 의사 소견서는 신청 후 공단이 안내." },
  { step: 4, title: "결과 통보 및 서비스 이용", desc: "신청일로부터 약 30일 이내 결과 통보. 등급 인정 후 장기요양기관과 계약하여 서비스를 이용합니다." },
];

const FAQ = [
  { q: "등급 판정에 탈락하면 어떻게 하나요?", a: "등급 외 판정을 받아도 이의신청(결과 통보일로부터 90일 이내)이 가능합니다. 의사 소견서를 보강하거나 상태가 악화되었을 때 재신청할 수도 있습니다." },
  { q: "본인부담금은 얼마인가요?", a: "재가급여는 급여비용의 15%, 시설급여는 20%를 본인이 부담합니다. 기초수급자는 전액 무료, 차상위계층은 6~9% 경감됩니다." },
  { q: "요양원 입소는 몇 등급부터 가능한가요?", a: "시설급여(요양원)는 1~2등급이 원칙입니다. 3~5등급은 재가서비스가 기본이지만, 치매·혼자 거동이 불가능한 경우 예외 인정될 수 있습니다." },
  { q: "의사 소견서는 어디서 받나요?", a: "내과·신경과·정신건강의학과 등 모든 의원·병원에서 발급 가능합니다. 공단이 지정한 서식으로 발급받아야 하며, 공단 홈페이지에서 서식을 확인할 수 있습니다." },
];

export default function LongTermCarePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">노인장기요양</span>
      </nav>
      <div className="mb-6">
        <span className="text-xs font-bold bg-sky-100 text-sky-700 px-2.5 py-1 rounded-full">노인장기요양</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          노인장기요양등급 신청 방법 완벽 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">1~5등급·인지지원등급 판정 기준과 혜택 총정리</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 6분</p>
      </div>
      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 mb-6">
        <p className="font-bold text-sky-800 mb-1">부모님이 거동이 불편하다면 지금 신청하세요</p>
        <p className="text-sm text-gray-700">장기요양등급을 받으면 방문요양·주간보호·요양원 입소 비용의 <strong>80~100%를 국가가 지원</strong>합니다. 신청하지 않으면 전액 본인 부담입니다.</p>
      </div>

      <AdSlotHorizontal slot="9023000001" />

      <section className="mt-4 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">등급별 판정 기준</h2>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-3 bg-sky-600 text-white text-sm font-bold">
            <div className="p-3">등급</div><div className="p-3">장기요양 인정 점수</div><div className="p-3">상태</div>
          </div>
          {GRADES.map((g, i) => (
            <div key={i} className={`grid grid-cols-3 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <div className="p-3 font-bold text-sky-700">{g.grade}</div>
              <div className="p-3 text-gray-700">{g.score}</div>
              <div className="p-3 text-gray-600 text-xs">{g.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">이용할 수 있는 급여 종류</h2>
        <div className="space-y-2">
          {BENEFITS_TABLE.map((b, i) => (
            <div key={i} className="bg-white border border-sky-100 rounded-xl p-4 flex gap-4 text-sm">
              <span className="font-bold text-sky-700 w-20 flex-shrink-0">{b.type}</span>
              <span className="text-gray-600 flex-1">{b.desc}</span>
              <span className="text-xs bg-sky-50 text-sky-600 px-2 py-0.5 rounded-full flex-shrink-0 h-fit">{b.who}</span>
            </div>
          ))}
        </div>
      </section>

      <AdSlotHorizontal slot="9023000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">신청 절차</h2>
        <div className="space-y-3">
          {APPLY_STEPS.map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">{item.step}</div>
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
          <Link href="/guides/age-60s-plus" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">60대 이상 혜택 총정리 →</Link>
          <Link href="/guides/basic-pension-guide" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">기초연금 가이드</Link>
          <Link href="/guides/elderly-alone-support" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">독거노인 지원</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 국민건강보험공단 1577-1000 · 노인장기요양보험 longtermcare.or.kr</p>
    </article>
  );
}
