"use client";

import { useMemo } from "react";
import type { Benefit, BenefitWithMatch, MatchStatus, UserProfile } from "@/types";

function determinMatchStatus(benefit: Benefit, profile: UserProfile): MatchStatus {
  const hasAnyInput = profile.age !== null || profile.gender !== null || profile.region !== null;
  if (!hasAnyInput) return "조건확인필요";

  const checks: boolean[] = [];
  const unknowns: boolean[] = [];

  // ── 나이 ──
  if (profile.age !== null) {
    checks.push(profile.age >= benefit.target.minAge && profile.age <= benefit.target.maxAge);
  } else {
    unknowns.push(true);
  }

  // ── 성별 ──
  if (benefit.target.gender !== "all") {
    if (profile.gender !== null) {
      checks.push(profile.gender === benefit.target.gender);
    } else {
      unknowns.push(true);
    }
  }

  // ── 가구 형태 ──
  if (benefit.target.householdTypes.length > 0) {
    if (profile.householdType !== null) {
      checks.push(benefit.target.householdTypes.includes(profile.householdType));
    } else {
      unknowns.push(true);
    }
  }

  // ── 소득 수준 ──
  if (benefit.target.incomeLevel !== "all") {
    if (profile.incomeLevel !== null) {
      if (benefit.target.incomeLevel === "low") {
        checks.push(profile.incomeLevel === "low");
      } else if (benefit.target.incomeLevel === "middle") {
        checks.push(profile.incomeLevel === "low" || profile.incomeLevel === "middle");
      } else {
        checks.push(true);
      }
    } else {
      unknowns.push(true);
    }
  }

  // ── 수급자 구분 ──
  if (benefit.target.welfareStatus && benefit.target.welfareStatus.length > 0) {
    if (profile.welfareStatus !== null) {
      checks.push(benefit.target.welfareStatus.includes(profile.welfareStatus));
    } else {
      unknowns.push(true);
    }
  }

  // ── 주택 소유 여부 ──
  if (benefit.target.housingOwnership && benefit.target.housingOwnership !== "all") {
    if (profile.housingOwnership !== null) {
      checks.push(profile.housingOwnership === benefit.target.housingOwnership);
    } else {
      unknowns.push(true);
    }
  }

  // ── 주거 형태 ──
  if (benefit.target.housingTypes && benefit.target.housingTypes.length > 0) {
    if (profile.housingType !== null) {
      checks.push(benefit.target.housingTypes.includes(profile.housingType));
    } else {
      unknowns.push(true);
    }
  }

  // ── 자녀 수 ──
  if (benefit.target.minChildren !== undefined && benefit.target.minChildren > 0) {
    if (profile.numberOfChildren !== null) {
      checks.push(profile.numberOfChildren >= benefit.target.minChildren);
    } else {
      unknowns.push(true);
    }
  }

  // ── 혼인 상태 ──
  if (benefit.target.maritalStatus && benefit.target.maritalStatus.length > 0) {
    if (profile.maritalStatus !== null) {
      checks.push(benefit.target.maritalStatus.includes(profile.maritalStatus));
    } else {
      unknowns.push(true);
    }
  }

  // ── 고용보험 가입 여부 ──
  if (benefit.target.employmentInsurance === true) {
    if (profile.hasEmploymentInsurance !== null) {
      checks.push(profile.hasEmploymentInsurance === true);
    } else {
      unknowns.push(true);
    }
  }

  // ── 기업 규모 ──
  if (benefit.target.companySize && benefit.target.companySize.length > 0) {
    if (profile.companySize !== null) {
      checks.push(benefit.target.companySize.includes(profile.companySize));
    } else {
      unknowns.push(true);
    }
  }

  // ── 장애 등급 ──
  if (benefit.target.disabilityGrade && benefit.target.disabilityGrade.length > 0) {
    if (profile.disabilityGrade !== null) {
      checks.push(benefit.target.disabilityGrade.includes(profile.disabilityGrade));
    } else {
      unknowns.push(true);
    }
  }

  // ── 지역 ──
  if (!benefit.region.includes("전국") && profile.region !== null) {
    const regionMatch = benefit.region.some(
      (r) => profile.region?.includes(r) || r.includes(profile.region ?? "")
    );
    checks.push(regionMatch);
  }

  // ── 특수 조건 ──
  if (benefit.target.specialConditions.length > 0) {
    const hasMatch = benefit.target.specialConditions.some((c) =>
      profile.specialConditions.includes(c)
    );
    if (!hasMatch && profile.completedSteps >= 5) {
      checks.push(false);
    } else if (!hasMatch) {
      unknowns.push(true);
    }
  }

  if (checks.includes(false)) return "해당없음";
  if (unknowns.length > 0) return "조건확인필요";
  return "해당됨";
}

export function useFilteredBenefits(benefits: Benefit[], profile: UserProfile) {
  return useMemo<BenefitWithMatch[]>(() => {
    return benefits
      .map((b) => ({ ...b, matchStatus: determinMatchStatus(b, profile) }))
      .sort((a, b) => {
        const order: MatchStatus[] = ["해당됨", "조건확인필요", "해당없음"];
        return order.indexOf(a.matchStatus) - order.indexOf(b.matchStatus);
      });
  }, [benefits, profile]);
}

// 혜택별 연간 현금 가치 추정 (단위: 만원) — 대표적인 수령액 기준
const ANNUAL_ESTIMATE_MAP: Record<string, number> = {
  "birth-allowance": 200,          // 첫만남이용권 200만원
  "baby-allowance": 1200,          // 부모급여 0세 월100×12
  "child-allowance": 120,          // 아동수당 월10×12
  "basic-pension": 420,            // 기초연금 월35만원×12
  "basic-pension-low-income": 480, // 기초연금 저소득 40만원×12
  "unemployment-benefit": 900,     // 실업급여 월150×6
  "earned-income-tax-credit": 330, // 근로장려금 최대330
  "housing-benefit-rent": 400,     // 주거급여 임차 연400
  "housing-benefit-repair": 200,   // 주거급여 자가
  "disability-pension": 400,       // 장애인연금 연400
  "disability-allowance": 72,      // 장애수당 월6×12
  "national-scholarship": 570,     // 국가장학금 최대570
  "youth-hope-account": 29,        // 청년도약계좌 정부기여금 연29만원
  "youth-monthly-rent": 240,       // 청년월세 월20×12
  "national-employment-support": 300, // 국민취업지원제도 월50×6
  "child-savings-account": 36,     // 디딤씨앗통장 월3×12
  "education-benefit": 66,         // 교육급여 고교 기준
  "after-school-voucher": 60,      // 방과후 자유수강권
  "livelihood-benefit": 720,       // 생계급여 4인가구 기준 월60×12
  "medical-benefit": 0,            // 의료급여 (의료비 절감)
  "single-parent-support": 240,    // 한부모 아동양육비 월20×12
  "multi-children-allowance": 60,  // 다자녀 양육비 연60
  "youth-jeonse-loan": 0,          // 전세자금대출 이자절감
  "newlywed-jeonse-loan": 0,
  "k-pass": 60,                    // K패스 연60만원 환급(추정)
  "national-learning-card": 300,   // 국민내일배움카드
  "spouse-maternity-leave": 50,    // 배우자출산휴가 10일치
  "prenatal-supplements": 5,       // 엽산·철분제
  "infant-health-checkup": 10,     // 영유아 건강검진
  "free-vaccination": 30,          // 예방접종
  "out-of-school-youth": 240,      // 꿈드림 월20×12
  "youth-mental-health": 40,       // 청년 마음건강바우처
  "copayment-ceiling": 100,        // 본인부담금 상한제 (평균)
};

export function useEligibleCount(benefits: Benefit[], profile: UserProfile) {
  return useMemo(() => {
    const withMatch = benefits.map((b) => ({
      ...b,
      matchStatus: determinMatchStatus(b, profile),
    }));
    const eligibleBenefits = withMatch.filter((b) => b.matchStatus === "해당됨");
    const estimatedAnnual = eligibleBenefits.reduce(
      (sum, b) => sum + (ANNUAL_ESTIMATE_MAP[b.id] ?? 0),
      0
    );
    return {
      eligible: eligibleBenefits.length,
      possible: withMatch.filter((b) => b.matchStatus === "조건확인필요").length,
      estimatedAnnual,
    };
  }, [benefits, profile]);
}
