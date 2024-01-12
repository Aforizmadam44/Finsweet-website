import {
  FaArrowTrendUp,
  FaMaximize,
  FaMinimize,
  FaArrowTrendDown,
} from "react-icons/fa6";
import Chart2 from "../Chart2";

const CardsSecond = () => {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <div>
        <Chart2 />
      </div>
      <p>İl ərzində dəyişmələri müşahidə edin:</p>
      <div className="border-t-2 my-3 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-4">
        <div className="flex gap-2 my-3 lg:my-0 items-center hover:scale-105 hover:shadow-xl rounded-xl transition-all duration-500 cursor-pointer p-4">
          <div>
            <FaArrowTrendUp className="text-pvColor4 text-lg" />
          </div>
          <div>
            <p className="text-slate-400">
              <span className="text-primary font-semibold">23%</span>
              <br /> ÜIA
            </p>
          </div>
        </div>

        <div className="flex  my-3 lg:my-0 p-4 hover:scale-105 hover:shadow-xl transition-all duration-500 cursor-pointer rounded-xl gap-2  text-center">
          <div className="flex items-center justify-center ">
            <FaMaximize className="text-pvColor3 text-lg" />
          </div>
          <p className="text-slate-400">
            <span className="text-primary font-semibold text-sm">37%</span>
            <br /> Max.n
          </p>
        </div>

        <div className="flex  my-3 lg:my-0 p-4 hover:scale-105 hover:shadow-xl transition-all duration-500 cursor-pointer rounded-xl gap-2  text-center">
          <p className="text-slate-400">
            <span className="text-primary font-semibold">15%</span>
            <br /> Min.n
          </p>
          <div className="flex items-center justify-center ">
            <FaMinimize className="text-pvColor4 text-lg" />
          </div>
        </div>

        <div className="flex items-center my-3 lg:my-0 earningsCard hover:scale-105 hover:shadow-xl transition-all duration-500 cursor-pointer  gap-2 p-4 rounded-xl  text-center">
          <div>
            <p className="text-slate-400 ">
              <span className="text-primary font-semibold">2%</span>
              <br /> ÜIB
            </p>
          </div>
          <div>
            <FaArrowTrendDown className="text-pvColor3 text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSecond;
