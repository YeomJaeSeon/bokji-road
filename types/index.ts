export type LifecycleCategory =
  | "임신출산"
  | "영아"
  | "유아"
  | "아동"
  | "청소년"
  | "청년"
  | "장년"
  | "중년"
  | "노년";

export type HouseholdType =
  | "1인가구"
  | "부부"
  | "한부모"
  | "다자녀"
  | "조손가구";

export type IncomeLevel = "all" | "low" | "middle" | "high";

// 기준 중위소득 % 단계 (복지 판정 실제 기준선과 매핑)
export type IncomeTier =
  | "기초수급자(30%이하)"   // 기초생활보장 생계급여
  | "기초수급자(47%이하)"   // 의료급여
  | "차상위계층(50%이하)"   // 차상위계층
  | "60%이하"              // 주거급여, 청년월세
  | "72%이하"              // 한부모가족
  | "100%이하"             // 일반저소득
  | "120%이하"             // 일부 청년 혜택
  | "150%이하"             // 중간소득
  | "150%초과";            // 고소득

export type BenefitType = "현금" | "현물" | "서비스" | "감면";

export type ApplicationMethod = "온라인" | "방문" | "우편";

export type HousingType = "자가" | "전세" | "월세" | "기타(공공임대 등)";

export type MaritalStatus = "미혼" | "기혼" | "이혼·사별";

export type DisabilityGrade = "없음" | "경증(구 4~6급)" | "중증(구 1~3급)";

export type WelfareStatus = "일반" | "차상위계층" | "기초생활수급자";

export interface Benefit {
  id: string;
  name: string;
  category: LifecycleCategory;
  provider: "중앙정부" | "지방정부";
  region: string[];
  target: {
    minAge: number;
    maxAge: number;
    gender: "all" | "male" | "female";
    householdTypes: HouseholdType[];
    incomeLevel: IncomeLevel;
    incomeTier?: IncomeTier;             // 정밀 소득 기준
    welfareStatus?: WelfareStatus[];      // 수급자 구분
    housingOwnership?: "무주택" | "유주택" | "all"; // 주택 소유
    housingTypes?: HousingType[];         // 주거 형태
    minChildren?: number;                 // 최소 자녀 수
    maritalStatus?: MaritalStatus[];      // 혼인 상태
    employmentInsurance?: boolean;        // 고용보험 가입
    companySize?: ("중소기업" | "중견기업" | "대기업")[]; // 기업 규모
    disabilityGrade?: DisabilityGrade[];  // 장애 등급
    specialConditions: string[];
  };
  benefit: {
    type: BenefitType;
    amount: string;
    duration: string;
  };
  application: {
    method: ApplicationMethod;
    url: string;
    documents: string[];
    steps: string[];
  };
  seoDescription: string;
}

export type MatchStatus = "해당됨" | "조건확인필요" | "해당없음";

export interface BenefitWithMatch extends Benefit {
  matchStatus: MatchStatus;
}

export interface UserProfile {
  // 1단계: 기본 정보
  age: number | null;
  gender: "male" | "female" | null;
  region: string | null;
  district: string | null;

  // 2단계: 가구 구성
  householdType: HouseholdType | null;
  maritalStatus: MaritalStatus | null;
  numberOfChildren: number | null;       // 자녀 수
  householdSize: number | null;          // 가구원 수

  // 3단계: 경제 상황
  employmentStatus: "employed" | "unemployed" | "self-employed" | "student" | null;
  incomeLevel: IncomeLevel | null;
  welfareStatus: WelfareStatus | null;   // 수급자 구분
  hasEmploymentInsurance: boolean | null; // 고용보험 가입
  companySize: "중소기업" | "중견기업" | "대기업" | null;

  // 4단계: 주거 상황
  housingOwnership: "무주택" | "유주택" | null; // 주택 소유
  housingType: HousingType | null;               // 주거 형태

  // 5단계: 특수 조건
  disabilityGrade: DisabilityGrade | null;
  specialConditions: string[];

  completedSteps: number;
}

export interface LifecycleStage {
  id: LifecycleCategory;
  label: string;
  ageRange: string;
  minAge: number;
  maxAge: number;
  icon: string;
  color: string;
  bgColor: string;
  description: string;
}
