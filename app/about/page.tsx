import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "서비스 소개 | 복지로드",
  description:
    "복지로드는 대한민국 국민이 받을 수 있는 정부 복지혜택을 생애주기별로 쉽게 찾을 수 있도록 돕는 무료 정보 서비스입니다.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-500 mb-6 flex gap-2">
        <Link href="/" className="hover:text-emerald-600">홈</Link>
        <span>/</span>
        <span className="text-gray-700">서비스 소개</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">복지로드 소개</h1>
      <p className="text-gray-500 mb-10">대한민국 복지혜택 안내 서비스</p>

      <div className="space-y-8">
        <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-3">🗺️ 복지로드란?</h2>
          <p className="text-gray-600 leading-relaxed">
            복지로드는 대한민국 국민 누구나 자신의 상황에 맞는 정부 복지혜택을 빠르고 쉽게 찾을 수
            있도록 만든 무료 정보 서비스입니다. 임신·출산부터 노년에 이르기까지 생애주기별로 받을 수
            있는 50가지 이상의 주요 혜택을 한눈에 정리해 제공합니다.
          </p>
        </section>

        <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">✨ 주요 기능</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold flex-shrink-0">•</span>
              <span><strong>맞춤 혜택 필터링:</strong> 나이, 성별, 지역, 가구 구성, 소득 수준, 주거 형태 등을 입력하면 내가 받을 수 있는 혜택만 추려드립니다.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold flex-shrink-0">•</span>
              <span><strong>생애주기 로드맵:</strong> 임신·출산 → 영아 → 유아 → 아동 → 청소년 → 청년 → 장년 → 중년 → 노년까지 단계별 혜택을 시각적으로 안내합니다.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold flex-shrink-0">•</span>
              <span><strong>2026년 최신 정보:</strong> 기초연금, 부모급여, 아동수당 등 2026년 기준으로 업데이트된 금액과 조건을 제공합니다.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold flex-shrink-0">•</span>
              <span><strong>개인정보 보호:</strong> 입력한 모든 정보는 기기 내 localStorage에만 저장되며, 서버로 전송되거나 외부에 공유되지 않습니다.</span>
            </li>
          </ul>
        </section>

        <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">📢 주의사항</h2>
          <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
            <li>• 본 서비스는 정부 공식 기관이 운영하는 사이트가 아닌, 민간 정보 제공 목적의 서비스입니다.</li>
            <li>• 복지혜택의 정확한 수혜 자격은 담당 기관(주민센터, 복지로, 관할 행정기관)에서 최종 확인하시기 바랍니다.</li>
            <li>• 혜택 금액 및 조건은 정부 정책에 따라 변경될 수 있습니다. 최신 정보는 <a href="https://www.bokjiro.go.kr" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">복지로(bokjiro.go.kr)</a>에서 확인하세요.</li>
            <li>• 궁금한 사항은 복지 통합콜센터 <a href="tel:129" className="text-emerald-600 font-bold">☎ 129</a>로 문의하실 수 있습니다 (무료, 월~금 9~18시).</li>
          </ul>
        </section>

        <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">📬 문의</h2>
          <p className="text-gray-600 leading-relaxed">
            서비스 개선 의견, 혜택 정보 오류 제보 등은 아래 이메일로 보내주세요.
            빠르게 확인 후 반영하겠습니다.
          </p>
          <p className="mt-3 font-semibold text-emerald-700">
            이메일: <a href="mailto:a89541457@gmail.com" className="hover:underline">a89541457@gmail.com</a>
          </p>
        </section>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
          ← 전체 혜택 보기로 돌아가기
        </Link>
      </div>
    </div>
  );
}
