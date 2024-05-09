import RecentErrors from "./RecentErrors";
import Activity from "./Activity";
import ServerStatus from "./ServerStatus";

export default function StatusStats() {
  return (
    <div>
      <div className="flex gap-6">
        <RecentErrors />
        <Activity />
        <ServerStatus />
      </div>
    </div>
  );
}
