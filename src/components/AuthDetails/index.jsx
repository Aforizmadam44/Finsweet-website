import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { GiAbstract072, GiAbstract016, GiPlatform } from "react-icons/gi";
import Trial from "../../pages/Trial";
// import { useNavigate } from "react-router-dom";

import Button from "../Button";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(3);
  const [showInputs, setShowInputs] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [cartNumber, setCartNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [address, setAddress] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "surName":
        setSurName(value);
        break;
      case "cartNumber":
        setCartNumber(value);
        break;
      case "expMonth":
        setExpMonth(value);
        break;
      case "expYear":
        setExpYear(value);
        break;
      case "cvv":
        setCvv(value);
        break;
      case "address":
        setAddress(value);
        break;
    }
  };
  const paymentControl = () => {
    if (
      name &&
      surName &&
      cartNumber &&
      expMonth &&
      expYear &&
      cvv &&
      address
    ) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Sifarişiniz alındı, təşəkkür edirik.",
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      Swal.fire({
        title: "Xanaları boş buraxmamalısınız.",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
    }
  };

  const handlePayment = () => {
    setShowInputs(true);
  };

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
        window.location.href = "/trial";
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
      <div className="w-full text-center flex flex-col items-center gap-2 ">
        {authUser ? (
          <>
            <div className="my-20 flex flex-col items-center justify-center container w-[70%]">
              <div className="flex items-center  gap-2 text-xl">
                <span>Salam,</span>{" "}
                <p className=" text-orange-600 font-semibold text-xl">
                  {authUser.email}
                </p>
              </div>
              <p>e-poçt ünvanı ilə giriş etdiyiniz üçün təşəkkür edirik.</p>
              <div className="flex items-center ">
                <p className="text-slate-400">
                  (Hesabınızdan çıxmaq istəyirsinizsə,
                  <button onClick={userSignOut} className="text-softBlue mx-1">
                    buraya
                  </button>{" "}
                  <span> klikləyin.)</span>
                </p>
              </div>
            </div>
            {showInputs ? (
              <p className="text-3xl font-semibold my-4 w-[60%] text-center">
                Ödəmə əməliyyatlarını yerinə yetirin.
              </p>
            ) : (
              <p className="text-2xl font-semibold my-4 w-[30%]text-center">
                Sifariş əməliyyatlarını tamamlamaq üçün xahiş olunur ki,
                mərhələləri izləyin.
              </p>
            )}

            {showInputs || (
              <div className="shadow-2xl w-[80%] mx-auto rounded-lg p-8 ">
                <p className="text-softBlue text-xl my-6">
                  Sizə uyğun paketi seçin:
                </p>
                <div className="grid grid-cols-1 xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 container mx-auto justify-center  items-center gap-3">
                  <div className="border-2 my-2 flex items-center justify-center gap-6 transition-all duration-500 hover:bg-primary hover:text-white p-4 rounded-xl shadow-xl">
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
                        <p className="flex flex-col gap-2 items-center">
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

                  <div className="border-2 my-2 flex items-center justify-center gap-4 transition-all duration-500 hover:bg-primary hover:text-white p-4 rounded-xl shadow-xl">
                    <NavLink
                      className="flex items-center justify-center gap-2"
                      onClick={() => handlePackageSelection("platinium")}
                    >
                      <div>
                        <div className="flex items-center justify-center gap-2 border-b-2 mb-6">
                          <span className="text-sky-950">
                            <GiPlatform className="text-cyan-300" />
                          </span>
                          <p className="text-xl font-semibold">
                            Platinium paket
                          </p>
                          <span className="font-thin text-md text-slate-400">
                            (59$)
                          </span>
                        </div>
                        <p className="flex flex-col gap-2 items-center">
                          Istənilən sayda əməliyyatlara imkan verir.
                          <br />
                          <span className="text-gray-500">
                            (səhmlərin kontrolu, tam biznes dəstəyi,
                            problemlərin köklü həlli və s.).
                          </span>
                        </p>
                      </div>
                    </NavLink>
                  </div>

                  <div className="border-2 flex items-center justify-center gap-4 transition-all duration-500 hover:bg-primary hover:text-white p-4 rounded-xl shadow-xl">
                    <NavLink
                      className="flex items-center justify-center gap-2"
                      onClick={() => handlePackageSelection("standart")}
                    >
                      <div>
                        <div className="flex items-center justify-center gap-2 border-b-2 mb-6">
                          <span className="text-sky-950">
                            <GiAbstract072 className="text-green-500" />
                          </span>
                          <p className="text-xl font-semibold">Gümüş paket</p>
                          <span className="font-thin text-md text-slate-400">
                            (39$)
                          </span>
                        </div>
                        <p className="flex flex-col gap-2 items-center">
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
                <div className="flex my-6 items-center justify-center gap-4">
                  <p>Xidmət müddəti:</p>
                  <select
                    name=""
                    id=""
                    className="h-10 text-center rounded-lg"
                    onChange={handleDurationSelection}
                  >
                    <option disabled>Aylıq</option>
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
            )}
            {showInputs && (
              <div className="my-8 flex flex-col items-center shadow-xl rounded-xl p-8">
                <form action="">
                  <div className="flex items-center gap-2 justify-center border-b-2 ">
                    <div className="flex flex-col  items-center justify-center sm:items-start">
                      <label htmlFor="name" className="font-semibold">
                        Adınız
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="İsmail"
                        maxLength={16}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="my-2 p-2 rounded-lg w-[50%] sm:w-full  "
                        required
                      />
                    </div>
                    <div className="flex flex-col items-start ">
                      <label htmlFor="surName" className="font-semibold">
                        Soyadınız
                      </label>
                      <input
                        type="text"
                        placeholder="Huseynov"
                        maxLength={16}
                        id="surName"
                        value={surName}
                        onChange={(e) => setSurName(e.target.value)}
                        className="my-2 p-2 rounded-lg w-[50%] sm:w-full "
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col px-16 sm:px-0 items-start w-full">
                    <label htmlFor="cartNumber" className="font-semibold">
                      Kart Nömrəsi
                    </label>
                    <input
                      type="text"
                      id="cartNumber"
                      maxLength={16}
                      value={cartNumber}
                      onChange={(e) => setCartNumber(e.target.value)}
                      placeholder="1234 5678 9101 1123"
                      className="my-2 p-2 w-[80%] sm:w-full rounded-lg"
                    />
                  </div>
                  <div className="flex justify-around sm:justify-between  border-b-2">
                    <div className="flex flex-col items-start">
                      <label htmlFor="exp" className="font-semibold">
                        Son istifadə tarixi
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          id="exp"
                          value={expYear}
                          required
                          maxLength={2}
                          onChange={(e) => setExpYear(e.target.value)}
                          placeholder="01"
                          className="my-2 p-2 rounded-lg w-10"
                        />
                        /
                        <input
                          type="text"
                          id="exp"
                          value={expMonth}
                          required
                          maxLength={2}
                          onChange={(e) => setExpMonth(e.target.value)}
                          placeholder="26"
                          className="my-2 p-2 rounded-lg w-10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <label htmlFor="cvv" className="font-semibold">
                        Cvc
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        maxLength={3}
                        className="my-2 p-2 rounded-lg w-14"
                        required
                      />
                    </div>
                  </div>
                  <div className="block sm:flex sm:items-center  gap-6">
                    <label
                      htmlFor="address"
                      className="font-semibold block sm:inline-block"
                    >
                      Ünvan:
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Faktiki yaşadığınız yer."
                      maxLength={30}
                      className="my-2 p-2 rounded-lg mx-2 sm:mx-0n"
                      required
                    />
                    <select name="" id="" className="rounded-lg">
                      <option value="" disabled>
                        Şəhər
                      </option>
                      <option value="">Bakı</option>
                      <option value="">Sumqayıt</option>
                      <option value="">Abşeron</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start my-4 gap-2 ">
                    <p>Məlumatları təsdiqləyirəm</p>
                    <input type="checkbox" name="" id="" required />
                  </div>
                  <div className="my-6 flex items-center sm:justify-end justify-center gap-2">
                    <p className="">Ümumi ödənəcək məbləğ:</p>
                    <p className="border-b-2 font-semibold">
                      {calculateTotalAmount()}$
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <button
                      type="submit"
                      onClick={paymentControl}
                      disabled={paymentComplete}
                      className="bg-primary rounded-lg p-2 text-white hover:bg-white border-2 hover:border-primary hover:text-primary
                      
                "
                    >
                      {paymentComplete
                        ? "Ödəmə tamamlanır gözləyin..."
                        : "Ödəməni tamamla"}
                    </button>
                    <NavLink to={"/trial"} className="text-softBlue">
                      Ləğv et
                    </NavLink>
                  </div>
                </form>
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
