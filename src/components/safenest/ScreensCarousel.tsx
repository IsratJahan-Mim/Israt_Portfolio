"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { SAFENEST_DATA } from "@/data/safenestData";

export function ScreensCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // Keyboard Arrow Navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect, scrollPrev, scrollNext]);

  const screens = SAFENEST_DATA.screens;

  return (
    <div
      className="relative max-w-5xl mx-auto py-8 select-none"
      aria-label="SafeNest App Screens Showcase"
    >
      {/* Embla Viewport */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing px-4" ref={emblaRef}>
        <div className="flex -ml-4 sm:-ml-6">
          {screens.map((screen, index) => {
            const isSelected = selectedIndex === index;

            return (
              <div
                key={screen.id}
                className="flex-[0_0_80%] sm:flex-[0_0_55%] md:flex-[0_0_38%] pl-4 sm:pl-6 min-w-0"
              >
                <div
                  className={`bg-background-secondary border rounded-3xl p-4 sm:p-5 transition-all duration-300 shadow-md ${
                    isSelected
                      ? "border-accent-terracotta scale-100 ring-2 ring-accent-terracotta/30"
                      : "border-border-subtle scale-95 opacity-70"
                  }`}
                >
                  {/* Screen Image Container with 1:2 mobile phone aspect ratio */}
                  <div className="relative aspect-[1/2] w-full rounded-2xl overflow-hidden border border-border-subtle bg-black/5">
                    <Image
                      src={screen.image}
                      alt={`${screen.title} - ${screen.subtitle}`}
                      fill
                      sizes="(max-width: 640px) 75vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover"
                      priority={index === 0}
                    />

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-xs">
                        {screen.badge}
                      </span>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="mt-4 text-center">
                    <p className="text-xs uppercase tracking-wider font-semibold text-accent-terracotta">
                      Screen 0{index + 1}
                    </p>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-content-primary mt-0.5">
                      {screen.title}
                    </h4>
                    <p className="text-xs text-content-secondary mt-1 line-clamp-2">
                      {screen.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls: Previous / Next Buttons */}
      <div className="flex items-center justify-between mt-8 max-w-sm mx-auto px-4">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous screen"
          className="w-12 h-12 rounded-full border border-border-prominent bg-background-secondary text-content-primary hover:border-accent-terracotta hover:text-accent-terracotta shadow-sm flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-accent-terracotta"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Screen select">
          {scrollSnaps.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              role="tab"
              aria-selected={selectedIndex === dotIdx}
              aria-label={`Go to screen ${dotIdx + 1}`}
              onClick={() => scrollTo(dotIdx)}
              className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-accent-terracotta ${
                selectedIndex === dotIdx
                  ? "w-8 bg-accent-terracotta"
                  : "w-2.5 bg-border-prominent hover:bg-content-muted"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next screen"
          className="w-12 h-12 rounded-full border border-border-prominent bg-background-secondary text-content-primary hover:border-accent-terracotta hover:text-accent-terracotta shadow-sm flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-accent-terracotta"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      <p className="text-center text-xs text-content-muted mt-3">
        Use keyboard arrows ← → or drag to browse screens
      </p>
    </div>
  );
}
