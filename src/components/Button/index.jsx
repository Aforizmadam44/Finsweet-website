const Button = ({ title }) => {
  return (
    <button className="bg-primary border-none rounded-md p-4 h-12 text-slate-100 text-center">
      {title}
    </button>
  );
};

export default Button;
