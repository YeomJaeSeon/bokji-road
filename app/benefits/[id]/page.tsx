import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import benefitsData from "@/data/benefits.json";
import type { Benefit } from "@/types";
import AdSlot from "@/components/AdSlot";

const allBenefits = benefitsData as Benefit[];

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return allBenefits.map((b) => ({ id: b.id }));
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bokjiroad.com";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const benefit = allBenefits.find((b) => b.id === id);
  if (!benefit) return {};
  const title = `${benefit.name} 신청 방법 및 자격 조건 2026`;
  const desc = benefit.seoDescription.slice(0, 160);
  return {
    title,
    description: desc,
    keywords: [benefit.name, benefit.category, benefit.provider, "신청방법", "자격조건", "2026", "복지혜택"],
    alternates: { canonical: `${SITE_URL}/benefits/${id}` },
    openGraph: {
      title,
      description: desc,
      type: "article",
      url: `${SITE_URL}/benefits/${id}`,
      siteName: "복지로드",
      locale: "ko_KR",
    },
  };
}

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

export default async function BenefitDetailPage({ params }: Props) {
  const { id } = await params;
  const benefit = allBenefits.find((b) => b.id === id);
  if (!benefit) notFound();

  const catColor = categoryColors[benefit.category] ?? "bg-gray-100 text-gray-700";

  // GovernmentService 구조화 데이터
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    name: benefit.name,
    description: benefit.seoDescription,
    provider: {
      "@type": "GovernmentOrganization",
      name: benefit.provider,
    },
    areaServed: benefit.region.join(", "),
    serviceType: benefit.benefit.type,
    url: benefit.application.url,
  };

  // BreadcrumbList 구조화 데이터
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: benefit.category, item: `${SITE_URL}/#benefits` },
      { "@type": "ListItem", position: 3, name: benefit.name, item: `${SITE_URL}/benefits/${benefit.id}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* 브레드크럼 */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6" aria-label="breadcrumb">
          <Link href="/" className="hover:text-emerald-600">홈</Link>
          <span>/</span>
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-semibold ${catColor}`}
          >
            {benefit.category}
          </span>
          <span>/</span>
          <span className="text-gray-700 font-medium truncate">{benefit.name}</span>
        </nav>

        {/* 헤더 */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${catColor}`}>
              {benefit.category}
            </span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
              {benefit.provider}
            </span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">
              {benefit.benefit.type}
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 mb-2">{benefit.name}</h1>
          <p className="text-gray-600 leading-relaxed">{benefit.seoDescription}</p>
        </div>

        {/* 지원 내용 */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-bold text-emerald-800 mb-4">💰 지원 내용</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4">
              <p className="text-xs text-gray-500 mb-1">지원 금액/내용</p>
              <p className="font-semibold text-gray-800">{benefit.benefit.amount}</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-xs text-gray-500 mb-1">지원 기간</p>
              <p className="font-semibold text-gray-800">{benefit.benefit.duration}</p>
            </div>
          </div>
        </div>

        {/* 신청 대상 */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">🎯 신청 대상</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex gap-3 items-center bg-gray-50 rounded-xl p-3">
              <span className="text-xl">🎂</span>
              <div>
                <p className="text-xs text-gray-500">연령</p>
                <p className="text-sm font-semibold">
                  {benefit.target.minAge === 0 && benefit.target.maxAge === 150
                    ? "연령 제한 없음"
                    : benefit.target.maxAge === 150
                    ? `만 ${benefit.target.minAge}세 이상`
                    : benefit.target.minAge === 0
                    ? `만 ${benefit.target.maxAge}세 이하`
                    : `만 ${benefit.target.minAge}~${benefit.target.maxAge}세`}
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center bg-gray-50 rounded-xl p-3">
              <span className="text-xl">🚻</span>
              <div>
                <p className="text-xs text-gray-500">성별</p>
                <p className="text-sm font-semibold">
                  {benefit.target.gender === "all" ? "무관" : benefit.target.gender === "male" ? "남성" : "여성"}
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center bg-gray-50 rounded-xl p-3">
              <span className="text-xl">💵</span>
              <div>
                <p className="text-xs text-gray-500">소득 기준</p>
                <p className="text-sm font-semibold">
                  {benefit.target.incomeLevel === "all"
                    ? "소득 무관"
                    : benefit.target.incomeLevel === "low"
                    ? "저소득층"
                    : "중간 소득 이하"}
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center bg-gray-50 rounded-xl p-3">
              <span className="text-xl">📍</span>
              <div>
                <p className="text-xs text-gray-500">지역</p>
                <p className="text-sm font-semibold">{benefit.region.join(", ")}</p>
              </div>
            </div>
          </div>

          {benefit.target.householdTypes.length > 0 && (
            <div className="mt-3 bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-500 mb-1.5">가구 형태</p>
              <div className="flex flex-wrap gap-2">
                {benefit.target.householdTypes.map((t) => (
                  <span key={t} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded-lg font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {benefit.target.specialConditions.length > 0 && (
            <div className="mt-3 bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-500 mb-1.5">특수 조건</p>
              <div className="flex flex-wrap gap-2">
                {benefit.target.specialConditions.map((c) => (
                  <span key={c} className="text-xs bg-yellow-50 border border-yellow-200 text-yellow-700 px-2 py-1 rounded-lg font-medium">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 신청 방법 */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">📋 신청 방법</h2>
          <div className="mb-4">
            <span className="text-sm bg-blue-50 text-blue-700 font-semibold px-3 py-1 rounded-full">
              {benefit.application.method} 신청
            </span>
          </div>

          {/* 신청 단계 */}
          <ol className="space-y-3 mb-6">
            {benefit.application.steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-sm text-gray-700 pt-1 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          {/* 필요 서류 */}
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">📄 필요 서류</p>
            <ul className="space-y-1">
              {benefit.application.documents.map((doc, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-gray-400">•</span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AD SLOT 4: 혜택 상세 설명 하단 */}
        <div className="mb-6">
          {/* AD SLOT: 상세 페이지 본문 하단 */}
          <AdSlot slot="1234567893" format="rectangle" className="w-full" style={{ minHeight: 250 }} />
        </div>

        {/* 신청 버튼 */}
        <div className="sticky bottom-4 sm:static">
          <a
            href={benefit.application.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-center font-bold text-lg rounded-2xl shadow-lg transition-colors"
          >
            바로 신청하기 →
          </a>
          <p className="text-center text-xs text-gray-400 mt-2">
            공식 정부 사이트로 이동합니다
          </p>
        </div>

        {/* 관련 혜택 */}
        <div className="mt-8">
          <h2 className="text-lg font-bold text-gray-800 mb-4">관련 혜택</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {allBenefits
              .filter((b) => b.id !== benefit.id && b.category === benefit.category)
              .slice(0, 4)
              .map((related) => (
                <Link
                  key={related.id}
                  href={`/benefits/${related.id}`}
                  className="bg-white border border-gray-100 rounded-xl p-4 hover:border-emerald-300 hover:shadow-sm transition-all"
                >
                  <p className="font-semibold text-gray-800 text-sm mb-1">{related.name}</p>
                  <p className="text-xs text-gray-500 line-clamp-2">{related.benefit.amount}</p>
                </Link>
              ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
            ← 전체 혜택 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </>
  );
}
