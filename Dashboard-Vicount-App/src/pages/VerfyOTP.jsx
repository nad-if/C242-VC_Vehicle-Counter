import React, { useState } from 'react';
import ApiClient from '../api/apiClient';
import { useNavigate } from 'react-router-dom';

const VerifyOTPPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 
  const [successMessage, setSuccessMessage] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await ApiClient.post('/auth/verify-otp', { email, otp });
      if (response.status === 200) {
        setSuccessMessage('OTP verification successful! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (error) {
      const message = error.response?.data?.message || 'OTP verification failed. Please try again.';
      setErrorMessage(message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
      <a href="" className="flex justify-center items-center mb-8 text-2xl font-semibold lg:mb-10">
        <span className="self-center text-2xl font-bold whitespace-nowrap">Verify OTP</span>
      </a>

      <div className="px-6 py-6 w-full max-w-lg bg-white rounded-xl shadow-xl shadow-gray-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Enter the OTP</h2>

        {/* Pesan error */}
        {errorMessage && (
          <div
            role="alert"
            className="mb-4 rounded border-l-4 border-red-500 bg-red-50 p-4"
          >
            <p className="text-red-700 text-sm">{errorMessage}</p>
          </div>
        )}

        {/* Pesan sukses */}
        {successMessage && (
          <div
            role="alert"
            className="mb-4 rounded border-l-4 border-green-500 bg-green-50 p-4"
          >
            <p className="text-green-700 text-sm">{successMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-fuchsia-300 block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-sm font-medium text-gray-900">
              OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-fuchsia-300 block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 w-full text-base font-medium text-center text-white bg-gradient-to-br from-primary to-voilet-500 hover:scale-[1.02] shadow-md shadow-gray-300 transition-transform rounded-lg sm:w-auto"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTPPage;``