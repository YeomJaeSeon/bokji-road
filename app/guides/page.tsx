import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "복지혜택 신청 가이드 — 실업급여·기초연금·부모급여·근로장려금",
  description:
    "실업급여, 기초연금, 부모급여, 근로장려금, 기초생활수급 신청 방법을 단계별로 쉽게 안내합니다. 2026년 최신 기준으로 자격 조건부터 서류까지 완벽 정리했습니다.",
  keywords: [
    "복지혜택 신청 방법", "실업급여 신청 가이드", "기초연금 신청 방법",
    "부모급여 신청", "근로장려금 신청", "기초생활수급자 신청",
    "복지급여 가이드", "2026 복지 신청",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides" },
};

const GUIDES = [
  {
    href: "/guides/age-30s",
    icon: "👩‍💼",
    color: "bg-lime-50 border-lime-200",
    tag: "30대",
    tagColor: "bg-lime-100 text-lime-700",
    title: "30대가 받을 수 있는 복지혜택 총정리 2026",
    desc: "청년도약계좌·버팀목전세대출·육아휴직급여·출산지원금·근로장려금까지 30대 필수 혜택 총정리.",
    readTime: "약 6분",
  },
  {
    href: "/guides/age-40s-50s",
    icon: "👨‍💼",
    color: "bg-blue-50 border-blue-200",
    tag: "40~50대",
    tagColor: "bg-blue-100 text-blue-700",
    title: "40~50대가 받을 수 있는 복지혜택 총정리 2026",
    desc: "내일배움카드·중장년 취업지원·건강검진·국민연금 추납·주택연금까지 중장년 필수 혜택 총정리.",
    readTime: "약 6분",
  },
  {
    href: "/guides/age-60s-plus",
    icon: "👴",
    color: "bg-cyan-50 border-cyan-200",
    tag: "60대 이상",
    tagColor: "bg-cyan-100 text-cyan-700",
    title: "60대 이상이 받을 수 있는 복지혜택 총정리 2026",
    desc: "기초연금·노인일자리·장기요양보험·치매안심센터·틀니임플란트·에너지바우처까지 어르신 혜택 총정리.",
    readTime: "약 6분",
  },
  {
    href: "/guides/rejected-benefits",
    icon: "🔄",
    color: "bg-red-50 border-red-200",
    tag: "탈락·재신청",
    tagColor: "bg-red-100 text-red-700",
    title: "복지혜택 탈락해도 포기하지 마세요 — 이의신청·재심사 가이드",
    desc: "소득인정액 오류, 서류 미비, 부양의무자 기준 등 탈락 이유별 이의신청·재신청 방법 완벽 정리.",
    readTime: "약 6분",
  },
  {
    href: "/guides/emergency-welfare",
    icon: "🆘",
    color: "bg-red-50 border-red-200",
    tag: "위기·긴급",
    tagColor: "bg-red-100 text-red-700",
    title: "긴급복지지원 신청 방법 완벽 가이드 2026",
    desc: "실직·사고·질병·화재 등 갑작스러운 위기 시 즉시 신청. 생계지원 월 183만원·의료비 300만원·주거비 지원.",
    readTime: "약 5분",
  },
  {
    href: "/guides/housing-benefit",
    icon: "🏠",
    color: "bg-amber-50 border-amber-200",
    tag: "주거",
    tagColor: "bg-amber-100 text-amber-700",
    title: "주거급여 신청 방법 완벽 가이드 2026",
    desc: "기준 중위소득 48% 이하라면 월세(임차료) 또는 집 수리비를 정부가 지원. 부양의무자 기준 없음.",
    readTime: "약 6분",
  },
  {
    href: "/guides/medical-expense-support",
    icon: "🏥",
    color: "bg-blue-50 border-blue-200",
    tag: "의료비",
    tagColor: "bg-blue-100 text-blue-700",
    title: "의료비 지원 총정리 2026 — 암·희귀질환·재난적 의료비",
    desc: "본인부담 상한제 자동환급, 재난적 의료비 최대 3000만원, 암·희귀질환 산정특례까지 총정리.",
    readTime: "약 6분",
  },
  {
    href: "/guides/happy-birth-card",
    icon: "🤰",
    color: "bg-pink-50 border-pink-200",
    tag: "임신·출산",
    tagColor: "bg-pink-100 text-pink-700",
    title: "국민행복카드 신청 방법 2026 — 임신·출산 진료비 바우처",
    desc: "임신 확인 즉시 신청 가능. 단태아 100만원·다태아 140만원 바우처 + 첫만남이용권 200만원.",
    readTime: "약 5분",
  },
  {
    href: "/guides/college-scholarship",
    icon: "🎓",
    color: "bg-violet-50 border-violet-200",
    tag: "대학생",
    tagColor: "bg-violet-100 text-violet-700",
    title: "국가장학금 신청 방법 완벽 가이드 2026",
    desc: "소득분위 1~4구간 전액 지원, 8구간(중위 200%)까지 지원 가능. 신청 안 하면 자동 지급 없음.",
    readTime: "약 5분",
  },
  {
    href: "/guides/self-employed-insurance",
    icon: "🏪",
    color: "bg-orange-50 border-orange-200",
    tag: "자영업·폐업",
    tagColor: "bg-orange-100 text-orange-700",
    title: "자영업자 실업급여(고용보험) 신청 방법 2026",
    desc: "자영업자도 고용보험 임의가입 시 폐업 후 실업급여 수령 가능. 최대 240일 지급.",
    readTime: "약 5분",
  },
  {
    href: "/guides/youth-guide",
    icon: "🧑",
    color: "bg-lime-50 border-lime-200",
    tag: "청년",
    tagColor: "bg-lime-100 text-lime-700",
    title: "2026 청년 복지혜택 완전 가이드",
    desc: "청년도약계좌·월세지원·취업지원·근로장려금까지 만 19~34세가 받을 수 있는 혜택 총정리.",
    readTime: "약 7분",
  },
  {
    href: "/guides/unemployment-guide",
    icon: "💼",
    color: "bg-blue-50 border-blue-200",
    tag: "실업·퇴직",
    tagColor: "bg-blue-100 text-blue-700",
    title: "실업급여 신청 완벽 가이드 2026",
    desc: "자격 조건·수령액 계산·신청 단계·주의사항까지 한 번에. 자발적 퇴직도 받을 수 있는 경우 포함.",
    readTime: "약 5분",
  },
  {
    href: "/guides/basic-pension-guide",
    icon: "👴",
    color: "bg-cyan-50 border-cyan-200",
    tag: "노년",
    tagColor: "bg-cyan-100 text-cyan-700",
    title: "기초연금 신청 자격과 방법 완벽 가이드 2026",
    desc: "만 65세 이상 소득하위 70% 기준 해설, 소득인정액 계산법, 신청 절차 단계별 안내.",
    readTime: "약 5분",
  },
  {
    href: "/guides/parental-allowance-guide",
    icon: "👶",
    color: "bg-pink-50 border-pink-200",
    tag: "영아·출산",
    tagColor: "bg-pink-100 text-pink-700",
    title: "부모급여·아동수당 신청 가이드 2026",
    desc: "0세 100만원·1세 50만원 부모급여와 월 10만원 아동수당, 어린이집 이용 시 차이점까지 정리.",
    readTime: "약 4분",
  },
  {
    href: "/guides/eitc-guide",
    icon: "💰",
    color: "bg-emerald-50 border-emerald-200",
    tag: "근로·사업소득",
    tagColor: "bg-emerald-100 text-emerald-700",
    title: "근로장려금·자녀장려금 신청 완벽 가이드 2026",
    desc: "5월 정기신청·9월 반기신청 방법, 가구 유형별 지급액, 자녀장려금 동시 신청까지 총정리.",
    readTime: "약 5분",
  },
  {
    href: "/guides/basic-living-guide",
    icon: "🏠",
    color: "bg-amber-50 border-amber-200",
    tag: "기초생활",
    tagColor: "bg-amber-100 text-amber-700",
    title: "기초생활수급자 신청 방법 완벽 가이드 2026",
    desc: "생계·주거·의료·교육급여 4대 급여 신청 방법, 소득인정액 계산, 부양의무자 기준까지 완벽 정리.",
    readTime: "약 6분",
  },
];

export default function GuidesIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-4 flex gap-2">
        <Link href="/" className="hover:text-emerald-600">홈</Link>
        <span>/</span>
        <span className="text-gray-700">신청 가이드</span>
      </nav>

      <h1 className="text-2xl font-extrabold text-gray-900 mb-1">복지혜택 신청 가이드</h1>
      <p className="text-sm text-gray-500 mb-6">
        자격 조건부터 신청 방법까지, 2026년 최신 기준으로 쉽게 설명해드립니다.
      </p>

      <AdSlotHorizontal slot="7000000001" />

      <div className="mt-6 space-y-4">
        {GUIDES.map((g) => (
          <Link key={g.href} href={g.href}
            className={`block rounded-2xl border p-5 hover:shadow-md transition-shadow ${g.color}`}>
            <div className="flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">{g.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${g.tagColor}`}>{g.tag}</span>
                  <span className="text-xs text-gray-400">{g.readTime}</span>
                </div>
                <p className="font-bold text-gray-800 leading-snug">{g.title}</p>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{g.desc}</p>
              </div>
              <span className="text-emerald-500 flex-shrink-0 mt-1">→</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-sm text-gray-700">
        <p className="font-bold text-emerald-800 mb-2">📞 더 자세한 상담이 필요하다면</p>
        <p>
          <a href="tel:129" className="text-emerald-600 font-bold hover:underline">☎ 129 복지 콜센터</a>
          {" "}(무료, 월~금 9~18시) 또는{" "}
          <a href="https://www.bokjiro.go.kr" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">복지로(bokjiro.go.kr)</a>
          에서 개인 맞춤 상담을 받을 수 있습니다.
        </p>
      </div>
    </div>
  );
}
