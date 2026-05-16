"use client";

import { useRef } from "react";
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

interface Props {
  currentStage: LifecycleCategory | null;
  userAge: number | null;
  onStageClick: (stage: LifecycleCategory) => void;
}

export default function RoadmapTimeline({ currentStage, userAge, onStageClick }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function getStageStatus(stage: LifecycleStage) {
    if (!userAge) return "unknown";
    if (stage.id === currentStage) return "current";
    if (stage.maxAge < (userAge === 0 ? 0 : userAge - 1)) return "past";
    return "future";
  }

  return (
    <section className="py-8 px-4" aria-label="생애주기 로드맵">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">생애주기별 복지 로드맵</h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          각 단계를 클릭하면 해당 혜택을 바로 확인할 수 있어요
        </p>

        {/* 타임라인 — 가로 스크롤 */}
        <div
          ref={scrollRef}
          className="overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex items-center gap-0 min-w-max mx-auto px-4">
            {LIFECYCLE_STAGES.map((stage, index) => {
              const status = getStageStatus(stage);
              return (
                <div key={stage.id} className="flex items-center">
                  {/* 스테이지 카드 */}
                  <button
                    onClick={() => onStageClick(stage.id)}
                    className={`
                      relative flex flex-col items-center gap-2 px-4 py-4 rounded-xl border-2
                      transition-all duration-300 cursor-pointer min-w-[100px] group
                      ${status === "current"
                        ? "border-emerald-500 bg-emerald-50 shadow-lg scale-110 z-10"
                        : status === "past"
                        ? "border-gray-200 bg-gray-50 opacity-60 hover:opacity-80"
                        : status === "future"
                        ? `${stage.bgColor} hover:shadow-md hover:scale-105`
                        : `${stage.bgColor} hover:shadow-md hover:scale-105`
                      }
                    `}
                    aria-label={`${stage.label} (${stage.ageRange}) 단계로 이동`}
                  >
                    {status === "current" && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                        현재 단계
                      </div>
                    )}
                    {status === "past" && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gray-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                        지난 혜택
                      </div>
                    )}
                    {status === "future" && userAge && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-blue-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                        곧 받을 혜택
                      </div>
                    )}
                    <span className="text-3xl">{stage.icon}</span>
                    <div className="text-center">
                      <div className={`text-sm font-bold ${status === "current" ? "text-emerald-700" : status === "past" ? "text-gray-400" : stage.color}`}>
                        {stage.label}
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5">{stage.ageRange}</div>
                    </div>
                  </button>

                  {/* 연결선 */}
                  {index < LIFECYCLE_STAGES.length - 1 && (
                    <div className="w-6 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 flex-shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 범례 */}
        {userAge && (
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-500">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> 현재 단계</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-gray-300 inline-block" /> 이미 지난 혜택</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-blue-400 inline-block" /> 곧 받을 수 있는 혜택</span>
          </div>
        )}
      </div>
    </section>
  );
}
