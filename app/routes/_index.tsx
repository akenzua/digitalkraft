import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ArrowDownRight, Asterisk, BriefcaseBusiness, Layers3, Mail, Sparkles } from "lucide-react";
import type { MetaFunction } from "@remix-run/node";
import Card from "~/components/Card";
import Services from "~/components/Services";
import Welcome from "~/components/Home";
import Portfolio from "~/components/Portfolio";
import About from "~/components/About";
import Contact from "~/components/Contact";

export const meta: MetaFunction = () => [
  { title: "Digital Kraft — Senior Product Partners, Strategy to Scale" },
  {
    name: "description",
    content:
      "Digital Kraft helps ambitious teams validate, design, engineer and scale dependable mobile applications, SaaS products and complex digital platforms.",
  },
  { name: "application-name", content: "Digital Kraft" },
  { name: "author", content: "Digital Kraft" },
  { name: "robots", content: "index, follow" },
  { property: "og:type", content: "website" },
  { property: "og:site_name", content: "Digital Kraft" },
  { property: "og:title", content: "Digital Kraft — Senior Product Partners, Strategy to Scale" },
  {
    property: "og:description",
    content:
      "We help ambitious teams validate, design, engineer and scale dependable mobile applications, SaaS products and complex digital platforms.",
  },
  { property: "og:url", content: "https://digitalkraft.co.uk/" },
  { name: "twitter:card", content: "summary" },
  { name: "twitter:title", content: "Digital Kraft — Senior Product Partners, Strategy to Scale" },
  {
    name: "twitter:description",
    content:
      "Senior product partners for dependable mobile applications, SaaS products and complex digital platforms.",
  },
];

export const links = () => [
  { rel: "canonical", href: "https://digitalkraft.co.uk/" },
];

export default function CardStack() {
  const cards = [
    {
      id: 0,
      title: "Start",
      kicker: "Digital Kraft®",
      content: <Welcome />,
      icon: <Sparkles size={18} />,
      surface: "#f2ff79",
      ink: "#11140d",
    },
    {
      id: 1,
      title: "Expertise",
      kicker: "What we make",
      content: <Services />,
      icon: <Layers3 size={18} />,
      surface: "#ff6b46",
      ink: "#1c0e09",
    },
    {
      id: 2,
      title: "Selected work",
      kicker: "Proof, not promises",
      content: <Portfolio />,
      icon: <BriefcaseBusiness size={18} />,
      surface: "#a99cff",
      ink: "#120f23",
    },
    {
      id: 3,
      title: "The studio",
      kicker: "Small by design",
      content: <About />,
      icon: <Asterisk size={18} />,
      surface: "#d9e0d5",
      ink: "#111510",
    },
    {
      id: 4,
      title: "Start a project",
      kicker: "Make it real",
      content: <Contact />,
      icon: <Mail size={18} />,
      surface: "#176b4d",
      ink: "#f5f2e9",
    },
  ];
  const [active, setActive] = useState(0);

  return (
    <Box as="main" className="site-shell">
      <Box className="ambient ambient-one" aria-hidden="true" />
      <Box className="ambient ambient-two" aria-hidden="true" />

      <Flex as="header" className="site-header" align="center" justify="space-between">
        <Flex align="center" gap="3">
          <Flex className="brand-mark" align="center" justify="center">DK</Flex>
          <Box>
            <Text className="brand-name">DIGITAL KRAFT</Text>
            <Text className="brand-detail">Validate · Build · Scale</Text>
          </Box>
        </Flex>
        <Flex align="center" gap="2" className="availability">
          <Box className="status-dot" />
          <Text>Booking Q3 projects</Text>
        </Flex>
      </Flex>

      <Box className="deck-wrap">
        <Box className="deck" role="tablist" aria-label="Digital Kraft studio pages">
          {cards.map((card, i) => (
            <Card
              key={card.id}
              index={i}
              activeIndex={active}
              cardCount={cards.length}
              title={card.title}
              kicker={card.kicker}
              isActive={i === active}
              onActivate={() => setActive(i)}
              icon={card.icon}
              surface={card.surface}
              ink={card.ink}
            >
              {card.content}
            </Card>
          ))}
        </Box>
      </Box>

      <Flex as="footer" className="site-footer" align="center" justify="space-between">
        <Text>Senior product partners from strategy to scale</Text>
        <Flex align="center" gap="2">
          <Text>Hover or tap a card</Text>
          <ArrowDownRight size={14} />
        </Flex>
      </Flex>
    </Box>
  );
}
