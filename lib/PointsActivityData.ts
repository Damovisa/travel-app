import { describe } from "node:test";
import PointsActivity from "../PointsActivity";

const PointsActivityData: PointsActivity[] = [
    {
        description: "✈️ NYC-SFO",
        date: '2024-10-26',
        points: 500
    },
    {
        description: "✈️ MCI-NYC",
        date: '2024-09-15',
        points: 300
    },
    {
        description: "✈️ NYC-MCI",
        date: '2024-09-11',
        points: 300
    },
    {
        description: "🏨 Partner hotel",
        date: '2024-06-20',
        points: 300
    },
    {
        description: "🏆 Status upgrade",
        date: '2024-06-20',
        points: -500
    },
    {
        description: "✈️ MCI-ORD",
        date: '2024-06-20',
        points: 300
    },
    {
        description: "✈️ NYC-ORD",
        date: '2024-06-13',
        points: 300
    }
];

export { PointsActivityData };