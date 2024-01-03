import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";

const DashboardNavbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <div className="border-b-2 w-full">
        <div className="hidden lg:flex justify-between items-center">
          <div>
            <p>Salam, istifadəçi</p>
            <p className="text-lg font-bold">Panelə xoş gəlmisiniz.</p>
          </div>
          <div>
            <div className="flex gap-4 items-center text-lg cursor-pointer">
              <NavLink className="flex items-center gap-4">
                <FaUser className="text-xl" />
                <p className="font-bold">Daxil olun</p>
              </NavLink>
              <IoIosSettings className="text-xl" />
              <IoMdNotifications className="text-xl" />
            </div>
          </div>
        </div>

        <div className="lg:hidden flex space-x-4 relative">
          <button className="text-primary focus:outline-none" onClick={toggle}>
            &#9776;
          </button>
          {open && (
            <div className="lg:hidden absolute top-6 left-[-3%] flex flex-col gap-6 w-full bg-white text-primary pt-6 text-lg">
              <div className="flex flex-col gap-4 cursor-pointer">
                <NavLink className="flex items-center gap-4 ">
                  <FaUser className="text-xl" />
                  <p className="font-bold">Daxil olun</p>
                </NavLink>
                <NavLink className="flex items-center gap-4">
                  <IoIosSettings className="text-xl" />
                  <p className="font-bold">Tənzimləmələr</p>
                </NavLink>
                <NavLink className="flex items-center gap-4">
                  <IoMdNotifications className="text-xl" />
                  <p className="font-bold">Bildirişlər</p>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
