import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "긴급복지지원 신청 방법 완벽 가이드 2026 — 갑작스러운 위기 시 즉시 지원",
  description:
    "실직·사고·질병·화재 등 갑작스러운 위기로 생계가 어려워졌다면 긴급복지지원을 신청하세요. 2026년 생계지원 최대 월 183만원, 의료비 300만원, 주거비 지원까지 신청 방법을 완벽 안내합니다.",
  keywords: [
    "긴급복지지원 신청", "긴급생계지원", "위기가구 지원", "갑작스러운 실직 지원",
    "긴급복지 자격조건", "긴급복지 신청방법", "생계지원 긴급", "2026 긴급복지",
    "복지 위기상황 지원", "긴급의료비 지원",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/emergency-welfare" },
  openGraph: {
    title: "긴급복지지원 신청 방법 완벽 가이드 2026 | 복지로드",
    description: "갑작스러운 위기 상황, 당일 신청·즉시 지원 가능합니다.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/emergency-welfare", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "긴급복지지원 신청 방법 완벽 가이드 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/emergency-welfare",
  inLanguage: "ko", datePublished: "2026-06-08", dateModified: "2026-06-08",
};

const SUPPORT_TYPES = [
  {
    name: "생계지원",
    icon: "🍚",
    color: "border-emerald-200",
    amount: "1인 가구 713,102원 / 4인 가구 1,833,572원 (월)",
    period: "최대 6개월",
    note: "식품비·생활용품비·의복비 등 생활비 지원. 현금 또는 현물 지급.",
  },
  {
    name: "의료지원",
    icon: "🏥",
    color: "border-blue-200",
    amount: "300만원 이내 (본인부담금 지원)",
    period: "최대 2회",
    note: "입원치료비, 수술비 등 큰 병원비 발생 시 신청. 응급실·입원 즉시 신청 가능.",
  },
  {
    name: "주거지원",
    icon: "🏠",
    color: "border-amber-200",
    amount: "서울 415,700원 / 경기 352,000원 / 광역시 등 지역별 차등",
    period: "최대 12개월",
    note: "임시 거처 제공 또는 임차료 지원. 화재·이사 등으로 거주지를 잃은 경우 포함.",
  },
  {
    name: "사회복지시설 이용 지원",
    icon: "🏢",
    color: "border-purple-200",
    amount: "시설 이용비 전액 지원",
    period: "최대 6개월",
    note: "사회복지시설 단기 입소비용 지원.",
  },
  {
    name: "교육지원",
    icon: "📚",
    color: "border-lime-200",
    amount: "초등 127,900원 / 중등 180,000원 / 고등 214,000원 + 수업료 (분기)",
    period: "최대 4회",
    note: "위기 가구 자녀 학비 지원.",
  },
  {
    name: "그 밖의 지원",
    icon: "🆘",
    color: "border-red-200",
    amount: "연료비 월 150,500원 / 해산비 70만원 / 장제비 80만원",
    period: "필요 시",
    note: "동절기 연료비, 출산비, 장례비 등 각종 위기 상황별 지원.",
  },
];

const CRISIS_CASES = [
  "주소득자의 사망·가출·행방불명·구금",
  "가구원의 중한 질병 또는 부상",
  "갑작스러운 실직 (비자발적 퇴직)",
  "화재·홍수·지진 등 재해로 인한 거주지 상실",
  "가정폭력·성폭력 피해",
  "출소 후 일정 기간 내 무소득 상태",
  "이혼·별거로 갑자기 생계를 혼자 책임지게 된 경우",
  "그 밖에 위기 상황으로 생계 유지가 어렵다고 인정되는 경우",
];

const APPLY_STEPS = [
  {
    step: 1,
    title: "신청 (주민센터 또는 129 콜센터)",
    desc: "가까운 주민센터를 방문하거나 복지부 콜센터(129)에 전화하면 됩니다. 본인 신청이 어려우면 이웃·관계자가 신고해도 됩니다. 24시간 365일 신고 가능합니다.",
    tip: "☎ 129 (보건복지부 위기상담 콜센터, 24시간 무료)",
  },
  {
    step: 2,
    title: "현장 확인 (1~3일 이내)",
    desc: "신청 접수 후 담당 공무원이 가정을 방문해 위기 상황을 확인합니다. 이 과정에서 소득·재산 조사가 함께 진행됩니다.",
    tip: "서류가 없어도 현장 방문 확인으로 대체 가능합니다.",
  },
  {
    step: 3,
    title: "즉시 지원 결정",
    desc: "현장 확인 후 담당자가 지원 여부를 즉시 결정합니다. 긴급한 경우 신청 당일 지원이 가능합니다. 사후 조사를 통해 기준 충족 여부를 다시 확인합니다.",
    tip: "일반 수급 신청과 달리 선(先) 지원 후(後) 심사 방식입니다.",
  },
];

const FAQ = [
  {
    q: "기초생활수급자도 긴급복지지원을 받을 수 있나요?",
    a: "기초수급자는 원칙적으로 중복 지원이 안 되지만, 수급 중에 예상치 못한 추가 위기(예: 갑작스러운 큰 병원비)가 발생한 경우 의료지원 등 일부 항목은 가능합니다. 주민센터에서 상담받으세요.",
  },
  {
    q: "소득·재산 기준이 있나요?",
    a: "있습니다. 소득은 기준 중위소득 75% 이하, 재산은 대도시 2억 4,100만원·중소도시 1억 5,200만원·농어촌 1억 3,000만원 이하이어야 합니다. 단, 긴급성이 인정되면 먼저 지원 후 사후 조사합니다.",
  },
  {
    q: "주소지 관할이 아닌 곳에서도 신청 가능한가요?",
    a: "네, 긴급복지지원은 거주지 주민센터뿐 아니라 현재 위기가 발생한 지역 어디서든 신청할 수 있습니다.",
  },
  {
    q: "지원을 받고 나중에 기준 미달로 판명되면 어떻게 되나요?",
    a: "부정 수급이 아닌 경우(실제 위기 상황이었으나 기준 미달)에는 반환 의무가 없습니다. 고의로 속인 경우에만 환수 조치가 됩니다.",
  },
];

export default function EmergencyWelfarePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">긴급복지지원</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-red-100 text-red-700 px-2.5 py-1 rounded-full">위기·긴급</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          갑자기 생계가 막막하다면 — 긴급복지지원<br />
          <span className="text-lg font-normal text-gray-500">당일 신청·즉시 지원, 2026년 신청 방법 완벽 안내</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 5분</p>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
        <p className="font-bold text-red-800 mb-1">지금 당장 생계가 위험하다면</p>
        <p className="text-sm text-gray-700 mb-2">심사 결과를 기다릴 여유가 없다면 <strong>먼저 지원하고 나중에 심사하는</strong> 긴급복지지원 제도가 있습니다.</p>
        <a href="tel:129" className="inline-block bg-red-600 text-white font-bold px-4 py-2 rounded-xl text-sm hover:bg-red-700 transition-colors">
          ☎ 129 지금 바로 전화하기 (24시간 무료)
        </a>
      </div>

      <AdSlotHorizontal slot="9007000001" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-2">어떤 경우에 신청할 수 있나요?</h2>
        <p className="text-sm text-gray-600 mb-4">아래 상황 중 하나라도 해당된다면 신청할 수 있습니다.</p>
        <div className="grid sm:grid-cols-2 gap-2">
          {CRISIS_CASES.map((c, i) => (
            <div key={i} className="flex gap-2 bg-white border border-gray-100 rounded-xl p-3 text-sm">
              <span className="text-red-400 flex-shrink-0">•</span>
              <span className="text-gray-700">{c}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">지원 종류와 금액</h2>
        <div className="space-y-3">
          {SUPPORT_TYPES.map((s) => (
            <div key={s.name} className={`bg-white rounded-2xl border-2 ${s.color} p-4`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{s.icon}</span>
                <h3 className="font-extrabold text-gray-800">{s.name}</h3>
                <span className="ml-auto text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{s.period}</span>
              </div>
              <p className="font-bold text-emerald-700 text-sm mb-1">{s.amount}</p>
              <p className="text-xs text-gray-500">💡 {s.note}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlotHorizontal slot="9007000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">신청 방법 (단계별)</h2>
        <div className="space-y-4">
          {APPLY_STEPS.map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">{item.step}</div>
              <div>
                <p className="font-bold text-gray-800 mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.desc}</p>
                <p className="text-xs bg-red-50 text-red-700 px-2.5 py-1 rounded-full inline-block">💡 {item.tip}</p>
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
          <Link href="/guides/rejected-benefits" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">복지 탈락 재신청</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 129 보건복지부 콜센터 (24시간 무료) · 주민센터 방문 신청 가능</p>
    </article>
  );
}
