"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const slides = [
  {
    src: "/carousel-01.svg",
    alt: "Abstract gradient spheres on a dark field.",
  },
  {
    src: "/carousel-02.svg",
    alt: "Layered arcs and soft glow on a navy background.",
  },
  {
    src: "/carousel-03.svg",
    alt: "Geometric waves with warm highlights.",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = slides.length;

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideCount);
    }, 5200);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion, slideCount]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slideCount);
  };

  return (
    <aside className="hero-carousel card reveal" style={{ "--delay": "0.1s" }}>
      <div className="carousel-header">
        <div className="carousel-controls">
          <button type="button" onClick={handlePrev} aria-label="Previous slide">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M14.5 6L8.5 12L14.5 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button type="button" onClick={handleNext} aria-label="Next slide">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M9.5 6L15.5 12L9.5 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="carousel-viewport">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`carousel-slide${index === activeIndex ? " is-active" : ""}`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={640}
              height={440}
              priority={index === 0}
              sizes="(max-width: 960px) 100vw, 50vw"
              className="carousel-image"
              draggable="false"
            />
          </div>
        ))}
      </div>

      <div className="carousel-dots" aria-label="Carousel slides">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={`carousel-dot${index === activeIndex ? " is-active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeIndex}
          />
        ))}
      </div>
    </aside>
  );
}
