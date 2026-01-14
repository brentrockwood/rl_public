"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader({ navItems = [], logo }) {
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
          <span className="logo-image logo-light">
            <Image
              src={logo.lightSrc}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              priority
            />
          </span>
          <span className="logo-image logo-dark">
            <Image
              src={logo.darkSrc}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              priority
            />
          </span>
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
