import { ArrowUpRight } from "lucide-react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const work = [
  { type: "Fintech · Product modernization", name: "From friction to confidence", result: "A secure mobile experience ready for growth", tone: "violet" },
  { type: "Climate · Platform scale", name: "Carbon made actionable", result: "Dependable data systems behind clearer decisions", tone: "lime" },
  { type: "Commerce · Launch partnership", name: "A category of one", result: "One coherent brand, product and operating platform", tone: "orange" },
];

export default function Portfolio() {
  return (
    <Box className="page-content">
      <Flex className="section-intro" align="end" justify="space-between" gap="6">
        <Heading as="h2" className="section-heading">Selected<br />engagements.</Heading>
        <Text className="intro-copy">The work is not finished when software ships. It is finished when the product performs.</Text>
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
