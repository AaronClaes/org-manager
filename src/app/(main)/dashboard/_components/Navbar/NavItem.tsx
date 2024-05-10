"use client";

import { NavLink } from "@mantine/core";
import { type Icon, type IconProps } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ForwardRefExoticComponent, type RefAttributes } from "react";

type NavItemProps = {
  item: {
    label: string;
    href: string;
    icon: ForwardRefExoticComponent<
      Omit<IconProps, "ref"> & RefAttributes<Icon>
    >;
  };
};

export default function NavItem({ item }: NavItemProps) {
  const pathname = usePathname();

  return (
    <NavLink
      component={Link}
      className="rounded-md"
      label={item.label}
      leftSection={<item.icon size={16} />}
      href={item.href}
      active={pathname === item.href}
    />
  );
}
