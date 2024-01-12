import {
  FaArrowTrendUp,
  FaMaximize,
  FaMinimize,
  FaArrowTrendDown,
} from "react-icons/fa6";

const CardsSecond = () => {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <div>
        <img src="./cartSecond.png" alt="" />
      </div>
      <p>İl ərzində dəyişmələri müşahidə edin:</p>
      <div className="border-t-2 my-3 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-4">
        <div className="flex gap-2 my-3 lg:my-0 items-center shadow-xl rounded-xl hover:skew-x-6 transition-all duration-500 cursor-pointer p-4">
          <div>
            <FaArrowTrendUp className="text-lightBlue text-lg" />
          </div>
          <div>
            <p className="text-slate-400">
              <span className="text-primary font-semibold">24%</span>
              <br /> ÜIA
            </p>
          </div>
        </div>

        <div className="flex shadow-xl my-3 lg:my-0 p-4 hover:-skew-x-6 transition-all duration-500 cursor-pointer rounded-xl gap-2 bg-slate-50 text-center">
          <div className="flex items-center justify-center ">
            <FaMaximize className="text-orange-400 text-lg" />
          </div>
          <p className="text-slate-400">
            <span className="text-primary font-semibold text-sm">63%</span>
            <br /> M.a
          </p>
        </div>

        <div className="flex shadow-xl my-3 lg:my-0 p-4 hover:skew-x-6 transition-all duration-500 cursor-pointer rounded-xl gap-2 bg-slate-50 text-center">
          <p className="text-slate-400">
            <span className="text-primary font-semibold">21%</span>
            <br /> M.e
          </p>
          <div className="flex items-center justify-center ">
            <FaMinimize className="text-orange-400 text-lg" />
          </div>
        </div>

        <div className="flex items-center my-3 lg:my-0 earningsCard hover:skew-x-6 transition-all duration-500 cursor-pointer shadow-md gap-2 p-4 rounded-xl bg-slate-50 text-center">
          <div>
            <p className="text-slate-400 ">
              <span className="text-primary font-semibold">9%</span>
              <br /> ÜIE
            </p>
          </div>
          <div>
            <FaArrowTrendDown className="text-lightBlue text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSecond;
