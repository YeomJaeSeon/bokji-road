import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "발달장애인 지원 완벽 가이드 2026 — 바우처·활동지원·복지관 서비스",
  description:
    "2026년 발달장애인(자폐·지적장애)이 받을 수 있는 지원을 완벽 안내합니다. 발달재활서비스 바우처, 활동지원서비스, 발달장애인지원센터, 주간활동서비스까지 한 번에 확인하세요.",
  keywords: [
    "발달장애인 지원", "발달재활서비스", "발달장애 바우처", "자폐 지원서비스",
    "지적장애 지원", "발달장애인 활동지원", "발달장애인지원센터", "주간활동서비스",
    "발달장애인 신청방법", "장애아동 재활치료",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/developmental-disability" },
  openGraph: {
    title: "발달장애인 지원 완벽 가이드 2026 | 복지로드",
    description: "발달재활 바우처·활동지원·주간활동서비스 자격·신청 방법 총정리.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/developmental-disability", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "발달장애인 지원 완벽 가이드 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/developmental-disability",
  inLanguage: "ko", datePublished: "2026-06-13", dateModified: "2026-06-13",
};

const SERVICES = [
  {
    icon: "🧩",
    color: "border-purple-200",
    name: "발달재활서비스 (바우처)",
    age: "만 18세 미만 장애아동",
    target: "뇌병변·지적·자폐·청각·언어·시각 장애 등록 아동",
    amount: "월 14~22만원 바우처 (소득에 따라 본인부담 상이)",
    content: "언어치료, 미술치료, 음악치료, 놀이심리치료, 행동치료, 청능치료 등",
    apply: "주민센터 신청 → 바우처 카드 발급 → 제공기관 이용",
  },
  {
    icon: "🏃",
    color: "border-blue-200",
    name: "장애인 활동지원서비스",
    age: "만 6~65세 미만 등록 장애인",
    target: "혼자 일상생활·사회활동이 어려운 장애인 (1~3급·중증)",
    amount: "월 최소 60만원~최대 690만원 이상 (등급별 상이)",
    content: "신체활동 지원, 가사활동 지원, 사회활동 지원, 방문목욕·간호",
    apply: "국민건강보험공단(1577-1000) 또는 주민센터 신청",
  },
  {
    icon: "🌅",
    color: "border-amber-200",
    name: "주간활동서비스",
    age: "만 18세 이상 성인 발달장애인",
    target: "지적·자폐성 장애인",
    amount: "월 100시간 내 서비스 (정부 지원)",
    content: "낮 시간 동안 사회참여 활동, 문화·여가, 직업훈련 등",
    apply: "발달장애인지원센터 또는 주민센터 신청",
  },
  {
    icon: "🏡",
    color: "border-emerald-200",
    name: "발달장애인 주거서비스",
    age: "성인 발달장애인",
    target: "지역사회 자립 희망 발달장애인",
    amount: "공동생활가정(그룹홈), 자립지원주택 입주 지원",
    content: "소규모 주거 공간에서 생활지원사와 함께 생활. 자립 훈련 포함.",
    apply: "발달장애인지원센터 또는 지자체 장애인복지과",
  },
  {
    icon: "📚",
    color: "border-rose-200",
    name: "발달장애인 평생교육 지원",
    age: "성인 발달장애인",
    target: "지적·자폐성 장애인",
    amount: "평생교육 바우처 연 35만원 (저소득 추가 지원)",
    content: "복지관·평생교육원 프로그램 이용. 직업훈련·사회기술훈련 포함.",
    apply: "발달장애인지원센터 또는 읍·면·동 신청",
  },
];

const FAQ = [
  { q: "발달장애인지원센터는 어디에 있나요?", a: "전국 17개 시·도에 광역센터, 각 시·군·구에 기초센터가 설치되어 있습니다. 'ddsd.or.kr'(발달장애인지원센터)에서 가까운 센터를 찾을 수 있습니다." },
  { q: "발달재활서비스와 치료지원서비스의 차이는?", a: "발달재활서비스는 만 18세 미만 장애아동을 위한 바우처로 주민센터에서 신청합니다. 치료지원서비스는 의료기관 재활치료로 건강보험 적용을 받는 것입니다. 두 서비스는 중복 이용이 가능합니다." },
  { q: "성인이 된 후에도 계속 지원을 받을 수 있나요?", a: "네. 발달재활서비스는 만 18세까지이지만, 이후에는 주간활동서비스·활동지원서비스·평생교육 지원 등으로 연계됩니다. 발달장애인지원센터에서 성인 전환 계획을 함께 세워줍니다." },
  { q: "자폐 스펙트럼 장애도 해당되나요?", a: "네. 자폐성 장애는 발달장애에 해당하며, 모든 서비스를 이용할 수 있습니다. 자폐성 장애로 등록되어 있어야 하며, 미등록 상태라면 주민센터에서 장애 등록을 먼저 해야 합니다." },
];

export default function DevelopmentalDisabilityPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">발달장애인 지원</span>
      </nav>
      <div className="mb-6">
        <span className="text-xs font-bold bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full">발달장애</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          발달장애인 지원 완벽 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">바우처·활동지원·주간활동·평생교육 한 번에</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 5분</p>
      </div>
      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-6">
        <p className="font-bold text-purple-800 mb-1">받을 수 있는 서비스가 생각보다 많습니다</p>
        <p className="text-sm text-gray-700">발달장애인(지적·자폐)을 위한 지원은 아동기부터 성인기까지 이어집니다. <strong>발달장애인지원센터</strong>에서 한 번에 상담받으면 필요한 서비스를 모두 안내받을 수 있습니다.</p>
      </div>

      <AdSlotHorizontal slot="9026000001" />

      <section className="mt-4 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">발달장애인 지원 서비스 종류</h2>
        <div className="space-y-4">
          {SERVICES.map((s) => (
            <div key={s.name} className={`bg-white border-2 ${s.color} rounded-2xl p-5`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{s.icon}</span>
                <h3 className="font-extrabold text-gray-800 text-base">{s.name}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2"><span className="text-xs font-bold text-gray-500 w-14 flex-shrink-0">대상</span><p className="text-gray-700">{s.age} · {s.target}</p></div>
                <div className="flex gap-2"><span className="text-xs font-bold text-purple-600 w-14 flex-shrink-0">지원액</span><p className="font-bold text-gray-800">{s.amount}</p></div>
                <div className="flex gap-2"><span className="text-xs font-bold text-gray-500 w-14 flex-shrink-0">내용</span><p className="text-gray-700">{s.content}</p></div>
                <div className="flex gap-2"><span className="text-xs font-bold text-emerald-600 w-14 flex-shrink-0">신청</span><p className="text-gray-700">{s.apply}</p></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdSlotHorizontal slot="9026000002" />

      <section className="mt-6 mb-8">
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
          <Link href="/guides/disability-benefits" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">장애인 복지혜택 총정리 →</Link>
          <Link href="/guides/disability-pension" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">장애인연금</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 발달장애인지원센터 1800-9854 · 129 복지 콜센터</p>
    </article>
  );
}
