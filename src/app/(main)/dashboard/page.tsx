import PrioritySupport from "./_components/PrioritySupport";
import StatusStats from "./_components/StatusStats";

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <StatusStats />
      <PrioritySupport />
    </div>
  );
}
