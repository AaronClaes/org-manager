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
import { useDashboardStore } from "@/stores/dashboardStore";
import { cn } from "@/utils/tailwind";

const NAVITEMS = [
  {
    label: "Dashboard",
    icon: IconHome,
    href: "/dashboard",
    compare: "exact",
  },
  {
    label: "Organisations",
    icon: IconBuilding,
    href: "/dashboard/organisations",
    compare: "includes",
  },
  {
    label: "Feature flags",
    icon: IconPennant,
    href: "/dashboard/feature-flags",
    compare: "exact",
  },
  {
    label: "Support",
    icon: IconHelp,
    href: "/dashboard/support",
    compare: "exact",
  },
] as const;

export default function Navbar() {
  const sidebarOpen = useDashboardStore((state) => state.sidebarOpen);
  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r",
        sidebarOpen ? "min-w-64 max-w-64" : "min-w-16 max-w-16",
      )}
    >
      <div className="flex min-h-16 items-center justify-center border-b">
        LOGO
      </div>
      <nav className="mt-6 flex flex-col gap-2 p-3">
        {NAVITEMS.map(({ label, href, icon, compare }) => {
          return (
            <NavItem
              key={label}
              label={label}
              href={href}
              icon={icon}
              compare={compare}
            />
          );
        })}
        <Divider my="sm" />
        <NavItem
          href="/dashboard/analytics"
          icon={IconChartBar}
          label="Analytics"
          compare="exact"
        />
        <NavItem
          href={"/dashboard/users"}
          icon={IconUsers}
          label={"Users"}
          compare="includes"
        />
      </nav>
      <Menu shadow="md" position="right-end">
        <MenuTarget>
          <div
            className={cn(
              "mt-auto cursor-pointer border-t transition hover:bg-[--mantine-color-gray-1]",
              sidebarOpen
                ? "p-4"
                : "flex aspect-square items-center justify-center",
            )}
          >
            <div className="flex w-full items-center justify-between">
              <div
                className={cn(
                  "flex items-center justify-center gap-4",
                  !sidebarOpen && "w-full",
                )}
              >
                <Avatar radius="xl">AA</Avatar>
                {sidebarOpen && (
                  <Stack gap={0}>
                    <Text size="sm">Aaron Claes</Text>
                    <Text size="xs" c="dimmed">
                      Admin
                    </Text>
                  </Stack>
                )}
              </div>
              {sidebarOpen && <IconChevronDown size={16} />}
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
