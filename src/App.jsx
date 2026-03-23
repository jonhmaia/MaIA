import React, { useEffect } from 'react';
import Chatbox from './components/Chatbox';
import IntegrationsSection from './components/IntegrationsSection';
import FeaturesSection from './components/FeaturesSection';
import SolutionsSection from './components/SolutionsSection';
import FooterSection from './components/FooterSection';
import FAQSection from './components/FAQSection';

const clientLogos = [
  "arthur camapum.avif",
  "logo aktoria.png",
  "logo capim.svg",
  "logo clubinho.svg",
  "logoceia.png",
  "watrix.svg"
];

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });

    const hiddenElements = document.querySelectorAll('.fade-in-section');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div id="particles-js"></div>

      <header className="header">
        <nav className="navbar container">
          <div className="navbar-left">
            <a href="#home" className="logo">
              <img
                src="/images/LOGO.svg"
                alt="Logo MaIA"
                className="logo-img-header"
              />
            </a>
          </div>

          <ul className="nav-list1 flex flex-col md:flex-row md:space-x-4">
            <li className="nav-item">
              <a href="#home" className="nav-link active">Início</a>
            </li>
            <li className="nav-item">
              <a href="#chatbot-section-nav" className="nav-link">Assistente</a>
            </li>
          </ul>

          <button
            className="nav-toggle"
            aria-label="Abrir menu"
            aria-expanded="false"
          >
            <span className="hamburger-icon"></span>
          </button>

          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link active">Home</a>
            </li>
            <li className="nav-item mobile-only-item">
              <a href="#contact" className="btn btn-agendar-mobile"
              >Agendar diagnóstico <span className="arrow-icon">➔</span></a
              >
            </li>
            <li className="nav-item mobile-only-item social-icons-mobile">
              <a
                href="https://www.instagram.com/maia.inteligencia?igsh=c3VxZGtnMWYwcG96"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <img src="/images/instagram.png" alt="Instagram" />
              </a>
              <a
                href="mailto:contato@maiainteligencia.com.br"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
                title="Email"
              >
                <img src="/images/email.png" alt="Email" />
              </a>
            </li>
          </ul>

          <div className="navbar-right">
            <div className="social-icons-header">
              <a
                href="https://www.instagram.com/maia.inteligencia?igsh=c3VxZGtnMWYwcG96"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <img src="/images/instagram.png" alt="Instagram" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <img src="/images/email.png" alt="Email" />
              </a>
            </div>
            <a href="#contact" className="btn btn-agendar">Agendar diagnóstico</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <video autoPlay loop muted playsInline className="hero-bg-video">
            <source src="/videos/download.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay"></div>
          <div className="hero-content">
            <span className="hero-tag-accent">Se torne uma empresa de tecnologia</span>
            <h1>
              Transformando<br />seu negócio com<br /><span className="highlight"
              >Inteligência Artificial</span
              >
            </h1>
            <p>
              Potencializando a eficiência da sua equipe e reduzindo custos desnecessários. Nosso time implementa inteligência artificial nos setores
              estratégicos do seu negócio.
            </p>
            <div className="hero-buttons">
              <a href="#about" className="btn btn-primary"
              >Conheça mais <span className="arrow-icon">➔</span></a
              >
            </div>
          </div>

          {/* --- Carrossel de Clientes --- */}
          <div className="logo-carousel-wrapper">
            <div className="logo-carousel-track">
              {/* Duplicamos a lista 4x para garantir loop contínuo */}
              {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
                <img key={idx} src={`/logos/${logo}`} alt="Logo Cliente" />
              ))}
            </div>
            <p className="text-xs text-slate-500 uppercase tracking-widest text-center mt-4">Algumas marcas com as quais já colaboramos</p>
          </div>
        </section>

        {/* --- Segunda Seção: Box do Chatbot --- */}
        <section id="chatbot-section" className="chatbot-overlap-section container relative z-10 w-full px-4 mb-20 md:mb-32">
          <Chatbox />
        </section>

        {/* --- Terceira Seção: Catálogo de Integrações (Escondida temporariamente) --- */}
        {/* <IntegrationsSection /> */}

        {/* --- Quarta Seção: Features (O que você recebe) --- */}
        <FeaturesSection />

        {/* --- Quinta Seção: Soluções / Synergy Dashboard --- */}
        <SolutionsSection />

        {/* --- Sexta Seção: Dúvidas Frequentes FAQ --- */}
        <FAQSection />

      </main>

      {/* --- Footer Base c/ Planeta Terra --- */}
      <FooterSection />
    </>
  );
}

export default App;
