import { MdDashboard } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import { IoLibrary } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { GrSchedules } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";

const DashboardLinks = () => {
  return (
    <>
      <div className="flex justify-evenly mt-8">
        <div className="links flex flex-col gap-10">
          <div className="flex items-center w-32  gap-2 rounded-md hover:bg-primary hover:text-slate-50">
            <MdDashboard />
            <NavLink to="/">Panel</NavLink>
          </div>

          <div className="flex items-center w-32  gap-2 rounded-md hover:bg-primary hover:text-slate-50">
            <FiActivity />
            <NavLink to="/">Fəaliyyət</NavLink>
          </div>

          <div className="flex items-center w-32  gap-2 rounded-md hover:bg-primary hover:text-slate-50">
            <IoLibrary />
            <NavLink to="/">Kitabxana</NavLink>
          </div>

          <div className="flex items-center w-32  gap-2 rounded-md hover:bg-primary hover:text-slate-50">
            <MdOutlineSecurity />
            <NavLink to="/">Təhlükəsizlik</NavLink>
          </div>

          <div className="flex items-center w-32  gap-2 rounded-md hover:bg-primary hover:text-slate-50">
            <GrSchedules />
            <NavLink to="/">Cədvəllər</NavLink>
          </div>

          <div className="flex items-center w-32  gap-2 rounded-md hover:bg-primary hover:text-slate-50">
            <MdPayment />
            <NavLink to="/">Ödənişlər</NavLink>
          </div>
          <div className="flex items-center w-32  gap-2 rounded-md hover:bg-primary hover:text-slate-50">
            <IoIosSettings />
            <NavLink to="/">Tənzimləmələr</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLinks;
