import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
const DashboardNavbar = () => {
  return (
    <div>
      <div className="flex justify-between">
        <NavLink to={"/"}>
          <img src="./Logo.png" alt="" />
        </NavLink>
        <div className="flex flex-col">
          <p>
            Salam <span className="font-bold">Ismail</span>
          </p>
          <p className="text-xl font-bold">Panelə xoş gəlmisiniz</p>
        </div>
        <div className="seacrInput relative flex justify-end items-center ">
          <input
            type="text"
            className="rounded-lg border-slate-200"
            placeholder="Buraya yazın"
          />{" "}
          <CiSearch className="absolute text-xl" />
        </div>
        <div className="flex gap-4 items-center text-lg cursor-pointer ">
          <FaUser />
          <p className="font-bold">Daxil olun</p>
          <IoIosSettings />
          <IoMdNotifications />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
