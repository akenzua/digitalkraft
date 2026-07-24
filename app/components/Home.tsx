import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { ArrowUpRight } from "lucide-react";
import Typewriter from "./TypeWriter";

export default function Home() {
  return (
    <Flex className="page-content home-content" direction="column" justify="space-between">
      <Box>
        <Text className="eyebrow">Senior product partners · From strategy to scale</Text>
        <Heading as="h1" className="hero-heading">
          We turn high-stakes ideas into dependable products—and
          <Box as="span" className="heading-accent"> stay accountable as they scale.</Box>
        </Heading>
        <Text className="hero-copy">
          We help ambitious teams validate the opportunity, make the critical product and
          technical decisions, then design, engineer and operate what comes next. Mobile,
          SaaS and complex platforms—delivered faster with AI, governed by senior judgment.
        </Text>
      </Box>

      <Flex className="home-bottom" align="end" justify="space-between" gap="8">
        <Box>
          <Text className="micro-label">What we move forward</Text>
          <Typewriter
            words={["validated opportunities", "production launches", "dependable systems", "confident scale"]}
            typingSpeed={72}
            deletingSpeed={38}
            delay={1500}
          />
        </Box>
        <a href="mailto:hello@digitalkraft.co.uk" className="round-link" aria-label="Start a project">
          <ArrowUpRight size={30} />
        </a>
      </Flex>
    </Flex>
  );
}
