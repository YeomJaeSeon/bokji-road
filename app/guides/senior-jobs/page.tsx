import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "노인 일자리 신청 방법 완벽 가이드 2026 — 유형별 급여·신청기간 총정리",
  description:
    "2026년 노인 일자리 신청 방법, 유형별 급여, 신청 기간을 완벽 안내합니다. 공익활동 월 27만원, 사회서비스형 월 59만원, 시장형 등 어르신 일자리 종류와 신청 절차를 한 번에 확인하세요.",
  keywords: [
    "노인일자리 신청방법", "노인일자리 급여 2026", "노인일자리 신청기간", "노인 공익활동",
    "노인일자리 종류", "만 65세 이상 일자리", "어르신 일자리 신청", "노인사회활동지원",
    "노인일자리 자격조건", "시니어 일자리",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/senior-jobs" },
  openGraph: {
    title: "노인 일자리 신청 방법 완벽 가이드 2026 | 복지로드",
    description: "공익활동 월 27만원~시장형까지, 어르신 일자리 유형별 완벽 안내.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/senior-jobs", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "노인 일자리 신청 방법 완벽 가이드 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/senior-jobs",
  inLanguage: "ko", datePublished: "2026-06-09", dateModified: "2026-06-09",
};

const JOB_TYPES = [
  {
    name: "공익활동",
    icon: "🤝",
    color: "border-emerald-200",
    age: "만 65세 이상",
    pay: "월 27만원",
    hours: "월 30시간 이상",
    examples: "노노케어, 취약계층 지원, 공공시설 봉사, 학교 급식 도우미 등",
    note: "가장 신청자 많은 유형. 기초연금 수급자 우선. 매년 1월에 신청해야 합니다.",
  },
  {
    name: "사회서비스형",
    icon: "🏫",
    color: "border-blue-200",
    age: "만 60세 이상",
    pay: "월 59만 4천원",
    hours: "월 60시간",
    examples: "아동 돌봄, 청소년 교육 보조, 장애인 지원, 의료기관 지원 등",
    note: "공익활동보다 급여가 높지만 경쟁이 치열합니다. 전문성이 있는 분께 유리.",
  },
  {
    name: "시장형 (소규모 사업단)",
    icon: "🏪",
    color: "border-amber-200",
    age: "만 60세 이상",
    pay: "월 83만원 이상 (수익에 따라 차등)",
    hours: "주 5일 근무",
    examples: "공동작업장, 시니어 카페, 세탁소, 음식점, 택배 지원 등",
    note: "수익 창출 활동. 급여가 가장 높지만 가장 어렵습니다.",
  },
  {
    name: "취업알선형",
    icon: "💼",
    color: "border-violet-200",
    age: "만 60세 이상",
    pay: "채용 기업 급여 기준",
    hours: "채용 기업 기준",
    examples: "민간 기업·사회적 기업 취업 연계",
    note: "고용센터·중장년일자리희망센터와 협력. 취업 성공 시 인센티브 있음.",
  },
];

const APPLY_STEPS = [
  { step: 1, title: "신청 기간 확인 (매년 1월 중심)", desc: "대부분의 노인 일자리 사업은 매년 1~2월에 신청을 받습니다. 신청자가 많아 조기 마감되는 경우도 있으니 1월 초에 확인하세요." },
  { step: 2, title: "신청 장소", desc: "주민센터, 노인복지관, 시니어클럽, 대한노인회 지부 등에서 신청합니다. 지역마다 담당 기관이 다르니 주민센터에서 안내받으세요." },
  { step: 3, title: "서류 제출", desc: "신분증, 기초연금 수급 확인서(공익활동 우선 대상), 통장 사본을 지참합니다. 기관에 따라 추가 서류가 필요할 수 있습니다." },
  { step: 4, title: "선발 및 교육", desc: "신청자가 많으면 선발 과정이 있습니다. 선발 후 사업 유형별 사전 교육을 이수해야 합니다." },
];

const FAQ = [
  { q: "기초연금 수급자가 노인 일자리를 하면 기초연금이 줄어드나요?", a: "노인 일자리 급여는 기초연금 소득인정액 산정 시 일부 공제 적용을 받습니다. 공익활동(월 27만원)은 소득으로 잡히지 않는 경우가 많지만, 시장형 등 급여가 높은 유형은 소득인정액에 영향을 줄 수 있습니다. 주민센터에서 확인하세요." },
  { q: "신청했는데 탈락하면 어떻게 하나요?", a: "대기자로 등록되며 결원 발생 시 연락이 옵니다. 다음 해에 다시 신청할 수 있습니다. 공익활동은 기초연금 수급자, 홀로 사는 어르신을 우선 선발합니다." },
  { q: "일자리 활동 중 다치면 어떻게 되나요?", a: "노인 일자리 참여자는 상해보험에 가입되어 있습니다. 활동 중 발생한 사고는 보험 처리가 가능합니다. 사고 발생 즉시 담당자에게 연락하세요." },
];

export default function SeniorJobsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">노인 일자리</span>
      </nav>
      <div className="mb-6">
        <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">노인 일자리</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          노인 일자리 신청 방법 완벽 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">유형별 급여·자격·신청기간 한 번에</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 5분</p>
      </div>
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6">
        <p className="font-bold text-emerald-800 mb-1">전국 100만 명 이상 참여 중인 제도</p>
        <p className="text-sm text-gray-700">노인 일자리 사업은 신청자가 매우 많아 <strong>매년 1월 초에 신청</strong>하는 것이 중요합니다. 늦게 신청하면 대기 인원이 많아질 수 있습니다.</p>
      </div>

      <AdSlotHorizontal slot="9017000001" />

      <section className="mt-4 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">노인 일자리 유형별 상세</h2>
        <div className="space-y-4">
          {JOB_TYPES.map((job) => (
            <div key={job.name} className={`bg-white rounded-2xl border-2 ${job.color} p-5`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{job.icon}</span>
                <h3 className="font-extrabold text-gray-800 text-lg">{job.name}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2"><span className="text-xs font-bold text-emerald-600 w-12 flex-shrink-0">급여</span><p className="font-bold text-gray-800">{job.pay}</p></div>
                <div className="flex gap-2"><span className="text-xs font-bold text-gray-500 w-12 flex-shrink-0">자격</span><p className="text-gray-700">{job.age} · {job.hours}</p></div>
                <div className="flex gap-2"><span className="text-xs font-bold text-gray-500 w-12 flex-shrink-0">예시</span><p className="text-gray-700">{job.examples}</p></div>
                <p className="bg-gray-50 rounded-xl px-3 py-2 text-gray-600 text-xs">💡 {job.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdSlotHorizontal slot="9017000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">신청 방법</h2>
        <div className="space-y-3">
          {APPLY_STEPS.map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">{item.step}</div>
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
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 129 복지 콜센터 · 노인일자리종합안내시스템 seniorro.or.kr</p>
    </article>
  );
}
