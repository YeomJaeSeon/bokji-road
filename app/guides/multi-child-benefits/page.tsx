import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "다자녀 혜택 완벽 가이드 2026 — 두자녀·세자녀 지원금·카드·세금감면",
  description:
    "2026년 다자녀(두자녀·세자녀 이상) 가정이 받을 수 있는 혜택을 완벽 안내합니다. 다자녀우대카드, 전기·가스 요금 할인, 자동차 취득세 감면, 국가장학금 추가 지원, 공공임대 우선 배정까지 총정리.",
  keywords: [
    "두자녀 혜택", "다자녀 혜택 2026", "다자녀우대카드", "세자녀 혜택",
    "다자녀 전기요금 할인", "다자녀 자동차 취득세", "다자녀 국가장학금", "다자녀 공공임대",
    "다자녀 가스요금 할인", "다자녀 혜택 신청방법",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/multi-child-benefits" },
  openGraph: {
    title: "다자녀 혜택 완벽 가이드 2026 | 복지로드",
    description: "두자녀·세자녀 가정 혜택 총정리 — 카드·세금·요금·장학금까지.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/multi-child-benefits", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "다자녀 혜택 완벽 가이드 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/multi-child-benefits",
  inLanguage: "ko", datePublished: "2026-06-13", dateModified: "2026-06-13",
};

const BENEFITS = [
  {
    icon: "💳",
    color: "border-pink-200",
    name: "다자녀우대카드",
    from: "2자녀 이상",
    detail: "지자체마다 혜택 다름. 주요 혜택: 놀이공원·박물관·수영장 등 공공시설 할인, 일부 마트·음식점 할인. 지역 무관 혜택과 지역 한정 혜택이 혼재.",
    apply: "주민센터 또는 지자체 카드사 홈페이지 신청",
    note: "반드시 본인 거주 지자체 카드 기준을 확인하세요. 지역마다 혜택이 크게 다릅니다.",
  },
  {
    icon: "⚡",
    color: "border-yellow-200",
    name: "전기요금 할인",
    from: "3자녀 이상 (또는 출산가구 1년)",
    detail: "3자녀 이상 가구: 월 전기요금 30% 할인 (상한 월 16,000원). 출산 가구: 출산 후 1년간 30% 할인.",
    apply: "한국전력 고객센터(123) 전화 또는 한전 홈페이지 신청",
    note: "2자녀 가구도 일부 지자체 별도 지원 있음. 지역 주민센터 확인 필요.",
  },
  {
    icon: "🔥",
    color: "border-orange-200",
    name: "도시가스 요금 감면",
    from: "3자녀 이상",
    detail: "취사·난방용 도시가스 월 최대 24,000원 감면 (동절기 기준). 지역 도시가스사마다 금액 상이.",
    apply: "거주 지역 도시가스 고객센터 전화 신청",
    note: "",
  },
  {
    icon: "🚗",
    color: "border-blue-200",
    name: "자동차 취득세 감면",
    from: "3자녀 이상 (18세 미만 자녀)",
    detail: "18세 미만 자녀 3명 이상인 가구가 7인승 이하 승용차 구입 시 취득세 면제 (140만원 한도 초과분은 감면). 2자녀는 50% 감면.",
    apply: "차량 등록 시 관할 시·군·구청 차량등록사업소에서 신청",
    note: "중고차 포함, 7인승 이하 승용차 1대에 한함.",
  },
  {
    icon: "🎓",
    color: "border-violet-200",
    name: "국가장학금 추가 지원",
    detail: "다자녀(셋째 이상) 학생은 소득과 무관하게 국가장학금 지원 가능. 첫째·둘째도 소득분위에 따라 우대.",
    from: "3자녀 이상 (셋째 이상 대학생)",
    apply: "한국장학재단(www.kosaf.go.kr) 학기 시작 전 신청",
    note: "학기 초 신청 기간을 놓치면 해당 학기 지원 불가. 반드시 기간 내 신청.",
  },
  {
    icon: "🏠",
    color: "border-emerald-200",
    name: "공공임대주택 우선 공급",
    from: "3자녀 이상",
    detail: "국민임대·행복주택·공공분양 청약 시 다자녀 특별공급 별도 물량 배정. 자녀가 많을수록 가점 우대.",
    apply: "LH청약센터(apply.lh.or.kr) 또는 SH공사 홈페이지",
    note: "특별공급 물량은 일반공급과 별도이므로 경쟁이 낮음.",
  },
];

const CARD_INFO = [
  { region: "서울", name: "아이서울유", benefit: "문화·체육시설 50% 할인, 출산용품 지원 등" },
  { region: "경기", name: "경기다자녀행복카드", benefit: "놀이공원·박물관·영화관 할인" },
  { region: "인천", name: "인천 다자녀카드", benefit: "문화시설·교통 할인" },
  { region: "전국 공통", name: "행복한 가족 임신·출산 지원 서비스", benefit: "철도·항공·버스 할인 (코레일·항공사별 상이)" },
];

const FAQ = [
  { q: "두자녀도 혜택을 받을 수 있나요?", a: "네. 전기요금·도시가스·자동차 취득세 감면은 3자녀 이상이 기준이지만, 다자녀우대카드·국가장학금·일부 지자체 혜택은 2자녀도 해당됩니다. 지자체마다 기준이 다르니 주민센터에서 확인하세요." },
  { q: "자녀 나이 제한이 있나요?", a: "혜택마다 다릅니다. 자동차 취득세 감면은 18세 미만, 전기요금 할인은 출생 후 1년 이내(출산가구), 국가장학금은 대학 재학 기준입니다. 다자녀우대카드는 막내가 13~18세 이하인 경우가 많습니다." },
  { q: "이미 구입한 차에도 취득세 감면이 되나요?", a: "자동차 취득세 감면은 차량 등록 시점에 신청해야 합니다. 이미 등록된 차량에는 소급 적용되지 않으니, 차량 구입 전에 미리 자녀 수를 확인하고 등록 시 신청하세요." },
];

export default function MultiChildBenefitsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">다자녀 혜택</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-pink-100 text-pink-700 px-2.5 py-1 rounded-full">다자녀</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          다자녀 혜택 완벽 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">두자녀·세자녀 가정 카드·세금·요금·장학금 총정리</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 6분</p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">자녀가 2명 이상이라면 신청하지 않으면 받지 못하는 혜택들이 많습니다. 전기요금 할인, 도시가스 감면, 자동차 취득세 면제까지 — <strong>챙기는 것만으로 연간 수백만원의 절약</strong>이 가능합니다.</p>

      <AdSlotHorizontal slot="9021000001" />

      <section className="mt-4 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">혜택 종류별 상세</h2>
        <div className="space-y-4">
          {BENEFITS.map((b) => (
            <div key={b.name} className={`bg-white border-2 ${b.color} rounded-2xl p-5`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{b.icon}</span>
                <h3 className="font-extrabold text-gray-800 text-base">{b.name}</h3>
                <span className="ml-auto text-xs font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full flex-shrink-0">{b.from}부터</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">{b.detail}</p>
              <p className="text-sm"><span className="font-bold text-emerald-600">신청: </span><span className="text-gray-700">{b.apply}</span></p>
              {b.note && <p className="mt-2 bg-gray-50 rounded-xl px-3 py-2 text-gray-600 text-xs">💡 {b.note}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">지역별 다자녀우대카드</h2>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-3 bg-pink-500 text-white text-sm font-bold">
            <div className="p-3">지역</div><div className="p-3">카드명</div><div className="p-3">주요 혜택</div>
          </div>
          {CARD_INFO.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <div className="p-3 font-semibold text-gray-700">{row.region}</div>
              <div className="p-3 text-gray-700">{row.name}</div>
              <div className="p-3 text-gray-600 text-xs">{row.benefit}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">※ 지역마다 혜택이 크게 다릅니다. 거주 지자체 홈페이지 또는 주민센터에서 최신 정보 확인 필수.</p>
      </section>

      <AdSlotHorizontal slot="9021000002" />

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
          <Link href="/guides/parental-allowance-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">부모급여·아동수당 →</Link>
          <Link href="/guides/happy-birth-card" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">국민행복카드</Link>
          <Link href="/guides/college-scholarship" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">국가장학금</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 129 복지 콜센터 · 한전 123 · 지역 주민센터</p>
    </article>
  );
}
