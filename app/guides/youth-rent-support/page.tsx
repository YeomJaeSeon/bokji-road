import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "청년 월세 지원 신청 방법 2026 — 월 최대 20만원·자격조건 총정리",
  description:
    "2026년 청년 월세 지원 신청 방법, 자격 조건, 지원 금액을 완벽 안내합니다. 만 19~34세 1인 가구라면 월 최대 20만원 최대 12개월 지원. 주거급여 분리지급·지자체 월세 지원까지 총정리.",
  keywords: [
    "청년 월세 지원", "청년월세지원 신청", "청년 월세 신청방법", "청년월세 자격조건",
    "청년 주거급여 분리지급", "청년 월세 20만원", "청년 1인가구 월세 지원",
    "청년 주거 지원 2026", "청년월세지원 소득기준", "청년 임대료 지원",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/youth-rent-support" },
  openGraph: {
    title: "청년 월세 지원 신청 방법 2026 | 복지로드",
    description: "만 19~34세 1인 가구 월 최대 20만원 월세 지원. 자격·신청 방법 총정리.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/youth-rent-support", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "청년 월세 지원 신청 방법 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/youth-rent-support",
  inLanguage: "ko", datePublished: "2026-06-13", dateModified: "2026-06-13",
};

const PROGRAMS = [
  {
    name: "국토부 청년월세 지원",
    icon: "🏠",
    color: "border-lime-200",
    age: "만 19~34세",
    income: "소득 중위 60% 이하 (1인 가구 기준 약 133만원 이하)",
    amount: "월 최대 20만원 · 최대 12개월 (총 240만원)",
    note: "부모와 별도 거주 필요. 공공임대·사원임대·임대료 무상 주택 제외.",
    apply: "복지로(bokjiro.go.kr) 또는 주민센터 신청",
  },
  {
    name: "주거급여 청년 분리지급",
    icon: "📋",
    color: "border-blue-200",
    age: "만 19~30세 미만 미혼",
    income: "부모가 주거급여 수급자인 경우",
    amount: "지역·가족 수에 따라 다름 (수도권 1인 기준 월 34만원 내외)",
    note: "부모와 다른 시·군에 거주하는 경우 분리지급 가능. 부모 수급 상태 유지 필요.",
    apply: "주민센터 신청",
  },
  {
    name: "지자체별 청년 월세 지원",
    icon: "📍",
    color: "border-emerald-200",
    age: "지자체마다 다름 (보통 만 18~39세)",
    income: "지자체마다 다름",
    amount: "월 10~30만원 (지자체별 상이)",
    note: "서울·경기·부산 등 주요 지자체에서 별도 운영. 국토부 지원과 중복 수령 불가한 경우 많음.",
    apply: "거주 지자체 홈페이지 또는 주민센터",
  },
];

const APPLY_STEPS = [
  { step: 1, title: "자격 확인", desc: "나이(만 19~34세), 소득(중위 60% 이하), 주거 형태(민간임대·보증금 9천만원 이하·월세 70만원 이하)를 확인합니다." },
  { step: 2, title: "복지로 또는 주민센터 신청", desc: "복지로(bokjiro.go.kr) 온라인 신청 또는 주민센터 방문 신청. 신청 시 임대차계약서 사본, 통장 사본, 신분증이 필요합니다." },
  { step: 3, title: "소득·주거 조회", desc: "신청 후 공단에서 소득과 주거 실태를 확인합니다. 허위 신청 시 환수 조치됩니다." },
  { step: 4, title: "월세 입금", desc: "선정되면 매월 월세를 임대인 계좌로 직접 지급하거나 수급자 계좌로 지급합니다. (지자체마다 다름)" },
];

const FAQ = [
  { q: "룸메이트와 함께 사는 경우도 신청할 수 있나요?", a: "주거 형태가 민간임대이고 본인 명의 임대차계약서가 있다면 신청 가능합니다. 다만 공과금 분담 등 실제 거주 사실을 확인하므로 계약서에 본인이 명시되어야 합니다." },
  { q: "전세는 해당이 안 되나요?", a: "월세 지원이므로 전세는 원칙적으로 해당되지 않습니다. 단, 보증금+월세 혼합 계약(반전세)은 월세 부분에 대해 지원받을 수 있습니다." },
  { q: "국토부 지원과 지자체 지원을 동시에 받을 수 있나요?", a: "중복 수령이 원칙적으로 불가한 경우가 많습니다. 지자체마다 다르니 신청 전 해당 지자체에 확인하세요. 금액이 더 큰 쪽을 선택하는 것이 유리합니다." },
  { q: "취업 후 소득이 올라가면 중단되나요?", a: "매년 소득 조사를 하므로 소득이 기준을 초과하면 지원이 중단될 수 있습니다. 소득 변동이 있으면 즉시 신고 의무가 있습니다." },
];

export default function YouthRentSupportPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">청년 월세 지원</span>
      </nav>
      <div className="mb-6">
        <span className="text-xs font-bold bg-lime-100 text-lime-700 px-2.5 py-1 rounded-full">청년 주거</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          청년 월세 지원 신청 방법 완벽 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">월 최대 20만원 · 주거급여 분리지급 · 지자체 지원 총정리</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 5분</p>
      </div>
      <div className="bg-lime-50 border border-lime-200 rounded-2xl p-4 mb-6">
        <p className="font-bold text-lime-800 mb-1">청년 1인 가구라면 꼭 확인하세요</p>
        <p className="text-sm text-gray-700">월세를 내고 있다면 <strong>최대 12개월간 월 20만원</strong>을 받을 수 있습니다. 소득이 낮을수록 우선 지원됩니다.</p>
      </div>

      <AdSlotHorizontal slot="9024000001" />

      <section className="mt-4 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">청년 월세 지원 종류</h2>
        <div className="space-y-4">
          {PROGRAMS.map((p) => (
            <div key={p.name} className={`bg-white border-2 ${p.color} rounded-2xl p-5`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{p.icon}</span>
                <h3 className="font-extrabold text-gray-800 text-base">{p.name}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2"><span className="text-xs font-bold text-gray-500 w-14 flex-shrink-0">나이</span><p className="text-gray-700">{p.age}</p></div>
                <div className="flex gap-2"><span className="text-xs font-bold text-gray-500 w-14 flex-shrink-0">소득</span><p className="text-gray-700">{p.income}</p></div>
                <div className="flex gap-2"><span className="text-xs font-bold text-lime-600 w-14 flex-shrink-0">지원액</span><p className="font-bold text-gray-800">{p.amount}</p></div>
                <div className="flex gap-2"><span className="text-xs font-bold text-gray-500 w-14 flex-shrink-0">신청</span><p className="text-gray-700">{p.apply}</p></div>
                <p className="bg-gray-50 rounded-xl px-3 py-2 text-gray-600 text-xs">💡 {p.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdSlotHorizontal slot="9024000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">신청 절차</h2>
        <div className="space-y-3">
          {APPLY_STEPS.map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-lime-500 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">{item.step}</div>
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
          <Link href="/guides/youth-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">청년 복지 총정리 →</Link>
          <Link href="/guides/housing-benefit" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">주거급여 가이드</Link>
          <Link href="/guides/age-30s" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">30대 혜택 총정리</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 129 복지 콜센터 · 마이홈 1600-1004</p>
    </article>
  );
}
