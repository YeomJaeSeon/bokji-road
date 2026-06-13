import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "독거노인 지원 신청 방법 2026 — 자격조건·서비스 종류 완벽 가이드",
  description:
    "2026년 독거노인 지원 신청 방법과 자격 조건을 완벽 안내합니다. 노인맞춤돌봄서비스, 응급안전안심서비스, 독거노인 생활관리사, 무료 도시락 배달까지 받을 수 있는 혜택을 한 번에 확인하세요.",
  keywords: [
    "독거노인신청방법", "독거노인신청자격", "독거노인 지원", "독거노인 서비스",
    "노인맞춤돌봄서비스", "독거노인 생활관리사", "응급안전안심서비스", "독거노인 도시락",
    "혼자사는 어르신 지원", "독거노인 복지혜택",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/elderly-alone-support" },
  openGraph: {
    title: "독거노인 지원 신청 방법 2026 | 복지로드",
    description: "혼자 사는 어르신을 위한 돌봄·응급·도시락 지원 완벽 안내.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/elderly-alone-support", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "독거노인 지원 신청 방법 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/elderly-alone-support",
  inLanguage: "ko", datePublished: "2026-06-13", dateModified: "2026-06-13",
};

const SERVICES = [
  {
    icon: "🤲",
    color: "border-emerald-200",
    name: "노인맞춤돌봄서비스",
    age: "만 65세 이상",
    target: "독거·고령부부·기초수급자 등 돌봄이 필요한 어르신",
    content: "안전확인(방문·전화), 생활교육, 사회참여, 일상생활지원, 연계서비스",
    how: "주민센터 또는 읍·면·동 행정복지센터 신청",
  },
  {
    icon: "🚨",
    color: "border-red-200",
    name: "응급안전안심서비스",
    age: "만 65세 이상 독거노인 / 장애인",
    target: "화재·가스·응급상황 감지 필요 어르신",
    content: "가정 내 화재·가스·활동감지 센서 + 응급호출기 설치. 이상 감지 시 119 자동 연결",
    how: "주민센터 신청 → 응급안전안심서비스 기관 설치",
  },
  {
    icon: "🍱",
    color: "border-amber-200",
    name: "무료 도시락 배달 (경로식당·밑반찬)",
    age: "만 60세 이상 저소득",
    target: "기초수급자·차상위계층 등 저소득 독거노인",
    content: "주 5회 도시락 배달 또는 경로식당 무료 이용. 배달 봉사자가 안전 확인도 겸함",
    how: "주민센터 또는 노인복지관 신청",
  },
  {
    icon: "📞",
    color: "border-blue-200",
    name: "독거노인 사랑잇기 (안전 확인 전화)",
    age: "만 65세 이상 독거노인",
    target: "사회적으로 고립된 어르신",
    content: "자원봉사자·생활관리사가 정기적으로 안부 전화. 말벗 서비스 포함",
    how: "노인맞춤돌봄서비스 신청 시 함께 신청",
  },
  {
    icon: "🏠",
    color: "border-violet-200",
    name: "주거환경 개선 지원",
    age: "만 65세 이상",
    target: "저소득 독거노인 (기초수급자·차상위 우선)",
    content: "도배·장판·보일러 수리 등 주거 환경 개선. 지자체별 지원 내용 상이",
    how: "주민센터 신청 → 지자체 담당 부서 조사",
  },
];

const APPLY_STEPS = [
  { step: 1, title: "주민센터 방문", desc: "가까운 읍·면·동 행정복지센터(주민센터)를 방문합니다. '독거노인 지원 신청' 또는 '노인맞춤돌봄서비스 신청'을 요청하면 됩니다." },
  { step: 2, title: "상담 및 서류 제출", desc: "신분증과 기초연금 수급 여부 확인 서류를 지참합니다. 담당자가 필요한 서비스를 함께 안내해 드립니다." },
  { step: 3, title: "조사 및 서비스 결정", desc: "사회복지사가 방문 조사 후 필요한 서비스를 결정합니다. 여러 서비스를 동시에 신청할 수 있습니다." },
  { step: 4, title: "서비스 시작", desc: "담당 기관이 배정되어 서비스가 시작됩니다. 정기적으로 모니터링하며 서비스가 지속됩니다." },
];

const FAQ = [
  { q: "가족이 있는 어르신도 신청할 수 있나요?", a: "혼자 사는 독거노인이 주요 대상이지만, 노인부부 가구, 조손 가구 등 돌봄이 필요하다고 인정되면 신청 가능합니다. 주민센터에서 상담 후 결정됩니다." },
  { q: "소득이 있어도 서비스를 받을 수 있나요?", a: "노인맞춤돌봄서비스는 소득과 무관하게 신청할 수 있습니다. 단, 도시락 배달·주거환경 개선 등 일부 서비스는 기초수급자·차상위계층을 우선합니다." },
  { q: "응급안전안심서비스 기기는 무료인가요?", a: "네, 기기 설치 및 사용료 모두 무료입니다. 화재·가스·활동감지 센서와 응급호출기를 가정에 설치해 드립니다." },
  { q: "자녀가 대신 신청할 수 있나요?", a: "네, 가족이나 주변 이웃이 대리 신청할 수 있습니다. 신분증과 위임장(간단한 형태 가능)을 지참하고 주민센터를 방문하면 됩니다." },
];

export default function ElderlyAloneSupportPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">독거노인 지원</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">독거노인</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          독거노인 지원 신청 방법 완벽 가이드 2026<br />
          <span className="text-lg font-normal text-gray-500">돌봄·응급·도시락·주거 지원까지 한 번에</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 5분</p>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6">
        <p className="font-bold text-emerald-800 mb-1">혼자 사는 어르신이라면 꼭 신청하세요</p>
        <p className="text-sm text-gray-700">독거노인을 위한 지원이 생각보다 다양합니다. 안전 확인부터 도시락 배달, 응급 감지 서비스까지 — <strong>주민센터에서 한 번에 신청</strong>할 수 있습니다.</p>
      </div>

      <AdSlotHorizontal slot="9020000001" />

      <section className="mt-4 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">독거노인이 받을 수 있는 서비스</h2>
        <div className="space-y-4">
          {SERVICES.map((s) => (
            <div key={s.name} className={`bg-white border-2 ${s.color} rounded-2xl p-5`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{s.icon}</span>
                <h3 className="font-extrabold text-gray-800 text-base">{s.name}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2"><span className="text-xs font-bold text-gray-500 w-14 flex-shrink-0">대상</span><p className="text-gray-700">{s.age} · {s.target}</p></div>
                <div className="flex gap-2"><span className="text-xs font-bold text-gray-500 w-14 flex-shrink-0">내용</span><p className="text-gray-700">{s.content}</p></div>
                <div className="flex gap-2"><span className="text-xs font-bold text-emerald-600 w-14 flex-shrink-0">신청</span><p className="font-semibold text-gray-800">{s.how}</p></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdSlotHorizontal slot="9020000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">신청 절차</h2>
        <div className="space-y-3">
          {APPLY_STEPS.map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">{item.step}</div>
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
          <Link href="/guides/age-60s-plus" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">60대 이상 혜택 총정리 →</Link>
          <Link href="/guides/basic-pension-guide" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">기초연금 가이드</Link>
          <Link href="/guides/energy-voucher" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">에너지바우처</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 129 복지 콜센터 · 노인장기요양 1577-1000</p>
    </article>
  );
}
