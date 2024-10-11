"use client"

import React, { useState, Suspense } from 'react';

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import CityGuideData from "@/lib/data/CityGuideData";


export default function TravelGuidePage() {
    const [selectedCity, setSelectedCity] = useState<number | null>(null);

    const cities = CityGuideData;

    const handleMarkerClick = (cityId: number) => {
        setSelectedCity(cityId);
        console.log('cityId', cityId);
        document.getElementById(`city-${cityId}`)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (

        <div className="guide container">

            <div className="map">
                            <Suspense fallback={<div>Loading Map...</div>}>
                                <ComposableMap projection="geoEqualEarth" projectionConfig={{ scale: 0, center: [21, -10] }} style={{ maxHeight: "1400" }}preserveAspectRatio="none" viewBox="0 0 800 500">
                                    <Geographies geography="/map.json">
                                        {({ geographies }) => geographies.map((geo) => (
                                            <Geography key={geo.rsmKey}
                                                geography={geo}
                                                fill="#333"
                                                stroke="#000" />
                                        ))}
                                    </Geographies>
                                    {cities.map((city, index) => (
                                        <Marker
                                            key={index}
                                            coordinates={[city.latlong[1], city.latlong[0]]}
                                            onClick={() => handleMarkerClick(city.id)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <circle r={5} fill="#4EA0E9" style={{ cursor: 'pointer' }} />
                                        </Marker>
                                    ))}
                                </ComposableMap>
                            </Suspense>
            </div>                       
            

            <div className="sticky-sidebar">
                <div class="travel-guides">                   
                    <ul>
                    {CityGuideData.map((city, index) => (
                        <li key={index} className="mt-4" id={"city-" + city.id}>
                            <h2 className={city.id === selectedCity ? 'highlight text-xl font-bold' : 'text-xl font-bold'}>
                                {city.city}, {city.country}
                            </h2>
                            <p className="mt-2">{city.description}</p>
                            <h3 className="text-l font-bold">Highlights:</h3>
                            <ul className="mt-2 list-disc list-inside">
                                {city.highlights.map((highlight: string, index: number) => (
                                    <li key={index}>{highlight}</li>
                                ))}
                            </ul>
                            </li>
                    ))}
                   </ul>
                </div>
            </div>

         </div>
         

    );
}