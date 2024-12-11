import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Register = () => {

  return (
    <div className="flex flex-col justify-center items-center px-6 py-8  mx-auto md:h-screen pt:mt-0">
      <a
        href=""
        className="flex justify-center items-center mb-4 text-xl font-semibold lg:mb-8"
      >
        <img src={Logo} alt="Creative Tim Logo" className="mr-4 h-10" />
        <span className="self-center text-2xl font-bold whitespace-nowrap">
          Vecount Dashboard
        </span>
      </a>
      {/* Card */}
      <div className="px-6 py-6 w-full max-w-lg bg-white rounded-xl shadow-xl shadow-gray-300">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Create an account
          </h2>
          <form className="mt-6 space-y-6" action="#">
            <div className="mb-4 flex flex-col gap-4 sm:flex-row">
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="fullname"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your full name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-fuchsia-300 block w-full p-2.5"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-fuchsia-300 block w-full p-2.5"
                  placeholder="+62 83896463699"
                  required
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col gap-4 sm:flex-row">
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-fuchsia-300 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-fuchsia-300 block w-full p-2.5"
                  required
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col gap-4 sm:flex-row">
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="role"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your role
                </label>
                <select
                  name="role"
                  id="role"
                  className="border bg-[#F5F7F8] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-fuchsia-300 block w-full p-2.5"
                >
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="bio"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your bio
                </label>
                <input
                  type="text"
                  name="bio"
                  id="bio"
                  placeholder="Your bio"
                  className=" border bg-[#F5F7F8] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-fuchsia-300 block w-full p-2.5"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-fuchsia-300 block w-full p-2.5"
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
              Already have an account?{" "}
              <Link to="/auth/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
