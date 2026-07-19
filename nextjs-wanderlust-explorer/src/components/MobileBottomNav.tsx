"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type MobileBottomNavItem = {
  href: string;
  label: string;
  icon: string;
  activeIcon?: string | null;
};

const defaultNavItems: MobileBottomNavItem[] = [
  { href: "/", label: "Home", icon: "⌂", activeIcon: null },
  { href: "/experiences", label: "Explorador", icon: "⦿", activeIcon: "⦿" },
  { href: "/favorites", label: "Favoritos", icon: "♡", activeIcon: null },
  { href: "/profile", label: "Perfil", icon: "◔", activeIcon: null },
];

type MobileBottomNavProps = {
  navItems?: MobileBottomNavItem[];
};

export default function MobileBottomNav({ navItems = defaultNavItems }: MobileBottomNavProps) {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 mx-auto flex w-full max-w-[560px] items-center justify-around border-t border-[#d1d9e8] bg-white/95 px-4 py-3 backdrop-blur-lg md:hidden">
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center gap-1 text-[11px] ${
              isActive ? "font-semibold text-[#0b57db]" : "text-[#5d6372]"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            <span
              className={`text-base leading-none ${
                isActive && item.activeIcon ? "inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#d7e5ff] text-sm" : ""
              }`}
            >
              {isActive && item.activeIcon ? item.activeIcon : item.icon}
            </span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
