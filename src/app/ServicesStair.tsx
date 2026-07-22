"use client";

import Image from "next/image";
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

function splitTitle(title: string) {
  return title.toUpperCase().split("").map((char, index) => (
    <span className="serviceLetter" data-service-letter key={`${title}-${index}`}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

export default function ServicesStair() {
  const stage = useRef<HTMLDivElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const root = stage.current;
      if (!root || !contextSafe) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const panels = gsap.utils.toArray<HTMLElement>("[data-service-panel]", root);
        const grid = root.querySelector<HTMLElement>("[data-services-grid]");
        const intro = root.querySelector<HTMLElement>("[data-services-intro]");
        const introItems = gsap.utils.toArray<HTMLElement>("[data-services-intro-item]", root);
        const cards = gsap.utils.toArray<HTMLElement>("[data-service-card]", root);
        const watermark = root.querySelector<HTMLElement>("[data-service-watermark]");
        if (!panels.length || !grid || !intro || !cards.length || !watermark) return;

        const hoverCleanups: Array<() => void> = [];

        cards.forEach((card) => {
          const sheen = card.querySelector<HTMLElement>(".serviceCardSheen");
          const line = card.querySelector<HTMLElement>(".serviceCardLine");

          gsap.set(sheen, { opacity: 0.72 });

          const onEnter = contextSafe(() => {
            card.classList.add("is-hover");
            gsap.to(card, {
              y: -8,
              scale: 1.025,
              duration: 0.55,
              ease: "power3.out",
              overwrite: "auto",
            });
            gsap.to(sheen, {
              opacity: 1,
              duration: 0.55,
              ease: "power2.out",
              overwrite: "auto",
            });
            gsap.to(line, {
              scaleX: 1.35,
              duration: 0.5,
              ease: "power2.out",
              overwrite: "auto",
            });
          });

          const onLeave = contextSafe(() => {
            card.classList.remove("is-hover");
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
              overwrite: "auto",
            });
            gsap.to(sheen, {
              opacity: 0.72,
              duration: 0.65,
              ease: "power2.out",
              overwrite: "auto",
            });
            gsap.to(line, {
              scaleX: 1,
              duration: 0.6,
              ease: "power2.out",
              overwrite: "auto",
            });
          });

          card.addEventListener("pointerenter", onEnter);
          card.addEventListener("pointerleave", onLeave);
          hoverCleanups.push(() => {
            card.removeEventListener("pointerenter", onEnter);
            card.removeEventListener("pointerleave", onLeave);
            card.classList.remove("is-hover");
          });
        });

        gsap.set(panels, { autoAlpha: 0, y: 0, scale: 1 });
        gsap.set(root.querySelectorAll("[data-service-letter]"), {
          autoAlpha: 0,
          y: 64,
          rotateX: -52,
        });
        gsap.set(root.querySelectorAll("[data-service-glass]"), {
          autoAlpha: 0,
          y: 56,
          scale: 0.9,
        });
        gsap.set(root.querySelectorAll("[data-service-line]"), { scaleX: 0, autoAlpha: 0 });
        gsap.set(root.querySelectorAll("[data-service-copy]"), { autoAlpha: 0, y: 18 });
        gsap.set(intro, { autoAlpha: 0 });
        gsap.set(introItems, { autoAlpha: 0, y: 24 });
        gsap.set(grid, { autoAlpha: 0 });
        gsap.set(cards, { autoAlpha: 0, y: 40, scale: 0.94 });
        gsap.set(watermark, { autoAlpha: 0.2 });

        const getScrollDistance = () =>
          `+=${(panels.length + 1.35) * window.innerHeight * 1.05}`;

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: getScrollDistance,
            scrub: 0.55,
            once: true,
            invalidateOnRefresh: true,
          },
        });

        panels.forEach((panel, index) => {
          const letters = panel.querySelectorAll<HTMLElement>("[data-service-letter]");
          const glass = panel.querySelector<HTMLElement>("[data-service-glass]");
          const line = panel.querySelector<HTMLElement>("[data-service-line]");
          const copy = panel.querySelector<HTMLElement>("[data-service-copy]");
          if (!glass || !line || !copy) return;

          const label = `service-${index}`;

          tl.addLabel(label)
            .set(panel, { autoAlpha: 1, y: 0, scale: 1 }, label)
            .to(
              letters,
              {
                autoAlpha: 1,
                y: 0,
                rotateX: 0,
                duration: 0.6,
                stagger: 0.04,
                ease: "power3.out",
              },
              label,
            )
            .to(
              glass,
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.55,
                ease: "power3.out",
              },
              `${label}+=0.48`,
            )
            .to(
              line,
              {
                autoAlpha: 1,
                scaleX: 1,
                duration: 0.55,
                ease: "power3.out",
              },
              `${label}+=0.52`,
            )
            .to(
              copy,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.38,
                ease: "power2.out",
              },
              `${label}+=0.72`,
            )
            .to({}, { duration: 0.35 });

          tl.to(
            panel,
            {
              autoAlpha: 0,
              y: -36,
              scale: 0.96,
              duration: 0.4,
              ease: "power2.in",
            },
            "+=0.04",
          );
        });

        tl.addLabel("grid")
          .to(
            watermark,
            {
              autoAlpha: 0,
              duration: 0.35,
              ease: "power2.out",
            },
            "grid",
          )
          .set(grid, { autoAlpha: 1 }, "grid")
          .set(intro, { autoAlpha: 1 }, "grid")
          .to(
            introItems,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.45,
              stagger: 0.08,
              ease: "power3.out",
            },
            "grid",
          )
          .to(
            cards,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.55,
              stagger: 0.08,
              ease: "power3.out",
            },
            "grid+=0.1",
          )
          .to({}, { duration: 0.55 });

        // Mantém a geometria da seção no retorno sem religar a timeline one-shot.
        ScrollTrigger.create({
          trigger: root,
          start: "top top",
          end: getScrollDistance,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        return () => {
          hoverCleanups.forEach((cleanup) => cleanup());
        };
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(root.querySelectorAll("[data-service-panel]"), {
          autoAlpha: 0,
          visibility: "hidden",
        });
        gsap.set(root.querySelector("[data-service-watermark]"), {
          autoAlpha: 0,
          visibility: "hidden",
        });
        gsap.set(root.querySelector("[data-services-intro]"), {
          autoAlpha: 1,
          clearProps: "transform",
        });
        gsap.set(root.querySelectorAll("[data-services-intro-item]"), {
          autoAlpha: 1,
          clearProps: "transform",
        });
        gsap.set(root.querySelector("[data-services-grid]"), {
          autoAlpha: 1,
          clearProps: "transform",
        });
        gsap.set(root.querySelectorAll("[data-service-card]"), {
          autoAlpha: 1,
          clearProps: "transform",
        });
      });

      return () => mm.revert();
    },
    { scope: stage },
  );

  return (
    <div className="servicesStairStage" ref={stage}>
      <div className="servicesIntro" data-services-intro>
        <h2 id="services-heading" data-services-intro-item>
          O que construímos
        </h2>
        <p data-services-intro-item>
          Da presença digital à operação inteligente — tecnologia sob medida para crescer com
          clareza.
        </p>
      </div>

      <div className="servicesShowcase" aria-label="Serviços da MaIA">
        <div className="servicesShowcaseGlow" aria-hidden="true" />

        <div className="serviceWatermark" data-service-watermark aria-hidden="true">
          <Image
            src="/logo.png"
            alt=""
            width={160}
            height={46}
            className="serviceWatermarkLogo"
          />
        </div>

        {services.map((service) => (
          <article className="servicePanel" data-service-panel key={`panel-${service.title}`}>
            <h3 className="serviceTitle" aria-label={service.title}>
              <span className="serviceTitleTrack" aria-hidden="true">
                {splitTitle(service.title)}
              </span>
            </h3>
            <div className="serviceGlass" data-service-glass>
              <span className="serviceGlassSheen" aria-hidden="true" />
              <span className="serviceGlassLine" data-service-line aria-hidden="true" />
              <p data-service-copy>{service.description}</p>
            </div>
          </article>
        ))}

        <div className="servicesGrid" data-services-grid>
          {services.map((service, index) => (
            <article className="serviceCard" data-service-card key={`card-${service.title}`}>
              <span className="serviceCardSheen" aria-hidden="true" />
              <div className="serviceCardTop">
                <span className="serviceCardIndex">{String(index + 1).padStart(2, "0")}</span>
                <span className="serviceCardLine" aria-hidden="true" />
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
