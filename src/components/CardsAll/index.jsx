import { BsGraphUpArrow } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { TfiPieChart } from "react-icons/tfi";
import { SlChart } from "react-icons/sl";
import BigCard from "../BigCard";

const CardsAll = () => {
  return (
    <div>
      <div className="clientsCard md:flex hidden  justify-center   hover:scale-105 transition-all cursor-pointer duration-500 mx-auto text-center p-2 rounded-lg my-20 w-[40%] h-[10%] bg-slate-50 mb-[5%]">
        <div className="flex gap-3 items-center ">
          <FaUserFriends className="xl:text-2xl sm:text-lg text-softBlue" />
          <div>
            <p className="text-slate-400">Yeni müştərilər</p>
            <p>324+</p>
          </div>
          <BsGraphUpArrow className="xl:text-2xl sm:text-lg text-softBlue" />
        </div>
      </div>
      <div className="allCard flex items-center  relative ">
        <div className="impressionCard md:flex hidden absolute sm:left-[-10%] left-0  mr-2 p-4 hover:scale-105 transition-all duration-500 cursor-pointer rounded-lg gap-3 w-[25%] h-[20%] shadow-lg bg-slate-50 text-center">
          <div>
            <p className="text-slate-400">Tərəqqi</p>
            <p className="text-lg font-bold">32K</p>
          </div>
          <div className="flex items-center justify-center mt-4 gap-2">
            <TfiPieChart className="text-softBlue text-4xl" />
          </div>
        </div>
        <BigCard />
        <div className="relative">
          <div className="earningsCard hidden absolute right-1 bottom-2  hover:scale-105 transition-all duration-500 cursor-pointer  shadow-md  md:flex justify-center items-center gap-4 p-16 rounded-lg w-[40%] h-[20%] bg-slate-50">
            <SlChart />
            <div>
              <p className="text-slate-400">Qazanclar</p>
              <p className="text-lg font-bold">$7782.40</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsAll;
