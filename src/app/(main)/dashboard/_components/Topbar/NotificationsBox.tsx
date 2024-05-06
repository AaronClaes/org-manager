"use client";
import {
  ActionIcon,
  ActionIconGroup,
  Box,
  Center,
  Flex,
  Popover,
  PopoverDropdown,
  PopoverTarget,
  ScrollArea,
  SegmentedControl,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  IconArchive,
  IconBell,
  IconBellRinging,
  IconX,
} from "@tabler/icons-react";
import { useState } from "react";

const notifications = [
  {
    id: 1,
    type: "setting-change",
    title: "Notification 1",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quasi?",
  },
  {
    id: 2,
    type: "account-change",
    title: "Notification 2",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing",
  },
  {
    id: 3,
    type: "invite",
    title: "Notification 3",
    text: "Lorem, ipsum dolor sit amet",
  },
];

const segmentLabels = [
  {
    value: "unread",
    label: (
      <Center style={{ gap: 10 }}>
        <IconBellRinging size={16} />
        <span>Unread</span>
      </Center>
    ),
  },
  {
    value: "archived",
    label: (
      <Center style={{ gap: 10 }}>
        <IconArchive size={16} />
        <span>Archived</span>
      </Center>
    ),
  },
];

export default function NotificationsBox() {
  const [notificationTab, setNotificationTab] = useState("unread");
  return (
    <>
      <Popover width={300} position="bottom" shadow="md">
        <PopoverTarget>
          <ActionIcon
            size="lg"
            radius="lg"
            variant="light"
            aria-label="Notifications"
          >
            <IconBell size={18} />
          </ActionIcon>
        </PopoverTarget>
        <PopoverDropdown>
          <Flex direction="column" gap="sm">
            <SegmentedControl
              value={notificationTab}
              onChange={setNotificationTab}
              data={segmentLabels}
            />
            {notificationTab === "unread" && (
              <>
                {!notifications.length && (
                  <Center mih={80}>
                    <Text c="dimmed" className="flex gap-2">
                      <IconBellRinging /> No unread notifications
                    </Text>
                  </Center>
                )}
                <Text size="xs" c="dimmed">
                  {notifications.length} Notification(s)
                </Text>

                <ScrollArea h={250} type="auto" scrollbarSize="8">
                  <Stack gap="xs">
                    {notifications.map((notification) => (
                      <Box
                        style={(theme) => ({
                          borderRadius: theme.radius.sm,
                        })}
                        p="xs"
                        bg="gray.1"
                        key={notification.id}
                      >
                        <div>
                          <Flex align="center" justify="space-between">
                            <Text size="md">{notification.title}</Text>
                            <ActionIconGroup>
                              <Tooltip color="gray" label="Archive">
                                <ActionIcon variant="subtle" color="gray">
                                  <IconArchive size={16} />
                                </ActionIcon>
                              </Tooltip>
                              <Tooltip color="red" label="Delete">
                                <ActionIcon variant="subtle" color="red">
                                  <IconX size={16} />
                                </ActionIcon>
                              </Tooltip>
                            </ActionIconGroup>
                          </Flex>
                          <Text size="sm" c="dimmed">
                            {notification.text}
                          </Text>
                        </div>
                      </Box>
                    ))}
                  </Stack>
                </ScrollArea>
              </>
            )}
            {notificationTab === "archived" && (
              <Center mih={80}>
                <Text c="dimmed" className="flex gap-2">
                  <IconArchive /> No archived notifications
                </Text>
              </Center>
            )}
          </Flex>
        </PopoverDropdown>
      </Popover>
    </>
  );
}
