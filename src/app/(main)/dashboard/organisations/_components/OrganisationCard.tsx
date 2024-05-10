import {
  ActionIcon,
  Avatar,
  Button,
  Card,
  CardSection,
  Group,
  Indicator,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Pill,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconChartBar,
  IconDotsVertical,
  IconExternalLink,
  IconForbid,
  IconHelp,
  IconLayout,
  IconPencil,
} from "@tabler/icons-react";

type OrganisationCardProps = {
  organisation: {
    name: string;
    owner: {
      name: string;
    };
    memberCount: number;
    plan: "BASIC" | "PRO" | "ENTERPRISE";
  };
};

export default function OrganisationCard({
  organisation,
}: OrganisationCardProps) {
  return (
    <Card withBorder shadow="sm" radius="md">
      <CardSection withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Group gap="xs">
            <Avatar>OR</Avatar>
            <Text fw={500}>{organisation.name}</Text>
          </Group>
          <Group gap="xs">
            <ActionIcon variant="subtle" color="gray">
              <IconExternalLink size={16} />
            </ActionIcon>
            <Menu withinPortal position="bottom-end" shadow="sm">
              <MenuTarget>
                <ActionIcon variant="subtle" color="gray">
                  <IconDotsVertical size={16} />
                </ActionIcon>
              </MenuTarget>

              <MenuDropdown>
                <MenuItem leftSection={<IconPencil size={14} />}>Edit</MenuItem>
                <MenuItem leftSection={<IconChartBar size={14} />}>
                  Analytics
                </MenuItem>
                <MenuItem leftSection={<IconForbid size={14} />} color="red">
                  Disable
                </MenuItem>
              </MenuDropdown>
            </Menu>
          </Group>
        </Group>
      </CardSection>
      <CardSection withBorder inheritPadding py="xs">
        <Stack>
          <Group justify="space-between">
            <Text c="dimmed">Owner</Text>
            <Group gap="xs">
              <Avatar size="sm">AA</Avatar>
              <Text>{organisation.owner.name}</Text>
            </Group>
          </Group>
          <Group justify="space-between">
            <Text c="dimmed">Members</Text>
            <Pill>{organisation.memberCount}</Pill>
          </Group>
          <Group justify="space-between">
            <Text c="dimmed">Plan</Text>
            <Pill>{organisation.plan}</Pill>
          </Group>
        </Stack>
      </CardSection>
      <CardSection withBorder inheritPadding py="md">
        <Group>
          <Indicator
            className="flex-1"
            size={24}
            offset={6}
            color="red"
            withBorder
            label="1"
          >
            <Button
              className="w-full"
              leftSection={<IconHelp size={16} />}
              variant="light"
            >
              Tickets
            </Button>
          </Indicator>
          <Button leftSection={<IconLayout size={16} />} className="flex-1">
            Dashboard
          </Button>
        </Group>
      </CardSection>
    </Card>
  );
}
