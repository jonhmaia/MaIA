"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PARTICLES = [
  { x: "8%", size: 3, delay: 0, drift: 42 },
  { x: "22%", size: 2, delay: 0.35, drift: 56 },
  { x: "38%", size: 4, delay: 0.15, drift: 48 },
  { x: "50%", size: 2.5, delay: 0.55, drift: 62 },
  { x: "64%", size: 3.5, delay: 0.25, drift: 50 },
  { x: "78%", size: 2, delay: 0.7, drift: 58 },
  { x: "92%", size: 3, delay: 0.4, drift: 44 },
] as const;

export default function SectionDivider() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const beam = root.current?.querySelector<HTMLElement>("[data-divider-beam]");
        const glow = root.current?.querySelector<HTMLElement>("[data-divider-glow]");
        const particles = gsap.utils.toArray<HTMLElement>("[data-divider-particle]", root.current);

        if (beam) {
          gsap.fromTo(
            beam,
            { scaleX: 0, autoAlpha: 0 },
            {
              scaleX: 1,
              autoAlpha: 1,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: root.current,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }

        if (glow) {
          gsap.fromTo(
            glow,
            { autoAlpha: 0, scale: 0.6 },
            {
              autoAlpha: 1,
              scale: 1,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: root.current,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }

        particles.forEach((particle, i) => {
          const config = PARTICLES[i];
          if (!config) return;

          gsap.set(particle, {
            xPercent: -50,
            y: 0,
            autoAlpha: 0,
            scale: 0.4,
          });

          const tl = gsap.timeline({
            repeat: -1,
            delay: config.delay,
            scrollTrigger: {
              trigger: root.current,
              start: "top 95%",
              end: "bottom top",
              toggleActions: "play pause resume pause",
            },
          });

          tl.to(particle, {
            y: -config.drift,
            autoAlpha: 0.85,
            scale: 1,
            duration: 1.4,
            ease: "power1.out",
          }).to(particle, {
            y: -(config.drift + 36),
            autoAlpha: 0,
            scale: 0.35,
            duration: 1.1,
            ease: "power1.in",
          });
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div className="sectionDivider" ref={root} aria-hidden="true">
      <div className="sectionDividerGlow" data-divider-glow />
      <div className="sectionDividerBeam" data-divider-beam />
      <div className="sectionDividerField">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="sectionDividerParticle"
            data-divider-particle
            style={{
              left: p.x,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>
    </div>
  );
}
