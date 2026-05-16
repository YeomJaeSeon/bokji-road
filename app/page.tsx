"use client";

import { useState, useRef, useCallback, Fragment } from "react";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useFilteredBenefits, useEligibleCount } from "@/hooks/useFilteredBenefits";
import RoadmapTimeline, { LIFECYCLE_STAGES } from "@/components/RoadmapTimeline";
import BenefitCard from "@/components/BenefitCard";
import UserProfileForm from "@/components/UserProfileForm";
import Dashboard from "@/components/Dashboard";
import AdSlot, { AdSlotHorizontal, AdSlotMobileFixed } from "@/components/AdSlot";
import benefitsData from "@/data/benefits.json";
import type { Benefit, LifecycleCategory } from "@/types";
import FaqSection from "@/components/FaqSection";

const allBenefits = benefitsData as Benefit[];

export default function HomePage() {
  // isLoaded를 렌더링 차단에 사용하지 않음 — SSR 시 기본값(defaultProfile)으로 즉시 렌더
  // 검색 엔진 봇이 전체 콘텐츠를 볼 수 있도록 유지
  const { profile, updateProfile, getLifecycleStage } = useUserProfile();
  const [showForm, setShowForm] = useState(false);
  const [activeCategory, setActiveCategory] = useState<LifecycleCategory | null>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  const filteredBenefits = useFilteredBenefits(allBenefits, profile);
  const { eligible, possible } = useEligibleCount(allBenefits, profile);

  const currentStage = getLifecycleStage() as LifecycleCategory | null;

  const displayedBenefits = activeCategory
    ? filteredBenefits.filter((b) => b.category === activeCategory)
    : filteredBenefits;

  const handleStageClick = useCallback((stage: LifecycleCategory) => {
    setActiveCategory((prev) => (prev === stage ? null : stage));
    setTimeout(() => {
      benefitsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  return (
    <>
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-emerald-100 text-sm font-medium tracking-wide">🇰🇷 대한민국 복지혜택 가이드</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            내 생애주기별<br />복지혜택 한눈에 보기
          </h1>
          <p className="text-emerald-100 text-base max-w-xl mx-auto">
            임신·출산부터 노년까지, 지금 받을 수 있는 정부 지원을 찾아드려요.
            <br className="hidden sm:block" />
            로그인 없이 바로 확인하세요.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors shadow-sm"
            >
              내 맞춤 혜택 찾기 →
            </button>
            <a
              href="#benefits"
              className="border border-white/40 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              전체 혜택 보기
            </a>
          </div>
          <div className="flex justify-center gap-6 text-sm text-emerald-200 pt-2">
            <span>✅ {allBenefits.length}가지 혜택 정리</span>
            <span>🔒 개인정보 저장 없음</span>
            <span>⚡ 1분 이내 확인</span>
          </div>
          <div className="pt-2">
            <a
              href="tel:129"
              className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white px-5 py-2.5 rounded-xl hover:bg-white/25 transition-colors text-sm font-semibold"
              aria-label="복지 콜센터 129 전화 상담"
            >
              ☎ 129 복지 콜센터 — 전화 상담
            </a>
            <p className="text-emerald-300 text-xs mt-1">
              무료 · 월~금 9시~18시
            </p>
          </div>
        </div>
      </section>

      {/* 개인화 대시보드 */}
      <Dashboard
        profile={profile}
        eligibleCount={eligible}
        possibleCount={possible}
        onEditProfile={() => setShowForm(true)}
      />

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
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            {activeCategory ? `${activeCategory} 혜택` : "전체 혜택"}
            <span className="ml-2 text-sm font-normal text-gray-500">
              ({displayedBenefits.length}가지)
            </span>
          </h2>
          {activeCategory && (
            <button
              onClick={() => setActiveCategory(null)}
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
                <BenefitCard benefit={benefit} />

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
