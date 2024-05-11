"use client";
import { useCallback, useMemo, useState } from "react";
import { FloatingIndicator, Group, UnstyledButton } from "@mantine/core";
import { useParams, usePathname, useRouter } from "next/navigation";

const ORG_TABS = [
  { label: "Overview", href: "" },
  { label: "Members", href: "/members" },
  { label: "Settings", href: "/settings" },
];

export function TabSwitcher() {
  const { id: orgId } = useParams<{ id: string }>();
  const pathname = usePathname();
  const router = useRouter();
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});

  const getCurrentTabHref = useCallback(() => {
    return pathname.replace(`/dashboard/organisations/${orgId}`, "");
  }, [orgId, pathname]);

  const [active, setActive] = useState(getCurrentTabHref());
  const [activeHover, setActiveHover] = useState(getCurrentTabHref());
  const [hovering, setHovering] = useState(false);

  const setControlRef = useCallback(
    (index: number) => (node: HTMLButtonElement) => {
      setControlsRefs((prev) => {
        prev[index] = node;
        return prev;
      });
    },
    [],
  );

  const controls = useMemo(() => {
    return ORG_TABS.map((item, index) => (
      <UnstyledButton
        key={item.label}
        className="rounded-md p-2 text-sm font-medium leading-none text-gray-700 transition-colors duration-100 ease-in"
        ref={setControlRef(index)}
        onClick={() => {
          setActive(item.href);
          router.push(`/dashboard/organisations/${orgId}/${item.href}`);
        }}
        onMouseOver={() => {
          setActiveHover(item.href);
          setHovering(true);
        }}
        mod={{ active: active === item.href }}
      >
        <span className="relative z-10">{item.label}</span>
      </UnstyledButton>
    ));
  }, [active, orgId, router, setControlRef]);

  return (
    <Group
      gap="xs"
      onPointerLeave={() => setHovering(false)}
      className="relative w-auto border-gray-200"
      ref={setRootRef}
    >
      {controls}
      <FloatingIndicator
        target={
          controlsRefs[ORG_TABS.findIndex((item) => item.href === active)]
        }
        parent={rootRef}
        mt="sm"
        className="border-b-2 border-[var(--mantine-color-blue-5)]"
      />
      <FloatingIndicator
        display={hovering ? "block" : "none"}
        target={
          controlsRefs[ORG_TABS.findIndex((item) => item.href === activeHover)]
        }
        parent={rootRef}
        className="pointer-events-none rounded-md bg-[var(--mantine-color-gray-1)]"
      />
    </Group>
  );
}
