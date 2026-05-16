"use client";

import { useEffect, useRef } from "react";

interface AdSlotProps {
  slot: string;
  format?: "auto" | "rectangle" | "banner" | "leaderboard";
  className?: string;
  style?: React.CSSProperties;
}

export default function AdSlot({ slot, format = "auto", className = "", style }: AdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    try {
      // @ts-expect-error adsbygoogle is injected by Google AdSense script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // 광고 차단기 또는 스크립트 미로드 시 무시
    }
  }, []);

  return (
    <div
      ref={adRef}
      className={`ad-slot-wrapper overflow-hidden ${className}`}
      style={{ minHeight: 90, ...style }}
      aria-label="광고"
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
      {/* AD SLOT: 개발 환경 시각화 플레이스홀더 */}
      {process.env.NODE_ENV === "development" && (
        <div className="flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded text-gray-400 text-sm font-medium h-full" style={{ minHeight: 90 }}>
          📢 광고 슬롯 ({slot})
        </div>
      )}
    </div>
  );
}

export function AdSlotHorizontal({ slot }: { slot: string }) {
  /* AD SLOT: 수평 배너 광고 (728×90 또는 반응형) */
  return (
    <div className="w-full my-4">
      <AdSlot slot={slot} format="banner" className="mx-auto max-w-4xl" style={{ minHeight: 90 }} />
    </div>
  );
}

export function AdSlotRectangle({ slot }: { slot: string }) {
  /* AD SLOT: 사각형 광고 (300×250) — 혜택 카드 사이 삽입용 */
  return (
    <div className="w-full my-4 flex justify-center">
      <AdSlot slot={slot} format="rectangle" style={{ width: 300, minHeight: 250 }} />
    </div>
  );
}

export function AdSlotMobileFixed({ slot }: { slot: string }) {
  /* AD SLOT: 모바일 하단 고정 배너 */
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-lg">
      <AdSlot slot={slot} format="banner" style={{ minHeight: 50 }} />
    </div>
  );
}
