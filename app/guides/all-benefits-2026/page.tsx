import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "2026 정부에서 받을 수 있는 돈 총정리 — 현금·바우처·감면 혜택 모두",
  description:
    "2026년 정부에서 받을 수 있는 현금·바우처·의료비 감면 혜택을 한 곳에 총정리했습니다. 나이·가구 유형·소득별로 받을 수 있는 돈을 빠짐없이 확인하세요.",
  keywords: [
    "정부에서 받을 수 있는 돈", "정부 지원금 종류", "받을 수 있는 복지혜택",
    "2026 정부 지원금 총정리", "국가 보조금 종류", "복지 수당 종류",
    "생활비 지원 정부", "저소득 지원금",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/all-benefits-2026" },
  openGraph: {
    title: "2026 정부에서 받을 수 있는 돈 총정리 | 복지로드",
    description: "현금·바우처·감면 혜택까지, 빠짐없이 한 곳에서 확인하세요.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/all-benefits-2026", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "2026 정부에서 받을 수 있는 돈 총정리",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/all-benefits-2026",
  inLanguage: "ko", datePublished: "2026-05-01", dateModified: "2026-05-28",
};

const CATEGORIES = [
  {
    title: "아이·출산 관련",
    icon: "👶",
    color: "bg-pink-50 border-pink-200",
    items: [
      { name: "부모급여", amount: "0세 월 100만원 / 1세 월 50만원", target: "0~23개월 아동 가정 전체" },
      { name: "아동수당", amount: "월 10만원", target: "만 8세 미만 아동 전체" },
      { name: "첫만남이용권", amount: "첫째 200만원 / 둘째 이상 300만원 (바우처)", target: "출생 아동 전체" },
      { name: "임신·출산 진료비 바우처", amount: "단태아 100만원 / 다태아 140만원", target: "임산부 전체" },
      { name: "산후조리 비용 지원", amount: "최대 100만원 (소득 기준)", target: "출산 가정 (소득 기준)" },
      { name: "가정양육수당", amount: "만 2~7세 월 10~20만원", target: "어린이집 미이용 가정" },
    ],
  },
  {
    title: "노인·은퇴 관련",
    icon: "👴",
    color: "bg-cyan-50 border-cyan-200",
    items: [
      { name: "기초연금", amount: "단독 최대 월 349,700원 / 부부 최대 559,520원", target: "만 65세 이상, 소득하위 70%" },
      { name: "노인 일자리·사회활동 지원", amount: "월 27~83만원", target: "만 60~65세 이상" },
      { name: "노인 돌봄서비스", amount: "방문요양·주간보호 등 무료~일부 부담", target: "장기요양 등급 인정자" },
      { name: "노인 의료비 감면", amount: "외래 진료비 30~60% 감면", target: "건강보험 노인" },
      { name: "에너지바우처 (난방비)", amount: "연 최대 25만원", target: "65세 이상 기초수급자·차상위" },
    ],
  },
  {
    title: "저소득·기초생활 관련",
    icon: "🏠",
    color: "bg-amber-50 border-amber-200",
    items: [
      { name: "생계급여", amount: "1인 가구 최대 월 713,102원", target: "기준 중위소득 32% 이하" },
      { name: "주거급여", amount: "지역별 기준임대료 전액 지원", target: "기준 중위소득 48% 이하" },
      { name: "의료급여", amount: "병원비 거의 0원 (1종) 또는 10% (2종)", target: "기준 중위소득 40% 이하" },
      { name: "교육급여", amount: "초등 487,000원 / 중등 588,000원 / 고등 554,000원/연", target: "기준 중위소득 50% 이하" },
      { name: "긴급복지지원", amount: "생계 최대 월 162만원 / 의료 최대 300만원", target: "갑자기 어려워진 가구" },
      { name: "문화누리카드", amount: "연 13만원 (문화·여가 바우처)", target: "기초수급자·차상위계층" },
    ],
  },
  {
    title: "청년·취업 관련",
    icon: "🧑",
    color: "bg-lime-50 border-lime-200",
    items: [
      { name: "청년 월세 특별지원", amount: "월 최대 20만원 × 12개월", target: "만 19~34세 독립 거주 청년" },
      { name: "근로장려금", amount: "연 최대 165~330만원", target: "연소득 2,200~3,800만원 미만 근로자" },
      { name: "자녀장려금", amount: "자녀 1인당 최대 100만원", target: "부양자녀 있는 저소득 가구" },
      { name: "청년도약계좌", amount: "5년 만기 최대 5,000만원", target: "만 19~34세, 소득 7,500만원 이하" },
      { name: "국민취업지원제도", amount: "구직촉진수당 월 50만원 × 최대 6개월", target: "취업 취약계층 구직자" },
      { name: "실업급여", amount: "퇴직 전 임금의 60%, 최대 1일 68,100원", target: "고용보험 가입 비자발적 퇴직자" },
    ],
  },
  {
    title: "장애인 관련",
    icon: "♿",
    color: "bg-purple-50 border-purple-200",
    items: [
      { name: "장애인연금", amount: "기초급여 최대 월 334,810원 + 부가급여", target: "만 18세 이상 중증장애인, 저소득" },
      { name: "장애수당", amount: "월 4~6만원", target: "경증장애인, 기초수급자·차상위" },
      { name: "장애아동수당", amount: "월 9~22만원", target: "만 18세 미만 장애 아동" },
      { name: "장애인 의료비 지원", amount: "의료급여 1·2종, 본인부담 대폭 감면", target: "등록 장애인" },
      { name: "발달재활서비스 바우처", amount: "월 22~25만원", target: "만 18세 미만 장애 아동" },
    ],
  },
  {
    title: "한부모·다문화 가정",
    icon: "👩‍👦",
    color: "bg-rose-50 border-rose-200",
    items: [
      { name: "한부모가족 아동양육비", amount: "자녀 1인당 월 21만원", target: "한부모가족, 소득 기준 이하" },
      { name: "한부모가족 청소년 한부모 지원", amount: "월 최대 35만원 + 자립촉진수당", target: "만 24세 이하 한부모" },
      { name: "한부모가족 주거지원", amount: "공공임대주택 우선 공급", target: "한부모가족" },
    ],
  },
];

export default function AllBenefits2026Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">정부 지원금 총정리</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">종합 정리</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          2026 정부에서 받을 수 있는 돈 총정리<br />
          <span className="text-lg font-normal text-gray-500">현금·바우처·의료비 감면 혜택 빠짐없이</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 5월 · 읽는 시간 약 8분</p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        대한민국 정부는 생애주기별·상황별로 다양한 현금 급여, 바우처, 의료비 감면 혜택을 지원합니다. 문제는 이 혜택들이 여러 부처에 흩어져 있어 어디서 무엇을 받을 수 있는지 한눈에 보기가 어렵다는 점입니다. 이 페이지에서는 <strong>2026년 기준 대한민국 국민이 정부로부터 받을 수 있는 주요 현금성 혜택</strong>을 분야별로 총정리했습니다.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        본인의 상황에 맞는 혜택을 찾아 꼭 신청하세요. 모르면 못 받습니다.
      </p>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6 text-sm">
        <p className="font-bold text-emerald-800 mb-2">💡 핵심 원칙</p>
        <ul className="text-gray-700 space-y-1">
          <li>• 복지혜택은 <strong>신청해야만</strong> 받습니다. 자동 지급되지 않습니다.</li>
          <li>• 여러 혜택을 동시에 받을 수 있는 경우가 많습니다.</li>
          <li>• 소득·재산 기준은 매년 바뀌므로, 탈락했어도 매년 다시 신청해 보세요.</li>
        </ul>
      </div>

      <AdSlotHorizontal slot="9001000001" />

      <div className="mt-6 space-y-8">
        {CATEGORIES.map((cat) => (
          <section key={cat.title} className={`rounded-2xl border p-5 ${cat.color}`}>
            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
              <span className="text-2xl">{cat.icon}</span>{cat.title}
            </h2>
            <div className="space-y-3">
              {cat.items.map((item) => (
                <div key={item.name} className="bg-white rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-2">
                  <div className="flex-1">
                    <p className="font-bold text-gray-800">{item.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">대상: {item.target}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-sm font-extrabold text-emerald-700">{item.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <AdSlotHorizontal slot="9001000002" />

      <section className="mt-8 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">신청은 어디서?</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            { icon: "🌐", title: "복지로 (bokjiro.go.kr)", desc: "기초연금·생계급여·부모급여 등 대부분의 복지부 급여 온라인 신청" },
            { icon: "🏢", title: "주민센터 방문", desc: "모든 급여 신청 가능. 담당자가 직접 안내해드립니다." },
            { icon: "💼", title: "고용보험 (ei.go.kr)", desc: "실업급여·육아휴직급여·국민취업지원제도 신청" },
            { icon: "💰", title: "홈택스 (hometax.go.kr)", desc: "근로장려금·자녀장려금 신청 (매년 5월)" },
            { icon: "☎", title: "129 복지 콜센터", desc: "어떤 혜택을 받을 수 있는지 무료 전화 상담 (월~금 9~18시)" },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-4 flex gap-3">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="font-bold text-gray-800">{item.title}</p>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mb-6">
        <p className="font-bold text-emerald-800 mb-3">내 맞춤 혜택 찾기</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">맞춤 혜택 분석하기 →</Link>
          <Link href="/guides/low-income-benefits" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">저소득층 혜택 보기</Link>
          <Link href="/guides/elderly-benefits" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">노인 혜택 보기</Link>
          <Link href="/guides/baby-money" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">출산·육아 혜택 보기</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400">정확한 수급 여부는 <a href="tel:129" className="text-emerald-600">☎ 129</a> 또는 주민센터에서 확인하세요.</p>
    </article>
  );
}
