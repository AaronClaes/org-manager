"use client";
import { Avatar, Badge, Divider, Indicator, Text } from "@mantine/core";
import { cn } from "@/utils/tailwind";

type MessageProps = {
  isLast: boolean;
  isUrgent: boolean;
  isUnread: boolean;
};

export default function Message({ isLast, isUrgent, isUnread }: MessageProps) {
  return (
    <>
      <div
        className={cn(
          "flex w-full cursor-pointer items-center gap-3 rounded-md px-2 py-3 transition hover:bg-[var(--mantine-color-gray-1)]",
        )}
        onClick={() => console.log("clicked")}
      >
        <Indicator
          withBorder
          color="green"
          position="bottom-end"
          offset={6}
          size={14}
        >
          <Avatar>A</Avatar>
        </Indicator>
        <div className="overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Text size="sm" fw={500}>
                Aaron Claes (5){" "}
              </Text>
              {isUrgent && (
                <Badge size="xs" color="red">
                  Urgent
                </Badge>
              )}
            </div>
            {isUnread && (
              <div className="flex h-[10px] w-[10px] items-center justify-center rounded-full bg-blue-500 text-xs font-normal text-white" />
            )}
          </div>

          <div className="flex items-center gap-2">
            <Text
              size="sm"
              c="dimmed"
              className="max-w-full truncate whitespace-nowrap"
            >
              We are having an issue when creating new orders
            </Text>
          </div>
        </div>
      </div>
      {!isLast && <Divider size="xs" my={4} />}
    </>
  );
}
