import { NavLink } from "react-router-dom";

const FooterLink = ({ to, children }) => (
  <NavLink className="hover:text-white hover:scale-105" to={to}>
    {children}
  </NavLink>
);

const Footer = () => {
  return (
    <div className="container p-14 bg-primary">
      <div className="flex justify-around columns-4 mx-auto">
        <div className="flex flex-col gap-3 text-zinc-500">
          <p className="text-slate-50  font-bold text-lg">Şirkət</p>
          <FooterLink to="/aboutUs">Haqqımızda</FooterLink>
          <FooterLink to="/chooseUs">Niyə bizi seçməlisiniz?</FooterLink>
          <FooterLink to="/pricing">Qiymətləndirmə</FooterLink>
          <FooterLink to="/test">Testlər</FooterLink>
        </div>
        <div className="flex flex-col gap-3 text-zinc-500">
          <p className="text-slate-50 font-bold text-lg">Resurslar</p>
          <FooterLink to="/terms">Qaydalar və Şərtlər</FooterLink>
          <FooterLink to="/blog">Bloq</FooterLink>
          <FooterLink to="/contactUs">Əlaqə</FooterLink>
        </div>
        <div className="flex flex-col gap-3 text-zinc-500">
          <p className="text-slate-50 font-bold text-lg">Məhsullar</p>
          <FooterLink to="/managment">Lahiyə idarəolunması</FooterLink>
          <FooterLink to="/time">Vaxt izləmə</FooterLink>
          <FooterLink to="/time">Vaxt cədvəli</FooterLink>
          <FooterLink to="/lead">İdarəçilik</FooterLink>
          <FooterLink to="/remote">Uzaqdan Əməkdaşlıq</FooterLink>
        </div>
        <div className="flex flex-col gap-3 text-zinc-500">
          <FooterLink to="/">
            <img src="./LogoSvg.svg" alt="" />
          </FooterLink>
          <FooterLink to="/subscribe">Bülletenimizə abunə olun</FooterLink>
          <div className="inputAndBtn">
            <input
              type="mail"
              placeholder="Email adresinizi girin"
              className="bg-slate-800 rounded-lg my-6 w-96 h-16 p-2"
            />
            <button className="bg-slate-50 text-primary py-5 px-6 rounded-lg">
              Abunə olun
            </button>
          </div>
        </div>
      </div>
      <div className="flex  justify-center gap-4 cursor-pointer mt-16 mb-10 text-zinc-500 ">
        <p>© Copyright Finsweet 2023</p>
        <img src="./Instagram.svg" alt="" />
        <img src="./Linkedin.svg" alt="" />
        <img src="./Facebook.svg" alt="" />
        <img src="./Twitter.svg" alt="" />
      </div>
    </div>
  );
};

export default Footer;
