import { BarChart } from "@mantine/charts";
import { Card, Group, Text } from "@mantine/core";
import { IconActivity } from "@tabler/icons-react";

export const data = [
  { organisation: "Alcon", Users: 1900, Laptops: 1200, Tablets: 400 },
  { organisation: "Flux", Users: 1200, Laptops: 900, Tablets: 200 },
  { organisation: "Coolblue", Users: 1000, Laptops: 200, Tablets: 800 },
  { organisation: "Dyson", Users: 800, Laptops: 1400, Tablets: 1200 },
  { organisation: "MSI", Users: 750, Laptops: 600, Tablets: 1000 },
  { organisation: "Beko", Users: 400, Laptops: 1000, Tablets: 200 },
];

export default function TopOrganisations() {
  return (
    <Card className="w-full" shadow="sm" padding="lg" radius="md" withBorder>
      <Group mb="md" gap={8}>
        <IconActivity size={18} />
        <Text size="lg" fw={500}>
          Top organisations
        </Text>
      </Group>
      <BarChart
        h={200}
        data={data}
        dataKey="organisation"
        orientation="vertical"
        barProps={{ radius: 4 }}
        series={[{ name: "Users", color: "blue.2" }]}
      />
    </Card>
  );
}
