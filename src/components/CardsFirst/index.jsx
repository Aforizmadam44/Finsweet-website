import { SiSololearn } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { AiOutlineFall } from "react-icons/ai";
import { IoHappyOutline } from "react-icons/io5";
import Chart1 from "../Chart1";

const CardsFirst = () => {
  return (
    <div className="flex flex-col items-center justify-center relative ">
      <Chart1 />
      <p>Nəaliyyət göstəricilərini izləyin:</p>
      <div className="border-t-0 md:border-t-2 my-3 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-4">
        <div className="my-3 lg:my-0 hover:shadow-xl hover:scale-105 transition-all cursor-pointer duration-500 text-center p-4  rounded-xl">
          <p className="text-slate-400">
            <span className="text-primary font-semibold">27.7%</span>
            <br /> Məmnuniyyət
            <div className="flex items-center justify-center mt-4 gap-2">
              <IoHappyOutline className="text-pvColor border-2 rounded-full  text-2xl" />
            </div>
          </p>
        </div>

        <div className="flex-1 p-4 my-3 lg:my-0 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer  rounded-xl gap-3  text-center">
          <p className="text-slate-400">
            <span className="text-primary font-semibold">28.4%</span>
            <br /> Məhsuldarlıq
          </p>
          <div className="flex items-center justify-center mt-4 gap-2">
            <SiSololearn className="text-iden3 rounded-full border-2 text-2xl" />
          </div>
        </div>

        <div className="flex-1 p-4 my-3 lg:my-0 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer  rounded-xl gap-3 text-center">
          <p className="text-slate-400">
            <span className="text-primary font-semibold">34.7%</span>
            <br /> Qazanc
          </p>
          <div className="flex items-center justify-center mt-4 gap-2">
            <GiReceiveMoney className="text-pvColor rounded-full   border-2 text-2xl" />
          </div>
        </div>

        <div className="flex-1 earningsCard my-3 lg:my-0 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer  rounded-xl gap-4 p-4  text-center">
          <div>
            <p className="text-slate-400 ">
              <span className="text-primary font-semibold">9.2%</span>
              <br /> Itki
            </p>
            <div className="flex items-center justify-center mt-4 gap-2">
              <AiOutlineFall className="text-iden3 rounded-full border-2 text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsFirst;
