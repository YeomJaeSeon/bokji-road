import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "아이 낳으면 받는 돈 총정리 2026 — 출산부터 초등 전까지 정부지원금",
  description:
    "임신·출산 진료비 지원, 첫만남이용권 200만원, 부모급여 최대 100만원, 아동수당 10만원까지 — 아이를 낳으면 받을 수 있는 정부 지원금을 연도별로 총정리했습니다.",
  keywords: [
    "아이 낳으면 받는 돈", "출산 지원금", "출산혜택 총정리", "첫만남이용권",
    "부모급여", "아동수당", "임신 지원금", "2026 출산 혜택",
    "아이 낳으면 얼마 받아", "육아 정부지원",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/baby-money" },
  openGraph: {
    title: "아이 낳으면 받는 돈 총정리 2026 | 복지로드",
    description: "임신~초등 전까지 정부 지원금을 시기별로 총정리.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/baby-money", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "아이 낳으면 받는 돈 총정리 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/baby-money",
  inLanguage: "ko", datePublished: "2026-05-01", dateModified: "2026-05-28",
};

const TIMELINE = [
  {
    period: "임신 중",
    icon: "🤰",
    color: "bg-pink-50 border-pink-200",
    tagColor: "bg-pink-100 text-pink-700",
    items: [
      { name: "임신·출산 진료비 바우처 (국민행복카드)", amount: "단태아 100만원 / 다태아 140만원", note: "산부인과·약국 등에서 사용 가능한 바우처. 임신 확인 후 바로 신청." },
      { name: "산전 검사비 지원", amount: "초음파·기형아 검사 등 일부 건강보험 적용", note: "산부인과 방문 시 자동 적용" },
    ],
  },
  {
    period: "출생 직후",
    icon: "👶",
    color: "bg-rose-50 border-rose-200",
    tagColor: "bg-rose-100 text-rose-700",
    items: [
      { name: "첫만남이용권", amount: "첫째 200만원 / 둘째 이상 300만원 (바우처)", note: "출생 후 사용 기한 있음. 출생신고 시 신청." },
      { name: "부모급여 (0세)", amount: "가정양육 월 100만원 / 어린이집 이용 월 50만원 바우처", note: "소득 기준 없음. 모든 가정 해당." },
      { name: "아동수당", amount: "월 10만원 (만 8세 미만 전체)", note: "부모급여와 동시 수령 가능. 출생 후 60일 내 신청 시 소급 지급." },
    ],
  },
  {
    period: "생후 12개월~23개월 (만 1세)",
    icon: "🧒",
    color: "bg-orange-50 border-orange-200",
    tagColor: "bg-orange-100 text-orange-700",
    items: [
      { name: "부모급여 (1세)", amount: "가정양육 월 50만원 / 어린이집 이용 월 15만원 바우처", note: "자동 전환. 별도 신청 불필요." },
      { name: "아동수당", amount: "월 10만원 계속", note: "만 8세 미만 유지." },
    ],
  },
  {
    period: "만 2세~7세",
    icon: "🌱",
    color: "bg-amber-50 border-amber-200",
    tagColor: "bg-amber-100 text-amber-700",
    items: [
      { name: "가정양육수당", amount: "월 10~20만원 (연령에 따라 차등)", note: "어린이집·유치원 미이용 시 지급." },
      { name: "유아학비 지원 (유치원)", amount: "월 최대 24만원 바우처", note: "사립유치원 학비 일부 지원." },
      { name: "보육료 지원 (어린이집)", amount: "연령별 정부 지원 단가 전액", note: "국공립 어린이집 우선 입소 신청 가능." },
      { name: "아동수당", amount: "월 10만원 (만 8세 미만 유지)", note: "" },
    ],
  },
  {
    period: "추가 혜택 (소득 기준)",
    icon: "💰",
    color: "bg-emerald-50 border-emerald-200",
    tagColor: "bg-emerald-100 text-emerald-700",
    items: [
      { name: "산후조리 비용 지원", amount: "40만~100만원 (지자체별, 소득 기준)", note: "지역마다 다름. 주민센터에 문의." },
      { name: "아이돌봄서비스", amount: "시간당 11,080원에서 소득에 따라 정부 지원", note: "아이돌봄 전담 돌보미 파견 서비스." },
      { name: "자녀장려금", amount: "자녀 1인당 최대 100만원", note: "연 소득 4,000만원 미만 홑벌이 가구. 5월 홈택스 신청." },
      { name: "다자녀 혜택", amount: "셋째 이상 각종 세금 감면·우선 지원", note: "국민주택 우선 공급, 자동차 취득세 감면 등." },
    ],
  },
];

export default function BabyMoneyPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">아이 낳으면 받는 돈</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-pink-100 text-pink-700 px-2.5 py-1 rounded-full">임신·출산·육아</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          아이 낳으면 받는 돈 총정리 2026<br />
          <span className="text-lg font-normal text-gray-500">임신~초등 전까지 시기별 정부 지원금 한눈에</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 5월 · 읽는 시간 약 5분</p>
      </div>

      <div className="bg-pink-50 border border-pink-200 rounded-2xl p-4 mb-6 text-sm">
        <p className="font-bold text-pink-800 mb-2">📌 2026년 핵심 지원금 요약</p>
        <ul className="text-gray-700 space-y-1">
          <li>• 첫만남이용권: 첫째 <strong>200만원</strong>, 둘째 이상 <strong>300만원</strong></li>
          <li>• 부모급여 0세: 가정양육 <strong>월 100만원</strong></li>
          <li>• 아동수당: <strong>월 10만원</strong> (만 8세 미만 전체)</li>
          <li>• 출산 시 0세 첫 달 기준 최대 <strong>310만원+@</strong> 받을 수 있음</li>
        </ul>
      </div>

      <AdSlotHorizontal slot="9003000001" />

      <p className="text-gray-700 leading-relaxed mb-6 mt-4">
        저출산 문제가 심각해지면서 정부의 출산·육아 지원이 매년 확대되고 있습니다. 2026년 현재, 아이 한 명을 낳으면 만 8세까지 정부로부터 받는 현금·바우처 합계가 <strong>3,000만원 이상</strong>에 달합니다. 단, 각 혜택은 별도로 신청해야 받을 수 있습니다.
      </p>

      <div className="space-y-6">
        {TIMELINE.map((stage) => (
          <section key={stage.period} className={`rounded-2xl border p-5 ${stage.color}`}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{stage.icon}</span>
              <h2 className="font-bold text-gray-800">{stage.period}</h2>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${stage.tagColor}`}>지원</span>
            </div>
            <div className="space-y-3">
              {stage.items.map((item) => (
                <div key={item.name} className="bg-white rounded-xl p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-bold text-gray-800 text-sm">{item.name}</p>
                    <p className="text-sm font-extrabold text-emerald-700 text-right flex-shrink-0 ml-2">{item.amount}</p>
                  </div>
                  {item.note && <p className="text-xs text-gray-500">{item.note}</p>}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <AdSlotHorizontal slot="9003000002" />

      <section className="mt-8 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">출생신고와 동시에 신청하는 방법</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          출생신고 시 주민센터에서 <strong>행복출산 원스톱 서비스</strong>를 이용하면 부모급여·아동수당·첫만남이용권을 한 번에 신청할 수 있습니다. 별도로 복지로를 방문하지 않아도 됩니다.
        </p>
        <div className="bg-white border border-gray-100 rounded-2xl p-4 text-sm">
          <p className="font-bold text-gray-800 mb-2">📋 출생신고 시 준비물</p>
          <ul className="text-gray-600 space-y-1">
            <li>• 출생신고서 (출산 병원에서 작성)</li>
            <li>• 신분증</li>
            <li>• 수령 계좌 통장 사본</li>
            <li>• 건강보험증 (있다면)</li>
          </ul>
        </div>
      </section>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
        <p className="font-bold text-emerald-800 mb-3">관련 서비스</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/guides/parental-allowance-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">부모급여 신청 가이드 →</Link>
          <Link href="/calculator" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">부모급여 계산기</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">지역별 추가 출산 지원금은 주민센터에 문의하세요. 지자체별로 추가 지원이 있습니다.</p>
    </article>
  );
}
