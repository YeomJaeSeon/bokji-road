import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "복지혜택 신청 캘린더 2026 — 이번 달 놓치면 안 되는 신청",
  description:
    "근로장려금 5월 신청, 에너지바우처 6월, 반기신청 9월... 월별로 놓치면 안 되는 복지혜택 신청 일정을 한눈에 확인하세요.",
  keywords: [
    "복지혜택 신청 기간", "근로장려금 신청 기간", "복지 신청 캘린더",
    "에너지바우처 신청", "이번 달 신청 복지", "복지 신청 마감일",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/calendar" },
};

const MONTHS: {
  month: string;
  label: string;
  isCurrent?: boolean;
  items: { name: string; deadline: string; target: string; link: string; urgent?: boolean }[];
}[] = [
  {
    month: "01~02월",
    label: "1~2월",
    items: [
      { name: "근로·자녀장려금 반기분 정산", deadline: "1월 말 지급 (9월 신청분)", target: "근로장려금 반기 신청자", link: "/guides/eitc-guide" },
      { name: "기초생활수급 연간 재조사", deadline: "1~2월 (담당자 통보)", target: "기존 수급자", link: "/guides/basic-living-guide" },
    ],
  },
  {
    month: "03월",
    label: "3월",
    items: [
      { name: "근로장려금 상반기 반기신청", deadline: "3월 1일 ~ 15일", target: "근로·사업소득자 (반기 희망자)", link: "/guides/eitc-guide", urgent: true },
    ],
  },
  {
    month: "04월",
    label: "4월",
    items: [
      { name: "장애인연금·장애수당 정기 재조사", deadline: "4월 (담당자 연락)", target: "기존 장애인연금 수급자", link: "/guides/disability-benefits" },
    ],
  },
  {
    month: "05월",
    label: "5월",
    isCurrent: true,
    items: [
      { name: "근로장려금·자녀장려금 정기신청", deadline: "5월 1일 ~ 31일", target: "연소득 기준 충족 근로·사업소득자", link: "/guides/eitc-guide", urgent: true },
      { name: "교육급여 학습지원비 신청", deadline: "5월 초 (학교별 공지)", target: "기초수급 학생 (초·중·고)", link: "/guides/low-income-benefits", urgent: true },
      { name: "기초연금 수시 신청 가능", deadline: "연중 수시", target: "만 65세 이상, 소득 기준 이하", link: "/guides/basic-pension-guide" },
    ],
  },
  {
    month: "06월",
    label: "6월",
    items: [
      { name: "에너지바우처 (하절기) 신청", deadline: "6월 중 (지자체 공고 확인)", target: "기초수급자·차상위 65세 이상·장애인 등", link: "/guides/elderly-benefits", urgent: true },
      { name: "청년 월세 특별지원 신청", deadline: "6월 (지자체별 상이)", target: "만 19~34세 독립 거주 청년", link: "/guides/youth-guide" },
    ],
  },
  {
    month: "07~08월",
    label: "7~8월",
    items: [
      { name: "아동수당 지급 확인", deadline: "매월 25일 자동 지급", target: "만 8세 미만 아동 보호자", link: "/guides/baby-money" },
      { name: "한부모가족 수시 신청", deadline: "연중 수시 (소득 변동 시 즉시)", target: "한부모가족", link: "/guides/single-parent" },
    ],
  },
  {
    month: "09월",
    label: "9월",
    items: [
      { name: "근로장려금 하반기 반기신청", deadline: "9월 1일 ~ 15일", target: "근로·사업소득자 (반기 희망자)", link: "/guides/eitc-guide", urgent: true },
      { name: "근로장려금 정기신청 지급", deadline: "9월 말 (5월 신청분 지급)", target: "5월에 신청한 분", link: "/guides/eitc-guide" },
    ],
  },
  {
    month: "10~11월",
    label: "10~11월",
    items: [
      { name: "에너지바우처 (동절기) 신청", deadline: "10~11월 (지자체 공고)", target: "기초수급자·차상위 취약계층", link: "/guides/elderly-benefits", urgent: true },
      { name: "국민연금 임의가입 연말 확인", deadline: "12월 31일까지", target: "소득 없는 전업주부·프리랜서 등", link: "/#benefits" },
    ],
  },
  {
    month: "12월",
    label: "12월",
    items: [
      { name: "근로장려금 반기분 지급", deadline: "12월 말 (9월 신청분)", target: "9월에 반기 신청한 분", link: "/guides/eitc-guide" },
      { name: "내년 기준 중위소득 발표", deadline: "12월 (보건복지부 발표)", target: "기초생활수급 신청 예정자", link: "/guides/basic-living-guide" },
    ],
  },
];

const ALWAYS = [
  { name: "실업급여 (구직급여)", desc: "퇴직 후 12개월 이내 수시 신청", link: "/guides/unemployment-guide" },
  { name: "기초연금", desc: "만 65세 생일 한 달 전부터 수시 신청", link: "/guides/basic-pension-guide" },
  { name: "부모급여·아동수당", desc: "출생신고와 동시에 신청 (출생 60일 이내)", link: "/guides/parental-allowance-guide" },
  { name: "기초생활수급 4대 급여", desc: "소득·재산 기준 충족 시 언제든지 신청", link: "/guides/basic-living-guide" },
  { name: "긴급복지지원", desc: "갑자기 어려워졌을 때 즉시 신청 (☎ 129)", link: "/guides/low-income-benefits" },
  { name: "장애인연금·장애수당", desc: "장애 등록 후 즉시 신청", link: "/guides/disability-benefits" },
];

export default function CalendarPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link>
        <span>/</span>
        <span className="text-gray-700">신청 캘린더</span>
      </nav>

      <h1 className="text-2xl font-extrabold text-gray-900 mb-1">복지혜택 신청 캘린더 2026</h1>
      <p className="text-sm text-gray-500 mb-6">이번 달 놓치면 안 되는 신청을 확인하세요. 기한을 지나면 1년을 더 기다려야 합니다.</p>

      <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-4 mb-8 text-sm">
        <p className="font-bold text-red-800 mb-2">🔴 지금 당장 신청해야 할 것 (6월)</p>
        <div className="space-y-2">
          {MONTHS.find(m => m.month === "06월")?.items.filter(i => i.urgent).map((item) => (
            <Link key={item.name} href={item.link}
              className="flex items-center justify-between bg-white rounded-xl px-4 py-3 hover:border-red-300 border border-gray-100 transition-colors">
              <div>
                <p className="font-bold text-gray-800 text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">{item.deadline} · {item.target}</p>
              </div>
              <span className="text-red-600 font-bold text-xs flex-shrink-0 ml-2">신청 →</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-6 mb-10">
        {MONTHS.map((m) => (
          <section key={m.month} className={`rounded-2xl border p-5 ${m.isCurrent ? "border-emerald-300 bg-emerald-50" : "border-gray-100 bg-white"}`}>
            <h2 className="flex items-center gap-2 font-bold text-gray-800 mb-3">
              <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${m.isCurrent ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-600"}`}>
                {m.label}
              </span>
              {m.isCurrent && <span className="text-xs text-emerald-600 font-bold">← 이번 달</span>}
            </h2>
            <div className="space-y-2">
              {m.items.map((item) => (
                <Link key={item.name} href={item.link}
                  className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-gray-100 hover:border-emerald-300 transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      {item.urgent && <span className="text-xs bg-red-100 text-red-700 font-bold px-1.5 py-0.5 rounded">마감 주의</span>}
                      <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{item.deadline} · {item.target}</p>
                  </div>
                  <span className="text-emerald-600 text-sm flex-shrink-0 ml-2">→</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">연중 수시 신청 가능한 혜택</h2>
        <p className="text-sm text-gray-500 mb-3">기한 없이 언제든 신청할 수 있습니다. 해당된다면 오늘 바로 신청하세요.</p>
        <div className="space-y-2">
          {ALWAYS.map((item) => (
            <Link key={item.name} href={item.link}
              className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-gray-100 hover:border-emerald-300 transition-colors">
              <div>
                <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
              <span className="text-emerald-600 text-sm flex-shrink-0 ml-2">→</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-sm text-gray-700">
        <p className="font-bold text-emerald-800 mb-1">💡 신청 기한을 놓쳤다면</p>
        <p>근로장려금처럼 기한 후 신청이 가능한 경우도 있습니다 (지급액 10% 감액). 기초생활수급·기초연금은 언제든 신청 가능합니다. ☎ 129에 전화하면 현재 신청 가능한 혜택을 안내받을 수 있습니다.</p>
      </div>
    </div>
  );
}
