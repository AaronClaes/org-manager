"use client";
import { useMemo, useState } from "react";
import {
  Avatar,
  Combobox,
  Group,
  Input,
  InputBase,
  Text,
  useCombobox,
} from "@mantine/core";
import { type Organisation, organisations } from "../../organisations";
import { useParams, usePathname, useRouter } from "next/navigation";

export function OrganisationSwitcher() {
  const router = useRouter();
  const currentPath = usePathname();
  const { id: orgId } = useParams<{ id: string }>();

  const [search, setSearch] = useState<string>("");
  const [id, setId] = useState<string | null>(orgId);
  const selectedOption = organisations.find((item) => item.id === id);

  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      combobox.focusTarget();
      setSearch("");
    },
  });

  const options = useMemo(() => {
    const LIMIT = 5;
    return getFilteredOrganisations(search, LIMIT).map((item) => (
      <Combobox.Option value={item.id} key={item.id}>
        <SelectOption {...item} />
      </Combobox.Option>
    ));
  }, [search]);

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(id) => {
        setId(id);
        combobox.closeDropdown();
        const newPath = currentPath.replace(orgId, id);
        router.push(newPath);
      }}
    >
      <Combobox.Target>
        <InputBase
          w={300}
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
          rightSectionPointerEvents="none"
          multiline
        >
          {selectedOption ? (
            <SelectOption {...selectedOption} />
          ) : (
            <Input.Placeholder>Pick value</Input.Placeholder>
          )}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Search
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          placeholder="Search organisations"
        />
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

function SelectOption({ name, owner }: Organisation) {
  return (
    <Group>
      <Avatar>
        {owner.name
          .split(" ")
          .map((word) => word[0])
          .join("")}
      </Avatar>
      <div>
        <Text fz="sm" fw={500}>
          {name}
        </Text>
        <Text fz="xs" opacity={0.6}>
          {owner.name}
        </Text>
      </div>
    </Group>
  );
}

function getFilteredOrganisations(searchQuery: string, limit: number) {
  const result: Organisation[] = [];

  for (const item of organisations) {
    if (result.length === limit) {
      break;
    }

    if (item.name.toLowerCase().includes(searchQuery.trim().toLowerCase())) {
      result.push(item);
    }
  }

  return result;
}
