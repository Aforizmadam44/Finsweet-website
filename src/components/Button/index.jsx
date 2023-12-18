const Button = ({ title }) => {
  return (
    <button className="bg-primary rounded-md p-4 h-16 text-center text-slate-100 hover:bg-slate-50 hover:text-primary hover:border-primary border-2">
      {title}
    </button>
  );
};

export default Button;
