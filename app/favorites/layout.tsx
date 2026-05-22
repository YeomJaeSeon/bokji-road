import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "즐겨찾기한 혜택",
  description: "내가 저장한 복지혜택 목록입니다. 하트를 눌러 저장한 혜택을 한곳에서 모아보세요.",
  alternates: { canonical: "https://bokjiroad.com/favorites" },
};

export default function FavoritesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
