import { ActionIcon, Group, TextInput } from "@mantine/core";
import { IconExchange, IconSearch } from "@tabler/icons-react";
import NotificationsBox from "./NotificationsBox";
import SidebarToggle from "./SidebarToggle";

export default function Topbar() {
  return (
    <div className="flex min-h-16 w-full items-center justify-between gap-1 border-b px-3">
      <Group gap="sm">
        <SidebarToggle />
        <TextInput
          rightSectionWidth={57}
          leftSection={<IconSearch size={16} />}
          leftSectionPointerEvents="none"
          placeholder="Search"
          type="search"
        />
      </Group>
      <Group>
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
      </Group>
    </div>
  );
}
