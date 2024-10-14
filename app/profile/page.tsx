import PointsActivityTable from "@/components/ui/pointsActivityTable";
import NextStatusChart from "@/components/ui/charts/nextStatusChart";
import PointsActivityService from "@/lib/PointsActivityService";
import TravelLineChart from "@/components/ui/charts/tripsLineChart";
import TripData from "@/lib/data/TripData";

export default function Home() {

  const service = new PointsActivityService();
  const activityData = service.getPointsActivity();
  const currentPoints = service.getCurrentPoints();


  return (
    <div className="page-container profile">
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
      <div className="profile-card">
          <PointsActivityTable activityData={activityData} />
      </div>

<div className="profile-card">
      <TravelLineChart tripData={TripData} />
</div>

    </div>
  </div>
  );
}