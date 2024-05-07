import { ActionIcon, Group, TextInput } from "@mantine/core";
import { IconExchange, IconSearch } from "@tabler/icons-react";
import NotificationsBox from "./NotificationsBox";

export default function Topbar() {
  return (
    <div className="flex min-h-16 w-full items-center justify-between gap-1 border-b px-3">
      <TextInput
        rightSectionWidth={57}
        leftSection={<IconSearch size={16} />}
        leftSectionPointerEvents="none"
        placeholder="Search"
        type="search"
      />
      <div className="flex items-center gap-2">
        <Group gap="xs">
          <ActionIcon
            size="lg"
            radius="lg"
            variant="light"
            aria-label="Changes"
          >
            <IconExchange size={18} />
          </ActionIcon>
          <NotificationsBox />
        </Group>
      </div>
    </div>
  );
}
