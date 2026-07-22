import Image from "next/image";
import FaqAccordion from "./FaqAccordion";
import HeroAnimation from "./HeroAnimation";
import LogoCarousel from "./LogoCarousel";
import PageScroll from "./PageScroll";
import LampLight from "./LampLight";
import SectionDivider from "./SectionDivider";
import ServicesStair from "./ServicesStair";
import TypewriterWords from "./TypewriterWords";

function Brand({ priority = false }: { priority?: boolean }) {
  return (
    <span className="brand" aria-label="MaIA">
      <Image
        src="/logo.png"
        alt="MaIA"
        width={112}
        height={32}
        className="brandLogo"
        priority={priority}
      />
    </span>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

const cases = [
  {
    client: "ShipSmart",
    segment: "Logística e comércio exterior",
    logo: "/logos/shipsmart-logo.svg",
    logoWidth: 140,
    logoHeight: 40,
    challenge:
      "Operação dependia de fluxos manuais e ferramentas desconectadas para acompanhar pedidos e comunicação com clientes.",
    solution:
      "Plataforma sob medida que unificou operação, acompanhamento e comunicação em um fluxo contínuo e mais previsível.",
    result:
      "Produto em operação com processos centralizados e menos retrabalho no dia a dia da equipe.",
    visual: "ship",
  },
  {
    client: "Capim",
    segment: "Agronegócio e crédito",
    logo: "/logos/logo capim.svg",
    logoWidth: 140,
    logoHeight: 40,
    challenge:
      "Era preciso transformar uma jornada complexa de crédito em uma experiência clara, confiável e pronta para escalar.",
    solution:
      "Sistema digital sob medida, com experiência guiada e arquitetura preparada para evolução contínua do produto.",
    result:
      "Jornada mais clara para o usuário e base técnica estável para crescer sem refazer o produto do zero.",
    visual: "capim",
  },
  {
    client: "AUVP Capital",
    segment: "Investimentos e finanças",
    logo: "/logos/AUVP-CAPITAL-HORIZONTAL-AMARELA.svg",
    logoWidth: 160,
    logoHeight: 40,
    challenge:
      "A marca precisava de presença digital sólida e de um produto alinhado à confiança exigida pelo mercado financeiro.",
    solution:
      "Experiência digital sob medida, com identidade consistente e estrutura preparada para comunicação e operação.",
    result:
      "Presença digital mais profissional, coerente com a marca e pronta para acompanhar a evolução do negócio.",
    visual: "auvp",
  },
] as const;

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Entendemos o problema, o contexto e o objetivo de negócio antes de falar em solução.",
  },
  {
    n: "02",
    title: "Direção",
    text: "Definimos escopo, arquitetura e experiência — com clareza do que entra agora e do que fica para depois.",
  },
  {
    n: "03",
    title: "Construção",
    text: "Desenvolvemos em ciclos curtos e transparentes, com acompanhamento próximo em cada etapa.",
  },
  {
    n: "04",
    title: "Lançamento e evolução",
    text: "Colocamos no ar, acompanhamos o uso real e melhoramos com base no que o produto precisa crescer.",
  },
] as const;

const differentials = [
  "Comunicação direta",
  "Acompanhamento próximo",
  "Código sem caixa-preta",
  "Suporte após o lançamento",
] as const;

export default function Home() {
  return (
    <PageScroll>
      <section className="hero" id="inicio">
        <div className="heroGrid" aria-hidden="true" />

        <header className="siteHeader">
          <a href="#inicio" className="brandLink" aria-label="MaIA — início">
            <Brand priority />
          </a>

          <nav className="desktopNav" aria-label="Navegação principal">
            <a href="#servicos">Serviços</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="headerActions">
            <a className="headerLogin" href="mailto:contato@maiainteligencia.com.br">
              Fale conosco
            </a>
            <a className="pillButton pillButtonLight" href="mailto:contato@maiainteligencia.com.br">
              Diagnóstico <Arrow />
            </a>
          </div>

          <details className="mobileMenu">
            <summary aria-label="Abrir menu"><span /><span /></summary>
            <nav aria-label="Navegação móvel">
              <a href="#servicos">Serviços</a>
              <a href="#projetos">Projetos</a>
              <a href="#como-trabalhamos">Como trabalhamos</a>
              <a href="#faq">FAQ</a>
              <a href="mailto:contato@maiainteligencia.com.br">Agendar diagnóstico</a>
            </nav>
          </details>
        </header>

        <div className="heroInner sectionShell">
          <div className="heroCopy">
            <h1 data-hero-item>
              <span className="srOnly">
                Criamos sites, sistemas, plataformas e soluções digitais que impulsionam negócios.
              </span>
              <span className="heroTitleVisual" aria-hidden="true">
                <span>Criamos</span>
                <span className="typingLine"><TypewriterWords /></span>
                <span>que impulsionam</span>
                <span>negócios.</span>
              </span>
            </h1>
            <p className="heroDescription" data-hero-item>
              Da estratégia ao desenvolvimento, construímos tecnologia sob medida para pessoas,
              startups e empresas.
            </p>
            <div className="heroButtons" data-hero-item>
              <a className="pillButton pillButtonLight" href="mailto:contato@maiainteligencia.com.br">
                Tire sua ideia do papel <Arrow />
              </a>
              <a className="textButton" href="mailto:contato@maiainteligencia.com.br">
                <span className="playIcon" aria-hidden="true">▶</span>
                Fale conosco
              </a>
            </div>
          </div>

          <div className="heroVisual" data-parallax>
            <HeroAnimation />
          </div>
        </div>

        <div className="heroFoot" id="marcas" aria-labelledby="trust-heading">
          <LampLight />

          <div className="trustIntro sectionShell" data-reveal>
            <h2 id="trust-heading">Marcas que já construíram com a MaIA</h2>
          </div>

          <div data-reveal>
            <LogoCarousel />
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="servicesSection" id="servicos" aria-labelledby="services-heading">
        <div className="sectionShell">
          <ServicesStair />

          <div className="servicesCta" data-reveal>
            <a className="pillButton pillButtonMint servicesCtaButton" href="mailto:contato@maiainteligencia.com.br">
              Vamos construir o seu
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="projectsSection" id="projetos" aria-labelledby="projects-heading">
        <div className="sectionShell">
          <div className="projectsIntro" data-reveal>
            <h2 id="projects-heading">Projetos que saíram do papel e entraram em operação.</h2>
            <p>
              Cases reais de produtos construídos com clareza de problema, execução próxima e
              entrega pronta para uso.
            </p>
          </div>

          <div className="projectsList">
            {cases.map((item, index) => (
              <article
                key={item.client}
                className={`projectCase${index % 2 === 1 ? " projectCaseReverse" : ""}`}
                data-reveal
              >
                <div className="projectCopy">
                  <div className="projectClient">
                    <Image
                      src={item.logo}
                      alt={item.client}
                      width={item.logoWidth}
                      height={item.logoHeight}
                      className="projectClientLogo"
                    />
                    <span>{item.segment}</span>
                  </div>

                  <dl className="projectFacts">
                    <div>
                      <dt>Desafio</dt>
                      <dd>{item.challenge}</dd>
                    </div>
                    <div>
                      <dt>Solução</dt>
                      <dd>{item.solution}</dd>
                    </div>
                    <div>
                      <dt>Resultado</dt>
                      <dd>{item.result}</dd>
                    </div>
                  </dl>
                </div>

                <div className={`projectVisual projectVisual--${item.visual}`} aria-hidden="true">
                  <div className="projectScreen">
                    <div className="projectScreenBar">
                      <i /><i /><i />
                    </div>
                    <div className="projectScreenBody">
                      <div className="projectScreenBrand">
                        <Image
                          src={item.logo}
                          alt=""
                          width={item.logoWidth}
                          height={item.logoHeight}
                        />
                      </div>
                      <div className="projectScreenLines">
                        <span /><span /><span />
                      </div>
                      <div className="projectScreenPanels">
                        <span /><span />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="processSection" id="como-trabalhamos" aria-labelledby="process-heading">
        <div className="sectionShell">
          <div className="processIntro" data-reveal>
            <h2 id="process-heading">Da primeira conversa à evolução contínua.</h2>
            <p>
              Um caminho claro, sem surpresas: do diagnóstico ao lançamento, com acompanhamento de
              perto em cada etapa.
            </p>
          </div>

          <ol className="processSteps" data-stagger>
            {steps.map((step) => (
              <li key={step.n} className="processStep" data-stagger-item>
                <span className="processStepNum">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>

          <ul className="processDiffs" data-stagger>
            {differentials.map((item) => (
              <li key={item} data-stagger-item>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SectionDivider />

      <section className="faqSection" id="faq" aria-labelledby="faq-heading">
        <div className="sectionShell faqLayout">
          <div className="faqIntro" data-reveal>
            <h2 id="faq-heading">Perguntas frequentes</h2>
            <p>Respostas diretas para as dúvidas que mais aparecem antes de começar um projeto.</p>
          </div>
          <div data-reveal>
            <FaqAccordion />
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="finalCtaSection" id="contato" aria-labelledby="cta-heading">
        <div className="sectionShell finalCtaInner" data-reveal>
          <h2 id="cta-heading">Tem uma ideia, um gargalo ou um produto para evoluir?</h2>
          <p>
            Conte o contexto em poucos minutos. A gente ajuda a enxergar o próximo passo com
            clareza — sem compromisso de escopo fechado na primeira conversa.
          </p>
          <div className="finalCtaActions">
            <a className="pillButton pillButtonMint" href="mailto:contato@maiainteligencia.com.br">
              Agendar diagnóstico <Arrow />
            </a>
            <a className="textButton" href="mailto:contato@maiainteligencia.com.br">
              Enviar um e-mail
            </a>
          </div>
          <a className="finalCtaMail" href="mailto:contato@maiainteligencia.com.br">
            contato@maiainteligencia.com.br
          </a>
        </div>
      </section>

      <footer className="siteFooter">
        <div className="sectionShell" data-reveal>
          <div className="footerTop">
            <div className="footerBrand">
              <Brand />
              <p>Software house e soluções digitais sob medida.</p>
            </div>

            <div className="footerLinks">
              <div>
                <strong>Navegação</strong>
                <a href="#inicio">Início</a>
                <a href="#servicos">Serviços</a>
                <a href="#projetos">Projetos</a>
                <a href="#como-trabalhamos">Como trabalhamos</a>
                <a href="#faq">FAQ</a>
              </div>
              <div>
                <strong>Contato</strong>
                <a href="mailto:contato@maiainteligencia.com.br">contato@maiainteligencia.com.br</a>
                <a
                  href="https://instagram.com/maiainteligencia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="footerBottom">
            <span>© {new Date().getFullYear()} MaIA Inteligência. Todos os direitos reservados.</span>
            <span>Belém — PA</span>
          </div>
        </div>
      </footer>
    </PageScroll>
  );
}
