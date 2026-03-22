import React from 'react';

function App() {
  return (
    <>
      <div id="particles-js"></div>

      <header className="header">
        <nav className="navbar container">
          <div className="navbar-left">
            <a href="#home" className="logo">
              <img
                src="/images/logo.png"
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
            <span className="hero-tag-accent">Simplificar para crescer</span>
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
              <a href="#contact" className="btn btn-primary"
                >Agendar Diagnóstico <span className="arrow-icon">➔</span></a
              >
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
