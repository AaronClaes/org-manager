import { AreaChart } from "@mantine/charts";
import { Card, Group, Text } from "@mantine/core";
import { IconActivity } from "@tabler/icons-react";

export default function Activity() {
  return (
    <Card className="w-full" shadow="sm" padding="lg" radius="md" withBorder>
      <Group gap={8}>
        <IconActivity size={18} />
        <Text size="lg" fw={500}>
          Activity
        </Text>
      </Group>
      <AreaChart
        h={180}
        tickLine="none"
        withYAxis={false}
        withLegend
        tooltipAnimationDuration={100}
        data={[
          {
            date: "Jan 25th",
            users: 150,
            pageviews: 500,
          },
          {
            date: "Jan 26th",
            users: 130,
            pageviews: 524,
          },
          {
            date: "Jan 27th",
            users: 40,
            pageviews: 230,
          },
          {
            date: "Jan 28th",
            users: 224,
            pageviews: 741,
          },
          {
            date: "Jan 29th",
            users: 130,
            pageviews: 238,
          },
        ]}
        dataKey="date"
        series={[
          { name: "users", color: "green.5", label: "Unique users" },
          { name: "pageviews", color: "blue.5", label: "Page views" },
        ]}
        curveType="monotone"
      />
    </Card>
  );
}
