"use client";
import {
  Avatar,
  Divider,
  Menu,
  MenuDivider,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconBuilding,
  IconChartBar,
  IconChevronDown,
  IconHelp,
  IconHome,
  IconLogout,
  IconPennant,
  IconSettings,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";
import NavItem from "./NavItem";

const NAVITEMS = [
  {
    label: "Dashboard",
    icon: IconHome,
    href: "/dashboard",
  },
  {
    label: "Organisations",
    icon: IconBuilding,
    href: "/dashboard/organisations",
  },
  {
    label: "Feature flags",
    icon: IconPennant,
    href: "/dashboard/feature-flags",
  },
  {
    label: "Support",
    icon: IconHelp,
    href: "/dashboard/support",
  },
];

export default function Navbar() {
  return (
    <div className="flex h-screen min-w-72 flex-col border-r">
      <div className="flex min-h-16 items-center justify-center border-b">
        LOGO
      </div>
      <nav className="mt-6 flex flex-col gap-2 p-4">
        {NAVITEMS.map((navItem) => {
          return <NavItem key={navItem.label} item={navItem} />;
        })}
        <Divider my="sm" />
        <NavItem
          item={{
            href: "/dashboard/analytics",
            icon: IconChartBar,
            label: "Analytics",
          }}
        />
        <NavItem
          item={{
            href: "/dashboard/users",
            icon: IconUsers,
            label: "Users",
          }}
        />
      </nav>
      <Menu shadow="md" position="right-end">
        <MenuTarget>
          <div className="mt-auto cursor-pointer border-t p-4 transition hover:bg-[--mantine-color-gray-1]">
            <div className="flex w-full items-center justify-between">
              <div className="flex gap-4">
                <Avatar radius="xl">AA</Avatar>
                <Stack gap={0}>
                  <Text size="sm">Aaron Claes</Text>
                  <Text size="xs" c="dimmed">
                    Admin
                  </Text>
                </Stack>
              </div>
              <IconChevronDown size={16} />
            </div>
          </div>
        </MenuTarget>
        <MenuDropdown>
          <MenuItem leftSection={<IconUser size={16} />}>Account</MenuItem>
          <MenuItem leftSection={<IconSettings size={16} />}>Settings</MenuItem>

          <MenuDivider />
          <MenuItem color="red" leftSection={<IconLogout size={16} />}>
            Logout
          </MenuItem>
        </MenuDropdown>
      </Menu>
    </div>
  );
}
