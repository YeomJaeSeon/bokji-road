import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "복지 Q&A 게시판 — 기초수급·실업급여·기초연금 궁금한 것 물어보세요",
  description:
    "복지 신청 과정에서 궁금한 것, 헷갈리는 것을 물어보고 답변받으세요. 기초생활수급, 실업급여, 기초연금, 근로장려금 관련 자주 묻는 질문과 답변 모음.",
  keywords: [
    "복지 Q&A", "기초수급 질문", "실업급여 궁금한 점",
    "복지 게시판", "복지 상담", "기초연금 질문",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/community" },
};

const FAQ_REAL = [
  {
    category: "기초생활수급",
    color: "bg-amber-50 border-amber-200",
    tagColor: "bg-amber-100 text-amber-700",
    questions: [
      {
        q: "기초수급자인데 아르바이트를 해도 되나요?",
        a: "네, 가능합니다. 다만 근로소득이 생기면 소득인정액이 올라 생계급여가 그만큼 줄어듭니다. 예를 들어 월 50만원 알바를 하면, 근로소득 공제(30만원+나머지 30%) 후 약 36만원이 소득으로 잡혀 생계급여가 36만원 감소합니다. 일한 만큼 급여가 줄어드는 구조이지만, 일 안 하는 것보다 소득이 늘어나므로 일을 하는 게 유리합니다. 반드시 주민센터에 소득 변동 신고를 해야 합니다.",
      },
      {
        q: "기초수급자가 되면 국민연금은 어떻게 되나요?",
        a: "생계·의료급여 수급자는 국민연금 납부 예외 신청이 가능합니다. 납부 예외 기간도 가입 기간에 포함되지만, 실제 납부 금액이 없으므로 나중에 연금 수령액이 줄어들 수 있습니다. 형편이 되면 임의 계속 납부를 하는 것이 장기적으로 유리합니다.",
      },
      {
        q: "부모님 집에 같이 살면 기초수급 신청이 어렵나요?",
        a: "가구 분리 여부에 따라 다릅니다. 부모님과 함께 주민등록이 되어 있으면 같은 가구로 보아 부모님 소득·재산이 합산됩니다. 다만 혼인한 자녀, 군 복무 중인 자녀 등은 별도 가구로 분리됩니다. 주민센터에서 가구 분리 가능 여부를 먼저 확인하세요.",
      },
    ],
  },
  {
    category: "실업급여",
    color: "bg-blue-50 border-blue-200",
    tagColor: "bg-blue-100 text-blue-700",
    questions: [
      {
        q: "실업급여 받는 동안 알바하면 어떻게 되나요?",
        a: "수급 중 단기 취업(1일 단위 또는 주 15시간 미만)은 고용센터에 신고해야 합니다. 신고한 날에 대해서는 실업급여가 지급되지 않고 수급 기간이 연장됩니다. 신고 없이 일하면 부정 수급으로 전액 반환 + 최대 5배 징수 처분을 받습니다.",
      },
      {
        q: "자발적으로 퇴직했는데 실업급여 못 받나요?",
        a: "원칙적으로 자발적 퇴직은 수급이 어렵지만, 임금 체불 2개월 이상, 직장 내 괴롭힘, 통근 거리 왕복 3시간 이상, 건강상의 이유 등 정당한 사유가 있다면 받을 수 있습니다. 고용센터에서 사실 관계를 증빙하면 됩니다. 일단 신청해보는 것이 좋습니다.",
      },
      {
        q: "실업급여 수급 중 다른 복지혜택도 신청할 수 있나요?",
        a: "가능합니다. 실업급여는 소득으로 잡혀 기초수급 소득인정액에 영향을 줄 수 있지만, 기초연금·아동수당 등은 소득 기준과 무관하게 신청 가능합니다. 실업 기간 중 국민취업지원제도를 병행하면 취업 지원과 수당을 추가로 받을 수 있습니다.",
      },
    ],
  },
  {
    category: "기초연금",
    color: "bg-cyan-50 border-cyan-200",
    tagColor: "bg-cyan-100 text-cyan-700",
    questions: [
      {
        q: "자녀가 집을 사줬는데 기초연금에 영향 있나요?",
        a: "자녀가 부모 명의로 집을 사준 경우, 그 집이 부모 재산으로 잡혀 소득인정액에 영향을 줄 수 있습니다. 다만 기본재산액(대도시 1억3,500만원) 이하라면 영향이 없거나 적습니다. 정확한 계산은 국민연금공단 또는 주민센터에서 확인하세요.",
      },
      {
        q: "국민연금을 많이 받으면 기초연금이 줄어드나요?",
        a: "네, 줄어들 수 있습니다. 국민연금 월 수령액이 기초연금 기준연금액(349,700원)의 150%인 약 524,550원을 초과하면 기초연금이 감액됩니다. 최대 50%까지 감액되지만, 그래도 기초연금을 아예 못 받는 경우는 드뭅니다.",
      },
      {
        q: "기초연금 신청 후 얼마나 기다려야 하나요?",
        a: "신청 후 30일 이내에 수급 여부가 결정됩니다. 조사가 복잡하면 최대 60일까지 연장될 수 있습니다. 수급 자격이 인정되면 신청한 달부터 매월 25일에 지급됩니다. 생일 한 달 전에 미리 신청해두면 만 65세 생일이 속한 달부터 받을 수 있습니다.",
      },
    ],
  },
  {
    category: "근로·자녀장려금",
    color: "bg-emerald-50 border-emerald-200",
    tagColor: "bg-emerald-100 text-emerald-700",
    questions: [
      {
        q: "신청 기간을 놓쳤어요. 어떻게 하나요?",
        a: "5월 31일 이후에도 11월 30일까지 '기한 후 신청'이 가능합니다. 단, 지급액이 10% 감액됩니다. 기한 후 신청은 홈택스(hometax.go.kr)에서 동일하게 할 수 있습니다.",
      },
      {
        q: "프리랜서도 근로장려금을 받을 수 있나요?",
        a: "사업소득(프리랜서 포함)이 있으면 신청 가능합니다. 다만 사업소득은 국세청에 신고된 금액 기준으로 계산되므로, 소득 신고를 먼저 해야 합니다. 소득 신고 없이는 근로장려금을 받을 수 없습니다.",
      },
    ],
  },
  {
    category: "한부모가족 · 장애인",
    color: "bg-purple-50 border-purple-200",
    tagColor: "bg-purple-100 text-purple-700",
    questions: [
      {
        q: "이혼 후 한부모가족 지원 신청까지 시간이 얼마나 걸리나요?",
        a: "이혼 확정 후 바로 주민센터에서 신청할 수 있습니다. 소득·재산 조사 후 약 30일 이내에 결정됩니다. 한부모 인정이 되면 신청한 달부터 지원을 받을 수 있습니다. 이혼 소송 중이더라도 실제 별거 상태라면 일부 혜택은 미리 신청 가능합니다.",
      },
      {
        q: "장애 등록 없이도 장애인 혜택을 받을 수 있나요?",
        a: "아니요, 대부분의 장애인 혜택은 장애인 등록이 완료된 후에 신청할 수 있습니다. 장애 진단 후 주민센터에서 등록을 먼저 하세요. 등록 절차: 주민센터 신청 → 지정 병원 진단 → 국민연금공단 심사 → 장애인 복지카드 발급. 약 1~3개월 소요됩니다.",
      },
    ],
  },
];

export default function CommunityPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-4 flex gap-2">
        <Link href="/" className="hover:text-emerald-600">홈</Link>
        <span>/</span>
        <span className="text-gray-700">복지 Q&A</span>
      </nav>

      <h1 className="text-2xl font-extrabold text-gray-900 mb-1">복지 Q&A</h1>
      <p className="text-sm text-gray-500 mb-2">복지 신청 중 궁금한 것, 실제로 자주 묻는 질문과 답변입니다.</p>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6 text-sm">
        <p className="font-bold text-emerald-800 mb-1">💬 아래 Q&A에 없는 질문이 있다면</p>
        <p className="text-gray-700">
          <a href="tel:129" className="text-emerald-600 font-bold">☎ 129</a>
          {" "}복지 콜센터(무료, 월~금 9~18시)에 전화하면 담당자가 직접 답변해드립니다.
        </p>
      </div>

      <AdSlotHorizontal slot="B001000001" />

      <div className="mt-6 space-y-8">
        {FAQ_REAL.map((cat) => (
          <section key={cat.category}>
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${cat.tagColor}`}>{cat.category}</span>
            </div>
            <div className={`rounded-2xl border p-1 ${cat.color}`}>
              {cat.questions.map((item, i) => (
                <details key={item.q}
                  className={`group ${i < cat.questions.length - 1 ? "border-b border-white/60" : ""}`}>
                  <summary className="flex justify-between items-start gap-3 px-4 py-4 cursor-pointer list-none">
                    <span className="font-semibold text-gray-800 text-sm leading-relaxed">Q. {item.q}</span>
                    <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl flex-shrink-0 mt-0.5">+</span>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed bg-white/60 rounded-xl mx-2 mb-2 p-3">
                    <span className="text-emerald-600 font-bold mr-1">A.</span>{item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      <AdSlotHorizontal slot="B001000002" />

      <section className="mt-8 bg-gray-50 rounded-2xl p-5">
        <h2 className="text-lg font-bold text-gray-800 mb-3">아직 답을 못 찾으셨나요?</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            { icon: "☎", title: "129 복지 콜센터", desc: "무료 전화 상담. 월~금 9~18시", href: "tel:129" },
            { icon: "🌐", title: "복지로 온라인 상담", desc: "bokjiro.go.kr 채팅 상담", href: "https://www.bokjiro.go.kr" },
            { icon: "🏢", title: "주민센터 방문 상담", desc: "가장 정확한 방법. 담당 복지사 배정", href: "/news/how-to-use-bokjiro" },
            { icon: "📖", title: "복지 용어 사전", desc: "용어가 헷갈릴 때 먼저 확인", href: "/guides/welfare-glossary" },
          ].map((item) => (
            <a key={item.title} href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex gap-3 bg-white border border-gray-100 rounded-xl p-3 hover:border-emerald-300 transition-colors">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="font-bold text-gray-800">{item.title}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
