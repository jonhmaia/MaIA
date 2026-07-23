"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type SmokeVariant = "hero" | "section" | "closing";

const PLUMES_BY_VARIANT: Record<
  SmokeVariant,
  readonly { className: string; x: string; y: string; w: string; h: string }[]
> = {
  hero: [
    { className: "smokePlumeA", x: "82%", y: "28%", w: "44%", h: "52%" },
    { className: "smokePlumeB", x: "68%", y: "48%", w: "38%", h: "44%" },
    { className: "smokePlumeC", x: "90%", y: "12%", w: "34%", h: "38%" },
    { className: "smokePlumeD", x: "74%", y: "58%", w: "36%", h: "36%" },
  ],
  section: [
    { className: "smokePlumeA", x: "8%", y: "62%", w: "42%", h: "70%" },
    { className: "smokePlumeB", x: "48%", y: "32%", w: "38%", h: "58%" },
    { className: "smokePlumeC", x: "72%", y: "58%", w: "44%", h: "72%" },
    { className: "smokePlumeD", x: "28%", y: "42%", w: "36%", h: "48%" },
    { className: "smokePlumeE", x: "58%", y: "76%", w: "40%", h: "55%" },
  ],
  closing: [
    { className: "smokePlumeA", x: "8%", y: "68%", w: "42%", h: "70%" },
    { className: "smokePlumeB", x: "48%", y: "38%", w: "38%", h: "58%" },
    { className: "smokePlumeC", x: "72%", y: "62%", w: "44%", h: "72%" },
    { className: "smokePlumeD", x: "28%", y: "48%", w: "36%", h: "48%" },
    { className: "smokePlumeE", x: "58%", y: "78%", w: "40%", h: "55%" },
  ],
};

type SmokeAtmosphereProps = {
  variant?: SmokeVariant;
  /** Se false, só anima fumaça (hero já tem heroGrid) */
  withBase?: boolean;
};

export default function SmokeAtmosphere({
  variant = "closing",
  withBase = true,
}: SmokeAtmosphereProps) {
  const root = useRef<HTMLDivElement>(null);
  const plumes = PLUMES_BY_VARIANT[variant];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const band = root.current?.parentElement ?? root.current;
      const fades = gsap.utils.toArray<HTMLElement>("[data-smoke-fade]", band);

      mm.add("(prefers-reduced-motion: reduce)", () => {
        if (root.current) gsap.set(root.current, { autoAlpha: variant === "hero" ? 0.55 : 1 });
        fades.forEach((fade) => gsap.set(fade, { autoAlpha: 0.5 }));
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (!root.current || !band) return;

        if (variant === "hero") {
          // Hero: entra suave no load, sem sumir o primeiro paint
          gsap.fromTo(
            root.current,
            { autoAlpha: 0 },
            { autoAlpha: 0.72, duration: 2.4, ease: "power1.out", delay: 0.15 },
          );
        } else {
          gsap.set(root.current, { autoAlpha: 0 });
          gsap.to(root.current, {
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              trigger: band,
              start: "top 92%",
              end: "top 30%",
              scrub: 0.7,
            },
          });
        }

        fades.forEach((fade) => {
          const edge = fade.dataset.smokeFade;
          if (edge === "top") {
            gsap.fromTo(
              fade,
              { autoAlpha: 1 },
              {
                autoAlpha: 0.15,
                ease: "none",
                scrollTrigger: {
                  trigger: band,
                  start: "top 88%",
                  end: "top 22%",
                  scrub: 0.7,
                },
              },
            );
          } else if (edge === "bottom") {
            gsap.fromTo(
              fade,
              { autoAlpha: 0.15 },
              {
                autoAlpha: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: band,
                  start: "bottom 75%",
                  end: "bottom 20%",
                  scrub: 0.7,
                },
              },
            );
          } else {
            // closing default
            gsap.fromTo(
              fade,
              { autoAlpha: 1 },
              {
                autoAlpha: 0.2,
                ease: "none",
                scrollTrigger: {
                  trigger: band,
                  start: "top 85%",
                  end: "top 20%",
                  scrub: 0.7,
                },
              },
            );
          }
        });

        const plumeEls = gsap.utils.toArray<HTMLElement>("[data-smoke-plume]", root.current);
        const intensity = variant === "hero" ? 0.55 : 1;

        plumeEls.forEach((plume, i) => {
          const dir = i % 2 === 0 ? 1 : -1;

          gsap.set(plume, {
            xPercent: -50,
            yPercent: -50,
            autoAlpha: (0.12 + (i % 3) * 0.04) * intensity,
            scale: 0.92,
          });

          gsap.to(plume, {
            x: `+=${gsap.utils.random(28, 90) * dir * (variant === "hero" ? 0.65 : 1)}`,
            y: `+=${gsap.utils.random(-55, -18)}`,
            scale: gsap.utils.random(1.02, 1.22),
            autoAlpha: gsap.utils.random(0.18, 0.38) * intensity,
            duration: gsap.utils.random(variant === "hero" ? 9 : 7, variant === "hero" ? 16 : 13),
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: i * 0.5,
            scrollTrigger:
              variant === "hero"
                ? undefined
                : {
                    trigger: band,
                    start: "top 85%",
                    end: "bottom top",
                    toggleActions: "play pause resume pause",
                  },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [variant, withBase] },
  );

  return (
    <div
      className={`smokeAtmosphere smokeAtmosphere--${variant}`}
      ref={root}
      aria-hidden="true"
    >
      {withBase ? <div className="atmosphereLayer" /> : null}
      {plumes.map((plume) => (
        <span
          key={plume.className}
          className={`smokePlume ${plume.className}`}
          data-smoke-plume
          style={{
            left: plume.x,
            top: plume.y,
            width: plume.w,
            height: plume.h,
          }}
        />
      ))}
    </div>
  );
}
