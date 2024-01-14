const BigCard = () => {
  return (
    <div className="bigCard w-full sm:w-[80%] xl:p-12 p-16 mt-8 sm:mt-0 flex flex-col items-center justify-center mx-auto bg-slate-50 rounded-lg text-center">
      <img src="./Chart.svg" alt="" />
      <div className="flex flex-wrap justify-center items-center gap-4 my-10">
        <div className="flex items-center justify-center gap-4">
          <span>
            <p className="text-blue text-xl">|</p>
          </span>
          <p>
            <span className="font-bold">Əmtəə</span>- 31%
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <span>
            <p className="text-iden1 text-xl">|</p>
          </span>
          <p>
            <span className="font-bold">Dəyər</span>- 29%
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <span>
            <p className="text-iden3">|</p>
          </span>
          <p>
            <span className="font-bold">Qazanc</span>- 40%
          </p>
        </div>
        <div className=" items-center mt-2 hidden md:flex">
          <p>Finsweet müştəri dəstəyindən ən yaxşı şəkildə yararlanın.</p>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
