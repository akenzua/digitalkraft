import Typewriter from "./TypeWriter";

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center">
      <Typewriter
        words={[
          "npm install dev .....",
          "npm open app .....",
          "npm launch app .....",
        ]}
        typingSpeed={150}
        deletingSpeed={100}
        delay={1000}
      />
    </div>
  );
}
