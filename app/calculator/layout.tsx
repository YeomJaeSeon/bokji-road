import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "복지 수령액 계산기 — 실업급여·기초연금·근로장려금·건강보험료",
  description:
    "실업급여, 기초연금, 부모급여, 근로장려금, 국민연금, 건강보험료를 간단히 계산해보세요. 내 조건을 입력하면 예상 수령액을 바로 확인할 수 있습니다.",
  keywords: [
    "실업급여 계산기", "기초연금 계산기", "근로장려금 계산기",
    "국민연금 예상 수령액", "건강보험료 계산기", "부모급여 계산기",
    "복지급여 계산", "정부지원금 계산기", "2026 복지 계산기",
  ],
  alternates: { canonical: "https://bokjiroad.com/calculator" },
  openGraph: {
    title: "복지 수령액 계산기 | 복지로드",
    description: "실업급여·근로장려금·기초연금·건강보험료 예상 수령액을 간단히 계산하세요.",
    type: "website",
    locale: "ko_KR",
    url: "https://bokjiroad.com/calculator",
    siteName: "복지로드",
  },
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
