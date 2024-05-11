import { type ReactNode } from "react";
import { OrganisationSwitcher } from "./_components/OrganisationSwitcher";

type OrganisationLayoutProps = {
  children: ReactNode;
};

export default function OrganisationLayout({
  children,
}: OrganisationLayoutProps) {
  return (
    <>
      <OrganisationSwitcher />
      {children}
    </>
  );
}
