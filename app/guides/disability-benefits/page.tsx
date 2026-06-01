import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "장애인 복지혜택 총정리 2026 — 장애인연금·활동지원·의료비·세금감면",
  description:
    "등록 장애인이 받을 수 있는 장애인연금, 장애수당, 활동지원, 의료비 지원, 보조기기, 세금 감면까지 2026년 기준 총정리. 장애 등록 방법도 안내합니다.",
  keywords: [
    "장애인 혜택", "장애인 지원금", "장애인연금", "장애수당", "장애인 활동지원",
    "장애인 복지혜택 총정리", "장애인 세금감면", "장애인 등록 방법",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/disability-benefits" },
  openGraph: {
    title: "장애인 복지혜택 총정리 2026 | 복지로드",
    description: "장애인연금·활동지원·의료비·세금 감면까지 한 곳에서 확인.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/disability-benefits", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "장애인 복지혜택 총정리 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/disability-benefits",
  inLanguage: "ko", datePublished: "2026-05-01", dateModified: "2026-06-01",
};

const BENEFITS_BY_CATEGORY = [
  {
    category: "현금 급여",
    icon: "💰",
    color: "bg-purple-50 border-purple-200",
    items: [
      { name: "장애인연금", target: "만 18세 이상 중증장애인, 소득인정액 기준 이하", amount: "기초급여 최대 월 334,810원 + 부가급여 최대 월 90,000원", note: "국민연금 가입 이력 없어도 받을 수 있음. 주민센터·복지로 신청." },
      { name: "장애수당", target: "경증장애인(재가), 기초수급자·차상위계층", amount: "월 4~6만원", note: "장애인연금과 동시 수령 불가." },
      { name: "장애아동수당", target: "만 18세 미만 장애아동, 기초수급·차상위", amount: "중증 월 9~22만원, 경증 월 3~11만원", note: "부모 소득 기준 적용. 주민센터에서 신청." },
    ],
  },
  {
    category: "의료·재활 지원",
    icon: "🏥",
    color: "bg-blue-50 border-blue-200",
    items: [
      { name: "장애인 의료급여", target: "기초생활수급 장애인", amount: "외래·입원비 거의 0원 (1종)", note: "생계급여 수급자라면 의료급여 1종 적용." },
      { name: "발달재활서비스", target: "만 18세 미만 뇌병변·지적·자폐·청각·언어·시각 장애 아동", amount: "월 22~25만원 바우처", note: "언어·미술·음악·행동 치료 등 재활 서비스 제공." },
      { name: "언어발달지원서비스", target: "만 12세 미만 비장애아동 (장애 부모의 자녀)", amount: "월 22만원 바우처", note: "장애인 부모의 비장애 자녀에게 언어 발달 지원." },
      { name: "보조기기 지원", target: "등록 장애인", amount: "휠체어·보청기·의지·보조기 등 구매비 지원", note: "국민건강보험 급여 + 추가 지원. 품목별 한도 있음." },
    ],
  },
  {
    category: "일상생활 지원",
    icon: "🤝",
    color: "bg-emerald-50 border-emerald-200",
    items: [
      { name: "장애인 활동지원", target: "만 6세~65세 장애인, 활동지원 등급 인정자", amount: "월 최대 479시간 (등급에 따라 다름) 활동보조인 파견", note: "가장 중요한 장애인 서비스 중 하나. 일상생활·이동·사회활동 지원." },
      { name: "장애인 돌봄서비스", target: "만 65세 이상 또는 활동지원 등급 외 장애인", amount: "방문 돌봄 서비스 (일부 무료~소득 기준 부담)", note: "장기요양보험 또는 노인돌봄서비스 연계." },
      { name: "이동지원 (장애인 콜택시)", target: "중증장애인", amount: "저렴한 요금으로 문 앞 픽업 이동 서비스", note: "지자체별 운영. 시·군·구청에서 신청." },
    ],
  },
  {
    category: "세금·요금 감면",
    icon: "📉",
    color: "bg-amber-50 border-amber-200",
    items: [
      { name: "자동차 취득세·자동차세 감면", target: "등록 장애인 (차량 1대)", amount: "취득세 140만원 한도 면제, 자동차세 50~100% 감면", note: "주민센터 또는 구청에서 신청." },
      { name: "통신요금 감면", target: "기초수급 또는 차상위 장애인", amount: "월 최대 26,000원 요금 감면", note: "KT·SKT·LGU+ 고객센터 또는 주민센터." },
      { name: "전기요금 할인", target: "등록 장애인 (소득 기준)", amount: "월 최대 16,000원 할인 (중증 30%, 경증 20%)", note: "한국전력 고객센터(☎ 123) 또는 온라인 신청." },
      { name: "지하철·버스 무료", target: "등록 장애인 + 동반 보호자 1인", amount: "전국 지하철·시내버스 무료 (1~6급 전체)", note: "장애인 복지카드 발급 후 자동 적용." },
    ],
  },
  {
    category: "교육·취업",
    icon: "🎓",
    color: "bg-lime-50 border-lime-200",
    items: [
      { name: "장애인 특수교육 지원", target: "특수교육 대상 학생", amount: "방과후 활동·치료지원 무료", note: "교육지원청에서 신청." },
      { name: "장애인 고용 지원금", target: "장애인 취업자", amount: "취업 장려금, 직장 적응 훈련 등", note: "한국장애인고용공단(☎ 1588-1519)에서 안내." },
      { name: "장애인 직업재활", target: "취업을 원하는 장애인", amount: "직업훈련·취업 알선 무료", note: "한국장애인고용공단 또는 장애인복지관." },
    ],
  },
];

export default function DisabilityBenefitsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">장애인 혜택 총정리</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full">장애인</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          장애인 복지혜택 총정리 2026<br />
          <span className="text-lg font-normal text-gray-500">연금·활동지원·의료비·세금 감면까지 빠짐없이</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 7분</p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        장애인으로 등록하면 단순히 장애인연금만 받는 게 아닙니다. 의료비, 교통비, 통신요금, 자동차세, 일상생활 지원까지 수십 가지 혜택이 있습니다. 대부분은 개별 신청이 필요합니다. 아직 등록하지 않으셨다면 <strong>주민센터에서 장애인 등록부터</strong> 시작하세요.
      </p>

      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-6 text-sm">
        <p className="font-bold text-purple-800 mb-2">📌 장애인 등록 방법 (아직 등록 안 했다면)</p>
        <ol className="text-gray-700 space-y-1 list-decimal list-inside">
          <li>주민센터 방문 → 장애인 등록 신청서 제출</li>
          <li>지정 의료기관에서 장애진단 (진단서 발급)</li>
          <li>국민연금공단 심사 후 장애 정도 결정 (중증/경증)</li>
          <li>장애인 복지카드 발급 → 이후 혜택 자동 적용</li>
        </ol>
      </div>

      <AdSlotHorizontal slot="A002000001" />

      <div className="mt-6 space-y-8">
        {BENEFITS_BY_CATEGORY.map((cat) => (
          <section key={cat.category} className={`rounded-2xl border p-5 ${cat.color}`}>
            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
              <span className="text-2xl">{cat.icon}</span>{cat.category}
            </h2>
            <div className="space-y-4">
              {cat.items.map((item) => (
                <div key={item.name} className="bg-white rounded-xl p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-bold text-gray-800">{item.name}</p>
                    <p className="text-sm font-extrabold text-emerald-700 text-right flex-shrink-0 ml-2">{item.amount}</p>
                  </div>
                  <p className="text-xs text-gray-500 mb-1">대상: {item.target}</p>
                  <p className="text-xs text-gray-600 bg-gray-50 rounded-lg p-2">{item.note}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <AdSlotHorizontal slot="A002000002" />

      <section className="mt-8 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">☎ 장애인 지원 문의처</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            { name: "복지 콜센터", tel: "129", desc: "장애인 급여 전반 (무료, 월~금)" },
            { name: "한국장애인고용공단", tel: "1588-1519", desc: "장애인 취업·직업훈련" },
            { name: "국립재활원", tel: "02-901-1700", desc: "재활 서비스·보조기기" },
            { name: "장애인복지관", tel: "지역별 다름", desc: "지역 장애인 종합 서비스" },
          ].map((item) => (
            <div key={item.name} className="bg-white border border-gray-100 rounded-xl p-3">
              <p className="font-bold text-gray-800">{item.name}</p>
              <p className="text-emerald-600 font-bold">☎ {item.tel}</p>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
        <p className="font-bold text-emerald-800 mb-3">관련 서비스</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/guides/all-benefits-2026" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">전체 정부 지원금 보기 →</Link>
          <Link href="/guides/low-income-benefits" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">저소득층 지원 보기</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
    </article>
  );
}
