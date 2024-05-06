import {
  ActionIcon,
  Anchor,
  Avatar,
  Breadcrumbs,
  Group,
  Menu,
  MenuDivider,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import {
  IconExchange,
  IconLogout,
  IconSearch,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import NotificationsBox from "./NotificationsBox";

export default function Topbar() {
  return (
    <div className="flex h-16 w-full items-center justify-between gap-1 border-b px-3">
      <Breadcrumbs>
        <Anchor component={Link} href="/dashboard">
          Dashboard
        </Anchor>
        <Anchor component={Link} href="/">
          Home
        </Anchor>
      </Breadcrumbs>
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

          <Menu shadow="md">
            <MenuTarget>
              <div className="cursor-pointer rounded-[--mantine-radius-sm] px-2 py-1 transition hover:bg-[--mantine-color-gray-1]">
                <Group>
                  <Stack gap={0}>
                    <Text size="sm">Aaron Claes</Text>
                    <Text size="xs" c="dimmed">
                      Admin
                    </Text>
                  </Stack>
                  <Avatar radius="xl">AA</Avatar>
                </Group>
              </div>
            </MenuTarget>
            <MenuDropdown>
              <MenuItem leftSection={<IconUser size={16} />}>Account</MenuItem>
              <MenuItem leftSection={<IconSettings size={16} />}>
                Settings
              </MenuItem>

              <MenuDivider />
              <MenuItem color="red" leftSection={<IconLogout size={16} />}>
                Logout
              </MenuItem>
            </MenuDropdown>
          </Menu>
        </Group>
      </div>
    </div>
  );
}
