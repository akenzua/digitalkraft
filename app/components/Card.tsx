import { ReactNode } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

interface CardProps {
  index: number;
  activeIndex: number;
  cardCount: number;
  title: string;
  kicker: string;
  isActive: boolean;
  onActivate: () => void;
  children: ReactNode;
  icon: ReactNode;
  surface: string;
  ink: string;
}

export default function Card({
  index,
  activeIndex,
  cardCount,
  title,
  kicker,
  isActive,
  onActivate,
  children,
  icon,
  surface,
  ink,
}: CardProps) {
  const stackTilts = ["-0.45deg", "0.35deg", "-0.25deg", "0.45deg", "-0.2deg"];
  const stackPosition =
    index <= activeIndex
      ? `calc(var(--card-reveal) * ${index})`
      : `calc(100% - (var(--card-reveal) * ${cardCount - index}))`;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % cardCount;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + cardCount) % cardCount;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = cardCount - 1;
    }

    if (nextIndex === null) return;

    event.preventDefault();
    document.getElementById(`tab-${nextIndex}`)?.focus();
  };

  return (
    <Box
      as="section"
      className="deck-card"
      data-active={isActive ? "true" : "false"}
      style={
        {
          "--card-surface": surface,
          "--card-ink": ink,
          "--card-index": index,
          "--card-tilt": stackTilts[index] ?? "0deg",
          "--card-position": stackPosition,
          zIndex: isActive ? 50 : index + 1,
        } as React.CSSProperties
      }
      onMouseEnter={onActivate}
      onFocusCapture={onActivate}
    >
      <button
        type="button"
        role="tab"
        aria-selected={isActive}
        aria-controls={`panel-${index}`}
        id={`tab-${index}`}
        className="card-tab"
        tabIndex={isActive ? 0 : -1}
        onClick={onActivate}
        onKeyDown={handleKeyDown}
      >
        <Flex className="card-index" align="center" justify="center">
          {String(index + 1).padStart(2, "0")}
        </Flex>
        <Text className="card-title">{title}</Text>
        <Box className="card-icon">{icon}</Box>
      </button>

      <Box
        id={`panel-${index}`}
        role="tabpanel"
        aria-labelledby={`tab-${index}`}
        className="card-content"
        aria-hidden={!isActive}
      >
        <Text className="card-kicker">{kicker}</Text>
        {children}
      </Box>
    </Box>
  );
}
