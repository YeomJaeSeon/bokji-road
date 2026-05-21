"use client";

import type { LifecycleCategory, LifecycleStage } from "@/types";

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    id: "임신출산",
    label: "임신·출산",
    ageRange: "임신~0세",
    minAge: -1,
    maxAge: 0,
    icon: "🤰",
    color: "text-pink-600",
    bgColor: "bg-pink-50 border-pink-200",
    description: "임신부터 출산까지 다양한 지원",
  },
  {
    id: "영아",
    label: "영아",
    ageRange: "0~2세",
    minAge: 0,
    maxAge: 2,
    icon: "👶",
    color: "text-rose-600",
    bgColor: "bg-rose-50 border-rose-200",
    description: "부모급여, 보육료 등 영아 지원",
  },
  {
    id: "유아",
    label: "유아",
    ageRange: "3~6세",
    minAge: 3,
    maxAge: 6,
    icon: "🧒",
    color: "text-orange-600",
    bgColor: "bg-orange-50 border-orange-200",
    description: "유치원·어린이집 무상보육",
  },
  {
    id: "아동",
    label: "아동",
    ageRange: "7~12세",
    minAge: 7,
    maxAge: 12,
    icon: "🧑",
    color: "text-amber-600",
    bgColor: "bg-amber-50 border-amber-200",
    description: "학교 급식, 아동수당 등",
  },
  {
    id: "청소년",
    label: "청소년",
    ageRange: "13~18세",
    minAge: 13,
    maxAge: 18,
    icon: "🧑‍🎓",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50 border-yellow-200",
    description: "교육비, 장학금 지원",
  },
  {
    id: "청년",
    label: "청년",
    ageRange: "19~34세",
    minAge: 19,
    maxAge: 34,
    icon: "👨‍💻",
    color: "text-lime-600",
    bgColor: "bg-lime-50 border-lime-200",
    description: "주거·취업·창업 지원",
  },
  {
    id: "장년",
    label: "장년",
    ageRange: "35~49세",
    minAge: 35,
    maxAge: 49,
    icon: "👷",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 border-emerald-200",
    description: "건강검진, 장애연금 등",
  },
  {
    id: "중년",
    label: "중년",
    ageRange: "50~64세",
    minAge: 50,
    maxAge: 64,
    icon: "🧑‍🦳",
    color: "text-teal-600",
    bgColor: "bg-teal-50 border-teal-200",
    description: "재취업, 사회공헌 지원",
  },
  {
    id: "노년",
    label: "노년",
    ageRange: "65세+",
    minAge: 65,
    maxAge: 150,
    icon: "👴",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50 border-cyan-200",
    description: "기초연금, 의료·복지 서비스",
  },
];

// 스네이크 로드: 2개씩 묶어서 행 구성
const STAGE_ROWS: number[][] = [
  [0, 1], // 임신출산, 영아  (→)
  [2, 3], // 유아, 아동      (←)
  [4, 5], // 청소년, 청년    (→)
  [6, 7], // 장년, 중년      (←)
  [8],    // 노년            (종착지)
];

interface Props {
  currentStage: LifecycleCategory | null;
  userAge: number | null;
  onStageClick: (stage: LifecycleCategory) => void;
}

type StageStatus = "current" | "past" | "future" | "unknown";

function StagePin({
  stage,
  status,
  onClick,
}: {
  stage: LifecycleStage;
  status: StageStatus;
  onClick: () => void;
}) {
  const isCurrent = status === "current";
  const isPast = status === "past";

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center group transition-all hover:scale-105 active:scale-95 focus:outline-none"
      aria-label={`${stage.label} (${stage.ageRange}) 혜택 보기`}
    >
      {/* 정보 카드 */}
      <div
        className={`
          rounded-2xl border-2 px-3 py-2.5 text-center shadow-sm transition-all
          min-w-[88px] sm:min-w-[104px]
          ${isCurrent
            ? "bg-emerald-500 border-emerald-400 shadow-emerald-200 shadow-md"
            : isPast
            ? "bg-gray-100 border-gray-200 opacity-70"
            : `bg-white ${stage.bgColor} group-hover:shadow-md group-hover:border-opacity-100`}
        `}
      >
        {isCurrent && (
          <div className="text-[9px] font-bold text-emerald-100 mb-1 tracking-wider uppercase">
            ✦ 현재 단계
          </div>
        )}
        <div className="text-2xl mb-1">{stage.icon}</div>
        <div
          className={`text-xs font-extrabold leading-tight ${
            isCurrent ? "text-white" : isPast ? "text-gray-400" : stage.color
          }`}
        >
          {stage.label}
        </div>
        <div
          className={`text-[10px] mt-0.5 ${
            isCurrent ? "text-emerald-100" : "text-gray-400"
          }`}
        >
          {stage.ageRange}
        </div>
      </div>

      {/* 핀 스템 */}
      <div
        className={`w-0.5 h-5 ${
          isCurrent ? "bg-emerald-500" : isPast ? "bg-gray-300" : "bg-slate-400"
        }`}
      />

      {/* 핀 도트 (도로 위) */}
      <div
        className={`
          w-4 h-4 rounded-full border-2 border-white shadow-md z-10 relative
          ${isCurrent
            ? "bg-emerald-500 ring-2 ring-emerald-300 ring-offset-1"
            : isPast
            ? "bg-gray-300"
            : "bg-slate-500"}
        `}
      />
    </button>
  );
}

export default function RoadmapTimeline({ currentStage, userAge, onStageClick }: Props) {
  function getStageStatus(stage: LifecycleStage): StageStatus {
    if (!userAge) return "unknown";
    if (stage.id === currentStage) return "current";
    if (stage.maxAge < (userAge === 0 ? 0 : userAge - 1)) return "past";
    return "future";
  }

  return (
    <section className="py-10 px-4 bg-gray-50" aria-label="생애주기 로드맵">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">
          생애주기별 복지 로드맵
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          각 단계를 탭하면 해당 혜택만 바로 볼 수 있어요
        </p>

        {/* 스네이크 도로 */}
        <div>
          {STAGE_ROWS.map((rowIndices, rowIdx) => {
            const isReversed = rowIdx % 2 === 1;
            const isLastRow = rowIdx === STAGE_ROWS.length - 1;
            const isSingleStage = rowIndices.length === 1;
            // 턴 방향: LTR 행 → 오른쪽 턴, RTL 행 → 왼쪽 턴
            const turnOnRight = !isReversed;

            return (
              <div key={rowIdx}>
                {/* 도로 행 */}
                <div className="relative">
                  {/* 도로 배경 */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-slate-700 rounded-2xl overflow-hidden">
                    {/* 중앙 점선 */}
                    <div className="absolute top-1/2 left-6 right-6 -translate-y-px flex gap-2">
                      {Array.from({ length: 14 }).map((_, i) => (
                        <div key={i} className="flex-1 h-px bg-white/30" />
                      ))}
                    </div>
                    {/* 도로 방향 화살표 */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 text-white/20 text-lg font-bold
                        ${isReversed ? "left-4" : "right-4"}`}
                    >
                      {isReversed ? "←" : "→"}
                    </div>
                  </div>

                  {/* 핀 영역 */}
                  <div
                    className={`
                      relative flex items-end pb-[22px] pt-0 px-6
                      ${isSingleStage ? "justify-center" : isReversed ? "flex-row-reverse justify-between" : "justify-between"}
                    `}
                  >
                    {rowIndices.map((stageIdx) => {
                      const stage = LIFECYCLE_STAGES[stageIdx];
                      return (
                        <StagePin
                          key={stage.id}
                          stage={stage}
                          status={getStageStatus(stage)}
                          onClick={() => onStageClick(stage.id)}
                        />
                      );
                    })}

                    {/* 마지막 행 종착 플래그 */}
                    {isSingleStage && (
                      <div className="absolute right-6 bottom-3 text-xl">🏁</div>
                    )}
                  </div>
                </div>

                {/* 코너 턴 커넥터 */}
                {!isLastRow && (
                  <div
                    className={`flex ${turnOnRight ? "justify-end pr-6" : "justify-start pl-6"}`}
                  >
                    <div
                      className={`
                        w-16 h-9 bg-slate-700
                        ${turnOnRight ? "rounded-br-3xl" : "rounded-bl-3xl"}
                      `}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 범례 (나이 입력 후에만 표시) */}
        {userAge && (
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" /> 현재 단계
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-gray-300 inline-block" /> 지난 혜택
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-slate-500 inline-block" /> 앞으로 받을 혜택
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
