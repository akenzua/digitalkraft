import { ArrowUpRight } from "lucide-react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Flex className="page-content contact-content" direction="column" justify="space-between">
      <Box>
        <Text className="eyebrow">Have a challenge worth solving?</Text>
        <Heading as="h2" className="contact-heading">Let’s make<br />something matter.</Heading>
      </Box>
      <Box>
        <Text className="contact-copy">
          Tell us what you are building, where you are stuck and what success should look like.
          We will respond with useful next steps—not a hard sell.
        </Text>
        <a
          href="mailto:hello@digitalkraft.studio?subject=New project enquiry"
          className="email-link"
        >
          <Text>hello@digitalkraft.studio</Text>
          <ArrowUpRight size={30} />
        </a>
      </Box>
      <Flex className="contact-meta" justify="space-between" gap="6">
        <Text><span>Best fit</span>Brand, web & digital products</Text>
        <Text><span>Typical reply</span>Within two working days</Text>
      </Flex>
    </Flex>
  );
}
