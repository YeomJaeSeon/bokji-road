import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "문의하기 | 복지로드",
  description:
    "복지로드에 대한 문의, 오류 신고, 콘텐츠 제안을 보내주세요. 복지 정보 오류나 최신 정보 업데이트 요청도 환영합니다.",
  alternates: { canonical: "https://bokji-road.vercel.app/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-500 mb-6 flex gap-2">
        <Link href="/" className="hover:text-emerald-600">홈</Link>
        <span>/</span>
        <span className="text-gray-700">문의하기</span>
      </nav>

      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">문의하기</h1>
      <p className="text-gray-500 text-sm mb-8">복지로드에 궁금한 점이 있으시면 아래로 연락해 주세요.</p>

      <div className="space-y-5">
        {/* 이메일 문의 */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-1">📧 이메일 문의</h2>
          <p className="text-sm text-gray-500 mb-3">아래 이메일로 문의해 주시면 영업일 기준 1~3일 이내 답변 드립니다.</p>
          <a href="mailto:a89541457@gmail.com"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm">
            a89541457@gmail.com 에 메일 보내기
          </a>
        </div>

        {/* 복지 콜센터 안내 */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-emerald-800 mb-1">☎ 복지 콜센터 129</h2>
          <p className="text-sm text-gray-700 mb-2">
            복지로드는 민간 정보 서비스입니다. <strong>실제 복지 수급 여부, 신청 방법</strong>에 관한 질문은 아래 공식 기관에 문의하시기 바랍니다.
          </p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• 복지 콜센터: <a href="tel:129" className="text-emerald-700 font-bold hover:underline">☎ 129</a> (무료, 월~금 9~18시)</p>
            <p>• 복지로 공식 사이트: <a href="https://www.bokjiro.go.kr" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">www.bokjiro.go.kr</a></p>
            <p>• 국민연금공단: <a href="tel:1355" className="text-emerald-700 font-bold hover:underline">☎ 1355</a></p>
            <p>• 고용보험 콜센터: <a href="tel:1350" className="text-emerald-700 font-bold hover:underline">☎ 1350</a></p>
          </div>
        </div>

        {/* 문의 유형 안내 */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">문의 유형별 안내</h2>
          <div className="space-y-3 text-sm">
            {[
              { icon: "🐛", title: "정보 오류 신고", desc: "혜택 금액, 신청 방법, 자격 기준 등 잘못된 정보를 발견하셨나요? 알려주시면 즉시 확인·수정합니다." },
              { icon: "💡", title: "혜택 추가 요청", desc: "누락된 정부 복지혜택이 있다면 제안해 주세요. 검토 후 빠르게 추가하겠습니다." },
              { icon: "⚙️", title: "서비스 오류 신고", desc: "계산기 오작동, 페이지 오류 등 기술적인 문제는 이메일로 상세히 알려주세요." },
              { icon: "🤝", title: "제휴·협력 문의", desc: "복지로드와의 제휴, 콘텐츠 협력, 링크 교환 등은 이메일로 문의해 주세요." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 면책 */}
        <p className="text-xs text-gray-400 leading-relaxed">
          복지로드는 정부 공식 기관이 아닌 민간 정보 제공 서비스입니다.
          실제 수급 여부는 반드시 담당 기관에서 최종 확인하세요.
          제공되는 정보는 법적 효력이 없으며, 정확성을 위해 최신 기준으로 주기적으로 업데이트합니다.
        </p>
      </div>
    </div>
  );
}
