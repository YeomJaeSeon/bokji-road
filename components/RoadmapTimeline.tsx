"use client";

import type { LifecycleCategory, LifecycleStage } from "@/types";

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  { id: "임신출산", label: "임신·출산", ageRange: "임신~0세", minAge: -1, maxAge: 0, icon: "🤰", color: "text-pink-600", bgColor: "bg-pink-50 border-pink-200", description: "임신부터 출산까지 다양한 지원" },
  { id: "영아",   label: "영아",    ageRange: "0~2세",   minAge: 0,  maxAge: 2,   icon: "👶",    color: "text-rose-600",    bgColor: "bg-rose-50 border-rose-200",    description: "부모급여, 보육료 등 영아 지원" },
  { id: "유아",   label: "유아",    ageRange: "3~6세",   minAge: 3,  maxAge: 6,   icon: "🧒",    color: "text-orange-600",  bgColor: "bg-orange-50 border-orange-200",  description: "유치원·어린이집 무상보육" },
  { id: "아동",   label: "아동",    ageRange: "7~12세",  minAge: 7,  maxAge: 12,  icon: "🧑",    color: "text-amber-600",   bgColor: "bg-amber-50 border-amber-200",   description: "학교 급식, 아동수당 등" },
  { id: "청소년", label: "청소년",  ageRange: "13~18세", minAge: 13, maxAge: 18,  icon: "🧑‍🎓", color: "text-yellow-600",  bgColor: "bg-yellow-50 border-yellow-200",  description: "교육비, 장학금 지원" },
  { id: "청년",   label: "청년",    ageRange: "19~34세", minAge: 19, maxAge: 34,  icon: "👨‍💻", color: "text-lime-600",    bgColor: "bg-lime-50 border-lime-200",    description: "주거·취업·창업 지원" },
  { id: "장년",   label: "장년",    ageRange: "35~49세", minAge: 35, maxAge: 49,  icon: "👷",    color: "text-emerald-600", bgColor: "bg-emerald-50 border-emerald-200", description: "건강검진, 장애연금 등" },
  { id: "중년",   label: "중년",    ageRange: "50~64세", minAge: 50, maxAge: 64,  icon: "🧑‍🦳", color: "text-teal-600",    bgColor: "bg-teal-50 border-teal-200",    description: "재취업, 사회공헌 지원" },
  { id: "노년",   label: "노년",    ageRange: "65세+",   minAge: 65, maxAge: 150, icon: "👴",    color: "text-cyan-600",    bgColor: "bg-cyan-50 border-cyan-200",    description: "기초연금, 의료·복지 서비스" },
];

// ── SVG 레이아웃 상수 ──────────────────────────────────────────────────────
const VW = 360;       // SVG viewBox 너비
const VH = 800;       // SVG viewBox 높이
const LX = 80;        // 왼쪽 핀 x
const RX = 280;       // 오른쪽 핀 x
const CX = 180;       // 중앙 핀 x (노년)
const CR = 50;        // 베지어 커브 컨트롤 오프셋
const RS = 44;        // 도로 스트로크 너비

// 각 행의 도로 중심 y
const RY = [110, 270, 430, 590, 730] as const;

// 스네이크 순서에 따른 각 단계의 핀 위치 (LIFECYCLE_STAGES 인덱스와 동일)
const PIN_POS: [number, number][] = [
  [LX, RY[0]], // 0 임신출산 — LTR 시작 (왼쪽)
  [RX, RY[0]], // 1 영아     — LTR 끝   (오른쪽)
  [RX, RY[1]], // 2 유아     — RTL 시작 (오른쪽)
  [LX, RY[1]], // 3 아동     — RTL 끝   (왼쪽)
  [LX, RY[2]], // 4 청소년   — LTR 시작 (왼쪽)
  [RX, RY[2]], // 5 청년     — LTR 끝   (오른쪽)
  [RX, RY[3]], // 6 장년     — RTL 시작 (오른쪽)
  [LX, RY[3]], // 7 중년     — RTL 끝   (왼쪽)
  [CX, RY[4]], // 8 노년     — 종착지   (중앙)
];

// 연속 S커브 스네이크 도로 경로
const ROAD_D = [
  `M ${LX},${RY[0]}`,
  `L ${RX},${RY[0]}`,
  `C ${RX + CR},${RY[0]} ${RX + CR},${RY[1]} ${RX},${RY[1]}`,
  `L ${LX},${RY[1]}`,
  `C ${LX - CR},${RY[1]} ${LX - CR},${RY[2]} ${LX},${RY[2]}`,
  `L ${RX},${RY[2]}`,
  `C ${RX + CR},${RY[2]} ${RX + CR},${RY[3]} ${RX},${RY[3]}`,
  `L ${LX},${RY[3]}`,
  `C ${LX - CR},${RY[3]} ${LX - CR},${RY[4]} ${LX},${RY[4]}`,
  `L ${CX},${RY[4]}`,
].join(" ");

// 각 직선 구간 중앙 방향 화살표
const ARROWS = [
  { x: (LX + RX) / 2, y: RY[0], label: "→" },
  { x: (LX + RX) / 2, y: RY[1], label: "←" },
  { x: (LX + RX) / 2, y: RY[2], label: "→" },
  { x: (LX + RX) / 2, y: RY[3], label: "←" },
] as const;

type StageStatus = "current" | "past" | "future" | "unknown";

function StagePin({
  stage,
  status,
  x,
  y,
  onClick,
}: {
  stage: LifecycleStage;
  status: StageStatus;
  x: number;
  y: number;
  onClick: () => void;
}) {
  const isCurrent = status === "current";
  const isPast = status === "past";

  return (
    <button
      onClick={onClick}
      aria-label={`${stage.label} (${stage.ageRange}) 혜택 보기`}
      className="absolute flex flex-col items-center group hover:scale-105 active:scale-95 transition-transform focus:outline-none"
      style={{
        left: `${(x / VW) * 100}%`,
        top: `${(y / VH) * 100}%`,
        // 핀 도트 중심이 도로 중심선(y)에 오도록 정렬
        transform: "translate(-50%, calc(-100% + 8px))",
      }}
    >
      {/* 카드 */}
      <div
        className={[
          "rounded-2xl border-2 px-2.5 py-2 text-center shadow-sm transition-all min-w-[76px]",
          isCurrent
            ? "bg-emerald-500 border-emerald-400 shadow-emerald-200 shadow-md"
            : isPast
            ? "bg-gray-100 border-gray-200 opacity-60"
            : `bg-white ${stage.bgColor} group-hover:shadow-md`,
        ].join(" ")}
      >
        {isCurrent && (
          <div className="text-[8px] font-bold text-emerald-100 mb-0.5 tracking-wider">
            ✦ 현재
          </div>
        )}
        <div className="text-xl mb-0.5 leading-none">{stage.icon}</div>
        <div
          className={`text-[11px] font-extrabold leading-tight ${
            isCurrent ? "text-white" : isPast ? "text-gray-400" : stage.color
          }`}
        >
          {stage.label}
        </div>
        <div
          className={`text-[9px] mt-0.5 ${
            isCurrent ? "text-emerald-100" : "text-gray-400"
          }`}
        >
          {stage.ageRange}
        </div>
      </div>

      {/* 스템 */}
      <div
        className={`w-px h-4 ${
          isCurrent ? "bg-emerald-500" : isPast ? "bg-gray-300" : "bg-slate-400"
        }`}
      />

      {/* 도트 (도로 위에 놓임) */}
      <div
        className={[
          "w-4 h-4 rounded-full border-2 border-white shadow-md z-10 relative",
          isCurrent
            ? "bg-emerald-500 ring-2 ring-emerald-300 ring-offset-1"
            : isPast
            ? "bg-gray-300"
            : "bg-slate-500",
        ].join(" ")}
      />
    </button>
  );
}

interface Props {
  currentStage: LifecycleCategory | null;
  userAge: number | null;
  onStageClick: (stage: LifecycleCategory) => void;
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
      <div className="max-w-sm mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">
          생애주기별 복지 로드맵
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          각 단계를 탭하면 해당 혜택만 바로 볼 수 있어요
        </p>

        {/* 스네이크 도로 컨테이너 — 가로:세로 비율 고정 */}
        <div className="relative w-full" style={{ paddingBottom: `${(VH / VW) * 100}%` }}>

          {/* SVG 도로 레이어 */}
          <svg
            viewBox={`0 0 ${VW} ${VH}`}
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
          >
            {/* 도로 테두리 (그림자 효과) */}
            <path
              d={ROAD_D}
              fill="none"
              stroke="#0f172a"
              strokeWidth={RS + 6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* 도로 표면 */}
            <path
              d={ROAD_D}
              fill="none"
              stroke="#334155"
              strokeWidth={RS}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* 도로 상단 하이라이트 (입체감) */}
            <path
              d={ROAD_D}
              fill="none"
              stroke="#475569"
              strokeWidth={RS * 0.35}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.45}
            />
            {/* 중앙 점선 */}
            <path
              d={ROAD_D}
              fill="none"
              stroke="rgba(255,255,255,0.28)"
              strokeWidth={2.5}
              strokeDasharray="16 10"
              strokeLinecap="round"
            />
            {/* 방향 화살표 */}
            {ARROWS.map((a) => (
              <text
                key={a.y}
                x={a.x}
                y={a.y + 7}
                textAnchor="middle"
                fontSize={22}
                fill="rgba(255,255,255,0.16)"
                fontWeight="bold"
              >
                {a.label}
              </text>
            ))}
            {/* 종착 플래그 */}
            <text x={CX + 26} y={RY[4] + 7} fontSize={20}>
              🏁
            </text>
          </svg>

          {/* 핀 레이어 — HTML로 절대 위치 */}
          {LIFECYCLE_STAGES.map((stage, i) => {
            const [x, y] = PIN_POS[i];
            return (
              <StagePin
                key={stage.id}
                stage={stage}
                status={getStageStatus(stage)}
                x={x}
                y={y}
                onClick={() => onStageClick(stage.id)}
              />
            );
          })}
        </div>

        {/* 범례 */}
        {userAge && (
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              현재 단계
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-gray-300 inline-block" />
              지난 혜택
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-slate-500 inline-block" />
              앞으로 받을 혜택
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
