"use client";

import { useState } from "react";
import Link from "next/link";
import AdSlot, { AdSlotHorizontal } from "@/components/AdSlot";

// ── 실업급여 ────────────────────────────────────────────────────
function calcUnemployment(dailyWage: number, workMonths: number) {
  if (!dailyWage || !workMonths) return null;
  const daily = Math.min(Math.round(dailyWage * 0.6), 66000);
  const days = workMonths < 12 ? 120 : workMonths < 36 ? 150 : workMonths < 60 ? 180 : workMonths < 120 ? 210 : 240;
  return { daily, total: daily * days, days };
}

// ── 기초연금 ────────────────────────────────────────────────────
function calcBasicPension(income: number, assets: number, isCouple: boolean) {
  if (income === 0 && assets === 0) return null;
  const incomeRecognition = income + Math.round((assets * 0.04) / 12);
  const threshold = isCouple ? 3680000 : 2130000;
  const maxAmount = isCouple ? 560000 : 334810;
  if (incomeRecognition > threshold) return { monthly: 0, reason: "소득인정액이 선정기준액을 초과하여 수급 대상이 아닙니다." };
  const base = maxAmount - Math.max(0, Math.round((incomeRecognition - threshold * 0.5) * 0.5));
  return { monthly: Math.max(20000, Math.min(maxAmount, base)), reason: `소득인정액 ${incomeRecognition.toLocaleString()}원 기준` };
}

// ── 부모급여 ────────────────────────────────────────────────────
function calcParentalAllowance(ageMonths: number, useNursery: boolean) {
  if (ageMonths < 0 || ageMonths > 23) return null;
  if (ageMonths < 12) return useNursery ? { monthly: 500000, detail: "0세 어린이집 이용 시 바우처 50만원" } : { monthly: 1000000, detail: "0세 가정양육 시 현금 100만원" };
  return useNursery ? { monthly: 150000, detail: "1세 어린이집 이용 시 바우처 15만원" } : { monthly: 500000, detail: "1세 가정양육 시 현금 50만원" };
}

// ── 근로장려금 ──────────────────────────────────────────────────
type HouseholdType = "single" | "one-earner" | "two-earner";
function calcEITC(annualIncome: number, household: HouseholdType) {
  if (!annualIncome) return null;
  const 만 = annualIncome / 10000;
  let amount = 0;
  if (household === "single") {
    if (만 >= 2200) return { amount: 0, reason: "연소득 2,200만원 이상은 대상 아님" };
    if (만 < 900)       amount = Math.round(만 * 165 / 900);
    else if (만 < 1400) amount = 165;
    else                amount = Math.round(165 * (2200 - 만) / 800);
  } else if (household === "one-earner") {
    if (만 >= 3200) return { amount: 0, reason: "연소득 3,200만원 이상은 대상 아님" };
    if (만 < 1400)      amount = Math.round(만 * 285 / 1400);
    else if (만 < 1700) amount = 285;
    else                amount = Math.round(285 * (3200 - 만) / 1500);
  } else {
    if (만 >= 3800) return { amount: 0, reason: "연소득 3,800만원 이상은 대상 아님" };
    if (만 < 1700)      amount = Math.round(만 * 330 / 1700);
    else if (만 < 2200) amount = 330;
    else                amount = Math.round(330 * (3800 - 만) / 1600);
  }
  return { amount: Math.max(0, amount), reason: null };
}

// ── 국민연금 예상 수령액 ─────────────────────────────────────────
function calcNationalPension(monthlyIncome: number, years: number) {
  if (!monthlyIncome || !years) return null;
  // 간이 계산: 소득대체율 40%(40년 기준) 비례
  const monthly = Math.round(monthlyIncome * (years / 40) * 0.4);
  // 최소 20년 미만이면 감액 안내
  const note = years < 10 ? "10년 미만 납입 시 수령 불가 — 반환일시금만 가능" : years < 20 ? "20년 이상 납입 시 노령연금 수령 가능" : null;
  return { monthly, note };
}

// ── 건강보험료 ──────────────────────────────────────────────────
function calcHealthInsurance(monthlyPay: number, isEmployee: boolean, assets: number) {
  if (!monthlyPay) return null;
  if (isEmployee) {
    const health = Math.round(monthlyPay * 0.03545);   // 근로자 부담 3.545%
    const ltc    = Math.round(health * 0.1295);        // 장기요양 12.95%
    return { health, ltc, total: health + ltc, note: "사용자가 동일 금액 추가 부담 (총 7.09%)" };
  } else {
    // 지역가입자: 소득 7.09% + 재산환산점수
    const incomeHealth = Math.round(monthlyPay * 12 * 0.0709 / 12);
    const assetScore   = Math.round((assets / 1000000) * 0.04 / 12 * (208.4 / 1000));
    const health       = incomeHealth + assetScore;
    const ltc          = Math.round(health * 0.1295);
    return { health, ltc, total: health + ltc, note: "재산 점수는 재산금액에 따라 달라집니다" };
  }
}

type Tab = "unemployment" | "pension" | "parental" | "eitc" | "natpension" | "health";

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "unemployment", label: "실업급여",   icon: "💼" },
  { id: "pension",      label: "기초연금",   icon: "👴" },
  { id: "parental",     label: "부모급여",   icon: "👶" },
  { id: "eitc",         label: "근로장려금", icon: "💰" },
  { id: "natpension",   label: "국민연금",   icon: "🏦" },
  { id: "health",       label: "건강보험료", icon: "🏥" },
];

function Toggle({ on, onToggle, label }: { on: boolean; onToggle: () => void; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-gray-700">{label}</span>
      <button onClick={onToggle} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${on ? "bg-emerald-500" : "bg-gray-300"}`}>
        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${on ? "translate-x-6" : "translate-x-1"}`} />
      </button>
    </div>
  );
}

function InputField({ label, value, onChange, placeholder, hint }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; hint?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      <input type="number" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
      {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
    </div>
  );
}

function ResultBox({ children, isError }: { children: React.ReactNode; isError?: boolean }) {
  return (
    <div className={`rounded-2xl p-5 border ${isError ? "bg-red-50 border-red-100" : "bg-emerald-50 border-emerald-200"}`}>
      {children}
    </div>
  );
}

function HowTo({ steps }: { steps: string[] }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-4 text-sm space-y-1 text-gray-600">
      <p className="font-semibold text-gray-800 mb-2">신청 방법</p>
      {steps.map((s, i) => <p key={i}>{i + 1}. {s}</p>)}
    </div>
  );
}

export default function CalculatorPage() {
  const [tab, setTab] = useState<Tab>("unemployment");

  const [uWage, setUWage]       = useState("");
  const [uMonths, setUMonths]   = useState("");

  const [pIncome, setPIncome]   = useState("");
  const [pAssets, setPAssets]   = useState("");
  const [pCouple, setPCouple]   = useState(false);

  const [bMonths, setBMonths]   = useState("");
  const [bNursery, setBNursery] = useState(false);

  const [eIncome, setEIncome]   = useState("");
  const [eHouse, setEHouse]     = useState<HouseholdType>("single");

  const [nIncome, setNIncome]   = useState("");
  const [nYears, setNYears]     = useState("");

  const [hPay, setHPay]         = useState("");
  const [hEmployee, setHEmployee] = useState(true);
  const [hAssets, setHAssets]   = useState("");

  const uRes  = calcUnemployment(Number(uWage), Number(uMonths));
  const pRes  = calcBasicPension(Number(pIncome), Number(pAssets), pCouple);
  const bRes  = calcParentalAllowance(Number(bMonths), bNursery);
  const eRes  = calcEITC(Number(eIncome), eHouse);
  const nRes  = calcNationalPension(Number(nIncome), Number(nYears));
  const hRes  = calcHealthInsurance(Number(hPay), hEmployee, Number(hAssets));

  return (
    <>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="text-sm text-emerald-600 hover:text-emerald-700">← 홈으로</Link>
          <h1 className="text-2xl font-extrabold text-gray-900 mt-2">복지 수령액 계산기</h1>
          <p className="text-sm text-gray-500 mt-1">내 조건에 맞는 복지급여를 간단히 계산해보세요. (참고용이며 실제 수령액과 차이가 있을 수 있습니다)</p>
        </div>

        <AdSlotHorizontal slot="3000000001" />

        {/* 탭 — 가로 스크롤 */}
        <div className="flex gap-2 overflow-x-auto pb-1 mt-4 mb-6" style={{ scrollbarWidth: "none" }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                tab === t.id ? "bg-emerald-600 text-white shadow" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* ── 실업급여 ───────────────────────────────────── */}
        {tab === "unemployment" && (
          <div className="space-y-5">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-sm text-blue-700">
              퇴직 전 3개월 평균 일급의 <strong>60%</strong>, 최대 <strong>66,000원/일</strong>로 계산됩니다.
            </div>
            <InputField label="퇴직 전 하루 평균 임금 (원)" value={uWage} onChange={setUWage} placeholder="예: 100000" hint="월급 ÷ 30 (월 300만원 → 100,000원)" />
            <InputField label="고용보험 가입 기간 (개월)" value={uMonths} onChange={setUMonths} placeholder="예: 24" />
            {uRes && (
              <ResultBox>
                <h2 className="font-bold text-emerald-800 mb-3">예상 실업급여</h2>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[["1일 수령액", `${uRes.daily.toLocaleString()}원`], ["수급 기간", `${uRes.days}일`], ["총 수령액", `${(uRes.total / 10000).toFixed(0)}만원`]].map(([k, v]) => (
                    <div key={k} className="bg-white rounded-xl p-3"><p className="text-xs text-gray-500">{k}</p><p className="text-lg font-extrabold text-emerald-700">{v}</p></div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">* 이직 확인, 수급자격 인정 등 조건 충족 시 지급됩니다.</p>
              </ResultBox>
            )}
            <HowTo steps={["워크넷(work.go.kr) 구직 등록", "거주지 관할 고용센터 방문 또는 온라인 신청", "수급자격 인정 신청 → 취업특강 수강", "실업인정 신청 (격주 출석)"]} />
          </div>
        )}

        {/* ── 기초연금 ───────────────────────────────────── */}
        {tab === "pension" && (
          <div className="space-y-5">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-sm text-blue-700">
              만 65세 이상, 소득하위 70% 해당 시 최대 <strong>334,810원/월</strong>(단독) 지급됩니다.
            </div>
            <InputField label="월 소득 합계 (원)" value={pIncome} onChange={setPIncome} placeholder="예: 800000" hint="근로·사업·이자·배당 합산" />
            <InputField label="재산 합계 (원)" value={pAssets} onChange={setPAssets} placeholder="예: 100000000" hint="부동산·금융재산 합산 (부채 차감 가능)" />
            <Toggle on={pCouple} onToggle={() => setPCouple(!pCouple)} label={`가구 형태: ${pCouple ? "부부 가구" : "단독 가구"}`} />
            {pRes && (
              <ResultBox isError={pRes.monthly === 0}>
                <h2 className="font-bold text-gray-800 mb-3">예상 기초연금</h2>
                {pRes.monthly > 0 ? (
                  <>
                    <p className="text-3xl font-extrabold text-emerald-700">월 {pRes.monthly.toLocaleString()}원</p>
                    <p className="text-sm text-gray-500 mt-1">{pRes.reason}</p>
                    <p className="text-xs text-gray-400 mt-2">연간 약 {Math.round(pRes.monthly * 12 / 10000)}만원 수령</p>
                  </>
                ) : <p className="text-sm text-red-600">{pRes.reason}</p>}
              </ResultBox>
            )}
            <HowTo steps={["주소지 읍·면·동 주민센터 방문", "복지로(bokjiro.go.kr) 온라인 신청", "국민연금공단 지사 방문"]} />
          </div>
        )}

        {/* ── 부모급여 ───────────────────────────────────── */}
        {tab === "parental" && (
          <div className="space-y-5">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-sm text-blue-700">
              만 0~1세 아이를 키우는 모든 가정에 지급됩니다. 어린이집 이용 여부로 현금/바우처가 달라져요.
            </div>
            <InputField label="아이 나이 (개월 수)" value={bMonths} onChange={setBMonths} placeholder="예: 6" hint="0~23개월 (만 2세부터는 해당 없음)" />
            <Toggle on={bNursery} onToggle={() => setBNursery(!bNursery)} label={`어린이집 이용: ${bNursery ? "이용 중" : "가정 양육"}`} />
            {bRes && (
              <ResultBox>
                <h2 className="font-bold text-emerald-800 mb-3">예상 부모급여</h2>
                <p className="text-3xl font-extrabold text-emerald-700">월 {bRes.monthly.toLocaleString()}원</p>
                <p className="text-sm text-gray-600 mt-1">{bRes.detail}</p>
                <p className="text-xs text-gray-400 mt-2">+ 아동수당 월 100,000원 별도 지급 (만 8세 미만)</p>
              </ResultBox>
            )}
            {bMonths !== "" && Number(bMonths) > 23 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 text-sm text-yellow-700">
                만 2세 이상은 부모급여 지급 대상이 아닙니다. 아동수당(만 8세 미만 월 10만원)은 계속 받을 수 있어요.
              </div>
            )}
            <HowTo steps={["출생신고 시 행복출산 원스톱 서비스 신청", "복지로(bokjiro.go.kr) 온라인 신청", "주소지 읍·면·동 주민센터 방문"]} />
          </div>
        )}

        {/* ── 근로장려금 ─────────────────────────────────── */}
        {tab === "eitc" && (
          <div className="space-y-5">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-sm text-blue-700">
              일하는 저소득 가구에게 연 1회 지급하는 세금 환급형 지원입니다. 가구 유형별로 최대 <strong>165~330만원</strong>까지 받을 수 있어요.
            </div>
            <InputField label="연간 총소득 (원)" value={eIncome} onChange={setEIncome} placeholder="예: 20000000" hint="근로·사업·종교인 소득 합산 (금융소득 2,000만원 초과 시 대상 제외)" />
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">가구 유형</label>
              <div className="grid grid-cols-3 gap-2">
                {([["single", "단독가구", "혼자 사는 가구"], ["one-earner", "홑벌이가구", "배우자·부양가족 있음"], ["two-earner", "맞벌이가구", "부부 모두 소득 있음"]] as const).map(([val, label, desc]) => (
                  <button key={val} onClick={() => setEHouse(val)}
                    className={`p-3 rounded-xl border-2 text-left transition-colors ${eHouse === val ? "border-emerald-500 bg-emerald-50" : "border-gray-200 hover:border-gray-300"}`}>
                    <p className={`text-sm font-bold ${eHouse === val ? "text-emerald-700" : "text-gray-700"}`}>{label}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{desc}</p>
                  </button>
                ))}
              </div>
            </div>
            {eRes && (
              <ResultBox isError={eRes.amount === 0}>
                <h2 className="font-bold text-gray-800 mb-3">예상 근로장려금</h2>
                {eRes.amount > 0 ? (
                  <>
                    <p className="text-3xl font-extrabold text-emerald-700">연 {eRes.amount.toLocaleString()}만원</p>
                    <p className="text-xs text-gray-400 mt-2">* 9월 정기 신청 또는 3월 반기 신청 가능</p>
                  </>
                ) : <p className="text-sm text-red-600">{eRes.reason}</p>}
              </ResultBox>
            )}
            <HowTo steps={["홈택스(hometax.go.kr) 또는 손택스 앱 로그인", "신청/제출 → 근로장려금·자녀장려금 신청", "5월 정기신청 (9월 지급) 또는 3·9월 반기신청"]} />
          </div>
        )}

        {/* ── 국민연금 예상 수령액 ───────────────────────── */}
        {tab === "natpension" && (
          <div className="space-y-5">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-sm text-blue-700">
              소득대체율 40%(40년 기준)을 적용한 <strong>간이 추정치</strong>입니다. 실제 수령액은 국민연금공단에서 확인하세요.
            </div>
            <InputField label="월 평균 소득 (원)" value={nIncome} onChange={setNIncome} placeholder="예: 3000000" hint="국민연금 납부 기간 중 월 평균 소득" />
            <InputField label="납입 예정 기간 (년)" value={nYears} onChange={setNYears} placeholder="예: 30" hint="현재까지 + 앞으로 납입할 기간 합산" />
            {nRes && (
              <ResultBox isError={Number(nYears) < 10}>
                <h2 className="font-bold text-gray-800 mb-3">예상 월 수령액</h2>
                {Number(nYears) >= 10 ? (
                  <>
                    <p className="text-3xl font-extrabold text-emerald-700">월 {nRes.monthly.toLocaleString()}원</p>
                    <p className="text-xs text-gray-400 mt-2">연간 약 {Math.round(nRes.monthly * 12 / 10000)}만원 수령 추정</p>
                    {nRes.note && <p className="text-xs text-yellow-600 mt-1">⚠ {nRes.note}</p>}
                  </>
                ) : <p className="text-sm text-red-600">{nRes.note}</p>}
              </ResultBox>
            )}
            <div className="bg-gray-50 rounded-2xl p-4 text-sm text-gray-600 space-y-1">
              <p className="font-semibold text-gray-800 mb-2">정확한 수령액 확인</p>
              <p>• 국민연금공단 내연금 앱 → 연금 예상액 조회</p>
              <p>• 국민연금 홈페이지(nps.or.kr) → 내 연금 알아보기</p>
              <p>• 콜센터 ☎ 1355 (평일 9시~18시)</p>
            </div>
          </div>
        )}

        {/* ── 건강보험료 ─────────────────────────────────── */}
        {tab === "health" && (
          <div className="space-y-5">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-sm text-blue-700">
              직장가입자는 보수의 <strong>7.09%</strong>(근로자·사용자 반반), 지역가입자는 소득·재산을 합산해 산정합니다.
            </div>
            <Toggle on={hEmployee} onToggle={() => setHEmployee(!hEmployee)} label={`가입 유형: ${hEmployee ? "직장가입자" : "지역가입자"}`} />
            <InputField
              label={hEmployee ? "월 급여 (원)" : "월 소득 (원)"}
              value={hPay} onChange={setHPay}
              placeholder="예: 3000000"
              hint={hEmployee ? "세전 급여 기준" : "연간 소득 ÷ 12"}
            />
            {!hEmployee && (
              <InputField label="재산 합계 (원)" value={hAssets} onChange={setHAssets} placeholder="예: 200000000" hint="부동산·금융재산 합산" />
            )}
            {hRes && (
              <ResultBox>
                <h2 className="font-bold text-emerald-800 mb-3">예상 건강보험료</h2>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[["건강보험", `${hRes.health.toLocaleString()}원`], ["장기요양", `${hRes.ltc.toLocaleString()}원`], ["합계", `${hRes.total.toLocaleString()}원`]].map(([k, v]) => (
                    <div key={k} className="bg-white rounded-xl p-3"><p className="text-xs text-gray-500">{k}</p><p className="font-extrabold text-emerald-700">{v}</p></div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-3">* {hRes.note}</p>
              </ResultBox>
            )}
            <HowTo steps={["국민건강보험공단 홈페이지(nhis.or.kr)", "The 건강보험 앱 → 보험료 조회", "콜센터 ☎ 1577-1000 (평일 9시~18시)"]} />
          </div>
        )}

        <div className="mt-8"><AdSlotHorizontal slot="3000000002" /></div>

        <p className="mt-6 text-center text-xs text-gray-400 leading-relaxed">
          본 계산기는 참고용이며 실제 수령액은 심사 결과에 따라 달라질 수 있습니다.<br />
          정확한 금액은 <a href="https://www.bokjiro.go.kr" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline">복지로</a> 또는 ☎ 129 복지 콜센터에서 확인하세요.
        </p>
      </div>

      <AdSlot slot="3000000003" format="auto" className="max-w-2xl mx-auto px-4 pb-8" />
    </>
  );
}
