'use client'

import { useState } from 'react';
import InputField from '@/components/InputField';

export default function Home() {
  const [name, setName] = useState("");
  const [gps, setGps] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [tel, setTel] = useState("");
  const [processing, setProcessing] = useState("");
  const [tracking, setTracking] = useState("");
  const [reference, setReference] = useState("");
  const [region, setRegion] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = async (e) => {
    console.log('Form submission started');
    e.preventDefault();
    const data = {
      name,
      gps,
      date,
      location,
      tel,
      processing,
      tracking,
      reference,
      region,
      service
    };
    
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Data submitted successfully');
      // Clear form fields
      setName('');
      setGps('');
      setDate('');
      setLocation('');
      setTel('');
      setProcessing('');
      setTracking('');
      setReference('');
      setRegion('');
      setService('');
    } else {
      console.error('Error submitting data');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl p-6 bg-white rounded-md shadow-md">
        <div className="mb-8 text-center text-2xl font-bold text-gray-700">GPS DATA COLLECTOR</div>
        <form action="https://www.formsta.net/f/iaEBdWUh97Xo" className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InputField
              id="name-input"
              label="APPLICANT'S NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <InputField
              id="gps-input"
              label="GPS"
              value={gps}
              onChange={(e) => setGps(e.target.value)}
              required
            />
            <InputField
              id="date-input"
              label="DATE"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <InputField
              id="location-input"
              label="LOCATION"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <InputField
              id="tel-input"
              label="TELEPHONE NUMBER"
              type="tel"
              pattern="[0-9]*"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
            <InputField
              id="pro-input"
              label="PROCESSING CENTRE"
              value={processing}
              onChange={(e) => setProcessing(e.target.value)}
            />
            <InputField
              id="tracking-input"
              label="TRACKING NUMBER"
              value={tracking}
              onChange={(e) => setTracking(e.target.value)}
            />
            <InputField
              id="reference-input"
              label="REFERENCE NUMBER"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
            <InputField
              id="region-input"
              label="REGION"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            />
            <InputField
              id="service-input"
              label="SERVICE TYPE"
              value={service}
              onChange={(e) => setService(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-200">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}