import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import Trial from "../../pages/Trial";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Çıxış edilib");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar />
      <div className="w-full my-20  text-center flex flex-col items-center gap-2 ">
        {authUser ? (
          <>
            {" "}
            <div className="flex items-center gap-2 text-xl">
              <span>Salam hörmətli istifadəçi,</span>{" "}
              <p className=" text-orange-600">{authUser.email}</p>
              <p>e-poçt ünvanı ilə giriş etdiyiniz üçün təşəkkür edirik.</p>
            </div>
            <div className="flex items-center ">
              <p>Hesabınızdan çıxmaq istəyirsinizsə,</p>
              <button onClick={userSignOut} className="text-softBlue mx-1">
                buraya
              </button>{" "}
              <span> klikləyin.</span>
            </div>
          </>
        ) : (
          <Trial />
        )}
      </div>
      <Footer />
    </>
  );
};

export default AuthDetails;
