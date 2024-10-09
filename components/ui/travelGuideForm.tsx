import React, { useState } from 'react';

const TravelGuideForm: React.FC = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');
  const [highlights, setHighlights] = useState<string[]>(['']);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const handleHighlightChange = (index: number, value: string) => {
    const newHighlights = [...highlights];
    newHighlights[index] = value;
    setHighlights(newHighlights);
  };

  const addHighlight = () => {
    setHighlights([...highlights, '']);
  };

  const fetchCoordinates = async (cityName: string, countryName: string) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cityName)},${encodeURIComponent(countryName)}&format=json`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        setLatitude(parseFloat(data[0].lat));
        setLongitude(parseFloat(data[0].lon));
        setError('');
        console.log({ latitude, longitude });
      } else {
        setLatitude(null);
        setLongitude(null);
        setError('Location not found.');
        console.log('Location not found.');
      }
    } catch {
      setLatitude(null);
      setLongitude(null);
      setError('Failed to fetch coordinates.');
      console.log('Failed to fetch coordinates.');
    }
  };

  const handleBlur = () => {
    if (city && country) {
      fetchCoordinates(city, country);
    } else {
      setLatitude(null);
      setLongitude(null);
      setError('');
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ city, country, description, highlights, latitude, longitude });
  };

  return (
    <div className="min-w-max mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            City:
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onBlur={handleBlur}
              className="w-full p-2 border border-gray-300 rounded text-lg"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Country:
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              onBlur={handleBlur}
              className="w-full p-2 border border-gray-300 rounded text-lg"
            />
          </label>
        </div>
        <div className='mb-4'>
        {latitude && <div><i><strong>Location:</strong> {latitude},{longitude}</i></div>}
        {error && <div className="text-red-500 mb-4">{error}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-lg"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Highlights:</label>
          {highlights.map((highlight, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={highlight}
                onChange={(e) => handleHighlightChange(index, e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-lg"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addHighlight}
            className="w-full p-2 bg-gray-500 text-white rounded hover:bg-blue-600"
          >
            Add Highlight
          </button>
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TravelGuideForm;