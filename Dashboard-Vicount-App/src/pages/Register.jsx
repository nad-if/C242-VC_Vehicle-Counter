import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiClient from '../api/apiClient';
import { Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    role: 'user',
    phone: '',
    bio: '',
    image: null,
  });
  const [errorMessage, setErrorMessage] = useState(''); // State untuk pesan error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    for (const key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }

    try {
      const response = await ApiClient.post('auth/register', formDataToSubmit);
      if (response.status === 200) {
        navigate('/verify'); // Redirect to verification page setelah berhasil registrasi
      }
    } catch (error) {
      // Ambil pesan error dari response atau gunakan pesan default
      const message =
        error.response?.data?.message || 'Registration failed. Please try again.';
      setErrorMessage(message); // Set pesan error
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-6 py-8 mx-auto md:h-screen pt:mt-0">
      <a href="" className="flex justify-center items-center mb-4 text-xl font-semibold lg:mb-8">
        <span className="self-center text-2xl font-bold whitespace-nowrap">V-count Dashboard</span>
      </a>
      <div className="px-6 py-6 w-full max-w-lg bg-white rounded-xl shadow-xl shadow-gray-300">
        <h2 className="text-2xl font-bold text-gray-900">Create an account</h2>

        {/* Tampilkan pesan error jika ada */}
        {errorMessage && (
          <div
            role="alert"
            className="my-2 rounded border-l-4 border-red-500 bg-red-50 p-4"
          >
            <p className="text-red-700 text-sm">{errorMessage}</p>
          </div>
        )}

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-4 sm:flex-row">
            <div className="w-full sm:w-1/2">
              <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900">
                Your full name
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-fuchsia-300 block w-full p-2.5"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                Your phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-fuchsia-300 block w-full p-2.5"
                placeholder="+62 83896463699"
                required
              />
            </div>
          </div>

          <div className="mb-4 flex flex-col gap-4 sm:flex-row">
            <div className="w-full sm:w-1/2">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-fuchsia-300 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-fuchsia-300 block w-full p-2.5"
                required
              />
            </div>
          </div>

          <div className="mb-4 flex flex-col gap-4 sm:flex-row">
            <div className="w-full sm:w-1/2">
              <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">
                Your role
              </label>
              <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="border bg-[#F5F7F8] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-fuchsia-300 block w-full p-2.5"
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-900">
                Your bio
              </label>
              <input
                type="text"
                name="bio"
                id="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Your bio"
                className="border bg-[#F5F7F8] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-fuchsia-300 block w-full p-2.5"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">
              Your image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleFileChange}
              className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-fuchsia-300 block w-full p-2.5"
              required
            />
          </div>

          <button
            type="submit"
            className="py-3 px-5 w-full text-base font-medium text-center text-white bg-gradient-to-br from-primary to-voilet-500 hover:scale-[1.02] shadow-md shadow-gray-300 transition-transform rounded-lg sm:w-auto"
          >
            Create account
          </button>
          <div className="text-sm font-medium text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
