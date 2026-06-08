import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "국가장학금 신청 방법 완벽 가이드 2026 — 소득분위별 지원금액·신청기간",
  description:
    "2026년 국가장학금 1·2유형 신청 방법, 소득분위별 지원금액, 신청 기간, 성적 기준, 재신청 방법까지 완벽 안내합니다. 대학생이라면 반드시 신청하세요.",
  keywords: [
    "국가장학금 신청방법", "국가장학금 소득분위", "국가장학금 금액 2026", "한국장학재단",
    "국가장학금 1유형 2유형", "국가장학금 신청기간", "대학생 장학금", "국가장학금 자격조건",
    "국가장학금 성적기준", "국가장학금 재신청",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/college-scholarship" },
  openGraph: {
    title: "국가장학금 신청 방법 완벽 가이드 2026 | 복지로드",
    description: "소득분위별 지원금액·신청기간·주의사항까지 한 번에 확인.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/college-scholarship", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "국가장학금 신청 방법 완벽 가이드 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/college-scholarship",
  inLanguage: "ko", datePublished: "2026-06-08", dateModified: "2026-06-08",
};

const TYPE1_TABLE = [
  { tier: "1구간", income: "기준 중위소득 30% 이하", amount: "전액 (등록금 전액)" },
  { tier: "2구간", income: "기준 중위소득 50% 이하", amount: "전액" },
  { tier: "3구간", income: "기준 중위소득 70% 이하", amount: "전액" },
  { tier: "4구간", income: "기준 중위소득 90% 이하", amount: "전액" },
  { tier: "5구간", income: "기준 중위소득 100% 이하", amount: "368만원" },
  { tier: "6구간", income: "기준 중위소득 130% 이하", amount: "290만원" },
  { tier: "7구간", income: "기준 중위소득 150% 이하", amount: "224만원" },
  { tier: "8구간", income: "기준 중위소득 200% 이하", amount: "67만원" },
];

const APPLY_SCHEDULE = [
  { semester: "2학기", period: "매년 5~6월", note: "1차 신청 (본 신청)" },
  { semester: "2학기 추가", period: "매년 8~9월", note: "2차 신청 (추가 신청)" },
  { semester: "1학기", period: "매년 11~12월", note: "1차 신청 (본 신청)" },
  { semester: "1학기 추가", period: "매년 2~3월", note: "2차 신청 (추가 신청)" },
];

const CAUTIONS = [
  { title: "신청 기간 내 반드시 신청", desc: "국가장학금은 자동 지급이 아닙니다. 매 학기 한국장학재단(kosaf.go.kr)에서 신청해야 합니다. 신청 기간을 놓치면 해당 학기에는 받을 수 없습니다." },
  { title: "성적 기준 충족 (2학기 이상 재학생)", desc: "직전 학기 12학점 이상 이수, 80점(B0) 이상이어야 합니다. 1학년 1학기·2학기, 편입생 첫 학기는 성적 기준 미적용입니다." },
  { title: "가구원 동의 필수", desc: "가족(부모 등)의 소득·재산 정보를 조회하기 위한 가구원 동의가 필요합니다. 부모가 동의를 거부하면 소득 산정이 안 돼 장학금을 받을 수 없습니다." },
  { title: "재학연한 초과 불가", desc: "학칙상 최대 재학 연한을 초과하면 지원이 중단됩니다. 일반적으로 학부 기준 8학기 이내입니다." },
];

const FAQ = [
  {
    q: "편입생·재입학생도 신청할 수 있나요?",
    a: "네, 신청 가능합니다. 단, 편입생·재입학생은 첫 학기 성적 기준이 면제됩니다. 이전 대학 재학 중 받은 장학금이 있다면 지원 학기에 합산될 수 있으니 장학재단에 확인하세요.",
  },
  {
    q: "아르바이트 소득도 소득분위 산정에 포함되나요?",
    a: "포함됩니다. 근로소득은 소득인정액에 포함되며, 연 소득 130만원 초과 시 반영됩니다. 단, 학생 본인 소득은 대부분 공제 적용을 받아 실질 영향이 크지 않은 경우가 많습니다.",
  },
  {
    q: "국가장학금과 교내 장학금을 중복으로 받을 수 있나요?",
    a: "중복 수혜가 가능합니다. 단, 총 장학금 합계가 등록금을 초과할 수는 없습니다. 초과분은 환수될 수 있으니 주의하세요.",
  },
  {
    q: "소득분위가 예상보다 높게 나왔어요. 이의신청이 가능한가요?",
    a: "네, 가능합니다. 한국장학재단(1599-2000) 또는 홈페이지에서 소득분위 산정 내역을 확인하고, 오류가 있다고 판단되면 이의신청을 할 수 있습니다. 재산 감소, 부채 추가 등 변동 사유가 있으면 증빙 서류와 함께 신청하세요.",
  },
];

export default function CollegeScholarshipPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">국가장학금</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-violet-100 text-violet-700 px-2.5 py-1 rounded-full">대학생</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          국가장학금 신청 방법 완벽 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">소득분위별 지원금액·신청기간·주의사항 한 번에</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 5분</p>
      </div>

      <div className="bg-violet-50 border border-violet-200 rounded-2xl p-4 mb-6">
        <p className="font-bold text-violet-800 mb-1">대학생이라면 반드시 신청하세요</p>
        <p className="text-sm text-gray-700">국가장학금은 <strong>신청하지 않으면 자동으로 받을 수 없습니다.</strong> 소득 8구간(중위소득 200% 이하)까지 지원 가능하며, 중산층 가정도 받을 수 있습니다.</p>
      </div>

      <AdSlotHorizontal slot="9009000001" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">국가장학금 1유형 — 소득분위별 지원금액</h2>
        <p className="text-sm text-gray-600 mb-3">한국장학재단이 직접 지급하는 장학금입니다. 소득분위가 낮을수록 더 많이 받습니다.</p>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-3 bg-violet-600 text-white text-sm font-bold">
            <div className="p-3">소득구간</div>
            <div className="p-3">가구소득 기준</div>
            <div className="p-3">연간 지원금액</div>
          </div>
          {TYPE1_TABLE.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <div className="p-3 font-bold text-violet-700">{row.tier}</div>
              <div className="p-3 text-gray-600 text-xs">{row.income}</div>
              <div className="p-3 font-bold text-gray-800">{row.amount}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">※ 1~4구간 전액 지원은 국공립대 기준이며, 사립대는 등록금 전액이 상한입니다.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">국가장학금 2유형 — 대학 자체 기준 지원</h2>
        <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700">
          <p className="mb-2">대학이 자체 기준으로 지급하는 장학금으로, 금액과 기준은 학교마다 다릅니다. 국가장학금 1유형 신청 시 자동으로 2유형도 신청됩니다.</p>
          <p className="text-xs text-gray-500">※ 소속 대학 장학처에 2유형 기준을 반드시 확인하세요.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">신청 기간 (학기별)</h2>
        <div className="space-y-2">
          {APPLY_SCHEDULE.map((item, i) => (
            <div key={i} className="flex gap-3 bg-white border border-gray-100 rounded-xl p-3 text-sm items-center">
              <span className="font-bold text-violet-700 w-20 flex-shrink-0">{item.semester}</span>
              <span className="text-gray-700 flex-1">{item.period}</span>
              <span className="text-xs text-gray-400">{item.note}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2">⚠ 1차 신청 기간을 놓쳐도 2차 추가 신청이 가능하지만, 예산 소진 시 지원이 어려울 수 있습니다.</p>
      </section>

      <AdSlotHorizontal slot="9009000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">꼭 알아야 할 주의사항</h2>
        <div className="space-y-3">
          {CAUTIONS.map((item, i) => (
            <div key={i} className="flex gap-3 bg-amber-50 border border-amber-100 rounded-xl p-4">
              <span className="text-amber-500 text-lg flex-shrink-0">⚠</span>
              <div>
                <p className="font-bold text-gray-800 mb-0.5 text-sm">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
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
          <Link href="/guides/youth-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">청년 복지혜택 가이드 →</Link>
          <Link href="/guides/age-30s" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">30대 혜택 총정리</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 한국장학재단 1599-2000 (평일 9~18시)</p>
    </article>
  );
}
