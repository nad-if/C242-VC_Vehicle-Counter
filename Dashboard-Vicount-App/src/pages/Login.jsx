import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiClient from "../api/apiClient";

const Login = () => {
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // State untuk pesan error

  const handleLoginFormDataChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await ApiClient.post("/auth/login", loginFormData);
      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.userId)); // Simpan detail user
        localStorage.setItem("role", response.data.role);
        navigate("/"); // Arahkan ke dashboard
      }
    } catch (error) {
      const message =
        error.response?.data?.message || "An unexpected error occurred.";
      setErrorMessage(message); // Set pesan error untuk ditampilkan
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-6 py-8 mx-auto md:h-screen pt:mt-0">
      <a
        href=""
        className="flex justify-center items-center mb-8 text-2xl font-semibold lg:mb-10"
      >
        <img src="/logo.png" alt="Logo" className="mr-4 h-10" />
        <span className="self-center text-2xl font-bold whitespace-nowrap">
          V-Count Dashboard
        </span>
      </a>

      <div className="px-6 py-6 w-full max-w-lg bg-white rounded-xl shadow-xl shadow-gray-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Login to your account
        </h2>

        {/* Tampilkan pesan error jika ada */}
        {errorMessage && (
          <div
            role="alert"
            className="mb-4 rounded border-l-4 border-red-500 bg-red-50 p-4"
          >
            <p className="text-red-700 text-sm">{errorMessage}</p>
          </div>
        )}

        <form onSubmit={handleLoginSubmit} className="space-y-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginFormData.email}
              onChange={handleLoginFormDataChange}
              className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-fuchsia-300 block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginFormData.password}
              onChange={handleLoginFormDataChange}
              className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-fuchsia-300 block w-full p-2.5"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="py-3 px-5 w-full text-base font-medium text-center text-white bg-gradient-to-br from-primary to-voilet-500 hover:scale-[1.02] shadow-md shadow-gray-300 transition-transform rounded-lg sm:w-auto"
          >
            Login
          </button>

          <div className="text-sm font-medium text-gray-500">
            Don't have an account?{" "}
            <a href="/register" className="text-primary hover:underline">
              Create an account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
