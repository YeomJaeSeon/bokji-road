import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
      <div className="text-7xl">🗺️</div>
      <h1 className="text-3xl font-extrabold text-gray-800">페이지를 찾을 수 없어요</h1>
      <p className="text-gray-500 text-sm leading-relaxed">
        주소가 잘못됐거나 삭제된 페이지입니다.<br />
        아래 버튼으로 원하는 서비스를 이용해보세요.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/"
          className="bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors text-sm">
          홈으로 돌아가기
        </Link>
        <Link href="/calculator"
          className="border border-emerald-300 text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors text-sm">
          복지 계산기 →
        </Link>
      </div>

      {/* 빠른 링크 */}
      <div className="bg-gray-50 rounded-2xl p-5 text-left space-y-2 mt-4">
        <p className="text-sm font-semibold text-gray-700 mb-3">자주 찾는 페이지</p>
        {[
          { href: "/#benefits", label: "전체 복지혜택 보기" },
          { href: "/calculator", label: "실업급여·근로장려금 계산기" },
          { href: "/compare/youth-savings", label: "청년도약계좌 vs 청년희망적금 비교" },
          { href: "/compare/pension-types", label: "기초연금 vs 노령연금 비교" },
          { href: "/favorites", label: "내 즐겨찾기 혜택" },
        ].map((l) => (
          <Link key={l.href} href={l.href}
            className="flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 hover:underline py-1">
            → {l.label}
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <AdSlotHorizontal slot="9000000001" />
      </div>
    </div>
  );
}
