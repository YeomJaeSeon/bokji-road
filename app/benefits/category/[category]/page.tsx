import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import benefitsData from "@/data/benefits.json";
import type { Benefit } from "@/types";
import AdSlot, { AdSlotHorizontal } from "@/components/AdSlot";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bokji-road.vercel.app";
const allBenefits = benefitsData as Benefit[];

// ── 카테고리별 SEO 메타 정보 ──────────────────────────────────────────────
const CATEGORY_META: Record<string, {
  icon: string;
  ageRange: string;
  headline: string;
  description: string;
  keywords: string[];
  intro: string;
  tips: string[];
  faqs: Array<{ q: string; a: string }>;
}> = {
  임신출산: {
    icon: "🤰",
    ageRange: "임신~출산",
    headline: "임신·출산 정부 지원금 및 복지혜택 2026 총정리",
    description:
      "2026년 임신·출산 시 받을 수 있는 정부 지원금을 총정리했습니다. 첫만남이용권 200만원, 임신 바우처, 산후조리 지원까지 놓치는 혜택 없이 확인하세요.",
    keywords: ["임신 지원금", "출산 지원금", "첫만남이용권", "국민행복카드", "임산부 혜택", "출산 혜택 2026"],
    intro:
      "임신과 출산은 인생의 큰 전환점이자 다양한 정부 지원이 시작되는 시점입니다. 2026년 기준으로 임신 확인 즉시 받을 수 있는 바우처부터, 출산 직후 지급되는 현금 지원까지 놓치는 혜택 없이 챙기는 것이 중요합니다.",
    tips: [
      "임신 확인 즉시 국민행복카드 신청 — 임신·출산 의료비 바우처 자동 충전",
      "출생신고 시 주민센터에서 '행복출산 원스톱 서비스'로 다수의 혜택을 한 번에 신청 가능",
      "첫만남이용권은 출생 후 1년 이내 신청해야 소멸되지 않음",
      "임산부 전용 대중교통·주차 할인 카드도 무료로 발급 가능",
    ],
    faqs: [
      {
        q: "임신 확인 직후 바로 신청할 수 있는 혜택은 무엇인가요?",
        a: "임신 확인서 발급 직후 국민건강보험공단에서 '국민행복카드'를 발급받아 임신·출산 의료비 바우처(100만원, 다태아 140만원)를 받을 수 있습니다. 이 카드로 병원비, 약국, 산후조리원 등에 사용할 수 있습니다.",
      },
      {
        q: "출산 후 첫만남이용권은 얼마나 받을 수 있나요?",
        a: "2026년 기준 첫째 아이는 200만원, 둘째 이상은 300만원이 국민행복카드 바우처로 지급됩니다. 출생신고 후 복지로(bokjiro.go.kr) 또는 주민센터에서 신청하며, 소득 기준 없이 모든 가정이 받을 수 있습니다.",
      },
      {
        q: "산후조리원 비용 지원을 받을 수 있나요?",
        a: "국민행복카드 바우처로 산후조리원 비용의 일부를 지불할 수 있습니다. 또한 저소득층은 '산후조리원 이용권'을 별도로 신청할 수 있으며, 일부 지자체는 추가 산후조리비를 지원합니다.",
      },
    ],
  },

  영아: {
    icon: "👶",
    ageRange: "0~2세",
    headline: "영아(0~2세) 정부 지원금 및 육아 혜택 2026 총정리",
    description:
      "부모급여 월 최대 100만원, 어린이집 보육료 전액 지원 등 0~2세 영아 양육 가정이 받을 수 있는 모든 정부 혜택을 정리했습니다.",
    keywords: ["부모급여", "영아 지원금", "육아 혜택", "보육료 지원", "어린이집 지원", "영아수당 2026"],
    intro:
      "생후 0~23개월의 영아를 양육하는 가정은 부모급여를 매월 현금으로 지원받습니다. 0세는 월 100만원, 1세는 월 50만원으로 어린이집을 이용해도 차액을 현금으로 받을 수 있습니다. 소득과 관계없이 모든 가정이 혜택을 받을 수 있습니다.",
    tips: [
      "출생신고 직후 복지로에서 부모급여 신청 — 매월 25일 지급",
      "어린이집 이용 시 보육료 바우처 + 부모급여 차액 모두 수령 가능",
      "아동수당(월 10만원)도 별도 신청 필요 — 자동으로 지급되지 않음",
      "영아기 필수 예방접종은 보건소·지정 의원에서 전액 무료",
    ],
    faqs: [
      {
        q: "부모급여와 어린이집 보육료 지원을 동시에 받을 수 있나요?",
        a: "네, 동시에 받을 수 있습니다. 어린이집을 이용하면 보육료(0세 514,000원)가 먼저 지원되고, 부모급여(0세 100만원)에서 보육료를 차감한 나머지 금액이 현금으로 지급됩니다. 어린이집을 이용하지 않으면 부모급여 전액을 현금으로 받습니다.",
      },
      {
        q: "부모급여는 언제부터 언제까지 받을 수 있나요?",
        a: "출생 후 24개월까지(생후 0~23개월) 지급됩니다. 0세(0~11개월)에는 월 100만원, 1세(12~23개월)에는 월 50만원이 지급됩니다. 신청은 출생신고 후 60일 이내에 하는 것이 좋으며, 늦게 신청하면 지급 시작이 그만큼 늦어집니다.",
      },
      {
        q: "아동수당은 따로 신청해야 하나요?",
        a: "네, 아동수당은 부모급여와 별도로 신청해야 합니다. 만 9세 미만 모든 아동에게 월 10만원(비수도권 최대 12만원)이 지급되며, 복지로 또는 주민센터에서 신청합니다.",
      },
    ],
  },

  유아: {
    icon: "🧒",
    ageRange: "3~6세",
    headline: "유아(3~6세) 보육비·교육비 지원 혜택 2026 총정리",
    description:
      "만 3~5세 유치원·어린이집 누리과정 학비 월 최대 28만원 지원. 2026년 유아 대상 정부 보육·교육 혜택을 모두 확인하세요.",
    keywords: ["유아 보육료", "누리과정", "유치원 지원금", "어린이집 보육료", "유아학비 지원", "만3세 혜택"],
    intro:
      "만 3~5세 유아는 유치원이든 어린이집이든 소득 기준 없이 누리과정 교육비를 지원받습니다. 국공립·사립 유치원 모두 지원 대상이며, 방과후 과정을 이용할 경우 추가 지원도 받을 수 있습니다.",
    tips: [
      "유치원·어린이집 입학 전 반드시 국민행복카드 발급 — 보육료 바우처 자동 연결",
      "사립 유치원도 누리과정 지원 대상 — 추가 원비 발생 시 사립 추가비 지원 확인",
      "발달 지연 의심 시 만 5세까지 영유아 발달 정밀 검사 무료 제공",
    ],
    faqs: [
      {
        q: "어린이집과 유치원 모두 보육료 지원을 받을 수 있나요?",
        a: "네, 모두 받을 수 있습니다. 어린이집은 0~5세 보육료(3~5세 누리과정 월 28만원), 유치원은 유아학비(월 최대 28만원)를 지원받습니다. 두 지원 모두 국민행복카드로 결제 시 자동 적용됩니다.",
      },
      {
        q: "보육료 지원 외에 추가로 받을 수 있는 혜택이 있나요?",
        a: "아동수당(월 10만원, 만 8세까지)을 계속 받을 수 있으며, 일부 지자체는 유아 통학비, 문화체험비를 추가 지원합니다. 또한 장애 유아는 장애아 보육료(만 5세까지 월 573,000원)가 별도 지원됩니다.",
      },
    ],
  },

  아동: {
    icon: "🧑",
    ageRange: "7~12세",
    headline: "아동(7~12세) 교육비·급식·수당 혜택 2026 총정리",
    description:
      "초등학생 자녀를 둔 가정이 받을 수 있는 무상급식, 아동수당, 교육비 지원을 2026년 기준으로 총정리했습니다.",
    keywords: ["아동수당", "초등학생 지원", "무상급식", "교육비 지원", "방과후 지원", "아동 복지혜택 2026"],
    intro:
      "초등학교 시기 아동은 무상급식, 아동수당, 방과후 학교 지원 등 다양한 혜택을 받을 수 있습니다. 만 8세까지는 아동수당(월 10만원)을 계속 수령하며, 저소득 가정은 교육급여로 학용품·교복비도 지원받습니다.",
    tips: [
      "아동수당은 만 9세 미만(0~8세)까지 지급 — 만 8세 생일 달까지 수령 가능",
      "초등학교 입학 시 저소득층은 교육급여 신청 — 학용품비·급식비 지원",
      "드림스타트 사업: 취약계층 아동에게 맞춤형 통합서비스 제공 (주민센터 문의)",
      "한부모·조손 가정은 아동양육비 추가 지원 신청 가능",
    ],
    faqs: [
      {
        q: "초등학생 무상급식은 모든 학교에서 제공되나요?",
        a: "2026년 기준 전국 초등학교·중학교는 전면 무상급식을 실시합니다. 고등학교는 지자체별로 다르며, 서울·경기 등 대부분의 광역시도에서도 고등학교 무상급식을 시행 중입니다.",
      },
      {
        q: "교육급여는 어떻게 신청하나요?",
        a: "교육급여는 기준 중위소득 50% 이하 가구의 학생에게 지급됩니다. 2026년 기준 초등학생은 연 461,000원의 학용품비를 지원받으며, 복지로(bokjiro.go.kr) 또는 주민센터에서 신청합니다. 매년 3~4월에 집중 신청 기간이 운영됩니다.",
      },
      {
        q: "아동수당이 8세에 끊기는데, 이후 받을 수 있는 혜택이 있나요?",
        a: "아동수당은 만 9세 미만까지 지급되지만, 이후에도 다양한 지원이 계속됩니다. 저소득 가정은 교육급여·의료급여가 계속 지원되며, 다자녀 가정은 다자녀 혜택(교통·문화·요금 감면)을 유지할 수 있습니다.",
      },
    ],
  },

  청소년: {
    icon: "🧑‍🎓",
    ageRange: "13~18세",
    headline: "청소년(13~18세) 교육비·장학금 지원 혜택 2026 총정리",
    description:
      "중·고등학생 자녀를 둔 가정을 위한 교육비, 장학금, 생활 지원 혜택을 2026년 기준으로 정리했습니다.",
    keywords: ["청소년 지원금", "중학생 지원", "고등학생 장학금", "교육비 지원", "한부모 청소년 지원", "청소년 복지"],
    intro:
      "중·고등학교 시기 청소년은 국가장학금 준비 전 단계로, 가정 형편에 따라 교육급여, 급식비, 교복 지원 등을 받을 수 있습니다. 특히 저소득·한부모 가정 청소년은 더 많은 맞춤 지원이 준비되어 있습니다.",
    tips: [
      "중·고교 무상교육 대상 — 입학금·수업료·학교운영지원비 면제",
      "저소득층은 교육급여로 교과서비·급식비 추가 지원",
      "국민기초생활수급자 자녀는 방과후학교 자유수강권 제공",
      "한부모 가정 아동양육비는 만 18세까지 지급",
    ],
    faqs: [
      {
        q: "고등학교도 무상교육인가요?",
        a: "2021년부터 고등학교 무상교육이 전면 시행되어, 입학금·수업료·학교운영지원비·교과서비를 국가가 부담합니다. 단, 사립학교는 일부 학교별 차이가 있을 수 있으며, 학교에 직접 확인하시기 바랍니다.",
      },
      {
        q: "저소득 가정 청소년은 어떤 추가 지원을 받을 수 있나요?",
        a: "기준 중위소득 50% 이하 가정의 청소년은 교육급여(고등학생 연 554,000원)를 받을 수 있습니다. 또한 Wee 클래스, 청소년상담복지센터, 드림스타트 등을 통해 심리·정서 지원도 받을 수 있습니다.",
      },
    ],
  },

  청년: {
    icon: "👨‍💻",
    ageRange: "19~34세",
    headline: "청년(19~34세) 정부 지원금 총정리 2026 — 주거·취업·창업",
    description:
      "2026년 청년이 받을 수 있는 정부 지원금을 총정리. 청년월세 지원 20만원, 청년내일저축계좌, 청년도약계좌, 취업성공패키지까지 놓치지 마세요.",
    keywords: ["청년 지원금 2026", "청년월세지원", "청년도약계좌", "청년내일저축계좌", "취업성공패키지", "청년 복지혜택"],
    intro:
      "19~34세 청년층은 주거, 취업, 창업, 금융 등 다양한 분야에서 정부 지원을 받을 수 있습니다. 특히 2026년에는 청년도약계좌, 청년내일저축계좌, 청년월세 특별지원 등 청년의 자산 형성을 돕는 제도들이 강화되었습니다.",
    tips: [
      "청년도약계좌: 월 최대 70만원 납입 시 정부 기여금 + 이자 제공 (5년 만기)",
      "청년월세 특별지원: 무주택 청년(월세 70만원 이하) 대상 월 최대 20만원 × 12개월",
      "국민취업지원제도: 취업 취약계층 청년에게 월 50만원 구직촉진수당 + 취업 지원",
      "근로장려금: 저소득 청년 근로자는 최대 165만원 지급 (연 1회 신청)",
    ],
    faqs: [
      {
        q: "청년도약계좌와 청년내일저축계좌의 차이는 무엇인가요?",
        a: "청년도약계좌는 월 최대 70만원을 5년간 납입하면 정부 기여금과 이자를 더해 약 5,000만원 목돈을 만드는 중장기 자산 형성 통장입니다. 청년내일저축계좌는 저소득 청년(중위소득 100% 이하)이 3년간 월 10만원 저축 시 정부가 월 10만원을 추가 매칭해 720만원을 적립해주는 제도입니다.",
      },
      {
        q: "청년월세 특별지원 신청 자격은 무엇인가요?",
        a: "만 19~34세, 무주택, 보증금 5,000만원 이하·월세 70만원 이하 주택 거주, 독립 생활 중인 청년이 대상입니다. 소득은 본인 기준 중위소득 60% 이하, 원가구(부모) 기준 중위소득 100% 이하여야 합니다.",
      },
      {
        q: "취업 후 받을 수 있는 청년 혜택은 무엇인가요?",
        a: "중소·중견기업 취업 청년은 청년내일채움공제(2년 근속 시 본인 400만원 + 기업 400만원 + 정부 1,200만원 = 2,000만원)에 가입할 수 있습니다. 또한 고용보험 가입 후 육아휴직급여, 실업급여 등도 수급 자격이 생깁니다.",
      },
    ],
  },

  장년: {
    icon: "👷",
    ageRange: "35~49세",
    headline: "장년(35~49세) 직장인·자영업자 복지혜택 2026 총정리",
    description:
      "35~49세 장년층이 받을 수 있는 건강검진, 고용 지원, 자녀 양육비, 근로장려금 등 정부 복지혜택을 정리했습니다.",
    keywords: ["장년 복지혜택", "35~49세 지원금", "건강검진 지원", "국가건강검진", "근로장려금", "중장년 지원"],
    intro:
      "35~49세 장년층은 일과 가정을 동시에 돌보며, 자녀 교육비와 노부모 부양이 겹치는 시기입니다. 국가건강검진, 근로장려금, 자녀장려금 등 꼭 챙겨야 할 혜택들이 있습니다.",
    tips: [
      "국가건강검진: 만 40세·66세는 생애전환기 건강진단 추가 무료 제공",
      "근로장려금: 연소득 4,400만원 미만 가구는 최대 330만원(맞벌이) 신청 가능",
      "자녀장려금: 자녀 1인당 최대 100만원 — 자녀가 있고 소득 기준 충족 시 신청",
      "고용보험 가입 직장인은 육아휴직급여(월 최대 250만원, 1년) 신청 가능",
    ],
    faqs: [
      {
        q: "국가건강검진은 누구나 받을 수 있나요?",
        a: "직장 건강보험 가입자는 매년, 지역 건강보험 가입자와 피부양자는 2년마다 국가건강검진을 무료로 받을 수 있습니다. 만 40세와 66세는 추가 생애전환기 건강진단이 제공됩니다.",
      },
      {
        q: "근로장려금은 어떻게 신청하나요?",
        a: "근로장려금은 국세청 홈택스(hometax.go.kr) 또는 손택스(모바일 앱)에서 매년 5월에 신청합니다. 연도 중 소득이 발생한 해의 다음 해 5월이 정기 신청 기간이며, 9월에는 상반기분 반기 신청도 가능합니다. 자동 신청 대상자는 안내 문자를 받습니다.",
      },
      {
        q: "육아휴직 중 받을 수 있는 급여는 얼마인가요?",
        a: "2026년 기준 육아휴직급여는 첫 3개월 최대 월 250만원, 이후 6개월 최대 월 200만원, 나머지 기간 월 통상임금의 50%입니다. 부모 모두 육아휴직을 사용하면 3+3 부모 육아휴직제로 각각 첫 3개월 최대 300만원을 받을 수 있습니다.",
      },
    ],
  },

  중년: {
    icon: "🧑‍🦳",
    ageRange: "50~64세",
    headline: "중년(50~64세) 재취업·건강·노후 준비 혜택 2026 총정리",
    description:
      "50~64세 중장년층을 위한 재취업 지원, 건강검진, 노후 준비 정부 혜택을 정리했습니다. 중장년 취업성공패키지, 국민연금 지원 등을 확인하세요.",
    keywords: ["중장년 지원", "50대 지원금", "재취업 지원", "중장년 취업", "노후 준비 지원", "중년 복지혜택"],
    intro:
      "50~64세 중년층은 은퇴 준비와 함께 재취업, 건강관리, 경력 전환이 주요 과제입니다. 정부는 중장년 전문 취업 지원 프로그램과 건강검진, 노후 대비 교육을 제공합니다.",
    tips: [
      "중장년 취업성공패키지: 50세 이상 구직자 대상 취업 컨설팅·훈련·취업 연계",
      "만 50세 이상은 국민취업지원제도 2유형 신청 가능 — 취업 지원 서비스 제공",
      "고용센터 중장년 내일센터: 경력 진단·전직 지원·창업 교육 무료 제공",
      "건강보험료 경감: 퇴직 후 지역가입자 전환 시 피부양자 등록 여부 확인",
    ],
    faqs: [
      {
        q: "50대에 퇴직 후 실업급여를 받을 수 있나요?",
        a: "네, 만 50세 이상 퇴직자는 고용보험 가입 기간에 따라 최대 270일(약 9개월)의 실업급여(구직급여)를 받을 수 있습니다. 자발적 퇴직이 아닌 권고사직·계약 만료 등의 경우 수급이 가능하며, 퇴직 후 신속히 고용센터에 신청하는 것이 중요합니다.",
      },
      {
        q: "중장년 재취업 지원 프로그램은 어디서 신청하나요?",
        a: "고용노동부 고용센터(1350 또는 방문), 중장년 내일센터(서울 등 전국 14개소), 워크넷(work.go.kr)에서 신청할 수 있습니다. 경력 진단, 직업 훈련, 취업 알선까지 무료로 지원합니다.",
      },
    ],
  },

  노년: {
    icon: "👴",
    ageRange: "65세 이상",
    headline: "노인(65세 이상) 복지혜택 총정리 2026 — 기초연금·의료·돌봄",
    description:
      "2026년 만 65세 이상 어르신이 받을 수 있는 기초연금(월 최대 349,700원), 의료급여, 노인장기요양보험, 치매지원 등 모든 혜택을 정리했습니다.",
    keywords: ["기초연금 2026", "노인 복지혜택", "65세 이상 지원금", "노인장기요양", "치매 지원", "독거노인 돌봄"],
    intro:
      "만 65세 이상 어르신은 기초연금, 노인장기요양보험, 노인 의료비 지원, 독거노인 돌봄 서비스 등 다양한 복지 혜택을 받을 수 있습니다. 소득 수준과 건강 상태에 따라 지원 내용이 달라지므로 꼼꼼히 확인하시기 바랍니다.",
    tips: [
      "기초연금: 만 65세 생일이 속한 달 1개월 전부터 신청 가능 — 미리 신청하세요",
      "임플란트·틀니: 만 65세 이상 건강보험 적용, 본인부담 30%",
      "독거 어르신: 노인 맞춤돌봄 서비스 신청 — 주민센터 방문 또는 ☎ 129",
      "치매 진단 후 치매안심센터 등록 시 치료비·돌봄 서비스 연계",
    ],
    faqs: [
      {
        q: "기초연금은 얼마나 받을 수 있나요?",
        a: "2026년 기초연금은 단독 가구 기준 소득인정액 247만원 이하이면 월 최대 349,700원을 받을 수 있습니다. 부부 가구는 각각 20% 감액(최대 559,520원)이 적용됩니다. 저소득 어르신(단독 213만원 이하)은 2026년 하반기부터 월 최대 40만원으로 인상 예정입니다.",
      },
      {
        q: "노인장기요양보험은 어떻게 신청하나요?",
        a: "국민건강보험공단 장기요양 인정 신청을 하면 방문 조사 후 1~5등급 및 인지지원등급을 판정받습니다. 등급을 받으면 재가요양(방문요양·목욕·간호 등) 또는 시설요양(요양원)을 본인부담 15~20%에 이용할 수 있습니다. 신청은 ☎ 1577-1000 또는 공단 지사 방문으로 합니다.",
      },
      {
        q: "치매 진단을 받았는데 어떤 지원을 받을 수 있나요?",
        a: "전국 시·군·구에 있는 치매안심센터에 등록하면 치매 치료관리비(월 최대 36,000원 본인부담 지원), 조호물품 지원, 실종 예방 배회감지기, 쉼터 이용 등 다양한 서비스를 받을 수 있습니다. 또한 노인장기요양보험 인지지원등급을 받아 방문요양 서비스를 이용할 수 있습니다.",
      },
    ],
  },
};

const VALID_CATEGORIES = Object.keys(CATEGORY_META);

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return VALID_CATEGORIES.map((cat) => ({ category: encodeURIComponent(cat) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const decoded = decodeURIComponent(category);
  const meta = CATEGORY_META[decoded];
  if (!meta) return {};
  return {
    title: meta.headline,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: `${SITE_URL}/benefits/category/${encodeURIComponent(decoded)}` },
    openGraph: {
      title: meta.headline,
      description: meta.description,
      type: "article",
      url: `${SITE_URL}/benefits/category/${encodeURIComponent(decoded)}`,
      siteName: "복지로드",
      locale: "ko_KR",
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const decoded = decodeURIComponent(category);
  const meta = CATEGORY_META[decoded];
  if (!meta) notFound();

  const benefits = allBenefits.filter((b) => b.category === decoded);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: meta.headline,
    description: meta.description,
    url: `${SITE_URL}/benefits/category/${encodeURIComponent(decoded)}`,
    hasPart: benefits.map((b) => ({
      "@type": "GovernmentService",
      name: b.name,
      url: `${SITE_URL}/benefits/${b.id}`,
      description: b.seoDescription,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: meta.faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "혜택 목록", item: `${SITE_URL}/#benefits` },
      { "@type": "ListItem", position: 3, name: `${decoded} 혜택`, item: `${SITE_URL}/benefits/category/${encodeURIComponent(decoded)}` },
    ],
  };

  const benefitTypeIcons: Record<string, string> = { 현금: "💰", 현물: "📦", 서비스: "🤝", 감면: "📉" };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* 브레드크럼 */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6" aria-label="breadcrumb">
          <Link href="/" className="hover:text-emerald-600">홈</Link>
          <span>/</span>
          <Link href="/#benefits" className="hover:text-emerald-600">혜택 목록</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">{decoded} 혜택</span>
        </nav>

        {/* 카테고리 헤더 */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{meta.icon}</span>
            <div>
              <p className="text-emerald-200 text-sm font-medium">{meta.ageRange}</p>
              <h1 className="text-2xl font-extrabold leading-tight">{decoded} 복지혜택</h1>
            </div>
          </div>
          <p className="text-emerald-100 text-sm leading-relaxed">{meta.intro}</p>
          <div className="mt-4 flex gap-2 flex-wrap">
            <span className="bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full">
              총 {benefits.length}가지 혜택
            </span>
            <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
              2026년 기준
            </span>
          </div>
        </div>

        {/* 광고: 헤더 아래 */}
        <AdSlotHorizontal slot="2000000010" />

        {/* 꿀팁 */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
          <h2 className="font-bold text-amber-800 mb-3">💡 놓치기 쉬운 꿀팁</h2>
          <ul className="space-y-2">
            {meta.tips.map((tip) => (
              <li key={tip} className="flex gap-2 text-sm text-amber-900">
                <span className="flex-shrink-0 text-amber-500 font-bold mt-0.5">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 혜택 목록 */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          {decoded} 단계 전체 혜택 ({benefits.length}가지)
        </h2>
        <div className="space-y-3 mb-10">
          {benefits.map((benefit) => (
            <Link
              key={benefit.id}
              href={`/benefits/${benefit.id}`}
              className="block bg-white border border-gray-100 rounded-2xl p-4 hover:border-emerald-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 mt-0.5">
                  {benefitTypeIcons[benefit.benefit.type] ?? "📋"}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {benefit.provider}
                    </span>
                    <span className="text-xs text-gray-500">
                      {benefit.benefit.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors">
                    {benefit.name}
                  </h3>
                  <p className="text-sm text-emerald-600 font-semibold mt-1">
                    {benefit.benefit.amount}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {benefit.seoDescription}
                  </p>
                </div>
                <span className="text-gray-300 group-hover:text-emerald-400 transition-colors flex-shrink-0 text-lg">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* 광고: 혜택 목록 아래 */}
        <div className="mb-8">
          <AdSlot slot="2000000011" format="auto" className="w-full" style={{ minHeight: 90 }} />
        </div>

        {/* 맞춤 혜택 CTA */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-10 text-center">
          <p className="text-lg font-bold text-gray-800 mb-2">
            내가 실제로 받을 수 있는 혜택은?
          </p>
          <p className="text-sm text-gray-500 mb-4">
            나이, 소득, 가구 형태를 입력하면 {decoded} 혜택 중 <br className="hidden sm:block" />
            <strong className="text-emerald-600">지금 신청 가능한 것</strong>만 골라드려요
          </p>
          <Link
            href="/?open=form"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-sm"
          >
            맞춤 혜택 찾기 →
          </Link>
          <p className="text-xs text-gray-400 mt-2">로그인 없음 · 기기 저장만 · 3분 이내</p>
        </div>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">자주 묻는 질문</h2>
          <div className="space-y-3">
            {meta.faqs.map(({ q, a }) => (
              <details key={q} className="bg-white border border-gray-100 rounded-2xl shadow-sm group">
                <summary className="flex items-start justify-between gap-3 px-5 py-4 cursor-pointer list-none font-semibold text-gray-800">
                  <span className="flex gap-2">
                    <span className="text-emerald-600 flex-shrink-0">Q.</span>
                    {q}
                  </span>
                  <span className="text-gray-400 flex-shrink-0 group-open:rotate-45 transition-transform duration-200 text-lg">+</span>
                </summary>
                <div className="px-5 pb-5 border-t border-gray-50 pt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <span className="text-emerald-600 font-bold mr-1">A.</span>
                    {a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* 다른 카테고리 네비게이션 */}
        <div className="mt-10">
          <h2 className="text-base font-bold text-gray-700 mb-3">다른 생애주기 혜택 보기</h2>
          <div className="flex flex-wrap gap-2">
            {VALID_CATEGORIES.filter((c) => c !== decoded).map((cat) => (
              <Link
                key={cat}
                href={`/benefits/category/${encodeURIComponent(cat)}`}
                className="text-sm px-3 py-1.5 border border-gray-200 rounded-full text-gray-600 hover:border-emerald-400 hover:text-emerald-700 transition-colors"
              >
                {CATEGORY_META[cat].icon} {cat}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
            ← 전체 혜택 목록으로
          </Link>
        </div>
      </div>
    </>
  );
}
