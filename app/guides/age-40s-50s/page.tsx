import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "40~50대가 받을 수 있는 복지혜택 총정리 2026 — 재취업·건강·노후준비",
  description:
    "2026년 40대·50대가 신청할 수 있는 복지혜택을 총정리했습니다. 내일배움카드, 중장년 취업지원, 건강검진, 국민연금 크레딧, 주택연금까지 놓치기 쉬운 혜택을 한 곳에 모았습니다.",
  keywords: [
    "40대 복지혜택", "50대 복지혜택", "중장년 지원금", "중장년 취업지원",
    "내일배움카드 신청", "주택연금 신청", "국민연금 추납", "40대 정부지원",
    "50대 노후준비 지원", "중장년 재취업",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/age-40s-50s" },
  openGraph: {
    title: "40~50대가 받을 수 있는 복지혜택 총정리 2026 | 복지로드",
    description: "재취업·건강검진·노후준비까지, 40~50대 필수 혜택 한 번에 확인.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/age-40s-50s", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "40~50대가 받을 수 있는 복지혜택 총정리 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/age-40s-50s",
  inLanguage: "ko", datePublished: "2026-06-01", dateModified: "2026-06-08",
};

const BENEFITS = [
  {
    name: "내일배움카드 (직업훈련비 지원)",
    icon: "📚",
    color: "border-indigo-200",
    amount: "5년간 최대 300~500만원 (자부담 0~45%)",
    target: "재직자·실직자·자영업자 모두 신청 가능 (일부 제한 직종 제외)",
    how: "고용24(work24.go.kr) 또는 고용센터",
    note: "40~50대 경력 전환에 필수. IT·자격증·창업·외국어 등 다양한 훈련 가능. 재직자도 신청 가능.",
    link: "/#benefits",
  },
  {
    name: "중장년 취업지원 프로그램",
    icon: "💼",
    color: "border-blue-200",
    amount: "취업성공 시 최대 150만원 + 무료 취업 컨설팅",
    target: "만 40세 이상 구직자",
    how: "중장년일자리희망센터 또는 고용센터",
    note: "이력서·면접 코칭, 직업심리검사, 취업 알선까지 무료. 전국 20곳 이상 운영.",
    link: "/#benefits",
  },
  {
    name: "국민취업지원제도 (구직촉진수당)",
    icon: "🔍",
    color: "border-violet-200",
    amount: "월 50만원 × 최대 6개월 (총 최대 300만원)",
    target: "15~69세 구직자 중 소득·재산 기준 충족자 (1유형)",
    how: "고용24(work24.go.kr) 또는 고용센터",
    note: "실직 후 소득이 없는 40~50대가 가장 활용해야 할 제도. 직업훈련과 병행 가능.",
    link: "/#benefits",
  },
  {
    name: "건강검진 + 암 검진 (무료)",
    icon: "🩺",
    color: "border-teal-200",
    amount: "일반 건강검진 무료 / 5대 암 검진 무료~10%",
    target: "건강보험 가입자 (2년마다 1회, 짝·홀수년 출생에 따라 다름)",
    how: "국민건강보험공단(nhis.or.kr) 검진기관 확인 후 예약",
    note: "위암(만 40세↑)·대장암(만 50세↑)·유방암·자궁경부암·폐암 무료 검진. 40대부터 꼭 챙기세요.",
    link: "/#benefits",
  },
  {
    name: "국민연금 추납 제도",
    icon: "🏦",
    color: "border-cyan-200",
    amount: "납부 예외·적용제외 기간 소급 납입 → 노후 연금 크게 증가",
    target: "국민연금 가입자 (과거 미납 기간이 있는 경우)",
    how: "국민연금공단(nps.or.kr) 또는 지사 방문",
    note: "추납 1개월당 연금 약 5,000~10,000원 증가. 은퇴 전 반드시 확인하세요.",
    link: "/#benefits",
  },
  {
    name: "주택연금 (역모기지론)",
    icon: "🏡",
    color: "border-amber-200",
    amount: "55세 이상 가입 시 평생 매월 연금 수령 (주택가격에 따라 차등)",
    target: "만 55세 이상, 공시가 12억원 이하 주택 소유 1주택자",
    how: "한국주택금융공사(hf.go.kr) 또는 은행",
    note: "3억원 주택 기준 월 약 70~90만원 수령. 사망 후 정산 시 잔여분 상속인에게 환급.",
    link: "/#benefits",
  },
  {
    name: "근로장려금",
    icon: "💰",
    color: "border-emerald-200",
    amount: "단독 최대 165만원 / 홑벌이 최대 285만원 / 맞벌이 최대 330만원",
    target: "연소득 2,200만원(단독)~3,800만원(맞벌이) 이하 근로·사업소득자",
    how: "홈택스 또는 ARS 1544-9944 (5월 정기신청)",
    note: "소득이 낮은 자영업자·프리랜서도 신청 가능. 5월에 신청하지 않으면 그냥 포기하는 겁니다.",
    link: "/guides/eitc-guide",
  },
  {
    name: "기초생활수급 + 차상위계층 확인",
    icon: "🏠",
    color: "border-orange-200",
    amount: "생계급여 월 최대 71만원 + 의료·주거·교육급여 추가",
    target: "소득인정액 기준 중위소득 32%(생계)~50%(차상위) 이하",
    how: "주민센터 또는 복지로(bokjiro.go.kr)",
    note: "실직·폐업으로 소득이 급감한 경우 자격이 될 수 있습니다. 재산이 있어도 소득환산액 기준이라 의외로 해당될 수 있음.",
    link: "/guides/basic-living-guide",
  },
];

const CHECKLIST = [
  { title: "내일배움카드 발급 받아두기", desc: "현재 직장을 다니고 있어도 미리 발급 받아두면 언제든 직업훈련을 활용할 수 있습니다." },
  { title: "국민연금 추납 기간 확인", desc: "국민연금공단 홈페이지에서 납부 예외 기간을 확인하고 추납 여부를 검토하세요. 노후 연금이 크게 달라집니다." },
  { title: "2년마다 건강검진 꼭 받기", desc: "50대부터는 대장암·폐암 검진도 무료입니다. 공단에서 검진 대상 여부를 매년 확인해드립니다." },
  { title: "55세 이후 주택연금 상담", desc: "집은 있지만 현금이 부족하다면 주택연금을 일찍 가입할수록 월 수령액이 늘어납니다." },
];

export default function Age40s50sPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">40~50대 혜택 총정리</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">중장년</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          40~50대가 받을 수 있는 복지혜택 총정리 2026<br />
          <span className="text-lg font-normal text-gray-500">재취업·건강검진·노후준비 지원 한 번에</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 6분</p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        40~50대는 자녀 교육비·부모 돌봄·노후 준비가 동시에 몰리는 '샌드위치 세대'입니다. 소득은 어느 정도 있지만 지출도 가장 많은 나이인 만큼, 정부 지원을 적극 활용해야 합니다.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        특히 <strong>내일배움카드는 재직 중에도 신청할 수 있어</strong> 경력 전환 준비에 활용하기 좋고, <strong>국민연금 추납은 빨리 할수록 노후 연금이 크게 늘어납니다.</strong> 아래 혜택을 하나하나 확인해보세요.
      </p>

      <AdSlotHorizontal slot="9004000001" />

      <div className="mt-6 space-y-4">
        {BENEFITS.map((benefit) => (
          <div key={benefit.name} className={`bg-white rounded-2xl border-2 ${benefit.color} p-5`}>
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{benefit.icon}</span>
                <h2 className="font-extrabold text-gray-800 text-lg">{benefit.name}</h2>
              </div>
              <Link href={benefit.link}
                className="flex-shrink-0 text-xs text-emerald-600 border border-emerald-300 px-2.5 py-1 rounded-lg hover:bg-emerald-50 font-semibold transition-colors">
                상세 →
              </Link>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <span className="text-xs font-bold text-emerald-600 w-12 flex-shrink-0 mt-0.5">지원액</span>
                <p className="font-bold text-gray-800">{benefit.amount}</p>
              </div>
              <div className="flex gap-2">
                <span className="text-xs font-bold text-gray-500 w-12 flex-shrink-0 mt-0.5">대상</span>
                <p className="text-gray-700">{benefit.target}</p>
              </div>
              <div className="flex gap-2">
                <span className="text-xs font-bold text-gray-500 w-12 flex-shrink-0 mt-0.5">신청</span>
                <p className="text-gray-700">{benefit.how}</p>
              </div>
              <p className="bg-gray-50 rounded-xl px-3 py-2 text-gray-600 text-xs">💡 {benefit.note}</p>
            </div>
          </div>
        ))}
      </div>

      <AdSlotHorizontal slot="9004000002" />

      <section className="mt-8 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">40~50대 복지 체크리스트</h2>
        <div className="space-y-3 text-sm">
          {CHECKLIST.map((item, i) => (
            <div key={i} className="flex gap-3 bg-white border border-gray-100 rounded-xl p-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</div>
              <div>
                <p className="font-bold text-gray-800 mb-0.5">{item.title}</p>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
        <p className="font-bold text-emerald-800 mb-3">관련 가이드</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/guides/unemployment-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">실업급여 신청 가이드 →</Link>
          <Link href="/guides/eitc-guide" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">근로장려금 가이드</Link>
          <Link href="/guides/age-60s-plus" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">60대 이상 혜택 →</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 129 복지 콜센터 (무료, 월~금 9~18시)에서 전화 상담도 가능합니다.</p>
    </article>
  );
}
