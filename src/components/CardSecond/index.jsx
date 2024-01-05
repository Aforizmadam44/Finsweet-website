import { FaArrowTrendUp } from "react-icons/fa6";
import { FaMaximize } from "react-icons/fa6";
import { FaMinimize } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

const CardsSecond = () => {
  return (
    <div className="flex flex-col items-center justify-center relative ">
      <div>
        <img src="./cartSecond.png" alt="" />
      </div>
      <p>İl ərzində dəyişmələri müşahidə edin:</p>
      <div className="border-t-2 my-3 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 w-full items-center justify-center gap-4">
        <div className="hover:skew-x-6 transition-all cursor-pointer duration-500 text-center p-4 rounded-lg bg-slate-50 shadow-md">
          <p className="text-slate-400">
            <span className="text-primary font-semibold">24.2%</span>
            <br /> Ümumi illik artış
          </p>
          <div className="flex items-center justify-center mt-4 gap-2">
            <FaArrowTrendUp className="text-lightBlue text-3xl" />
          </div>
        </div>

        <div className="flex-1 shadow-xl p-4 hover:-skew-x-6 transition-all duration-500 cursor-pointer rounded-lg gap-3 bg-slate-50 text-center">
          <p className="text-slate-400">
            <span className="text-primary font-semibold">63.7%</span>
            <br /> Maks. artış
          </p>
          <div className="flex items-center justify-center mt-4 gap-2">
            <FaMaximize className="text-orange-400 text-3xl" />
          </div>
        </div>

        <div className="flex-1 shadow-xl p-4 hover:skew-x-6 transition-all duration-500 cursor-pointer rounded-lg gap-3 bg-slate-50 text-center">
          <p className="text-slate-400">
            <span className="text-primary font-semibold">21.1%</span>
            <br /> Min. <br /> eniş
          </p>
          <div className="flex items-center justify-center mt-4 gap-2">
            <FaMinimize className="text-orange-400 text-3xl" />
          </div>
        </div>

        <div className="flex-1 earningsCard hover:skew-x-6 transition-all duration-500 cursor-pointer shadow-md gap-4 p-4 rounded-lg bg-slate-50 text-center">
          <div>
            <p className="text-slate-400 ">
              <span className="text-primary font-semibold">9.2%</span>
              <br /> Ümumi illik eniş
            </p>
            <div className="flex items-center justify-center mt-4 gap-2">
              <FaArrowTrendDown className="text-lightBlue text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSecond;
