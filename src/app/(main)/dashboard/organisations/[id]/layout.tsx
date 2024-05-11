import { type ReactNode } from "react";
import { OrganisationSwitcher } from "./_components/OrganisationSwitcher";
import { Group } from "@mantine/core";
import { TabSwitcher } from "./_components/TabSwitcher";

type OrganisationLayoutProps = {
  children: ReactNode;
};

export default function OrganisationLayout({
  children,
}: OrganisationLayoutProps) {
  return (
    <>
      <Group
        justify="space-between"
        align="flex-end"
        pb="sm"
        className="w-full border-b"
      >
        <TabSwitcher />
        <OrganisationSwitcher />
      </Group>
      <div className="p-4">{children}</div>
    </>
  );
}
