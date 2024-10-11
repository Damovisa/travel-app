"use client"

import * as React from 'react'
import { Suspense, useState, useEffect } from 'react'
import Link from 'next/link'

const FlightBookingForm: React.FC = () => {
  const [departureDate, setDepartureDate] = useState<string>('');
  const [returnDate, setReturnDate] = useState<string>('');
  const [isOneWay, setIsOneWay] = useState<boolean>(false);

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

      <>
      <div className="container home">
      <div className="content">
          <div className="hero-text">
              <h1>Where Your Journey Takes Flight</h1>
          </div>
          <div className="search-trip">
              <div className="form">
              <div className="trip">
                  <nav>
                      <ul>
                          <li className="selected"><Link href="#">Round Trip</Link></li>
                          <li> <Link href="#">One Way</Link></li>
                          <li><Link href="#">Multicity</Link></li>
                      </ul>
                  </nav>
              </div>
              <form>
              <input type="checkbox" id="oneWay" name="oneWay" className="mr-2" checked={isOneWay} onChange={(e) => setIsOneWay(e.target.checked)} />

                  <div className="fields-container">
                  <label htmlFor="from">From</label>
                  <select id="from" name="from">
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

                  <div className="fields-container">
                  <label htmlFor="to">To</label>
                  <select id="to" name="to">
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
                  
                  <div className="date-container">
                      <div>
                          <label htmlFor="depart">Depart</label>
                          <input type="date" id="depart" name="depart" />
                      </div>
                      <div  style={{ marginLeft: '12px' }} >
                          <label htmlFor="returnDate">Return</label>
                          <input type="date" id="returnDate" name="returnDate" className="w-full p-2 border border-gray-300 rounded text-lg" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} disabled={isOneWay} />
                      </div>
                  </div>
                  
                  <div className="fields-container">
                  <select id="class" name="class">
                      <option value="economy">Economy</option>
                      <option value="premium-economy">Premium Economy</option>
                      <option value="business">Business</option>
                      <option value="first">First</option>
                  </select>
                  </div>

                  <div className="checkbox-container">
                      <input type="checkbox" id="rewards" name="rewards" />
                      <label htmlFor="rewards">Search rewards Flights</label>
                  </div>
                  
                  <button type="submit">Find your Journey</button>
              </form>
          </div>
      </div>
      </div>
  </div>
      </>
  )
}

export default FlightBookingForm