"use client";
import { useState } from "react";
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  rem,
  Badge,
  type TableThProps,
} from "@mantine/core";
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";

interface RowData {
  organisation: string;
  subject: string;
  urgency: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  time: string;
}

type ThProps = {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
} & TableThProps;

function Th({ children, reversed, sorted, onSort, ...props }: ThProps) {
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
  return (
    <Table.Th {...props}>
      <UnstyledButton onClick={onSort}>
        <Group justify="space-between">
          <Text fw={600} fz="sm">
            {children}
          </Text>
          <Center>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function sortData(
  data: RowData[],
  payload: {
    sortBy: keyof RowData | null;
    reversed: boolean;
    dataOrder?: string[];
  },
) {
  const { sortBy, dataOrder } = payload;

  if (!sortBy) {
    return data;
  }

  if (dataOrder) {
    return [...data].sort((a, b) => {
      if (payload.reversed) {
        return dataOrder.indexOf(b[sortBy]) - dataOrder.indexOf(a[sortBy]);
      }

      return dataOrder.indexOf(a[sortBy]) - dataOrder.indexOf(b[sortBy]);
    });
  }

  return [...data].sort((a, b) => {
    if (payload.reversed) {
      return b[sortBy].localeCompare(a[sortBy]);
    }

    return a[sortBy].localeCompare(b[sortBy]);
  });
}

const data: RowData[] = [
  {
    organisation: "Flux",
    subject: "Cannot create users",
    urgency: "HIGH",
    time: "time",
  },
  {
    organisation: "A",
    subject: "Cannot create users",
    urgency: "CRITICAL",
    time: "time",
  },
  {
    organisation: "B",
    subject: "Cannot create users",
    urgency: "MEDIUM",
    time: "time",
  },
  {
    organisation: "C",
    subject: "Cannot create users",
    urgency: "LOW",
    time: "time",
  },
  {
    organisation: "D",
    subject: "Cannot create users",
    urgency: "HIGH",
    time: "time",
  },
  {
    organisation: "E",
    subject: "Cannot create users",
    urgency: "LOW",
    time: "time",
  },
  {
    organisation: "F",
    subject: "Cannot create users",
    urgency: "HIGH",
    time: "time",
  },
];

export function TicketsTable() {
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof RowData, dataOrder?: string[]) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, dataOrder }));
  };

  function displayUrgency(urgency: RowData["urgency"]) {
    if (urgency === "LOW") {
      return <Badge color="green">{urgency}</Badge>;
    }
    if (urgency === "MEDIUM") {
      return <Badge color="yellow">{urgency}</Badge>;
    }
    if (urgency === "HIGH") {
      return <Badge color="orange">{urgency}</Badge>;
      6;
    }
    if (urgency === "CRITICAL") {
      return <Badge color="red">{urgency}</Badge>;
    }
  }

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.time}>
      <Table.Td>{row.organisation}</Table.Td>
      <Table.Td>{row.subject}</Table.Td>
      <Table.Td align="right">{displayUrgency(row.urgency)}</Table.Td>
      <Table.Td align="right">{row.time}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea className="rounded-lg border">
      <Table striped horizontalSpacing="md" verticalSpacing="xs" layout="fixed">
        <Table.Thead>
          <Table.Tr>
            <Th
              sorted={sortBy === "organisation"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("organisation")}
            >
              Organisation
            </Th>
            <Th
              sorted={sortBy === "subject"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("subject")}
            >
              Subject
            </Th>
            <Th
              sorted={sortBy === "urgency"}
              reversed={reverseSortDirection}
              onSort={() =>
                setSorting("urgency", ["LOW", "MEDIUM", "HIGH", "CRITICAL"])
              }
              className="text-right"
            >
              Urgency
            </Th>
            <Th
              sorted={sortBy === "time"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("time")}
              className="text-right"
            >
              Time
            </Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={data?.[0] ? Object.keys(data[0]).length : 0}>
                <Text fw={500} ta="center">
                  Nothing found
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
