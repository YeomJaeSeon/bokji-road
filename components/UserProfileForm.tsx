"use client";

import { useState } from "react";
import type {
  UserProfile,
  HouseholdType,
  IncomeLevel,
  HousingType,
  MaritalStatus,
  DisabilityGrade,
  WelfareStatus,
} from "@/types";
import regionsData from "@/data/regions.json";

interface Props {
  profile: UserProfile;
  onUpdate: (updates: Partial<UserProfile>) => void;
  onClose: () => void;
}

const SPECIAL_CONDITIONS = [
  "임신중",
  "출산 후 1년 이내",
  "국가유공자 본인",
  "국가유공자 유족",
  "다문화가족",
  "북한이탈주민",
  "노인 장기요양 인정",
  "한부모 가정 아동",
];

const steps = [
  { title: "기본 정보", desc: "나이·성별·거주지역", icon: "👤" },
  { title: "가구 구성", desc: "가족·자녀·혼인 상태", icon: "👨‍👩‍👧" },
  { title: "경제 상황", desc: "고용·소득·수급 여부", icon: "💰" },
  { title: "주거 상황", desc: "주택 소유·임대 형태", icon: "🏠" },
  { title: "특수 조건", desc: "장애·임신 등 추가 조건", icon: "✅" },
];

function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`py-3 px-3 rounded-xl border text-sm font-medium transition-all min-h-[48px] ${
        selected
          ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
          : "border-gray-200 text-gray-700 bg-white hover:border-emerald-400 hover:bg-emerald-50"
      }`}
    >
      {label}
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-sm font-semibold text-gray-800 mb-2">{children}</label>
  );
}

function HintBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs text-gray-600 bg-blue-50 border border-blue-100 rounded-xl p-3 leading-relaxed">
      💡 {children}
    </div>
  );
}

export default function UserProfileForm({ profile, onUpdate, onClose }: Props) {
  const [step, setStep] = useState(
    profile.completedSteps > 0 ? Math.min(profile.completedSteps, steps.length - 1) : 0
  );
  const [localAge, setLocalAge] = useState(profile.age?.toString() ?? "");
  const [selectedCity, setSelectedCity] = useState(profile.region ?? "");
  const [selectedDistrict, setSelectedDistrict] = useState(profile.district ?? "");
  const [childrenInput, setChildrenInput] = useState(
    profile.numberOfChildren !== null ? profile.numberOfChildren.toString() : ""
  );
  const [householdSizeInput, setHouseholdSizeInput] = useState(
    profile.householdSize !== null ? profile.householdSize.toString() : ""
  );

  const progressPercent = ((step + 1) / steps.length) * 100;
  const currentCity = regionsData.cities.find(
    (c) => c.shortName === selectedCity || c.name === selectedCity
  );
  const districts = currentCity?.districts ?? [];

  function saveStep0() {
    const age = parseInt(localAge, 10);
    const updates: Partial<UserProfile> = {
      region: selectedCity || null,
      district: selectedDistrict || null,
      completedSteps: Math.max(profile.completedSteps, 1),
    };
    if (!isNaN(age) && age >= 0 && age < 120) updates.age = age;
    onUpdate(updates);
  }

  function saveStep1() {
    const children = parseInt(childrenInput, 10);
    const size = parseInt(householdSizeInput, 10);
    const updates: Partial<UserProfile> = {
      completedSteps: Math.max(profile.completedSteps, 2),
    };
    if (!isNaN(children) && children >= 0) updates.numberOfChildren = children;
    if (!isNaN(size) && size >= 1) updates.householdSize = size;
    onUpdate(updates);
  }

  function goNext() {
    if (step === 0) saveStep0();
    if (step === 1) saveStep1();
    if (step === 2) onUpdate({ completedSteps: Math.max(profile.completedSteps, 3) });
    if (step === 3) onUpdate({ completedSteps: Math.max(profile.completedSteps, 4) });

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onUpdate({ completedSteps: steps.length });
      onClose();
    }
  }

  function goPrev() {
    if (step > 0) setStep(step - 1);
  }

  const toggleSpecial = (cond: string) => {
    const next = profile.specialConditions.includes(cond)
      ? profile.specialConditions.filter((c) => c !== cond)
      : [...profile.specialConditions, cond];
    onUpdate({ specialConditions: next });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-lg shadow-2xl max-h-[92vh] flex flex-col">
        {/* 헤더 */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-t-2xl p-5 text-white flex-shrink-0">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-sm opacity-80">맞춤 혜택 찾기</p>
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span>{steps[step].icon}</span> {steps[step].title}
              </h2>
              <p className="text-xs opacity-70 mt-0.5">{steps[step].desc}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white text-2xl leading-none w-8 h-8 flex items-center justify-center"
              aria-label="닫기"
            >
              ×
            </button>
          </div>
          {/* 진행바 */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs opacity-80">
              <span>{step + 1}/{steps.length} 단계 — 더 입력할수록 더 정확한 혜택</span>
              <span>{Math.round(progressPercent)}%</span>
            </div>
            <div className="flex gap-1">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-1.5 rounded-full transition-all duration-500 ${
                    i <= step ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 폼 본문 (스크롤 가능) */}
        <div className="p-5 space-y-5 overflow-y-auto flex-1">

          {/* ─── 1단계: 기본 정보 ─── */}
          {step === 0 && (
            <>
              <div>
                <SectionLabel>만 나이</SectionLabel>
                <input
                  type="number"
                  min={0}
                  max={120}
                  value={localAge}
                  onChange={(e) => setLocalAge(e.target.value)}
                  placeholder="예: 32"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <SectionLabel>성별</SectionLabel>
                <div className="flex gap-2">
                  {(["male", "female"] as const).map((g) => (
                    <Chip
                      key={g}
                      label={g === "male" ? "남성" : "여성"}
                      selected={profile.gender === g}
                      onClick={() => onUpdate({ gender: g })}
                    />
                  ))}
                </div>
              </div>

              <div>
                <SectionLabel>거주 지역 (시/도)</SectionLabel>
                <select
                  value={selectedCity}
                  onChange={(e) => { setSelectedCity(e.target.value); setSelectedDistrict(""); }}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">선택 안 함 (전국 혜택 표시)</option>
                  {regionsData.cities.map((c) => (
                    <option key={c.name} value={c.shortName}>{c.name}</option>
                  ))}
                </select>
              </div>

              {districts.length > 0 && (
                <div>
                  <SectionLabel>시/군/구</SectionLabel>
                  <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">선택 안 함</option>
                    {districts.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
              )}
            </>
          )}

          {/* ─── 2단계: 가구 구성 ─── */}
          {step === 1 && (
            <>
              <div>
                <SectionLabel>가구 형태</SectionLabel>
                <div className="grid grid-cols-2 gap-2">
                  {(["1인가구", "부부", "한부모", "다자녀", "조손가구"] as HouseholdType[]).map((t) => (
                    <Chip key={t} label={t} selected={profile.householdType === t}
                      onClick={() => onUpdate({ householdType: t })} />
                  ))}
                </div>
              </div>

              <div>
                <SectionLabel>혼인 상태</SectionLabel>
                <div className="flex gap-2 flex-wrap">
                  {(["미혼", "기혼", "이혼·사별"] as MaritalStatus[]).map((m) => (
                    <Chip key={m} label={m} selected={profile.maritalStatus === m}
                      onClick={() => onUpdate({ maritalStatus: m })} />
                  ))}
                </div>
              </div>

              <div>
                <SectionLabel>자녀 수 <span className="text-gray-400 font-normal">(없으면 0)</span></SectionLabel>
                <input
                  type="number"
                  min={0}
                  max={20}
                  value={childrenInput}
                  onChange={(e) => setChildrenInput(e.target.value)}
                  placeholder="예: 2"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <HintBox>
                  다자녀 혜택은 자녀 수에 따라 2자녀 이상, 3자녀 이상으로 기준이 달라집니다.
                </HintBox>
              </div>

              <div>
                <SectionLabel>가구원 수 <span className="text-gray-400 font-normal">(본인 포함)</span></SectionLabel>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={householdSizeInput}
                  onChange={(e) => setHouseholdSizeInput(e.target.value)}
                  placeholder="예: 3"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <HintBox>
                  기준 중위소득은 가구원 수마다 기준금액이 다릅니다.
                  (2026년 기준: 1인 256만 4,238원, 4인 649만 4,738원)
                </HintBox>
              </div>
            </>
          )}

          {/* ─── 3단계: 경제 상황 ─── */}
          {step === 2 && (
            <>
              <div>
                <SectionLabel>고용 상태</SectionLabel>
                <div className="grid grid-cols-2 gap-2">
                  {([
                    ["employed", "직장인 (고용·임금)"],
                    ["self-employed", "자영업·프리랜서"],
                    ["unemployed", "구직중·무직"],
                    ["student", "학생"],
                  ] as const).map(([val, label]) => (
                    <Chip key={val} label={label} selected={profile.employmentStatus === val}
                      onClick={() => onUpdate({ employmentStatus: val })} />
                  ))}
                </div>
              </div>

              <div>
                <SectionLabel>고용보험 가입 여부</SectionLabel>
                <div className="flex gap-2">
                  <Chip label="가입함" selected={profile.hasEmploymentInsurance === true}
                    onClick={() => onUpdate({ hasEmploymentInsurance: true })} />
                  <Chip label="미가입 / 모름" selected={profile.hasEmploymentInsurance === false}
                    onClick={() => onUpdate({ hasEmploymentInsurance: false })} />
                </div>
                <HintBox>
                  육아휴직급여, 실업급여 등은 고용보험 가입이 필수입니다.
                </HintBox>
              </div>

              {(profile.employmentStatus === "employed") && (
                <div>
                  <SectionLabel>재직 기업 규모</SectionLabel>
                  <div className="flex gap-2 flex-wrap">
                    {(["중소기업", "중견기업", "대기업"] as const).map((s) => (
                      <Chip key={s} label={s} selected={profile.companySize === s}
                        onClick={() => onUpdate({ companySize: s })} />
                    ))}
                  </div>
                  <HintBox>
                    청년내일채움공제, 청년 고용지원 사업은 중소·중견기업 재직자만 신청 가능합니다.
                  </HintBox>
                </div>
              )}

              <div>
                <SectionLabel>소득 수준</SectionLabel>
                <div className="grid grid-cols-1 gap-2">
                  {([
                    ["low", "저소득 (기준 중위소득 100% 이하)", "국민기초생활수급자·차상위계층 포함"],
                    ["middle", "중간 소득 (중위소득 100~150%)", "일부 청년·주거 지원 해당"],
                    ["high", "고소득 (중위소득 150% 초과)", "소득 무관 보편 혜택만 해당"],
                  ] as const).map(([val, label, sub]) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => onUpdate({ incomeLevel: val as IncomeLevel })}
                      className={`text-left px-4 py-3 rounded-xl border transition-all ${
                        profile.incomeLevel === val
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "border-gray-200 bg-white hover:border-emerald-400"
                      }`}
                    >
                      <div className="text-sm font-semibold">{label}</div>
                      <div className={`text-xs mt-0.5 ${profile.incomeLevel === val ? "text-emerald-100" : "text-gray-400"}`}>{sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {profile.incomeLevel === "low" && (
                <div>
                  <SectionLabel>수급자 구분 <span className="text-gray-400 font-normal">(해당 시 선택)</span></SectionLabel>
                  <div className="grid grid-cols-1 gap-2">
                    {([
                      ["기초생활수급자", "기초생활수급자", "생계·의료·주거·교육 급여 대상 (중위소득 30~50%)"],
                      ["차상위계층", "차상위계층", "수급자는 아니지만 저소득층 (중위소득 50% 이하)"],
                      ["일반", "해당 없음 / 모름", "위 두 항목 미해당"],
                    ] as const).map(([val, label, sub]) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => onUpdate({ welfareStatus: val as WelfareStatus })}
                        className={`text-left px-4 py-3 rounded-xl border transition-all ${
                          profile.welfareStatus === val
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : "border-gray-200 bg-white hover:border-emerald-400"
                        }`}
                      >
                        <div className="text-sm font-semibold">{label}</div>
                        <div className={`text-xs mt-0.5 ${profile.welfareStatus === val ? "text-emerald-100" : "text-gray-400"}`}>{sub}</div>
                      </button>
                    ))}
                  </div>
                  <HintBox>
                    수급자 구분에 따라 의료급여, 에너지 바우처, 교육급여 등 수십 가지 추가 혜택이 달라집니다.
                  </HintBox>
                </div>
              )}
            </>
          )}

          {/* ─── 4단계: 주거 상황 ─── */}
          {step === 3 && (
            <>
              <div>
                <SectionLabel>주택 소유 여부</SectionLabel>
                <div className="flex gap-2">
                  <Chip label="무주택 (소유 주택 없음)" selected={profile.housingOwnership === "무주택"}
                    onClick={() => onUpdate({ housingOwnership: "무주택" })} />
                  <Chip label="주택 소유" selected={profile.housingOwnership === "유주택"}
                    onClick={() => onUpdate({ housingOwnership: "유주택" })} />
                </div>
                <HintBox>
                  청년 전세대출, 주거급여, 공공임대주택, 청년 월세 지원은 대부분 무주택자만 신청 가능합니다.
                </HintBox>
              </div>

              <div>
                <SectionLabel>현재 거주 형태</SectionLabel>
                <div className="grid grid-cols-2 gap-2">
                  {(["자가", "전세", "월세", "기타(공공임대 등)"] as HousingType[]).map((t) => (
                    <Chip key={t} label={t} selected={profile.housingType === t}
                      onClick={() => onUpdate({ housingType: t })} />
                  ))}
                </div>
                <HintBox>
                  주거급여는 임차가구(전월세)와 자가가구에 대한 지원 내용이 완전히 다릅니다.
                </HintBox>
              </div>
            </>
          )}

          {/* ─── 5단계: 특수 조건 ─── */}
          {step === 4 && (
            <>
              <div>
                <SectionLabel>장애 여부</SectionLabel>
                <div className="grid grid-cols-1 gap-2">
                  {([
                    ["없음", "장애 없음"],
                    ["경증(구 4~6급)", "경증 장애 (구 4~6급 / 현 장애 정도가 심하지 않은 장애)"],
                    ["중증(구 1~3급)", "중증 장애 (구 1~3급 / 현 장애 정도가 심한 장애)"],
                  ] as [DisabilityGrade, string][]).map(([val, label]) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => onUpdate({ disabilityGrade: val })}
                      className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                        profile.disabilityGrade === val
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "border-gray-200 bg-white hover:border-emerald-400"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <HintBox>
                  장애인 연금은 중증 장애인만, 장애수당은 경증 장애인에게 지급됩니다.
                </HintBox>
              </div>

              <div>
                <SectionLabel>해당되는 특수 조건 <span className="text-gray-400 font-normal">(복수 선택 가능)</span></SectionLabel>
                <div className="grid grid-cols-2 gap-2">
                  {SPECIAL_CONDITIONS.map((cond) => (
                    <Chip
                      key={cond}
                      label={cond}
                      selected={profile.specialConditions.includes(cond)}
                      onClick={() => toggleSpecial(cond)}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-sm text-emerald-800">
                <p className="font-semibold mb-1">✨ 거의 다 됐어요!</p>
                <p className="text-xs leading-relaxed">
                  입력하신 정보를 바탕으로 받을 수 있는 혜택을 정확하게 분류해 드립니다.
                  모든 정보는 내 기기에만 저장되며 외부로 전송되지 않습니다.
                </p>
              </div>
            </>
          )}
        </div>

        {/* 버튼 */}
        <div className="px-5 pb-5 pt-3 flex gap-2 border-t border-gray-100 flex-shrink-0">
          {step > 0 && (
            <button
              type="button"
              onClick={goPrev}
              className="px-5 py-3.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 min-h-[52px]"
            >
              이전
            </button>
          )}
          <button
            type="button"
            onClick={goNext}
            className="flex-1 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold transition-colors min-h-[52px]"
          >
            {step === steps.length - 1 ? "완료 — 맞춤 혜택 보기 🎯" : `다음 단계 (${step + 2}/${steps.length})`}
          </button>
        </div>
      </div>
    </div>
  );
}
