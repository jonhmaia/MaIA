import Image from "next/image";

export type ClientLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
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
];

function LogoTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul className="logoTrack" aria-hidden={ariaHidden || undefined}>
      {logos.map((logo) => (
        <li key={`${ariaHidden ? "dup" : "main"}-${logo.alt}`} className="logoSlide">
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
  return (
    <div className="logoCarousel" role="region" aria-label="Marcas parceiras">
      <div className="logoCarouselViewport">
        <div className="logoCarouselRail">
          <LogoTrack />
          <LogoTrack ariaHidden />
        </div>
      </div>
    </div>
  );
}
