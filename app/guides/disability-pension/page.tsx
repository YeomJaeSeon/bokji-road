import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "장애인연금 신청 방법 완벽 가이드 2026 — 자격·금액·신청절차",
  description:
    "2026년 장애인연금 신청 방법, 기초급여·부가급여 금액, 자격 조건을 완벽 안내합니다. 중증장애인(1~2급 및 3급 중복)이라면 매월 최대 40만원 이상을 받을 수 있습니다.",
  keywords: [
    "장애인연금 신청방법", "장애인연금 자격", "장애인연금 금액 2026", "중증장애인 연금",
    "장애인연금 기초급여", "장애인연금 부가급여", "장애인연금 소득기준", "장애연금 신청",
    "장애인연금 수급자격", "장애인연금 신청서류",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/disability-pension" },
  openGraph: {
    title: "장애인연금 신청 방법 완벽 가이드 2026 | 복지로드",
    description: "중증장애인 월 최대 40만원+, 기초·부가급여 신청 방법 완벽 안내.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/disability-pension", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "장애인연금 신청 방법 완벽 가이드 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/disability-pension",
  inLanguage: "ko", datePublished: "2026-06-09", dateModified: "2026-06-09",
};

const BASIC_PAY = [
  { age: "만 18세~64세", amount: "최대 월 333,800원", note: "소득인정액에 따라 감액 가능" },
  { age: "만 65세 이상", amount: "기초연금으로 전환", note: "기초연금 수령으로 대체됨" },
];

const ADDITIONAL_PAY = [
  { type: "기초수급자 (18~64세)", amount: "월 90,000원" },
  { type: "기초수급자 (65세 이상)", amount: "월 90,000원" },
  { type: "차상위계층 (18~64세)", amount: "월 80,000원" },
  { type: "차상위 초과 (18~64세)", amount: "월 40,000원" },
  { type: "차상위 초과 (65세 이상)", amount: "월 40,000원" },
];

const APPLY_STEPS = [
  { step: 1, title: "자격 확인", desc: "장애인복지법상 등록 중증장애인(1·2급 및 3급 중복장애)이어야 합니다. 소득인정액이 선정기준액 이하인지 복지로에서 모의계산해보세요." },
  { step: 2, title: "주민센터 방문 신청", desc: "가까운 읍·면·동 주민센터에 방문해 장애인연금 신청서를 제출합니다. 장애인등록증, 신분증, 통장 사본, 소득·재산 신고서 등을 지참합니다." },
  { step: 3, title: "조사 및 결정 (약 30일)", desc: "소득·재산 조사 후 수급 자격이 결정됩니다. 결과는 서면 통보됩니다." },
  { step: 4, title: "급여 수령", desc: "매월 20일 지정 계좌로 기초급여와 부가급여가 함께 지급됩니다." },
];

const FAQ = [
  { q: "장애인연금과 장애수당의 차이는?", a: "장애인연금은 중증장애인(1·2급 및 3급 중복)을 위한 제도이고, 장애수당은 중등도 장애인(3급~6급) 중 기초수급자·차상위계층을 위한 제도입니다. 장애인연금이 훨씬 금액이 크지만 중증장애인에게만 해당됩니다." },
  { q: "만 65세가 되면 장애인연금이 없어지나요?", a: "만 65세부터는 장애인연금 기초급여가 기초연금으로 전환됩니다. 부가급여는 계속 받을 수 있습니다. 기초연금 수령액이 기초급여보다 적을 경우 차액을 보전해줍니다." },
  { q: "소득이 있어도 받을 수 있나요?", a: "소득인정액이 선정기준액(단독 가구 기준 약 122만원, 2026년) 이하면 받을 수 있습니다. 소득이 있어도 기준 이하면 수급 가능하며, 기준을 약간 초과하는 경우 감액 지급될 수 있습니다." },
];

export default function DisabilityPensionPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">장애인연금</span>
      </nav>
      <div className="mb-6">
        <span className="text-xs font-bold bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full">장애인</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          장애인연금 신청 방법 완벽 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">기초급여·부가급여 자격·금액·신청절차 한 번에</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 5분</p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-6">장애인연금은 <strong>중증장애인의 근로 능력 상실과 추가 비용을 보전</strong>하기 위해 매월 지급하는 급여입니다. 기초급여(최대 333,800원)와 부가급여(최대 90,000원)로 구성되어 있으며, 소득인정액이 선정기준액 이하인 중증장애인이라면 신청할 수 있습니다.</p>

      <AdSlotHorizontal slot="9018000001" />

      <section className="mt-4 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">기초급여 (2026년 기준)</h2>
        <div className="space-y-3">
          {BASIC_PAY.map((row) => (
            <div key={row.age} className="bg-white border-2 border-purple-100 rounded-xl p-4 flex gap-4 items-start">
              <div className="flex-1">
                <p className="font-bold text-gray-800 text-sm">{row.age}</p>
                <p className="text-purple-700 font-extrabold text-lg mt-1">{row.amount}</p>
                <p className="text-xs text-gray-500 mt-1">※ {row.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">부가급여 (소득 수준별)</h2>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-2 bg-purple-600 text-white text-sm font-bold">
            <div className="p-3">수급자 유형</div><div className="p-3">월 부가급여</div>
          </div>
          {ADDITIONAL_PAY.map((row, i) => (
            <div key={i} className={`grid grid-cols-2 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <div className="p-3 text-gray-700">{row.type}</div>
              <div className="p-3 font-bold text-purple-700">{row.amount}</div>
            </div>
          ))}
        </div>
      </section>

      <AdSlotHorizontal slot="9018000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">신청 방법</h2>
        <div className="space-y-3">
          {APPLY_STEPS.map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">{item.step}</div>
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
          <Link href="/guides/disability-benefits" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">장애인 복지혜택 총정리 →</Link>
          <Link href="/guides/basic-living-guide" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">기초생활수급 가이드</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 129 복지 콜센터 · 장애인연금 문의 주민센터 방문</p>
    </article>
  );
}
