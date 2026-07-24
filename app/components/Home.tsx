import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { ArrowUpRight } from "lucide-react";
import Typewriter from "./TypeWriter";

export default function Home() {
  return (
    <Flex className="page-content home-content" direction="column" justify="space-between">
      <Box>
        <Text className="eyebrow">Independent digital product studio · Est. 2018</Text>
        <Heading as="h1" className="hero-heading">
          We turn complex ideas into digital products people
          <Box as="span" className="heading-accent"> choose to use.</Box>
        </Heading>
        <Text className="hero-copy">
          Strategy, identity, UX and engineering in one senior team. We partner with
          ambitious companies to launch, rethink and scale meaningful digital experiences.
        </Text>
      </Box>

      <Flex className="home-bottom" align="end" justify="space-between" gap="8">
        <Box>
          <Text className="micro-label">Currently crafting</Text>
          <Typewriter
            words={["useful products", "clear brands", "faster platforms", "lasting momentum"]}
            typingSpeed={72}
            deletingSpeed={38}
            delay={1500}
          />
        </Box>
        <a href="mailto:hello@digitalkraft.studio" className="round-link" aria-label="Start a project">
          <ArrowUpRight size={30} />
        </a>
      </Flex>
    </Flex>
  );
}
