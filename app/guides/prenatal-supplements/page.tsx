import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "임산부 무료 엽산제·철분제 신청 방법 2026 — 보건소 지급 절차",
  description:
    "2026년 임산부 무료 엽산제·철분제 신청 방법을 완벽 안내합니다. 임신 확인 후 가까운 보건소에서 무료로 받을 수 있습니다. 신청 시기, 지급 기간, 필요 서류를 한 번에 확인하세요.",
  keywords: [
    "임산부 철분 신청", "임산부 엽산제 신청", "무료 엽산제 및 철분제 신청 방법",
    "철분제 신청", "보건소 엽산제", "임신 무료 철분제", "임산부 보건소 지원",
    "엽산제 언제 복용", "철분제 복용시기", "임산부 지원 신청방법",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/prenatal-supplements" },
  openGraph: {
    title: "임산부 무료 엽산제·철분제 신청 방법 2026 | 복지로드",
    description: "임신 확인 후 보건소에서 무료로 받는 엽산제·철분제 신청 가이드.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/prenatal-supplements", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "임산부 무료 엽산제·철분제 신청 방법 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/prenatal-supplements",
  inLanguage: "ko", datePublished: "2026-06-13", dateModified: "2026-06-13",
};

const SUPPLEMENTS = [
  {
    name: "엽산제 (葉酸劑)",
    icon: "🌿",
    color: "border-green-200",
    when: "임신 전 3개월 ~ 임신 12주 (임신 초기 3개월)",
    amount: "3개월분 (90정) 무료 지급",
    why: "신경관 결손(척추이분증 등) 예방. 임신 전부터 복용할수록 효과적입니다.",
    note: "임신 전부터 복용하는 것이 가장 좋습니다. 임신 계획 중이라면 미리 신청하세요.",
  },
  {
    name: "철분제 (鐵分劑)",
    icon: "💊",
    color: "border-red-200",
    when: "임신 16주 이후 ~ 출산 전까지",
    amount: "5개월분 (150정) 무료 지급",
    why: "임신성 빈혈 예방. 태아 성장에 필요한 철분 보충. 임신 중기부터 수요 급증.",
    note: "철분제는 공복 또는 취침 전 복용 시 흡수율이 높습니다. 변비가 생길 수 있으니 물을 충분히 드세요.",
  },
];

const APPLY_STEPS = [
  { step: 1, title: "임신 확인서 발급", desc: "산부인과에서 임신 확인서(임신 주수 명시)를 발급받습니다. 건강보험이 적용되는 임신 확인 진료 시 발급 가능합니다." },
  { step: 2, title: "보건소 방문", desc: "거주지 관할 보건소(또는 보건지소)를 방문합니다. 임신 확인서와 신분증을 지참합니다. 별도 예약 없이 방문 가능한 경우가 많습니다." },
  { step: 3, title: "임산부 등록 및 수령", desc: "임산부로 등록하면 엽산제·철분제를 즉시 수령합니다. 등록 후 추가 지원(산전검사, 엽산·철분 추가 지급 등)도 안내받을 수 있습니다." },
];

const EXTRA_BENEFITS = [
  { name: "임신 초기 검사비 지원", desc: "임신 초기 혈액검사 비용 일부 지원 (보건소마다 다름)" },
  { name: "산전 우울증 검사", desc: "임신·출산 후 우울증 검사 무료 제공" },
  { name: "모성보호 상담", desc: "임신 중 주의사항, 영양 관리, 출산 준비 상담 무료" },
  { name: "고위험 임산부 의료비 지원", desc: "조기진통, 당뇨병, 임신성 고혈압 등 고위험 임산부 의료비 지원 (소득 기준 있음)" },
];

const FAQ = [
  { q: "보건소가 아닌 약국에서도 살 수 있나요?", a: "엽산제와 철분제는 약국에서도 구입할 수 있지만, 보건소에서는 무료로 받을 수 있습니다. 보건소 방문이 어렵다면 약국 구입도 되지만, 무료 지원을 꼭 챙기세요." },
  { q: "임신 16주가 넘었는데 엽산제도 받을 수 있나요?", a: "엽산제는 임신 12주 이후에는 지급하지 않는 경우가 많습니다. 하지만 보건소마다 정책이 다를 수 있으니 방문해서 확인하세요. 철분제는 임신 16주 이후부터 받을 수 있습니다." },
  { q: "주민등록지와 다른 곳에 살아도 신청할 수 있나요?", a: "원칙적으로 주민등록지 관할 보건소에서 신청하지만, 실거주지 보건소에서도 받을 수 있는 경우가 많습니다. 방문 전 보건소에 전화로 확인하세요." },
  { q: "엽산제·철분제 외에 보건소에서 받을 수 있는 게 있나요?", a: "임산부 등록 시 산전 검사, 모성보호 상담, 구강 검진, 고위험 임산부 의료비 지원 안내 등을 함께 받을 수 있습니다. 보건소에서 '임산부 등록'을 요청하면 패키지로 안내해 줍니다." },
];

export default function PrenatalSupplementsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">임산부 엽산·철분제</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">임신·출산</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          임산부 무료 엽산제·철분제 신청 방법 2026<br />
          <span className="text-lg font-normal text-gray-500">보건소 지급 절차·복용 시기·추가 혜택까지</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 4분</p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
        <p className="font-bold text-green-800 mb-1">임신 확인 즉시 보건소에 가세요</p>
        <p className="text-sm text-gray-700">임신 확인서만 있으면 <strong>가까운 보건소에서 엽산제·철분제를 무료로 받을 수 있습니다.</strong> 임신 초기에 신청할수록 더 많은 기간 지원을 받을 수 있습니다.</p>
      </div>

      <AdSlotHorizontal slot="9022000001" />

      <section className="mt-4 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">엽산제·철분제 지급 기준</h2>
        <div className="space-y-4">
          {SUPPLEMENTS.map((s) => (
            <div key={s.name} className={`bg-white border-2 ${s.color} rounded-2xl p-5`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{s.icon}</span>
                <h3 className="font-extrabold text-gray-800 text-lg">{s.name}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2"><span className="text-xs font-bold text-gray-500 w-16 flex-shrink-0">복용 시기</span><p className="font-semibold text-gray-800">{s.when}</p></div>
                <div className="flex gap-2"><span className="text-xs font-bold text-gray-500 w-16 flex-shrink-0">지급량</span><p className="font-bold text-green-700">{s.amount}</p></div>
                <div className="flex gap-2"><span className="text-xs font-bold text-gray-500 w-16 flex-shrink-0">이유</span><p className="text-gray-700">{s.why}</p></div>
                <p className="bg-gray-50 rounded-xl px-3 py-2 text-gray-600 text-xs">💡 {s.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">신청 방법</h2>
        <div className="space-y-3">
          {APPLY_STEPS.map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">{item.step}</div>
              <div>
                <p className="font-bold text-gray-800 mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdSlotHorizontal slot="9022000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">보건소에서 받을 수 있는 추가 혜택</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {EXTRA_BENEFITS.map((b) => (
            <div key={b.name} className="bg-green-50 border border-green-100 rounded-xl p-4">
              <p className="font-bold text-green-800 text-sm mb-1">{b.name}</p>
              <p className="text-xs text-gray-600">{b.desc}</p>
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
          <Link href="/guides/happy-birth-card" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">국민행복카드 신청 →</Link>
          <Link href="/guides/parental-allowance-guide" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">부모급여·아동수당</Link>
          <Link href="/guides/parental-leave-pay" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">육아휴직급여</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 가까운 보건소 · 임산부 지원 문의 129 복지 콜센터</p>
    </article>
  );
}
