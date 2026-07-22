"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export type ClientLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  wide?: boolean;
};

const logos: ClientLogo[] = [
  { src: "/logos/logo capim.svg", alt: "Capim", width: 140, height: 40 },
  { src: "/logos/logo aktoria.png", alt: "Aktoria", width: 140, height: 40 },
  { src: "/logos/logoceia.png", alt: "Ceia", width: 120, height: 40 },
  { src: "/logos/logoflex.png", alt: "Flex", width: 120, height: 40 },
  { src: "/logos/watrix.svg", alt: "Watrix", width: 130, height: 40 },
  { src: "/logos/logo clubinho.svg", alt: "Clubinho", width: 140, height: 40 },
  { src: "/logos/arthur camapum.avif", alt: "Arthur Camapum", width: 150, height: 40 },
  { src: "/logos/shipsmart-logo.svg", alt: "ShipSmart", width: 140, height: 40 },
  { src: "/logos/AUVP-CAPITAL-HORIZONTAL-AMARELA.svg", alt: "AUVP Capital", width: 160, height: 40 },
  { src: "/logos/logo_green_white.png", alt: "Mint", width: 120, height: 40 },
  {
    src: "/logos/aventos-btg.png",
    alt: "Aventos BTG Pactual",
    width: 220,
    height: 40,
    wide: true,
  },
];

function LogoTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul className="logoTrack" aria-hidden={ariaHidden || undefined}>
      {logos.map((logo) => (
        <li
          key={`${ariaHidden ? "dup" : "main"}-${logo.alt}`}
          className={`logoSlide${logo.wide ? " logoSlideWide" : ""}`}
          data-logo-slide
        >
          <Image
            src={logo.src}
            alt={ariaHidden ? "" : logo.alt}
            width={logo.width}
            height={logo.height}
            className="logoSlideImg"
          />
        </li>
      ))}
    </ul>
  );
}

export default function LogoCarousel() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const el = root.current;
        const viewport = el?.querySelector<HTMLElement>("[data-logo-viewport]");
        const rail = el?.querySelector<HTMLElement>("[data-logo-rail]");
        if (!el || !viewport || !rail) return;

        const slides = gsap.utils.toArray<HTMLElement>("[data-logo-slide]", rail);

        const paintByLight = () => {
          const bounds = viewport.getBoundingClientRect();
          const lightX = bounds.left + bounds.width / 2;
          // Pico no centro; gradiente chega perto da largura principal
          const radius = viewport.clientWidth * 0.48;
          const fullLit = Math.min(140, viewport.clientWidth * 0.14);

          slides.forEach((slide) => {
            const img = slide.querySelector<HTMLElement>(".logoSlideImg");
            if (!img) return;

            const rect = slide.getBoundingClientRect();
            const slideX = rect.left + rect.width / 2;
            const dist = Math.abs(slideX - lightX);

            let raw = 0;
            if (dist <= fullLit) raw = 1;
            else if (dist < radius) raw = 1 - (dist - fullLit) / (radius - fullLit);

            const t = raw * raw * (3 - 2 * raw);

            // Escuro fora da luz (mín. visível) → cores + brilho no feixe
            const opacity = 0.3 + 0.7 * t;
            const brightness = 0.45 + 0.7 * t;
            const grayscale = 1 - t;

            img.style.filter = `grayscale(${grayscale}) brightness(${brightness})`;
            img.style.opacity = String(opacity);
          });
        };

        const distance = () => rail.scrollWidth / 2;

        const tween = gsap.fromTo(
          rail,
          { x: 0 },
          {
            x: () => -distance(),
            ease: "none",
            duration: 42,
            repeat: -1,
            immediateRender: true,
          },
        );

        gsap.ticker.add(paintByLight);
        paintByLight();

        const onResize = () => {
          tween.invalidate().restart();
          paintByLight();
        };
        window.addEventListener("resize", onResize);

        const pause = () => tween.pause();
        const play = () => tween.play();
        el.addEventListener("mouseenter", pause);
        el.addEventListener("mouseleave", play);

        return () => {
          gsap.ticker.remove(paintByLight);
          window.removeEventListener("resize", onResize);
          el.removeEventListener("mouseenter", pause);
          el.removeEventListener("mouseleave", play);
          tween.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div className="logoCarousel" ref={root} role="region" aria-label="Marcas parceiras">
      <div className="logoCarouselViewport" data-logo-viewport>
        <div className="logoCarouselRail" data-logo-rail>
          <LogoTrack />
          <LogoTrack ariaHidden />
        </div>
      </div>
    </div>
  );
}
