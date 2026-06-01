"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { href: "/",                icon: "🏠", label: "홈" },
  { href: "/payment-dates",   icon: "📅", label: "수령일" },
  { href: "/guides",          icon: "📋", label: "가이드" },
  { href: "/community",       icon: "💬", label: "Q&A" },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 shadow-lg md:hidden safe-area-inset-bottom">
      <div className="grid grid-cols-4">
        {ITEMS.map(({ href, icon, label }) => {
          const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link key={href} href={href}
              className={`flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-semibold transition-colors ${
                isActive ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
              }`}>
              <span className="text-xl leading-none">{icon}</span>
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
