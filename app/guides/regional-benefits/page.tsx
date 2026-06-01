import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "지역별 추가 복지혜택 2026 — 서울·경기·부산·인천·대구 지자체 지원",
  description:
    "중앙정부 혜택 외에 서울시 희망두배 청년통장, 경기도 청년 기본소득, 부산시 청년 드림카드 등 지역별 추가 복지혜택을 정리했습니다.",
  keywords: [
    "지역별 복지혜택", "서울시 복지혜택", "경기도 복지혜택", "지자체 복지",
    "서울 청년 지원금", "경기 청년 기본소득", "지방자치단체 복지",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/regional-benefits" },
  openGraph: {
    title: "지역별 추가 복지혜택 2026 | 복지로드",
    description: "내가 사는 지역에서만 받을 수 있는 추가 혜택을 확인하세요.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/regional-benefits", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "지역별 추가 복지혜택 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/regional-benefits",
  inLanguage: "ko", datePublished: "2026-05-01", dateModified: "2026-06-01",
};

const REGIONS = [
  {
    region: "서울특별시",
    icon: "🏙️",
    color: "bg-blue-50 border-blue-200",
    site: "복지포털 서울 (welfare.seoul.go.kr)",
    items: [
      { name: "서울시 청년수당", target: "만 19~34세 미취업 청년, 서울 거주", amount: "월 50만원 × 최대 6개월", note: "매년 상반기 선발. 취업 준비 활동에 사용." },
      { name: "희망두배 청년통장", target: "만 18~34세, 기준 중위소득 100% 이하 근로 청년", amount: "본인 적립금의 2배 지원 (최대 720만원)", note: "2~3년 적립 후 목돈 마련. 매년 모집." },
      { name: "서울시 중장년 생활 안정 지원금", target: "중장년 실직자 (40~65세)", amount: "월 50만원 × 최대 3개월", note: "갑작스럽게 일자리를 잃은 서울 시민 대상." },
      { name: "서울 임산부 교통비 지원", target: "서울 거주 임산부", amount: "70만원 교통비 바우처", note: "임신 기간 대중교통·택시비로 사용 가능." },
    ],
  },
  {
    region: "경기도",
    icon: "🌾",
    color: "bg-emerald-50 border-emerald-200",
    site: "경기복지포털 (ggreport.gg.go.kr)",
    items: [
      { name: "경기도 청년 기본소득", target: "만 24세 경기도 3년 이상 거주 청년", amount: "분기별 25만원 (연 100만원) 지역화폐", note: "24세가 되는 해에 신청. 경기지역화폐로 지급." },
      { name: "경기도 청소년 교통비 지원", target: "만 13~23세 경기 거주 청소년·청년", amount: "반기별 6만원 (연 12만원)", note: "대중교통 이용 금액 환급 방식." },
      { name: "경기도 산후조리비 지원", target: "경기 거주 출산 가정", amount: "최대 100만원 (소득 기준)", note: "출산 후 주민센터 또는 온라인 신청." },
    ],
  },
  {
    region: "부산광역시",
    icon: "🌊",
    color: "bg-cyan-50 border-cyan-200",
    site: "부산복지포털 (bswelfare.or.kr)",
    items: [
      { name: "부산청년 드림카드", target: "만 18~34세 부산 거주 청년", amount: "분기별 25만원 지역화폐", note: "부산페이로 지급. 매년 신청." },
      { name: "부산시 출산 장려금", target: "부산 거주 출산 가정", amount: "첫째 30만원, 둘째 100만원, 셋째 300만원", note: "출생신고 후 주민센터 신청." },
    ],
  },
  {
    region: "인천광역시",
    icon: "✈️",
    color: "bg-sky-50 border-sky-200",
    site: "인천시 복지포털",
    items: [
      { name: "인천 청년드림 수당", target: "인천 거주 만 18~34세 미취업 청년", amount: "월 50만원 × 최대 6개월", note: "취업 준비 활동 지원." },
      { name: "인천시 셋째 이상 출산 지원", target: "셋째 이상 출산 인천 가정", amount: "최대 500만원 (지역 따라 다름)", note: "구청·주민센터에서 확인." },
    ],
  },
  {
    region: "대구광역시",
    icon: "🍎",
    color: "bg-red-50 border-red-200",
    site: "대구시 복지포털",
    items: [
      { name: "대구 청년희망통장", target: "대구 거주 저소득 청년", amount: "월 최대 30만원 추가 적립", note: "2~3년 적립 후 목돈 마련. 매년 모집." },
      { name: "대구시 출산 장려금", target: "대구 거주 출산 가정", amount: "첫째 30만원, 둘째 50만원, 셋째 200만원+", note: "구청·주민센터에서 신청." },
    ],
  },
];

export default function RegionalBenefitsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">지역별 혜택</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">지역별</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          지역별 추가 복지혜택 2026<br />
          <span className="text-lg font-normal text-gray-500">내가 사는 지역에서만 받을 수 있는 지원</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 주요 광역시·도 기준</p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        중앙정부 복지혜택 외에도 각 지자체(시·도·군·구)에서 추가로 지원하는 혜택이 있습니다. 같은 나이·소득이라도 어디 사느냐에 따라 받는 혜택이 달라질 수 있습니다. 아래는 주요 지역별 특화 혜택입니다.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6 text-sm">
        <p className="font-bold text-amber-800 mb-1">⚠️ 주의</p>
        <p className="text-gray-700">지자체 혜택은 예산 소진 시 조기 마감되거나 매년 조건이 바뀝니다. 신청 전 반드시 해당 시·군·구청 또는 주민센터에서 최신 정보를 확인하세요.</p>
      </div>

      <AdSlotHorizontal slot="A004000001" />

      <div className="mt-6 space-y-8">
        {REGIONS.map((region) => (
          <section key={region.region} className={`rounded-2xl border p-5 ${region.color}`}>
            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-1">
              <span className="text-2xl">{region.icon}</span>{region.region}
            </h2>
            <p className="text-xs text-gray-500 mb-4">공식 사이트: {region.site}</p>
            <div className="space-y-3">
              {region.items.map((item) => (
                <div key={item.name} className="bg-white rounded-xl p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-bold text-gray-800">{item.name}</p>
                    <p className="text-sm font-extrabold text-emerald-700 flex-shrink-0 ml-2">{item.amount}</p>
                  </div>
                  <p className="text-xs text-gray-500 mb-1">대상: {item.target}</p>
                  <p className="text-xs text-gray-600 bg-gray-50 rounded-lg p-2">{item.note}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <AdSlotHorizontal slot="A004000002" />

      <section className="mt-8 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">내 지역 혜택 찾는 법</h2>
        <div className="space-y-3 text-sm">
          {[
            { step: 1, title: "복지로에서 검색", desc: "bokjiro.go.kr → 복지서비스 검색 → 지역 필터 적용. 내 주소를 입력하면 해당 지역 혜택만 보여줍니다." },
            { step: 2, title: "주민센터 방문", desc: "가장 확실한 방법. 담당 복지사가 내 상황에 맞는 지역 혜택을 모두 알려줍니다." },
            { step: 3, title: "지자체 복지포털 검색", desc: "시·도청 홈페이지의 '복지' 또는 '지원' 메뉴에서 주민 대상 지원 사업을 확인할 수 있습니다." },
          ].map((item) => (
            <div key={item.step} className="flex gap-3 bg-white border border-gray-100 rounded-xl p-4">
              <div className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{item.step}</div>
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
          <Link href="/guides/all-benefits-2026" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">전체 정부 지원금 보기 →</Link>
          <Link href="/guides/youth-guide" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">청년 혜택 가이드</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
    </article>
  );
}
