import { useState } from "react";
import { auth } from "../..//firebase";
import { NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSeen, setIsSeen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
    const validatePassword = (password) => {
      const passwordRegex = /^.{8,}$/;
      return passwordRegex.test(password);
    };
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    if (!validateEmail(email)) {
      setEmailError("Xahiş olunur, düzgün e-poçt ünvanı daxil edin.");
      return;
    } else {
      setEmailError("");
    }
    if (!validatePassword(password)) {
      setPasswordError("Xahiş olunur, şifrə ən az 8 simvol uzunluğunda olsun.");
      return;
    } else {
      setPasswordError("");
    }
  };
  const togglePasswordVisibility = () => {
    setIsSeen(!isSeen);
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <form
          className="bg-white p-28 shadow-xl rounded-xl"
          onSubmit={handleSignUp}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Qeydiyyatdan keçin.
          </h2>
          <div className="flex gap-3">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-primary text-md font-bold mb-2"
              >
                Adınız
              </label>
              <input
                type="text"
                id="name"
                placeholder="İsmail"
                className="w-full p-2 border-slate-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-primary text-md font-bold mb-2"
              >
                Soyadınız
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Huseynov"
                className="w-full p-2 border-slate-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-primary text-md font-bold mb-2"
            >
              E-poçt ünvanı
            </label>
            <input
              type="text"
              id="email"
              placeholder="test@gmail.com"
              className="w-full p-2 border-slate-300 rounded-md focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-red-500">{emailError}</p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-primary text-md font-bold mb-2"
            >
              Şifrə
            </label>
            <div className="relative">
              <input
                type={isSeen ? "password" : "text"}
                id="password"
                placeholder="**********"
                className="w-full p-2 border-slate-300 rounded-md focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isSeen ? (
                <FaEyeSlash
                  className="absolute right-4 top-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEye
                  className="absolute right-4 top-3  cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
              <p className="text-red-500">{passwordError}</p>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white bg-orange-600 p-2 rounded-md hover:bg-blue-600 focus:outline-none hover:text-primary hover:bg-white hover:border-orange-600 border-2"
          >
            Qeydiyyatdan keçin
          </button>
          <div className="flex justify-between items-center my-4">
            <span className="text-slate-400">Hesabınız var?</span>{" "}
            <NavLink to="/signIn" className="text-softBlue">
              {" "}
              Daxil olun
            </NavLink>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
