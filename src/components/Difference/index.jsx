import { Link } from "react-router-dom";
const Difference = () => {
  return (
    <div className="container grid grid-cols-2 gap-8 p-2 w-[80%] mx-auto my-20 ">
      <div>
        <p className="text-lightBlue font-bold text-lg">
          Niyə bizimlə birlikdə çalışmalısınız?
        </p>
        <h2 className="text-primary text-4xl w-[70%] font-bold my-8">
          Biznesinizi perspektiv planlaşdırma səviyyəsinə yüksəltmək üçün
        </h2>
        <p className="w-[70%]">
          Uzun illəri aşan təcrübəmiz sayəsində sizə bizimlə həmkarlıq etməyiniz
          sizin gələcək inkişaflara müsbət təsir göstərəcək.
        </p>
      </div>
      <div className="flex flex-col gap-8 justify-center">
        <div className="goToLink flex gap-3 items-center">
          <Link>
            <img src="./standart.svg" alt="" />
          </Link>
          <p>
            <span className="font-bold text-lg"> Sabit paket</span>- başlanğıc
            planını özündə birləşdirir.
          </p>
        </div>
        <div className="goToLink  flex gap-3 items-center">
          <Link>
            <img src="./standart.svg" alt="" />
          </Link>
          <p>
            {" "}
            <span className="font-bold text-lg">Plantinum paket </span>- ən
            yüksək nəticə üçün istifadəyə uyğundur.
          </p>
        </div>
        <div className="goToLink flex gap-3 items-center">
          <Link>
            <img src="./standart.svg" alt="" />
          </Link>
          <p>
            <span className="font-bold text-lg">Standart paket</span>- ən çox
            seçilən paket olunan paketdir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Difference;
