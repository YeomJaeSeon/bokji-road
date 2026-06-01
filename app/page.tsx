"use client";

import { useState, useRef, useCallback, Fragment, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useFilteredBenefits, useEligibleCount } from "@/hooks/useFilteredBenefits";
import { useFavorites } from "@/hooks/useFavorites";
import RoadmapTimeline, { LIFECYCLE_STAGES } from "@/components/RoadmapTimeline";
import BenefitCard from "@/components/BenefitCard";
import UserProfileForm from "@/components/UserProfileForm";
import Dashboard from "@/components/Dashboard";
import AdSlot, { AdSlotHorizontal, AdSlotMobileFixed } from "@/components/AdSlot";
import benefitsData from "@/data/benefits.json";
import type { Benefit, LifecycleCategory } from "@/types";
import FaqSection from "@/components/FaqSection";

const allBenefits = benefitsData as Benefit[];

// useSearchParams는 Suspense 경계 안에서만 사용 가능
function SearchParamsHandler({ onOpenForm }: { onOpenForm: () => void }) {
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams.get("open") === "form") onOpenForm();
  }, [searchParams, onOpenForm]);
  return null;
}

export default function HomePage() {
  const { profile, updateProfile, clearProfile, getLifecycleStage } = useUserProfile();
  const { isFavorite, toggle: toggleFavorite } = useFavorites();
  const [showForm, setShowForm] = useState(false);
  const [activeCategory, setActiveCategory] = useState<LifecycleCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const benefitsRef = useRef<HTMLDivElement>(null);

  const filteredBenefits = useFilteredBenefits(allBenefits, profile);
  const { eligible, possible, estimatedAnnual } = useEligibleCount(allBenefits, profile);

  const currentStage = getLifecycleStage() as LifecycleCategory | null;

  const hasProfile = profile.age !== null || profile.region !== null;

  const displayedBenefits = filteredBenefits.filter((b) => {
    if (hasProfile && b.matchStatus === "해당없음") return false;
    if (activeCategory && b.category !== activeCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      return (
        b.name.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q) ||
        b.seoDescription.toLowerCase().includes(q) ||
        b.benefit.amount.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleStageClick = useCallback((stage: LifecycleCategory) => {
    setActiveCategory((prev) => (prev === stage ? null : stage));
    setTimeout(() => {
      benefitsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <SearchParamsHandler onOpenForm={() => setShowForm(true)} />
      </Suspense>

      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <p className="text-emerald-100 text-sm font-medium tracking-wide">🇰🇷 대한민국 복지혜택 가이드</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            내 정보만 입력하면<br />
            <span className="text-yellow-300">받을 수 있는 혜택</span>만 골라드려요
          </h1>
          <p className="text-emerald-100 text-sm max-w-sm mx-auto">
            임신·출산부터 노년까지 {allBenefits.length}가지 정부지원 중<br />
            <strong className="text-white">지금 내가 받을 수 있는 것</strong>만 1분 안에 확인
          </p>

          {/* 3단계 플로우 */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap pt-1">
            {[
              { icon: "📝", title: "내 정보 입력", sub: "나이·지역·소득 등 3분" },
              { icon: "🔍", title: "자동 맞춤 분석", sub: "서버 저장 없음" },
              { icon: "🎯", title: "혜택 리스트 확인", sub: "지금 신청 가능" },
            ].map((step, i) => (
              <div key={step.title} className="flex items-center gap-2 sm:gap-3">
                <div className="flex flex-col items-center bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 min-w-[90px]">
                  <span className="text-2xl mb-1">{step.icon}</span>
                  <span className="text-xs font-bold text-white leading-tight">{step.title}</span>
                  <span className="text-[10px] text-emerald-200 mt-0.5">{step.sub}</span>
                </div>
                {i < 2 && <span className="text-white/40 text-xl font-thin">›</span>}
              </div>
            ))}
          </div>

          {/* 개인정보 강조 배지 */}
          <div className="inline-flex items-center gap-2 bg-emerald-800/50 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs text-emerald-100">
            🔒 입력 정보는 내 기기에만 저장 · 서버 전송 없음 · 로그인 불필요
          </div>

          {/* CTA 버튼 */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-emerald-700 font-extrabold px-8 py-3.5 rounded-2xl hover:bg-yellow-50 transition-colors shadow-lg text-base"
            >
              내 맞춤 혜택 찾기 →
            </button>
            <a
              href="#benefits"
              className="border border-white/40 text-white font-medium px-6 py-3.5 rounded-2xl hover:bg-white/10 transition-colors text-sm flex items-center"
            >
              전체 {allBenefits.length}가지 보기
            </a>
          </div>

          {/* 129 콜센터 */}
          <div className="pt-1">
            <a
              href="tel:129"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-2 rounded-xl hover:bg-white/20 transition-colors text-sm font-semibold"
              aria-label="복지 콜센터 129 전화 상담"
            >
              ☎ 129 복지 콜센터 무료 상담
            </a>
            <p className="text-emerald-300 text-xs mt-1">월~금 9시~18시</p>
          </div>
        </div>
      </section>

      {/* 긴급 지원 배너 */}
      <div className="bg-red-600 text-white px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span className="text-lg">🚨</span>
            <span>지금 당장 생활비가 없다면 — 긴급복지지원을 즉시 신청하세요</span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a href="tel:129"
              className="bg-white text-red-700 font-extrabold px-4 py-1.5 rounded-xl text-sm hover:bg-red-50 transition-colors">
              ☎ 129 지금 전화
            </a>
            <a href="/guides/low-income-benefits"
              className="border border-white/60 text-white font-semibold px-3 py-1.5 rounded-xl text-sm hover:bg-red-700 transition-colors">
              지원 안내 →
            </a>
          </div>
        </div>
      </div>

      {/* 개인화 대시보드 */}
      <Dashboard
        profile={profile}
        eligibleCount={eligible}
        possibleCount={possible}
        estimatedAnnual={estimatedAnnual}
        onEditProfile={() => setShowForm(true)}
        onClearProfile={clearProfile}
      />

      {/* 서비스 소개 편집 텍스트 */}
      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl border border-gray-100 p-5 text-sm text-gray-600 leading-relaxed space-y-2">
          <p>
            <strong className="text-gray-800">복지로드</strong>는 임신·출산부터 노년까지 생애주기별 대한민국 정부 복지혜택 {allBenefits.length}가지를 한눈에 찾을 수 있는 무료 정보 서비스입니다.
            기초연금, 실업급여, 부모급여, 근로장려금 등 복잡한 복지 제도를 쉽게 이해하고 직접 신청할 수 있도록 도와드립니다.
          </p>
          <p>
            나이·지역·소득·가구 형태를 입력하면 지금 당장 받을 수 있는 맞춤 혜택만 골라 보여드립니다.
            로그인 없이 무료로 이용하며, 입력한 정보는 내 기기에만 저장됩니다.
          </p>
        </div>
      </section>

      {/* AD SLOT 1: 대시보드 아래, 로드맵 위 */}
      <AdSlotHorizontal slot="1234567890" />

      {/* 생애주기 로드맵 */}
      <div id="roadmap">
        <RoadmapTimeline
          currentStage={currentStage}
          userAge={profile.age}
          onStageClick={handleStageClick}
        />
      </div>

      {/* AD SLOT 3: 로드맵 아래, 혜택 리스트 위 */}
      <AdSlotHorizontal slot="1234567891" />

      {/* 혜택 필터 카테고리 탭 */}
      <div id="benefits" ref={benefitsRef} className="max-w-5xl mx-auto px-4 pt-6 pb-2">
        {/* 검색 바 */}
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="혜택 이름·키워드로 검색 (예: 부모급여, 청년, 주거)"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent bg-white shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
              aria-label="검색 초기화"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            {searchQuery
              ? `"${searchQuery}" 검색 결과`
              : activeCategory
              ? `${activeCategory} 혜택`
              : hasProfile
              ? "내 맞춤 혜택"
              : "전체 혜택"}
            <span className="ml-2 text-sm font-normal text-gray-500">
              ({displayedBenefits.length}가지)
            </span>
          </h2>
          {(activeCategory || searchQuery) && (
            <button
              onClick={() => { setActiveCategory(null); setSearchQuery(""); }}
              className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
            >
              전체 보기 ×
            </button>
          )}
        </div>

        {/* 카테고리 필터 탭 */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          <button
            onClick={() => setActiveCategory(null)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              activeCategory === null
                ? "bg-emerald-600 text-white border-emerald-600"
                : "border-gray-300 text-gray-600 hover:border-emerald-400"
            }`}
          >
            전체
          </button>
          {LIFECYCLE_STAGES.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setActiveCategory(stage.id)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === stage.id
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "border-gray-300 text-gray-600 hover:border-emerald-400"
              }`}
            >
              {stage.icon} {stage.label}
            </button>
          ))}
        </div>
      </div>

      {/* 혜택 카드 목록 */}
      <div className="max-w-5xl mx-auto px-4 pb-8">
        {displayedBenefits.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <div className="text-4xl mb-4">🔍</div>
            <p>해당 카테고리의 혜택이 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedBenefits.map((benefit, index) => (
              <Fragment key={benefit.id}>
                <BenefitCard
                  benefit={benefit}
                  isFavorite={isFavorite(benefit.id)}
                  onToggleFavorite={toggleFavorite}
                />

                {/* AD SLOT 2: 혜택 카드 3개마다 사이에 삽입 */}
                {(index + 1) % 3 === 0 && index < displayedBenefits.length - 1 && (
                  <div className="sm:col-span-2 lg:col-span-3">
                    {/* AD SLOT: 카드 3개 간격 광고 */}
                    <AdSlot
                      slot="1234567892"
                      format="auto"
                      className="w-full"
                      style={{ minHeight: 90 }}
                    />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        )}
      </div>

      {/* 내 상황별 빠른 찾기 */}
      <section className="py-8 px-4 bg-gradient-to-br from-emerald-50 to-teal-50 border-t border-emerald-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-gray-800 mb-1">🎯 내 상황에 맞는 혜택 바로 찾기</h2>
          <p className="text-sm text-gray-500 mb-4">지금 상황을 선택하면 받을 수 있는 정부 지원을 안내해드려요.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { href: "/guides/baby-money", icon: "👶", label: "아이를 낳았어요", color: "bg-pink-50 hover:bg-pink-100 border-pink-200" },
              { href: "/guides/elderly-benefits", icon: "👴", label: "만 65세 이상이에요", color: "bg-cyan-50 hover:bg-cyan-100 border-cyan-200" },
              { href: "/guides/low-income-benefits", icon: "🏠", label: "생활이 어려워요", color: "bg-amber-50 hover:bg-amber-100 border-amber-200" },
              { href: "/guides/unemployment-guide", icon: "💼", label: "일을 잃었어요", color: "bg-blue-50 hover:bg-blue-100 border-blue-200" },
              { href: "/guides/youth-guide", icon: "🧑", label: "청년이에요", color: "bg-lime-50 hover:bg-lime-100 border-lime-200" },
              { href: "/guides/basic-living-guide", icon: "📋", label: "기초수급 신청할게요", color: "bg-orange-50 hover:bg-orange-100 border-orange-200" },
              { href: "/guides/eitc-guide", icon: "💰", label: "근로장려금 받고싶어요", color: "bg-emerald-50 hover:bg-emerald-100 border-emerald-200" },
              { href: "/guides/all-benefits-2026", icon: "📊", label: "전체 지원금 보기", color: "bg-gray-50 hover:bg-gray-100 border-gray-200" },
            ].map((item) => (
              <a key={item.href} href={item.href}
                className={`flex flex-col items-center gap-1.5 ${item.color} border rounded-2xl px-3 py-4 text-center transition-colors`}>
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-bold text-gray-700 leading-tight">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 신청 가이드 섹션 */}
      <section className="py-8 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-gray-800 mb-1">📋 복지혜택 신청 가이드</h2>
          <p className="text-sm text-gray-500 mb-4">자격 조건부터 신청 방법까지, 단계별로 쉽게 알려드려요.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { href: "/guides/all-benefits-2026", icon: "📊", label: "정부지원금 총정리" },
              { href: "/guides/unemployment-guide", icon: "💼", label: "실업급여" },
              { href: "/guides/basic-pension-guide", icon: "👴", label: "기초연금" },
              { href: "/guides/parental-allowance-guide", icon: "👶", label: "부모급여" },
              { href: "/guides/eitc-guide", icon: "💰", label: "근로장려금" },
              { href: "/guides", icon: "📋", label: "전체 가이드 보기" },
            ].map((item) => (
              <a key={item.href} href={item.href}
                className="flex items-center gap-2.5 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-200 border border-gray-100 rounded-xl px-4 py-3 transition-colors">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-semibold text-gray-700">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 비교 가이드 섹션 */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-gray-800 mb-4">📊 혜택 비교 가이드</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="/compare/youth-savings"
              className="group bg-white rounded-2xl border border-gray-100 p-5 hover:border-emerald-300 hover:shadow-md transition-all flex items-start gap-4">
              <span className="text-3xl">💰</span>
              <div>
                <p className="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors">청년도약계좌 vs 청년희망적금</p>
                <p className="text-sm text-gray-500 mt-1">월 납입·정부 기여금·세금 혜택 한눈에 비교</p>
                <p className="text-xs text-emerald-600 mt-2 font-semibold">비교 보기 →</p>
              </div>
            </a>
            <a href="/compare/pension-types"
              className="group bg-white rounded-2xl border border-gray-100 p-5 hover:border-emerald-300 hover:shadow-md transition-all flex items-start gap-4">
              <span className="text-3xl">👴</span>
              <div>
                <p className="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors">기초연금 vs 노령연금(국민연금)</p>
                <p className="text-sm text-gray-500 mt-1">수령 조건·금액·신청 방법 완전 비교</p>
                <p className="text-xs text-emerald-600 mt-2 font-semibold">비교 보기 →</p>
              </div>
            </a>
            <a href="/compare/basic-living"
              className="group bg-white rounded-2xl border border-gray-100 p-5 hover:border-emerald-300 hover:shadow-md transition-all flex items-start gap-4">
              <span className="text-3xl">🏠</span>
              <div>
                <p className="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors">기초생활수급 4대 급여 비교</p>
                <p className="text-sm text-gray-500 mt-1">생계·주거·의료·교육급여 조건과 금액 한눈에</p>
                <p className="text-xs text-emerald-600 mt-2 font-semibold">비교 보기 →</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 서비스 안내 섹션 */}
      <section className="bg-white border-t border-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-xl font-bold text-gray-800">복지로드 서비스 안내</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: "🎯",
                title: "맞춤 혜택 필터링",
                desc: "나이, 지역, 소득 수준에 맞는 혜택만 골라서 보여드립니다. 복잡한 자격 조건을 쉽게 확인할 수 있어요.",
              },
              {
                icon: "🔄",
                title: "생애주기 기반 안내",
                desc: "임신·출산부터 노년까지 생애주기별로 어떤 혜택이 있는지 한눈에 파악할 수 있습니다.",
              },
              {
                icon: "🔒",
                title: "개인정보 보호",
                desc: "로그인 없이 이용 가능하며, 입력한 정보는 기기 내 저장소(localStorage)에만 저장됩니다.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-4">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ 섹션 (SEO + AdSense 콘텐츠 보강) */}
      <FaqSection />

      {/* 프로필 입력 폼 모달 */}
      {showForm && (
        <UserProfileForm
          profile={profile}
          onUpdate={updateProfile}
          onClose={() => setShowForm(false)}
        />
      )}

      {/* AD SLOT 5: 모바일 하단 고정 배너 */}
      <AdSlotMobileFixed slot="1234567894" />
    </>
  );
}
