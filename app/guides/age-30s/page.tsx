import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "30대가 받을 수 있는 복지혜택 총정리 2026 — 주거·출산·자산형성",
  description:
    "2026년 30대가 신청할 수 있는 복지혜택을 총정리했습니다. 청년도약계좌, 버팀목 전세대출, 출산 지원금, 육아휴직급여, 근로장려금까지 놓치기 쉬운 혜택을 한 곳에 모았습니다.",
  keywords: [
    "30대 복지혜택", "30대 받을 수 있는 지원금", "청년도약계좌", "버팀목전세대출",
    "출산 지원금 2026", "육아휴직급여", "근로장려금 30대", "30대 정부지원",
    "30대 주거지원", "청년 내일저축계좌",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/age-30s" },
  openGraph: {
    title: "30대가 받을 수 있는 복지혜택 총정리 2026 | 복지로드",
    description: "청년도약계좌·출산지원·주거대출까지, 30대 필수 혜택 한 번에 확인.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/age-30s", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "30대가 받을 수 있는 복지혜택 총정리 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/age-30s",
  inLanguage: "ko", datePublished: "2026-06-01", dateModified: "2026-06-08",
};

const BENEFITS = [
  {
    name: "청년도약계좌",
    icon: "📈",
    color: "border-lime-200",
    amount: "5년 만기 시 최대 5,000만원 (정부 기여금 + 이자 비과세)",
    target: "만 19~34세, 개인소득 7,500만원 이하, 가구소득 중위 250% 이하",
    how: "은행 앱 또는 서민금융진흥원 (매월 가입 신청 기간 있음)",
    note: "월 70만원까지 납입 가능. 소득이 낮을수록 정부 기여금이 더 커집니다. 중도해지 시 혜택 소멸.",
    link: "/#benefits",
  },
  {
    name: "청년내일저축계좌",
    icon: "💵",
    color: "border-emerald-200",
    amount: "3년 적립 시 최대 1,440만원 (정부 매칭 월 10만원)",
    target: "만 19~34세 차상위·기초수급 청년 근로자 (중위 50% 이하)",
    how: "복지로 또는 주민센터 (매년 5~6월 신청)",
    note: "본인이 월 10만원 저축하면 정부가 10만원 추가. 기초수급자는 30만원까지 매칭.",
    link: "/#benefits",
  },
  {
    name: "버팀목 전세자금대출",
    icon: "🏠",
    color: "border-blue-200",
    amount: "수도권 최대 3억원 / 지방 최대 2억원 (연 1.2~2.4%)",
    target: "부부 합산 연소득 5,000만원 이하 무주택 세대주 (신혼부부 6,000만원)",
    how: "주택도시기금(hf.go.kr) 또는 은행 창구",
    note: "신혼부부·2자녀 이상은 우대금리 적용. 전세보증금의 80%까지 대출 가능.",
    link: "/#benefits",
  },
  {
    name: "육아휴직급여",
    icon: "👶",
    color: "border-pink-200",
    amount: "첫 3개월 통상임금 100% (상한 250만원), 이후 80% (상한 150만원)",
    target: "고용보험 가입 근로자 (육아휴직 전 180일 이상 가입)",
    how: "고용보험 홈페이지(ei.go.kr) 또는 고용센터",
    note: "부모 모두 사용 시 '3+3 육아휴직제' 첫 3개월 각 월 최대 300만원. 배우자가 먼저 사용할수록 유리.",
    link: "/#benefits",
  },
  {
    name: "첫만남이용권 + 부모급여",
    icon: "🎁",
    color: "border-rose-200",
    amount: "출생 시 200만원(첫만남) + 0세 월 100만원·1세 월 50만원(부모급여)",
    target: "출생아 전원 (소득 무관)",
    how: "주민센터 또는 복지로·정부24 (출생 후 60일 이내 신청)",
    note: "아동수당 월 10만원(만 8세 미만)도 함께 신청하세요. 세 가지 모두 동시 신청 가능.",
    link: "/guides/parental-allowance-guide",
  },
  {
    name: "근로장려금",
    icon: "💰",
    color: "border-amber-200",
    amount: "단독가구 최대 165만원 / 홑벌이 최대 285만원 / 맞벌이 최대 330만원",
    target: "연소득 2,200만원(단독) ~ 3,800만원(맞벌이) 이하 근로·사업소득자",
    how: "홈택스 또는 ARS 1544-9944 (5월 정기신청 / 9월 반기신청)",
    note: "신청 안 하면 자동으로 못 받습니다. 5월에 꼭 신청하세요.",
    link: "/guides/eitc-guide",
  },
  {
    name: "국민취업지원제도 (구직촉진수당)",
    icon: "🔍",
    color: "border-violet-200",
    amount: "월 50만원 × 최대 6개월 (총 최대 300만원)",
    target: "15~69세 구직자 중 소득·재산 기준 충족자 (1유형)",
    how: "고용24(work24.go.kr) 또는 고용센터",
    note: "취업 후 조기 취업 성공 수당 50~150만원 추가 지급. 직업훈련과 병행 가능.",
    link: "/#benefits",
  },
  {
    name: "내일배움카드 (직업훈련비)",
    icon: "📚",
    color: "border-indigo-200",
    amount: "5년간 300~500만원 (자부담 0~45%)",
    target: "재직자·실업자·자영업자 (일부 제한 직종 제외)",
    how: "고용24 또는 HRD-Net (hrd.go.kr)",
    note: "경력 전환, 자격증 취득, 디지털 기술 훈련 등 다양한 과정에 사용 가능. 재직자도 신청 가능.",
    link: "/#benefits",
  },
];

const CHECKLIST = [
  { title: "청년도약계좌 가입 여부 확인", desc: "만 34세가 넘기 전 반드시 가입해두세요. 가입만 해두면 이후 소득이 늘어도 유지됩니다." },
  { title: "출산 후 60일 이내 신청", desc: "첫만남이용권·부모급여·아동수당을 출생 후 60일 이내에 주민센터에서 한 번에 신청하세요." },
  { title: "5월엔 근로장려금 신청", desc: "매년 5월이 되면 홈택스에서 근로장려금을 신청하세요. 안 하면 그냥 포기하는 겁니다." },
  { title: "전세 계약 전 버팀목 대출 확인", desc: "전세 계약 전에 주택도시기금 대출 한도와 금리를 반드시 확인하세요. 금리 차이가 수백만원입니다." },
];

export default function Age30sPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">30대 혜택 총정리</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-lime-100 text-lime-700 px-2.5 py-1 rounded-full">30대</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          30대가 받을 수 있는 복지혜택 총정리 2026<br />
          <span className="text-lg font-normal text-gray-500">주거·출산·자산형성·재취업까지 한 번에</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 6분</p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        30대는 결혼·출산·내 집 마련이 겹치는 시기인 동시에 소득도 낮아 부담이 가장 큰 나이입니다. 그러나 정부는 30대를 위한 자산형성·주거·출산 지원을 계속 늘리고 있습니다. 많은 분들이 몰라서 못 받는 혜택이 한두 가지가 아닙니다.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        특히 <strong>청년도약계좌는 만 34세가 지나면 가입 자체가 불가능</strong>하고, <strong>근로장려금은 신청하지 않으면 자동으로 지급되지 않습니다.</strong> 아래 혜택을 모두 확인하고 해당되는 건 바로 신청하세요.
      </p>

      <AdSlotHorizontal slot="9003000001" />

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

      <AdSlotHorizontal slot="9003000002" />

      <section className="mt-8 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">30대 복지 체크리스트</h2>
        <div className="space-y-3 text-sm">
          {CHECKLIST.map((item, i) => (
            <div key={i} className="flex gap-3 bg-white border border-gray-100 rounded-xl p-4">
              <div className="w-8 h-8 bg-lime-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</div>
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
          <Link href="/guides/eitc-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">근로장려금 신청 가이드 →</Link>
          <Link href="/guides/parental-allowance-guide" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">부모급여·아동수당 가이드</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 129 복지 콜센터 (무료, 월~금 9~18시)에서 전화 상담도 가능합니다.</p>
    </article>
  );
}
