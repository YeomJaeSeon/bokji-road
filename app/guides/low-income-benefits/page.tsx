import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "생활이 어려울 때 받을 수 있는 정부 지원 총정리 2026 — 저소득층 혜택",
  description:
    "생계급여·주거급여·의료급여·긴급복지지원·에너지바우처·문화누리카드까지 — 생활이 어렵거나 갑자기 어려워졌을 때 정부에서 받을 수 있는 지원을 총정리했습니다.",
  keywords: [
    "생활이 어려울때 지원", "저소득층 지원", "기초생활수급자 혜택",
    "긴급복지지원", "생계급여 신청", "차상위계층 혜택",
    "돈없을때 정부지원", "생활비 지원 신청방법",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/low-income-benefits" },
  openGraph: {
    title: "생활이 어려울 때 받을 수 있는 정부 지원 총정리 | 복지로드",
    description: "갑자기 어려워졌을 때, 저소득층일 때 받을 수 있는 정부 지원 총정리.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/low-income-benefits", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "생활이 어려울 때 받을 수 있는 정부 지원 총정리 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/low-income-benefits",
  inLanguage: "ko", datePublished: "2026-05-01", dateModified: "2026-05-28",
};

export default function LowIncomeBenefitsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">생활이 어려울 때</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">저소득층 지원</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          생활이 어려울 때 받을 수 있는 정부 지원 총정리 2026<br />
          <span className="text-lg font-normal text-gray-500">지금 당장 신청할 수 있는 것부터 확인하세요</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 5월 · 읽는 시간 약 6분</p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        갑자기 실직하거나, 아파서 일을 못 하거나, 이혼·사별 후 혼자 아이를 키우게 됐거나 — 예상치 못한 상황으로 생활이 어려워졌을 때 정부에서 받을 수 있는 지원이 생각보다 많습니다.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>중요한 것은 신청해야만 받을 수 있다는 점입니다.</strong> 아래 상황에 해당한다면 지금 바로 주민센터나 복지로(bokjiro.go.kr)에 신청하세요.
      </p>

      <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6 text-sm">
        <p className="font-bold text-red-800 mb-2">🚨 지금 당장 급한 상황이라면</p>
        <p className="text-gray-700 mb-2">소득·재산 기준을 따지기 전에 <strong>긴급복지지원</strong>을 먼저 신청하세요. 갑작스러운 위기 상황이라면 빠르게 지원받을 수 있습니다.</p>
        <a href="tel:129" className="inline-flex items-center gap-1 bg-red-600 text-white font-bold px-4 py-2 rounded-xl text-sm hover:bg-red-700 transition-colors">
          ☎ 129 복지 콜센터로 지금 전화
        </a>
      </div>

      <AdSlotHorizontal slot="9004000001" />

      <div className="mt-6 space-y-5">

        <section className="bg-white border-2 border-red-200 rounded-2xl p-5">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🚑 긴급복지지원 — 갑자기 어려워졌을 때</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            실직, 사고, 질병, 이혼, 화재 등 갑작스러운 위기로 생계가 곤란해진 경우 소득·재산 조사 없이 <strong>즉시 지원</strong>을 받을 수 있습니다.
          </p>
          <div className="grid sm:grid-cols-2 gap-2 text-sm mb-3">
            {[
              { label: "생계지원", value: "1인 가구 최대 월 162만원" },
              { label: "의료지원", value: "의료비 최대 300만원" },
              { label: "주거지원", value: "임시 거소 제공" },
              { label: "복지시설 이용", value: "사회복지시설 입소" },
            ].map((item) => (
              <div key={item.label} className="bg-red-50 rounded-xl p-3 flex justify-between">
                <span className="text-gray-600">{item.label}</span>
                <span className="font-bold text-red-700">{item.value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500">신청: ☎ 129 / 주민센터 방문 / 복지로 온라인</p>
        </section>

        <section className="bg-white border-2 border-amber-200 rounded-2xl p-5">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🏠 기초생활수급 4대 급여 — 소득이 낮은 경우</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            소득인정액이 기준 중위소득 이하라면 아래 급여를 받을 수 있습니다. 4가지를 동시에 신청 가능합니다.
          </p>
          <div className="space-y-2 text-sm mb-3">
            {[
              { name: "생계급여", std: "중위 32% 이하", amount: "1인 최대 월 713,102원 현금" },
              { name: "주거급여", std: "중위 48% 이하", amount: "임차료·수선비 지원" },
              { name: "의료급여", std: "중위 40% 이하", amount: "병원비 거의 0원" },
              { name: "교육급여", std: "중위 50% 이하", amount: "자녀 학용품비 연 최대 588,000원" },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-3 bg-amber-50 rounded-xl p-3">
                <div className="flex-1">
                  <span className="font-bold text-gray-800">{item.name}</span>
                  <span className="text-xs text-gray-500 ml-2">({item.std})</span>
                </div>
                <span className="text-sm font-bold text-amber-700 text-right">{item.amount}</span>
              </div>
            ))}
          </div>
          <Link href="/guides/basic-living-guide" className="text-sm text-emerald-600 font-bold hover:underline">자세한 신청 방법 보기 →</Link>
        </section>

        <section className="bg-white border-2 border-blue-200 rounded-2xl p-5">
          <h2 className="text-lg font-bold text-gray-800 mb-3">⚡ 차상위계층 추가 혜택</h2>
          <p className="text-sm text-gray-700 mb-3">기초수급자는 아니지만 소득인정액이 중위소득 50% 이하라면 차상위계층으로 다양한 추가 혜택을 받을 수 있습니다.</p>
          <div className="space-y-2 text-sm">
            {[
              { name: "의료비 감면", desc: "외래·입원비 본인 부담 경감" },
              { name: "에너지바우처", desc: "연 최대 254,500원 난방·냉방비" },
              { name: "문화누리카드", desc: "연 13만원 문화·여가 바우처" },
              { name: "교육비 지원", desc: "중·고교 학비 전액 또는 일부 지원" },
              { name: "통신비 감면", desc: "월 최대 26,000원 통신비 할인" },
            ].map((item) => (
              <div key={item.name} className="flex gap-2 items-start">
                <span className="text-blue-500 mt-0.5">•</span>
                <p><strong>{item.name}</strong> — {item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">신청: 주민센터 방문 또는 복지로(bokjiro.go.kr)</p>
        </section>

        <section className="bg-white border-2 border-emerald-200 rounded-2xl p-5">
          <h2 className="text-lg font-bold text-gray-800 mb-3">💼 실직했을 때</h2>
          <div className="space-y-3 text-sm">
            {[
              { name: "실업급여 (구직급여)", desc: "퇴직 전 임금의 60%, 최대 1일 68,100원 × 120~240일", link: "/guides/unemployment-guide" },
              { name: "국민취업지원제도", desc: "취업 어려운 분께 월 50만원 × 최대 6개월 + 취업 상담", link: "/#benefits" },
              { name: "국민내일배움카드", desc: "직업훈련비 최대 500만원 지원", link: "/#benefits" },
            ].map((item) => (
              <div key={item.name} className="flex items-start justify-between gap-3 bg-emerald-50 rounded-xl p-3">
                <div>
                  <p className="font-bold text-gray-800">{item.name}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{item.desc}</p>
                </div>
                <Link href={item.link} className="flex-shrink-0 text-xs text-emerald-600 border border-emerald-300 px-2 py-1 rounded-lg hover:bg-white font-semibold">보기</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white border-2 border-purple-200 rounded-2xl p-5">
          <h2 className="text-lg font-bold text-gray-800 mb-3">🏡 주거비가 부담될 때</h2>
          <div className="space-y-2 text-sm">
            {[
              { name: "주거급여", desc: "임차료 전액 또는 수선비 지원 (중위소득 48% 이하)" },
              { name: "청년 월세 특별지원", desc: "만 19~34세 독립 청년, 월 최대 20만원 × 12개월" },
              { name: "LH 공공임대주택", desc: "시세 30~80% 임대료로 장기 거주 가능" },
              { name: "전세임대주택", desc: "LH가 집주인과 계약 후 저렴하게 재임대" },
            ].map((item) => (
              <div key={item.name} className="flex gap-2 items-start bg-purple-50 rounded-xl p-3">
                <span className="text-purple-500 mt-0.5 flex-shrink-0">•</span>
                <p><strong>{item.name}</strong> — {item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <AdSlotHorizontal slot="9004000002" />

      <section className="mt-8 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">지금 바로 할 수 있는 것</h2>
        <div className="space-y-3 text-sm">
          {[
            { step: 1, title: "129에 전화하기", desc: "복지 콜센터 ☎ 129에 전화하면 내 상황에 맞는 지원을 무료로 안내받을 수 있습니다. 무료 통화, 월~금 9~18시." },
            { step: 2, title: "주민센터 방문", desc: "주소지 읍·면·동 주민센터에 방문해 '복지 상담'을 요청하면 담당 복지사가 받을 수 있는 모든 혜택을 파악해줍니다." },
            { step: 3, title: "복지로에서 온라인 신청", desc: "bokjiro.go.kr에서 회원가입 후 '복지서비스 신청'에서 본인에게 해당하는 급여를 신청합니다." },
          ].map((item) => (
            <div key={item.step} className="flex gap-3 bg-white border border-gray-100 rounded-xl p-4">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{item.step}</div>
              <div>
                <p className="font-bold text-gray-800 mb-0.5">{item.title}</p>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
        <p className="font-bold text-emerald-800 mb-3">관련 서비스</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/guides/basic-living-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">기초생활수급 신청 가이드 →</Link>
          <Link href="/compare/basic-living" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">4대 급여 비교</Link>
          <Link href="/guides/all-benefits-2026" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">정부 지원금 전체 보기</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">모든 지원은 신청해야만 받을 수 있습니다. 자격이 될 것 같으면 일단 신청하세요.</p>
    </article>
  );
}
