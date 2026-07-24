import { ArrowUpRight } from "lucide-react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const work = [
  { type: "Fintech · Product", name: "The finance workspace", result: "One calm view for high-stakes decisions", tone: "violet" },
  { type: "Climate · Platform", name: "Carbon made actionable", result: "From dense data to a clear next move", tone: "lime" },
  { type: "Commerce · Brand", name: "A category of one", result: "Identity and storefront built to convert", tone: "orange" },
];

export default function Portfolio() {
  return (
    <Box className="page-content">
      <Flex className="section-intro" align="end" justify="space-between" gap="6">
        <Heading as="h2" className="section-heading">Selected<br />engagements.</Heading>
        <Text className="intro-copy">A snapshot of the kind of challenges we help ambitious teams solve.</Text>
      </Flex>
      <Box className="work-list">
        {work.map((project, index) => (
          <Flex className="work-row" key={project.name} align="center">
            <Box className={`work-swatch ${project.tone}`} aria-hidden="true">
              <Text>{String(index + 1).padStart(2, "0")}</Text>
            </Box>
            <Box className="work-main">
              <Text className="work-type">{project.type}</Text>
              <Heading as="h3" className="work-name">{project.name}</Heading>
            </Box>
            <Text className="work-result">{project.result}</Text>
            <ArrowUpRight className="work-arrow" size={22} />
          </Flex>
        ))}
      </Box>
      <Text className="section-note">Detailed case studies are shared during capabilities conversations.</Text>
    </Box>
  );
}
