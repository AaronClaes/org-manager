import { Text } from "@mantine/core";
import RecentErrors from "./RecentErrors";
import Activity from "./Activity";
import ServerStatus from "./ServerStatus";

export default function StatusStats() {
  return (
    <>
      <Text ml="xs" size="xl" fw={500}>
        Status
      </Text>
      <div className="flex gap-6">
        <RecentErrors />
        <Activity />
        <ServerStatus />
      </div>
    </>
  );
}
