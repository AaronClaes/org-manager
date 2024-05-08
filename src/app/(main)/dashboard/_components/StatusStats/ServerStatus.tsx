import Tracker from "@/components/Tracker";
import { Card, Group, Stack, Text } from "@mantine/core";
import { IconServer } from "@tabler/icons-react";

const trackerData = [
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-red-5)", type: "downtime" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-yellow-5)", type: "maintenance" },
  { color: "var(--mantine-color-yellow-5)", type: "maintenance" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
  { color: "var(--mantine-color-green-5)", type: "operational" },
];

export default function ServerStatus() {
  return (
    <Card className="w-full" shadow="sm" padding="lg" radius="md" withBorder>
      <Group gap={8}>
        <IconServer size={18} />
        <Text size="lg" fw={500}>
          Server status
        </Text>
      </Group>
      <Stack justify="center" className="h-full" gap="xs">
        <Tracker
          label="Server (24h)"
          data={trackerData}
          series={{
            operational: {
              color: "var(--mantine-color-green-6)",
              label: "Operational",
            },
            downtime: {
              color: "var(--mantine-color-red-6)",
              label: "Downtime",
            },
            maintenance: {
              color: "var(--mantine-color-yellow-6)",
              label: "Maintenance",
            },
          }}
        />
        <Tracker
          label="Database (24h)"
          data={trackerData}
          series={{
            operational: {
              color: "var(--mantine-color-green-6)",
              label: "Operational",
            },
            downtime: {
              color: "var(--mantine-color-red-6)",
              label: "Downtime",
            },
            maintenance: {
              color: "var(--mantine-color-yellow-6)",
              label: "Maintenance",
            },
          }}
        />
      </Stack>
    </Card>
  );
}
