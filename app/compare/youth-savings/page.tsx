import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "청년도약계좌 vs 청년희망적금 차이점 비교 | 복지로드",
  description: "청년도약계좌와 청년희망적금의 가입 조건, 지원 금액, 만기 기간, 혜택 차이를 한눈에 비교해보세요.",
};

const ITEMS = [
  {
    category: "대상",
    a: "만 19~34세 청년",
    b: "만 19~34세 청년",
  },
  {
    category: "소득 조건",
    a: "개인 소득 7,500만원 이하\n가구소득 중위 180% 이하",
    b: "개인 소득 3,600만원 이하\n(총급여 기준)",
    highlight: "b",
  },
  {
    category: "월 납입 한도",
    a: "최대 70만원",
    b: "최대 50만원",
    highlight: "a",
  },
  {
    category: "정부 지원",
    a: "소득구간별 정부기여금\n(월 최대 2.4만원)",
    b: "이자소득에 저축장려금 추가\n(2년간 연 최대 4%)",
    highlight: "b",
  },
  {
    category: "만기",
    a: "5년",
    b: "2년",
    highlight: "b",
  },
  {
    category: "만기 수령액 (월 50만원 납입 기준)",
    a: "약 3,200~3,600만원 (비과세)",
    b: "약 1,260만원 (비과세)",
    highlight: "a",
  },
  {
    category: "비과세 여부",
    a: "비과세 (이자·배당소득)",
    b: "비과세",
  },
  {
    category: "중도해지",
    a: "3년 이상 유지 시 정부기여금 일부 수령\n그 전 해지 시 기여금 없음",
    b: "특별중도해지 사유 해당 시 우대금리 유지",
  },
  {
    category: "현재 가입 가능 여부",
    a: "가입 가능",
    b: "2024년 2월 판매 종료\n(기존 가입자 유지)",
    highlight: "a",
  },
];

export default function YouthSavingsComparePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm text-emerald-600 hover:text-emerald-700">← 홈으로</Link>

      <h1 className="text-2xl font-extrabold text-gray-900 mt-3 mb-1">
        청년도약계좌 vs 청년희망적금 비교
      </h1>
      <p className="text-sm text-gray-500 mb-6">두 상품의 조건, 혜택, 만기금액을 한눈에 비교해보세요.</p>

      <AdSlotHorizontal slot="5000000001" />

      {/* 요약 카드 */}
      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-5">
          <div className="text-2xl mb-2">🚀</div>
          <h2 className="text-lg font-extrabold text-emerald-800 mb-1">청년도약계좌</h2>
          <p className="text-sm text-emerald-700">5년 장기 적금 + 정부기여금<br />소득이 높아도 가입 가능</p>
          <div className="mt-3 bg-emerald-100 rounded-xl p-3 text-center">
            <p className="text-xs text-emerald-600">만기 수령 (월 70만원 기준)</p>
            <p className="text-xl font-extrabold text-emerald-700">최대 5,000만원</p>
          </div>
        </div>
        <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-5">
          <div className="text-2xl mb-2">💚</div>
          <h2 className="text-lg font-extrabold text-gray-700 mb-1">청년희망적금</h2>
          <p className="text-sm text-gray-500">2년 단기 적금 + 저축장려금<br />2024년 2월 판매 종료</p>
          <div className="mt-3 bg-gray-100 rounded-xl p-3 text-center">
            <p className="text-xs text-gray-500">만기 수령 (월 50만원 기준)</p>
            <p className="text-xl font-extrabold text-gray-600">약 1,260만원</p>
          </div>
        </div>
      </div>

      {/* 상세 비교 테이블 */}
      <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
        <div className="grid grid-cols-3 bg-gray-800 text-white text-sm font-bold">
          <div className="p-3">항목</div>
          <div className="p-3 text-emerald-300">청년도약계좌</div>
          <div className="p-3 text-gray-300">청년희망적금</div>
        </div>
        {ITEMS.map((row, i) => (
          <div key={i} className={`grid grid-cols-3 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <div className="p-3 font-semibold text-gray-700">{row.category}</div>
            <div className={`p-3 whitespace-pre-line ${row.highlight === "a" ? "text-emerald-700 font-semibold" : "text-gray-600"}`}>
              {row.a}
            </div>
            <div className={`p-3 whitespace-pre-line ${row.highlight === "b" ? "text-emerald-700 font-semibold" : "text-gray-600"}`}>
              {row.b}
            </div>
          </div>
        ))}
      </div>

      <AdSlotHorizontal slot="5000000002" />

      {/* 결론 */}
      <div className="space-y-4 mt-6">
        <h2 className="text-lg font-bold text-gray-800">어떤 상품이 유리할까요?</h2>
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-sm text-gray-700 space-y-2">
          <p className="font-semibold text-emerald-800">✅ 청년도약계좌 추천 상황</p>
          <p>• 5년간 꾸준히 납입할 수 있는 안정적 소득이 있는 경우</p>
          <p>• 소득이 3,600만원을 초과해 청년희망적금 대상이 아닌 경우</p>
          <p>• 장기적으로 목돈을 모으고 싶은 경우</p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-sm text-gray-700 space-y-2">
          <p className="font-semibold text-gray-700">ℹ️ 청년희망적금</p>
          <p>• 2024년 2월 판매가 종료되어 신규 가입 불가합니다.</p>
          <p>• 기존 가입자는 만기까지 유지하는 것이 유리합니다.</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/benefits/youth-hope-account"
          className="inline-block bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors text-sm">
          청년도약계좌 상세 정보 보기 →
        </Link>
      </div>
    </div>
  );
}
