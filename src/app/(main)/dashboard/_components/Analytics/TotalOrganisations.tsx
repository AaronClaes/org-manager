import { AreaChart } from "@mantine/charts";
import { Card, Group, Text } from "@mantine/core";
import { IconBuilding } from "@tabler/icons-react";

export const data = [
  { name: "Basic", value: 13, color: "blue.6" },
  { name: "Pro", value: 20, color: "green.6" },
  { name: "Enterprise", value: 8, color: "yellow.6" },
];

export default function TotalOrganisations() {
  return (
    <Card className="w-full" shadow="sm" padding="lg" radius="md" withBorder>
      <Group mb="md" gap={8}>
        <IconBuilding size={18} />
        <Text size="lg" fw={500}>
          Total organisations
        </Text>
      </Group>
      <AreaChart
        h={120}
        tickLine="none"
        withYAxis={false}
        tooltipAnimationDuration={100}
        data={[
          {
            organisations: 8,
            date: "Jan 25th",
          },
          {
            organisations: 10,
            date: "Jan 26th",
          },
          {
            organisations: 18,
            date: "Jan 27th",
          },
          {
            organisations: 25,
            date: "Jan 28th",
          },
          {
            organisations: 42,
            date: "Jan 29th",
          },
        ]}
        dataKey="date"
        series={[
          { name: "organisations", color: "green.5", label: "Organisations" },
        ]}
        curveType="monotone"
      />
    </Card>
  );
}
