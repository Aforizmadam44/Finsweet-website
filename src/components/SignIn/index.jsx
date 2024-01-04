import axios from "axios";
import { useState } from "react";

import { NavLink } from "react-router-dom";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbwGD8t0_Ge8Az4f4MQ4toox0kiQY3_rlB1NS4bIabn3v5pNuN8_Z_B5_G19w3iiY-w/exec",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <form
          className="bg-white p-28 shadow-xl rounded-xl"
          onSubmit={handleSignUp}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Daxil olun</h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-primary text-md font-semibold mb-2"
            >
              E-poçt ünvanı
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-primary text-md font-semibold mb-2"
            >
              Şifrə
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              disabled={loading}
              className="w-full bg-blue-500 text-white bg-orange-600 p-2 rounded-md hover:bg-blue-600 focus:outline-none hover:text-primary hover:bg-white hover:border-primary border-2"
            >
              {loading ? "Yükleniyor..." : "Hesabı Yarat"}
            </button>
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default SignIn;
