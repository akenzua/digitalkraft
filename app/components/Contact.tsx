import { ArrowUpRight } from "lucide-react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Flex className="page-content contact-content" direction="column" justify="space-between">
      <Box>
        <Text className="eyebrow">Have a consequential product decision ahead?</Text>
        <Heading as="h2" className="contact-heading">Make the next<br />move count.</Heading>
      </Box>
      <Box>
        <Text className="contact-copy">
          Bring us the opportunity you need to validate, the product you need to launch or
          the system that has reached its limits. Tell us what is at stake and how success
          will be measured. We will respond with useful next steps—not a hard sell.
        </Text>
        <a
          href="mailto:hello@digitalkraft.co.uk?subject=New project enquiry"
          className="email-link"
        >
          <Text>hello@digitalkraft.co.uk</Text>
          <ArrowUpRight size={30} />
        </a>
      </Box>
      <Flex className="contact-meta" justify="space-between" gap="6">
        <Text><span>Best fit</span>High-stakes products & platforms</Text>
        <Text><span>Typical reply</span>Within two working days</Text>
      </Flex>
    </Flex>
  );
}
