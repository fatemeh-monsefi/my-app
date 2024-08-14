"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { title: "Home", route: "/" },
  { title: "Support", route: "/support" },
  { title: "Store", route: "/store" },
  { title: "About", route: "/about" },
];

export default function Header() {
  const path = usePathname();

  return (
    <>
      <ul>
        {navItems.map((item) => {
          return (
            <li key={item.title}>
              <button>
                <Link
                  href={item.route}
                  className={path === item.route ? "activeLink" : undefined}
                >
                  {item.title}
                </Link>
              </button>
            </li>
          );
        })}
      </ul>
      <br />
    </>
  );
}
