import {
  ActionIcon,
  Button,
  Divider,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
import OrganisationCard from "./_components/OrganisationCard";
import { IconArrowDown, IconArrowUp, IconBuilding } from "@tabler/icons-react";

const organisations = [
  {
    name: "Organisation 1",
    owner: {
      name: "Aaron Claes",
    },
    memberCount: 24,
    plan: "PRO",
  },
] as const;

export default function OrganisationsPage() {
  return (
    <>
      <Group justify="space-between">
        <Text ml="xs" size="xl" fw={700}>
          Organisations ({organisations.length})
        </Text>
        <Group gap="xs">
          <TextInput
            leftSection={<IconBuilding size={16} />}
            placeholder="Organisation name"
          />
          <Menu shadow="md" position="bottom-end">
            <MenuTarget>
              <Button>Sort by: Name</Button>
            </MenuTarget>
            <MenuDropdown>
              <MenuItem>Tickets</MenuItem>
              <MenuItem>Name</MenuItem>

              <MenuItem>Members</MenuItem>
            </MenuDropdown>
          </Menu>
          <Menu shadow="md" position="bottom-end">
            <MenuTarget>
              <ActionIcon size="input-sm">
                <IconArrowDown size={14} />
              </ActionIcon>
            </MenuTarget>
            <MenuDropdown>
              <MenuItem leftSection={<IconArrowUp size={16} />}>
                Ascending
              </MenuItem>
              <MenuItem leftSection={<IconArrowDown size={16} />}>
                Descending
              </MenuItem>
            </MenuDropdown>
          </Menu>
        </Group>
      </Group>
      <Divider my="md" />
      <SimpleGrid cols={3}>
        {organisations.map((organisation) => (
          <OrganisationCard
            organisation={organisation}
            key={organisation.name}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
