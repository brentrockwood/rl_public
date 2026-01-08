"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const scrollingDown = currentY > lastScrollY.current;
        const shouldHide = scrollingDown && currentY > 80;
        setIsHidden(shouldHide);
        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`site-header${isHidden ? " is-hidden" : ""}`}>
      <div className="container header-inner">
        <div className="logo">
          <Image
            src="/logo_v1.svg"
            alt="Rockwood Lab"
            width={140}
            height={40}
            priority
          />
        </div>
        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
