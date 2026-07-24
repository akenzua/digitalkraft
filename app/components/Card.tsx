import { ReactNode } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

interface CardProps {
  index: number;
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
        onClick={onActivate}
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
        {isActive && children}
      </Box>
    </Box>
  );
}
