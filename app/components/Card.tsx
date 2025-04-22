import { ReactNode } from "react";

interface CardProps {
  isActive: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
  style: React.CSSProperties;
  children: ReactNode;
  icon?: ReactNode;
  bgClass: string;
}

export default function Card({
  isActive,
  onMouseEnter,
  style,
  children,
  icon,
  bgClass,
}: CardProps) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onClick={onMouseEnter}
      className={
        `flex w-full transition-all duration-300 ease-in-out ` +
        `${isActive ? "flex-grow shadow-2xl" : "flex-none shadow-lg"} ` +
        `lg:absolute lg:top-0 lg:left-[var(--left)] lg:w-[var(--width)] lg:h-full lg:overflow-visible`
      }
      style={style}
    >
      <div className={`${bgClass} w-full p-8 relative`}>
        {children}
        {icon && (
          <div className="absolute bottom-4 left-4 text-bg-light hover:text-accent transition-colors">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
