import {
  ActionIcon,
  Avatar,
  Button,
  Card,
  CardSection,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Pill,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconBuilding,
  IconChartBar,
  IconDotsVertical,
  IconForbid,
  IconLayout,
  IconPencil,
} from "@tabler/icons-react";
import Link from "next/link";
import { type Organisation } from "../organisations";

type OrganisationCardProps = {
  organisation: Organisation;
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
        <Group gap="xs">
          <Button
            href={`/dashboard/organisations/${organisation.id}`}
            className="flex-1"
            leftSection={<IconBuilding size={16} />}
            variant="light"
            component={Link}
          >
            Overview
          </Button>
          <Button leftSection={<IconLayout size={16} />} className="flex-1">
            Dashboard
          </Button>
        </Group>
      </CardSection>
    </Card>
  );
}
