"use client";

import Link from "next/link";
import type { BenefitWithMatch, MatchStatus } from "@/types";

interface Props {
  benefit: BenefitWithMatch;
}

const matchConfig: Record<MatchStatus, { icon: string; label: string; className: string }> = {
  해당됨: {
    icon: "✅",
    label: "해당됨",
    className: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
  조건확인필요: {
    icon: "🔜",
    label: "조건 확인 필요",
    className: "bg-yellow-100 text-yellow-700 border-yellow-200",
  },
  해당없음: {
    icon: "❌",
    label: "해당 없음",
    className: "bg-red-50 text-red-500 border-red-100",
  },
};

const categoryColors: Record<string, string> = {
  임신출산: "bg-pink-100 text-pink-700",
  영아: "bg-rose-100 text-rose-700",
  유아: "bg-orange-100 text-orange-700",
  아동: "bg-amber-100 text-amber-700",
  청소년: "bg-yellow-100 text-yellow-700",
  청년: "bg-lime-100 text-lime-700",
  장년: "bg-emerald-100 text-emerald-700",
  중년: "bg-teal-100 text-teal-700",
  노년: "bg-cyan-100 text-cyan-700",
};

const benefitTypeIcons: Record<string, string> = {
  현금: "💰",
  현물: "📦",
  서비스: "🤝",
  감면: "📉",
};

export default function BenefitCard({ benefit }: Props) {
  const match = matchConfig[benefit.matchStatus];
  const catColor = categoryColors[benefit.category] ?? "bg-gray-100 text-gray-700";
  const typeIcon = benefitTypeIcons[benefit.benefit.type] ?? "📋";

  return (
    <article
      className={`bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col ${
        benefit.matchStatus === "해당없음" ? "opacity-60" : ""
      }`}
      aria-label={benefit.name}
    >
      {/* 카드 헤더 */}
      <div className="p-4 pb-3 border-b border-gray-50">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex flex-wrap gap-1.5">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${catColor}`}>
              {benefit.category}
            </span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
              {benefit.provider}
            </span>
          </div>
          <span
            className={`flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full border ${match.className}`}
          >
            {match.icon} {match.label}
          </span>
        </div>
        <h3 className="text-base font-bold text-gray-900 leading-snug">{benefit.name}</h3>
      </div>

      {/* 지원 내용 */}
      <div className="p-4 space-y-3 flex-1">
        <div className="flex items-start gap-2">
          <span className="text-lg flex-shrink-0">{typeIcon}</span>
          <div>
            <p className="text-xs text-gray-600 font-medium">지원 내용</p>
            <p className="text-sm font-semibold text-gray-800">{benefit.benefit.amount}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-lg flex-shrink-0">🗓️</span>
          <div>
            <p className="text-xs text-gray-600 font-medium">지원 기간</p>
            <p className="text-sm text-gray-700">{benefit.benefit.duration}</p>
          </div>
        </div>

        {/* SEO용 상세 설명 (일부 노출) */}
        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mt-1">
          {benefit.seoDescription}
        </p>

        {/* 신청 방법 요약 */}
        <div className="bg-gray-50 rounded-xl p-3 mt-2">
          <p className="text-xs font-semibold text-gray-700 mb-1.5">신청 방법 ({benefit.application.method})</p>
          <ol className="space-y-1">
            {benefit.application.steps.map((step, i) => (
              <li key={i} className="flex gap-2 text-xs text-gray-700">
                <span className="flex-shrink-0 w-4 h-4 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* AD SLOT: 각 혜택 카드 하단 — 상세 페이지에서 노출 */}
      </div>

      {/* 버튼 영역 */}
      <div className="p-4 pt-0 flex gap-2">
        <Link
          href={`/benefits/${benefit.id}`}
          className="flex-1 py-3 text-center text-sm font-medium text-emerald-700 border border-emerald-200 rounded-xl hover:bg-emerald-50 transition-colors min-h-[48px] flex items-center justify-center"
        >
          상세 보기
        </Link>
        <a
          href={benefit.application.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 text-center text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors min-h-[48px] flex items-center justify-center"
        >
          바로 신청하기 →
        </a>
      </div>
    </article>
  );
}
