import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "교육급여 신청 방법 2026 — 초중고 학생 학용품비·교육활동지원비",
  description:
    "2026년 교육급여 신청 방법과 지급 금액을 완벽 안내합니다. 기준 중위소득 50% 이하 가정의 초·중·고 학생은 연간 최대 768,000원 교육활동지원비를 받을 수 있습니다.",
  keywords: [
    "교육급여 신청방법", "교육급여 금액 2026", "교육급여 자격", "교육급여 초등학생",
    "교육급여 중학생", "교육급여 고등학생", "교육활동지원비", "기초수급 교육급여",
    "교육급여 신청 서류", "저소득층 학생 지원",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/education-benefit" },
  openGraph: {
    title: "교육급여 신청 방법 2026 | 복지로드",
    description: "초·중·고 학생 연간 최대 768,000원 교육활동지원비 신청 방법 총정리.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/education-benefit", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "교육급여 신청 방법 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/education-benefit",
  inLanguage: "ko", datePublished: "2026-06-13", dateModified: "2026-06-13",
};

const AMOUNTS = [
  { level: "초등학생", activity: "487,000원", voucher: "입학금·수업료 전액 (사립초)", note: "교육활동지원비는 현금 지급" },
  { level: "중학생", activity: "679,000원", voucher: "입학금·수업료 전액", note: "" },
  { level: "고등학생", activity: "768,000원", voucher: "입학금·수업료·학교운영지원비 전액", note: "고등학생은 교과서대금도 지원" },
];

const INCOME_TABLE = [
  { members: "1인", income: "1,160,649원" },
  { members: "2인", income: "1,918,026원" },
  { members: "3인", income: "2,455,547원" },
  { members: "4인", income: "2,984,330원" },
];

const APPLY_STEPS = [
  { step: 1, title: "신청 기간 확인 (매년 3월, 9월 중심)", desc: "교육급여는 학기 초(3월)와 2학기 초(9월)에 집중 신청합니다. 연중 신청도 가능하지만 3월에 신청해야 1학기 전체를 받을 수 있습니다." },
  { step: 2, title: "신청 장소", desc: "주민센터 방문 신청 또는 복지로(bokjiro.go.kr) 온라인 신청. 학교에서 안내문을 받았다면 학교를 통해서도 신청 가능합니다." },
  { step: 3, title: "서류 제출", desc: "신분증, 가족관계증명서, 금융정보 제공 동의서를 제출합니다. 이미 기초수급자·차상위계층으로 등록된 경우 추가 서류 없이 신청 가능합니다." },
  { step: 4, title: "지급", desc: "교육활동지원비는 연 1회 현금(계좌이체) 지급. 입학금·수업료는 학교로 직접 지원됩니다. 고등학생 교과서비는 별도 바우처로 지급." },
];

const FAQ = [
  { q: "기초수급자가 아니어도 받을 수 있나요?", a: "네. 교육급여는 기준 중위소득 50% 이하인 가구라면 기초수급자가 아니어도 신청할 수 있습니다. 주민센터에서 소득인정액 조사 후 결정됩니다." },
  { q: "학교에서 자동으로 처리해주지 않나요?", a: "학교에서 안내를 받을 수 있지만, 신청은 반드시 가정에서 직접 해야 합니다. 자동으로 지급되지 않으니 신청 기간 내에 신청하세요." },
  { q: "교육활동지원비로 무엇을 살 수 있나요?", a: "현금으로 지급되므로 학용품, 참고서, 학원비 등 교육 관련 비용으로 자유롭게 사용할 수 있습니다. 용도 제한이 없습니다." },
  { q: "검정고시 준비생도 받을 수 있나요?", a: "검정고시 준비생은 교육급여 대상에서 제외됩니다. 초·중·고등학교에 재학 중인 학생이어야 합니다." },
];

export default function EducationBenefitPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">교육급여</span>
      </nav>
      <div className="mb-6">
        <span className="text-xs font-bold bg-violet-100 text-violet-700 px-2.5 py-1 rounded-full">교육급여</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          교육급여 신청 방법 완벽 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">초·중·고 학생 교육활동지원비 최대 768,000원</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 4분</p>
      </div>
      <div className="bg-violet-50 border border-violet-200 rounded-2xl p-4 mb-6">
        <p className="font-bold text-violet-800 mb-1">자동으로 지급되지 않습니다 — 반드시 신청하세요</p>
        <p className="text-sm text-gray-700">소득 기준을 충족해도 신청하지 않으면 받을 수 없습니다. <strong>매년 3월에 신청</strong>해야 1학기부터 전액 받을 수 있습니다.</p>
      </div>

      <AdSlotHorizontal slot="9025000001" />

      <section className="mt-4 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">2026년 교육급여 지급 금액</h2>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-3 bg-violet-600 text-white text-sm font-bold">
            <div className="p-3">학교급</div><div className="p-3">교육활동지원비 (연간)</div><div className="p-3">수업료·입학금</div>
          </div>
          {AMOUNTS.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <div className="p-3 font-semibold text-gray-700">{row.level}</div>
              <div className="p-3 font-bold text-violet-700">{row.activity}</div>
              <div className="p-3 text-gray-600 text-xs">{row.voucher}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">※ 교육활동지원비는 현금 지급. 수업료·입학금은 학교 직접 지원.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">소득 기준 (기준 중위소득 50% 이하)</h2>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-2 bg-gray-600 text-white text-sm font-bold">
            <div className="p-3">가구원 수</div><div className="p-3">월 소득인정액 기준</div>
          </div>
          {INCOME_TABLE.map((row, i) => (
            <div key={i} className={`grid grid-cols-2 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <div className="p-3 text-gray-700">{row.members}</div>
              <div className="p-3 font-semibold text-violet-700">{row.income} 이하</div>
            </div>
          ))}
        </div>
      </section>

      <AdSlotHorizontal slot="9025000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">신청 절차</h2>
        <div className="space-y-3">
          {APPLY_STEPS.map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">{item.step}</div>
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
          <Link href="/guides/basic-living-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">기초생활수급 신청 →</Link>
          <Link href="/guides/near-poverty-line" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">차상위계층 가이드</Link>
          <Link href="/guides/college-scholarship" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">국가장학금 (대학생)</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 129 복지 콜센터 · 교육비 지원 문의 주민센터</p>
    </article>
  );
}
