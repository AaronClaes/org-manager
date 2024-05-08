import { AreaChart } from "@mantine/charts";
import { Card, Group, Text } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";

export default function RecentErrors() {
  return (
    <Card className="w-full" shadow="sm" padding="lg" radius="md" withBorder>
      <Group gap={8}>
        <IconAlertTriangle size={18} />
        <Text size="lg" fw={500}>
          Recent errors
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
            date: "10:20p.m.",
            server: 5,
            client: 10,
          },
          {
            date: "10:25p.m.",
            server: 15,
            client: 2,
          },
          {
            date: "10:30p.m.",
            server: 25,
            client: 40,
          },
          {
            date: "10:35p.m.",
            server: 10,
            client: 15,
          },
          {
            date: "10:40p.m.",
            server: 5,
            client: 10,
          },
        ]}
        dataKey="date"
        series={[
          { name: "server", color: "red.4", label: "Server errors" },
          { name: "client", color: "red.9", label: "Client errors" },
        ]}
        curveType="monotone"
      />
    </Card>
  );
}
