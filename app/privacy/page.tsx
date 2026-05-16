import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 복지로드",
  description: "복지로드 개인정보처리방침 — 수집하는 정보, 저장 방식, 광고 쿠키 사용에 대해 안내합니다.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-500 mb-6 flex gap-2">
        <Link href="/" className="hover:text-emerald-600">홈</Link>
        <span>/</span>
        <span className="text-gray-700">개인정보처리방침</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">개인정보처리방침</h1>
      <p className="text-gray-500 mb-10">최종 수정일: 2026년 5월 16일</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">1. 개요</h2>
          <p>
            복지로드(이하 "서비스")는 대한민국 정부 복지혜택 정보를 제공하는 민간 정보 서비스입니다.
            본 방침은 서비스가 수집·이용·보관하는 정보의 범위와 방식을 설명합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">2. 수집하는 정보</h2>
          <p className="mb-3">
            본 서비스는 <strong>서버에 어떠한 개인정보도 수집하거나 저장하지 않습니다.</strong>
          </p>
          <p>
            이용자가 맞춤 혜택 찾기에 입력하는 나이, 성별, 지역, 가구 구성, 소득 수준,
            주거 형태, 장애 여부 등의 정보는 <strong>오직 본인의 기기 내 브라우저 localStorage에만 저장</strong>됩니다.
            이 데이터는 서버로 전송되지 않으며, 외부 기관이나 제3자와 공유되지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">3. 광고 및 쿠키</h2>
          <p className="mb-3">
            본 서비스는 Google AdSense를 통해 광고를 제공합니다.
            Google은 광고 게재를 위해 쿠키를 사용할 수 있으며, 이용자의 사이트 방문 기록에 기반한
            맞춤형 광고를 제공할 수 있습니다.
          </p>
          <ul className="space-y-2 text-sm">
            <li>• Google의 광고 쿠키 사용에 관한 자세한 내용은 <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Google 광고 정책</a>을 참조하세요.</li>
            <li>• 맞춤형 광고를 원하지 않는 경우 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Google 광고 설정</a>에서 해제하실 수 있습니다.</li>
            <li>• 브라우저 설정에서 쿠키를 거부할 수 있으나, 일부 서비스 기능에 영향이 있을 수 있습니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">4. 제3자 링크</h2>
          <p>
            본 서비스는 복지로(bokjiro.go.kr), 정부24(gov.kr) 등 외부 사이트로 연결되는 링크를 포함합니다.
            외부 사이트의 개인정보 처리는 해당 사이트의 방침을 따르며,
            복지로드는 외부 사이트에서의 정보 처리에 대해 책임지지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">5. 저장 정보 삭제</h2>
          <p>
            localStorage에 저장된 이용자 정보는 언제든지 삭제할 수 있습니다.
            브라우저 설정 → 개인정보/보안 → 사이트 데이터 삭제에서 복지로드 사이트 데이터를 삭제하시면 됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">6. 미성년자 개인정보</h2>
          <p>
            본 서비스는 만 14세 미만 아동으로부터 의도적으로 개인정보를 수집하지 않습니다.
            아동의 혜택 조회는 보호자가 대신 진행하여 주시기 바랍니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">7. 방침 변경</h2>
          <p>
            본 개인정보처리방침은 법령 변경 또는 서비스 변경에 따라 수정될 수 있습니다.
            변경 사항은 이 페이지를 통해 공지됩니다. 최종 수정일은 페이지 상단에 표시됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">8. 문의</h2>
          <p>
            개인정보처리방침에 관한 문의는 아래로 연락 주세요.
          </p>
          <p className="mt-2 font-semibold text-emerald-700">
            이메일: <a href="mailto:a89541457@gmail.com" className="hover:underline">a89541457@gmail.com</a>
          </p>
        </section>
      </div>

      <div className="mt-10 text-center">
        <Link href="/" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
          ← 홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
