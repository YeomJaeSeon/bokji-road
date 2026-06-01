import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "한부모가족 지원 혜택 총정리 2026 — 이혼·사별·미혼모 지원금·주거·양육비",
  description:
    "한부모가족이 받을 수 있는 아동양육비, 주거지원, 교육비, 의료비, 양육비 이행지원까지 2026년 기준으로 총정리. 이혼·사별·미혼모·미혼부 모두 해당.",
  keywords: [
    "한부모가족 지원", "한부모 혜택", "이혼 후 지원금", "미혼모 지원",
    "한부모 아동양육비", "한부모 주거지원", "사별 후 혜택", "한부모가족 신청",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/single-parent" },
  openGraph: {
    title: "한부모가족 지원 혜택 총정리 2026 | 복지로드",
    description: "이혼·사별·미혼모·미혼부 — 한부모가족 지원 한 곳에서 확인하세요.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/single-parent", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "한부모가족 지원 혜택 총정리 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/single-parent",
  inLanguage: "ko", datePublished: "2026-05-01", dateModified: "2026-06-01",
};

const BENEFITS = [
  {
    name: "아동양육비",
    amount: "자녀 1인당 월 21만원",
    target: "한부모가족, 소득인정액 기준 중위소득 63% 이하",
    detail: "만 18세 미만 자녀 1인당 매월 지급. 소득이 낮을수록 추가 지원 있음.",
    icon: "💰",
  },
  {
    name: "청소년 한부모 추가 지원",
    amount: "월 최대 35만원 + 자립촉진수당 10만원",
    target: "만 24세 이하 한부모, 중위소득 72% 이하",
    detail: "어린 나이에 혼자 아이를 키우는 경우 추가 양육비와 자립 지원금 지급.",
    icon: "🌱",
  },
  {
    name: "아이돌봄서비스 우선 지원",
    amount: "정부 지원 90% (소득 기준 따라 차등)",
    target: "한부모가족",
    detail: "어린이집·유치원 외 시간에 아이를 돌봐주는 아이돌보미 파견. 한부모가족은 우선 배정.",
    icon: "🤲",
  },
  {
    name: "한부모가족 주거지원 (LH)",
    amount: "공공임대주택 우선 공급 (시세 30~80%)",
    target: "한부모가족 (소득·자산 기준 충족 시)",
    detail: "LH 국민임대·행복주택 입주 시 우선순위 적용. LH 청약센터 또는 복지로 신청.",
    icon: "🏠",
  },
  {
    name: "교육비 지원",
    amount: "초·중·고 자녀 학비 전액 또는 일부",
    target: "기초수급·차상위 한부모가족",
    detail: "입학금·수업료·학교 급식비 지원. 방과후학교 자유수강권도 포함.",
    icon: "📚",
  },
  {
    name: "의료비 지원",
    amount: "의료급여 1·2종 또는 건강보험료 감면",
    target: "소득 기준 충족 한부모",
    detail: "기초생활수급자 한부모는 의료급여 적용. 차상위계층은 건강보험료 경감 혜택.",
    icon: "🏥",
  },
  {
    name: "양육비 이행지원 서비스",
    amount: "양육비 무료 법률 지원 + 양육비 긴급지원금",
    target: "양육비를 받지 못하는 한부모",
    detail: "상대방이 양육비를 안 줄 때, 양육비이행관리원(1644-6621)에서 법적 조치를 무료로 도와줌. 긴급 양육비 선지급 제도도 있음.",
    icon: "⚖️",
  },
  {
    name: "한부모가족 자립 지원",
    amount: "직업훈련·취업 연계 무료 서비스",
    target: "취업을 원하는 한부모",
    detail: "여성새로일하기센터(여성부), 자활센터(복지부)에서 직업훈련·취업 알선 무료 지원.",
    icon: "💼",
  },
];

export default function SingleParentGuidePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">한부모가족 지원</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-rose-100 text-rose-700 px-2.5 py-1 rounded-full">한부모가족</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          한부모가족 지원 혜택 총정리 2026<br />
          <span className="text-lg font-normal text-gray-500">이혼·사별·미혼모·미혼부가 받을 수 있는 모든 지원</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 5분</p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        혼자서 아이를 키우는 건 경제적으로도, 정서적으로도 정말 힘든 일입니다. 그래서 정부는 한부모가족을 위한 다양한 지원을 마련해두고 있습니다. 이혼, 사별, 미혼모·미혼부 모두 해당됩니다. 단, 신청하지 않으면 받을 수 없습니다.
      </p>

      <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 mb-6 text-sm">
        <p className="font-bold text-rose-800 mb-2">📌 한부모가족 자격 기준</p>
        <ul className="text-gray-700 space-y-1">
          <li>• 만 18세 미만 자녀를 혼자 키우는 부 또는 모</li>
          <li>• 소득인정액이 기준 중위소득 <strong>63% 이하</strong> (아동양육비 기준)</li>
          <li>• 법적 혼인 상태와 무관 — 이혼·사별·미혼 모두 해당</li>
          <li>• <strong>아버지도 해당됩니다</strong> (미혼부, 사별 아버지 포함)</li>
        </ul>
      </div>

      <AdSlotHorizontal slot="A001000001" />

      <div className="mt-6 space-y-4">
        {BENEFITS.map((b) => (
          <div key={b.name} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-2xl flex-shrink-0">{b.icon}</span>
              <div className="flex-1">
                <h2 className="font-bold text-gray-800">{b.name}</h2>
                <p className="text-emerald-700 font-extrabold text-sm mt-0.5">{b.amount}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-1">대상: {b.target}</p>
            <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 rounded-xl p-3">{b.detail}</p>
          </div>
        ))}
      </div>

      <AdSlotHorizontal slot="A001000002" />

      <section className="mt-8 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">신청 방법</h2>
        <div className="space-y-3">
          {[
            { step: 1, title: "주민센터 방문", desc: "주소지 읍·면·동 주민센터에서 '한부모가족 지원' 신청. 혼자 방문해도 됩니다. 담당자가 받을 수 있는 모든 혜택을 함께 확인해줍니다." },
            { step: 2, title: "복지로 온라인 신청", desc: "bokjiro.go.kr → 복지서비스 신청 → '한부모가족' 검색 후 신청." },
            { step: 3, title: "양육비 이행 문제", desc: "상대방이 양육비를 안 줄 때는 양육비이행관리원 ☎ 1644-6621 (무료)로 연락하세요. 법적 조치를 무료로 도와줍니다." },
          ].map((item) => (
            <div key={item.step} className="flex gap-3 bg-white border border-gray-100 rounded-xl p-4">
              <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{item.step}</div>
              <div>
                <p className="font-bold text-gray-800 mb-0.5">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5">
        <p className="font-bold text-rose-800 mb-2">☎ 도움받을 수 있는 곳</p>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• 복지 콜센터: <a href="tel:129" className="text-emerald-600 font-bold">☎ 129</a> (무료)</li>
          <li>• 양육비이행관리원: <a href="tel:16446621" className="text-emerald-600 font-bold">☎ 1644-6621</a></li>
          <li>• 여성긴급전화: <a href="tel:1366" className="text-emerald-600 font-bold">☎ 1366</a> (24시간, 이혼·가정폭력 등)</li>
        </ul>
      </div>
      <p className="text-xs text-gray-400 mt-4">정확한 지원 기준은 주민센터 또는 ☎ 129에서 확인하세요.</p>
    </article>
  );
}
