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
  const containerRef = useRef<HTMLSpanElement>(null);

  // Compute max length for fixed width
  const maxLength = Math.max(...words.map((w) => w.length));

  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (subIndex === words[wordIndex].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), delay);
      return;
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
  ]);

  return (
    <span
      ref={containerRef}
      className="typewriter"
      style={{ width: `${maxLength}ch` }}
      aria-live="polite"
    >
      <span
        className="inline-block overflow-hidden"
        style={{ width: `${subIndex}ch` }}
      >
        {words[wordIndex].slice(0, subIndex)}
      </span>
      <span className="inline-block w-1">{blink ? "|" : " "}</span>
    </span>
  );
}
