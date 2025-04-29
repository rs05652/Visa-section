import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const MotionLink = motion(Link);

function Header() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 text-center bg-gradient-to-br from-purple-300 via-white to-indigo-100 overflow-hidden">

  
      <div className="absolute inset-0 -z-10 bg-[length:300%_300%] animate-[gradientMove_12s_ease-in-out_infinite] bg-gradient-to-tr from-purple-400 via-white to-indigo-200" />

     
      <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-indigo-100 rounded-full opacity-30 animate-pulse blur-xl z-0" />
      <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-52 sm:h-52 bg-purple-200 rounded-full opacity-20 animate-ping blur-xl z-0" />

      
      <div className="relative mb-6">
        <div className="absolute inset-0 rounded-full blur-3xl bg-indigo-400 opacity-20 animate-ping z-0"></div>
        <motion.img
          src={logo}
          alt="SkyTrails Logo"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full shadow-xl border-4 border-white bg-white object-contain"
        />
      </div>

    
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="z-10 text-indigo-600 bg-white/80 border border-gray-300 rounded-full px-6 py-2 mb-4 text-sm sm:text-base font-medium tracking-wide shadow backdrop-blur"
      >
        Welcome to SkyTrails Intelligence Visa
      </motion.p>

    
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight drop-shadow-sm"
      >
        Get your visa quickly
        <div className="text-2xl sm:text-3xl font-semibold text-indigo-600 mt-2">
          powered by AI
        </div>
      </motion.h1>


 <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.9 }}
        className="z-10 text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed mt-6 mb-10 px-2"
      >
        SkyTrails simplifies the visa application process using cutting-edge AI technology,
        making it faster, more accurate, and completely hassle-free.
      </motion.p>

     
      <MotionLink
        to="/UserDetails"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="z-10 bg-gradient-to-r from-indigo-600 to-purple-500 hover:from-indigo-700 hover:to-purple-600 text-white rounded-full px-8 py-3 text-base font-semibold shadow-xl transition-all duration-300"
      >
        Get Started →
      </MotionLink>
    </div>
  );
}

export default Header;
