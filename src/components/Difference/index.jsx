import { Link } from "react-router-dom";
const Difference = () => {
  return (
    <div className="container xl:grid xl:grid-cols-2 gap-8 p-2 w-[80%] mx-auto md:block md:my-6 ">
      <div className="my-28 ">
        <p className="text-lightBlue font-bold text-lg">
          Niyə bizimlə birlikdə çalışmalısınız?
        </p>
        <h2 className="text-primary text-4xl w-[70%] font-semibold my-8">
          Biznesinizi perspektiv planlaşdırma səviyyəsinə yüksəltmək üçün
        </h2>
        <p className="w-[70%] text-slate-500">
          Uzun illəri aşan təcrübəmiz sayəsində sizə bizimlə həmkarlıq etməyiniz
          sizin gələcək inkişaflara müsbət təsir göstərəcək.
        </p>
      </div>
      <div className="flex flex-col gap-8 justify-center">
        <div>
          <Link
            to={"/pricing"}
            className="flex gap-3 items-center hover:scale-105 transition-all duration-500"
          >
            <img src="./standart.svg" alt="" />
            <p>
              <span className="font-bold text-xl"> Sabit paket</span>- başlanğıc
              planını özündə birləşdirir.
            </p>
          </Link>
        </div>
        <div>
          <Link
            to={"/pricing"}
            className="flex gap-3 items-center hover:scale-105 transition-all duration-500"
          >
            <img src="./standart.svg" alt="" />
            <p>
              {" "}
              <span className="font-bold text-xl">Plantinum paket </span>- ən
              yüksək nəticə üçün istifadəyə uyğundur.
            </p>
          </Link>
        </div>
        <div>
          <Link
            to={"/pricing"}
            className="flex gap-3 items-center hover:scale-105 transition-all duration-500"
          >
            <img src="./standart.svg" alt="" />
            <p>
              <span className="font-bold text-xl">Standart paket</span>- ən çox
              seçilən paket olunan paketdir.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Difference;
