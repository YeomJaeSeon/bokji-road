import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "복지로(bokjiro.go.kr) 사용 방법 — 온라인으로 복지 신청하기 | 복지로드",
  description:
    "복지로(bokjiro.go.kr) 사이트에서 복지혜택을 직접 신청하는 방법을 단계별로 안내합니다. 회원가입, 서비스 검색, 신청서 작성까지 쉽게 따라할 수 있습니다.",
  keywords: [
    "복지로 사용 방법", "복지로 신청", "bokjiro.go.kr", "온라인 복지 신청",
    "복지 온라인 신청 방법", "복지혜택 신청하는 법", "주민센터 안 가고 복지 신청",
  ],
  alternates: { canonical: "https://bokjiroad.com/news/how-to-use-bokjiro" },
  openGraph: {
    title: "복지로 사이트에서 복지 신청하는 방법 | 복지로드",
    description: "집에서 온라인으로 복지혜택을 신청하는 단계별 방법.",
    type: "article", locale: "ko_KR",
    url: "https://bokjiroad.com/news/how-to-use-bokjiro", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "복지로(bokjiro.go.kr)에서 복지혜택 온라인 신청하는 방법",
  description: "복지로 사이트 접속부터 신청서 제출까지 단계별 안내",
  author: { "@type": "Organization", name: "복지로드" },
  url: "https://bokjiroad.com/news/how-to-use-bokjiro",
  inLanguage: "ko",
  step: [
    { "@type": "HowToStep", name: "복지로 접속 및 로그인", text: "bokjiro.go.kr 접속 후 공동인증서 또는 간편인증으로 로그인" },
    { "@type": "HowToStep", name: "혜택 검색", text: "복지서비스 → 서비스 찾기에서 원하는 혜택 검색" },
    { "@type": "HowToStep", name: "신청서 작성", text: "해당 서비스 페이지에서 온라인 신청 클릭 후 정보 입력" },
    { "@type": "HowToStep", name: "접수 확인", text: "신청 완료 후 복지로 마이페이지에서 처리 상태 확인" },
  ],
};

export default function HowToUseBokjiroPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link>
        <span>/</span>
        <Link href="/news" className="hover:text-emerald-600">복지 뉴스</Link>
        <span>/</span>
        <span className="text-gray-700">복지로 사용 방법</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">이용 가이드</span>
        <span className="text-xs text-gray-400 ml-2">2026. 02. 15 · 읽는 시간 약 5분</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          복지로(bokjiro.go.kr) 사용 방법<br />
          <span className="text-lg font-normal text-gray-500">주민센터 안 가고 집에서 온라인으로 복지 신청하기</span>
        </h1>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        많은 분들이 복지혜택을 신청하려면 무조건 주민센터를 방문해야 한다고 생각하십니다. 하지만 대부분의 복지혜택은 <strong>복지로(bokjiro.go.kr)</strong>를 통해 집에서 온라인으로 신청할 수 있습니다. 직장인이나 거동이 불편한 어르신도 편리하게 이용할 수 있는 방법을 단계별로 알려드립니다.
      </p>

      <AdSlotHorizontal slot="8002000001" />

      <section className="mb-8 mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">복지로에서 신청 가능한 주요 혜택</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
          {["기초연금", "부모급여·아동수당", "생계급여", "주거급여", "의료급여", "교육급여", "청년 지원금", "장애인 급여", "한부모가족 지원"].map((item) => (
            <div key={item} className="bg-emerald-50 rounded-xl px-3 py-2 text-sm text-emerald-700 font-medium text-center">
              {item}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600">단, 실업급여(고용보험)는 <strong>고용보험 홈페이지(ei.go.kr)</strong>나 고용센터를 통해 신청해야 합니다.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">복지로 온라인 신청 단계별 방법</h2>
        <div className="space-y-5">
          {[
            {
              step: 1,
              title: "복지로 사이트 접속",
              content: "인터넷 브라우저에서 bokjiro.go.kr을 입력하거나 검색창에 '복지로'를 검색합니다. 모바일에서는 '복지로' 앱을 설치해 이용할 수도 있습니다.",
              tip: "모바일 앱(iOS/안드로이드)도 동일한 기능 제공",
            },
            {
              step: 2,
              title: "로그인",
              content: "상단 로그인 버튼을 클릭합니다. 로그인 방법은 ① 공동인증서(구 공인인증서) ② 간편인증(카카오·네이버·패스·삼성패스 등) ③ 아이디/비밀번호 중 선택합니다. 처음 방문하는 경우 회원가입이 필요합니다.",
              tip: "카카오·네이버 계정으로도 간편 로그인 가능",
            },
            {
              step: 3,
              title: "신청할 서비스 찾기",
              content: "로그인 후 상단 메뉴에서 '복지서비스 → 서비스 찾기'를 클릭합니다. 검색창에 원하는 혜택 이름(예: '부모급여', '기초연금')을 입력하거나, 생애주기별·대상별로 필터링해 찾을 수 있습니다.",
              tip: "복지로드 혜택 상세 페이지에서 '바로 신청하기' 클릭 시 해당 페이지로 바로 이동",
            },
            {
              step: 4,
              title: "온라인 신청서 작성",
              content: "해당 서비스 페이지에서 '온라인 신청' 버튼을 클릭합니다. 개인정보 수집 동의 후 신청서를 작성합니다. 필요한 정보: 기본 인적 사항, 소득·재산 정보, 지급받을 계좌 번호. 대부분의 정보는 정부 DB에서 자동 조회되어 간편하게 작성할 수 있습니다.",
              tip: "통장 사본 사진을 미리 준비해두면 빠릅니다",
            },
            {
              step: 5,
              title: "신청 완료 및 처리 상태 확인",
              content: "신청서 제출 후 접수 완료 문자를 받습니다. 처리 상태는 복지로 → 마이페이지 → 복지서비스 신청 현황에서 확인할 수 있습니다. 처리 기간은 급여별로 다르며, 보통 14~30일 이내에 결과가 통보됩니다.",
              tip: "처리 중 연락이 올 수 있으니 신청서에 정확한 연락처를 입력하세요",
            },
          ].map((item) => (
            <div key={item.step} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.content}</p>
                  <p className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg inline-block">💡 {item.tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdSlotHorizontal slot="8002000002" />

      <section className="mb-8 mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">온라인 신청이 어려울 때</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          스마트폰이나 컴퓨터 사용이 어려운 어르신, 장애인은 가까운 읍·면·동 주민센터(행정복지센터)를 방문해 담당 공무원의 도움을 받아 신청할 수 있습니다. 특히 <strong>찾아가는 복지서비스</strong>를 신청하면 복지 담당자가 직접 방문해 도움을 드립니다.
        </p>
        <div className="bg-blue-50 rounded-xl p-4 text-sm text-gray-700">
          <p className="font-bold text-blue-800 mb-2">📞 도움 받을 수 있는 곳</p>
          <ul className="space-y-1">
            <li>• 복지 콜센터: <a href="tel:129" className="text-emerald-600 font-bold">☎ 129</a> (무료, 월~금 9~18시)</li>
            <li>• 복지로 고객센터: <a href="tel:129" className="text-emerald-600 font-bold">☎ 129</a></li>
            <li>• 주민센터 방문 신청 (신분증 지참)</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">자주 묻는 질문</h2>
        <div className="space-y-3">
          {[
            { q: "복지로에서 신청하면 주민센터보다 처리가 느린가요?", a: "처리 기간은 온라인·오프라인 신청 모두 동일합니다. 오히려 온라인 신청은 접수 완료 확인이 즉시 되고, 처리 상태를 실시간으로 추적할 수 있어 편리합니다." },
            { q: "모든 복지혜택을 복지로에서 신청할 수 있나요?", a: "대부분의 복지부 소관 급여는 복지로에서 신청 가능합니다. 단, 실업급여(고용노동부)는 ei.go.kr, 근로장려금(국세청)은 hometax.go.kr에서 신청합니다." },
            { q: "신청 후 어떤 서류를 제출해야 하나요?", a: "온라인 신청 시 대부분의 소득·재산 정보는 행정정보 공동이용으로 자동 조회됩니다. 임대차 계약서 등 일부 서류는 파일로 업로드하거나 주민센터에 제출해야 할 수 있습니다." },
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
          <Link href="/#benefits" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">전체 혜택 보기 →</Link>
          <Link href="/guides" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">신청 가이드</Link>
          <Link href="/news" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 뉴스 목록</Link>
        </div>
      </div>
    </article>
  );
}
