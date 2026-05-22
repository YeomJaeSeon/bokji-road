"use client";

import { useState } from "react";
import Link from "next/link";
import AdSlot, { AdSlotHorizontal } from "@/components/AdSlot";

// ── 실업급여 계산 ──────────────────────────────────────────────
function calcUnemployment(dailyWage: number, workMonths: number): { daily: number; total: number; days: number } | null {
  if (!dailyWage || !workMonths) return null;
  const daily = Math.min(Math.round(dailyWage * 0.6), 66000);
  const days =
    workMonths < 12 ? 120 :
    workMonths < 36 ? 150 :
    workMonths < 60 ? 180 :
    workMonths < 120 ? 210 : 240;
  return { daily, total: daily * days, days };
}

// ── 기초연금 계산 ──────────────────────────────────────────────
function calcBasicPension(income: number, assets: number, isCouple: boolean): { monthly: number; reason: string } | null {
  if (income === 0 && assets === 0) return null;
  const incomeRecognition = income + Math.round(assets * 0.04 / 12);
  const threshold = isCouple ? 3680000 : 2130000;
  const maxAmount = isCouple ? 560000 : 334810;
  if (incomeRecognition > threshold) {
    return { monthly: 0, reason: "소득인정액이 선정기준액을 초과하여 수급 대상이 아닙니다." };
  }
  const base = maxAmount - Math.max(0, Math.round((incomeRecognition - threshold * 0.5) * 0.5));
  const monthly = Math.max(20000, Math.min(maxAmount, base));
  return { monthly, reason: `소득인정액 ${incomeRecognition.toLocaleString()}원 기준` };
}

// ── 부모급여 계산 ──────────────────────────────────────────────
function calcParentalAllowance(ageMonths: number, useNursery: boolean): { monthly: number; detail: string } | null {
  if (ageMonths < 0 || ageMonths > 23) return null;
  if (ageMonths < 12) {
    if (useNursery) return { monthly: 500000, detail: "0세 어린이집 이용 시 바우처 50만원 지급" };
    return { monthly: 1000000, detail: "0세 가정양육 시 현금 100만원 지급" };
  }
  if (useNursery) return { monthly: 150000, detail: "1세 어린이집 이용 시 바우처 15만원 지급" };
  return { monthly: 500000, detail: "1세 가정양육 시 현금 50만원 지급" };
}

type Tab = "unemployment" | "pension" | "parental";

export default function CalculatorPage() {
  const [tab, setTab] = useState<Tab>("unemployment");

  // 실업급여
  const [uDailyWage, setUDailyWage] = useState("");
  const [uWorkMonths, setUWorkMonths] = useState("");
  const uResult = calcUnemployment(Number(uDailyWage), Number(uWorkMonths));

  // 기초연금
  const [pIncome, setPIncome] = useState("");
  const [pAssets, setPAssets] = useState("");
  const [pCouple, setPCouple] = useState(false);
  const pResult = calcBasicPension(Number(pIncome), Number(pAssets), pCouple);

  // 부모급여
  const [babyMonths, setBabyMonths] = useState("");
  const [useNursery, setUseNursery] = useState(false);
  const babyResult = calcParentalAllowance(Number(babyMonths), useNursery);

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "unemployment", label: "실업급여", icon: "💼" },
    { id: "pension", label: "기초연금", icon: "👴" },
    { id: "parental", label: "부모급여", icon: "👶" },
  ];

  return (
    <>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="text-sm text-emerald-600 hover:text-emerald-700">← 홈으로</Link>
          <h1 className="text-2xl font-extrabold text-gray-900 mt-2">복지 수령액 계산기</h1>
          <p className="text-sm text-gray-500 mt-1">내 조건에 맞는 복지급여를 간단히 계산해보세요. (참고용이며 실제 수령액과 차이가 있을 수 있습니다)</p>
        </div>

        <AdSlotHorizontal slot="3000000001" />

        {/* 탭 */}
        <div className="flex gap-2 mb-6 mt-4">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                tab === t.id
                  ? "bg-emerald-600 text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* 실업급여 */}
        {tab === "unemployment" && (
          <div className="space-y-5">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-sm text-blue-700">
              실업급여는 퇴직 전 3개월 평균 일급의 <strong>60%</strong>, 최대 <strong>66,000원/일</strong>로 계산됩니다.
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">퇴직 전 하루 평균 임금 (원)</label>
                <input
                  type="number"
                  value={uDailyWage}
                  onChange={(e) => setUDailyWage(e.target.value)}
                  placeholder="예: 100000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <p className="text-xs text-gray-400 mt-1">월급 ÷ 30으로 계산 (월 300만원 → 100,000원)</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">고용보험 가입 기간 (개월)</label>
                <input
                  type="number"
                  value={uWorkMonths}
                  onChange={(e) => setUWorkMonths(e.target.value)}
                  placeholder="예: 24"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
            </div>

            {uResult && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-3">
                <h2 className="font-bold text-emerald-800 text-base">예상 실업급여</h2>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-white rounded-xl p-3">
                    <p className="text-xs text-gray-500">1일 수령액</p>
                    <p className="text-lg font-extrabold text-emerald-700">{uResult.daily.toLocaleString()}원</p>
                  </div>
                  <div className="bg-white rounded-xl p-3">
                    <p className="text-xs text-gray-500">수급 기간</p>
                    <p className="text-lg font-extrabold text-emerald-700">{uResult.days}일</p>
                  </div>
                  <div className="bg-white rounded-xl p-3">
                    <p className="text-xs text-gray-500">총 수령액</p>
                    <p className="text-lg font-extrabold text-emerald-700">{(uResult.total / 10000).toFixed(0)}만원</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">* 이직 확인, 수급자격 인정 등 조건 충족 시 지급됩니다.</p>
              </div>
            )}

            <div className="bg-gray-50 rounded-2xl p-4 text-sm space-y-1 text-gray-600">
              <p className="font-semibold text-gray-800 mb-2">신청 방법</p>
              <p>1. 워크넷(www.work.go.kr) 구직 등록</p>
              <p>2. 거주지 관할 고용센터 방문 또는 온라인 신청</p>
              <p>3. 수급자격 인정 신청 → 취업특강 수강</p>
              <p>4. 실업인정 신청 (격주 출석)</p>
            </div>
          </div>
        )}

        {/* 기초연금 */}
        {tab === "pension" && (
          <div className="space-y-5">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-sm text-blue-700">
              만 65세 이상, 소득하위 70%에 해당하면 매월 최대 <strong>334,810원</strong>(단독가구) 지급됩니다.
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">월 소득 합계 (원)</label>
                <input
                  type="number"
                  value={pIncome}
                  onChange={(e) => setPIncome(e.target.value)}
                  placeholder="예: 800000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <p className="text-xs text-gray-400 mt-1">근로소득 + 사업소득 + 이자·배당 등 합산</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">재산 합계 (원)</label>
                <input
                  type="number"
                  value={pAssets}
                  onChange={(e) => setPAssets(e.target.value)}
                  placeholder="예: 100000000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <p className="text-xs text-gray-400 mt-1">부동산·금융재산 합산 (부채 차감 가능)</p>
              </div>
              <div className="flex items-center gap-3">
                <label className="text-sm font-semibold text-gray-700">부부 가구 여부</label>
                <button
                  onClick={() => setPCouple(!pCouple)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${pCouple ? "bg-emerald-500" : "bg-gray-300"}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${pCouple ? "translate-x-6" : "translate-x-1"}`} />
                </button>
                <span className="text-sm text-gray-500">{pCouple ? "부부 가구" : "단독 가구"}</span>
              </div>
            </div>

            {pResult && (
              <div className={`rounded-2xl p-5 border ${pResult.monthly > 0 ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-red-100"}`}>
                <h2 className="font-bold text-gray-800 text-base mb-3">예상 기초연금</h2>
                {pResult.monthly > 0 ? (
                  <>
                    <p className="text-3xl font-extrabold text-emerald-700">월 {pResult.monthly.toLocaleString()}원</p>
                    <p className="text-sm text-gray-500 mt-1">{pResult.reason}</p>
                    <p className="text-xs text-gray-400 mt-2">연간 약 {Math.round(pResult.monthly * 12 / 10000)}만원 수령</p>
                  </>
                ) : (
                  <p className="text-sm text-red-600">{pResult.reason}</p>
                )}
              </div>
            )}

            <div className="bg-gray-50 rounded-2xl p-4 text-sm space-y-1 text-gray-600">
              <p className="font-semibold text-gray-800 mb-2">신청 방법</p>
              <p>1. 주소지 읍·면·동 주민센터 방문</p>
              <p>2. 복지로(bokjiro.go.kr) 온라인 신청</p>
              <p>3. 국민연금공단 지사 방문</p>
            </div>
          </div>
        )}

        {/* 부모급여 */}
        {tab === "parental" && (
          <div className="space-y-5">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-sm text-blue-700">
              만 0~1세 아이를 키우는 모든 가정에 지급됩니다. 어린이집 이용 여부에 따라 현금 또는 바우처로 지급돼요.
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">아이 나이 (개월 수)</label>
                <input
                  type="number"
                  value={babyMonths}
                  onChange={(e) => setBabyMonths(e.target.value)}
                  placeholder="예: 6"
                  min={0}
                  max={23}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <p className="text-xs text-gray-400 mt-1">0~23개월 (만 2세부터는 해당 없음)</p>
              </div>
              <div className="flex items-center gap-3">
                <label className="text-sm font-semibold text-gray-700">어린이집 이용 여부</label>
                <button
                  onClick={() => setUseNursery(!useNursery)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${useNursery ? "bg-emerald-500" : "bg-gray-300"}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${useNursery ? "translate-x-6" : "translate-x-1"}`} />
                </button>
                <span className="text-sm text-gray-500">{useNursery ? "이용 중" : "가정 양육"}</span>
              </div>
            </div>

            {babyResult !== null && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                <h2 className="font-bold text-emerald-800 text-base mb-3">예상 부모급여</h2>
                <p className="text-3xl font-extrabold text-emerald-700">월 {babyResult.monthly.toLocaleString()}원</p>
                <p className="text-sm text-gray-600 mt-1">{babyResult.detail}</p>
                <p className="text-xs text-gray-400 mt-2">
                  + 아동수당 월 100,000원 별도 지급 (만 8세 미만)
                </p>
              </div>
            )}
            {babyMonths !== "" && Number(babyMonths) > 23 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 text-sm text-yellow-700">
                만 2세(24개월) 이상은 부모급여 지급 대상이 아닙니다. 아동수당(만 8세 미만 월 10만원)은 계속 받을 수 있어요.
              </div>
            )}

            <div className="bg-gray-50 rounded-2xl p-4 text-sm space-y-1 text-gray-600">
              <p className="font-semibold text-gray-800 mb-2">신청 방법</p>
              <p>1. 출생신고 시 행복출산 원스톱 서비스 신청</p>
              <p>2. 복지로(bokjiro.go.kr) 온라인 신청</p>
              <p>3. 주소지 읍·면·동 주민센터 방문</p>
            </div>
          </div>
        )}

        <div className="mt-8">
          <AdSlotHorizontal slot="3000000002" />
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400 leading-relaxed">
            본 계산기는 참고용으로, 실제 수령액은 공단 심사 결과에 따라 달라질 수 있습니다.<br />
            정확한 금액은 <a href="https://www.bokjiro.go.kr" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">복지로</a> 또는 ☎ 129 복지 콜센터에서 확인하세요.
          </p>
        </div>
      </div>

      <AdSlot slot="3000000003" format="auto" className="max-w-2xl mx-auto px-4 pb-8" />
    </>
  );
}
