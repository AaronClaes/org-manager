import { Card, Stack, Text } from "@mantine/core";
import Message from "./Message";

export default function SupportMessages() {
  return (
    <Card
      className="w-full flex-[1]"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Text mb="xs" size="sm" c="dimmed">
        4 unread messages
      </Text>
      <Stack gap={0}>
        {new Array(4).fill(0).map((_, index) => (
          <Message
            key={index}
            isLast={index === 3}
            isUrgent={index === 3}
            isUnread={index !== 2}
          />
        ))}
      </Stack>
    </Card>
  );
}
