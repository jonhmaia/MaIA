"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const services = [
  {
    title: "Sites",
    description:
      "Páginas rápidas, elegantes e pensadas para converter — do site institucional ao lançamento de produto.",
  },
  {
    title: "Sistemas",
    description:
      "Software sob medida para o jeito que sua empresa opera: do MVP validado à plataforma em escala.",
  },
  {
    title: "Agentes de IA",
    description:
      "Assistentes que atendem, executam tarefas e liberam o time do operacional — com contexto do seu negócio.",
  },
  {
    title: "Automação",
    description:
      "Fluxos que conectam ferramentas, cortam retrabalho e fazem o processo andar sem depender de planilha.",
  },
  {
    title: "Refatoração",
    description:
      "Código e arquitetura legados revisados para estabilizar, acelerar entregas e destravar a evolução do produto.",
  },
] as const;

export default function ServicesStair() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = root.current?.querySelector<HTMLElement>("[data-services-intro]");
        const glow = root.current?.querySelector<HTMLElement>("[data-services-glow]");
        const cards = gsap.utils.toArray<HTMLElement>("[data-services-card]", root.current);
        const lines = gsap.utils.toArray<HTMLElement>("[data-services-line]", root.current);

        if (intro) {
          gsap.from(intro.children, {
            autoAlpha: 0,
            y: 36,
            duration: 0.85,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: intro,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
        }

        if (glow) {
          gsap.fromTo(
            glow,
            { autoAlpha: 0, scale: 0.88 },
            {
              autoAlpha: 1,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: root.current,
                start: "top 80%",
                end: "center 45%",
                scrub: 0.8,
              },
            },
          );
        }

        if (cards.length) {
          gsap.set(cards, { autoAlpha: 0, y: 48 });
          gsap.set(lines, { scaleX: 0, transformOrigin: "left center" });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: root.current?.querySelector("[data-services-grid]") ?? root.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          });

          tl.to(cards, {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: {
              each: 0.1,
              from: "start",
            },
            ease: "power3.out",
          }).to(
            lines,
            {
              scaleX: 1,
              duration: 0.55,
              stagger: 0.1,
              ease: "power2.out",
              clearProps: "transform",
            },
            "-=0.55",
          );
        }
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div className="servicesBlock" ref={root}>
      <div className="servicesIntro" data-services-intro>
        <h2 id="services-heading">O que construímos</h2>
        <p>
          Da presença digital à operação inteligente — tecnologia sob medida para crescer com
          clareza.
        </p>
      </div>

      <div className="servicesShowcase" aria-label="Serviços da MaIA">
        <div className="servicesShowcaseGlow" data-services-glow aria-hidden="true" />

        <div className="servicesGrid" data-services-grid>
          {services.map((service, index) => (
            <article className="serviceCard" data-services-card key={service.title}>
              <span className="serviceCardSheen" aria-hidden="true" />
              <div className="serviceCardTop">
                <span className="serviceCardIndex">{String(index + 1).padStart(2, "0")}</span>
                <span className="serviceCardLine" data-services-line aria-hidden="true" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
