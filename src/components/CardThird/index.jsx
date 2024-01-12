import { FaUserFriends } from "react-icons/fa";
import { TfiPieChart } from "react-icons/tfi";
import { GrWorkshop } from "react-icons/gr";

import { SlChart } from "react-icons/sl";

const CardThird = () => {
  return (
    <div className="flex flex-col items-center">
      <img src="./cardFirst.png" alt="" />
      <div className=" items-center mt-2 hidden md:flex ">
        <p>Finsweet stastikaları ilə tanış olun:</p>
      </div>
      <div className="border-t-2 my-3 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-4">
        <div className="flex gap-3 items-center shadow-xl rounded-xl hover:skew-x-6 transition-all duration-500 cursor-pointer p-4 ">
          <div>
            <FaUserFriends className="text-green-500 text-2xl " />
          </div>
          <div>
            <p className="text-slate-400">Müştərilər</p>
            <p className=" font-semibold">324+</p>
          </div>
        </div>

        <div className="flex justify-center items-center shadow-xl rounded-xl hover:-skew-x-6 transition-all duration-500 cursor-pointer gap-3 p-4">
          <div>
            <TfiPieChart className="text-lightBlue text-2xl" />
          </div>
          <div>
            <p className="text-slate-400">Tərəqqi</p>
            <div className="flex items-center justify-center  gap-2">
              <p className="font-semibold">32K</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center shadow-xl rounded-xl hover:skew-x-6 transition-all duration-500 cursor-pointer gap-3 p-4">
          <div>
            <GrWorkshop className="text-orange-800 text-2xl" />
          </div>
          <div>
            <p className="text-slate-400">Dönüşüm</p>
            <div className="flex items-center justify-center  gap-2">
              <p className="font-semibold">37.1%</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 p-4 shadow-xl rounded-xl hover:-skew-x-6 transition-all duration-500 cursor-pointer ">
          <div>
            <SlChart className="text-cyan-700 text-2xl" />
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
