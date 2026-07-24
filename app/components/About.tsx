import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Box className="page-content">
      <Text className="eyebrow">Senior attention, from hello to handover</Text>
      <Heading as="h2" className="section-heading about-heading">
        Built for close collaboration—not layers of account management.
      </Heading>
      <Grid className="about-grid">
        <Box className="about-copy">
          <Text>
            Digital Kraft is an independent studio bringing strategy, design and technology
            around one table. Our compact model keeps communication direct, thinking sharp
            and every decision connected to the outcome.
          </Text>
          <Text>
            We work in focused partnerships with teams who value craft, candour and forward motion.
          </Text>
        </Box>
        <Grid className="principles-grid">
          <Box className="principle"><Text>01</Text><Heading as="h3">Clarity over theatre</Heading></Box>
          <Box className="principle"><Text>02</Text><Heading as="h3">Craft with purpose</Heading></Box>
          <Box className="principle"><Text>03</Text><Heading as="h3">Build to evolve</Heading></Box>
          <Box className="principle"><Text>04</Text><Heading as="h3">No black boxes</Heading></Box>
        </Grid>
      </Grid>
      <Flex className="studio-meta" gap="8">
        <Text><strong>Remote-first</strong><span>Working globally</span></Text>
        <Text><strong>One team</strong><span>Strategy to shipping</span></Text>
        <Text><strong>Selective</strong><span>Few projects, full focus</span></Text>
      </Flex>
    </Box>
  );
}
