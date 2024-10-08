import StatusTable from "@/components/ui/status-table";
import NextStatusChart from "@/app/next-status-chart";

export default function Home() {
  return (
    <div className="bg-background text-foreground flex items-center justify-center">
      <div className="bg-card p-6 rounded-lg shadow-lg w-full max-w-4xl mt-8">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <div className="flex items-center space-x-8 justify-between">
          <div>
            <p className="text-lg"><strong>Current Status:</strong> Gold</p>
            <p className="text-lg"><strong>Status Points:</strong> 2,800</p>
            <p className="text-lg"><strong>Points to Platinum:</strong> 1,700</p>
            </div>
            <div>
            <NextStatusChart />
          </div>
          <img src="/avatar-15.png" alt="User Avatar" className="w-32 h-32 rounded-full" />
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Points Activity</h2>
          <StatusTable />
        </div>
      </div>
    </div>
  );
}