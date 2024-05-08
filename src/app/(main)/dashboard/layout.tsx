import type { ReactNode } from "react";
import Navbar from "./_components/Navbar";
import { ScrollArea } from "@mantine/core";
import Topbar from "./_components/Topbar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Navbar />
      <div className="flex w-full flex-col">
        <Topbar />
        <ScrollArea type="auto" className="h-full p-4">
          {children}
        </ScrollArea>
      </div>
    </div>
  );
}
