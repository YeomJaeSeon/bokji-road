import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "복지 뉴스·정책 변경 안내 | 복지로드",
  description:
    "2026년 달라지는 복지혜택, 급여 인상, 신규 제도 도입 등 최신 복지 정책 변경 정보를 안내합니다. 기초연금·실업급여·부모급여·근로장려금 최신 소식.",
  keywords: [
    "2026 복지혜택 변경", "복지 정책 뉴스", "기초연금 인상", "실업급여 변경",
    "부모급여 2026", "근로장려금 변경", "복지 최신 정보",
  ],
  alternates: { canonical: "https://bokjiroad.com/news" },
};

const ARTICLES = [
  {
    href: "/news/2026-welfare-changes",
    date: "2026. 01. 01",
    tag: "정책 변경",
    tagColor: "bg-blue-100 text-blue-700",
    title: "2026년 달라지는 복지혜택 총정리",
    desc: "기초연금 349,700원으로 인상, 실업급여 상한 68,100원, 기준 중위소득 4.5% 인상 등 2026년 주요 복지 정책 변경 사항을 총정리했습니다.",
    readTime: "약 6분",
  },
  {
    href: "/news/how-to-use-bokjiro",
    date: "2026. 02. 15",
    tag: "이용 가이드",
    tagColor: "bg-emerald-100 text-emerald-700",
    title: "복지로(bokjiro.go.kr) 사용 방법 — 온라인으로 복지 신청하기",
    desc: "정부 복지혜택을 집에서 신청할 수 있는 복지로 사이트 사용 방법을 단계별로 안내합니다. 회원가입부터 혜택 신청까지 스크린샷 없이도 쉽게 따라할 수 있어요.",
    readTime: "약 5분",
  },
];

export default function NewsIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-4 flex gap-2">
        <Link href="/" className="hover:text-emerald-600">홈</Link>
        <span>/</span>
        <span className="text-gray-700">복지 뉴스</span>
      </nav>

      <h1 className="text-2xl font-extrabold text-gray-900 mb-1">복지 뉴스 · 정책 변경</h1>
      <p className="text-sm text-gray-500 mb-6">달라지는 복지 정책과 신청 방법 변경 사항을 빠르게 전달합니다.</p>

      <div className="space-y-4">
        {ARTICLES.map((a) => (
          <Link key={a.href} href={a.href}
            className="block bg-white rounded-2xl border border-gray-100 p-5 hover:border-emerald-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${a.tagColor}`}>{a.tag}</span>
              <span className="text-xs text-gray-400">{a.date}</span>
              <span className="text-xs text-gray-400">· {a.readTime}</span>
            </div>
            <p className="font-bold text-gray-800 leading-snug mb-1">{a.title}</p>
            <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
            <p className="text-xs text-emerald-600 mt-2 font-semibold">읽기 →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
