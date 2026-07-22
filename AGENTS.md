<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:maia-design-rules -->
# Design MaIA — marca azul

Fonte da verdade: seções **hero** e **marcas** (`heroFoot` + `LampLight`). A regra completa e sempre aplicada está em [`.cursor/rules/maia-design.mdc`](.cursor/rules/maia-design.mdc).

Resumo obrigatório:

- Fundo preto `#000000`; acento azul `#4da3ff` / `#2388ff` (tokens `--mint` / `--mint-strong` — nomes legados, cor é azul)
- Atmosfera por luz azul difusa (radiais blur), não por cards nem gradientes roxos
- Tipografia Geist; headlines grandes com letter-spacing negativo
- CTAs pill branco ou azul com glow azul fraco
- Proibido: roxo, verde mint real, cream/terracotta, layout jornal, cards no hero
- Motion com GSAP + `prefers-reduced-motion`
<!-- END:maia-design-rules -->
