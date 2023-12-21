import { NavLink } from "react-router-dom";

const Button = ({ title, to }) => {
  return (
    <NavLink to={to}>
      <button className="bg-primary rounded-2xl p-4 h-16 text-center text-slate-100 hover:bg-slate-50 hover:text-primary hover:border-primary border-2">
        {title}
      </button>
    </NavLink>
  );
};

export default Button;
