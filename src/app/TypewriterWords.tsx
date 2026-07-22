"use client";

import { useEffect, useState } from "react";

const words = ["sites", "sistemas", "plataformas", "soluções digitais"];

export default function TypewriterWords() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0]);
      return;
    }

    const word = words[wordIndex];
    const reachedEnd = !isDeleting && text === word;
    const reachedStart = isDeleting && text === "";
    const delay = reachedEnd ? 1600 : reachedStart ? 280 : isDeleting ? 45 : 82;

    const timeout = window.setTimeout(() => {
      if (reachedEnd) {
        setIsDeleting(true);
        return;
      }

      if (reachedStart) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }

      const nextLength = text.length + (isDeleting ? -1 : 1);
      setText(word.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, text, wordIndex]);

  return (
    <span className="typewriterWord">
      {text}
      <span className="typewriterCursor" aria-hidden="true" />
    </span>
  );
}
