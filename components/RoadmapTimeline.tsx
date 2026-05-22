"use client";

import type { LifecycleCategory, LifecycleStage } from "@/types";

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  { id: "임신출산", label: "임신·출산", ageRange: "임신~0세", minAge: -1, maxAge: 0,   icon: "🤰",    color: "text-pink-600",    bgColor: "bg-pink-50 border-pink-200",       description: "임신부터 출산까지 다양한 지원" },
  { id: "영아",    label: "영아",       ageRange: "0~2세",   minAge: 0,  maxAge: 2,   icon: "👶",    color: "text-rose-600",    bgColor: "bg-rose-50 border-rose-200",       description: "부모급여, 보육료 등 영아 지원" },
  { id: "유아",    label: "유아",       ageRange: "3~6세",   minAge: 3,  maxAge: 6,   icon: "🧒",    color: "text-orange-600",  bgColor: "bg-orange-50 border-orange-200",   description: "유치원·어린이집 무상보육" },
  { id: "아동",    label: "아동",       ageRange: "7~12세",  minAge: 7,  maxAge: 12,  icon: "🧑",    color: "text-amber-600",   bgColor: "bg-amber-50 border-amber-200",     description: "학교 급식, 아동수당 등" },
  { id: "청소년",  label: "청소년",     ageRange: "13~18세", minAge: 13, maxAge: 18,  icon: "🧑‍🎓", color: "text-yellow-600",  bgColor: "bg-yellow-50 border-yellow-200",   description: "교육비, 장학금 지원" },
  { id: "청년",    label: "청년",       ageRange: "19~34세", minAge: 19, maxAge: 34,  icon: "👨‍💻", color: "text-lime-600",    bgColor: "bg-lime-50 border-lime-200",       description: "주거·취업·창업 지원" },
  { id: "장년",    label: "장년",       ageRange: "35~49세", minAge: 35, maxAge: 49,  icon: "👷",    color: "text-emerald-600", bgColor: "bg-emerald-50 border-emerald-200", description: "건강검진, 장애연금 등" },
  { id: "중년",    label: "중년",       ageRange: "50~64세", minAge: 50, maxAge: 64,  icon: "🧑‍🦳", color: "text-teal-600",    bgColor: "bg-teal-50 border-teal-200",       description: "재취업, 사회공헌 지원" },
  { id: "노년",    label: "노년",       ageRange: "65세+",   minAge: 65, maxAge: 150, icon: "👴",    color: "text-cyan-600",    bgColor: "bg-cyan-50 border-cyan-200",       description: "기초연금, 의료·복지 서비스" },
];

// ── SVG 레이아웃 상수 (데스크톱 전용) ───────────────────────────────────────
const VW = 700;
const VH = 480;
const LX = 110;
const RX = 590;
const CX = 350;
const CR = 72;
const RS = 38;

const RY = [85, 200, 315, 430, 465] as const;

const PIN_POS: [number, number][] = [
  [LX, RY[0]], // 0 임신출산
  [RX, RY[0]], // 1 영아
  [RX, RY[1]], // 2 유아
  [LX, RY[1]], // 3 아동
  [LX, RY[2]], // 4 청소년
  [RX, RY[2]], // 5 청년
  [RX, RY[3]], // 6 장년
  [LX, RY[3]], // 7 중년
  [CX, RY[4]], // 8 노년
];

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

const ARROWS = [
  { x: CX, y: RY[0], label: "→" },
  { x: CX, y: RY[1], label: "←" },
  { x: CX, y: RY[2], label: "→" },
  { x: CX, y: RY[3], label: "←" },
] as const;

type StageStatus = "current" | "past" | "future" | "unknown";

function StagePin({
  stage, status, x, y, onClick,
}: {
  stage: LifecycleStage; status: StageStatus; x: number; y: number; onClick: () => void;
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
        transform: "translate(-50%, calc(-100% + 8px))",
      }}
    >
      <div
        className={[
          "rounded-2xl border-2 px-2.5 py-2 text-center shadow-sm transition-all min-w-[72px]",
          isCurrent
            ? "bg-emerald-500 border-emerald-400 shadow-emerald-200 shadow-md"
            : isPast
            ? "bg-gray-100 border-gray-200 opacity-60"
            : `bg-white ${stage.bgColor} group-hover:shadow-md`,
        ].join(" ")}
      >
        {isCurrent && (
          <div className="text-[8px] font-bold text-emerald-100 mb-0.5 tracking-wider">✦ 현재</div>
        )}
        <div className="text-xl mb-0.5 leading-none">{stage.icon}</div>
        <div className={`text-[11px] font-extrabold leading-tight ${isCurrent ? "text-white" : isPast ? "text-gray-400" : stage.color}`}>
          {stage.label}
        </div>
        <div className={`text-[9px] mt-0.5 ${isCurrent ? "text-emerald-100" : "text-gray-400"}`}>
          {stage.ageRange}
        </div>
      </div>
      <div className={`w-px h-3 ${isCurrent ? "bg-emerald-500" : isPast ? "bg-gray-300" : "bg-slate-400"}`} />
      <div className={[
        "w-4 h-4 rounded-full border-2 border-white shadow-md z-10 relative",
        isCurrent ? "bg-emerald-500 ring-2 ring-emerald-300 ring-offset-1" : isPast ? "bg-gray-300" : "bg-slate-500",
      ].join(" ")} />
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
    <section className="py-8 px-4 bg-gray-50" aria-label="생애주기 로드맵">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">생애주기별 복지 로드맵</h2>
        <p className="text-center text-gray-500 text-sm mb-6">각 단계를 탭하면 해당 혜택만 바로 볼 수 있어요</p>

        {/* ── 모바일: 3열 그리드 ─────────────────────────────────────── */}
        <div className="grid grid-cols-3 gap-3 md:hidden">
          {LIFECYCLE_STAGES.map((stage) => {
            const status = getStageStatus(stage);
            const isCurrent = status === "current";
            const isPast = status === "past";
            return (
              <button
                key={stage.id}
                onClick={() => onStageClick(stage.id)}
                className={[
                  "flex flex-col items-center border-2 rounded-2xl p-3 transition-all active:scale-95",
                  isCurrent
                    ? "bg-emerald-500 border-emerald-400 shadow-md shadow-emerald-200"
                    : isPast
                    ? "bg-gray-50 border-gray-200 opacity-60"
                    : `bg-white ${stage.bgColor} hover:shadow-md`,
                ].join(" ")}
                aria-label={`${stage.label} 혜택 보기`}
              >
                <span className="text-2xl mb-1">{stage.icon}</span>
                <span className={`text-xs font-extrabold leading-tight ${isCurrent ? "text-white" : isPast ? "text-gray-400" : stage.color}`}>
                  {stage.label}
                </span>
                <span className={`text-[10px] mt-0.5 ${isCurrent ? "text-emerald-100" : "text-gray-400"}`}>
                  {stage.ageRange}
                </span>
                {isCurrent && <span className="text-[9px] text-emerald-100 font-bold mt-1">✦ 현재</span>}
              </button>
            );
          })}
        </div>

        {/* ── 데스크톱: S커브 스네이크 도로 ──────────────────────────── */}
        <div className="hidden md:block relative w-full" style={{ paddingBottom: `${(VH / VW) * 100}%` }}>
          <svg
            viewBox={`0 0 ${VW} ${VH}`}
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
          >
            <path d={ROAD_D} fill="none" stroke="#0f172a"  strokeWidth={RS + 6} strokeLinecap="round" strokeLinejoin="round" />
            <path d={ROAD_D} fill="none" stroke="#334155"  strokeWidth={RS}     strokeLinecap="round" strokeLinejoin="round" />
            <path d={ROAD_D} fill="none" stroke="#475569"  strokeWidth={RS * 0.35} strokeLinecap="round" strokeLinejoin="round" opacity={0.45} />
            <path d={ROAD_D} fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth={2.5} strokeDasharray="16 10" strokeLinecap="round" />
            {ARROWS.map((a) => (
              <text key={a.y} x={a.x} y={a.y + 7} textAnchor="middle" fontSize={22} fill="rgba(255,255,255,0.16)" fontWeight="bold">
                {a.label}
              </text>
            ))}
            <text x={CX + 30} y={RY[4] + 7} fontSize={20}>🏁</text>
          </svg>

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
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-500">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />현재 단계</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-gray-300 inline-block" />지난 혜택</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-slate-500 inline-block" />앞으로 받을 혜택</span>
          </div>
        )}
      </div>
    </section>
  );
}
