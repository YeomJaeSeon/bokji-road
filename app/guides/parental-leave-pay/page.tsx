import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "육아휴직급여 신청 방법 완벽 가이드 2026 — 금액·기간·신청절차",
  description:
    "2026년 육아휴직급여 신청 방법, 지급 금액, 3+3 육아휴직제, 출산전후휴가 급여까지 완벽 안내합니다. 부모 모두 육아휴직을 쓰면 첫 3개월 각 최대 300만원을 받을 수 있습니다.",
  keywords: [
    "육아휴직급여 신청", "육아휴직급여 금액 2026", "육아휴직급여 계산", "3+3 육아휴직",
    "출산전후휴가 급여", "육아휴직 신청방법", "육아휴직급여 기간", "남성 육아휴직급여",
    "육아휴직 상한액", "육아휴직급여 신청서류",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/parental-leave-pay" },
  openGraph: {
    title: "육아휴직급여 신청 방법 완벽 가이드 2026 | 복지로드",
    description: "부모 모두 쓰면 첫 3개월 각 최대 300만원. 3+3 육아휴직 완벽 안내.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/parental-leave-pay", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "육아휴직급여 신청 방법 완벽 가이드 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/parental-leave-pay",
  inLanguage: "ko", datePublished: "2026-06-09", dateModified: "2026-06-09",
};

const PAY_TABLE = [
  { period: "1~3개월 (일반)", rate: "통상임금 80%", max: "상한 월 150만원", min: "하한 월 70만원" },
  { period: "4~12개월", rate: "통상임금 50%", max: "상한 월 120만원", min: "하한 월 70만원" },
  { period: "1~3개월 (3+3제, 부모 모두 사용 시)", rate: "통상임금 100%", max: "상한 월 300만원", min: "-" },
];

const MATERNITY_TABLE = [
  { type: "출산전후휴가 (일반)", period: "90일 (다태아 120일)", pay: "통상임금 100% (상한 월 230만원)" },
  { type: "배우자 출산휴가", period: "20일", pay: "통상임금 100% (상한 월 230만원)" },
];

const APPLY_STEPS = [
  { step: 1, title: "육아휴직 신청 (회사)", desc: "육아휴직 시작일 30일 전까지 사업주에게 서면으로 신청합니다. 사업주는 정당한 이유 없이 거부할 수 없습니다." },
  { step: 2, title: "고용보험 급여 신청 (휴직 시작 후)", desc: "육아휴직 시작일 이후 고용보험 홈페이지(ei.go.kr) 또는 고용센터에 육아휴직급여를 신청합니다. 매월 신청하거나 종료 후 일괄 신청 가능합니다." },
  { step: 3, title: "급여 수령", desc: "심사 후 신청 계좌로 지급됩니다. 급여의 25%는 직장 복귀 후 6개월이 지난 시점에 사후지급됩니다." },
];

const FAQ = [
  { q: "3+3 육아휴직제는 어떻게 신청하나요?", a: "부모 모두 각자의 고용보험 홈페이지 또는 고용센터에서 신청하면 됩니다. 두 번째로 육아휴직을 사용하는 부모가 신청할 때 배우자 육아휴직 사용 사실을 증빙하면 자동 적용됩니다." },
  { q: "사업주가 육아휴직을 거부하면?", a: "사업주가 정당한 이유 없이 육아휴직을 거부하는 것은 남녀고용평등법 위반입니다. 고용노동부(1350) 또는 지역 고용노동청에 신고할 수 있습니다." },
  { q: "프리랜서·계약직도 받을 수 있나요?", a: "고용보험에 가입된 근로자라면 고용 형태에 관계없이 신청할 수 있습니다. 단, 육아휴직 전 고용보험 피보험 단위기간이 180일 이상이어야 합니다." },
  { q: "육아휴직 중 아르바이트를 하면 어떻게 되나요?", a: "육아휴직 중 취업 활동을 하면 급여가 감액되거나 지급이 중단될 수 있습니다. 사전에 고용센터에 신고해야 하며, 허위 신고 시 부정수급으로 처리됩니다." },
];

export default function ParentalLeavePayPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">육아휴직급여</span>
      </nav>
      <div className="mb-6">
        <span className="text-xs font-bold bg-pink-100 text-pink-700 px-2.5 py-1 rounded-full">육아·출산</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          육아휴직급여 신청 방법 완벽 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">3+3 육아휴직·출산전후휴가 급여까지 한 번에</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 5분</p>
      </div>
      <div className="bg-pink-50 border border-pink-200 rounded-2xl p-4 mb-6">
        <p className="font-bold text-pink-800 mb-1">부모 모두 쓰면 첫 3개월 각 최대 300만원</p>
        <p className="text-sm text-gray-700">2024년부터 시행된 <strong>3+3 육아휴직제</strong>로 엄마·아빠가 함께 육아휴직을 사용하면 첫 3개월 동안 각각 통상임금 100%(상한 300만원)를 받을 수 있습니다.</p>
      </div>

      <AdSlotHorizontal slot="9015000001" />

      <section className="mt-4 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">육아휴직급여 지급액</h2>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-3 bg-pink-600 text-white text-sm font-bold">
            <div className="p-3">기간</div><div className="p-3">지급률</div><div className="p-3">상한/하한</div>
          </div>
          {PAY_TABLE.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <div className="p-3 text-gray-700 text-xs">{row.period}</div>
              <div className="p-3 font-semibold text-pink-700">{row.rate}</div>
              <div className="p-3 text-gray-600 text-xs">{row.max}<br />{row.min !== "-" && row.min}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">※ 급여의 25%는 복직 후 6개월 뒤 사후지급됩니다.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">출산전후휴가 급여</h2>
        <div className="space-y-3">
          {MATERNITY_TABLE.map((row, i) => (
            <div key={i} className="bg-white border border-pink-100 rounded-xl p-4">
              <p className="font-bold text-gray-800 mb-1 text-sm">{row.type}</p>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-500">기간: <strong className="text-gray-800">{row.period}</strong></span>
                <span className="text-gray-500">급여: <strong className="text-pink-700">{row.pay}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdSlotHorizontal slot="9015000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">신청 방법</h2>
        <div className="space-y-3">
          {APPLY_STEPS.map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">{item.step}</div>
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
          <Link href="/guides/parental-allowance-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">부모급여·아동수당 가이드 →</Link>
          <Link href="/guides/happy-birth-card" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">국민행복카드</Link>
          <Link href="/guides/age-30s" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">30대 혜택 총정리</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 고용노동부 1350 · 고용보험 홈페이지 ei.go.kr</p>
    </article>
  );
}
