import PointsActivityTable from "@/components/ui/pointsActivityTable";
import NextStatusChart from "@/components/ui/charts/nextStatusChart";
import PointsActivityService from "@/lib/PointsActivityService";

export default function Home() {

  const service = new PointsActivityService();
  const activityData = service.getPointsActivity();
  const currentPoints = service.getCurrentPoints();


  return (
    <div className="container profile">
      <div className="sidebar-menu">
          <div>
            <img src="/img/avatar.jpeg" alt="User Avatar" className="user-avatar" />
            <h3>Mona Lisa</h3>
            <p><strong>Current Status:</strong> Gold</p>
            <p><strong>Status Points:</strong> {currentPoints.toLocaleString()}</p>
          </div>

          <div>
          <NextStatusChart />
          </div>
      
    </div>
    <div className="content">
    <h2>Recent Points Activity</h2>

      <div className="card">
          <PointsActivityTable activityData={activityData} />
      </div>
    </div>
  </div>
  );
}