// FaqSection은 서버 컴포넌트 — JSON-LD 포함, JS 불필요
const faqs = [
  {
    q: "복지혜택 신청은 어디서 하나요?",
    a: "대부분의 정부 복지혜택은 복지로(bokjiro.go.kr), 정부24(gov.kr), 또는 주민센터(행정복지센터)에서 신청할 수 있습니다. 출산 관련 혜택은 출생신고 시 주민센터에서 '행복출산 원스톱 서비스'로 한 번에 신청 가능합니다.",
  },
  {
    q: "기초연금은 누가 받을 수 있나요?",
    a: "기초연금은 만 65세 이상이고 소득인정액이 선정기준액(2026년 기준: 단독 247만원, 부부 395.2만원) 이하인 어르신이 받을 수 있습니다. 월 최대 349,700원(단독 기준)이 지급되며, 주민센터 또는 국민연금공단에서 신청합니다.",
  },
  {
    q: "부모급여는 어린이집을 다녀도 받을 수 있나요?",
    a: "네, 어린이집을 이용해도 부모급여를 받을 수 있습니다. 다만 보육료(어린이집 이용금액)를 제외한 차액만 현금으로 지급됩니다. 0세의 경우 월 100만원 중 보육료를 공제한 차액을 수령합니다.",
  },
  {
    q: "기준 중위소득이란 무엇인가요?",
    a: "기준 중위소득은 정부 복지혜택 수급 자격을 판단하는 기준 소득입니다. 전국 가구를 소득 순서로 나열했을 때 중간값으로, 2026년 기준 1인 가구 256만 4,238원, 4인 가구 649만 4,738원입니다. 생계급여(30%), 의료급여(40%), 주거급여(48%), 교육급여(50%) 등 급여별로 기준이 다릅니다.",
  },
  {
    q: "차상위계층이란 무엇인가요?",
    a: "차상위계층은 기초생활수급자는 아니지만 소득인정액이 기준 중위소득의 50% 이하인 저소득 가구를 의미합니다. 차상위계층으로 인정되면 의료비 감면, 에너지 바우처, 교육비 지원, 문화누리카드 등 다양한 추가 혜택을 받을 수 있습니다.",
  },
  {
    q: "청년월세 특별지원은 어떻게 신청하나요?",
    a: "청년월세 특별지원은 만 19~34세 독립 거주 청년 중 소득·재산 기준을 충족하는 분께 월 최대 20만원을 12개월간 지원합니다. 복지로(bokjiro.go.kr) 또는 주민센터에서 신청 가능하며, 무주택·보증금 5,000만원 이하·월세 70만원 이하 조건을 충족해야 합니다.",
  },
  {
    q: "장애인연금과 장애수당의 차이는 무엇인가요?",
    a: "장애인연금은 만 18세 이상 중증(구 1~3급) 장애인에게 지급되며, 2026년 기준 기초급여 최대 349,700원에 부가급여 9만원을 더해 월 최대 439,700원을 받을 수 있습니다. 장애수당은 경증(구 4~6급) 장애인에게 월 4~6만원이 지급되는 별도 제도입니다.",
  },
  {
    q: "실업급여는 얼마나 받을 수 있나요?",
    a: "실업급여(구직급여)는 퇴직 전 3개월 평균 임금의 60%를 지급하며, 2026년 기준 1일 상한액은 68,100원입니다. 고용보험 가입 기간과 나이에 따라 90~270일간 지급됩니다. 자발적 퇴직이나 귀책사유가 있는 해고는 지급 제한이 있습니다.",
  },
  {
    q: "복지혜택 신청 시 필요한 서류는 무엇인가요?",
    a: "혜택별로 다르지만 공통적으로 신분증(주민등록증 또는 운전면허증), 주민등록등본(또는 가족관계증명서), 통장 사본이 필요합니다. 소득·재산 조사가 필요한 급여는 금융정보 제공 동의서가 추가됩니다. 각 혜택 상세 페이지에서 필요 서류를 확인하세요.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function FaqSection() {
  return (
    <section className="bg-gray-50 border-t border-gray-100 py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-2 text-center">
          복지혜택 자주 묻는 질문
        </h2>
        <p className="text-gray-500 text-sm text-center mb-8">
          복지혜택 신청 시 가장 많이 궁금해하는 질문들을 모았습니다.
        </p>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm group"
            >
              <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer font-semibold text-gray-800 list-none">
                <span className="flex gap-2 items-start">
                  <span className="text-emerald-600 flex-shrink-0 mt-0.5">Q.</span>
                  <span>{q}</span>
                </span>
                <span className="text-gray-400 flex-shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  <span className="text-emerald-600 font-bold mr-1">A.</span>
                  {a}
                </p>
              </div>
            </details>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
          더 자세한 정보는{" "}
          <a href="https://www.bokjiro.go.kr" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
            복지로(bokjiro.go.kr)
          </a>
          {" "}또는{" "}
          <a href="tel:129" className="text-emerald-600 font-bold">☎ 129</a>
          {" "}로 문의하세요.
        </p>
      </div>
    </section>
  );
}
