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
  const [showInputs, setShowInputs] = useState(false);

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
  const handlePayment = () => {
    setShowInputs(true);
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
            <div className="shadow-2xl w-[80%] rounded-lg p-8 ">
              <p className="text-softBlue text-xl my-6">
                Sizə uyğun paketi seçin:
              </p>
              <div className="grid grid-cols-1 xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 container  items-center gap-3">
                <div className="border-2 my-2 flex items-center gap-6 transition-all duration-500 hover:bg-primary hover:text-white p-4 rounded-xl shadow-xl">
                  <NavLink
                    className="flex items-center justify-center gap-2"
                    onClick={() => handlePackageSelection("sabit")}
                  >
                    <div>
                      <div className="flex items-center justify-center gap-2 border-b-2 mb-6 ">
                        <span>
                          {" "}
                          <GiAbstract016 className="text-lime-400" />
                        </span>
                        <p className="text-lg font-semibold ">
                          Başlanğıc paket
                        </p>
                        <span className="font-thin text-slate-400">
                          (ödənişsiz)
                        </span>
                      </div>
                      <p>
                        Ilkin əməliyyatlarını özündə birləşdirir.
                        <br />
                        <span className="text-gray-500">
                          (reklam və marketinq təməllərinə yiyələnmə,
                          bildirişlərin idarəsi və s.).
                        </span>
                      </p>
                    </div>
                  </NavLink>
                </div>

                <div className="border-2 my-2 flex items-center gap-4 transition-all duration-500 hover:bg-primary hover:text-white p-4 rounded-xl shadow-xl">
                  <NavLink
                    className="flex items-center justify-center gap-2"
                    onClick={() => handlePackageSelection("platinium")}
                  >
                    <div>
                      <div className="flex items-center justify-center gap-2 border-b-2 mb-6">
                        <span className="text-sky-950">
                          <GiPlatform className="text-cyan-300" />
                        </span>
                        <p className="text-xl font-semibold">Platinium paket</p>
                        <span className="font-thin text-md text-slate-400">
                          (59$)
                        </span>
                      </div>
                      <p>
                        Istənilən sayda əməliyyatlara imkan verir.
                        <br />
                        <span className="text-gray-500">
                          (səhmlərin kontrolu, tam biznes dəstəyi, problemlərin
                          köklü həlli və s.).
                        </span>
                      </p>
                    </div>
                  </NavLink>
                </div>

                <div className="border-2 flex items-center gap-4 transition-all duration-500 hover:bg-primary hover:text-white p-4 rounded-xl shadow-xl">
                  <NavLink
                    className="flex items-center justify-center gap-2"
                    onClick={() => handlePackageSelection("standart")}
                  >
                    <div>
                      <div className="flex items-center justify-center gap-2 border-b-2 mb-6">
                        <span className="text-sky-950">
                          <GiAbstract072 className="text-green-500" />
                        </span>
                        <p className="text-xl font-semibold">Standart paket</p>
                        <span className="font-thin text-md text-slate-400">
                          (39$)
                        </span>
                      </div>
                      <p>
                        Əməliyyatların qismi öhdəlik yaradır.
                        <br />
                        <span className="text-gray-500">
                          (istiqamət müəyyənləşdirmə, bazanın əsaslı təşkili,
                          öhdəliklərə cavab və s.).
                        </span>
                      </p>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="flex my-6 items-center justify-around">
                <p>Xidmət müddəti:</p>
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

              <Button
                title="Ödəmə hissəsinə keç"
                color={"text-white"}
                onClick={handlePayment}
              />
            </div>

            {showInputs && (
              <div className="my-8 flex flex-col items-center shadow-xl rounded-xl p-4">
                <div className="flex gap-2">
                  <div className="flex flex-col items-start">
                    <label htmlFor="name">Adınız</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="İsmail"
                      className="my-2 p-2 rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="surName">Soyadınız</label>
                    <input
                      type="text"
                      placeholder="Huseynov"
                      id="surName"
                      className="my-2 p-2 rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start w-full">
                  <label htmlFor="cartNumber">Kart Nömrəsi</label>
                  <input
                    type="text"
                    id="cartNumber"
                    placeholder="1234 5678 9101 1123"
                    className="my-2 p-2 w-full rounded-lg"
                  />
                </div>
                <div className="flex gap-2 border-b-2">
                  <div className="flex flex-col items-start">
                    <label htmlFor="exp">Son istifadə tarixi</label>
                    <input
                      type="text"
                      id="exp"
                      placeholder="01/26"
                      className="my-2 p-2 rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="cvv">Cvc</label>
                    <input
                      type="text"
                      id="cvv"
                      placeholder="123"
                      className="my-2 p-2 rounded-lg"
                    />
                  </div>
                </div>
                <div className="my-6 flex items-center justify-between gap-2">
                  <p>Ümumi ödənəcək məbləğ:</p>
                  <p className="border-b-2">{calculateTotalAmount()}$</p>
                </div>
              </div>
            )}
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
