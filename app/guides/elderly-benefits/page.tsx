import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "만 65세 이상 노인이 받을 수 있는 모든 혜택 총정리 2026",
  description:
    "기초연금, 노인 일자리, 장기요양보험, 노인 의료비 감면, 에너지바우처, 틀니·임플란트 지원까지 — 만 65세 이상이 받을 수 있는 정부 혜택을 한 곳에 총정리했습니다.",
  keywords: [
    "노인 받을 수 있는 혜택", "65세 이상 혜택", "노인 복지혜택 총정리",
    "기초연금 신청", "노인 지원금", "어르신 복지", "2026 노인 혜택",
    "노인 의료비 지원", "노인 일자리", "장기요양보험",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/elderly-benefits" },
  openGraph: {
    title: "65세 이상 노인이 받을 수 있는 모든 혜택 2026 | 복지로드",
    description: "기초연금부터 틀니 지원까지, 어르신 혜택 총정리.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/elderly-benefits", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "만 65세 이상 노인이 받을 수 있는 모든 혜택 총정리 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/elderly-benefits",
  inLanguage: "ko", datePublished: "2026-05-01", dateModified: "2026-05-28",
};

const BENEFITS = [
  {
    name: "기초연금",
    icon: "💰",
    color: "border-cyan-200",
    amount: "단독 최대 월 349,700원 / 부부 최대 월 559,520원",
    target: "만 65세 이상, 소득인정액 247만원(단독) 이하",
    how: "주민센터·복지로·국민연금공단",
    note: "국민연금 없어도 신청 가능. 매년 인상됩니다.",
    link: "/guides/basic-pension-guide",
  },
  {
    name: "노인 일자리·사회활동 지원",
    icon: "👔",
    color: "border-emerald-200",
    amount: "월 27만원~83만원 (활동 유형에 따라 다름)",
    target: "만 60세 이상 (일부 65세 이상)",
    how: "주민센터, 노인일자리 및 사회활동 지원센터",
    note: "공익활동·사회서비스형·취업연계형 등 유형 다양. 신청자 많아 경쟁 있음.",
    link: "/#benefits",
  },
  {
    name: "노인장기요양보험",
    icon: "🏥",
    color: "border-blue-200",
    amount: "방문요양·주간보호·요양시설 이용비 85~100% 지원",
    target: "만 65세 이상, 또는 치매·뇌졸중 등 노인성 질환 보유자",
    how: "국민건강보험공단 방문 또는 전화(1577-1000)",
    note: "등급 인정 심사 후 1~5등급·인지지원등급으로 지원. 신청 후 최대 30일 소요.",
    link: "/#benefits",
  },
  {
    name: "기초생활수급자 의료급여",
    icon: "🏨",
    color: "border-red-200",
    amount: "입원비·외래 진료비 거의 0원 (1종)",
    target: "기준 중위소득 40% 이하 (기초생활수급자)",
    how: "주민센터·복지로",
    note: "기초연금과 동시 수급 가능. 소득이 낮은 어르신은 꼭 확인.",
    link: "/guides/basic-living-guide",
  },
  {
    name: "틀니·임플란트 급여",
    icon: "🦷",
    color: "border-purple-200",
    amount: "틀니 30% 본인부담 / 임플란트 30% 본인부담 (건강보험 적용)",
    target: "만 65세 이상 건강보험 가입자",
    how: "치과 방문 시 자동 적용",
    note: "완전틀니 2개, 부분틀니 4개, 임플란트 2개까지 급여 적용.",
    link: "/#benefits",
  },
  {
    name: "에너지바우처 (난방·냉방비)",
    icon: "🔥",
    color: "border-orange-200",
    amount: "연 최대 254,500원 (가구원 수에 따라 차등)",
    target: "만 65세 이상 기초수급자·차상위계층",
    how: "주민센터 방문 신청 (매년 6~11월)",
    note: "동절기 난방비·하절기 냉방비 모두 포함. 편의점·마트에서도 사용 가능.",
    link: "/#benefits",
  },
  {
    name: "노인 돌봄 서비스",
    icon: "🤝",
    color: "border-pink-200",
    amount: "주 1~3회 방문 서비스 (무료~일부 부담)",
    target: "만 65세 이상 독거·취약 노인",
    how: "주민센터 또는 노인복지관",
    note: "안전 확인·가사 지원·외출 동행 등 다양한 서비스 제공.",
    link: "/#benefits",
  },
  {
    name: "노인 건강검진",
    icon: "🩺",
    color: "border-teal-200",
    amount: "일반 건강검진·암 검진 무료",
    target: "만 40세 이상 (건강검진), 특정 암은 만 50세 이상",
    how: "국민건강보험공단 지정 검진기관",
    note: "2년마다 1회 무료 건강검진. 위암·대장암·폐암·유방암·자궁경부암 무료 검진 포함.",
    link: "/#benefits",
  },
];

export default function ElderlyBenefitsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">노인 혜택 총정리</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-cyan-100 text-cyan-700 px-2.5 py-1 rounded-full">노년</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          만 65세 이상 노인이 받을 수 있는 모든 혜택 2026<br />
          <span className="text-lg font-normal text-gray-500">기초연금부터 틀니·난방비까지 한 곳에 총정리</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 5월 · 읽는 시간 약 6분</p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        우리나라 노인 인구는 이미 전체의 20%를 넘었고, 정부는 매년 노인 복지 예산을 늘리고 있습니다. 그러나 실제로 본인이 받을 수 있는 혜택을 모두 챙기는 어르신은 많지 않습니다. 특히 자녀들이 대신 신청해드리는 경우도 많으니, 부모님이 받을 수 있는 혜택을 꼭 확인해드리세요.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        기초연금만 해도 <strong>신청자의 약 20%가 자격이 되면서도 신청하지 않아 못 받는다</strong>는 통계가 있습니다. 아래 혜택을 하나하나 확인하고, 해당되는 것은 반드시 신청하세요.
      </p>

      <AdSlotHorizontal slot="9002000001" />

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

      <AdSlotHorizontal slot="9002000002" />

      <section className="mt-8 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">자녀가 부모님을 위해 해드려야 할 것</h2>
        <div className="space-y-3 text-sm">
          {[
            { step: 1, title: "기초연금 먼저 확인", desc: "부모님이 만 65세 이상이고 재산이 많지 않다면 기초연금부터 신청하세요. 매월 최대 35만원입니다. 주민센터에 부모님과 함께 방문하거나 복지로에서 대리 신청이 가능합니다." },
            { step: 2, title: "장기요양 등급 신청", desc: "거동이 불편하거나 치매 증상이 있다면 국민건강보험공단(1577-1000)에 장기요양 등급 신청을 하세요. 등급 인정 시 방문 요양사를 저렴하게 이용할 수 있습니다." },
            { step: 3, title: "에너지바우처 신청", desc: "저소득 어르신이라면 매년 6~11월 에너지바우처를 신청하세요. 겨울 난방비 걱정을 줄일 수 있습니다." },
            { step: 4, title: "건강검진 챙기기", desc: "2년마다 무료 건강검진을 꼭 받으세요. 국민건강보험공단 홈페이지 또는 가까운 검진기관에서 확인합니다." },
          ].map((item) => (
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
        <p className="font-bold text-emerald-800 mb-3">관련 서비스</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/guides/basic-pension-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">기초연금 신청 가이드 →</Link>
          <Link href="/calculator" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">기초연금 계산기</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 129 복지 콜센터 (무료, 월~금 9~18시)에서 전화 상담도 가능합니다.</p>
    </article>
  );
}
