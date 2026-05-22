"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeaderClient() {
  const [large, setLarge] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("bokji-large-text") === "1";
    setLarge(saved);
    if (saved) document.documentElement.classList.add("large-text");
  }, []);

  function toggleSize() {
    const next = !large;
    setLarge(next);
    if (next) {
      document.documentElement.classList.add("large-text");
      localStorage.setItem("bokji-large-text", "1");
    } else {
      document.documentElement.classList.remove("large-text");
      localStorage.setItem("bokji-large-text", "0");
    }
  }

  return (
    <nav className="flex items-center gap-2 sm:gap-3">
      {/* 글자 크기 토글 */}
      <button
        onClick={toggleSize}
        className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:border-emerald-400 hover:text-emerald-700 transition-colors text-xs font-semibold"
        aria-label="글자 크기 조절"
        title={large ? "글자 작게" : "글자 크게"}
      >
        <span className={large ? "text-base" : "text-sm"}>가</span>
        <span className="hidden sm:inline text-[11px]">{large ? "작게" : "크게"}</span>
      </button>

      {/* 129 복지 콜센터 */}
      <a
        href="tel:129"
        className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 transition-colors text-xs font-bold"
        aria-label="복지 콜센터 129 전화"
      >
        ☎ <span className="font-extrabold">129</span>
      </a>

      {/* 숨긴 링크 (sm 이상) */}
      <a href="/#roadmap" className="hover:text-emerald-600 transition-colors hidden sm:block text-sm text-gray-600">로드맵</a>
      <a href="/#benefits" className="hover:text-emerald-600 transition-colors hidden sm:block text-sm text-gray-600">혜택 찾기</a>
      <Link href="/calculator" className="hover:text-emerald-600 transition-colors hidden sm:block text-sm text-gray-600 font-semibold">계산기</Link>
      <Link href="/favorites" className="hover:text-emerald-600 transition-colors hidden sm:block text-sm text-gray-600">즐겨찾기</Link>
      <a
        href="https://www.bokjiro.go.kr"
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors text-sm hidden sm:block"
      >
        복지로 바로가기
      </a>
    </nav>
  );
}
