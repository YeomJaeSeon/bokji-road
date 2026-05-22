"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useFavorites } from "@/hooks/useFavorites";
import { useFilteredBenefits } from "@/hooks/useFilteredBenefits";
import { useUserProfile } from "@/hooks/useUserProfile";
import BenefitCard from "@/components/BenefitCard";
import { AdSlotHorizontal } from "@/components/AdSlot";
import benefitsData from "@/data/benefits.json";
import type { Benefit } from "@/types";

const allBenefits = benefitsData as Benefit[];

export default function FavoritesPage() {
  const { profile } = useUserProfile();
  const { favorites, toggle, isFavorite } = useFavorites();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const filteredBenefits = useFilteredBenefits(allBenefits, profile);
  const favoriteBenefits = filteredBenefits.filter((b) => favorites.has(b.id));

  if (!mounted) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="text-sm text-emerald-600 hover:text-emerald-700">← 홈으로</Link>
        <h1 className="text-2xl font-extrabold text-gray-900 mt-2">즐겨찾기한 혜택</h1>
        <p className="text-sm text-gray-500 mt-1">하트를 눌러 저장한 혜택 목록입니다. 기기에만 저장되며 로그인이 필요 없어요.</p>
      </div>

      <AdSlotHorizontal slot="4000000001" />

      {favoriteBenefits.length === 0 ? (
        <div className="text-center py-20 space-y-4">
          <div className="text-6xl">🤍</div>
          <p className="text-gray-500 font-medium">아직 즐겨찾기한 혜택이 없어요</p>
          <p className="text-sm text-gray-400">혜택 카드의 ♡ 버튼을 눌러 저장해보세요</p>
          <Link href="/#benefits"
            className="inline-block mt-2 bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors text-sm">
            혜택 목록 보러가기 →
          </Link>
        </div>
      ) : (
        <>
          <p className="text-sm text-gray-500 mb-4 mt-4">{favoriteBenefits.length}가지 혜택을 저장했어요</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {favoriteBenefits.map((benefit) => (
              <BenefitCard
                key={benefit.id}
                benefit={benefit}
                isFavorite={isFavorite(benefit.id)}
                onToggleFavorite={toggle}
              />
            ))}
          </div>

          <div className="mt-8">
            <AdSlotHorizontal slot="4000000002" />
          </div>
        </>
      )}
    </div>
  );
}
