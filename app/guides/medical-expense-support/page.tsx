import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "의료비 지원 총정리 2026 — 암·희귀질환·재난적 의료비 신청 방법",
  description:
    "2026년 암 환자 의료비, 희귀질환 의료비, 재난적 의료비 지원 신청 방법과 자격 조건을 총정리했습니다. 갑자기 큰 병원비가 생겼다면 반드시 확인하세요.",
  keywords: [
    "암 환자 의료비 지원", "희귀질환 의료비 지원", "재난적 의료비 지원", "의료비 지원 신청",
    "암 환자 지원금", "중증질환 의료비", "본인부담 상한제", "의료급여 신청",
    "중증 희귀질환 지원", "재난적 의료비 신청방법",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/medical-expense-support" },
  openGraph: {
    title: "의료비 지원 총정리 2026 — 암·희귀질환·재난적 의료비 | 복지로드",
    description: "큰 병원비 걱정된다면 이 제도부터 확인하세요.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/medical-expense-support", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "의료비 지원 총정리 2026 — 암·희귀질환·재난적 의료비 신청 방법",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/medical-expense-support",
  inLanguage: "ko", datePublished: "2026-06-08", dateModified: "2026-06-08",
};

const SUPPORT_LIST = [
  {
    name: "본인부담 상한제",
    icon: "🛡️",
    color: "border-blue-200",
    target: "건강보험 가입자 전체",
    amount: "연간 본인부담금이 소득분위별 상한액 초과 시 초과분 전액 환급 (소득 1분위 87만원 ~ 10분위 808만원)",
    how: "별도 신청 불필요. 초과 시 건강보험공단이 자동으로 환급합니다.",
    note: "병원비가 많이 나왔다면 건강보험공단(1577-1000)에 본인부담 상한제 적용 여부를 꼭 확인하세요.",
    link: "/#benefits",
  },
  {
    name: "재난적 의료비 지원",
    icon: "🆘",
    color: "border-red-200",
    target: "소득 하위 50% (기준 중위소득 100% 이하), 연 의료비 본인부담이 소득의 15% 초과",
    amount: "연간 최대 3,000만원 (본인부담 의료비의 50~80% 지원)",
    how: "국민건강보험공단(nhis.or.kr) 또는 가까운 공단 지사",
    note: "입원 뿐 아니라 외래 의료비도 지원 가능. 퇴원 후 180일 이내에 신청해야 합니다.",
    link: "/#benefits",
  },
  {
    name: "암 환자 의료비 지원",
    icon: "🎗️",
    color: "border-purple-200",
    target: "건강보험 가입자 중 암 진단을 받은 환자 (소득 기준 별도)",
    amount: "건강보험 5% 본인부담 (일반 30%에서 대폭 감소), 의료급여 대상자는 0~1%",
    how: "산정특례 등록: 진단 후 담당 의사가 자동 등록 또는 건강보험공단 신청",
    note: "암 진단 시 '산정특례' 등록이 자동으로 신청됩니다. 미등록 상태라면 공단에 즉시 확인하세요.",
    link: "/#benefits",
  },
  {
    name: "희귀질환·중증난치질환 의료비 지원",
    icon: "💊",
    color: "border-emerald-200",
    target: "희귀질환·중증난치질환 산정특례 등록자",
    amount: "본인부담 10% (일반 30~60%에서 대폭 감소), 일부 초중증 희귀질환은 0%",
    how: "산정특례 등록 후 자동 적용. 보건복지부 지정 희귀질환 목록 확인 필요.",
    note: "희귀질환관리법에 따라 1,000여 가지 질환이 대상입니다. 본인이 대상인지 확인하세요.",
    link: "/#benefits",
  },
  {
    name: "저소득층 의료비 지원 (의료급여)",
    icon: "🏥",
    color: "border-cyan-200",
    target: "기초생활수급자·차상위계층 (기준 중위소득 40% 이하)",
    amount: "1종: 입원 무료, 외래 1,000~2,000원 / 2종: 입원 10%, 외래 1,000~15%",
    how: "주민센터 또는 복지로(bokjiro.go.kr)에서 기초생활수급 신청 시 함께 신청",
    note: "의료급여는 건강보험이 아닌 별도 제도입니다. 기초수급자·차상위계층이라면 반드시 확인하세요.",
    link: "/guides/basic-living-guide",
  },
  {
    name: "노인 틀니·임플란트 급여",
    icon: "🦷",
    color: "border-teal-200",
    target: "만 65세 이상 건강보험 가입자",
    amount: "틀니·임플란트 본인부담 30% (기초수급자 5~10%)",
    how: "치과 방문 시 자동 적용",
    note: "만 65세부터 임플란트 2개, 틀니(완전·부분)까지 건강보험 혜택이 적용됩니다.",
    link: "/guides/age-60s-plus",
  },
];

const FAQ = [
  {
    q: "병원비가 갑자기 수천만원 나왔는데 어디에 신청해야 하나요?",
    a: "먼저 '본인부담 상한제' 초과 여부를 건강보험공단(1577-1000)에 확인하세요. 초과분은 자동 환급됩니다. 그래도 부담이 크면 '재난적 의료비 지원'을 별도 신청하세요. 퇴원 후 180일 이내에 신청해야 합니다.",
  },
  {
    q: "암 진단을 받았는데 산정특례 신청을 놓쳤어요",
    a: "걱정하지 마세요. 진단일로부터 소급 적용이 가능합니다. 담당 의사에게 산정특례 등록을 요청하거나 건강보험공단에 직접 신청하세요. 소급 적용 범위는 공단 상담을 통해 확인하세요.",
  },
  {
    q: "재난적 의료비 지원과 본인부담 상한제를 동시에 받을 수 있나요?",
    a: "상한제 초과 환급을 먼저 받은 후, 그래도 부담이 큰 경우 재난적 의료비 지원을 추가로 신청할 수 있습니다. 두 제도는 중복 적용이 가능합니다.",
  },
  {
    q: "희귀질환인지 모르겠어요. 어떻게 확인하나요?",
    a: "질병관리청 희귀질환헬프라인(1544-2895) 또는 보건복지부 산정특례 대상 질환 목록에서 확인할 수 있습니다. 담당 의사에게 산정특례 대상 여부를 직접 문의하는 것이 가장 빠릅니다.",
  },
];

export default function MedicalExpenseSupportPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">의료비 지원 총정리</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">의료비</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          의료비 지원 총정리 2026<br />
          <span className="text-lg font-normal text-gray-500">암·희귀질환·재난적 의료비 신청 방법 한 번에</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 6분</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
        <p className="font-bold text-blue-800 mb-1">큰 병원비가 생겼다면 이것부터 확인하세요</p>
        <p className="text-sm text-gray-700">우리나라는 <strong>본인부담 상한제</strong>로 연간 병원비 총액이 일정 금액을 넘으면 초과분을 자동으로 돌려받습니다. 신청을 안 해도 자동 환급이지만, 모르고 지나치는 분이 많습니다. 건강보험공단(1577-1000)에 전화해서 바로 확인해보세요.</p>
      </div>

      <AdSlotHorizontal slot="9012000001" />

      <div className="mt-6 space-y-4">
        {SUPPORT_LIST.map((item) => (
          <div key={item.name} className={`bg-white rounded-2xl border-2 ${item.color} p-5`}>
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{item.icon}</span>
                <h2 className="font-extrabold text-gray-800 text-lg">{item.name}</h2>
              </div>
              <Link href={item.link}
                className="flex-shrink-0 text-xs text-emerald-600 border border-emerald-300 px-2.5 py-1 rounded-lg hover:bg-emerald-50 font-semibold transition-colors">
                상세 →
              </Link>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <span className="text-xs font-bold text-emerald-600 w-12 flex-shrink-0 mt-0.5">지원액</span>
                <p className="font-bold text-gray-800">{item.amount}</p>
              </div>
              <div className="flex gap-2">
                <span className="text-xs font-bold text-gray-500 w-12 flex-shrink-0 mt-0.5">대상</span>
                <p className="text-gray-700">{item.target}</p>
              </div>
              <div className="flex gap-2">
                <span className="text-xs font-bold text-gray-500 w-12 flex-shrink-0 mt-0.5">신청</span>
                <p className="text-gray-700">{item.how}</p>
              </div>
              <p className="bg-gray-50 rounded-xl px-3 py-2 text-gray-600 text-xs">💡 {item.note}</p>
            </div>
          </div>
        ))}
      </div>

      <AdSlotHorizontal slot="9012000002" />

      <section className="mt-8 mb-8">
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
          <Link href="/guides/emergency-welfare" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">긴급복지지원 →</Link>
          <Link href="/guides/basic-living-guide" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">의료급여·기초생활수급</Link>
          <Link href="/guides/age-60s-plus" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">60대 이상 혜택</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 건강보험공단 1577-1000 · 희귀질환헬프라인 1544-2895 · 복지 콜센터 129</p>
    </article>
  );
}
