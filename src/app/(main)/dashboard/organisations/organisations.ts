export type Organisation = {
  id: string;
  name: string;
  owner: {
    name: string;
  };
  memberCount: number;
  plan: "BASIC" | "PRO" | "ENTERPRISE";
};

export const organisations = [
  {
    id: "1",
    name: "Organisation 1",
    owner: {
      name: "Aaron Claes",
    },
    memberCount: 24,
    plan: "PRO",
  },
  {
    id: "2",
    name: "Organisation 2",
    owner: {
      name: "Aaron Claes",
    },
    memberCount: 24,
    plan: "PRO",
  },
  {
    id: "3",
    name: "Organisation 3",
    owner: {
      name: "Aaron Claes",
    },
    memberCount: 24,
    plan: "PRO",
  },
  {
    id: "4",
    name: "Organisation 4",
    owner: {
      name: "Aaron Claes",
    },
    memberCount: 24,
    plan: "PRO",
  },
  {
    id: "5",
    name: "Organisation 5",
    owner: {
      name: "Aaron Claes",
    },
    memberCount: 24,
    plan: "PRO",
  },
  {
    id: "6",
    name: "Organisation 6",
    owner: {
      name: "Aaron Claes",
    },
    memberCount: 24,
    plan: "PRO",
  },
  {
    id: "7",
    name: "Organisation 7",
    owner: {
      name: "Aaron Claes",
    },
    memberCount: 24,
    plan: "PRO",
  },
  {
    id: "8",
    name: "Organisation 8",
    owner: {
      name: "Aaron Claes",
    },
    memberCount: 24,
    plan: "PRO",
  },
  {
    id: "9",
    name: "Organisation 9",
    owner: {
      name: "Aaron Claes",
    },
    memberCount: 24,
    plan: "PRO",
  },
  {
    id: "10",
    name: "Organisation 10",
    owner: {
      name: "Aaron Claes",
    },
    memberCount: 24,
    plan: "PRO",
  },
  {
    id: "11",
    name: "Organisation 11",
    owner: {
      name: "Aaron Claes",
    },
    memberCount: 24,
    plan: "PRO",
  },
  {
    id: "12",
    name: "Organisation 12",
    owner: {
      name: "Aaron Claes",
    },
    memberCount: 24,
    plan: "PRO",
  },
] as const;
