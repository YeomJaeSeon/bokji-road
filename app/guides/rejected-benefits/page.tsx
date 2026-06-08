import type { Metadata } from "next";
import Link from "next/link";
import { AdSlotHorizontal } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "복지혜택 탈락·거부 시 재신청 방법 완벽 가이드 2026 — 이의신청·재심사",
  description:
    "복지 혜택 신청에서 탈락했거나 거부 통보를 받았다면 포기하지 마세요. 탈락 이유 확인, 이의신청 절차, 소득인정액 오류 정정, 행정심판까지 재신청 방법을 완벽하게 안내합니다.",
  keywords: [
    "복지 탈락 재신청", "기초생활수급 탈락", "기초연금 탈락", "복지 이의신청 방법",
    "소득인정액 이의신청", "복지급여 불복", "행정심판 복지", "복지 재심사",
    "복지 거부 이유", "수급자 탈락 후 재신청",
  ],
  alternates: { canonical: "https://bokji-road.vercel.app/guides/rejected-benefits" },
  openGraph: {
    title: "복지혜택 탈락 후 재신청 방법 2026 | 복지로드",
    description: "탈락해도 포기하지 마세요. 이의신청·재심사로 뒤집을 수 있습니다.",
    type: "article", locale: "ko_KR",
    url: "https://bokji-road.vercel.app/guides/rejected-benefits", siteName: "복지로드",
  },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "복지혜택 탈락·거부 시 재신청 방법 완벽 가이드 2026",
  author: { "@type": "Organization", name: "복지로드" },
  publisher: { "@type": "Organization", name: "복지로드", url: "https://bokji-road.vercel.app" },
  url: "https://bokji-road.vercel.app/guides/rejected-benefits",
  inLanguage: "ko", datePublished: "2026-06-01", dateModified: "2026-06-08",
};

const REJECT_REASONS = [
  {
    reason: "소득인정액 초과",
    desc: "가장 흔한 탈락 사유. 소득인정액은 실제 소득뿐 아니라 재산을 소득으로 환산한 금액을 더한 것입니다. 금융재산·자동차·부동산이 모두 포함됩니다.",
    tip: "자동차 생업용 인정, 금융재산 공제(기본 500만원), 부채 차감 등을 적용하면 낮아질 수 있습니다.",
  },
  {
    reason: "부양의무자 기준 위반",
    desc: "기초생활수급 중 생계급여는 부양의무자(직계혈족 및 배우자) 기준이 있습니다. 자녀 소득·재산이 일정 수준을 넘으면 탈락할 수 있습니다.",
    tip: "의료급여·주거급여·교육급여는 부양의무자 기준이 폐지됐거나 완화됐습니다. 생계급여만 탈락했어도 다른 급여는 받을 수 있을 수 있습니다.",
  },
  {
    reason: "재산 평가 오류",
    desc: "주택·토지 공시가격이 실제보다 높게 평가되거나, 공동 소유 재산이 전액 본인 것으로 계산된 경우입니다.",
    tip: "공시가격 이의신청(국토교통부), 공동 소유 지분 입증 서류를 제출하면 재산이 줄어들 수 있습니다.",
  },
  {
    reason: "서류 미비 또는 오기",
    desc: "신청 서류가 부족하거나 소득·재산 신고가 잘못된 경우 자동 탈락 처리됩니다.",
    tip: "탈락 통보서에 기재된 미비 서류를 보완해 재신청하면 됩니다.",
  },
  {
    reason: "신청 기간 경과",
    desc: "실업급여 등 신청 기한이 정해진 급여는 기한이 지나면 받을 수 없습니다.",
    tip: "실업급여는 퇴직 후 12개월, 출산 관련 급여는 출생 후 60일 이내 등 기한을 반드시 확인하세요.",
  },
];

const APPEAL_STEPS = [
  {
    step: 1,
    title: "탈락 통보서 꼼꼼히 확인",
    desc: "탈락 시 반드시 서면 통보를 요청하세요. 탈락 이유, 소득인정액 산정 내역이 상세히 나와 있어야 합니다. 이 서류가 이의신청의 근거가 됩니다.",
    period: "",
  },
  {
    step: 2,
    title: "이의신청 (90일 이내)",
    desc: "처분 통보일로부터 90일 이내에 처분청(주민센터 또는 해당 기관)에 이의신청서를 제출합니다. 별도 비용이 없으며, 구술·서면 모두 가능합니다.",
    period: "처분일로부터 90일 이내",
  },
  {
    step: 3,
    title: "행정심판 (처분일로부터 90일 이내)",
    desc: "이의신청 결과에도 불복하는 경우 행정심판위원회에 행정심판을 청구할 수 있습니다. 온라인 행정심판(simpan.go.kr)에서 신청 가능합니다.",
    period: "처분일로부터 90일 이내 (이의신청과 병행 가능)",
  },
  {
    step: 4,
    title: "행정소송 (처분일로부터 1년 이내)",
    desc: "행정심판으로도 해결이 안 되면 법원에 행정소송을 제기할 수 있습니다. 법률구조공단(132) 무료 법률 상담을 먼저 받으세요.",
    period: "처분일로부터 1년 이내",
  },
];

const REAPPLY_TIPS = [
  {
    title: "소득인정액 감소 후 재신청",
    desc: "자동차 처분, 금융재산 감소, 부채 증가 등으로 소득인정액이 기준 이하로 내려가면 언제든 재신청할 수 있습니다. 기각 후 기다릴 필요가 없습니다.",
  },
  {
    title: "가구원 변동 시 재신청",
    desc: "이혼·별거·가구 분리·사망 등으로 가구 구성이 바뀌면 소득인정액이 달라져 자격이 생길 수 있습니다.",
  },
  {
    title: "기준 변경 시 재신청",
    desc: "정부는 매년 기준 중위소득을 상향 조정합니다. 작년에 탈락했어도 올해 기준으로 자격이 될 수 있으니 매년 1월에 다시 확인하세요.",
  },
  {
    title: "다른 급여로 대체 신청",
    desc: "생계급여 탈락 시 차상위계층 확인서를 받으면 의료비·교육비·통신비 감면 등 다른 혜택을 받을 수 있습니다.",
  },
];

const FAQ = [
  {
    q: "이의신청을 하면 기존 지원이 중단되나요?",
    a: "아닙니다. 이의신청 기간 동안 기존에 받던 급여는 유지됩니다. 신규 신청 탈락의 경우 이의신청 기간에는 지원이 없으나, 이의신청 결과로 인정되면 처분일 이후분을 소급 지급받을 수 있습니다.",
  },
  {
    q: "이의신청 성공률이 얼마나 되나요?",
    a: "분야별로 다르지만 소득인정액 산정 오류, 서류 미비 등 행정 착오 사유는 인용률이 높습니다. 근거 서류를 충분히 갖추어 신청하면 충분히 뒤집을 수 있습니다.",
  },
  {
    q: "소득인정액 계산이 잘못된 것 같은데 어떻게 확인하나요?",
    a: "탈락 통보서의 소득인정액 산정 내역을 요청하세요. 금융재산, 재산 환산액, 공제 내역을 확인하여 오류가 있으면 이의신청 시 입증 서류를 첨부합니다.",
  },
  {
    q: "복지로에서 혼자 이의신청이 어렵습니다",
    a: "129 복지 콜센터(무료)에 전화하면 절차를 안내받을 수 있습니다. 또는 가까운 복지관·희망복지지원단에서 무료 상담과 신청 보조를 받을 수 있습니다.",
  },
];

export default function RejectedBenefitsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-emerald-600">홈</Link><span>/</span>
        <Link href="/guides" className="hover:text-emerald-600">신청 가이드</Link><span>/</span>
        <span className="text-gray-700">복지 탈락 재신청</span>
      </nav>

      <div className="mb-6">
        <span className="text-xs font-bold bg-red-100 text-red-700 px-2.5 py-1 rounded-full">탈락·이의신청</span>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
          복지혜택 탈락해도 포기하지 마세요<br />
          <span className="text-lg font-normal text-gray-500">이의신청·재심사로 뒤집는 완벽 가이드 2026</span>
        </h1>
        <p className="text-xs text-gray-400 mt-2">최종 업데이트: 2026년 6월 · 읽는 시간 약 6분</p>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
        <p className="font-bold text-red-800 mb-1">탈락 통보를 받았다면 이것부터 확인하세요</p>
        <p className="text-sm text-gray-700">복지혜택 탈락은 <strong>끝이 아닙니다.</strong> 소득인정액 산정 오류, 서류 미비, 행정 착오 등으로 탈락한 경우 이의신청을 통해 결과를 뒤집을 수 있습니다. 처분일로부터 90일 이내에 신청해야 합니다.</p>
      </div>

      <AdSlotHorizontal slot="9006000001" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">자주 탈락하는 이유 5가지</h2>
        <div className="space-y-3">
          {REJECT_REASONS.map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                <p className="font-bold text-gray-800">{item.reason}</p>
              </div>
              <p className="text-sm text-gray-600 mb-2">{item.desc}</p>
              <p className="text-xs bg-emerald-50 text-emerald-700 px-3 py-2 rounded-xl">✅ 대응: {item.tip}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">이의신청 절차 (단계별)</h2>
        <div className="space-y-4">
          {APPEAL_STEPS.map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="w-9 h-9 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0">{item.step}</div>
              <div>
                <p className="font-bold text-gray-800 mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.desc}</p>
                {item.period && (
                  <p className="text-xs bg-red-50 text-red-700 px-2.5 py-1 rounded-full inline-block">⏰ {item.period}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdSlotHorizontal slot="9006000002" />

      <section className="mt-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">이의신청 외에 재신청하는 방법</h2>
        <div className="space-y-3">
          {REAPPLY_TIPS.map((item, i) => (
            <div key={i} className="flex gap-3 bg-white border border-gray-100 rounded-xl p-4">
              <span className="text-emerald-500 text-lg flex-shrink-0 mt-0.5">✓</span>
              <div>
                <p className="font-bold text-gray-800 mb-0.5">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-3">자주 묻는 질문</h2>
        <div className="space-y-3">
          {FAQ.map((item) => (
            <details key={item.q} className="bg-gray-50 rounded-xl group">
              <summary className="flex justify-between items-center px-4 py-3 cursor-pointer font-semibold text-gray-800 list-none text-sm">
                Q. {item.q}
                <span className="text-gray-400 group-open:rotate-45 transition-transform text-lg flex-shrink-0 ml-2">+</span>
              </summary>
              <div className="px-4 pb-4 pt-2 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                A. {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
        <p className="font-bold text-emerald-800 mb-3">관련 가이드</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/guides/basic-living-guide" className="text-sm bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">기초생활수급 신청 가이드 →</Link>
          <Link href="/guides/basic-pension-guide" className="text-sm border border-emerald-300 text-emerald-700 font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">기초연금 가이드</Link>
          <Link href="/guides" className="text-sm border border-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">← 가이드 목록</Link>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">☎ 129 복지 콜센터 (무료, 월~금 9~18시) · 법률구조공단 ☎ 132 (무료 법률 상담)</p>
    </article>
  );
}
