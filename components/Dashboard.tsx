"use client";

import type { UserProfile } from "@/types";

interface Props {
  profile: UserProfile;
  eligibleCount: number;
  possibleCount: number;
  estimatedAnnual: number;
  onEditProfile: () => void;
  onClearProfile: () => void;
}

const TOTAL_STEPS = 5;

const STEP_LABELS = ["기본 정보", "가구 구성", "경제 상황", "주거 상황", "특수 조건"];

function getProfileChips(profile: UserProfile): string[] {
  const chips: string[] = [];
  if (profile.age !== null) chips.push(`만 ${profile.age}세`);
  if (profile.gender) chips.push(profile.gender === "male" ? "남성" : "여성");
  if (profile.region) chips.push(profile.region);
  if (profile.maritalStatus) chips.push(profile.maritalStatus);
  if (profile.householdType) chips.push(profile.householdType);
  if (profile.numberOfChildren !== null) chips.push(`자녀 ${profile.numberOfChildren}명`);
  if (profile.householdSize !== null) chips.push(`${profile.householdSize}인 가구`);
  if (profile.welfareStatus && profile.welfareStatus !== "일반") chips.push(profile.welfareStatus);
  if (profile.incomeLevel === "low") chips.push("저소득");
  else if (profile.incomeLevel === "middle") chips.push("중간소득");
  if (profile.housingOwnership) chips.push(profile.housingOwnership);
  if (profile.housingType) chips.push(profile.housingType);
  if (profile.disabilityGrade && profile.disabilityGrade !== "없음") chips.push("장애인");
  return chips;
}

export default function Dashboard({ profile, eligibleCount, possibleCount, estimatedAnnual, onEditProfile, onClearProfile }: Props) {
  const isComplete = profile.completedSteps >= TOTAL_STEPS;
  const hasBasicInfo = profile.age !== null;
  const chips = getProfileChips(profile);
  const completedPercent = Math.round((profile.completedSteps / TOTAL_STEPS) * 100);
  const remainingSteps = TOTAL_STEPS - profile.completedSteps;

  if (!hasBasicInfo) {
    return (
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-6 mx-4 my-4 max-w-4xl md:mx-auto">
        <div className="text-center space-y-4">
          <div className="text-5xl">🎯</div>
          <h2 className="text-xl font-bold text-gray-800">내 상황에 맞는 복지혜택 찾기</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            나이, 지역, 가구 형태, 소득, 주거 형태 등<br />
            간단한 정보를 입력하면 <strong className="text-emerald-600">지금 받을 수 있는 혜택</strong>만 골라 보여드려요.
          </p>
          <button
            onClick={onEditProfile}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-colors shadow-sm"
          >
            맞춤 혜택 찾기 시작하기 →
          </button>
          <p className="text-xs text-gray-400">로그인 없음 · 개인정보 외부 전송 없음 · 5단계 · 3분 이내</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl p-5 mx-4 my-4 max-w-4xl md:mx-auto shadow-lg">
      {/* 요약 숫자 */}
      <div className="flex items-start justify-between mb-4 gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-emerald-200 text-sm font-medium">맞춤 혜택 분석 결과</p>
          <h2 className="text-2xl font-bold mt-0.5">
            받을 수 있는 혜택{" "}
            <span className="text-yellow-300">{eligibleCount}가지</span>
          </h2>
          {estimatedAnnual > 0 && (
            <div className="mt-2 inline-flex items-center gap-1.5 bg-yellow-400/20 border border-yellow-400/30 rounded-xl px-3 py-1.5">
              <span className="text-yellow-300 text-sm font-bold">💰</span>
              <span className="text-yellow-200 text-sm">
                연간 최대 약{" "}
                <strong className="text-yellow-300 text-base">
                  {estimatedAnnual >= 1000
                    ? `${(estimatedAnnual / 100 / 10).toFixed(0)}천만원`
                    : `${estimatedAnnual}만원`}
                </strong>{" "}
                수혜 추정
              </span>
            </div>
          )}
          {possibleCount > 0 && (
            <p className="text-emerald-200 text-xs mt-1.5">
              추가 조건 확인 시 {possibleCount}가지 더 가능
            </p>
          )}
        </div>
        <div className="bg-white/20 rounded-xl px-4 py-3 text-center flex-shrink-0">
          <div className="text-xs text-emerald-200 mb-0.5">입력 완성도</div>
          <div className="text-3xl font-bold">{completedPercent}%</div>
        </div>
      </div>

      {/* 단계 진행바 */}
      <div className="mb-1">
        <div className="flex gap-1">
          {STEP_LABELS.map((label, i) => (
            <div
              key={label}
              title={label}
              className={`flex-1 h-1.5 rounded-full transition-all duration-500 ${
                i < profile.completedSteps ? "bg-white" : "bg-white/25"
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-emerald-200 mt-1 px-0.5">
          {STEP_LABELS.map((l) => <span key={l} className="flex-1 text-center truncate">{l}</span>)}
        </div>
      </div>

      {/* 프로필 칩 */}
      {chips.length > 0 && (
        <div className="flex flex-wrap gap-1.5 my-4">
          {chips.map((chip) => (
            <span key={chip} className="bg-white/20 text-white text-xs font-medium px-2.5 py-1 rounded-full">
              {chip}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={onEditProfile}
          className="flex-1 bg-white text-emerald-700 font-bold py-2.5 rounded-xl text-sm hover:bg-emerald-50 transition-colors"
        >
          {isComplete ? "✏️ 정보 수정하기" : `📝 정보 추가하기 (${remainingSteps}단계 남음)`}
        </button>
        {!isComplete && (
          <div className="flex-1 bg-yellow-400/90 text-yellow-900 font-bold py-2.5 rounded-xl text-sm text-center flex items-center justify-center">
            ✨ {remainingSteps}단계 더 입력하면 정확도 UP!
          </div>
        )}
      </div>
      <button
        onClick={() => {
          if (confirm("입력한 정보를 모두 초기화할까요?")) onClearProfile();
        }}
        className="w-full mt-2 py-2 text-xs text-emerald-200 hover:text-white transition-colors"
      >
        🗑 내 정보 초기화
      </button>
    </section>
  );
}
