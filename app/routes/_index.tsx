import { useState } from "react";
import { Home, Settings, Briefcase, Info, Mail } from "lucide-react";
import Card from "~/components/Card";
import Typewriter from "~/components/TypeWriter";
import Services from "../components/Services";
import Welcome from "../components/Home";
import Portfolio from "~/components/Portfolio";
import About from "~/components/About";
import Contact from "~/components/Contact";

export default function CardStack() {
  const peek = 48;
  const cards = [
    {
      id: 0,
      title: "Home",
      content: <Welcome />,
      icon: <Home size={24} />,
      bgClass: "bg-primary",
    },
    {
      id: 1,
      title: "Services",
      content: <Services />,
      icon: <Settings size={24} />,
      bgClass: "bg-service",
    },
    {
      id: 2,
      title: "Portfolio",
      content: <Portfolio />,
      icon: <Briefcase size={24} />,
      bgClass: "bg-secondary",
    },
    {
      id: 3,
      title: "About",
      content: <About />,
      icon: <Info size={24} />,
      bgClass: "bg-accent",
    },
    {
      id: 4,
      title: "Contact",
      content: <Contact />,
      icon: <Mail size={24} />,
      bgClass: "bg-neutral",
    },
  ];
  const [active, setActive] = useState(0);
  const n = cards.length;

  return (
    <div className="flex flex-col h-screen bg-bg-light overflow-hidden lg:relative">
      {cards.map((card, i) => {
        const isActive = i === active;
        // desktop layout calculations
        const left =
          i < active
            ? `${i * peek}px`
            : i > active
            ? `calc(100% - ${peek * (n - i)}px)`
            : `${i * peek}px`;
        const width = isActive
          ? `calc(100% - ${peek * (n - 1)}px)`
          : `${peek}px`;
        const zIndex = isActive
          ? n + 1
          : i < active
          ? i + 1
          : active + 1 + (n - i);

        return (
          <Card
            key={card.id}
            isActive={isActive}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            style={
              {
                "--left": left,
                "--width": width,
                zIndex,
              } as React.CSSProperties
            }
            icon={card.icon}
            bgClass={card.bgClass}
          >
            {card.id === 0 && (
              <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-bg-light text-primary flex items-center justify-center font-bold">
                DK
              </div>
            )}
            {(card.id === 0 || isActive) && card.content}
            {/* {isActive && card.content} */}
          </Card>
        );
      })}
    </div>
  );
}
