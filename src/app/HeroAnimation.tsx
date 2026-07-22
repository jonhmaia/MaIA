export default function HeroAnimation() {
  return (
    <div
      className="heroAnim"
      role="img"
      aria-label="Ilustração animada de uma plataforma digital conectada a sites, sistemas e aplicativos"
    >
      <svg
        className="heroAnimSvg"
        viewBox="0 0 640 640"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="haBrowser" x1="180" y1="120" x2="460" y2="460" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8ec8ff" />
            <stop offset="1" stopColor="#4da3ff" />
          </linearGradient>
          <linearGradient id="haPanel" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#1a2433" />
            <stop offset="1" stopColor="#0d1420" />
          </linearGradient>
          <filter id="haGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <clipPath id="haCodeClip">
            <rect x="56" y="18" width="94" height="58" rx="4" />
          </clipPath>
          <path id="haPath1" d="M168 168 C210 150, 240 160, 268 198" />
          <path id="haPath2" d="M472 168 C440 150, 410 170, 390 205" />
          <path id="haPath3" d="M120 300 C170 290, 210 300, 255 320" />
        </defs>

        {/* connection lines */}
        <g className="haLines" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" strokeDasharray="4 6" fill="none">
          <use href="#haPath1" className="haLine haLine1" />
          <path className="haLine haLine2" d="M120 300 C170 290, 210 300, 255 320" />
          <use href="#haPath2" className="haLine haLine3" />
          <path className="haLine haLine4" d="M520 300 C480 280, 440 290, 400 320" />
          <path className="haLine haLine5" d="M200 470 C250 440, 280 420, 300 400" />
          <path className="haLine haLine6" d="M450 470 C410 440, 380 420, 360 400" />
        </g>

        {/* floating pulse dots */}
        <g filter="url(#haGlow)">
          <circle className="haPulse haPulse1" r="3.5" fill="#4da3ff">
            <animateMotion dur="3.2s" repeatCount="indefinite" path="M168 168 C210 150, 240 160, 268 198" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <circle className="haPulse haPulse2" r="3.5" fill="#8ec8ff">
            <animateMotion dur="3.8s" begin="-1.2s" repeatCount="indefinite" path="M472 168 C440 150, 410 170, 390 205" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="3.8s" begin="-1.2s" repeatCount="indefinite" />
          </circle>
          <circle className="haPulse haPulse3" r="3.5" fill="#4da3ff">
            <animateMotion dur="4.2s" begin="-2s" repeatCount="indefinite" path="M120 300 C170 290, 210 300, 255 320" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="4.2s" begin="-2s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* users icon */}
        <g transform="translate(118 128)">
          <g className="haFloat haFloatA">
            <circle cx="28" cy="28" r="28" fill="#2388ff" />
            <circle cx="28" cy="22" r="8" fill="#fff" opacity="0.95" />
            <ellipse cx="28" cy="40" rx="13" ry="8" fill="#fff" opacity="0.95" />
            <circle cx="44" cy="24" r="5.5" fill="#cfe6ff" />
          </g>
        </g>

        {/* check icon */}
        <g transform="translate(300 78)">
          <g className="haFloat haFloatB">
            <circle cx="22" cy="22" r="22" fill="#4da3ff" />
            <path d="M12 22.5 L19 29.5 L33 15.5" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>

        {/* cloud icon */}
        <g transform="translate(470 118)">
          <g className="haFloat haFloatC">
            <circle cx="28" cy="28" r="28" fill="#1e6fd4" />
            <path
              d="M18 34h22a8 8 0 0 0 0-16 11 11 0 0 0-21.2-2.5A7.5 7.5 0 0 0 18 34z"
              fill="#fff"
              opacity="0.95"
            />
          </g>
        </g>

        {/* gear icon */}
        <g transform="translate(508 268)">
          <g className="haFloat haFloatD">
            <circle cx="26" cy="26" r="26" fill="#2388ff" />
            <g transform="translate(26 26)">
              <g className="haGearSpin">
                <path
                  d="M0-14 L3.2-9.4 L8.4-10.6 L10.6-5.4 L15.8-3.2 L14 2 L17.2 6.4 L12.2 9 L12.2 14.4 L6.4 13 L2.8 17.2 L-1.2 13.4 L-6.8 14.8 L-8.2 9.2 L-13.4 7.6 L-11.2 2.2 L-15.2-1.6 L-10.4-5 L-10.8-10.4 L-5.2-9.4 Z"
                  fill="#fff"
                />
                <circle r="5.2" fill="#2388ff" />
              </g>
            </g>
          </g>
        </g>

        {/* sitemap card */}
        <g transform="translate(72 268)">
          <g className="haFloat haFloatE">
            <rect width="86" height="72" rx="12" fill="url(#haPanel)" stroke="rgba(255,255,255,0.1)" />
            <rect x="30" y="12" width="26" height="14" rx="4" fill="#4da3ff" />
            <rect x="12" y="42" width="22" height="12" rx="3" fill="#6bb4ff" opacity="0.85" />
            <rect x="52" y="42" width="22" height="12" rx="3" fill="#6bb4ff" opacity="0.85" />
            <path d="M43 26v10M43 36H23M43 36h20" stroke="#8ec8ff" strokeWidth="1.5" opacity="0.7" />
          </g>
        </g>

        {/* central browser */}
        <g className="haBrowser">
          <rect x="210" y="168" width="220" height="250" rx="18" fill="url(#haBrowser)" />
          <rect x="222" y="182" width="196" height="222" rx="12" fill="#f4f9ff" />
          <circle cx="236" cy="196" r="4" fill="#ff6b6b" />
          <circle cx="250" cy="196" r="4" fill="#ffd166" />
          <circle cx="264" cy="196" r="4" fill="#06d6a0" />
          <rect x="280" y="190" width="120" height="12" rx="6" fill="#d7e8f8" />

          <rect x="236" y="220" width="72" height="52" rx="8" fill="#b7d8f7" />
          <path d="M248 252 L260 236 L274 252 L284 244 L300 258 H248 Z" fill="#4da3ff" opacity="0.55" />
          <circle cx="292" cy="232" r="5" fill="#fff" opacity="0.8" />

          <rect x="318" y="220" width="78" height="16" rx="4" fill="#c9dff5" />
          <rect x="318" y="242" width="64" height="10" rx="3" fill="#d7e8f8" />
          <rect x="318" y="258" width="52" height="10" rx="3" fill="#d7e8f8" />

          <rect x="236" y="286" width="72" height="52" rx="8" fill="#a8cff3" />
          <path d="M248 318 L260 302 L274 318 L284 310 L300 324 H248 Z" fill="#2388ff" opacity="0.5" />

          <rect x="318" y="286" width="78" height="52" rx="8" fill="#e8f2fc" />
          <g transform="translate(357 312)">
            <g className="haPie">
              <circle r="16" fill="#4da3ff" />
              <path d="M0 0 L0 -16 A16 16 0 0 1 14 8 Z" fill="#8ec8ff" />
              <circle r="7" fill="#e8f2fc" />
            </g>
          </g>

          <rect x="236" y="352" width="160" height="10" rx="3" fill="#d0e4f6" />
          <rect x="236" y="370" width="120" height="10" rx="3" fill="#dceaf8" />
        </g>

        {/* person on top */}
        <g transform="translate(278 108)">
          <g className="haFloat haFloatF">
            <ellipse cx="42" cy="58" rx="28" ry="8" fill="#1a2a3d" opacity="0.35" />
            <rect x="22" y="34" width="40" height="26" rx="10" fill="#2b6cb0" />
            <circle cx="42" cy="24" r="12" fill="#f0c7a8" />
            <path d="M30 18 C34 10, 50 10, 54 18" fill="#1a1a1a" />
            <rect x="34" y="40" width="28" height="16" rx="3" fill="#0d1420" />
            <rect x="38" y="44" width="20" height="8" rx="2" fill="#4da3ff" opacity="0.7" />
          </g>
        </g>

        {/* designer with image card */}
        <g transform="translate(148 330)">
          <g className="haFloat haFloatG">
            <circle cx="28" cy="18" r="11" fill="#f0c7a8" />
            <path d="M18 14 C22 6, 36 6, 38 14" fill="#2a1a12" />
            <rect x="14" y="30" width="28" height="34" rx="10" fill="#5b8fd4" />
            <g className="haCardLift">
              <rect x="36" y="24" width="42" height="32" rx="6" fill="#b7d8f7" stroke="#fff" strokeWidth="1.5" />
              <path d="M42 46 L48 36 L56 46 L62 40 L72 50 H42 Z" fill="#4da3ff" opacity="0.55" />
            </g>
          </g>
        </g>

        {/* coder with code window */}
        <g transform="translate(210 450)">
          <g className="haFloat haFloatH">
            <rect x="48" y="8" width="110" height="78" rx="10" fill="url(#haPanel)" stroke="rgba(255,255,255,0.12)" />
            <g clipPath="url(#haCodeClip)">
              <g className="haCodeLines">
                <rect x="56" y="20" width="54" height="5" rx="2" fill="#4da3ff" opacity="0.85" />
                <rect x="56" y="30" width="72" height="5" rx="2" fill="#6bb4ff" opacity="0.55" />
                <rect x="56" y="40" width="40" height="5" rx="2" fill="#8ec8ff" opacity="0.7" />
                <rect x="56" y="50" width="64" height="5" rx="2" fill="#4da3ff" opacity="0.45" />
                <rect x="56" y="60" width="48" height="5" rx="2" fill="#6bb4ff" opacity="0.65" />
                <rect x="56" y="70" width="70" height="5" rx="2" fill="#8ec8ff" opacity="0.4" />
                <rect x="56" y="80" width="52" height="5" rx="2" fill="#4da3ff" opacity="0.75" />
                <rect x="56" y="90" width="66" height="5" rx="2" fill="#6bb4ff" opacity="0.5" />
              </g>
            </g>
            <circle cx="28" cy="42" r="11" fill="#f0c7a8" />
            <path d="M18 38 C22 30, 36 30, 38 38" fill="#1a1a1a" />
            <rect x="14" y="54" width="28" height="30" rx="9" fill="#2f5f98" />
          </g>
        </g>

        {/* settings / sliders */}
        <g transform="translate(380 460)">
          <g className="haFloat haFloatI">
            <rect width="100" height="72" rx="12" fill="url(#haPanel)" stroke="rgba(255,255,255,0.1)" />
            <line x1="16" y1="22" x2="84" y2="22" stroke="#3a4a5e" strokeWidth="4" strokeLinecap="round" />
            <line x1="16" y1="38" x2="84" y2="38" stroke="#3a4a5e" strokeWidth="4" strokeLinecap="round" />
            <line x1="16" y1="54" x2="84" y2="54" stroke="#3a4a5e" strokeWidth="4" strokeLinecap="round" />
            <circle className="haSlider haSlider1" cx="40" cy="22" r="6" fill="#4da3ff" />
            <circle className="haSlider haSlider2" cx="62" cy="38" r="6" fill="#8ec8ff" />
            <circle className="haSlider haSlider3" cx="34" cy="54" r="6" fill="#2388ff" />
            <circle cx="118" cy="40" r="11" fill="#f0c7a8" />
            <path d="M108 36 C112 28, 126 28, 128 36" fill="#3a2418" />
            <rect x="104" y="52" width="28" height="30" rx="9" fill="#4a7fc0" />
          </g>
        </g>

        {/* chart card */}
        <g transform="translate(448 330)">
          <g className="haFloat haFloatJ">
            <rect width="92" height="78" rx="12" fill="url(#haPanel)" stroke="rgba(255,255,255,0.1)" />
            <path
              className="haChart"
              d="M14 54 L28 42 L42 48 L56 28 L78 36"
              stroke="#4da3ff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle className="haChartDot" cx="78" cy="36" r="4" fill="#8ec8ff" />
            <circle cx="46" cy="92" r="11" fill="#f0c7a8" />
            <path d="M36 88 C40 80, 54 80, 56 88" fill="#1a1a1a" />
            <rect x="32" y="104" width="28" height="28" rx="9" fill="#2f5f98" />
            <rect x="28" y="128" width="36" height="8" rx="3" fill="#1a2a3d" />
          </g>
        </g>
      </svg>
    </div>
  );
}
