import { Button, Group, Text } from "@mantine/core";
import TotalOrganisations from "./TotalOrganisations";
import TotalUsers from "./TotalUsers";
import TotalPageViews from "./TotalPageViews";
import TopOrganisations from "./TopOrganisations";

export default function Analytics() {
  return (
    <>
      <Group
        mt="xl"
        mb="xs"
        className="w-full"
        justify="space-between"
        align="center"
      >
        <Text ml="xs" size="xl" fw={700}>
          Analytics
        </Text>
        <Button variant="light">View all</Button>
      </Group>
      <div className="flex gap-2">
        <TotalOrganisations />
        <TotalUsers />
        <TotalPageViews />
        <TopOrganisations />
      </div>
    </>
  );
}
