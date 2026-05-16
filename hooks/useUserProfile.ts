"use client";

import { useState, useEffect, useCallback } from "react";
import type { UserProfile } from "@/types";

const STORAGE_KEY = "bokji_road_user_profile";

const defaultProfile: UserProfile = {
  age: null,
  gender: null,
  region: null,
  district: null,
  householdType: null,
  maritalStatus: null,
  numberOfChildren: null,
  householdSize: null,
  employmentStatus: null,
  incomeLevel: null,
  welfareStatus: null,
  hasEmploymentInsurance: null,
  companySize: null,
  housingOwnership: null,
  housingType: null,
  disabilityGrade: null,
  specialConditions: [],
  completedSteps: 0,
};

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        // 구버전 저장 데이터와 신버전 필드 병합
        setProfile({ ...defaultProfile, ...JSON.parse(stored) });
      }
    } catch {
      // localStorage 접근 실패 시 기본값 사용
    }
    setIsLoaded(true);
  }, []);

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    setProfile((prev) => {
      const next = { ...prev, ...updates };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // 저장 실패 시 무시
      }
      return next;
    });
  }, []);

  const clearProfile = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // 삭제 실패 시 무시
    }
    setProfile(defaultProfile);
  }, []);

  const getLifecycleStage = useCallback(() => {
    if (!profile.age) return null;
    const age = profile.age;
    if (age <= 2) return "영아";
    if (age <= 6) return "유아";
    if (age <= 12) return "아동";
    if (age <= 18) return "청소년";
    if (age <= 34) return "청년";
    if (age <= 49) return "장년";
    if (age <= 64) return "중년";
    return "노년";
  }, [profile.age]);

  return { profile, updateProfile, clearProfile, isLoaded, getLifecycleStage };
}
