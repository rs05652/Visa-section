import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

function VisaDetails() {
   const country=[
    'Select',
    'India',
    'Australia',
    'United State',
    'USA',
    'Russia',
    'China',
   ]
   

  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    const stateData = location.state?.userData;
    console.log(location.pathname);
    console.log(location.state);
    if (!stateData) {
      navigate('/UserDetails'); 
    } else {
      setUserData(stateData);
    }
  }, [location, navigate]);

  if (!userData) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <button
          onClick={() => navigate('/UserDetails')}
          className="mb-6 text-indigo-600 hover:underline"
        >
          ← Back to User Details
        </button>

        <form>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-3xl font-semibold text-gray-900">Visa Application Form</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label htmlFor="country" className="block text-sm font-medium text-gray-900">
                  What country is your passport from?
                </label>
                <div className="mt-2">
                  <select
                    required
                    name="country"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  > 
                  {country.map((country,idx)=>(
                    <option value={country} key={idx}>{country}</option>
                  ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-900">Traveling From</label>
                <div className="mt-2 relative">
                  <select
                    required
                    className="w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                  >
                    <option>Select Option</option>
                    <option>India</option>
                    <option>Australia</option>
                  </select>
                  <ChevronDownIcon className="absolute right-2 top-2.5 h-5 w-5 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-900">Traveling To</label>
                <div className="mt-2 relative">
                  <select
                    required
                    className="w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                  >
                    <option>Select Option</option>
                    <option>India</option>
                    <option>Australia</option>
                  </select>
                  <ChevronDownIcon className="absolute right-2 top-2.5 h-5 w-5 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-900">Departure Date</label>
                <div className="mt-2">
                  <input
                    required
                    type="date"
                    defaultValue={new Date().toISOString().split('T')[0]}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-900">Arrival Date</label>
                <div className="mt-2">
                  <input
                    required
                    type="date"
                    defaultValue={new Date().toISOString().split('T')[0]}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VisaDetails;
