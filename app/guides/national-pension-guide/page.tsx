import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "국민연금 완벽 가이드 2026 — 예상수령액·조기수령·연기·추납 총정리",
  description:
    "2026년 국민연금 예상 수령액 확인 방법, 조기수령 조건과 감액 비율, 연기연금 혜택, 추납 제도까지 완벽 안내합니다. 노후를 위해 지금 반드시 확인하세요.",
  keywords: [
    "국민연금 예상수령액", "국민연금 조기수령", "국민연금 연기연금", "국민연금 추납",
    "국민연금 수령나이", "국민연금 수령액 계산", "국민연금 임의가입", "국민연금 2026",
    "국민연금 반환일시금", "국민연금 크레딧",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/national-pension-guide" },
  openGraph: {
    title: "국민연금 완벽 가이드 2026 | 복지로드",
    description: "예상수령액 확인부터 조기수령·연기·추납까지 총정리.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/national-pension-guide", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "국민연금 완벽 가이드 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/national-pension-guide",
  inLanguage: "ko", datePublished: "2026-06-09", dateModified: "2026-06-09",
};

const RECEIVE_AGE = [
  { birthYear: "1952년 이전", age: "만 60세" },
  { birthYear: "1953~1956년", age: "만 61세" },
  { birthYear: "1957~1960년", age: "만 62세" },
  { birthYear: "1961~1964년", age: "만 63세" },
  { birthYear: "1965~1968년", age: "만 64세" },
  { birthYear: "1969년 이후", age: "만 65세" },
];

const EARLY_TABLE = [
  { years: "5년 일찍 (만 60세)", reduction: "30% 감액" },
  { years: "4년 일찍 (만 61세)", reduction: "24% 감액" },
  { years: "3년 일찍 (만 62세)", reduction: "18% 감액" },
  { years: "2년 일찍 (만 63세)", reduction: "12% 감액" },
  { years: "1년 일찍 (만 64세)", reduction: "6% 감액" },
];

const CREDITS = [
  { name: "출산 크레딧", desc: "2자녀 이상 시 추가 가입 기간 인정. 2자녀 12개월, 3자녀 30개월, 4자녀 48개월, 5자녀 이상 50개월" },
  { name: "군복무 크레딧", desc: "2008년 이후 입대자, 6개월 추가 가입 기간 인정" },
  { name: "실업 크레딧", desc: "실업급여 수급자, 보험료 75% 국가 지원 (최대 12개월)" },
];

const FAQ = [
  { q: "예상 수령액은 어디서 확인하나요?", a: "국민연금공단 홈페이지(nps.or.kr) 또는 모바일 앱 '내 곁에 국민연금'에서 로그인 후 확인할 수 있습니다. 실시간으로 납입 기간과 예상 수령액을 볼 수 있습니다." },
  { q: "10년을 못 채웠으면 어떻게 되나요?", a: "최소 가입 기간(10년, 120개월)을 채우지 못하면 노령연금을 받을 수 없습니다. 이 경우 만 60세에 그동안 낸 보험료에 이자를 더한 '반환일시금'을 받거나, 추납을 통해 기간을 채울 수 있습니다." },
  { q: "전업주부도 국민연금을 낼 수 있나요?", a: "네, 임의가입 제도를 통해 전업주부(피부양자)도 국민연금에 가입할 수 있습니다. 최소 월 9만원부터 납입 가능하며, 노후 연금 수령에 유리합니다." },
  { q: "연기연금을 신청하면 얼마나 더 받나요?", a: "연금 수령 개시를 1년 늦출 때마다 연금액이 7.2% 증가합니다. 최대 5년(만 70세)까지 연기 가능하며, 최대 36% 증가합니다." },
];

export default function NationalPensionGuidePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">국민연금</span>
      </nav>
      <div className="mb-6">
        <span className="text-xs font-bold bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full">국민연금</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          국민연금 완벽 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">예상수령액·조기수령·연기·추납 한 번에 정리</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 6분</p>
      </div>
      <p className="text-gray-700 leading-relaxed mb-6">국민연금은 매달 내는 보험료만큼 노후에 평생 연금으로 돌려받는 제도입니다. <strong>언제 받기 시작하느냐</strong>에 따라 수령액이 최대 36% 달라지고, 추납·임의가입으로 기간을 늘릴 수도 있습니다. 지금 내 상황을 정확히 파악하는 것이 중요합니다.</p>

      <AdSlotHorizontal slot="9016000001" />

      <section className="mt-4 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">출생연도별 수령 개시 나이</h2>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-2 bg-indigo-600 text-white text-sm font-bold">
            <div className="p-3">출생연도</div><div className="p-3">노령연금 수령 나이</div>
          </div>
          {RECEIVE_AGE.map((row, i) => (
            <div key={i} className={`grid grid-cols-2 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <div className="p-3 text-gray-700">{row.birthYear}</div>
              <div className="p-3 font-bold text-indigo-700">{row.age}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-2">조기수령 — 일찍 받으면 얼마나 줄어드나</h2>
        <p className="text-sm text-gray-600 mb-3">소득이 없거나 적을 때 조기수령을 신청할 수 있습니다. 단, 평생 감액된 금액을 받게 됩니다.</p>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-2 bg-red-500 text-white text-sm font-bold">
            <div className="p-3">조기수령 시기</div><div className="p-3">감액 비율</div>
          </div>
          {EARLY_TABLE.map((row, i) => (
            <div key={i} className={`grid grid-cols-2 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <div className="p-3 text-gray-700">{row.years}</div>
              <div className="p-3 font-bold text-red-600">{row.reduction}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 bg-indigo-50 rounded-xl p-3 text-sm text-indigo-800">
          💡 반대로 <strong>연기연금</strong>을 선택하면 1년 연기당 7.2% 증가, 최대 5년 연기 시 36% 증가합니다.
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">국민연금 크레딧 — 이런 기간도 인정됩니다</h2>
        <div className="space-y-3">
          {CREDITS.map((c) => (
            <div key={c.name} className="bg-white border border-indigo-100 rounded-xl p-4">
              <p className="font-bold text-indigo-700 mb-1 text-sm">{c.name}</p>
              <p className="text-sm text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlotHorizontal slot="9016000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">추납 제도 — 과거 미납 기간 채우기</h2>
        <div className="bg-white border-2 border-indigo-200 rounded-2xl p-5 text-sm">
          <p className="text-gray-700 leading-relaxed mb-3">직장을 그만두거나 납부 예외 기간이 있다면 <strong>추납(추후납부)</strong>으로 해당 기간을 소급해서 납입할 수 있습니다. 추납 1개월당 노령연금이 약 5,000~10,000원 증가합니다.</p>
          <div className="space-y-2">
            <p className="flex gap-2"><span className="text-emerald-500">✓</span>신청처: 국민연금공단(1355) 또는 지사 방문</p>
            <p className="flex gap-2"><span className="text-emerald-500">✓</span>납입 방법: 일시납 또는 분할납 선택 가능</p>
            <p className="flex gap-2"><span className="text-emerald-500">✓</span>대상: 가입 이력이 있는 자 중 납부 예외·적용제외 기간이 있는 경우</p>
          </div>
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
          <Link href="/guides/basic-pension-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">기초연금 신청 가이드 →</Link>
          <Link href="/guides/age-40s-50s" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">40~50대 혜택 총정리</Link>
          <Link href="/guides/age-60s-plus" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">60대 이상 혜택</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 국민연금공단 1355 (평일 9~18시)</p>
    </article>
  );
}
