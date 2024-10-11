import PointsActivityTable from "@/components/ui/pointsActivityTable";
import NextStatusChart from "@/components/ui/charts/nextStatusChart";
import MonthlyPointsAreaChart from "@/components/ui/charts/MonthlyPointsAreaChart";
import PointsActivityService from "@/lib/PointsActivityService";
import { Suspense } from 'react';

export default function Home() {

  const service = new PointsActivityService();
  const activityData = service.getPointsActivity();
  const currentPoints = service.getCurrentPoints();
  const monthlyPointsData = service.getMonthlyPointsActivity();

  return (
    <div className="bg-background text-foreground flex items-center justify-center">
      <div className="bg-card p-6 rounded-lg shadow-lg w-full max-w-4xl mt-8">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <div className="flex items-center space-x-8 justify-between">
          <div>
            <img src="/avatar-15.png" alt="User Avatar" className="w-48 h-48 rounded-full" />
            <p className="text-lg"><strong>Current Status:</strong> Gold</p>
            <p className="text-lg"><strong>Status Points:</strong> {currentPoints.toLocaleString()}</p>
          </div>
          <div>
            <NextStatusChart />
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Recent Points Activity</h2>
          <PointsActivityTable activityData={activityData} />
        </div>
        <div className="mt-6">
          <MonthlyPointsAreaChart data={monthlyPointsData} />
        </div>
      </div>
    </div>
  );
}