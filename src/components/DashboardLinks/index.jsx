import { MdDashboard } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import { IoLibrary } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { GrSchedules } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";

const DashboardLinks = () => {
  return (
    <>
      <div className="flex border-r-2 pr-6 sm:block ">
        <div className="links flex flex-col gap-8 ">
          <div className="flex items-center  gap-2 rounded-md n">
            <Link
              to={"/"}
              className={`flex items-center mt-6
          }`}
            >
              <img src="../Logo.png" className="h-8" alt="Logo" />
            </Link>
          </div>
          <div className="flex flex-col items-center p-2   gap-2 rounded-md hover:bg-primary hover:text-slate-50">
            <MdDashboard className="text-xl" />
            <NavLink to="/">Panel</NavLink>
          </div>

          <div className="flex flex-col items-center p-2 gap-2 rounded-md hover:bg-primary hover:text-slate-50">
            <FiActivity className="text-xl" />
            <NavLink to="/">Fəaliyyət</NavLink>
          </div>

          <div className="flex flex-col items-center p-2 gap-2 rounded-md hover:bg-primary hover:text-slate-50">
            <IoLibrary className="text-xl" />
            <NavLink to="/">Kitabxana</NavLink>
          </div>

          <div className="flex flex-col items-center p-2 gap-2 rounded-md hover:bg-primary hover:text-slate-50">
            <MdOutlineSecurity className="text-xl" />
            <NavLink to="/">Təhlükəsizlik</NavLink>
          </div>

          <div className="flex flex-col items-center p-2  gap-2 rounded-md hover:bg-primary hover:text-slate-50">
            <GrSchedules className="text-xl" />
            <NavLink to="/">Cədvəllər</NavLink>
          </div>

          <div className="flex flex-col items-center p-2 gap-2 rounded-md hover:bg-primary hover:text-slate-50">
            <MdPayment className="text-xl" />
            <NavLink to="/">Ödənişlər</NavLink>
          </div>
          <div className="flex flex-col items-center p-2 gap-2 rounded-md hover:bg-primary hover:text-slate-50">
            <IoIosSettings className="text-xl" />
            <NavLink to="/">Tənzimləmələr</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLinks;
