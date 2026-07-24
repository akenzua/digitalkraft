import { useState, useEffect, useRef } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number; // ms per character
  deletingSpeed?: number; // ms per character
  delay?: number; // pause after a word is complete
}

export default function Typewriter({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  delay = 1000,
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  // Compute max length for fixed width
  const maxLength = Math.max(...words.map((w) => w.length));

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(id);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;
    if (subIndex === words[wordIndex].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setWordIndex((wi) => (wi + 1) % words.length);
      return;
    }
    const timeout = setTimeout(
      () => setSubIndex((si) => si + (isDeleting ? -1 : 1)),
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [
    subIndex,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delay,
    reduceMotion,
  ]);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span
        ref={containerRef}
        className="typewriter"
        style={{ width: `${maxLength}ch` }}
        aria-hidden="true"
      >
        <span
          className="inline-block overflow-hidden"
          style={{ width: reduceMotion ? `${words[0].length}ch` : `${subIndex}ch` }}
        >
          {reduceMotion ? words[0] : words[wordIndex].slice(0, subIndex)}
        </span>
        {!reduceMotion && <span className="inline-block w-1">{blink ? "|" : " "}</span>}
      </span>
    </>
  );
}
