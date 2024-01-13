import { GiAstronautHelmet } from "react-icons/gi";
import { GiStumpRegrowth } from "react-icons/gi";
import { GiBigWave } from "react-icons/gi";

import { GiMoneyStack } from "react-icons/gi";
import Chart3 from "../Chart3";

const CardThird = () => {
  return (
    <div className="flex flex-col items-center">
      <Chart3 />
      <div className=" items-center my-2 ">
        <p>Finsweet stastikaları ilə tanış olun:</p>
      </div>
      <div className="md:border-t-2 border-t-0 my-3 sm:my-0 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-4">
        <div className="flex gap-3 items-center  rounded-xl hover:scale-105 transition-all duration-500 cursor-pointer p-4 shadow-xl ">
          <div>
            <GiAstronautHelmet className="rounded-full  border-2 text-pvColor2 text-2xl  " />
          </div>
          <div>
            <p className="text-slate-400">Müştərilər</p>
            <p className=" font-semibold">3020+</p>
          </div>
        </div>

        <div className="flex justify-center items-center  rounded-xl  hover:scale-105 transition-all duration-500 cursor-pointer gap-3 p-4 shadow-xl">
          <div>
            <GiStumpRegrowth className="rounded-full  border-2 text-pvColor2 text-2xl " />
          </div>
          <div>
            <p className="text-slate-400">Tərəqqi</p>
            <div className="flex items-center justify-center  gap-2">
              <p className="font-semibold">6K</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center  rounded-xl  hover:scale-105 transition-all duration-500 cursor-pointer gap-3 p-4 shadow-xl">
          <div>
            <GiBigWave className="rounded-full  border-2 text-pvColor2 text-2xl " />
          </div>
          <div>
            <p className="text-slate-400">Dinamiklik</p>
            <div className="flex items-center justify-center  gap-2">
              <p className="font-semibold">37.1%</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 p-4  rounded-xl  hover:scale-105 transition-all duration-500 cursor-pointer shadow-xl ">
          <div>
            <GiMoneyStack className="text-pvColor2 rounded-full  border-2 text-2xl" />
          </div>
          <div>
            <p className="text-slate-400">Qazanclar</p>
            <p className="font-semibold">$7782.40</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardThird;
