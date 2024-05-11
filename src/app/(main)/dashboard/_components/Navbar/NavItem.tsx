"use client";

import { useDashboardStore } from "@/stores/dashboardStore";
import { cn } from "@/utils/tailwind";
import { Tooltip, UnstyledButton } from "@mantine/core";
import { type Icon, type IconProps } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ForwardRefExoticComponent, type RefAttributes } from "react";

type NavItemProps = {
  label: string;
  href: string;
  icon: ForwardRefExoticComponent<Omit<IconProps, "ref"> & RefAttributes<Icon>>;
  compare: "exact" | "includes";
};

export default function NavItem({
  label,
  href,
  compare,
  ...props
}: NavItemProps) {
  const sidebarOpen = useDashboardStore((state) => state.sidebarOpen);
  const pathname = usePathname();

  const isActive =
    compare === "exact" ? pathname === href : pathname.includes(href);

  return (
    <Tooltip label={label} disabled={sidebarOpen} position="right">
      <UnstyledButton
        href={href}
        component={Link}
        className={cn(
          "flex items-center gap-4 rounded-md  hover:bg-[var(--mantine-color-gray-1)]",
          isActive &&
            "bg-[var(--mantine-color-blue-0)] text-[var(--mantine-color-blue-7)] hover:bg-[var(--mantine-color-blue-0)]",
          sidebarOpen ? "px-4 py-2" : "aspect-square justify-center",
        )}
      >
        <props.icon size={18} />
        {sidebarOpen && label}
      </UnstyledButton>
    </Tooltip>
  );
}
