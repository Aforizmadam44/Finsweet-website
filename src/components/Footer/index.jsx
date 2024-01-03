import { NavLink } from "react-router-dom";
import Button from "../Button";
import { useState } from "react";

const FooterLink = ({ to, children }) => (
  <NavLink className="hover:text-white hover:scale-105" to={to}>
    {children}
  </NavLink>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setIsValid(true);
  };

  const ValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <div className="p-6 md:p-10 lg:p-14 bg-primary">
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-around mx-auto">
        <div className="flex flex-col gap-3 text-zinc-500 mb-6 sm:mb-0 md:mb-0 lg:mb-0 sm:w-1/4 md:w-1/4 lg:w-1/4">
          <p className="text-slate-50 font-bold text-lg">Şirkət</p>
          <FooterLink to="/aboutUs">Haqqımızda</FooterLink>
          <FooterLink to="/">Niyə bizi seçməlisiniz?</FooterLink>
          <FooterLink to="/pricing">Qiymətləndirmə</FooterLink>
          <FooterLink to="/test">Testlər</FooterLink>
        </div>

        <div className="flex flex-col gap-3 text-zinc-500 mb-6 sm:mb-0 md:mb-0 lg:mb-0 sm:w-1/4 md:w-1/4 lg:w-1/4">
          <p className="text-slate-50 font-bold text-lg">Resurslar</p>
          <FooterLink to="/terms">Qaydalar və Şərtlər</FooterLink>
          <FooterLink to="/blog">Bloq</FooterLink>
          <FooterLink to="/aboutUs">Əlaqə</FooterLink>
        </div>

        <div className="flex flex-col gap-3 text-zinc-500 mb-6 sm:mb-0 md:mb-0 lg:mb-0 sm:w-1/4 md:w-1/4 lg:w-1/4">
          <p className="text-slate-50 font-bold text-lg">Məhsullar</p>
          <FooterLink to="/DiscoverDetails/2">Lahiyə idarəolunması</FooterLink>
          <FooterLink to="/DiscoverDetails/1">Satış izləmə</FooterLink>
          <FooterLink to="/DiscoverDetails/3">Fəaliyyət hesabatı</FooterLink>
          <FooterLink to="/lead">İdarəçilik</FooterLink>
          <FooterLink to="/remote">Uzaqdan Əməkdaşlıq</FooterLink>
        </div>

        <div className="flex flex-col gap-3 text-zinc-500 mb-6 sm:mb-0 md:mb-0 lg:mb-0 sm:w-1/4 md:w-1/4 lg:w-1/4">
          <FooterLink to="/">
            <img src="../LogoSvg.svg" alt="" />
          </FooterLink>
          <FooterLink to="/freeTrial">Bülletenimizə abunə olun</FooterLink>
          <div className="inputAndBtn">
            <input
              type="mail"
              placeholder="Email adresinizi girin"
              className="bg-slate-800 rounded-xl my-6 w-full h-16 p-2"
              value={email}
              onChange={handleInputChange}
            />
            <Button
              title={"Abunə olun"}
              bg={"bg-slate-50"}
              color={"text-primary"}
              to={ValidEmail(email) ? "freeTrial" : "/"}
              className={`hover:bg-slate-100 hover:text-slate-100 rounded-xl ${
                email.trim() === "" && "cursor-not-allowed"
              }`}
              onClick={() => {
                if (ValidEmail(email)) {
                  isValid(true);
                } else {
                  setIsValid(false);
                }
              }}
            />
            <p className={`text-red-700 ${isValid ? "hidden" : "block"}`}>
              Zəhmət olmasa, düzgün e-poçt adresi qeyd edin.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center  sm:flex-row md:flex-row lg:flex-row justify-center gap-4 cursor-pointer mt-6 md:mt-10 lg:mt-10 mb-6 lg:mb-10 text-zinc-500 ">
        <p>© Copyright Finsweet 2023</p>
        <img
          src="../Instagram.svg"
          alt=""
          className="w-6 h-6 hover:scale-110"
        />
        <img src="../Linkedin.svg" alt="" className="w-6 h-6 hover:scale-105" />
        <img src="../Facebook.svg" alt="" className="w-6 h-6 hover:scale-105" />
        <img src="../Twitter.svg" alt="" className="w-6 h-6 hover:scale-105" />
      </div>
    </div>
  );
};

export default Footer;
