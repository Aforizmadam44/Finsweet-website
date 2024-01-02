import { NavLink } from "react-router-dom";

const Button = ({ title, to, bg, color, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <NavLink to={to}>
      <button
        className={`bg-primary ${bg} ${color} rounded-2xl p-4 h-16 text-center hover:bg-slate-50 hover:text-primary hover:border-primary border-2`}
        onClick={handleClick}
      >
        {title}
      </button>
    </NavLink>
  );
};

export default Button;
