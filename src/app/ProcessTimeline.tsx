"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Entendemos o problema, o contexto e o objetivo de negócio antes de falar em solução.",
    phase: "Início",
  },
  {
    n: "02",
    title: "Direção",
    text: "Definimos escopo, arquitetura e experiência — com clareza do que entra agora e do que fica para depois.",
    phase: "Alinhamento",
  },
  {
    n: "03",
    title: "Construção",
    text: "Desenvolvemos em ciclos curtos e transparentes, com acompanhamento próximo em cada etapa.",
    phase: "Execução",
  },
  {
    n: "04",
    title: "Lançamento e evolução",
    text: "Colocamos no ar, acompanhamos o uso real e melhoramos com base no que o produto precisa crescer.",
    phase: "Continuidade",
  },
] as const;

export default function ProcessTimeline() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 901px)",
          isMobile: "(max-width: 900px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions ?? {};
          const section = root.current;
          if (!section) return;

          const progress = section.querySelector<HTMLElement>("[data-process-progress]");
          const traveler = section.querySelector<HTMLElement>("[data-process-traveler]");
          const phaseLabel = section.querySelector<HTMLElement>("[data-process-phase]");
          const stepEls = gsap.utils.toArray<HTMLElement>("[data-process-step]", section);
          const markers = gsap.utils.toArray<HTMLElement>("[data-process-marker]", section);

          const setActive = (progressValue: number) => {
            const last = Math.max(steps.length - 1, 1);
            const activeIndex = Math.min(
              last,
              Math.max(0, Math.round(progressValue * last)),
            );

            stepEls.forEach((el, i) => {
              el.classList.toggle("is-active", i <= activeIndex);
              el.classList.toggle("is-current", i === activeIndex);
            });
            markers.forEach((el, i) => {
              el.classList.toggle("is-active", i <= activeIndex);
              el.classList.toggle("is-current", i === activeIndex);
            });

            if (phaseLabel) {
              phaseLabel.textContent = steps[activeIndex]?.phase ?? "";
            }
          };

          if (reduceMotion) {
            if (progress) gsap.set(progress, { scaleX: 1 });
            if (traveler) gsap.set(traveler, { left: "100%", xPercent: -50, autoAlpha: 1 });
            gsap.set(stepEls, { autoAlpha: 1, y: 0 });
            setActive(1);
            return;
          }

          if (progress) gsap.set(progress, { scaleX: 0, transformOrigin: "left center" });
          if (traveler) gsap.set(traveler, { left: "0%", xPercent: -50, autoAlpha: 1 });
          gsap.set(stepEls, { autoAlpha: 0.28, y: 18 });
          setActive(0);

          if (isDesktop) {
            const tl = gsap.timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "+=240%",
                pin: true,
                scrub: 0.7,
                anticipatePin: 1,
                onUpdate: (self) => setActive(self.progress),
              },
            });

            if (progress) tl.to(progress, { scaleX: 1, duration: 1 }, 0);
            if (traveler) tl.to(traveler, { left: "100%", duration: 1 }, 0);

            stepEls.forEach((step, i) => {
              const at = (i / Math.max(stepEls.length - 1, 1)) * 0.92;
              tl.to(
                step,
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.14,
                  ease: "power2.out",
                },
                at,
              );
            });

            return;
          }

          // Mobile: vertical passage — line fills as the section scrolls through view
          const mobileTl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              end: "bottom 35%",
              scrub: 0.55,
              onUpdate: (self) => setActive(self.progress),
            },
          });

          if (progress) mobileTl.to(progress, { scaleX: 1, duration: 1 }, 0);
          if (traveler) mobileTl.to(traveler, { left: "100%", duration: 1 }, 0);

          stepEls.forEach((step, i) => {
            const at = (i / Math.max(stepEls.length - 1, 1)) * 0.9;
            mobileTl.to(
              step,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.12,
                ease: "power2.out",
              },
              at,
            );
          });
        },
      );

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="processSection"
      id="como-trabalhamos"
      aria-labelledby="process-heading"
    >
      <div className="processAtmosphere" aria-hidden="true" />

      <div className="sectionShell processShell">
        <div className="processIntro">
          <h2 id="process-heading">Da primeira conversa à evolução contínua.</h2>
          <p>
            Um caminho claro, sem surpresas: do diagnóstico ao lançamento, com acompanhamento de
            perto em cada etapa.
          </p>
        </div>

        <div className="processTimeline" aria-label="Linha do tempo do processo">
          <div className="processMeta">
            <span className="processMetaLabel">Passagem do tempo</span>
            <span className="processMetaPhase" data-process-phase>
              {steps[0].phase}
            </span>
          </div>

          <div className="processTrack" aria-hidden="true">
            <div className="processTrackBase" />
            <div className="processTrackProgress" data-process-progress />
            <div className="processTraveler" data-process-traveler>
              <span className="processTravelerCore" />
              <span className="processTravelerGlow" />
            </div>

            <div className="processMarkers">
              {steps.map((step, i) => (
                <span
                  key={step.n}
                  className="processMarker"
                  data-process-marker
                  style={{ left: `${(i / Math.max(steps.length - 1, 1)) * 100}%` }}
                >
                  <span className="processMarkerDot" />
                </span>
              ))}
            </div>
          </div>

          <ol className="processSteps">
            {steps.map((step) => (
              <li key={step.n} className="processStep" data-process-step>
                <span className="processStepNum">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
