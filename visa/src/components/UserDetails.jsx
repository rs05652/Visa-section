import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {FaGlobeAmericas, FaMapMarkerAlt, FaUser, FaVenusMars, FaPhone, FaCity} from "react-icons/fa";
import { MdEmail, MdLocationCity } from "react-icons/md";
import { TbMapPinCode } from "react-icons/tb";
import logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { submitUserData } from './redux/userSlice';

function UserDetails() {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const reduxUserData=useSelector((state)=>state.user.userData);
  const [userData, setUserDataLocal] = useState(reduxUserData);

  dispatch(submitUserData(userData));

  const [formErrors, setFormErrors] = useState({});
  // const [userData, setUserData] = useState({
  //   firstName: '', lastName: '', email: '', gender: '',
  //   phone: '', address: '', city: '', state: '',
  //   postalCode: '', country: '',
  // });

  const countries = ['Select', 'India', 'United States', 'Australia', 'Canada'];
  const cities = ['Select', 'Mumbai', 'Kolkata', 'Chennai', 'Hyderabad'];
  const states = ['Select', 'Maharashtra', 'Karnataka', 'Tamil Nadu'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    const emailRegex = /^[A-Za-z\d]+(?:[._%+][A-Za-z\d+])*@[A-Za-z]+\.[A-Za-z0-9]{2,}$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const nameRegex = /^[A-Za-z]{2,}$/;
    const postalCodeRegex = /^\d{5,6}$/;

    if (!userData.firstName || !nameRegex.test(userData.firstName)) errors.firstName = 'Valid first name is required';
    if (!userData.lastName || !nameRegex.test(userData.lastName)) errors.lastName = 'Valid last name is required';
    if (!userData.email || !emailRegex.test(userData.email)) errors.email = 'Valid email is required';
    if (!userData.gender) errors.gender = 'Gender is required';
    if (!userData.phone || !phoneRegex.test(userData.phone)) errors.phone = 'Phone must be valid';
    if (!userData.city || userData.city === 'Select') errors.city = 'City is required';
    if (!userData.state || userData.state === 'Select') errors.state = 'State is required';
    if (!userData.postalCode || !postalCodeRegex.test(userData.postalCode)) errors.postalCode = 'Valid postal code is required';
    if (!userData.country || userData.country === 'Select') errors.country = 'Country is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    localStorage.setItem('userData', JSON.stringify(userData));
    navigate('/UserDetails/visadetails', { state: { userData } });
  };

  const inputClass = (field) =>
    `block w-full rounded-xl border px-10 py-2 mt-1 text-gray-900 shadow-sm \
     focus:outline-none focus:ring-2 sm:text-sm transition-all duration-300 \
     ${formErrors[field] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500 hover:shadow-md'}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut', bounce: 0.3 }}
      className="flex justify-center items-center px-6 py-14 bg-gradient-to-tr from-indigo-100 via-white to-purple-100 min-h-screen"
    >
      <motion.div className="w-full max-w-5xl">
        <motion.form
          onSubmit={handleSubmit}
          whileHover={{  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 25 }}
          className="space-y-8 bg-white p-10 rounded-3xl shadow-2xl"
        >
    
          <div className="flex items-center justify-center mb-8 space-x-6 ">
            <motion.img
              src={logo}
              alt="Logo"
              className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-xl "
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.h2
              className="text-4xl font-extrabold text-indigo-800 tracking-wide  "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Applicant Information  
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
           
            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-indigo-600">
                <FaUser /> First Name
              </label>
              <input
                type="text"
                value={userData.firstName}
                onChange={(e) => setUserDataLocal({ ...userData, firstName: e.target.value })}
                className={inputClass('firstName')}
                placeholder=" Enter your first name"
              />
              {formErrors.firstName && <p className="text-red-500 text-xs">{formErrors.firstName}</p>}
            </div>

            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-indigo-600">
                <FaUser /> Last Name
              </label>
              <input
                type="text"
                value={userData.lastName}
                onChange={(e) => setUserDataLocal({ ...userData, lastName: e.target.value })}
                className={inputClass('lastName')}
                placeholder=" Enter your last name"
              />
              {formErrors.lastName && <p className="text-red-500 text-xs">{formErrors.lastName}</p>}
            </div>

           
            <div className="sm:col-span-2 relative">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-indigo-600">
                <MdEmail /> Email
              </label>
              <input
                type="email"
                value={userData.email}
                onChange={(e) => setUserDataLocal({ ...userData, email: e.target.value })}
                className={inputClass('email')}
                placeholder=" Enter your email"
              />
              {formErrors.email && <p className="text-red-500 text-xs">{formErrors.email}</p>}
            </div>

            
            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-indigo-600">
                <FaVenusMars /> Gender
              </label>
              <select
                value={userData.gender}
                onChange={(e) => setUserDataLocal({ ...userData, gender: e.target.value })}
                className={inputClass('gender')}
              >
                <option value=""> Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {formErrors.gender && <p className="text-red-500 text-xs">{formErrors.gender}</p>}
            </div>

            
            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-indigo-600">
                <FaPhone /> Phone
              </label>
              <input
                type="text"
                value={userData.phone}
                onChange={(e) => setUserDataLocal({ ...userData, phone: e.target.value })}
                className={inputClass('phone')}
                placeholder=" Enter your phone"
              />
              {formErrors.phone && <p className="text-red-500 text-xs">{formErrors.phone}</p>}
            </div>

            {/* City */}
            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-indigo-600">
                <FaCity /> City
              </label>
              <select
                value={userData.city}
                onChange={(e) => setUserDataLocal({ ...userData, city: e.target.value })}
                className={inputClass('city')}
              >
                {cities.map((c, i) => <option key={i} value={c}> {c}</option>)}
              </select>
              {formErrors.city && <p className="text-red-500 text-xs">{formErrors.city}</p>}
            </div>

        
            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-indigo-600">
                <MdLocationCity /> State
              </label>
              <select
                value={userData.state}
                onChange={(e) => setUserDataLocal({ ...userData, state: e.target.value })}
                className={inputClass('state')}
              >
                {states.map((s, i) => <option key={i} value={s}> {s}</option>)}
              </select>
              {formErrors.state && <p className="text-red-500 text-xs">{formErrors.state}</p>}
            </div>

            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-indigo-600">
                <TbMapPinCode /> Postal Code
              </label>
              <input
                type="text"
                value={userData.postalCode}
                onChange={(e) => setUserDataLocal({ ...userData, postalCode: e.target.value })}
                className={inputClass('postalCode')}
                placeholder=" Enter postal code"
              />
              {formErrors.postalCode && <p className="text-red-500 text-xs">{formErrors.postalCode}</p>}
            </div>

            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-indigo-600">
                <FaGlobeAmericas /> Country
              </label>
              <select
                value={userData.country}
                onChange={(e) => setUserDataLocal({ ...userData, country: e.target.value })}
                className={inputClass('country')}
              >
                {countries.map((c, i) => <option key={i} value={c}>{c}</option>)}
              </select>
              {formErrors.country && <p className="text-red-500 text-xs">{formErrors.country}</p>}
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <motion.button
              whileHover={{  rotate: 2, boxShadow: '0px 0px 15px rgba(99,102,241,0.4)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              type="submit"
              className="rounded-xl bg-indigo-600 px-8 py-3 text-white font-semibold shadow-lg hover:bg-indigo-500 transition-all duration-300"
            >
              Next
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}

export default UserDetails;
