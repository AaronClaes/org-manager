import { Button, Group, Text } from "@mantine/core";
import { TicketsTable } from "./TicketsTable";
import SupportMessages from "./SupportMessages";

export default function PrioritySupport() {
  return (
    <div>
      <Group
        mt="xl"
        mb="xs"
        className="w-full"
        justify="space-between"
        align="center"
      >
        <Text ml="xs" size="xl" fw={700}>
          Support tickets (15)
        </Text>
        <Button variant="light">View all</Button>
      </Group>
      <div className="flex gap-2">
        <div className="w-full flex-[3]">
          <TicketsTable />
        </div>
        <SupportMessages />
      </div>
    </div>
  );
}
