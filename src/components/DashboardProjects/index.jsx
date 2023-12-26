const DashboardProjects = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col gap-8 justify-center mt-8  ">
        <p className="text-lg text-center w-[70%] mx-auto bg-primary text-slate-50 rounded-md font-bold ">
          Sizin əməliyyatlar
        </p>

        <div className="flex items-center gap-4 cursor-pointer rounded-md p-2 hover:bg-primary hover:text-slate-50">
          <img src="./tract.png" alt="" className="w-11" />
          <div>
            <p className="font-bold">Ictimai nəqliyyat</p>
            <p className="text-slate-400">22 Sentyabr</p>
          </div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer rounded-md p-2 hover:bg-primary hover:text-slate-50">
          <img src="./tract.png" alt="" className="w-11" />
          <div>
            <p className="font-bold">Ərzaq mağazası</p>
            <p className="text-slate-400">18 Dekabr</p>
          </div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer rounded-md p-2 hover:bg-primary hover:text-slate-50">
          <img src="./tract.png" alt="" className="w-11" />
          <div>
            <p className="font-bold">Geyim ləvazimatları</p>
            <p className="text-slate-400">2 Iyun</p>
          </div>
        </div>
        <div className="flex items-center gap-4 cursor-pointer rounded-md p-2 hover:bg-primary hover:text-slate-50">
          <img src="./tract.png" alt="" className="w-11" />
          <div>
            <p className="font-bold">Avtomobil hissələri</p>
            <p className="text-slate-400">12 Mart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProjects;
