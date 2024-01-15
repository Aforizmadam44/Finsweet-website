import { FaCar } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { SiMoneygram } from "react-icons/si";

const DashboardProjects = () => {
  return (
    <div className="border-l-2 hidden xl:block">
      {" "}
      <div className="flex flex-col gap-1 justify-center  p-6  ">
        <p className="text-lg text-center  mx-auto rounded-md p-4 font-bold ">
          Əməliyyatlar
        </p>

        <div className="flex-1  flex flex-col  items-center gap-4 cursor-pointer rounded-md p-4 hover:bg-primary hover:text-white ">
          <FaCar />

          <p className="font-bold">Nəqliyyat</p>
          <p className="text-slate-400">22 Sentyabr</p>
        </div>

        <div className="flex-1 flex flex-col items-center gap-4 cursor-pointer rounded-md p-4  hover:bg-primary hover:text-white ">
          <IoFastFoodOutline />

          <p className="font-bold">Ərzaq</p>
          <p className="text-slate-400">18 Dekabr</p>
        </div>

        <div className="flex-1 flex flex-col items-center gap-4 cursor-pointer rounded-md p-4  hover:bg-primary hover:text-white">
          <GiClothes />

          <p className="font-bold">Geyim</p>
          <p className="text-slate-400">2 Iyun</p>
        </div>
        <div className="flex-1 flex flex-col items-center gap-4 cursor-pointer rounded-md p-4  hover:bg-primary hover:text-white ">
          <SiMoneygram />

          <p className="font-bold">Vergilər</p>
          <p className="text-slate-400">26 Fevral</p>
        </div>
        <div className="flex-1 flex flex-col items-center gap-4 cursor-pointer rounded-md p-4  hover:bg-primary hover:text-white ">
          <HiOutlineReceiptTax />

          <p className="font-bold">Digər</p>
          <p className="text-slate-400">12 Mart</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardProjects;
