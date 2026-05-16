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

export function useEligibleCount(benefits: Benefit[], profile: UserProfile) {
  return useMemo(() => {
    const withMatch = benefits.map((b) => ({
      ...b,
      matchStatus: determinMatchStatus(b, profile),
    }));
    return {
      eligible: withMatch.filter((b) => b.matchStatus === "해당됨").length,
      possible: withMatch.filter((b) => b.matchStatus === "조건확인필요").length,
    };
  }, [benefits, profile]);
}
