"use client";
import { useDashboardStore } from "@/stores/dashboardStore";
import { ActionIcon } from "@mantine/core";
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
} from "@tabler/icons-react";

export default function SidebarToggle() {
  const update = useDashboardStore((state) => state.update);
  const sidebarOpen = useDashboardStore((state) => state.sidebarOpen);

  return (
    <ActionIcon
      variant="light"
      size="lg"
      onClick={() => update({ sidebarOpen: !sidebarOpen })}
    >
      {sidebarOpen ? (
        <IconLayoutSidebarLeftCollapse size={20} />
      ) : (
        <IconLayoutSidebarLeftExpand size={20} />
      )}
    </ActionIcon>
  );
}
