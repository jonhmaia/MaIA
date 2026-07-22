"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function LampLight() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const layers = gsap.utils.toArray<HTMLElement>("[data-lamp-layer]", root.current);

        gsap.fromTo(
          layers,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: 1.6,
            stagger: 0.12,
            ease: "power1.out",
            scrollTrigger: {
              trigger: root.current,
              start: "top 92%",
              toggleActions: "play none none reverse",
            },
          },
        );

        const glow = root.current?.querySelector<HTMLElement>("[data-lamp-glow]");
        if (glow) {
          gsap.to(glow, {
            opacity: 0.78,
            duration: 3.6,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            scrollTrigger: {
              trigger: root.current,
              start: "top 95%",
              end: "bottom top",
              toggleActions: "play pause resume pause",
            },
          });
        }
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div className="lampLight" ref={root} aria-hidden="true">
      <div className="lampLightAmbient" data-lamp-layer />
      <div className="lampLightCone" data-lamp-layer />
      <div className="lampLightCore" data-lamp-layer data-lamp-glow />
    </div>
  );
}
