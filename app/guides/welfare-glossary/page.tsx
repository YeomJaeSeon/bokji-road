import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "복지 용어 사전 — 기준 중위소득·소득인정액·차상위계층 쉽게 이해하기",
  description:
    "복지 신청할 때 헷갈리는 용어를 쉽게 설명합니다. 기준 중위소득, 소득인정액, 차상위계층, 부양의무자, 재산의 소득환산액 등 핵심 용어 총정리.",
  keywords: [
    "복지 용어 사전", "기준 중위소득 뜻", "소득인정액 뜻", "차상위계층 뜻",
    "부양의무자 기준", "복지 용어 설명", "기초생활수급 용어",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/welfare-glossary" },
};

const TERMS = [
  {
    term: "기준 중위소득",
    easy: "대한민국 모든 가구를 소득 순서로 세웠을 때 딱 중간에 있는 가구의 소득",
    detail: "복지혜택의 수급 기준선으로 사용됩니다. 매년 1월 보건복지부가 발표하며, 2026년 기준 4인 가구 기준 약 573만원/월입니다. 생계급여(32%), 의료급여(40%), 주거급여(48%), 교육급여(50%) 등 급여마다 기준 비율이 다릅니다.",
    example: "4인 가구 월 소득이 275만원이면 기준 중위소득 48%인 주거급여 기준 이하입니다.",
    tag: "수급 기준",
  },
  {
    term: "소득인정액",
    easy: "실제 월 소득 + 재산을 월 소득으로 환산한 금액",
    detail: "단순히 월급만으로 계산하지 않습니다. 부동산·자동차·금융재산 등을 일정 비율로 환산해 소득으로 간주합니다. 집이 있으면 그 집 값 일부가 소득으로 계산되는 것입니다.",
    example: "월급 0원이지만 1억짜리 아파트를 소유하면, 그 집 값이 환산돼 소득인정액이 올라갑니다.",
    tag: "수급 기준",
  },
  {
    term: "차상위계층",
    easy: "기초생활수급자는 아니지만 그 바로 위, 즉 수급 기준보다 조금 소득이 높은 저소득층",
    detail: "소득인정액이 기준 중위소득 50% 이하이면 차상위계층에 해당합니다. 기초수급자만큼은 아니지만 문화누리카드, 에너지바우처, 의료비 감면 등 다양한 추가 혜택을 받을 수 있습니다.",
    example: "기초수급자는 못 됐지만 소득이 낮다면, 차상위계층 확인서를 발급받아 혜택을 신청하세요.",
    tag: "대상 분류",
  },
  {
    term: "부양의무자",
    easy: "법적으로 부양 의무가 있는 가족 — 직계혈족(부모·자녀)과 그 배우자",
    detail: "과거에는 부양의무자 소득이 많으면 수급자가 될 수 없었습니다. 지금은 생계급여·의료급여에서도 부양의무자 기준이 대폭 완화됐습니다. 주거급여·교육급여는 부양의무자 기준이 완전히 폐지됐습니다.",
    example: "자녀가 수입이 많아도 부모가 주거급여를 신청할 수 있습니다 (주거급여는 부양의무자 기준 폐지).",
    tag: "핵심 개념",
  },
  {
    term: "재산의 소득환산액",
    easy: "가진 재산(집, 예금 등)을 월 소득으로 환산한 금액",
    detail: "재산 × 월 소득환산율(4.17%)로 계산합니다. 단, 기본재산액(대도시 1억3천500만원, 중소도시 8천500만원, 농어촌 7천250만원)은 공제해줍니다. 집이 있어도 기본 공제액 이하라면 재산 환산 금액이 낮아집니다.",
    example: "서울에 2억짜리 아파트 보유 시: (2억 - 1억3,500만원) × 4.17% ÷ 12 ≈ 월 22만원 추가.",
    tag: "계산 방법",
  },
  {
    term: "소득평가액",
    easy: "실제로 버는 돈에서 일정 금액을 빼준 금액",
    detail: "근로소득은 일하는 노력을 장려하기 위해 30만원 + 나머지의 30%를 공제해줍니다. 즉, 100만원 벌면 30만원 + (70만원 × 30%) = 51만원을 빼고 49만원만 소득으로 봅니다.",
    example: "월 100만원 근로소득 시 소득평가액은 약 49만원 (51만원 공제).",
    tag: "계산 방법",
  },
  {
    term: "바우처 vs 현금급여",
    easy: "바우처 = 특정 용도로만 쓸 수 있는 상품권 같은 것 / 현금 = 자유롭게 사용 가능한 돈",
    detail: "부모급여는 가정양육 시 현금, 어린이집 이용 시 보육료 바우처로 지급됩니다. 에너지바우처는 전기·가스·유류비에만 사용 가능합니다. 문화누리카드는 문화·여가·관광에만 사용 가능한 바우처입니다.",
    example: "첫만남이용권 200만원은 바우처 — 유아용품 구매, 의료비 등에만 사용 가능합니다.",
    tag: "지급 방식",
  },
  {
    term: "긴급복지지원",
    easy: "갑자기 어려워졌을 때 조사 없이 바로 받을 수 있는 긴급 생활비",
    detail: "실직, 사고, 질병, 이혼, 화재 등 위기 상황 발생 시 소득·재산 조사를 생략하고 즉시 지원합니다. 이후 사후조사를 통해 대상 여부를 확인합니다. 가장 빠르게 지원받을 수 있는 제도입니다.",
    example: "갑자기 실직해서 이번 달 식비가 없다 → ☎ 129 전화 또는 주민센터 방문 즉시 신청.",
    tag: "긴급 지원",
  },
  {
    term: "소득인정액 = 0 (무소득자)",
    easy: "소득도 재산도 없는 경우 — 생계급여 최대 금액을 받을 수 있음",
    detail: "소득인정액이 0원이면 선정기준액 전체가 급여로 지급됩니다. 1인 가구 기준 약 71만원/월을 받을 수 있습니다. 단, 재산이 있으면 0원이 아닐 수 있습니다.",
    example: "소득도 재산도 없는 1인 가구 → 생계급여 약 71만원/월 수령 가능.",
    tag: "계산 방법",
  },
  {
    term: "국민기초생활보장법",
    easy: "기초생활수급자 제도의 법적 근거가 되는 법률",
    detail: "생계·주거·의료·교육·자활급여 등 기초생활보장 급여의 지급 기준, 선정 방법, 급여 내용을 규정합니다. 2000년 시행, 2015년 맞춤형 급여 체계로 개편됐습니다.",
    example: "",
    tag: "법령",
  },
];

const TAG_COLORS: Record<string, string> = {
  "수급 기준": "bg-blue-100 text-blue-700",
  "대상 분류": "bg-emerald-100 text-emerald-700",
  "핵심 개념": "bg-purple-100 text-purple-700",
  "계산 방법": "bg-amber-100 text-amber-700",
  "지급 방식": "bg-pink-100 text-pink-700",
  "긴급 지원": "bg-red-100 text-red-700",
  "법령": "bg-gray-100 text-gray-600",
};

export default function WelfareGlossaryPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">복지 용어 사전</span>
      </nav>

      <h1 className="text-2xl font-extrabold text-gray-900 mb-1">복지 용어 사전</h1>
      <p className="text-sm text-gray-500 mb-6">복지 신청할 때 헷갈리는 용어를 쉬운 말로 설명합니다.</p>

      <div className="space-y-4">
        {TERMS.map((item) => (
          <div key={item.term} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-lg font-extrabold text-gray-900">{item.term}</h2>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${TAG_COLORS[item.tag] ?? "bg-gray-100 text-gray-600"}`}>
                {item.tag}
              </span>
            </div>
            <p className="text-base text-emerald-700 font-semibold mb-2 bg-emerald-50 rounded-xl px-3 py-2">
              💡 한 줄 요약: {item.easy}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">{item.detail}</p>
            {item.example && (
              <p className="text-xs text-gray-500 bg-gray-50 rounded-xl px-3 py-2">
                📌 예시: {item.example}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
        <p className="font-bold text-emerald-800 mb-3">용어가 여전히 헷갈린다면</p>
        <p className="text-sm text-gray-700 mb-3">☎ <a href="tel:129" className="text-emerald-600 font-bold">129 복지 콜센터</a>에 전화하면 담당자가 쉽게 설명해줍니다. 무료이며 월~금 9~18시 운영합니다.</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/guides/basic-living-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">기초생활수급 신청 가이드</Link>
          <Link href="/compare/basic-living" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">4대 급여 비교</Link>
        </div>
      </div>
    </div>
  );
}
