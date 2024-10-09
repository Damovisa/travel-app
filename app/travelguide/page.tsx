"use client"

import React, { useState, Suspense } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import CityGuideData from "@/lib/CityGuideData";

export default function TravelGuidePage() {
    const [selectedCity, setSelectedCity] = useState<number | null>(null);

    const cities = CityGuideData;

    const handleMarkerClick = (cityId: number) => {
        setSelectedCity(cityId);
        console.log('cityId', cityId);
        document.getElementById(`city-${cityId}`)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-background text-foreground flex items-center justify-center">
            <div className="bg-card p-6 rounded-lg shadow-lg w-full mt-8">
                <div className="flex space-x-8 justify-between">
                    <div className="w-2/3">
                        <Suspense fallback={<div>Loading Map...</div>}>
                            <ComposableMap projection="geoEqualEarth">
                                <Geographies geography="/map.json">
                                    {({ geographies }) =>
                                        geographies.map((geo) => (
                                            <Geography key={geo.rsmKey} geography={geo} />
                                        ))
                                    }
                                </Geographies>
                                {cities.map((city, index) => (
                                    <Marker
                                        key={index}
                                        coordinates={[city.latlong[1], city.latlong[0]]}
                                        onClick={() => handleMarkerClick(city.id)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <circle r={5} fill="#F53" style={{ cursor: 'pointer' }} />
                                    </Marker>
                                ))}
                            </ComposableMap>
                        </Suspense>
                    </div>
                    <div className="w-1/3 h-screen overflow-y-auto bg-white p-4 rounded-lg shadow-lg">
                        {CityGuideData.map((city, index) => (
                            <div key={index} className="mt-4" id={"city-"+city.id}>
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
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </div >
    );
}