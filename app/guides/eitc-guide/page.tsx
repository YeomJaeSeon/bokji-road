import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "근로장려금·자녀장려금 신청 완벽 가이드 2026 — 조건·금액·신청방법",
  description:
    "2026년 근로장려금과 자녀장려금 신청 자격, 지급 금액, 5월 정기신청 방법을 단계별로 안내합니다. 가구 유형별 지급액과 반기신청 방법도 확인하세요.",
  keywords: [
    "근로장려금 신청", "자녀장려금 신청", "근로장려금 조건", "근로장려금 금액",
    "근로장려금 자녀장려금 동시신청", "2026 근로장려금", "홈택스 장려금 신청", "손택스",
  ],
  alternates: { canonical: "https://bokjiroad.com/guides/eitc-guide" },
  openGraph: {
    title: "근로장려금·자녀장려금 신청 완벽 가이드 2026 | 복지로드",
    description: "가구 유형별 지급액부터 5월 홈택스 신청까지 한 번에.",
    type: "article", locale: "ko_KR",
    url: "https://bokjiroad.com/guides/eitc-guide", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "근로장려금·자녀장려금 신청 완벽 가이드 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokjiroad.com" },
  url: "https://bokjiroad.com/guides/eitc-guide",
  inLanguage: "ko", datePublished: "2026-05-01", dateModified: "2026-05-28",
};

const EITC_TABLE = [
  { type: "단독 가구", max: "165만원", income: "2,200만원", desc: "혼자 사는 가구" },
  { type: "홑벌이 가구", max: "285만원", income: "3,200만원", desc: "배우자 소득 300만원 미만" },
  { type: "맞벌이 가구", max: "330만원", income: "3,800만원", desc: "부부 모두 소득 있음" },
];

export default function EITCGuidePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">근로·자녀장려금</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">근로·사업소득</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          근로장려금·자녀장려금 신청 완벽 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">조건·금액·신청 방법·반기신청까지 한 번에</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 5월 · 읽는 시간 약 5분</p>
      </div>

      <AdSlotHorizontal slot="7004000001" />

      <nav className="bg-gray-50 rounded-2xl p-4 my-6 text-sm">
        <p className="font-bold text-gray-700 mb-2">목차</p>
        <ol className="space-y-1 text-emerald-700">
          <li><a href="#what" className="hover:underline">1. 근로장려금이란?</a></li>
          <li><a href="#eligibility" className="hover:underline">2. 신청 자격 조건</a></li>
          <li><a href="#amount" className="hover:underline">3. 지급 금액</a></li>
          <li><a href="#child-grant" className="hover:underline">4. 자녀장려금</a></li>
          <li><a href="#apply" className="hover:underline">5. 신청 방법</a></li>
          <li><a href="#caution" className="hover:underline">6. 주의사항</a></li>
        </ol>
      </nav>

      <section id="what" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">1. 근로장려금이란?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          근로장려금(EITC: Earned Income Tax Credit)은 <strong>일하는 저소득 가구</strong>에게 정부가 직접 현금을 지원하는 제도입니다. 세금을 환급해주는 방식으로 운영되며, 납부한 세금이 없어도 받을 수 있는 것이 특징입니다. 근로 의욕을 높이고 빈곤을 탈출할 수 있도록 돕는 소득 지원 제도입니다.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          2009년 도입 이후 지속적으로 지원 대상과 금액이 확대되었으며, 2026년 현재 약 500만 가구가 혜택을 받고 있습니다. 국세청 홈택스(hometax.go.kr) 또는 손택스 앱으로 간편하게 신청할 수 있습니다.
        </p>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-800">
          <strong>핵심:</strong> 세금을 납부하지 않아도 받을 수 있는 세금 환급형 지원금
        </div>
      </section>

      <section id="eligibility" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">2. 신청 자격 조건</h2>
        <p className="text-gray-700 leading-relaxed mb-3">근로장려금은 <strong>소득 기준, 재산 기준, 소득 유형</strong> 세 가지 조건을 모두 충족해야 합니다.</p>
        <div className="space-y-3">
          <div className="bg-white border border-gray-100 rounded-xl p-4">
            <p className="font-bold text-gray-800 mb-2">① 소득 기준 (가구 유형별 다름)</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="p-2 text-left">가구 유형</th>
                    <th className="p-2 text-right">최대 지급액</th>
                    <th className="p-2 text-right">소득 상한</th>
                  </tr>
                </thead>
                <tbody>
                  {EITC_TABLE.map((row, i) => (
                    <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-2">
                        <p className="font-semibold">{row.type}</p>
                        <p className="text-xs text-gray-500">{row.desc}</p>
                      </td>
                      <td className="p-2 text-right font-bold text-emerald-700">{row.max}</td>
                      <td className="p-2 text-right text-gray-600">{row.income}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4">
            <p className="font-bold text-gray-800 mb-1">② 재산 기준</p>
            <p className="text-sm text-gray-700">가구원 전체의 재산 합계액이 <strong>2억 4,000만원 미만</strong>이어야 합니다. 재산은 토지·건물·자동차·금융재산·부채 등을 포함합니다.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4">
            <p className="font-bold text-gray-800 mb-1">③ 소득 유형</p>
            <p className="text-sm text-gray-700">근로소득, 사업소득(음식·도소매 업종), 종교인 소득이 있는 가구가 해당됩니다. 금융소득이 2,000만원을 초과하는 경우 대상에서 제외됩니다.</p>
          </div>
        </div>
      </section>

      <section id="amount" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">3. 지급 금액</h2>
        <p className="text-gray-700 leading-relaxed mb-3">지급 금액은 소득 구간에 따라 <strong>점증 → 점액 → 점감</strong> 3단계로 계산됩니다. 소득이 너무 낮거나 너무 높으면 지급액이 줄어들고, 특정 구간에서 최대 금액이 지급됩니다.</p>
        <p className="text-sm text-emerald-600 mb-3">
          👉 <Link href="/calculator" className="underline hover:text-emerald-700">근로장려금 계산기로 내 예상 수령액 계산하기</Link>
        </p>
        <div className="bg-emerald-50 rounded-xl p-4 text-sm text-gray-700">
          <p className="font-bold text-emerald-800 mb-2">지급 시기</p>
          <ul className="space-y-1">
            <li>• <strong>정기신청 (5월):</strong> 신청 후 9월에 전년도 소득 기준으로 지급</li>
            <li>• <strong>반기신청 (3월/9월):</strong> 당해연도 상·하반기 소득 기준으로 각각 6월·12월 지급. 정기신청 금액의 35%씩 먼저 지급</li>
          </ul>
        </div>
      </section>

      <section id="child-grant" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">4. 자녀장려금</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          자녀장려금은 근로장려금과 별도로, <strong>만 18세 미만 부양자녀가 있는 저소득 가구</strong>에게 자녀 1명당 최대 100만원을 지급하는 제도입니다. 근로장려금과 동일한 신청 절차로 함께 신청할 수 있습니다.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="bg-white border border-gray-100 rounded-xl p-4">
            <p className="font-bold text-gray-800 mb-1">홑벌이 가구</p>
            <p className="text-sm text-gray-700">연 소득 4,000만원 미만 · 자녀 1명당 최대 100만원</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4">
            <p className="font-bold text-gray-800 mb-1">맞벌이 가구</p>
            <p className="text-sm text-gray-700">연 소득 4,300만원 미만 · 자녀 1명당 최대 100만원</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">※ 단독가구는 자녀장려금 해당 없음</p>
      </section>

      <AdSlotHorizontal slot="7004000002" />

      <section id="apply" className="mb-8 mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">5. 신청 방법</h2>
        <div className="space-y-3">
          {[
            { step: 1, title: "홈택스 또는 손택스로 신청 (추천)", desc: "국세청 홈택스(hometax.go.kr) 접속 → 로그인(공동인증서·간편인증) → 신청/제출 → 근로·자녀장려금 신청. 모바일은 손택스 앱에서 동일하게 신청 가능합니다." },
            { step: 2, title: "ARS 전화 신청", desc: "국세청 ARS ☎ 1544-9944로 전화하여 자동 응답으로 신청할 수 있습니다. 본인 인증 후 안내에 따라 신청합니다." },
            { step: 3, title: "세무서 방문 신청", desc: "주소지 관할 세무서를 방문하여 신청서를 작성·제출할 수 있습니다. 신분증을 지참하세요." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">{item.step}</div>
              <div>
                <p className="font-bold text-gray-800 mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-blue-50 rounded-xl p-4 text-sm text-blue-800">
          <p className="font-bold mb-1">📅 2026년 신청 기간</p>
          <ul className="space-y-0.5 text-gray-700">
            <li>• 정기신청: 2026년 5월 1일 ~ 5월 31일 (9월 지급)</li>
            <li>• 반기신청(상반기): 2026년 9월 1일 ~ 9월 15일 (12월 지급)</li>
            <li>• 기한 후 신청: 6월~11월 (지급액 10% 감액)</li>
          </ul>
        </div>
      </section>

      <section id="caution" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">6. 주의사항</h2>
        <div className="space-y-3">
          {[
            { title: "소득과 재산은 전년도 기준", desc: "2026년 5월 신청은 2025년 소득을 기준으로 합니다. 올해 소득이 줄었더라도 작년 소득으로 지급 여부가 결정됩니다." },
            { title: "부채는 재산 차감 불가", desc: "재산 2억 4,000만원 기준에서 부채는 차감되지 않습니다. 부채가 많더라도 보유 재산 총액이 기준을 초과하면 제외됩니다." },
            { title: "중복 수급 제한", desc: "근로장려금과 자녀장려금은 동시 신청 가능하지만, 가구원 중 1인만 신청해야 합니다. 부부가 각각 신청하면 안 됩니다." },
          ].map((item) => (
            <div key={item.title} className="flex gap-3 bg-yellow-50 border border-yellow-100 rounded-xl p-4">
              <span className="text-yellow-500 text-lg flex-shrink-0">⚠</span>
              <div>
                <p className="font-bold text-yellow-800 mb-0.5">{item.title}</p>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
        <p className="font-bold text-emerald-800 mb-3">관련 서비스</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/calculator" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">근로·자녀장려금 계산기 →</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">정확한 지급액은 <a href="https://www.hometax.go.kr" target="_blank" rel="noopener noreferrer" className="text-emerald-600">홈택스(hometax.go.kr)</a> 또는 국세상담센터 ☎ 126에서 확인하세요.</p>
    </article>
  );
}
