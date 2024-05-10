import { SimpleGrid } from "@mantine/core";
import OrganisationCard from "./_components/OrganisationCard";

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
