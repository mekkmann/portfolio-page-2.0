'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b top-0 sticky bg-white z-99">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Pontus Alexander Liljekvist
        </Link>

        <div className="flex text-sm">
          {navItems.map((item) => {
            // disabled link (page user is on)
            const isActive = pathname === item.href;
            if (isActive) {
              return (
                <span
                  key={item.href}
                  className="text-gray-600 bg-gray-200 px-4 py-2 rounded-lg transition"
                >
                  {item.label}
                </span>
              )
            };

            // active link (page user can go to)
            return (
            <Link
              key={item.href}
              href={item.href}
              className=
                "text-gray-600 hover:text-black hover:bg-gray-200 px-4 py-2 rounded-lg transition"
            >
              {item.label}
            </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}