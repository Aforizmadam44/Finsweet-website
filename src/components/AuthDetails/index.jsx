import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { GiAbstract072, GiAbstract016, GiPlatform } from "react-icons/gi";
import Trial from "../../pages/Trial";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import Button from "../Button";
import { NavLink } from "react-router-dom";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(3);

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

  const packagePrices = {
    sabit: 0,
    platinium: 59,
    standart: 39,
  };

  const handlePackageSelection = (packageName) => {
    setSelectedPackage(packageName);
  };

  const handleDurationSelection = (event) => {
    setSelectedDuration(parseInt(event.target.value));
  };

  const calculateTotalAmount = () => {
    const packagePrice = packagePrices[selectedPackage] || 0;
    return packagePrice * selectedDuration;
  };

  return (
    <>
      <Navbar />
      <div className="w-full  text-center flex flex-col items-center gap-2 ">
        {authUser ? (
          <>
            <div className="my-20 flex flex-col items-center container">
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
            </div>
            <p className="text-2xl font-semibold my-4 w-[30%]">
              Sifariş əməliyyatlarını tamamlamaq üçün xahiş olunur ki,
              mərhələləri izləyin.
            </p>
            <div className="shadow-2xl rounded-lg p-8 ">
              <p className="text-softBlue text-xl my-6">
                Sizə uyğun paketi seçin:
              </p>
              <div className="flex container flex-col items-center space-x-4 ">
                <div className="border-b-2 my-2 flex items-center gap-4 transition-all duration-500 hover:bg-primary hover:text-white p-4 rounded-xl">
                  <NavLink
                    className="flex items-center justify-center gap-2"
                    onClick={() => handlePackageSelection("sabit")}
                  >
                    <div>
                      <div className="flex items-center justify-center gap-2 ">
                        <p className="text-lg font-semibold">Sabit paket</p>
                        <span className="text-sky-950">
                          {" "}
                          <GiAbstract016 className="text-sky-950" />
                        </span>
                      </div>
                      <span className="font-thin text-slate-400">
                        ödənişsiz
                      </span>
                      <p>
                        Başlanğıc üçün az sayda əməliyyatları özündə birləşdirir
                        <br />
                        <span className="text-gray-500">
                          (reklamların ötürülməsi, bildirişlərin idarəsi və s.).
                        </span>
                      </p>
                    </div>
                  </NavLink>
                </div>

                <div className="border-b-2 my-2 flex items-center gap-4 transition-all duration-500 hover:bg-primary hover:text-white p-4 rounded-xl">
                  <NavLink
                    className="flex items-center justify-center gap-2"
                    onClick={() => handlePackageSelection("platinium")}
                  >
                    <div>
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-xl font-semibold">Platinium paket</p>
                        <span className="text-sky-950">
                          <GiPlatform className="text-sky-950" />
                        </span>
                      </div>
                      <span className="font-thin text-md text-slate-400">
                        (59$)
                      </span>
                      <p>
                        Ən yaxşı nəticələr üçün istənilən sayda əməliyyatlara
                        imkan verir.
                        <br />
                        <span className="text-gray-500">
                          (səhmlərin texniki kontrolu, tam biznes dəstəyi,
                          problemlərin köklü həlli və s.).
                        </span>
                      </p>
                    </div>
                  </NavLink>
                </div>

                <div className="border-b-2 flex items-center gap-4 transition-all duration-500 hover:bg-primary hover:text-white p-4 rounded-xl">
                  <NavLink
                    className="flex items-center justify-center gap-2"
                    onClick={() => handlePackageSelection("standart")}
                  >
                    <div>
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-xl font-semibold">Standart paket</p>
                        <span className="text-sky-950">
                          <GiAbstract072 />
                        </span>
                      </div>
                      <span className="font-thin text-md text-slate-400">
                        (39$)
                      </span>
                      <p>
                        Əməliyyatların bir çoxuna sahiblənmək imkanı yaradır.
                        <br />
                        <span className="text-gray-500">
                          (istiqamət müəyyənləşdirmə, bazanın əsaslı təşkili,
                          öhdəliklərə cavab s.).
                        </span>
                      </p>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="flex my-6 items-center justify-around">
                <p>Müddət:</p>
                <select
                  name=""
                  id=""
                  className="h-10 text-center rounded-lg"
                  onChange={handleDurationSelection}
                >
                  <option value="3">3 ay</option>
                  <option value="6">6 ay</option>
                  <option value="9">9 ay</option>
                  <option value="12">12 ay</option>
                </select>
              </div>
              <div className="my-6   flex items-center justify-around">
                <p>Ödənəcək məbləğ:</p>
                <p className="underline">{calculateTotalAmount()}$</p>
              </div>
              <Button title="Ödəmə hissəsinə keç" color={"text-white"} />
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
