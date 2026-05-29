import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "실업급여 신청 완벽 가이드 2026 — 자격조건·수령액·신청방법",
  description:
    "2026년 실업급여(구직급여) 신청 방법을 단계별로 안내합니다. 자격 조건, 수령액 계산, 신청 서류, 실업 인정 신청까지 완벽 정리. 자발적 퇴직자도 받을 수 있는 경우 포함.",
  keywords: [
    "실업급여 신청 방법", "실업급여 자격", "실업급여 수령액", "구직급여 신청",
    "실업급여 계산", "자발적 퇴직 실업급여", "고용보험 실업급여", "2026 실업급여",
  ],
  alternates: { canonical: "https://bokjiroad.com/guides/unemployment-guide" },
  openGraph: {
    title: "실업급여 신청 완벽 가이드 2026 | 복지로드",
    description: "자격 조건·수령액 계산·신청 단계를 한 번에 확인하세요.",
    type: "article",
    locale: "ko_KR",
    url: "https://bokjiroad.com/guides/unemployment-guide",
    siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "실업급여 신청 완벽 가이드 2026 — 자격조건·수령액·신청방법",
  description: "2026년 실업급여 자격 조건, 수령액 계산, 신청 방법 단계별 안내",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokjiroad.com" },
  url: "https://bokjiroad.com/guides/unemployment-guide",
  inLanguage: "ko",
  datePublished: "2026-05-01",
  dateModified: "2026-05-28",
};

const DURATION_TABLE = [
  { period: "1년 미만", days: "120일" },
  { period: "1년 이상 ~ 3년 미만", days: "150일" },
  { period: "3년 이상 ~ 5년 미만", days: "180일" },
  { period: "5년 이상 ~ 10년 미만", days: "210일" },
  { period: "10년 이상", days: "240일" },
];

export default function UnemploymentGuidePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link>
        <span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link>
        <span>/</span>
        <span className="text-gray-700">실업급여</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">실업·퇴직</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          실업급여 신청 완벽 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">자격조건·수령액 계산·신청방법 한 번에 정리</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 5월 · 읽는 시간 약 5분</p>
      </div>

      <AdSlotHorizontal slot="7001000001" />

      {/* 목차 */}
      <nav className="bg-gray-50 rounded-2xl p-4 my-6 text-sm">
        <p className="font-bold text-gray-700 mb-2">목차</p>
        <ol className="space-y-1 text-emerald-700">
          <li><a href="#what" className="hover:underline">1. 실업급여란?</a></li>
          <li><a href="#eligibility" className="hover:underline">2. 수급 자격 조건</a></li>
          <li><a href="#amount" className="hover:underline">3. 수령액 계산 방법</a></li>
          <li><a href="#how-to-apply" className="hover:underline">4. 신청 방법 (단계별)</a></li>
          <li><a href="#caution" className="hover:underline">5. 주의사항</a></li>
          <li><a href="#faq" className="hover:underline">6. 자주 묻는 질문</a></li>
        </ol>
      </nav>

      <section id="what" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">1. 실업급여란?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          실업급여는 고용보험에 가입된 근로자가 <strong>비자발적으로 이직(퇴직)</strong>한 경우, 재취업을 준비하는 기간 동안 생활을 안정시키기 위해 지급하는 급여입니다. 정확한 법적 명칭은 <strong>구직급여</strong>이며, 고용보험법에 근거하여 고용노동부와 각 지역 고용센터에서 운영합니다.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          단순히 실직자에게 생활비를 주는 것이 아니라, 재취업 활동을 하는 기간 동안만 지급하는 <strong>조건부 급여</strong>입니다. 따라서 수급 기간 동안 주기적으로 고용센터에 구직 활동 내역을 보고해야 합니다.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
          <strong>2026년 기준 지급액:</strong> 이직 전 3개월 평균 임금의 60% (1일 상한 68,100원, 하한 66,240원)
        </div>
      </section>

      <section id="eligibility" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">2. 수급 자격 조건</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          실업급여를 받으려면 다음 <strong>4가지 조건을 모두</strong> 충족해야 합니다.
        </p>
        <div className="space-y-3">
          {[
            {
              num: "①",
              title: "고용보험 가입 기간",
              desc: "이직 전 18개월(초단시간 근로자는 24개월) 이내에 고용보험 피보험 단위기간이 통산 180일 이상이어야 합니다. 여러 직장을 합산할 수 있습니다.",
            },
            {
              num: "②",
              title: "비자발적 이직",
              desc: "권고사직, 계약 만료, 회사 귀책 사유(임금 체불, 직장 내 괴롭힘 등)로 퇴직해야 합니다. 자기 사정으로 인한 사직은 원칙적으로 대상 외입니다.",
            },
            {
              num: "③",
              title: "재취업 활동 의사",
              desc: "적극적으로 재취업하려는 의사가 있어야 하며, 실업 인정 기간마다 구직 활동 내역을 제출해야 합니다.",
            },
            {
              num: "④",
              title: "근로 능력 보유",
              desc: "취업할 능력이 있는 상태여야 합니다. 건강상의 이유로 취업 자체가 불가능한 경우는 질병급여 등 별도 제도를 이용해야 합니다.",
            },
          ].map((item) => (
            <div key={item.num} className="flex gap-3 bg-white border border-gray-100 rounded-xl p-4">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{item.num}</span>
              <div>
                <p className="font-bold text-gray-800 mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="font-bold text-yellow-800 mb-2">⚡ 자발적 퇴직이어도 받을 수 있는 경우</p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• 임금이 2개월 이상 연속 체불된 경우</li>
            <li>• 직장 내 괴롭힘·성희롱 피해를 당한 경우</li>
            <li>• 회사 이전·이사로 왕복 통근 거리가 3시간 이상 증가한 경우</li>
            <li>• 의사 소견에 따라 현재 직무 수행이 건강상 불가한 경우</li>
            <li>• 부양 가족의 질병·부상으로 30일 이상 간호가 필요한 경우</li>
            <li>• 사업장의 도산·폐업이 예정된 경우</li>
          </ul>
        </div>
      </section>

      <section id="amount" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">3. 수령액 계산 방법</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          실업급여(구직급여) 일액은 <strong>이직 전 3개월 평균 임금의 60%</strong>로 계산됩니다. 단, 상한액과 하한액이 있어 그 사이에서 결정됩니다.
        </p>
        <div className="grid sm:grid-cols-3 gap-3 mb-4">
          {[
            { label: "계산 기준", value: "평균 임금 × 60%" },
            { label: "2026년 상한액", value: "1일 68,100원" },
            { label: "2026년 하한액", value: "1일 66,240원" },
          ].map((item) => (
            <div key={item.label} className="bg-blue-50 rounded-xl p-3 text-center">
              <p className="text-xs text-gray-500">{item.label}</p>
              <p className="font-extrabold text-blue-700 mt-1">{item.value}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-700 leading-relaxed mb-3">
          수급 기간은 <strong>고용보험 가입 기간</strong>에 따라 아래와 같이 결정됩니다. 나이에 따른 추가 기간도 있습니다.
        </p>

        <div className="rounded-xl border border-gray-200 overflow-hidden mb-4">
          <div className="grid grid-cols-2 bg-gray-800 text-white text-sm font-bold">
            <div className="p-3">고용보험 가입 기간</div>
            <div className="p-3">수급 기간</div>
          </div>
          {DURATION_TABLE.map((row, i) => (
            <div key={i} className={`grid grid-cols-2 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <div className="p-3 text-gray-700">{row.period}</div>
              <div className="p-3 font-semibold text-blue-700">{row.days}</div>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 rounded-xl p-4 text-sm">
          <p className="font-bold text-emerald-800 mb-1">계산 예시</p>
          <p className="text-gray-700">월급 300만원(하루 평균 임금 100,000원) × 60% = 60,000원 → 하한액인 66,240원 적용</p>
          <p className="text-gray-700 mt-1">월급 500만원(하루 평균 임금 166,667원) × 60% = 100,000원 → 상한액인 68,100원 적용</p>
          <p className="text-xs text-gray-500 mt-1">※ 대부분의 경우 상한액·하한액 범위 내에서 수렴합니다.</p>
        </div>
        <p className="text-sm text-emerald-600 mt-3">
          👉 <Link href="/calculator" className="underline hover:text-emerald-700">실업급여 계산기로 내 예상 수령액 바로 계산해보기</Link>
        </p>
      </section>

      <AdSlotHorizontal slot="7001000002" />

      <section id="how-to-apply" className="mb-8 mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">4. 신청 방법 (단계별)</h2>
        <div className="space-y-4">
          {[
            {
              step: 1,
              title: "워크넷 구직 등록",
              desc: "워크넷(work.go.kr)에 접속하여 구직 신청을 합니다. 이력서와 구직 활동 계획을 작성해야 합니다. 퇴직 직후 바로 등록하는 것이 좋습니다.",
              tip: "온라인으로 24시간 신청 가능",
            },
            {
              step: 2,
              title: "고용센터 수급자격 인정 신청",
              desc: "주소지 관할 고용센터를 직접 방문하거나 고용보험 홈페이지(ei.go.kr)에서 온라인으로 수급자격 인정 신청서를 제출합니다. 신분증, 이직 확인서(전 직장 발급), 통장 사본을 지참합니다.",
              tip: "이직 확인서는 전 직장에 요청해야 합니다",
            },
            {
              step: 3,
              title: "수급자격 인정 및 취업특강 수강",
              desc: "신청 후 7~14일 이내에 수급자격 인정 여부가 결정됩니다. 인정되면 구직급여 수급 전 취업특강(1~2일)을 의무적으로 수강해야 합니다. 온라인 수강도 가능합니다.",
              tip: "취업특강을 마쳐야 급여 지급이 시작됩니다",
            },
            {
              step: 4,
              title: "실업 인정 신청 (2주마다)",
              desc: "수급 기간 동안 1~4주 주기로 고용센터 방문 또는 인터넷·모바일로 실업 인정 신청을 합니다. 각 신청일에 구직 활동 내역(입사 지원, 면접 참석, 직업훈련 수강 등)을 제출해야 합니다.",
              tip: "실업 인정 신청을 빠뜨리면 해당 기간 급여가 지급되지 않습니다",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">
                {item.step}
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.desc}</p>
                <p className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full inline-block">💡 {item.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="caution" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">5. 주의사항</h2>
        <div className="space-y-3">
          {[
            { title: "신청 기한: 퇴직 후 12개월", desc: "퇴직 후 12개월이 지나면 수급 자격이 자동 소멸됩니다. 가능한 빨리 신청하세요." },
            { title: "7일 대기 기간", desc: "수급자격 인정 후 7일간은 급여가 지급되지 않는 대기 기간입니다. 이 기간이 지나야 급여가 시작됩니다." },
            { title: "아르바이트·단기 취업 신고", desc: "수급 기간 중 아르바이트 등 단기 취업을 했다면 고용센터에 즉시 신고해야 합니다. 미신고 시 부정 수급으로 처리될 수 있습니다." },
            { title: "부정 수급 처벌 강화", desc: "취업 중 실업급여를 받거나 허위 구직 활동을 신고하면 수령액 전액 반환 + 최대 5배 추가 징수 + 형사 처벌을 받을 수 있습니다." },
          ].map((item) => (
            <div key={item.title} className="flex gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
              <span className="text-red-500 text-lg flex-shrink-0">⚠</span>
              <div>
                <p className="font-bold text-red-800 mb-0.5">{item.title}</p>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">6. 자주 묻는 질문</h2>
        <div className="space-y-3">
          {[
            {
              q: "계약직·파견직·일용직도 실업급여를 받을 수 있나요?",
              a: "네, 고용보험에 가입된 근로자라면 고용 형태와 무관하게 신청할 수 있습니다. 단, 고용보험 피보험 단위기간 180일 이상 조건을 충족해야 합니다.",
            },
            {
              q: "폐업한 사업장에서 실업급여를 신청하려면?",
              a: "사업주가 이직 확인서를 발급해 줄 수 없는 경우, 고용센터에 직접 사실 확인을 요청할 수 있습니다. 4대보험 가입 내역과 급여 이체 기록 등으로 증빙합니다.",
            },
            {
              q: "실업급여 수급 중 소득이 생기면 어떻게 되나요?",
              a: "수급 중 일한 날에 대해서는 급여가 지급되지 않고 수급 기간이 연장됩니다. 단기·일용 취업은 신고 후 취업일 급여를 포기하는 방식으로 처리됩니다.",
            },
            {
              q: "실업급여를 받으면 국민연금은 어떻게 되나요?",
              a: "실업급여 수급 기간 중에는 국민연금 보험료의 75%를 납부 예외 또는 지역가입자로 전환하거나, 실업 크레딧 제도를 통해 보험료의 75%를 국가가 지원받을 수 있습니다.",
            },
          ].map((item) => (
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

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mt-6">
        <p className="font-bold text-emerald-800 mb-3">관련 서비스</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/calculator" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">
            실업급여 수령액 계산기 →
          </Link>
          <Link href="/benefits/unemployment-benefit" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">
            실업급여 혜택 상세 보기
          </Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
            ← 가이드 목록으로
          </Link>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-6 leading-relaxed">
        본 가이드는 정보 제공 목적으로 작성되었으며, 실제 수급 여부는 고용센터 심사를 통해 결정됩니다.
        정확한 정보는 <a href="https://www.ei.go.kr" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">고용보험 홈페이지(ei.go.kr)</a> 또는
        고용노동부 고객상담센터 ☎ 1350에서 확인하세요.
      </p>
    </article>
  );
}
