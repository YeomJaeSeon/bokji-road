"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// 공휴일(2026년 주요 공휴일) - 지급일이 공휴일이면 전날 지급
const HOLIDAYS_2026 = new Set([
  "2026-01-01", "2026-02-17", "2026-02-18", "2026-02-19",
  "2026-03-01", "2026-05-05", "2026-05-25", "2026-06-06",
  "2026-08-15", "2026-09-24", "2026-09-25", "2026-09-26",
  "2026-10-03", "2026-10-09", "2026-12-25",
]);

function isWeekend(date: Date) {
  const d = date.getDay();
  return d === 0 || d === 6;
}

function toDateStr(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function getPrevWorkday(year: number, month: number, day: number): Date {
  let date = new Date(year, month - 1, day);
  while (isWeekend(date) || HOLIDAYS_2026.has(toDateStr(date))) {
    date.setDate(date.getDate() - 1);
  }
  return date;
}

function formatDate(date: Date) {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  return `${date.getMonth() + 1}월 ${date.getDate()}일 (${days[date.getDay()]})`;
}

function getDaysUntil(date: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  if (diff < 0) return { label: "이미 지급됨", color: "text-gray-400" };
  if (diff === 0) return { label: "오늘 지급!", color: "text-red-600 font-extrabold" };
  if (diff <= 3) return { label: `D-${diff} (곧 지급)`, color: "text-red-500 font-bold" };
  return { label: `D-${diff}`, color: "text-emerald-600 font-semibold" };
}

const BENEFIT_DATES: {
  name: string;
  icon: string;
  color: string;
  day: number;
  desc: string;
  guide: string;
  tag: string;
}[] = [
  { name: "기초연금", icon: "👴", color: "bg-cyan-50 border-cyan-200", day: 25, desc: "매월 25일 지급 (공휴일·주말이면 전 영업일)", guide: "/guides/basic-pension-guide", tag: "노인" },
  { name: "생계급여", icon: "🍚", color: "bg-red-50 border-red-200", day: 20, desc: "매월 20일 지급 (공휴일·주말이면 전 영업일)", guide: "/guides/basic-living-guide", tag: "기초수급" },
  { name: "주거급여", icon: "🏠", color: "bg-blue-50 border-blue-200", day: 20, desc: "매월 20일 지급 (임차급여)", guide: "/guides/basic-living-guide", tag: "기초수급" },
  { name: "부모급여 / 아동수당", icon: "👶", color: "bg-pink-50 border-pink-200", day: 25, desc: "매월 25일 지급 (공휴일·주말이면 전 영업일)", guide: "/guides/parental-allowance-guide", tag: "영아" },
  { name: "장애인연금", icon: "♿", color: "bg-purple-50 border-purple-200", day: 20, desc: "매월 20일 지급", guide: "/guides/disability-benefits", tag: "장애인" },
  { name: "한부모 아동양육비", icon: "👩‍👦", color: "bg-rose-50 border-rose-200", day: 20, desc: "매월 20일 지급", guide: "/guides/single-parent", tag: "한부모" },
  { name: "노인 일자리 활동비", icon: "👔", color: "bg-emerald-50 border-emerald-200", day: 25, desc: "매월 25일 전후 (기관별 상이)", guide: "/guides/elderly-benefits", tag: "노인" },
];

export default function PaymentDatesPage() {
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);

  useEffect(() => {
    const now = new Date();
    setYear(now.getFullYear());
    setMonth(now.getMonth() + 1);
  }, []);

  if (!year) return null;

  const paymentDates = BENEFIT_DATES.map((b) => {
    const payDate = getPrevWorkday(year, month, b.day);
    const nextMonth = month === 12 ? 1 : month + 1;
    const nextYear = month === 12 ? year + 1 : year;
    const nextPayDate = getPrevWorkday(nextYear, nextMonth, b.day);
    const { label, color } = getDaysUntil(payDate);
    return { ...b, payDate, nextPayDate, dLabel: label, dColor: color };
  });

  const upcoming = paymentDates
    .filter(b => {
      const diff = Math.ceil((b.payDate.getTime() - new Date().setHours(0,0,0,0)) / 86400000);
      return diff >= 0;
    })
    .sort((a, b) => a.payDate.getTime() - b.payDate.getTime());

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-4 flex gap-2">
        <Link href="/" className="hover:text-emerald-600">홈</Link>
        <span>/</span>
        <span className="text-gray-700">급여 수령일</span>
      </nav>

      <h1 className="text-2xl font-extrabold text-gray-900 mb-1">
        {month}월 복지급여 수령일
      </h1>
      <p className="text-sm text-gray-500 mb-2">
        공휴일·주말이면 전 영업일에 지급됩니다. 통장을 확인하세요.
      </p>

      {/* 월 선택 */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => { if (month === 1) { setMonth(12); setYear(y => y - 1); } else setMonth(m => m - 1); }}
          className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm hover:bg-gray-50">← 이전</button>
        <span className="px-4 py-1.5 bg-emerald-600 text-white rounded-lg text-sm font-bold">{year}년 {month}월</span>
        <button
          onClick={() => { if (month === 12) { setMonth(1); setYear(y => y + 1); } else setMonth(m => m + 1); }}
          className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm hover:bg-gray-50">다음 →</button>
      </div>

      {/* 이번 달 가장 가까운 수령일 강조 */}
      {upcoming.length > 0 && (
        <div className="bg-emerald-600 text-white rounded-2xl p-4 mb-6">
          <p className="text-xs text-emerald-200 mb-1">가장 가까운 수령일</p>
          <p className="text-xl font-extrabold">{upcoming[0].name}</p>
          <p className="text-lg font-bold text-yellow-300">{formatDate(upcoming[0].payDate)}</p>
          <p className={`text-sm mt-1 ${upcoming[0].dLabel === "오늘 지급!" ? "text-yellow-300 font-extrabold" : "text-emerald-200"}`}>
            {upcoming[0].dLabel}
          </p>
        </div>
      )}

      {/* 전체 급여 수령일 목록 */}
      <div className="space-y-3">
        {paymentDates.map((b) => (
          <div key={b.name} className={`rounded-2xl border p-4 ${b.color}`}>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{b.icon}</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-bold text-gray-800">{b.name}</p>
                    <span className="text-xs bg-white px-1.5 py-0.5 rounded-full text-gray-500">{b.tag}</span>
                  </div>
                  <p className="text-lg font-extrabold text-emerald-700 mt-0.5">{formatDate(b.payDate)}</p>
                  <p className="text-xs text-gray-500">{b.desc}</p>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className={`text-sm ${b.dColor}`}>{b.dLabel}</p>
                <Link href={b.guide} className="text-xs text-emerald-600 hover:underline mt-1 block">가이드 →</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 실업급여 안내 */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm">
        <p className="font-bold text-blue-800 mb-1">💼 실업급여 수령일</p>
        <p className="text-gray-700">실업급여는 <strong>실업 인정 신청일로부터 2~3 영업일 후</strong> 지급됩니다. 격주로 실업 인정 신청을 완료한 날 기준입니다.</p>
        <Link href="/guides/unemployment-guide" className="text-blue-600 font-semibold text-xs hover:underline mt-1 block">실업급여 가이드 →</Link>
      </div>

      {/* 근로장려금 안내 */}
      <div className="mt-3 bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-sm">
        <p className="font-bold text-emerald-800 mb-1">💰 근로장려금 지급 일정</p>
        <ul className="text-gray-700 space-y-0.5">
          <li>• 정기신청(5월): <strong>9월 말</strong> 지급</li>
          <li>• 상반기 반기신청(3월): <strong>6월 말</strong> 지급</li>
          <li>• 하반기 반기신청(9월): <strong>12월 말</strong> 지급</li>
        </ul>
        <Link href="/guides/eitc-guide" className="text-emerald-600 font-semibold text-xs hover:underline mt-1 block">근로장려금 가이드 →</Link>
      </div>

      <div className="mt-6 text-center text-xs text-gray-400">
        지급일은 각 기관 사정에 따라 1~2일 변동될 수 있습니다.<br />
        정확한 지급일은 <a href="tel:129" className="text-emerald-600">☎ 129</a> 또는 해당 기관에 문의하세요.
      </div>
    </div>
  );
}
