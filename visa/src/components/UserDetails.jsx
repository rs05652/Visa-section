import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

function UserDetails() {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    phone: '',
    address: '',
    city: '',
    region: '',
    postalCode: '',
    state: '',
    country: '',
  });

  const countries = [
    'Select',
    'India',
    'United States',
    'Australia',
    'Canada',
    'Germany',
    'France',
    'Brazil',
    'South Korea',
    'Japan',
    'United Kingdom',
  ];

  const city=[
    'Select',
    'Mumbai',
    'kolkata',
    'Chennai',
    'Hyderadad',
    'Pune',
    'Bengaluru'
  ]
  const state=[
    'Select',
    'Maharastra',
    'Karnataka',
    'Tamil Nadu',
    'Uttar Pradesh',
    'Gujarat',
    'Delhi',
    'West Bangal',
    'Rajasthan',
    'Kerala',
    
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!userData.firstName) errors.firstName = 'First name is required';
    if (!userData.lastName) errors.lastName = 'Last name is required';
    if (!userData.email){
      errors.email = 'Email is required';
    }  else if (!emailRegex.test(userData.email)){
      errors.email = "Invalid email format";

    }
    if (!userData.gender) errors.gender = 'Gender is required';
    if (!userData.phone) errors.phone = 'Phone number is required';
    if (!userData.address) errors.address = 'Address is required';
    if (!userData.city) errors.city = 'City is required';
    if (!userData.country) errors.country = 'Country is required';
    if (!userData.region) errors.region = 'Region is required';
    if (!userData.state) errors.state = 'State is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    localStorage.setItem('userData', JSON.stringify(userData));
    navigate('/UserDetails/visadetails', { state: { userData } });
  };

  const inputClass = (field) =>
    `block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 sm:text-sm ${
      formErrors[field]
        ? 'border border-red-500 focus:outline-red-500'
        : 'border border-gray-300 focus:outline-indigo-600'
    }`;

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8 py-10 bg-gradient-to-tr from-purple-300 via-white to-white min-h-screen">
      <div className="w-full max-w-4xl">
        <form
          className="space-y-8 bg-white p-6 rounded-2xl shadow-2xl"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold text-gray-900">Applicant Information</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                value={userData.firstName}
                onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                className={inputClass('firstName')}
              />
              {formErrors.firstName && <p className="text-red-500 text-sm">{formErrors.firstName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                value={userData.lastName}
                onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                className={inputClass('lastName')}
              />
              {formErrors.lastName && <p className="text-red-500 text-sm">{formErrors.lastName}</p>}
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                className={inputClass('email')}
              />
              {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select
                value={userData.gender}
                onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
                className={inputClass('gender')}
              >
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              {formErrors.gender && <p className="text-red-500 text-sm">{formErrors.gender}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="number"
                value={userData.phone}
                onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                className={inputClass('phone')}
              />
              {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Street Address</label>
              <input
                type="text"
                value={userData.address}
                onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                className={inputClass('address')}
              />
              {formErrors.address && <p className="text-red-500 text-sm">{formErrors.address}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <select
                type="text"
                value={userData.city}
                onChange={(e) => setUserData({ ...userData, city: e.target.value })}
                className={inputClass('city')}
                
              >
                {city.map((city,idx)=>(
                  <option value={city} key={idx}>
                    {city}
                  </option>
                ))}
                </select>
              {formErrors.city && <p className="text-red-500 text-sm">{formErrors.city}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">State</label>
              <select
                type="text"
                value={userData.state}
                onChange={(e) => setUserData({ ...userData, state: e.target.value })}
                className={inputClass('state')}
              >
                {state.map((state,idx)=>(
                  <option>{state}</option>
                ))}
              </select>
              {formErrors.state && <p className="text-red-500 text-sm">{formErrors.state}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Region</label>
              <input
                type="text"
                value={userData.region}
                onChange={(e) => setUserData({ ...userData, region: e.target.value })}
                className={inputClass('region')}
              />
              {formErrors.region && <p className="text-red-500 text-sm">{formErrors.region}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Postal Code</label>
              <input
                type="text"
                value={userData.postalCode}
                onChange={(e) => setUserData({ ...userData, postalCode: e.target.value })}
                className={inputClass('postalCode')}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <select
                value={userData.country}
                onChange={(e) => setUserData({ ...userData, country: e.target.value })}
                className={inputClass('country')}
              >
                {countries.map((country, idx) => (
                  <option key={idx} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {formErrors.country && <p className="text-red-500 text-sm">{formErrors.country}</p>}
            </div>
          </div>

          <div className="flex justify-end pt-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserDetails;