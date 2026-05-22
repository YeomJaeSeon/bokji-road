import type { Metadata } from "next";
import { Geist } from "next/font/google";
import HeaderClient from "@/components/HeaderClient";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bokjiroad.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "복지로드 — 내 생애주기별 정부 복지혜택 한눈에 보기",
    template: "%s | 복지로드",
  },
  description:
    "임신·출산부터 노년까지 생애주기별 정부 복지혜택 50가지 이상을 한눈에! 나이·지역·소득에 맞는 맞춤 혜택을 1분 안에 찾아드립니다. 로그인 없이 무료로 이용하세요.",
  keywords: [
    "복지혜택", "정부지원금", "생애주기별 복지", "기초연금", "아동수당", "부모급여",
    "청년 지원", "육아지원", "장애인 복지", "실업급여", "주거급여", "생계급여",
    "의료급여", "근로장려금", "자녀장려금", "한부모 지원", "노인 복지",
    "2026 복지혜택", "정부혜택 조회", "복지 신청",
  ],
  authors: [{ name: "복지로드" }],
  creator: "복지로드",
  openGraph: {
    title: "복지로드 — 내 생애주기별 정부 복지혜택 한눈에 보기",
    description:
      "임신·출산부터 노년까지 정부 복지혜택 50가지 이상! 나이·지역·소득 맞춤 혜택을 1분 안에 확인하세요.",
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "복지로드",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "복지로드 — 생애주기별 복지혜택 안내" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "복지로드 — 내 생애주기별 정부 복지혜택",
    description: "임신·출산부터 노년까지 50가지 이상 정부 복지혜택을 맞춤 안내",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "Q-PtYwhFTThfgD6q64UIT2Laom_5aQdH6HiaZ-NTk6I",
    other: { "naver-site-verification": "02b51cf84ed1d5259ee8cefc32d6a0de70d3b290" },
  },
};

// WebSite 구조화 데이터
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "복지로드",
  url: SITE_URL,
  description: "임신·출산부터 노년까지 생애주기별 정부 복지혜택 안내 서비스",
  inLanguage: "ko",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/#benefits` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={geistSans.variable}>
      {/* AdSense 크롤러가 HTML 소스에서 직접 감지할 수 있도록 <head>에 삽입 */}
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="복지로드" />
        <meta name="theme-color" content="#059669" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7178675306403545"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased bg-gray-50 min-h-screen flex flex-col">
        {/* WebSite 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        <header className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">🗺️</span>
              <span className="text-lg font-extrabold text-emerald-700">복지로드</span>
            </a>
            <HeaderClient />
          </div>
        </header>

        <main className="flex-1 pb-20 md:pb-0">{children}</main>

        <footer className="bg-white border-t border-gray-100 py-8 px-4 text-center text-sm text-gray-500 mt-8">
          <div className="max-w-4xl mx-auto space-y-3">
            <p className="font-semibold text-gray-700 text-base">복지로드 🗺️</p>
            <p>본 서비스는 정부 공식 기관이 아닌 민간 정보 제공 서비스입니다. 수혜 여부는 담당 기관에서 최종 확인하세요.</p>
            <p>
              <a href="https://www.bokjiro.go.kr" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">복지로(bokjiro.go.kr)</a>
              {" · "}
              <a href="tel:129" className="text-emerald-600 font-bold hover:underline">☎ 129 복지 콜센터</a>
              {" (무료, 월~금 9~18시)"}
            </p>
            <div className="flex justify-center gap-4 pt-1 text-xs text-gray-400">
              <a href="/about" className="hover:text-emerald-600 hover:underline">서비스 소개</a>
              <span>·</span>
              <a href="/privacy" className="hover:text-emerald-600 hover:underline">개인정보처리방침</a>
              <span>·</span>
              <a href="mailto:a89541457@gmail.com" className="hover:text-emerald-600 hover:underline">문의하기</a>
            </div>
            <p className="text-xs text-gray-400 pt-1">© 2026 복지로드. 정보 제공 목적으로 운영되며 법적 효력이 없습니다.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
