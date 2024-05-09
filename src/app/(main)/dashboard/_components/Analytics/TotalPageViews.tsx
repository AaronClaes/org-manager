import { AreaChart } from "@mantine/charts";
import { Card, Group, Text } from "@mantine/core";
import { IconActivity } from "@tabler/icons-react";

export const data = [
  { name: "Basic", value: 13, color: "blue.6" },
  { name: "Pro", value: 20, color: "green.6" },
  { name: "Enterprise", value: 8, color: "yellow.6" },
];

export default function TotalPageViews() {
  return (
    <Card className="w-full" shadow="sm" padding="lg" radius="md" withBorder>
      <Group mb="md" gap={8}>
        <IconActivity size={18} />
        <Text size="lg" fw={500}>
          Total page views
        </Text>
      </Group>
      <AreaChart
        h={180}
        tickLine="none"
        withYAxis={false}
        tooltipAnimationDuration={100}
        data={[
          {
            client: 214,
            date: "Jan 25th",
          },
          {
            client: 223,
            date: "Jan 26th",
          },
          {
            client: 254,
            date: "Jan 27th",
          },
          {
            client: 280,
            date: "Jan 28th",
          },
          {
            client: 291,
            date: "Jan 29th",
          },
        ]}
        dataKey="date"
        series={[{ name: "client", color: "blue.5", label: "Client errors" }]}
        curveType="monotone"
      />
    </Card>
  );
}
