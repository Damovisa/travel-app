"use client"

import * as React from 'react'
import { Suspense, useState, useEffect } from 'react'

const FlightBookingForm: React.FC<{ startingLocation?: string }> = ({ startingLocation }) => {
  const [departureDate, setDepartureDate] = useState<string>('');
  const [returnDate, setReturnDate] = useState<string>('');
  const [isOneWay, setIsOneWay] = useState<boolean>(false);
  const [fromLocation, setFromLocation] = useState<string>(startingLocation || 'NYC');

  useEffect(() => {
    const today = new Date();
    const departure = new Date(today);
    departure.setDate(today.getDate() + 7);
    const returnD = new Date(departure);
    returnD.setDate(departure.getDate() + 7);

    setDepartureDate(departure.toISOString().split('T')[0]);
    setReturnDate(returnD.toISOString().split('T')[0]);
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-w-max mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
        <form>
          <div className="flex mb-4">
            <div className="w-2/5 pr-2">
              <label htmlFor="from" className="block text-sm font-bold mb-2">From:</label>
              <select id="from" name="from" className="w-full p-2 border border-gray-300 rounded text-lg" value={fromLocation} onChange={(e) => setFromLocation(e.target.value)}>
                <option value="NYC">New York City (NYC)</option>
                <option value="LAX">Los Angeles (LAX)</option>
                <option value="CHI">Chicago (CHI)</option>
                <option value="ATL">Atlanta (ATL)</option>
                <option value="DFW">Dallas/Fort Worth (DFW)</option>
                <option value="DEN">Denver (DEN)</option>
                <option value="SFO">San Francisco (SFO)</option>
                <option value="SEA">Seattle (SEA)</option>
                <option value="LAS">Las Vegas (LAS)</option>
                <option value="MIA">Miami (MIA)</option>
                <option value="BOS">Boston (BOS)</option>
                <option value="PHX">Phoenix (PHX)</option>
                <option value="IAH">Houston (IAH)</option>
              </select>
            </div>
            <div className="w-2/5 pl-2 flex items-center">
              <div className="w-full">
                <label htmlFor="departureDate" className="block text-sm font-bold mb-2">Departure Date:</label>
                <input type="date" id="departureDate" name="departureDate" className="w-full p-2 border border-gray-300 rounded text-lg" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
              </div>
            </div>
            <div className="w-1/5 pl-2">
              <div className="ml-4 mt-6">
                <label htmlFor="oneWay" className="inline-flex items-center">
                  <input type="checkbox" id="oneWay" name="oneWay" className="mr-2" checked={isOneWay} onChange={(e) => setIsOneWay(e.target.checked)} />
                  One-way
                </label>
              </div>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="w-2/5 pr-2">
              <label htmlFor="to" className="block text-sm font-bold mb-2">To:</label>
              <select id="to" name="to" className="w-full p-2 border border-gray-300 rounded text-lg" disabled={isOneWay}>
                <option value="NYC">New York City (NYC)</option>
                <option value="LAX">Los Angeles (LAX)</option>
                <option value="CHI">Chicago (CHI)</option>
                <option value="ATL">Atlanta (ATL)</option>
                <option value="DFW">Dallas/Fort Worth (DFW)</option>
                <option value="DEN">Denver (DEN)</option>
                <option value="SFO">San Francisco (SFO)</option>
                <option value="SEA">Seattle (SEA)</option>
                <option value="LAS">Las Vegas (LAS)</option>
                <option value="MIA">Miami (MIA)</option>
                <option value="BOS">Boston (BOS)</option>
                <option value="PHX">Phoenix (PHX)</option>
                <option value="IAH">Houston (IAH)</option>
              </select>
            </div>
            <div className="w-2/5 pl-2">
              <label htmlFor="returnDate" className="block text-sm font-bold mb-2">Return Date:</label>
              <input type="date" id="returnDate" name="returnDate" className="w-full p-2 border border-gray-300 rounded text-lg" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} disabled={isOneWay} />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="travelClass" className="block text-sm font-bold mb-2">Travel Class:</label>
            <select id="travelClass" name="travelClass" className="w-full p-2 border border-gray-300 rounded text-lg">
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First Class</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="rewardFlights" className="inline-flex items-center">
              <input type="checkbox" id="rewardFlights" name="rewardFlights" className="mr-2" />
              Search reward flights
            </label>
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Search</button>
        </form>
      </div>
    </Suspense>
  )
}

export default FlightBookingForm