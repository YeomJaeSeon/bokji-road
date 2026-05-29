import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "기초연금 신청 자격과 방법 완벽 가이드 2026 — 소득인정액·감액기준",
  description:
    "2026년 기초연금 수급 자격, 소득인정액 계산 방법, 신청 절차를 단계별로 안내합니다. 국민연금과 동시 수령 가능 여부, 감액 기준도 함께 확인하세요.",
  keywords: [
    "기초연금 신청 방법", "기초연금 자격", "기초연금 소득인정액", "기초연금 수령액",
    "2026 기초연금", "기초연금 감액", "기초연금 신청 서류", "노인 복지 혜택",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/basic-pension-guide" },
  openGraph: {
    title: "기초연금 신청 자격과 방법 완벽 가이드 2026 | 복지로드",
    description: "소득인정액 계산부터 신청 절차까지 한 번에 확인하세요.",
    type: "article",
    locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/basic-pension-guide",
    siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "기초연금 신청 자격과 방법 완벽 가이드 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/basic-pension-guide",
  inLanguage: "ko",
  datePublished: "2026-05-01",
  dateModified: "2026-05-28",
};

export default function BasicPensionGuidePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link>
        <span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link>
        <span>/</span>
        <span className="text-gray-700">기초연금</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-cyan-100 text-cyan-700 px-2.5 py-1 rounded-full">노년</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          기초연금 신청 자격과 방법 완벽 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">소득인정액·감액기준·신청 절차 완전 정리</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 5월 · 읽는 시간 약 5분</p>
      </div>

      <AdSlotHorizontal slot="7002000001" />

      <nav className="bg-gray-50 rounded-2xl p-4 my-6 text-sm">
        <p className="font-bold text-gray-700 mb-2">목차</p>
        <ol className="space-y-1 text-emerald-700">
          <li><a href="#what" className="hover:underline">1. 기초연금이란?</a></li>
          <li><a href="#eligibility" className="hover:underline">2. 수급 자격 조건</a></li>
          <li><a href="#income" className="hover:underline">3. 소득인정액 계산 방법</a></li>
          <li><a href="#amount" className="hover:underline">4. 수령액과 감액 기준</a></li>
          <li><a href="#apply" className="hover:underline">5. 신청 방법</a></li>
          <li><a href="#faq" className="hover:underline">6. 자주 묻는 질문</a></li>
        </ol>
      </nav>

      <section id="what" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">1. 기초연금이란?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          기초연금은 <strong>만 65세 이상 어르신 중 소득과 재산이 일정 기준 이하인 분</strong>께 매월 생활비를 지원하는 제도입니다. 국민연금 납부 이력이 없어도 받을 수 있으며, 대한민국 국적자로 국내에 거주하면 신청 자격이 주어집니다.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          2008년 도입된 기초노령연금이 2014년 기초연금으로 개편되어 지급액이 대폭 확대됐습니다. 현재 약 700만 명이 기초연금을 수령하고 있으며, 전체 65세 이상 노인의 약 70%가 대상입니다.
        </p>
        <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4 text-sm text-cyan-800">
          <strong>2026년 기준 최대 지급액:</strong> 단독 가구 월 349,700원 · 부부 가구 월 559,520원 (각 279,760원)
        </div>
      </section>

      <section id="eligibility" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">2. 수급 자격 조건</h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          {[
            { icon: "🎂", title: "나이", desc: "만 65세 이상" },
            { icon: "🇰🇷", title: "국적·거주", desc: "대한민국 국적 + 국내 거주" },
            { icon: "💵", title: "소득인정액", desc: "단독 247만원 이하 / 부부 395.2만원 이하" },
            { icon: "🏦", title: "금융재산", desc: "금융재산 포함 소득인정액 기준 내" },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-4 flex gap-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-bold text-gray-800 text-sm">{item.title}</p>
                <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm">
          <p className="font-bold text-yellow-800 mb-1">⚠ 수급 제외 대상</p>
          <ul className="text-gray-700 space-y-0.5">
            <li>• 공무원·사학·군인·별정우체국 연금 수령자 및 그 배우자</li>
            <li>• (단, 장애인연금 수령자는 일부 적용 가능)</li>
          </ul>
        </div>
      </section>

      <section id="income" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">3. 소득인정액 계산 방법</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          소득인정액은 <strong>월 소득 평가액</strong>과 <strong>재산의 월 소득 환산액</strong>을 더한 값입니다. 실제 월급과 재산을 그대로 비교하는 것이 아니라 일정한 공식으로 환산합니다.
        </p>
        <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm mb-4">
          <p className="text-center text-gray-800 font-bold">소득인정액 = 월 소득평가액 + 재산의 월 소득환산액</p>
        </div>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="bg-white border border-gray-100 rounded-xl p-4">
            <p className="font-bold text-gray-800 mb-1">월 소득평가액</p>
            <p>근로소득 + 사업소득 + 재산소득 + 공적이전소득 + 무료임차소득</p>
            <p className="text-xs text-gray-500 mt-1">※ 근로소득은 일정 금액 공제 후 70% 산정</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4">
            <p className="font-bold text-gray-800 mb-1">재산의 월 소득환산액</p>
            <p>(일반재산 - 기본재산액 공제 - 부채) × 연 4% ÷ 12개월</p>
            <p className="text-xs text-gray-500 mt-1">※ 기본재산액 공제: 대도시 1억 3,500만원, 중소도시 8,500만원, 농어촌 7,250만원</p>
          </div>
        </div>
        <p className="text-sm text-emerald-600 mt-3">
          👉 <Link href="/calculator" className="underline hover:text-emerald-700">기초연금 계산기로 내 예상 수령액 바로 확인하기</Link>
        </p>
      </section>

      <AdSlotHorizontal slot="7002000002" />

      <section id="amount" className="mb-8 mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">4. 수령액과 감액 기준</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          기초연금 지급액은 소득인정액에 따라 달라집니다. 소득인정액이 선정기준액(단독 247만원)에서 기준연금액(349,700원)을 뺀 금액(약 212만원) 이하이면 기준연금액 전액을 받습니다.
        </p>
        <div className="bg-cyan-50 rounded-xl p-4 text-sm mb-4">
          <p className="font-bold text-cyan-800 mb-2">국민연금 수령자 감액 규정</p>
          <p className="text-gray-700">국민연금(노령연금)을 받는 경우, 국민연금 월 수령액이 기준연금액(349,700원)의 150%(약 524,550원)를 초과하면 기초연금이 일부 감액됩니다. 최대 감액 폭은 기준연금액의 50%까지입니다.</p>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 text-sm">
          <p className="font-bold text-yellow-800 mb-2">부부 감액 규정</p>
          <p className="text-gray-700">부부 모두 기초연금을 받는 경우, 각자 수령액의 20%가 감액됩니다. 단독 최대액 349,700원의 80% = 각 279,760원이 지급됩니다.</p>
        </div>
      </section>

      <section id="apply" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">5. 신청 방법</h2>
        <div className="space-y-3">
          {[
            {
              step: 1,
              title: "신청 장소 선택",
              desc: "① 주소지 읍·면·동 주민센터(행정복지센터) 방문 ② 국민연금공단 지사 방문 ③ 복지로(bokjiro.go.kr) 온라인 신청 중 편한 방법으로 신청할 수 있습니다.",
            },
            {
              step: 2,
              title: "신청 서류 준비",
              desc: "신분증(주민등록증 또는 운전면허증), 통장 사본, 배우자가 있는 경우 배우자 신분증 및 통장 사본. 금융정보 제공 동의서는 방문 시 작성합니다.",
            },
            {
              step: 3,
              title: "신청 및 조사",
              desc: "신청 후 담당자가 소득·재산 등을 조사합니다. 국민건강보험공단, 국세청 등 유관 기관의 전산 자료를 확인하며, 약 30일 이내에 수급 여부를 통보합니다.",
            },
            {
              step: 4,
              title: "수급 결정 및 지급",
              desc: "수급 자격이 인정되면 신청한 달부터 매월 25일(공휴일이면 전일) 지정 계좌로 입금됩니다. 매년 소득·재산 변동을 재조사하여 수급 자격이 유지됩니다.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">{item.step}</div>
              <div>
                <p className="font-bold text-gray-800 mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">6. 자주 묻는 질문</h2>
        <div className="space-y-3">
          {[
            { q: "만 65세 생일 이전에 미리 신청할 수 있나요?", a: "네. 만 65세 생일이 속한 달의 1개월 전부터 신청 가능합니다. 예를 들어 8월 생일이라면 7월부터 신청할 수 있습니다." },
            { q: "기초연금을 받으면 국민연금도 그대로 받을 수 있나요?", a: "두 연금 모두 받을 수 있습니다. 단, 국민연금 수령액이 많으면 기초연금이 일부 감액될 수 있습니다." },
            { q: "자녀 명의의 재산도 소득인정액에 포함되나요?", a: "기초연금의 소득인정액은 본인과 배우자의 소득·재산만 산정합니다. 자녀의 재산은 부양의무자 조사에서 확인하지만, 기초연금에는 부양의무자 기준이 없습니다." },
            { q: "해외에 장기 체류 중인데 신청할 수 있나요?", a: "기초연금은 국내 거주를 요건으로 합니다. 연속 60일 이상 해외 체류 시 해당 기간의 급여는 지급이 중단됩니다." },
          ].map((item) => (
            <details key={item.q} className="bg-gray-50 rounded-xl group">
              <summary className="flex justify-between items-center px-4 py-3 cursor-pointer font-semibold text-gray-800 list-none text-sm">
                Q. {item.q}
                <span className="text-gray-400 group-open:rotate-45 transition-transform text-lg flex-shrink-0 ml-2">+</span>
              </summary>
              <div className="px-4 pb-4 pt-2 text-sm text-gray-600 leading-relaxed border-t border-gray-100">A. {item.a}</div>
            </details>
          ))}
        </div>
      </section>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
        <p className="font-bold text-emerald-800 mb-3">관련 서비스</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/calculator" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">기초연금 계산기 →</Link>
          <Link href="/compare/pension-types" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">기초연금 vs 노령연금 비교</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">본 가이드는 정보 제공 목적으로 작성되었습니다. 정확한 수급 여부는 <a href="tel:129" className="text-emerald-600">☎ 129</a> 또는 주민센터에서 확인하세요.</p>
    </article>
  );
}
