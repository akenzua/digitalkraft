import { Box, Grid, Heading, Text } from "@chakra-ui/react";

const services = [
  ["01", "Validate the opportunity", "Research, rapid prototypes and technical feasibility that test the case before you commit serious time and capital."],
  ["02", "Design the right product", "Positioning, brand, accessible UX and system architecture shaped around user value and measurable business goals."],
  ["03", "Engineer for production", "Mobile apps, SaaS, web platforms, APIs and cloud systems built for security, reliability and real-world operation."],
  ["04", "Operate & scale", "Monitoring, performance, cloud efficiency, modernization and ongoing product ownership as usage and complexity grow."],
];

export default function Services() {
  return (
    <Box className="page-content">
      <Heading as="h2" className="section-heading">Reduce risk.<br />Increase momentum.</Heading>
      <Grid className="services-grid">
        {services.map(([number, title, copy]) => (
          <Box className="service-item" key={number}>
            <Text className="item-number">{number}</Text>
            <Heading as="h3" className="item-title">{title}</Heading>
            <Text className="item-copy">{copy}</Text>
          </Box>
        ))}
      </Grid>
      <Text className="section-note">AI accelerates the work. Senior people remain responsible for every decision, release and outcome.</Text>
    </Box>
  );
}
