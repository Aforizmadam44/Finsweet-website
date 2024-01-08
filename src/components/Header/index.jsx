import Button from "../Button";
import { useState } from "react";

const Header = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(true);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container my-20 flex text-center items-center flex-col gap-6 text-primary font-bold w-[60%]">
      <h1 className="text-5xl font-semibold">
        Satışlarınızı ve xidmətlərinizi inkişaf etdirmək üçün ən yaxşı proqram.
      </h1>
      <p className="font-semibold text-slate-500">
        Bu proqram vasitəsiylə uzun illərin təcrübəsinə əsaslanaraq sizə unikal
        təkliflər və professional xidmətlər təqdim edirik, bizə qoşulun və
        perspektiv təminata sahiblənin.
      </p>
      <form action="" className="inputAndBtn">
        <input
          type="email"
          placeholder="E-poçtunuzu daxil edin"
          className="border-slate-300 rounded-2xl my-6 xl:w-96 h-16 sm:w-80"
          value={email}
          onChange={handleInputChange}
        />
        <Button
          title={"İndi sınayın"}
          color={"text-slate-50"}
          className={`hover:bg-slate-100 hover:text-slate-100 rounded-xl ${
            email.trim() === "" && "cursor-not-allowed"
          }`}
          onClick={() => {
            if (isValidEmail(email)) {
              isEmailValid(true);
            } else {
              setIsEmailValid(false);
            }
          }}
          to={isValidEmail(email) ? "/trial" : ""}
        ></Button>
        <p className={`text-red-700 ${isEmailValid ? "hidden" : "block"}`}>
          Zəhmət olmasa, düzgün e-poçt adresi qeyd edin.
        </p>
      </form>
    </div>
  );
};

export default Header;
