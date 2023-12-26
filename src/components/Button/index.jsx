import { NavLink } from "react-router-dom";

const Button = ({ title, to, bg, color, onClick }) => {
  return (
    <NavLink to={to}>
      <button
        className={`bg-primary ${bg} ${color} rounded-2xl p-4 h-16 text-center  hover:bg-slate-50 hover:text-primary hover:border-primary border-2`}
        onClick={onClick}
      >
        {title}
      </button>
    </NavLink>
  );
};

// const Button = ({ title, bg, color, onClick }) => {
//   return (
//     <button className={`btn ${bg} ${color}`} onClick={onClick}>
//       {title}
//     </button>
//   );
// };

// export default Button;

export default Button;
