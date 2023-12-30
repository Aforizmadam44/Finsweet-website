import { BsGraphUpArrow } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { TfiPieChart } from "react-icons/tfi";
import { SlChart } from "react-icons/sl";
import BigCard from "../BigCard";

const CardsAll = () => {
  return (
    <div>
      <div className="clientsCard flex justify-center   hover:scale-105 transition-all cursor-pointer duration-500 mx-auto text-center p-2 rounded-lg my-20 w-[40%] h-[10%] bg-slate-50 mb-[5%]">
        <div className="flex gap-3 items-center ">
          <FaUserFriends className="text-2xl text-softBlue" />
          <div>
            <p className="text-slate-400">Yeni müştərilər</p>
            <p>324+</p>
          </div>
          <BsGraphUpArrow className="text-2xl text-softBlue" />
        </div>
      </div>
      <div className="allCard flex items-center">
        <div className="impressionCard mr-2 p-4 hover:scale-105 transition-all duration-500 cursor-pointer rounded-lg gap-3 w-[20%] h-[10%] bg-slate-50 text-center">
          <p className="text-slate-400">Tərəqqi</p>
          <div className="flex items-center justify-center mt-4 gap-2">
            <TfiPieChart className="text-softBlue text-4xl" />
            <p className="text-lg font-bold">32K</p>
          </div>
        </div>
        <BigCard />

        <div className="earningsCard hover:scale-105 transition-all duration-500 cursor-pointer ml-[-5%] shadow-md p-2 flex justify-center items-center gap-4 px-6 rounded-lg w-[20%] h-[10%] bg-slate-50">
          <SlChart />
          <div>
            <p className="text-slate-400">Qazanclar</p>
            <p className="text-lg font-bold">$7782.40</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsAll;
