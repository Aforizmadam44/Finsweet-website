import React from "react";
import Footer from "../Footer";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-violet ">
        <form className="bg-white p-28 w-[30%] shadow-xl rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Daxil olun</h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              E-poçt ünvanı
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              Şifrə
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white bg-green-600 p-2 rounded-md hover:bg-blue-600 focus:outline-none hover:text-primary hover:bg-white hover:border-primary border-2"
          >
            Daxil ol
          </button>
          <NavLink to="/signUp">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white bg-orange-600 p-2 rounded-md hover:bg-blue-600 focus:outline-none hover:text-primary hover:bg-white hover:border-primary border-2"
            >
              Hesab yarat
            </button>
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default SignUp;
