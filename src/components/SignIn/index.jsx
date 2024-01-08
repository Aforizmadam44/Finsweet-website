import { useState } from "react";
import { auth } from "../..//firebase";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSeen, setIsSeen] = useState(false);
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^.{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

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

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      navigate("/authDetails");
    } catch (error) {
      console.error(error);
    }
    (auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
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
          onSubmit={handleSignIn}
        >
          <h1 className="text-3xl font-bold mb-6 text-center">
            Hesabınıza daxil olun
          </h1>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-primary text-md font-bold mb-2"
            >
              E-poçt ünvanı
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border-slate-300 rounded-md focus:outline-none focus:border-blue-500"
              value={email}
              placeholder="test@gmail.com"
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
            <div className="relative flex items-center">
              <input
                type={isSeen ? "text" : "password"}
                id="password"
                className="w-full p-2 border-slate-300 rounded-md focus:outline-none focus:border-blue-500"
                value={password}
                placeholder="***********"
                onChange={(e) => setPassword(e.target.value)}
              />
              {isSeen ? (
                <FaEye
                  className="absolute right-4 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEyeSlash
                  className="absolute right-4 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
            <p className="text-red-500">{passwordError}</p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white bg-green-600 p-2 rounded-md hover:bg-blue-600 focus:outline-none hover:text-primary hover:bg-white hover:border-green-600 border-2"
          >
            Daxil ol
          </button>

          <div className="flex items-center justify-between my-4">
            <span className="text-slate-400">Üzv deyilsiniz?</span>{" "}
            <Link to={"/SignUp"} className="text-softBlue">
              {" "}
              Qeydiyyatdan keçin.
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
