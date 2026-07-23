"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type LampLightProps = {
  /** Espelha o cone: luz sobe para a hero (em vez de descer nas marcas) */
  inverted?: boolean;
};

export default function LampLight({ inverted = false }: LampLightProps) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-lamp-layer]", { autoAlpha: 1 });
        gsap.set("[data-lamp-glow]", { opacity: 0.78 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const layers = gsap.utils.toArray<HTMLElement>("[data-lamp-layer]", root.current);
        const hero = root.current?.closest(".hero");
        const trigger = inverted ? (hero ?? root.current) : root.current;

        gsap.fromTo(
          layers,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: inverted ? 2 : 1.6,
            stagger: 0.12,
            ease: "power1.out",
            delay: inverted ? 0.2 : 0,
            scrollTrigger: inverted
              ? {
                  trigger,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                }
              : {
                  trigger: root.current,
                  start: "top 92%",
                  toggleActions: "play none none reverse",
                },
          },
        );

        const glow = root.current?.querySelector<HTMLElement>("[data-lamp-glow]");
        if (glow) {
          gsap.to(glow, {
            opacity: inverted ? 0.7 : 0.78,
            duration: 3.6,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            scrollTrigger: {
              trigger,
              start: inverted ? "top top" : "top 95%",
              end: "bottom top",
              toggleActions: "play pause resume pause",
            },
          });
        }
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [inverted] },
  );

  return (
    <div
      className={`lampLight${inverted ? " lampLight--invert" : ""}`}
      ref={root}
      aria-hidden="true"
    >
      <div className="lampLightAmbient" data-lamp-layer />
      <div className="lampLightCone" data-lamp-layer />
      <div className="lampLightCore" data-lamp-layer data-lamp-glow />
    </div>
  );
}
