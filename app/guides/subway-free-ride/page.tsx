import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "지하철 무임승차 자격 및 신청 방법 2026 — 노인·장애인·국가유공자",
  description:
    "2026년 지하철 무임승차 자격 조건과 신청 방법을 완벽 안내합니다. 만 65세 이상 어르신, 장애인, 국가유공자, 5·18유공자가 받을 수 있는 교통 혜택과 복지카드 발급 절차를 한 번에 확인하세요.",
  keywords: [
    "지하철 무임승차 자격", "서울지하철무임승차자격", "지하철 무임승차 신청", "노인 지하철 무료",
    "만 65세 지하철 무료", "장애인 지하철 무임", "국가유공자 지하철 무료", "교통복지카드 발급",
    "무임승차 나이", "수도권 지하철 무료",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/subway-free-ride" },
  openGraph: {
    title: "지하철 무임승차 자격 및 신청 방법 2026 | 복지로드",
    description: "만 65세 이상, 장애인, 국가유공자 지하철 무료 이용 방법 완벽 안내.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/subway-free-ride", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "지하철 무임승차 자격 및 신청 방법 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/subway-free-ride",
  inLanguage: "ko", datePublished: "2026-06-13", dateModified: "2026-06-13",
};

const ELIGIBILITY = [
  {
    icon: "👴",
    color: "border-cyan-200",
    group: "만 65세 이상 노인",
    condition: "주민등록상 만 65세 생일이 지난 날부터",
    card: "노인복지카드 (교통카드 기능 포함)",
    where: "주민센터 방문 신청 또는 은행 (신한·농협·우리·하나)",
    note: "별도 자격 심사 없음. 나이만 충족하면 신청 가능.",
  },
  {
    icon: "♿",
    color: "border-purple-200",
    group: "등록 장애인",
    condition: "장애인복지법상 등록 장애인 (1~6급 모두 해당)",
    card: "장애인복지카드 (교통카드 기능 포함)",
    where: "주민센터 방문 신청",
    note: "수도권 전철·도시철도 무임. 시외버스·KTX는 별도 할인 제도.",
  },
  {
    icon: "🎖️",
    color: "border-amber-200",
    group: "국가유공자·보훈대상자",
    condition: "국가유공자법상 상이등급 1~7급, 6·25·베트남전 참전유공자 등",
    card: "보훈복지카드 (국가보훈처 발급)",
    where: "가까운 보훈지청 방문 신청",
    note: "대상 범위가 넓습니다. 보훈지청(1577-0606)에 문의하세요.",
  },
  {
    icon: "🕊️",
    color: "border-red-200",
    group: "5·18민주유공자",
    condition: "5·18민주화운동 관련자 보상법 적용 대상자",
    card: "5·18유공자증 제시 또는 전용 카드",
    where: "보훈지청 문의",
    note: "본인 외 유족에게도 일부 혜택 적용.",
  },
];

const REGIONS = [
  { name: "서울", lines: "1~9호선, 경의중앙선, 공항철도, 우이신설선 등 서울 관할 전 노선" },
  { name: "수도권 전철", lines: "수도권 광역급행철도(GTX 제외), 인천1·2호선, 경기 광역버스 일부" },
  { name: "부산·대구·광주·대전·인천", lines: "각 도시철도 무임 적용 (지역마다 기준 동일)" },
];

const APPLY_STEPS = [
  { step: 1, title: "자격 확인", desc: "만 65세 생일이 지났는지, 또는 장애인·유공자 등록 여부를 확인합니다. 노인은 별도 심사 없이 나이만 확인합니다." },
  { step: 2, title: "신청 장소 방문", desc: "가까운 읍·면·동 주민센터 또는 협약 은행(신한·농협·우리·하나 등)을 방문합니다. 장애인·유공자는 주민센터 또는 보훈지청." },
  { step: 3, title: "서류 제출", desc: "신분증(주민등록증·운전면허증)을 지참합니다. 장애인은 장애인등록증, 유공자는 유공자증 추가 지참." },
  { step: 4, title: "카드 발급 및 사용", desc: "현장 또는 우편으로 교통카드 기능이 탑재된 복지카드를 받습니다. 지하철 승차 시 단말기에 태그하면 무임 처리됩니다." },
];

const FAQ = [
  { q: "만 65세 생일 당일부터 바로 무료인가요?", a: "네, 만 65세 생일이 지난 날부터 무임승차 자격이 생깁니다. 하지만 카드 발급 전까지는 이용할 수 없으므로 생일 전후에 미리 신청하는 것이 좋습니다." },
  { q: "기존 교통카드를 계속 쓸 수 있나요?", a: "기존 카드는 그대로 사용하고, 노인복지카드는 별도 발급입니다. 노인복지카드를 지하철 개찰구에 태그하면 무임으로 처리됩니다. 충전 잔액은 필요 없습니다." },
  { q: "KTX·버스에도 무임이 적용되나요?", a: "지하철(도시철도·수도권 전철)에만 적용됩니다. KTX는 만 65세 이상 30% 할인, 고속버스는 별도 경로 할인 제도가 있습니다. 국가유공자는 KTX 50% 할인 별도 적용." },
  { q: "외국에 사는 교포도 신청할 수 있나요?", a: "주민등록이 살아 있는 국내 거주자 기준입니다. 해외 거주 교포는 원칙적으로 국내 주민등록이 있어야 신청 가능합니다." },
];

export default function SubwayFreeRidePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">지하철 무임승차</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-cyan-100 text-cyan-700 px-2.5 py-1 rounded-full">교통복지</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          지하철 무임승차 자격 및 신청 방법 2026<br />
          <span className="text-lg font-normal text-gray-500">노인·장애인·국가유공자 교통복지카드 발급까지</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 4분</p>
      </div>

      <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-4 mb-6">
        <p className="font-bold text-cyan-800 mb-1">신청하지 않으면 혜택을 받을 수 없습니다</p>
        <p className="text-sm text-gray-700">만 65세가 되어도 복지카드를 직접 신청해야 합니다. 자동으로 발급되지 않으니 <strong>주민센터에 방문해 신청</strong>하세요.</p>
      </div>

      <AdSlotHorizontal slot="9019000001" />

      <section className="mt-4 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">무임승차 대상별 자격 및 신청 방법</h2>
        <div className="space-y-4">
          {ELIGIBILITY.map((item) => (
            <div key={item.group} className={`bg-white border-2 ${item.color} rounded-2xl p-5`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-extrabold text-gray-800 text-base">{item.group}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2"><span className="text-xs font-bold text-gray-500 w-14 flex-shrink-0">자격 조건</span><p className="text-gray-700">{item.condition}</p></div>
                <div className="flex gap-2"><span className="text-xs font-bold text-gray-500 w-14 flex-shrink-0">발급 카드</span><p className="font-semibold text-gray-800">{item.card}</p></div>
                <div className="flex gap-2"><span className="text-xs font-bold text-gray-500 w-14 flex-shrink-0">신청 장소</span><p className="text-gray-700">{item.where}</p></div>
                <p className="bg-gray-50 rounded-xl px-3 py-2 text-gray-600 text-xs">💡 {item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">적용 지역 및 노선</h2>
        <div className="space-y-2">
          {REGIONS.map((r) => (
            <div key={r.name} className="bg-white border border-gray-100 rounded-xl p-4 text-sm">
              <span className="font-bold text-cyan-700 mr-2">{r.name}</span>
              <span className="text-gray-600">{r.lines}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">※ GTX(수도권광역급행철도)는 무임 미적용. 일반 광역전철과 다릅니다.</p>
      </section>

      <AdSlotHorizontal slot="9019000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">신청 절차</h2>
        <div className="space-y-3">
          {APPLY_STEPS.map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">{item.step}</div>
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
          <Link href="/guides/senior-jobs" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">노인 일자리</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 주민센터 방문 또는 129 복지 콜센터 · 보훈지청 1577-0606</p>
    </article>
  );
}
