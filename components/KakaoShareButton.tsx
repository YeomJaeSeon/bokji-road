"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

interface Props {
  title: string;
  description: string;
  url: string;
  className?: string;
}

export default function KakaoShareButton({ title, description, url, className = "" }: Props) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js";
    script.crossOrigin = "anonymous";
    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        // 복지로드 Kakao JS App Key (실제 앱키로 교체 필요)
        window.Kakao.init("카카오앱키미설정");
      }
    };
    document.head.appendChild(script);
  }, []);

  function handleNativeShare() {
    const text = `[복지로드] ${title}\n${description}\n${url}`;
    if (navigator.share) {
      navigator.share({ title: `복지로드 — ${title}`, text: description, url });
    } else {
      navigator.clipboard.writeText(text).then(() => {
        alert("링크가 복사되었습니다!");
      });
    }
  }

  function handleKakaoShare() {
    if (typeof window === "undefined") return;
    if (!window.Kakao?.Share) {
      handleNativeShare();
      return;
    }
    try {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: `[복지로드] ${title}`,
          description,
          imageUrl: "https://bokjiroad.com/opengraph-image",
          link: { mobileWebUrl: url, webUrl: url },
        },
        buttons: [{ title: "자세히 보기", link: { mobileWebUrl: url, webUrl: url } }],
      });
    } catch {
      handleNativeShare();
    }
  }

  return (
    <div className={`flex gap-2 flex-wrap ${className}`}>
      <button
        onClick={handleKakaoShare}
        className="flex items-center gap-1.5 bg-[#FEE500] hover:bg-yellow-300 text-[#3C1E1E] font-semibold text-sm px-4 py-2 rounded-xl transition-colors"
        aria-label="카카오톡으로 공유"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.71 1.517 5.098 3.839 6.574l-.978 3.626 4.225-2.787A11.26 11.26 0 0012 18.6c5.523 0 10-3.477 10-7.8S17.523 3 12 3z"/>
        </svg>
        카카오톡 공유
      </button>
      <button
        onClick={handleNativeShare}
        className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm px-4 py-2 rounded-xl transition-colors"
        aria-label="링크 복사"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
        </svg>
        링크 복사
      </button>
    </div>
  );
}
