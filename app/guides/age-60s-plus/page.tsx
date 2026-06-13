import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "60대 이상 복지혜택 총정리 2026 — 기초연금 334,810원·노인일자리·장기요양",
  description:
    "만 60세 이상이라면 꼭 챙겨야 할 혜택만 모았습니다. 기초연금 월 최대 334,810원, 노인일자리 월 27만원, 지하철 무임승차, 장기요양, 틀니·임플란트 건강보험까지 — 신청 안 하면 못 받습니다.",
  keywords: [
    "60대 복지혜택", "노인 복지혜택 총정리", "기초연금 신청", "노인 일자리 신청",
    "노인장기요양보험", "치매안심센터", "어르신 지원금 2026", "70대 받을 수 있는 혜택",
    "노인 의료비 지원", "에너지바우처 신청",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/age-60s-plus" },
  openGraph: {
    title: "60대 이상이 받을 수 있는 복지혜택 총정리 2026 | 복지로드",
    description: "기초연금·노인일자리·장기요양까지, 어르신 필수 혜택 한 번에 확인.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/age-60s-plus", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "60대 이상이 받을 수 있는 복지혜택 총정리 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/age-60s-plus",
  inLanguage: "ko", datePublished: "2026-06-01", dateModified: "2026-06-08",
};

const BENEFITS = [
  {
    name: "기초연금",
    icon: "💰",
    color: "border-cyan-200",
    amount: "단독 최대 월 349,700원 / 부부 최대 월 559,520원",
    target: "만 65세 이상, 소득인정액 단독 247만원·부부 395만원 이하 (하위 70%)",
    how: "주민센터·복지로·국민연금공단",
    note: "국민연금이 없어도 신청 가능. 신청자의 약 70%가 받습니다. 안 신청하면 자동 지급 안 됩니다.",
    link: "/guides/basic-pension-guide",
  },
  {
    name: "노인 일자리·사회활동 지원",
    icon: "👔",
    color: "border-emerald-200",
    amount: "공익활동 월 27만원 / 사회서비스형 월 59만원 / 시장형 월 83만원 이상",
    target: "만 60세 이상 (공익활동은 만 65세 이상)",
    how: "주민센터, 노인일자리 및 사회활동 지원센터, 복지로",
    note: "전국 100만 명 이상 참여. 신청자가 많아 대기가 발생할 수 있으니 1월에 신청하세요.",
    link: "/#benefits",
  },
  {
    name: "노인장기요양보험",
    icon: "🏥",
    color: "border-blue-200",
    amount: "방문요양·주간보호·요양시설 이용비 85~100% 지원",
    target: "만 65세 이상 또는 노인성 질환(치매·뇌졸중 등) 보유자",
    how: "국민건강보험공단(1577-1000) 전화 또는 방문 신청",
    note: "신청 후 등급 판정까지 최대 30일. 1~5등급·인지지원등급으로 나뉩니다. 치매 초기라도 인지지원등급 받을 수 있습니다.",
    link: "/#benefits",
  },
  {
    name: "치매안심센터 (무료 검진·서비스)",
    icon: "🧠",
    color: "border-purple-200",
    amount: "치매 조기검진·상담·쉼터·가족 교육 모두 무료",
    target: "만 60세 이상 (검진은 만 60세 이상 누구나)",
    how: "전국 256개 치매안심센터 (주민센터에서 위치 안내)",
    note: "치매 초기 발견 시 진행 속도를 크게 늦출 수 있습니다. 가족이 함께 방문하는 것을 권장합니다.",
    link: "/#benefits",
  },
  {
    name: "틀니·임플란트 건강보험 급여",
    icon: "🦷",
    color: "border-pink-200",
    amount: "완전틀니 30% 부담 / 부분틀니 30% 부담 / 임플란트 2개 30% 부담",
    target: "만 65세 이상 건강보험 가입자",
    how: "치과 방문 시 자동 적용 (건강보험증 지참)",
    note: "완전틀니 2개·부분틀니 4개·임플란트 2개까지 급여 적용. 기존 틀니가 있어도 7년 경과 후 재급여 가능.",
    link: "/#benefits",
  },
  {
    name: "에너지바우처 (난방·냉방비)",
    icon: "🔥",
    color: "border-orange-200",
    amount: "연 최대 254,500원 (1인 가구 147,900원, 2인 이상 차등)",
    target: "만 65세 이상 기초수급자·차상위계층",
    how: "주민센터 방문 신청 (매년 6~11월)",
    note: "편의점·마트·온라인에서도 사용 가능한 전자 바우처. 동절기와 하절기 모두 사용 가능.",
    link: "/#benefits",
  },
  {
    name: "노인 돌봄 서비스",
    icon: "🤝",
    color: "border-teal-200",
    amount: "주 1~3회 방문 서비스 (무료~일부 자부담)",
    target: "만 65세 이상 독거노인·취약노인",
    how: "주민센터 또는 노인복지관",
    note: "안전 확인·가사 지원·외출 동행·말벗 서비스 포함. 독거노인이라면 반드시 신청하세요.",
    link: "/#benefits",
  },
  {
    name: "지하철·버스 무임승차",
    icon: "🚇",
    color: "border-gray-200",
    amount: "지하철 전면 무료 / 시내버스 무료 (일부 지자체)",
    target: "만 65세 이상",
    how: "주민센터에서 어르신 교통카드(우대용) 발급",
    note: "교통카드 발급 없이 현금으로도 무임 가능. 지역별로 버스 무임 여부가 다릅니다.",
    link: "/#benefits",
  },
];

const CHILD_CHECKLIST = [
  { step: 1, title: "기초연금 먼저 확인", desc: "부모님이 만 65세 이상이고 재산·소득이 많지 않다면 기초연금부터 확인하세요. 주민센터나 복지로에서 대리 신청이 가능합니다." },
  { step: 2, title: "장기요양 등급 신청", desc: "거동이 불편하거나 치매 증상이 있다면 국민건강보험공단(1577-1000)에 장기요양 등급을 신청하세요. 등급을 받으면 방문 요양사를 저렴하게 이용할 수 있습니다." },
  { step: 3, title: "치매안심센터 방문", desc: "가까운 치매안심센터에서 무료 치매 조기검진을 받으세요. 초기 발견이 중요합니다." },
  { step: 4, title: "틀니·임플란트 확인", desc: "치과 방문 시 어르신임을 알리면 자동으로 급여 적용됩니다. 비급여로 과다 청구되지 않도록 확인하세요." },
];

export default function Age60sPlusPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">60대 이상 혜택 총정리</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-cyan-100 text-cyan-700 px-2.5 py-1 rounded-full">노년</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          60대 이상이 받을 수 있는 복지혜택 총정리 2026<br />
          <span className="text-lg font-normal text-gray-500">기초연금·노인일자리·장기요양·치매지원까지</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 6분</p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        우리나라 어르신의 많은 분들이 받을 수 있는 복지혜택을 신청하지 않아 놓치고 있습니다. 기초연금만 해도 자격이 되는 분의 약 20%가 신청하지 않아 매달 수십만 원을 못 받고 있습니다. 자녀분들도 함께 확인해드리세요.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        아래 혜택들은 대부분 <strong>주민센터 한 곳에서 한 번에 신청</strong>할 수 있습니다. 몸이 불편하시면 자녀가 대리 신청도 가능합니다.
      </p>

      <AdSlotHorizontal slot="9005000001" />

      <div className="mt-6 space-y-4">
        {BENEFITS.map((benefit) => (
          <div key={benefit.name} className={`bg-white rounded-2xl border-2 ${benefit.color} p-5`}>
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{benefit.icon}</span>
                <h2 className="font-extrabold text-gray-800 text-lg">{benefit.name}</h2>
              </div>
              <Link href={benefit.link}
                className="flex-shrink-0 text-xs text-emerald-600 border border-emerald-300 px-2.5 py-1 rounded-lg hover:bg-emerald-50 font-semibold transition-colors">
                상세 →
              </Link>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <span className="text-xs font-bold text-emerald-600 w-12 flex-shrink-0 mt-0.5">지원액</span>
                <p className="font-bold text-gray-800">{benefit.amount}</p>
              </div>
              <div className="flex gap-2">
                <span className="text-xs font-bold text-gray-500 w-12 flex-shrink-0 mt-0.5">대상</span>
                <p className="text-gray-700">{benefit.target}</p>
              </div>
              <div className="flex gap-2">
                <span className="text-xs font-bold text-gray-500 w-12 flex-shrink-0 mt-0.5">신청</span>
                <p className="text-gray-700">{benefit.how}</p>
              </div>
              <p className="bg-gray-50 rounded-xl px-3 py-2 text-gray-600 text-xs">💡 {benefit.note}</p>
            </div>
          </div>
        ))}
      </div>

      <AdSlotHorizontal slot="9005000002" />

      <section className="mt-8 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">자녀가 부모님을 위해 해드릴 것</h2>
        <div className="space-y-3 text-sm">
          {CHILD_CHECKLIST.map((item) => (
            <div key={item.step} className="flex gap-3 bg-white border border-gray-100 rounded-xl p-4">
              <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{item.step}</div>
              <div>
                <p className="font-bold text-gray-800 mb-0.5">{item.title}</p>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
        <p className="font-bold text-emerald-800 mb-3">관련 가이드</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/guides/basic-pension-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">기초연금 신청 가이드 →</Link>
          <Link href="/guides/elderly-benefits" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">65세 이상 혜택 상세</Link>
          <Link href="/calculator" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">기초연금 계산기</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 129 복지 콜센터 (무료, 월~금 9~18시)에서 전화 상담도 가능합니다.</p>
    </article>
  );
}
