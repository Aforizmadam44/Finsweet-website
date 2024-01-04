import SignUp from "../SignUp";

const FreeTrialTitle = () => {
  return (
    <div className="mx-auto my-20 flex items-center flex-col ">
      <h1 className="text-4xl font-bold my-6 text-center">
        Ödənişsiz sınaq qeydiyyatdan keçin:
      </h1>
      <div className="container flex flex-col w-full items-center gap-4">
        <div>
          <SignUp />
        </div>
        <div className="flex flex-col my-6 hover:scale-110 transition-all duration-500">
          <div className="flex flex-col items-center gap-4 my-6 hover:scale-110 transition-all duration-500">
            <a href="tel:+994505594199">
              <img src="./dropUs1.png" alt="" />
            </a>
            <div className="text-center">
              <p className="font-bold text-lg">+994505594199(Az)</p>
              <p className="text-slate-400">E-poçt dəstəyi</p>
            </div>
          </div>

          <div className="flex flex-col  gap-6">
            <div className="flex flex-col items-center gap-4 my-6 hover:scale-110 transition-all duration-500">
              <a href="mailto:finsweet@gmail.com">
                <img src="./dropUs2.png" alt="" />
              </a>
              <div className="text-center">
                <p className="font-bold text-lg">finsweet@gmail.com</p>
                <p className="text-slate-400">E-poçt dəstəyi</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 my-6 hover:scale-110 transition-all duration-500">
              <a href="mailto:finsweet@gmail.com">
                <img src="./dropUs3.png" alt="" />
              </a>
              <div className="text-center">
                <p className="font-bold text-lg">sales@finsweet.com</p>
                <p className="text-slate-400">Satış sorğusu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrialTitle;
