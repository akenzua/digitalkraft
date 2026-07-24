import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Box className="page-content">
      <Text className="eyebrow">Senior attention, from first decision to production</Text>
      <Heading as="h2" className="section-heading about-heading">
        Technology moves faster. Good judgment still makes the difference.
      </Heading>
      <Grid className="about-grid">
        <Box className="about-copy">
          <Text>
            Digital Kraft is a senior-led product partner bringing strategy, brand, UX and
            full-stack engineering around one table. We use AI to shorten the path from
            question to working software—not to outsource judgment or accountability.
          </Text>
          <Text>
            Our compact model keeps decisions close to the people doing the work. We challenge
            assumptions early, build production-grade systems and remain involved through
            launch, operation, modernization and scale.
          </Text>
        </Box>
        <Grid className="principles-grid">
          <Box className="principle"><Text>01</Text><Heading as="h3">Validate before building</Heading></Box>
          <Box className="principle"><Text>02</Text><Heading as="h3">Outcomes over output</Heading></Box>
          <Box className="principle"><Text>03</Text><Heading as="h3">Engineer to evolve</Heading></Box>
          <Box className="principle"><Text>04</Text><Heading as="h3">Own the result</Heading></Box>
        </Grid>
      </Grid>
      <Flex className="studio-meta" gap="8">
        <Text><strong>Remote-first</strong><span>Working globally</span></Text>
        <Text><strong>Accountable</strong><span>Strategy through scale</span></Text>
        <Text><strong>Selective</strong><span>Few projects, full focus</span></Text>
      </Flex>
    </Box>
  );
}
