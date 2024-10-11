
import FlightBookingForm from "@/components/ui/flightBookingForm";


export default function Home() {
  return (
   <div className="bg-background text-foreground flex items-center justify-center">
      <div className="bg-card p-6 rounded-lg shadow-lg w-full max-w-4xl mt-8">
        <FlightBookingForm />
      </div>
    </div>
  );
}
