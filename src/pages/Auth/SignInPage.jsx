import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import bg from '../../assets/images/bg2.png';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay using pseudo-element */}
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center relative z-10">
        <div className="bg-white rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.8)] flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-center font-bold">
              <span className="text-[rgb(8,79,54)] mb-2">Company</span>Name
            </div>
            <div className="py-20">
              <h2 className="text-3xl font-bold text-[rgb(8,79,54)] mb-2">Sign in to Account</h2>
              <div className="border-2 w-10 border-[rgb(8,79,54)] inline-block mb-2"></div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-4 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-4 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <Link to="/">
                  <a

                    className="border-2 border-[rgb(8,79,54)] text-[rgb(8,79,54)] rounded-full px-12 py-4 inline-block font-semibold hover:bg-[rgb(8,79,54)] hover:text-white"
                  >
                    Sign In
                  </a>
                </Link>

              </div>
            </div>
          </div>
          <div className="w-2/5 bg-[rgb(8,79,54)] text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <div className='mb-3'>
              <p>Fill up your personal information and start journey with us.</p>
            </div>
            <Link to="/sign-up">
              <div
                className="border-2 border-white rounded-full px-12 py-4 inline-block font-semibold hover:bg-white hover:text-green-500 cursor-pointer"
              >
                Sign Up
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;