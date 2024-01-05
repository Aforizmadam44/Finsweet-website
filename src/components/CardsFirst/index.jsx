import { TfiPieChart } from "react-icons/tfi";
import { GiReceiveMoney } from "react-icons/gi";
import { AiOutlineFall } from "react-icons/ai";
import { FaRegSmileBeam } from "react-icons/fa";

const CardsFirst = () => {
  return (
    <div className="flex flex-col items-center justify-center relative ">
      <img
        src="./cartSvg.png"
        alt=""
        className="w-[50%] h-[30%] object-contain"
      />
      <p>Nəaliyyət göstəricilərini izləyin:</p>
      <div className="border-t-2 my-3 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 w-full items-center justify-center gap-4">
        <div className="hover:skew-x-6 transition-all cursor-pointer duration-500 text-center p-4 rounded-lg bg-slate-50 shadow-md">
          <p className="text-slate-400">
            <span className="text-primary font-semibold">27.7%</span>
            <br /> Məmnuniyyət
          </p>
          <div className="flex items-center justify-center mt-4 gap-2">
            <FaRegSmileBeam className="text-green-700 text-4xl" />
          </div>
        </div>

        <div className="flex-1 shadow-xl p-4 hover:-skew-x-6 transition-all duration-500 cursor-pointer rounded-lg gap-3 bg-slate-50 text-center">
          <p className="text-slate-400">
            <span className="text-primary font-semibold">28.4%</span>
            <br /> Məhsuldarlıq
          </p>
          <div className="flex items-center justify-center mt-4 gap-2">
            <TfiPieChart className="text-orange-600 text-4xl" />
          </div>
        </div>

        <div className="flex-1 shadow-xl p-4 hover:skew-x-6  transition-all duration-500 cursor-pointer rounded-lg gap-3 bg-slate-50 text-center">
          <p className="text-slate-400">
            <span className="text-primary font-semibold">34.7%</span>
            <br /> Qazanc
          </p>
          <div className="flex items-center justify-center mt-4 gap-2">
            <GiReceiveMoney className="text-orange-300 text-4xl" />
          </div>
        </div>

        <div className="flex-1 earningsCard hover:-skew-x-6  transition-all duration-500 cursor-pointer shadow-md gap-4 p-4 rounded-lg bg-slate-50 text-center">
          <div>
            <p className="text-slate-400 ">
              <span className="text-primary font-semibold">9.2%</span>
              <br /> Itki
            </p>
            <div className="flex items-center justify-center mt-4 gap-2">
              <AiOutlineFall className="text-lightBlue text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsFirst;
