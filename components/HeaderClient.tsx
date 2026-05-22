"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#roadmap",    label: "로드맵" },
  { href: "/#benefits",   label: "혜택 찾기" },
  { href: "/calculator",  label: "계산기" },
  { href: "/favorites",   label: "즐겨찾기" },
  { href: "/compare/youth-savings",  label: "청년도약계좌 비교" },
  { href: "/compare/pension-types",  label: "연금 비교" },
];

export default function HeaderClient() {
  const [large, setLarge] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("bokji-large-text") === "1";
    setLarge(saved);
    if (saved) document.documentElement.classList.add("large-text");
  }, []);

  // 메뉴 열릴 때 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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
    <>
      <nav className="flex items-center gap-2">
        {/* 글자 크기 토글 */}
        <button
          onClick={toggleSize}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:border-emerald-400 hover:text-emerald-700 transition-colors text-xs font-semibold"
          aria-label="글자 크기 조절"
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

        {/* 데스크톱 링크 */}
        {NAV_LINKS.slice(0, 4).map((l) => (
          <Link key={l.href} href={l.href}
            className="hover:text-emerald-600 transition-colors hidden lg:block text-sm text-gray-600">
            {l.label}
          </Link>
        ))}

        {/* 햄버거 버튼 (lg 미만) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="메뉴 열기"
        >
          <span className="w-5 h-0.5 bg-gray-600 rounded" />
          <span className="w-5 h-0.5 bg-gray-600 rounded" />
          <span className="w-5 h-0.5 bg-gray-600 rounded" />
        </button>
      </nav>

      {/* 모바일 드로어 오버레이 */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* 배경 딤 */}
          <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />

          {/* 드로어 패널 */}
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl flex flex-col">
            {/* 드로어 헤더 */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <span className="text-lg font-extrabold text-emerald-700">🗺️ 복지로드</span>
              <button onClick={() => setMenuOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 text-xl">
                ✕
              </button>
            </div>

            {/* 네비 링크 */}
            <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 font-medium text-sm transition-colors">
                  {l.label}
                </Link>
              ))}

              <div className="border-t border-gray-100 my-3" />

              <a href="https://www.bokjiro.go.kr" target="_blank" rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-emerald-600 hover:bg-emerald-50 font-semibold text-sm transition-colors">
                복지로 바로가기 ↗
              </a>
              <a href="tel:129"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-emerald-50 font-medium text-sm transition-colors">
                ☎ 129 복지 콜센터
              </a>
            </nav>

            {/* 드로어 하단 */}
            <div className="px-5 py-4 border-t border-gray-100 text-xs text-gray-400">
              로그인 없음 · 개인정보 외부 전송 없음
            </div>
          </div>
        </div>
      )}
    </>
  );
}
