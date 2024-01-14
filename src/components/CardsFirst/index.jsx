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
        <div className="flex items-center my-3 lg:my-0 shadow-xl hover:scale-105 transition-all cursor-pointer duration-500 text-center p-4  rounded-xl h-[80%]">
          <p className="text-slate-400 flex flex-col items-center justify-center">
            <span className="text-primary font-medium text-sm ">
              Məmnuniyyət
            </span>
            <div className="flex items-center justify-center mt-4 gap-2">
              <IoHappyOutline className="text-pvColor border-2 rounded-full  text-3xl" />
            </div>
            <br />
            <span className="font-semibold">27.7%</span>
          </p>
        </div>

        <div className=" flex items-center flex-col justify-center p-4 my-3 lg:my-0 shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer  rounded-xl   text-center h-[80%]">
          <p className="text-slate-400">
            <span className="text-primary font-medium text-sm">
              Məhsuldarlıq
            </span>
          </p>
          <div className="flex items-center justify-center mt-4 gap-2">
            <SiSololearn className="text-iden3 rounded-full border-2 text-3xl" />
          </div>
          <br />
          <span className="font-semibold text-slate-400">28.4%</span>
        </div>

        <div className=" flex  items-center justify-center  p-4 my-3 lg:my-0 shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer  rounded-xl  text-center h-[80%]">
          <p className="text-slate-400">
            <div>
              <span className="text-primary font-medium text-sm"> Qazanc</span>

              <div className="flex items-center justify-center mt-4 gap-2">
                <GiReceiveMoney className="text-pvColor rounded-full   border-2 text-3xl" />
              </div>
              <br />
              <span className=" font-semibold">34.7%</span>
            </div>
          </p>
        </div>

        <div className="flex  items-center justify-center  my-3 lg:my-0 shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer  rounded-xl gap-4 p-4   text-center h-[80%]">
          <div>
            <p className="text-slate-400 flex flex-col items-center justify-center">
              <span className="text-primary font-medium text-sm">Itki</span>
              <div className="flex items-center justify-center mt-4 gap-2">
                <AiOutlineFall className="text-iden3 rounded-full border-2 text-3xl" />
              </div>
              <br />
              <span className="font-semibold">9.2%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsFirst;
