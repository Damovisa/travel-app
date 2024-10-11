import { PointsActivityData, StartingPoints } from "./data/PointsActivityData";
import { PointsActivityDisplay, PointsActivityDisplayData, PointsActivityRawData } from "./types/PointsActivity";

class PointsActivityService {
  getPointsActivity(): PointsActivityDisplayData[] {
    // map the PointsActivity to PointsActivityDisplayData
    const displayData: PointsActivityDisplayData[] = PointsActivityData.map((activity: PointsActivityRawData) => {
      return {
        description: activity.description,
        date: activity.date.toLocaleDateString(),
        points: activity.points
      }
    });

    // add one item to the bottom of the array that represents the starting points
    displayData.push({
      description: 'Starting Points',
      date: '',
      points: StartingPoints
    });
    
    return displayData;
  }

  getMonthlyPointsActivity(): PointsActivityDisplayData[] {
    const monthlyPointsMap: { [key: string]: number } = {};

    PointsActivityData.forEach((activity: PointsActivityRawData) => {
      const monthYear = activity.date.toLocaleString('default', { month: 'long', year: 'numeric' });
      if (monthlyPointsMap[monthYear]) {
        monthlyPointsMap[monthYear] += activity.points;
      } else {
        monthlyPointsMap[monthYear] = activity.points;
      }
    });

    const sortedMonths = Object.keys(monthlyPointsMap).sort((a, b) => {
      const dateA = new Date(a);
      const dateB = new Date(b);
      return dateA.getTime() - dateB.getTime();
    });

    let cumulativePoints = StartingPoints;
    const displayData: PointsActivityDisplayData[] = sortedMonths.map(monthYear => {
      cumulativePoints += monthlyPointsMap[monthYear];
      return {
        description: monthYear,
        date: monthYear,
        points: cumulativePoints
      };
    });

    return displayData;
  }

  getCurrentPoints(): number {
    return PointsActivityData.reduce((total, activity) => total + activity.points, StartingPoints);
  }

}

export default PointsActivityService;