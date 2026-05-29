import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "부모급여·아동수당 신청 가이드 2026 — 0세 100만원·1세 50만원",
  description:
    "2026년 부모급여와 아동수당 지급 금액, 신청 방법, 어린이집 이용 시 차이점을 안내합니다. 출생신고와 동시에 원스톱 신청하는 방법도 확인하세요.",
  keywords: [
    "부모급여 신청", "부모급여 금액", "아동수당 신청", "부모급여 아동수당 차이",
    "어린이집 부모급여", "2026 부모급여", "출산 복지혜택", "영아 수당",
  ],
  alternates: { canonical: "https://bokjiroad.com/guides/parental-allowance-guide" },
  openGraph: {
    title: "부모급여·아동수당 신청 가이드 2026 | 복지로드",
    description: "0세 100만원, 1세 50만원 부모급여 신청 방법과 아동수당까지 한 번에.",
    type: "article", locale: "ko_KR",
    url: "https://bokjiroad.com/guides/parental-allowance-guide", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "부모급여·아동수당 신청 가이드 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokjiroad.com" },
  url: "https://bokjiroad.com/guides/parental-allowance-guide",
  inLanguage: "ko", datePublished: "2026-05-01", dateModified: "2026-05-28",
};

export default function ParentalAllowanceGuidePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">부모급여·아동수당</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-pink-100 text-pink-700 px-2.5 py-1 rounded-full">영아·출산</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          부모급여·아동수당 신청 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">0세 100만원·1세 50만원 + 아동수당 10만원 완벽 정리</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 5월 · 읽는 시간 약 4분</p>
      </div>

      <AdSlotHorizontal slot="7003000001" />

      <nav className="bg-gray-50 rounded-2xl p-4 my-6 text-sm">
        <p className="font-bold text-gray-700 mb-2">목차</p>
        <ol className="space-y-1 text-emerald-700">
          <li><a href="#parental" className="hover:underline">1. 부모급여란?</a></li>
          <li><a href="#amount" className="hover:underline">2. 지급 금액 (가정양육 vs 어린이집)</a></li>
          <li><a href="#child-allowance" className="hover:underline">3. 아동수당이란?</a></li>
          <li><a href="#apply" className="hover:underline">4. 신청 방법</a></li>
          <li><a href="#caution" className="hover:underline">5. 주의사항</a></li>
          <li><a href="#faq" className="hover:underline">6. 자주 묻는 질문</a></li>
        </ol>
      </nav>

      <section id="parental" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">1. 부모급여란?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          부모급여는 <strong>만 0세(생후 0~11개월)와 만 1세(12~23개월) 아동</strong>을 양육하는 모든 가정에 소득·재산 조건 없이 지급하는 현금 또는 바우처 급여입니다. 2023년부터 시행되었으며, 저출산 대응의 핵심 정책으로 매년 지원 금액이 확대되고 있습니다.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          부모급여는 대한민국 국적의 아동이라면 누구나 받을 수 있습니다. 별도의 자격 심사나 소득 조사가 없어 신청만 하면 지급됩니다.
        </p>
        <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 text-sm text-pink-800">
          <strong>핵심 포인트:</strong> 소득·재산 기준 없음 · 모든 가정 해당 · 출생신고 시 바로 신청 가능
        </div>
      </section>

      <section id="amount" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">2. 지급 금액</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {[
            {
              age: "만 0세 (0~11개월)",
              home: "현금 1,000,000원/월",
              nursery: "바우처 500,000원/월",
              color: "bg-pink-50 border-pink-200",
            },
            {
              age: "만 1세 (12~23개월)",
              home: "현금 500,000원/월",
              nursery: "바우처 150,000원/월",
              color: "bg-rose-50 border-rose-200",
            },
          ].map((item) => (
            <div key={item.age} className={`rounded-2xl border p-4 ${item.color}`}>
              <p className="font-bold text-gray-800 mb-3">{item.age}</p>
              <div className="space-y-2 text-sm">
                <div className="bg-white rounded-xl p-3">
                  <p className="text-xs text-gray-500">가정 양육 시 (현금)</p>
                  <p className="font-extrabold text-pink-700">{item.home}</p>
                </div>
                <div className="bg-white rounded-xl p-3">
                  <p className="text-xs text-gray-500">어린이집 이용 시 (바우처)</p>
                  <p className="font-extrabold text-gray-600">{item.nursery}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm">
          <p className="font-bold text-yellow-800 mb-1">어린이집 이용 시 차이점</p>
          <p className="text-gray-700">어린이집을 이용하는 경우 보육료(어린이집 이용 금액)를 바우처 형태로 지원받습니다. 바우처 금액이 실제 보육료보다 적으면 차액을 부모가 부담하며, 바우처 금액이 보육료를 초과하는 경우 초과분은 현금으로 지급됩니다.</p>
        </div>
      </section>

      <section id="child-allowance" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">3. 아동수당이란?</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          아동수당은 <strong>만 8세 미만(0~95개월)의 모든 아동</strong>에게 매월 10만원을 지급하는 별도의 급여입니다. 부모급여와 함께 받을 수 있어 0~1세 아동의 경우 부모급여 + 아동수당을 동시에 수령합니다.
        </p>
        <div className="grid sm:grid-cols-3 gap-3 mb-3">
          {[
            { label: "지급 대상", value: "만 8세 미만" },
            { label: "월 지급액", value: "100,000원" },
            { label: "소득 기준", value: "없음 (전 아동)" },
          ].map((item) => (
            <div key={item.label} className="bg-emerald-50 rounded-xl p-3 text-center">
              <p className="text-xs text-gray-500">{item.label}</p>
              <p className="font-extrabold text-emerald-700 mt-1">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          아동수당은 아동의 보호자(부 또는 모) 계좌로 지급되며, 출생 후 60일 이내에 신청하면 출생월부터 소급 적용됩니다.
        </p>
      </section>

      <AdSlotHorizontal slot="7003000002" />

      <section id="apply" className="mb-8 mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">4. 신청 방법</h2>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4 text-sm">
          <p className="font-bold text-emerald-800 mb-1">✅ 가장 편리한 방법: 행복출산 원스톱 서비스</p>
          <p className="text-gray-700">출생신고 시 주민센터에서 부모급여, 아동수당, 첫만남이용권 등을 한 번에 신청할 수 있습니다. 별도 방문이 필요 없어 가장 추천하는 방법입니다.</p>
        </div>
        <div className="space-y-3">
          {[
            { step: 1, title: "출생신고와 동시 신청 (추천)", desc: "출생신고 시 주민센터에서 행복출산 원스톱 서비스로 부모급여·아동수당·첫만남이용권을 일괄 신청합니다. 출생 후 가능한 빨리 신청하세요." },
            { step: 2, title: "복지로 온라인 신청", desc: "복지로(bokjiro.go.kr) → 복지서비스 신청 → 부모급여/아동수당 검색 후 온라인 신청. 공동 인증서 또는 간편 인증으로 신청 가능합니다." },
            { step: 3, title: "주민센터 방문 신청", desc: "아동의 주소지 읍·면·동 주민센터에서 신청합니다. 신분증, 아동 건강보험증(또는 주민등록등본), 통장 사본을 지참하세요." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">{item.step}</div>
              <div>
                <p className="font-bold text-gray-800 mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="caution" className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">5. 주의사항</h2>
        <div className="space-y-3">
          {[
            { title: "신청 기한: 출생 후 60일 이내 권장", desc: "출생일로부터 60일 이내에 신청하면 출생 월부터 소급 적용됩니다. 60일이 지나면 신청한 달부터만 지급됩니다." },
            { title: "어린이집 이용 변경 시 신고 필수", desc: "가정양육에서 어린이집 이용으로 또는 그 반대로 변경되면 즉시 주민센터에 신고해야 합니다. 미신고 시 중복 지급에 따른 환수 처분이 발생합니다." },
            { title: "국외 체류 중 지급 중단", desc: "아동이 해외에 90일 이상 체류하는 경우 부모급여 지급이 중단됩니다. 귀국 후 재신청이 필요합니다." },
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
            { q: "부모급여와 아동수당을 동시에 받을 수 있나요?", a: "네. 만 0~1세는 부모급여 + 아동수당 10만원을 동시에 받을 수 있습니다. 0세는 가정양육 기준 월 최대 110만원(100만원+10만원)을 수령하게 됩니다." },
            { q: "쌍둥이나 세쌍둥이도 각각 지급받나요?", a: "네. 쌍둥이는 아동 1명당 각각 지급됩니다. 쌍둥이 0세의 경우 두 아동 합산 가정양육 기준 200만원 + 아동수당 20만원 = 220만원을 받을 수 있습니다." },
            { q: "맞벌이 부부 중 누구 계좌로 받나요?", a: "부모 중 1인의 계좌로 신청하며, 신청인이 직접 원하는 보호자의 계좌를 지정합니다. 이후 계좌 변경도 주민센터에서 가능합니다." },
            { q: "아이가 만 2세가 된 이후에도 받는 혜택이 있나요?", a: "만 2세부터는 부모급여는 종료되지만, 만 8세 미만까지 아동수당 월 10만원은 계속 지급됩니다. 또한 가정양육수당, 유아학비·보육료 지원 등 별도 혜택이 있습니다." },
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
          <Link href="/calculator" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">부모급여 계산기 →</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">정확한 지급 조건은 <a href="tel:129" className="text-emerald-600">☎ 129</a> 또는 주민센터에서 확인하세요.</p>
    </article>
  );
}
