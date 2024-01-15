import DashboardChart from "../DashboardChart";
import { HiMiniUserGroup } from "react-icons/hi2";

const DashboardCards = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap   gap-6 justify-center  my-6">
        <div className=" flex-1 p-8 border-slate-100 rounded-md shadow-md flex items-center justify-around gap-4 hover:bg-primary hover:text-slate-50 cursor-pointer">
          <div className="flex flex-col">
            <p>Xərcləmələr</p>
            <p className="font-bold">$763K</p>
          </div>
          <img
            src="./dash1.svg"
            alt=""
            className="md:w-[30%] xl:w-[30%] hidden md:block"
          />
        </div>

        <div className="flex-1 p-8 border-slate-100 rounded-md shadow-md flex items-center justify-around gap-4 hover:bg-primary hover:text-slate-50 cursor-pointer">
          <div className="flex flex-col">
            <p>Itkilər</p>
            <p className="font-bold">$10K</p>
          </div>
          <img
            src="./dash2.svg"
            alt=""
            className="md:w-[30%] xl:w-[30%] hidden md:block"
          />
        </div>

        <div className="flex-1 p-8 border-slate-100 rounded-md shadow-md flex items-center justify-around gap-4 hover:bg-primary hover:text-slate-50 cursor-pointer">
          <div className="flex flex-col">
            <p>Məhsuldarlıq</p>
            <p className="font-bold">$753K</p>
          </div>
          <img
            src="./Arrow.svg"
            alt=""
            className="md:w-[30%] xl:w-[30%] hidden md:block"
          />
        </div>

        <div className="flex-1 p-8 border-slate-100 rounded-md shadow-md flex items-center justify-around gap-4 hover:bg-primary hover:text-slate-50 cursor-pointer">
          <div className="flex flex-col">
            <p>İstifadəçilər</p>
            <p className="font-bold">324+</p>
          </div>
          <HiMiniUserGroup className="md:w-[30%] xl:w-[30%] text-2xl hidden md:block" />
        </div>
      </div>
      <div className=" mx-auto my-auto">
        <DashboardChart />
      </div>
    </div>
  );
};

export default DashboardCards;
