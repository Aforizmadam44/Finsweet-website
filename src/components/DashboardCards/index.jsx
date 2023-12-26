const DashboardCards = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center w-full my-6">
        <div className="p-8 border-slate-100 h-[25%] sm:w-[45%] lg:w-[30%] xl:w-[100%] rounded-md shadow-md flex items-center justify-around gap-4 hover:bg-primary hover:text-slate-50 cursor-pointer">
          <div className="flex flex-col">
            <p>Xərcləmələr</p>
            <p className="text-lg font-bold">$763K</p>
          </div>
          <img src="./dash1.svg" alt="" className="w-20" />
        </div>

        <div className="p-8 border-slate-100 h-[25%] sm:w-[45%] lg:w-[30%] xl:w-[100%] rounded-md shadow-md flex items-center justify-around gap-4 hover:bg-primary hover:text-slate-50 cursor-pointer">
          <div className="flex flex-col">
            <p>Itkilər</p>
            <p className="text-lg font-bold">$10K</p>
          </div>
          <img src="./dash2.svg" alt="" className="w-20" />
        </div>

        <div className="p-8 border-slate-100 h-[25%] sm:w-[45%] lg:w-[30%] xl:w-[100%] rounded-md shadow-md flex items-center justify-around gap-4 hover:bg-primary hover:text-slate-50 cursor-pointer">
          <div className="flex flex-col">
            <p>Məhsuldarlıq</p>
            <p className="text-lg font-bold">$753K</p>
          </div>
          <img src="./Arrow.svg" alt="" className="w-20" />
        </div>

        <div className="p-8 border-slate-100 h-[25%] sm:w-[45%] lg:w-[30%] xl:w-[100%] rounded-md shadow-md flex items-center justify-around gap-4 hover:bg-primary hover:text-slate-50 cursor-pointer">
          <div className="flex flex-col">
            <p>İstifadəçilər</p>
            <p className="text-lg font-bold">324+</p>
          </div>
          <img src="./dash1.svg" alt="" className="w-20" />
        </div>
      </div>
      <div>
        <img src="./overall.png" alt="" className="w-full mx-auto my-auto" />
      </div>
    </div>
  );
};

export default DashboardCards;
