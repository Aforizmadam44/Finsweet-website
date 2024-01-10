import { Link, useNavigate } from "react-router-dom";
import { TbPackages } from "react-icons/tb";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdConnectWithoutContact } from "react-icons/md";

const Difference = () => {
  const history = useNavigate();

  const handleLinkClick = () => {
    window.scrollTo(0, 0);

    history.push("/pricing");
  };
  return (
    <div className="container xl:grid xl:grid-cols-2 gap-8 p-2 w-[80%] mx-auto justify-center items-center md:block md:my-6">
      <div className="my-28">
        <p className="text-lightBlue font-bold text-lg ">
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
      <div className="flex flex-col gap-8 justify-center items-center">
        <div>
          <Link
            to={"/pricing"}
            className="flex gap-3 items-center  hover:rounded-xl hover:scale-105 hover:bg-primary py-6 hover:text-white  transition-all duration-500"
            onClick={handleLinkClick}
          >
            <TbPackages className="text-5xl" />

            <p>
              <span className="font-semibold text-xl"> Əl çatan planlar</span> -
              peşəkar xidmətimizdən istifadə edərək, sizə uyğun paketlərlə tanış
              ola bilərsiniz.
            </p>
          </Link>
        </div>
        <div>
          <Link
            to={"/aboutUs"}
            className="flex gap-3 items-center hover:rounded-xl hover:scale-105 hover:bg-primary py-6 hover:text-white  transition-all duration-500"
          >
            <HiMiniUserGroup className="text-5xl" />

            <p>
              {" "}
              <span className="font-semibold text-xl">
                Professional əməkdaşlarımız{" "}
              </span>
              - uzun illəri aşan təcrübələriylə sizlərə optimal həll yolları
              təqdim edəcək komandaya sahibik.
            </p>
          </Link>
        </div>
        <div>
          <Link
            to={"/contact"}
            className="flex gap-3 items-center hover:rounded-xl hover:scale-105 hover:bg-primary py-6 hover:text-white  transition-all duration-500"
            onClick={handleLinkClick}
          >
            <MdConnectWithoutContact className="text-5xl" />
            <p>
              <span className="font-semibold text-xl">7/24 əlaqə imkanı</span>-
              istənilən zaman, müxtəlif vasitələrlə bizə müraciət edə
              bilərsiniz.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Difference;
