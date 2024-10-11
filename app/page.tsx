import TravelLineChart from "@/app/charts/travel-line-chart";
import FlightBookingForm from "@/components/ui/flightBookingForm";
import TripData from "@/lib/data/TripData";

export default function Home() {
  return (
    <><div className="bg-background text-foreground flex items-center justify-center">
      <div className="bg-card p-6 rounded-lg shadow-lg w-full max-w-4xl mt-8">
        <FlightBookingForm />
      </div>
    </div><div className="bg-background text-foreground flex items-center justify-center">
        <div className="bg-card p-6 rounded-lg shadow-lg w-full max-w-4xl mt-8">
          <TravelLineChart tripData={TripData} />
        </div>
      </div></>
  );
}
