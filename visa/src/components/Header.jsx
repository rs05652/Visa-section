import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-gradient-to-tr from-purple-400 via-white to-white h-screen flex flex-col justify-center items-center">
      <p className="border border-gray-300 rounded-full text-blue-400 p-1 m-1">Welcome to the Skytrails Intelligence Visa</p>
      <br />
      <div>
        <h1 className="text-7xl font-bold ml-7">Get your visa quickly
          <div className="text-center mr-7"> powered by AI</div>
        </h1>
      </div>
      <br />
      <br />
      <div className='text-2xl text-slate-500 '>
        SkyTrails simplifies the visa application process with cutting-edge artificial
        <div className="text-center mr-7"> intelligence, ensuring speed, accuracy, and hassle-free approvals</div>
      </div>
      <br />
      <Link to='/UserDetails' className='bg-blue-500 rounded-lg px-4 py-2 text-white cursor-pointer'>
        Get Started →
      </Link>
    </div>
  );
}

export default Header;
