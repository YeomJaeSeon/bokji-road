import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "기초생활수급자 생계급여 1인 월 713,102원 — 2026 신청자격·방법 총정리",
  description:
    "2026년 기초생활수급자 신청 완벽 안내. 1인 가구 생계급여 월 713,102원·의료비 거의 무료·주거급여 별도 지급. 소득인정액 계산법, 부양의무자 기준, 4대 급여 신청 방법 한 번에.",
  keywords: [
    "기초생활수급자 신청", "기초생활수급 조건", "생계급여 신청", "주거급여 신청",
    "의료급여 신청", "교육급여 신청", "기초생활보장 신청", "2026 기초생활수급",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/basic-living-guide" },
  openGraph: {
    title: "기초생활수급자 신청 방법 완벽 가이드 2026 | 복지로드",
    description: "소득인정액부터 4대 급여 신청까지 한 번에 확인하세요.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/basic-living-guide", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "기초생활수급자 신청 방법 완벽 가이드 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/basic-living-guide",
  inLanguage: "ko", datePublished: "2026-05-01", dateModified: "2026-05-28",
};

export default function BasicLivingGuidePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">기초생활수급자</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">기초생활</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          기초생활수급자 신청 방법 완벽 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">생계·주거·의료·교육급여 4대 급여 한 번에 정리</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 5월 · 읽는 시간 약 6분</p>
      </div>

      <AdSlotHorizontal slot="7005000001" />

      <nav className="bg-gray-50 rounded-2xl p-4 my-6 text-sm">
        <p className="font-bold text-gray-700 mb-2">목차</p>
        <ol className="space-y-1 text-emerald-700">
          <li><a href="#what" className="hover:underline">1. 기초생활보장제도란?</a></li>
          <li><a href="#4benefits" className="hover:underline">2. 4대 급여 설명</a></li>
          <li><a href="#eligibility" className="hover:underline">3. 수급 자격 (소득인정액)</a></li>
          <li><a href="#household" className="hover:underline">4. 부양의무자 기준</a></li>
          <li><a href="#apply" className="hover:underline">5. 신청 방법</a></li>
          <li><a href="#faq" className="hover:underline">6. 자주 묻는 질문</a></li>
        </ol>
      </nav>

      <section id="what" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">1. 기초생활보장제도란?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          기초생활보장제도는 <strong>최저 생활을 보장하고 자립을 지원</strong>하기 위해 생활이 어려운 가구에게 생계·주거·의료·교육 급여를 지원하는 대한민국의 핵심 복지 제도입니다. 국민기초생활보장법에 근거하며, 보건복지부와 각 지방자치단체가 운영합니다.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          2015년 맞춤형 급여 체계로 개편되어 4가지 급여가 각각 다른 선정 기준(기준 중위소득 대비 비율)을 적용합니다. 한 가지 기준을 충족하지 못해도 다른 급여를 받을 수 있는 것이 특징입니다.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
          <strong>중요:</strong> 4개 급여 중 한 가지라도 해당하면 신청 가능합니다. 모두 충족하지 않아도 됩니다.
        </div>
      </section>

      <section id="4benefits" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">2. 4대 급여 설명</h2>
        <div className="space-y-3">
          {[
            {
              name: "생계급여", icon: "🍚", standard: "기준 중위소득 32% 이하",
              amount: "선정기준액에서 소득인정액을 뺀 금액 현금 지급\n(1인 가구 최대 약 713,102원/월)",
              color: "bg-red-50 border-red-200",
            },
            {
              name: "주거급여", icon: "🏠", standard: "기준 중위소득 48% 이하",
              amount: "임차 가구: 지역별 기준임대료 지원\n자가 가구: 주택 수선유지비 지원",
              color: "bg-blue-50 border-blue-200",
            },
            {
              name: "의료급여", icon: "🏥", standard: "기준 중위소득 40% 이하",
              amount: "1종: 입원 0원, 외래 1,000~2,000원\n2종: 입원 10%, 외래 15% 본인 부담",
              color: "bg-emerald-50 border-emerald-200",
            },
            {
              name: "교육급여", icon: "📚", standard: "기준 중위소득 50% 이하",
              amount: "초등 487,000원/연 · 중등 588,000원/연\n고등 554,000원/연 + 교과서비",
              color: "bg-yellow-50 border-yellow-200",
            },
          ].map((item) => (
            <div key={item.name} className={`rounded-xl border p-4 ${item.color}`}>
              <div className="flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-bold text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-500 mb-1">{item.standard}</p>
                  <p className="text-sm text-gray-700 whitespace-pre-line">{item.amount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-emerald-600 mt-3">
          👉 <Link href="/compare/basic-living" className="underline hover:text-emerald-700">4대 급여 상세 비교표 보기</Link>
        </p>
      </section>

      <section id="eligibility" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">3. 수급 자격 — 소득인정액</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          수급 자격은 <strong>소득인정액</strong>이 각 급여별 선정기준액 이하인지로 결정됩니다. 소득인정액은 실제 월 소득에 재산을 환산한 금액을 더한 것입니다.
        </p>
        <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm mb-4 text-center">
          <p className="text-gray-800 font-bold">소득인정액 = 월 소득 + 재산 환산액</p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
          <table className="w-full text-sm">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-3 text-left">가구 수</th>
                <th className="p-3 text-right text-red-300">생계(32%)</th>
                <th className="p-3 text-right text-emerald-300">의료(40%)</th>
                <th className="p-3 text-right text-blue-300">주거(48%)</th>
                <th className="p-3 text-right text-yellow-300">교육(50%)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { size: "1인", p32: "712,000", p40: "891,000", p48: "1,070,000", p50: "1,114,000" },
                { size: "2인", p32: "1,178,000", p40: "1,473,000", p48: "1,768,000", p50: "1,841,000" },
                { size: "3인", p32: "1,509,000", p40: "1,886,000", p48: "2,263,000", p50: "2,357,000" },
                { size: "4인", p32: "1,834,000", p40: "2,292,000", p48: "2,750,000", p50: "2,865,000" },
              ].map((row, i) => (
                <tr key={row.size} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 font-semibold">{row.size} 가구</td>
                  <td className="p-3 text-right text-red-600">{row.p32}</td>
                  <td className="p-3 text-right text-emerald-600">{row.p40}</td>
                  <td className="p-3 text-right text-blue-600">{row.p48}</td>
                  <td className="p-3 text-right text-yellow-600">{row.p50}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">단위: 원/월. 2026년 기준 중위소득 적용. 실제 소득인정액은 공제항목에 따라 다를 수 있습니다.</p>
      </section>

      <AdSlotHorizontal slot="7005000002" />

      <section id="household" className="mb-8 mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">4. 부양의무자 기준</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          과거에는 부양의무자(직계혈족과 그 배우자)의 소득·재산도 수급 자격에 영향을 미쳤습니다. 2022년 이후 대부분 폐지되었지만 일부 예외가 있습니다.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { title: "부양의무자 기준 폐지 급여", items: ["주거급여 (완전 폐지)", "교육급여 (완전 폐지)"], color: "bg-emerald-50 border-emerald-200 text-emerald-800" },
            { title: "부양의무자 기준 일부 적용", items: ["생계급여: 부양의무자 연 소득 1억원 이상 또는 재산 9억원 이상이면 수급 제외", "의료급여: 생계급여와 동일 기준"], color: "bg-yellow-50 border-yellow-200 text-yellow-800" },
          ].map((item) => (
            <div key={item.title} className={`rounded-xl border p-4 ${item.color}`}>
              <p className="font-bold mb-2">{item.title}</p>
              <ul className="text-sm text-gray-700 space-y-1">
                {item.items.map((i) => <li key={i}>• {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="apply" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">5. 신청 방법</h2>
        <div className="space-y-3">
          {[
            { step: 1, title: "신청 장소 선택", desc: "① 주소지 읍·면·동 주민센터(행정복지센터) 방문 ② 복지로(bokjiro.go.kr) 온라인 신청. 4대 급여 모두 한 번에 통합 신청이 가능합니다." },
            { step: 2, title: "필요 서류 준비", desc: "신분증, 금융정보 제공 동의서(현장 작성), 소득 증빙 서류(근로소득 원천징수영수증 등), 재산 증빙 서류(임대차 계약서, 통장 사본 등). 실제 필요 서류는 담당자가 안내합니다." },
            { step: 3, title: "소득·재산 조사", desc: "신청 후 담당 공무원이 가정 방문 또는 관련 기관 전산 조회를 통해 소득·재산을 조사합니다. 조사 기간은 약 30일(연장 시 최대 60일)입니다." },
            { step: 4, title: "수급 결정 및 지급 시작", desc: "소득인정액이 기준 이하이면 각 급여별로 수급 자격이 결정됩니다. 수급 자격 인정 후 신청한 달부터 급여가 지급됩니다. 매년 소득·재산 변동을 재조사합니다." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">{item.step}</div>
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
            { q: "일을 하면 생계급여를 받을 수 없나요?", a: "근로 소득이 있어도 소득인정액이 선정기준액 이하이면 수급 가능합니다. 다만, 근로 소득이 증가하면 그만큼 생계급여 지급액이 줄어드는 구조입니다. 오히려 일하면서 수급 자격을 유지하는 것을 장려하고 있습니다." },
            { q: "자동차가 있으면 수급이 안 되나요?", a: "자동차는 재산으로 산정됩니다. 단, 배기량 1,600cc 미만 또는 차량 가액 200만원 미만인 자동차 1대는 재산 산정에서 제외될 수 있습니다. 장애인 보장구용 자동차도 제외됩니다." },
            { q: "주거급여와 생계급여를 동시에 받을 수 있나요?", a: "네. 소득인정액이 각 급여별 선정기준액 이하이면 모두 동시에 받을 수 있습니다. 4가지 급여 중 해당하는 것을 모두 신청하면 됩니다." },
            { q: "수급자가 되면 어떤 의무가 있나요?", a: "소득·재산 변동, 가구 구성원 변화 발생 시 30일 이내에 신고해야 합니다. 근로 능력이 있는 수급자는 자활 사업에 참여해야 하는 조건부 수급자가 될 수 있습니다." },
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
          <Link href="/compare/basic-living" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">4대 급여 비교표 보기 →</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">정확한 수급 여부는 <a href="tel:129" className="text-emerald-600">☎ 129</a> 또는 주민센터에서 확인하세요.</p>
    </article>
  );
}
