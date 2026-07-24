import { Box, Grid, Heading, Text } from "@chakra-ui/react";

const services = [
  ["01", "Product strategy", "Research, positioning and a practical roadmap that aligns user value with commercial goals."],
  ["02", "Brand systems", "Distinct identities, verbal direction and flexible systems built to stay coherent as you grow."],
  ["03", "Experience design", "Accessible UX and expressive interfaces that make complex products feel clear and intuitive."],
  ["04", "Digital engineering", "Fast, resilient websites and product platforms engineered for performance and longevity."],
];

export default function Services() {
  return (
    <Box className="page-content">
      <Heading as="h2" className="section-heading">From first thought<br />to daily habit.</Heading>
      <Grid className="services-grid">
        {services.map(([number, title, copy]) => (
          <Box className="service-item" key={number}>
            <Text className="item-number">{number}</Text>
            <Heading as="h3" className="item-title">{title}</Heading>
            <Text className="item-copy">{copy}</Text>
          </Box>
        ))}
      </Grid>
      <Text className="section-note">Engage us end-to-end or at the exact point your team needs senior momentum.</Text>
    </Box>
  );
}
