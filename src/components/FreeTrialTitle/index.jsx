import React from "react";

const FreeTrialTitle = () => {
  return (
    <div className="flex flex-col items-center my-20">
      <h1 className="text-4xl font-bold my-6">
        Ödənişsiz sınaq üçün əlaqə saxlayın:{" "}
      </h1>
      <div className="flex items-center gap-4 my-6 hover:scale-110 transition-all duration-500">
        <a href="tel:+994505594199">
          <img src="./dropUs1.png" alt="" />
        </a>
        <div>
          <p className="font-bold text-lg">+994505594199(Az)</p>
          <p className="text-slate-400">E-poçt dəstəyi</p>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex items-center gap-4 my-6 hover:scale-110 transition-all duration-500 ">
          <a href="mailto:finsweet@gmail.com">
            <img src="./dropUs2.png" alt="" />
          </a>
          <div>
            <p className="font-bold text-lg">finsweet@gmail.com</p>
            <p className="text-slate-400">E-poçt dəstəyi</p>
          </div>
        </div>
        <div className="flex items-center gap-4 my-6 hover:scale-110 transition-all duration-500">
          <a href="mailto:finsweet@gmail.com">
            <img src="./dropUs3.png" alt="" />
          </a>
          <div>
            <p className="font-bold text-lg">sales@finsweet.com</p>
            <p className="text-slate-400">Satış sorğusu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrialTitle;
