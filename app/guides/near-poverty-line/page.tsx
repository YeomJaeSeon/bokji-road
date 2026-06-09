import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "차상위계층 확인 신청 방법 2026 — 혜택·자격·신청절차 완벽 가이드",
  description:
    "2026년 차상위계층 확인 신청 방법, 자격 기준, 받을 수 있는 혜택을 완벽 안내합니다. 기준 중위소득 50% 이하라면 의료비·교육비·통신비 감면 등 다양한 혜택을 받을 수 있습니다.",
  keywords: [
    "차상위계층 신청방법", "차상위계층 자격기준", "차상위계층 혜택 2026", "차상위계층 확인서",
    "차상위계층 소득기준", "차상위 의료비 지원", "차상위 교육비 지원", "차상위계층 통신비",
    "차상위 신청 서류", "차상위계층 확인 신청",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/near-poverty-line" },
  openGraph: {
    title: "차상위계층 확인 신청 방법 2026 | 복지로드",
    description: "중위소득 50% 이하라면 의료비·통신비·교육비 감면 받으세요.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/near-poverty-line", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "차상위계층 확인 신청 방법 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/near-poverty-line",
  inLanguage: "ko", datePublished: "2026-06-09", dateModified: "2026-06-09",
};

const INCOME_TABLE = [
  { members: "1인", income: "1,160,649원" },
  { members: "2인", income: "1,918,026원" },
  { members: "3인", income: "2,455,547원" },
  { members: "4인", income: "2,984,330원" },
  { members: "5인", income: "3,487,294원" },
];

const BENEFITS = [
  { icon: "🏥", name: "의료비 지원", desc: "본인부담 경감 — 외래·입원비 50% 감면 (차상위 본인부담 경감 대상자 확인 필요)" },
  { icon: "📚", name: "교육급여", desc: "초·중·고 학생 학용품비·교육활동지원비 지급 (초 487,000원 / 중 679,000원 / 고 768,000원 연간)" },
  { icon: "📱", name: "통신비 감면", desc: "통신사 이동통신 요금 월 최대 26,000원 감면 (인터넷 월 12,100원 포함)" },
  { icon: "⚡", name: "전기요금 감면", desc: "월 최대 16,000원 감면 (한국전력 신청)" },
  { icon: "🔥", name: "에너지바우처", desc: "노인·장애인·영유아 등 취약계층 포함 시 난방비·냉방비 지원" },
  { icon: "🚌", name: "교통비 지원", desc: "일부 지자체 대중교통비 할인·지원 (지역별 상이)" },
  { icon: "🎓", name: "국가장학금 우선 지원", desc: "국가장학금 소득분위 산정 시 우대 적용" },
  { icon: "🏠", name: "주거급여", desc: "차상위계층도 소득인정액 기준 충족 시 주거급여 신청 가능" },
];

const APPLY_STEPS = [
  { step: 1, title: "소득 기준 확인", desc: "본인 가구의 소득인정액이 기준 중위소득 50% 이하인지 확인합니다. 복지로 모의계산(bokjiro.go.kr)에서 미리 계산해볼 수 있습니다." },
  { step: 2, title: "주민센터 방문 신청", desc: "가까운 읍·면·동 주민센터에 방문해 '차상위계층 확인 신청서'를 제출합니다. 신분증, 가족관계증명서, 금융정보 제공 동의서를 지참합니다." },
  { step: 3, title: "조사 및 결정", desc: "소득·재산 조사 후 차상위계층 해당 여부가 결정됩니다. 통상 30일 이내." },
  { step: 4, title: "차상위계층 확인서 발급 및 혜택 신청", desc: "확인서를 발급받은 후 각 혜택별로 별도 신청합니다. 통신비 감면은 통신사에, 전기요금 감면은 한국전력에 신청합니다." },
];

const FAQ = [
  { q: "기초수급자와 차상위계층의 차이는?", a: "기초수급자는 중위소득 30~50% 이하로 생계·의료·주거·교육급여를 받는 계층이고, 차상위계층은 중위소득 50% 이하로 수급자는 아니지만 그에 준하는 저소득 계층입니다. 차상위는 급여액은 적지만 별도 혜택이 있습니다." },
  { q: "재산이 많아도 차상위계층이 될 수 있나요?", a: "소득인정액 기준이기 때문에 재산도 소득으로 환산합니다. 재산이 많으면 소득인정액이 높아져 기준을 초과할 수 있습니다. 부채, 금융재산 공제 등을 적용하면 달라질 수 있으니 주민센터에서 정확히 계산해보세요." },
  { q: "차상위계층 확인서 유효기간은?", a: "차상위계층 확인서는 발급일로부터 1년간 유효합니다. 매년 갱신 신청이 필요하며, 소득 변동이 있으면 자격이 변경될 수 있습니다." },
];

export default function NearPovertyLinePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">차상위계층</span>
      </nav>
      <div className="mb-6">
        <span className="text-xs font-bold bg-teal-100 text-teal-700 px-2.5 py-1 rounded-full">차상위계층</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          차상위계층 확인 신청 방법 완벽 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">혜택·자격기준·신청절차 한 번에 정리</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 5분</p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">차상위계층은 기초생활수급자는 아니지만 소득이 낮아 지원이 필요한 계층입니다. <strong>기준 중위소득 50% 이하</strong>면 신청할 수 있으며, 의료비·통신비·교육비 감면 등 다양한 혜택이 주어집니다.</p>
      <p className="text-gray-700 leading-relaxed mb-6">많은 분들이 "기초수급자도 아닌데 지원받을 게 있을까?"라고 생각하다가 혜택을 놓치고 있습니다. <strong>통신비·전기요금 감면만 해도 연간 40만원 이상</strong> 절약됩니다.</p>

      <AdSlotHorizontal slot="9014000001" />

      <section className="mt-4 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">2026년 소득 기준 (기준 중위소득 50% 이하)</h2>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-2 bg-teal-600 text-white text-sm font-bold">
            <div className="p-3">가구원 수</div><div className="p-3">월 소득인정액 기준</div>
          </div>
          {INCOME_TABLE.map((row, i) => (
            <div key={i} className={`grid grid-cols-2 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <div className="p-3 text-gray-700">{row.members}</div>
              <div className="p-3 font-semibold text-teal-700">{row.income} 이하</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">차상위계층이 받을 수 있는 혜택</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {BENEFITS.map((b) => (
            <div key={b.name} className="bg-white border border-teal-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{b.icon}</span>
                <p className="font-bold text-gray-800 text-sm">{b.name}</p>
              </div>
              <p className="text-xs text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlotHorizontal slot="9014000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">신청 방법</h2>
        <div className="space-y-3">
          {APPLY_STEPS.map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">{item.step}</div>
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
          <Link href="/guides/basic-living-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">기초생활수급 신청 가이드 →</Link>
          <Link href="/guides/housing-benefit" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">주거급여 가이드</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 129 복지 콜센터 (무료, 월~금 9~18시)</p>
    </article>
  );
}
