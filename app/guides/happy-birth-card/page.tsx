import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "국민행복카드 신청 방법 2026 — 임신·출산 진료비 바우처 완벽 가이드",
  description:
    "2026년 국민행복카드 신청 방법, 지원 금액, 사용 가능 항목, 카드사별 혜택까지 완벽 안내합니다. 임신 확인 즉시 신청 가능하며 진료비·분만비·산후조리원에 사용할 수 있습니다.",
  keywords: [
    "국민행복카드 신청", "임신 출산 진료비 바우처", "국민행복카드 발급방법",
    "임신 바우처 2026", "출산 바우처", "국민행복카드 사용처", "국민행복카드 금액",
    "임산부 지원금", "임신 혜택 신청", "출산 지원금 신청",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/happy-birth-card" },
  openGraph: {
    title: "국민행복카드 신청 방법 2026 | 복지로드",
    description: "임신 확인 즉시 신청, 진료비·분만비·산후조리원 사용 가능.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/happy-birth-card", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "국민행복카드 신청 방법 2026 — 임신·출산 진료비 바우처 완벽 가이드",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/happy-birth-card",
  inLanguage: "ko", datePublished: "2026-06-08", dateModified: "2026-06-08",
};

const VOUCHER_TYPES = [
  {
    name: "임신·출산 진료비 (바우처)",
    icon: "🤰",
    color: "border-pink-200",
    amount: "단태아 100만원 / 다태아 140만원",
    period: "분만 예정일 이후 2년까지 사용",
    usage: "산부인과·조산원 진료비, 분만비, 임신 관련 약제비",
    note: "출산이 아닌 임신 중에도 사용 가능. 유산·사산한 경우에도 지원됩니다.",
  },
  {
    name: "첫만남이용권",
    icon: "🎁",
    color: "border-rose-200",
    amount: "첫째 200만원 / 둘째 이상 300만원",
    period: "출생 후 1년까지 사용",
    usage: "아동 관련 제품·서비스 전반 (기저귀, 분유, 유아용품 등)",
    note: "국민행복카드로 자동 지급. 온라인 쇼핑몰에서도 사용 가능합니다.",
  },
  {
    name: "산후조리원 비용 지원",
    icon: "🏥",
    color: "border-purple-200",
    amount: "산후조리원 이용비의 일부 (지자체별 별도 지원)",
    period: "출산 후 90일 이내",
    usage: "국민행복카드 제휴 산후조리원",
    note: "국민행복카드 바우처와 별도로 지자체 산후조리원 비용 지원이 추가로 있습니다. 거주 지역 지원 여부 확인 필요.",
  },
];

const CARD_ISSUERS = [
  { name: "국민카드", benefit: "전월 실적 무관 임산부 할인, 산부인과 5% 할인" },
  { name: "삼성카드", benefit: "임신·육아 관련 쇼핑몰 캐시백" },
  { name: "롯데카드", benefit: "마트·온라인 쇼핑 할인" },
  { name: "신한카드", benefit: "산부인과·약국 5% 할인" },
  { name: "BC카드", benefit: "포인트 추가 적립" },
];

const APPLY_STEPS = [
  {
    step: 1,
    title: "임신 확인 (산부인과)",
    desc: "산부인과에서 임신을 확인하고 임신확인서를 발급받습니다.",
  },
  {
    step: 2,
    title: "국민행복카드 신청",
    desc: "건강보험공단(1577-1000), 복지로(bokjiro.go.kr), 제휴 카드사(국민·삼성·롯데·신한·BC 등) 중 하나를 선택해 신청합니다. 이미 국민행복카드가 있다면 바우처만 추가 신청합니다.",
  },
  {
    step: 3,
    title: "카드 수령 및 바우처 충전 확인",
    desc: "카드 수령 후 카드사 앱 또는 건강보험공단 홈페이지에서 바우처 잔액을 확인합니다. 바우처는 카드 발급일 기준 충전됩니다.",
  },
  {
    step: 4,
    title: "사용",
    desc: "임신 관련 진료, 분만, 출산 후 아동 관련 쇼핑 등에 사용합니다. 일반 카드처럼 결제 후 바우처 잔액에서 차감됩니다.",
  },
];

const FAQ = [
  {
    q: "유산·사산한 경우에도 바우처를 받을 수 있나요?",
    a: "네, 임신 사실이 확인된 경우라면 유산·사산 후에도 바우처를 신청하고 잔여 기간 동안 사용할 수 있습니다. 임신 관련 진료비·약제비에 사용 가능합니다.",
  },
  {
    q: "국민행복카드는 언제까지 신청해야 하나요?",
    a: "임신 중에는 언제든지 신청 가능합니다. 다만 분만 예정일 이후에는 신규 바우처 지급이 안 되므로, 임신 확인 직후 신청하는 것이 좋습니다.",
  },
  {
    q: "이미 국민행복카드를 갖고 있는데 추가 임신 바우처를 받을 수 있나요?",
    a: "네, 기존 카드에 바우처만 추가 신청하면 됩니다. 건강보험공단이나 카드사 앱에서 간단하게 신청할 수 있습니다.",
  },
  {
    q: "산후조리원 비용도 바우처로 낼 수 있나요?",
    a: "국민행복카드 임신·출산 바우처로 산후조리원 비용을 직접 낼 수 있습니다. 단, 제휴 산후조리원이어야 합니다. 첫만남이용권(200/300만원)도 일부 산후조리원에서 사용 가능합니다.",
  },
];

export default function HappyBirthCardPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">국민행복카드</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-pink-100 text-pink-700 px-2.5 py-1 rounded-full">임신·출산</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          국민행복카드 신청 방법 완벽 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">임신·출산 진료비 바우처 금액·사용처·신청방법</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 5분</p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        임신이 확인되는 순간부터 <strong>국민행복카드</strong>를 통해 정부 바우처를 받을 수 있습니다. 임신·출산 진료비 100만원(다태아 140만원)부터 출생 후 첫만남이용권 200만원까지, 한 장의 카드로 모두 관리합니다.
      </p>

      <AdSlotHorizontal slot="9011000001" />

      <section className="mt-4 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">국민행복카드로 받을 수 있는 바우처</h2>
        <div className="space-y-4">
          {VOUCHER_TYPES.map((v) => (
            <div key={v.name} className={`bg-white rounded-2xl border-2 ${v.color} p-5`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{v.icon}</span>
                <h3 className="font-extrabold text-gray-800 text-lg">{v.name}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2">
                  <span className="text-xs font-bold text-emerald-600 w-12 flex-shrink-0 mt-0.5">금액</span>
                  <p className="font-bold text-gray-800">{v.amount}</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs font-bold text-gray-500 w-12 flex-shrink-0 mt-0.5">기간</span>
                  <p className="text-gray-700">{v.period}</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs font-bold text-gray-500 w-12 flex-shrink-0 mt-0.5">사용처</span>
                  <p className="text-gray-700">{v.usage}</p>
                </div>
                <p className="bg-gray-50 rounded-xl px-3 py-2 text-gray-600 text-xs">💡 {v.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">신청 방법 (단계별)</h2>
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

      <AdSlotHorizontal slot="9011000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">카드사별 추가 혜택</h2>
        <p className="text-sm text-gray-600 mb-3">어느 카드사에서 발급하든 바우처 금액은 동일합니다. 추가 혜택이 마음에 드는 카드사를 선택하세요.</p>
        <div className="space-y-2">
          {CARD_ISSUERS.map((card) => (
            <div key={card.name} className="flex gap-3 bg-white border border-gray-100 rounded-xl p-3 text-sm items-center">
              <span className="font-bold text-pink-700 w-16 flex-shrink-0">{card.name}</span>
              <span className="text-gray-600">{card.benefit}</span>
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
                Q. {item.q}
                <span className="text-gray-400 group-open:rotate-45 transition-transform text-lg flex-shrink-0 ml-2">+</span>
              </summary>
              <div className="px-4 pb-4 pt-2 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                A. {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
        <p className="font-bold text-emerald-800 mb-3">관련 가이드</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/guides/parental-allowance-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">부모급여·아동수당 가이드 →</Link>
          <Link href="/guides/baby-money" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">출산 지원금 총정리</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 건강보험공단 1577-1000 (평일 9~18시) · 복지로 1566-0313</p>
    </article>
  );
}
