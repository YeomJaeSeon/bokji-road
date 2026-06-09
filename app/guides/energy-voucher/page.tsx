import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "에너지바우처 신청 방법 2026 — 난방비·냉방비 지원 자격과 금액",
  description:
    "2026년 에너지바우처 신청 방법, 지원 금액, 자격 조건을 완벽 안내합니다. 기초수급자·차상위계층 중 노인·장애인·영유아·임산부 가구라면 난방비·냉방비를 지원받을 수 있습니다.",
  keywords: [
    "에너지바우처 신청", "에너지바우처 자격", "에너지바우처 금액 2026", "난방비 지원",
    "냉방비 지원 정부", "에너지바우처 사용처", "에너지바우처 신청방법", "난방비 바우처",
    "저소득층 난방비", "에너지바우처 기간",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/energy-voucher" },
  openGraph: {
    title: "에너지바우처 신청 방법 2026 | 복지로드",
    description: "난방비·냉방비 정부 지원, 자격 되면 꼭 신청하세요.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/energy-voucher", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "에너지바우처 신청 방법 2026 — 난방비·냉방비 지원 자격과 금액",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/energy-voucher",
  inLanguage: "ko", datePublished: "2026-06-09", dateModified: "2026-06-09",
};

const AMOUNT_TABLE = [
  { members: "1인", winter: "147,900원", summer: "50,000원", total: "197,900원" },
  { members: "2인", winter: "168,900원", summer: "66,800원", total: "235,700원" },
  { members: "3인", winter: "199,300원", summer: "77,000원", total: "276,300원" },
  { members: "4인", winter: "228,000원", summer: "88,000원", total: "316,000원" },
  { members: "5인 이상", winter: "254,500원", summer: "98,000원", total: "352,500원" },
];

const ELIGIBILITY = [
  { title: "소득 기준", desc: "기초생활수급자 또는 차상위계층 (기준 중위소득 50% 이하)" },
  { title: "가구원 기준 (다음 중 1개 해당)", desc: "노인(만 65세 이상) / 장애인 / 임산부 / 영유아(만 6세 미만) / 중증질환자·희귀질환자 / 한부모가족" },
];

const USE_PLACES = [
  "편의점 (CU, GS25, 세븐일레븐 등) — 전기·도시가스 요금 납부",
  "마트·슈퍼마켓 — 실물 연료(등유, 연탄 등) 구매",
  "도시가스 요금 온라인 납부",
  "전기 요금 온라인 납부 (한국전력 앱)",
  "지역 난방 요금 납부",
];

const APPLY_STEPS = [
  {
    step: 1,
    title: "신청 기간 확인",
    desc: "에너지바우처는 매년 6~11월에 신청합니다. 동절기(11월~다음해 3월)와 하절기(7~9월) 모두 이 기간에 신청합니다.",
    tip: "신청 기간이 지나면 받을 수 없습니다. 매년 6월이 되면 바로 신청하세요.",
  },
  {
    step: 2,
    title: "주민센터 방문 또는 복지로 온라인 신청",
    desc: "가까운 읍·면·동 주민센터를 방문하거나 복지로(bokjiro.go.kr)에서 온라인으로 신청합니다. 신분증 지참.",
    tip: "이미 작년에 신청한 분은 자동 연장 안내를 받을 수 있지만, 매년 재신청이 원칙입니다.",
  },
  {
    step: 3,
    title: "바우처 카드 수령",
    desc: "신청 후 에너지바우처 카드(또는 가상카드 번호)가 발급됩니다. 국민행복카드에 통합 발급되는 경우도 있습니다.",
    tip: "카드를 분실하면 주민센터에 재발급을 요청하세요.",
  },
  {
    step: 4,
    title: "사용 (동절기·하절기 기간 내)",
    desc: "편의점, 마트, 한국전력 앱, 도시가스 앱 등에서 요금 납부 또는 연료 구매에 사용합니다.",
    tip: "잔액은 사용 기간 종료 후 소멸됩니다. 기간 내에 모두 사용하세요.",
  },
];

const FAQ = [
  {
    q: "기초수급자이지만 노인·장애인이 아니면 받을 수 없나요?",
    a: "네, 에너지바우처는 소득 기준(기초수급·차상위)과 가구원 기준(노인·장애인·영유아·임산부 등)을 모두 충족해야 합니다. 소득 기준만 충족하는 경우는 지원 대상이 아닙니다.",
  },
  {
    q: "아파트 관리비 납부에도 사용할 수 있나요?",
    a: "집단 에너지 공급 아파트(지역난방)는 사용 가능합니다. 단, 일반 아파트 관리비 전체에는 사용할 수 없고 에너지 항목(난방비, 온수비)에만 사용됩니다.",
  },
  {
    q: "연탄·등유 등 실물 연료를 살 수도 있나요?",
    a: "네, 가능합니다. 마트, 슈퍼마켓, 연탄 판매점 등 제휴 가맹점에서 등유·연탄·LPG 등 실물 연료 구매에 사용할 수 있습니다.",
  },
  {
    q: "작년에 신청했으면 올해도 자동 지급되나요?",
    a: "자동 지급이 아닙니다. 매년 6~11월 기간에 다시 신청해야 합니다. 일부 지자체에서 문자로 안내를 보내지만, 신청을 안 하면 받을 수 없습니다.",
  },
];

export default function EnergyVoucherPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">에너지바우처</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">에너지·난방</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          에너지바우처 신청 방법 완벽 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">난방비·냉방비 지원 자격·금액·신청방법 한 번에</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 5분</p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">
        에너지바우처는 저소득 취약계층의 <strong>난방비(겨울)와 냉방비(여름)</strong>를 정부가 직접 지원하는 제도입니다. 기초수급자·차상위계층 중 노인·장애인·영유아·임산부 등이 있는 가구라면 신청할 수 있으며, <strong>매년 6~11월에 신청</strong>해야 합니다.
      </p>

      <AdSlotHorizontal slot="9013000001" />

      <section className="mt-4 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">2026년 지원 금액 (가구원 수별)</h2>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-4 bg-orange-500 text-white text-sm font-bold">
            <div className="p-3">가구원 수</div>
            <div className="p-2 text-center">동절기</div>
            <div className="p-2 text-center">하절기</div>
            <div className="p-2 text-center">연간 합계</div>
          </div>
          {AMOUNT_TABLE.map((row, i) => (
            <div key={i} className={`grid grid-cols-4 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <div className="p-3 font-semibold text-gray-700">{row.members}</div>
              <div className="p-2 text-center text-orange-600 font-semibold">{row.winter}</div>
              <div className="p-2 text-center text-blue-600 font-semibold">{row.summer}</div>
              <div className="p-2 text-center font-bold text-gray-800">{row.total}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">신청 자격 (두 가지 모두 충족해야 함)</h2>
        <div className="space-y-3">
          {ELIGIBILITY.map((item, i) => (
            <div key={i} className="bg-white border-2 border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-700 mb-1 text-sm">{item.title}</p>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">사용 가능 장소</h2>
        <div className="space-y-2">
          {USE_PLACES.map((place, i) => (
            <div key={i} className="flex gap-2 bg-white border border-gray-100 rounded-xl p-3 text-sm">
              <span className="text-emerald-500 flex-shrink-0">✓</span>
              <span className="text-gray-700">{place}</span>
            </div>
          ))}
        </div>
      </section>

      <AdSlotHorizontal slot="9013000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">신청 방법 (단계별)</h2>
        <div className="space-y-3">
          {APPLY_STEPS.map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">{item.step}</div>
              <div>
                <p className="font-bold text-gray-800 mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.desc}</p>
                <p className="text-xs bg-orange-50 text-orange-700 px-2.5 py-1 rounded-full inline-block">💡 {item.tip}</p>
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
          <Link href="/guides/basic-living-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">기초생활수급 신청 가이드 →</Link>
          <Link href="/guides/age-60s-plus" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">60대 이상 혜택 총정리</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 129 복지 콜센터 (무료, 월~금 9~18시) · 주민센터 방문 신청 가능</p>
    </article>
  );
}
