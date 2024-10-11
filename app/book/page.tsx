"use client"
import React from 'react'
import FlightBookingForm from "@/components/ui/flightBookingForm";
import queryString from 'query-string';

export default function Home() {
  const searchParams = queryString.parse(window.location.search);
  const startingLocation = (searchParams.startingLocation || 'NYC') as string;

  return (
    <div className="bg-background text-foreground flex items-center justify-center">
      <div className="bg-card p-6 rounded-lg shadow-lg w-full max-w-4xl mt-8">
        <FlightBookingForm startingLocation={startingLocation} />
      </div>
    </div>
  )
}
