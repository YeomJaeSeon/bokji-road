import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "자영업자 실업급여(고용보험) 신청 방법 2026 — 폐업 후 받을 수 있는 지원",
  description:
    "자영업자도 고용보험에 가입하면 폐업 후 실업급여를 받을 수 있습니다. 2026년 자영업자 고용보험 임의가입 방법, 납입 보험료, 폐업 후 수령 조건과 금액을 완벽 안내합니다.",
  keywords: [
    "자영업자 실업급여", "자영업자 고용보험", "폐업 후 실업급여", "1인 사업자 실업급여",
    "자영업자 고용보험 가입", "폐업 지원금", "자영업자 폐업급여", "소상공인 실업급여",
    "자영업자 구직급여", "고용보험 임의가입",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/self-employed-insurance" },
  openGraph: {
    title: "자영업자 실업급여 신청 방법 2026 | 복지로드",
    description: "폐업 후에도 실업급여 받을 수 있습니다. 자영업자 고용보험 완벽 가이드.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/self-employed-insurance", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "자영업자 실업급여(고용보험) 신청 방법 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/self-employed-insurance",
  inLanguage: "ko", datePublished: "2026-06-08", dateModified: "2026-06-08",
};

const PREMIUM_TABLE = [
  { grade: "1등급", standard: "182만원", premium: "49,140원" },
  { grade: "2등급", standard: "204만원", premium: "55,080원" },
  { grade: "3등급", standard: "238만원", premium: "64,260원" },
  { grade: "4등급", standard: "272만원", premium: "73,440원" },
  { grade: "5등급", standard: "306만원", premium: "82,620원" },
  { grade: "6등급", standard: "340만원", premium: "91,800원" },
  { grade: "7등급", standard: "374만원", premium: "100,980원" },
];

const BENEFIT_TABLE = [
  { period: "1년 미만", days: "120일" },
  { period: "1년 이상 ~ 3년 미만", days: "150일" },
  { period: "3년 이상 ~ 5년 미만", days: "180일" },
  { period: "5년 이상 ~ 10년 미만", days: "210일" },
  { period: "10년 이상", days: "240일" },
];

const QUALIFY_CONDITIONS = [
  "매출액 감소 (직전 연도 대비 20% 이상 감소)",
  "적자 지속으로 사업 유지 곤란",
  "자연재해·화재·수해로 인한 폐업",
  "임차 건물 철거·공매·경매로 폐업 불가피",
  "사업장 소재 지역의 사업 여건 현저히 악화",
  "건강 악화로 더 이상 사업 영위 불가",
];

const APPLY_STEPS = [
  {
    step: 1,
    title: "고용보험 임의가입 (폐업 전에 해야 함)",
    desc: "근로복지공단(comwel.or.kr) 또는 고용노동부 고용보험 홈페이지에서 자영업자 고용보험을 가입합니다. 최소 1년 이상 납입해야 수급 자격이 생깁니다.",
    tip: "폐업 후에는 가입 불가. 지금 당장 가입해두는 것이 중요합니다.",
  },
  {
    step: 2,
    title: "폐업 및 폐업 사실 확인",
    desc: "세무서 또는 시·군·구청에서 사업자 등록 폐업 신고를 완료합니다. 폐업 확인서 또는 폐업신고필증을 발급받습니다.",
    tip: "폐업 전에 고용센터에서 사전 상담을 받으면 절차가 훨씬 빠릅니다.",
  },
  {
    step: 3,
    title: "워크넷 구직 등록",
    desc: "워크넷(work.go.kr)에서 구직 신청을 합니다. 폐업 후 취업 의사가 있음을 등록해야 합니다.",
    tip: "폐업 직후 등록하는 것이 좋습니다.",
  },
  {
    step: 4,
    title: "고용센터 수급자격 신청",
    desc: "주소지 관할 고용센터를 방문하여 수급자격 인정 신청서를 제출합니다. 폐업 사유가 비자발적임을 입증하는 서류(매출 감소 증빙, 세금계산서 등)를 지참합니다.",
    tip: "폐업 후 12개월 이내에 신청해야 합니다.",
  },
];

const FAQ = [
  {
    q: "자발적으로 폐업해도 실업급여를 받을 수 있나요?",
    a: "원칙적으로 자발적 폐업은 대상이 아닙니다. 단, 매출 20% 이상 감소, 연속 적자, 건강 악화 등 비자발적 사유가 있는 경우에는 수급 자격이 인정됩니다.",
  },
  {
    q: "가입 후 얼마나 지나야 실업급여를 받을 수 있나요?",
    a: "최소 1년(12개월) 이상 보험료를 납입해야 수급 자격이 생깁니다. 가입 직후 폐업하면 받을 수 없습니다.",
  },
  {
    q: "직원을 고용하고 있어도 가입 가능한가요?",
    a: "가능합니다. 다만 상시 근로자 수가 50인 미만인 사업주만 임의가입이 가능합니다. 50인 이상은 가입 대상이 아닙니다.",
  },
  {
    q: "수령 중에 재창업하면 어떻게 되나요?",
    a: "재창업한 날부터 실업급여 수급이 중단됩니다. 재창업 후 조기 재취업 수당(미지급 잔여분의 일부)을 받을 수 있으니 고용센터에 신고하세요.",
  },
];

export default function SelfEmployedInsurancePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">자영업자 실업급여</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">자영업·폐업</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          자영업자도 실업급여 받을 수 있습니다<br />
          <span className="text-lg font-normal text-gray-500">폐업 후 수령 조건·금액·신청방법 2026년 완벽 가이드</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 5분</p>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 mb-6">
        <p className="font-bold text-orange-800 mb-1">지금 사업 중이라면 당장 가입하세요</p>
        <p className="text-sm text-gray-700">자영업자 고용보험은 <strong>폐업 전에 미리 가입해야 합니다.</strong> 최소 1년 납입 후 폐업 시 수급 자격이 생깁니다. 폐업 후에는 가입 자체가 불가능합니다.</p>
      </div>

      <AdSlotHorizontal slot="9010000001" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">월 납입 보험료 (기준 보수 등급별)</h2>
        <p className="text-sm text-gray-600 mb-3">가입 시 본인 사업 규모에 맞는 등급을 선택합니다. 등급이 높을수록 보험료도 높고, 수급 시 받는 금액도 커집니다.</p>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-3 bg-orange-500 text-white text-sm font-bold">
            <div className="p-3">등급</div>
            <div className="p-3">기준 보수 (월)</div>
            <div className="p-3">월 보험료 (2.7%)</div>
          </div>
          {PREMIUM_TABLE.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <div className="p-3 font-bold text-orange-600">{row.grade}</div>
              <div className="p-3 text-gray-700">{row.standard}</div>
              <div className="p-3 font-semibold text-gray-800">{row.premium}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">※ 수급 시 일일 지급액 = 선택 등급 기준 보수 × 60% ÷ 30일</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">수급 기간 (납입 기간별)</h2>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-2 bg-gray-800 text-white text-sm font-bold">
            <div className="p-3">납입 기간</div>
            <div className="p-3">수급 기간</div>
          </div>
          {BENEFIT_TABLE.map((row, i) => (
            <div key={i} className={`grid grid-cols-2 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <div className="p-3 text-gray-700">{row.period}</div>
              <div className="p-3 font-semibold text-orange-600">{row.days}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">수급 자격이 되는 폐업 사유</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {QUALIFY_CONDITIONS.map((c, i) => (
            <div key={i} className="flex gap-2 bg-white border border-gray-100 rounded-xl p-3 text-sm">
              <span className="text-emerald-500 flex-shrink-0">✓</span>
              <span className="text-gray-700">{c}</span>
            </div>
          ))}
        </div>
      </section>

      <AdSlotHorizontal slot="9010000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">신청 방법 (단계별)</h2>
        <div className="space-y-4">
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
          <Link href="/guides/unemployment-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">근로자 실업급여 가이드 →</Link>
          <Link href="/guides/emergency-welfare" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">긴급복지지원</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 고용노동부 고객상담센터 1350 (평일 9~18시) · 근로복지공단 1588-0075</p>
    </article>
  );
}
