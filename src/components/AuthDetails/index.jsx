import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

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
    <div className="my-4 text-slate-500">
      {authUser ? (
        <>
          {" "}
          <p>{`Giriş edilib ${authUser.email} e-poçt ünvanı ilə .`}</p>
          <button onClick={userSignOut}>Çıxış edin</button>
        </>
      ) : (
        <p>Hesabınıza daxil olmamısınız.</p>
      )}
    </div>
  );
};

export default AuthDetails;
