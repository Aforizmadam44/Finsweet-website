import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyRoutes } from "../MyRoutes";
import styles from "./style.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between p-6 shadow-xl">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to={"/"}
          className={`flex items-center space-x-3 
          }`}
        >
          <img src="../Logo.png" className="h-8" alt="Logo" />
        </Link>

        <div className="hidden lg:flex space-x-4">
          {MyRoutes.map(({ id, path, title }) => {
            return (
              title && (
                <li key={id}>
                  <NavLink
                    className={({ isActive }) => `
                      ${isActive ? styles.active : styles.navlink}
                    `}
                    to={path}
                  >
                    {title}
                  </NavLink>
                </li>
              )
            );
          })}
        </div>

        <div className="lg:hidden flex space-x-4">
          <button
            className={`text-primary focus:outline-none `}
            onClick={toggleMenu}
          >
            &#9776;
          </button>
        </div>

        {isOpen && (
          <div
            className={`lg:hidden absolute top-16 left-2 right-0 bg-white px-12 space-y-2 text-lg`}
          >
            {MyRoutes.map(({ id, path, title }) => {
              return (
                title && (
                  <li key={id}>
                    <NavLink
                      className={({ isActive }) => `
                        ${isActive ? styles.active : styles.navlink}
                      `}
                      to={path}
                    >
                      {title}
                    </NavLink>
                  </li>
                )
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
