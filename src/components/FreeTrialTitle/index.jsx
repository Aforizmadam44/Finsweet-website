import { Link } from "react-router-dom";

const FreeTrialTitle = () => {
  return (
    <div className="mx-auto my-20 flex items-center flex-col">
      <div className="w-[50%]">
        <h1 className="text-3xl font-bold my-6 text-center">
          Xahiş olunur ki, sifariş vermək üçün daxil olun və yaxud qeydiyyatdan
          keçin.
        </h1>
        <p className="text-center text-slate-400">
          Sifarişinizi tamamlamaq və rəsmiləşdirmək üçün bir sıra məlumatlara
          ehtiyacımız var. Daxil etdiyiniz məlumatların müəllif hüquqları ilə
          qorunduğu ilə bağlı tam əmin ola bilərsiniz.
        </p>
      </div>

      <div className="flex items-center gap-2 my-10">
        <Link
          to="/SignUp"
          title="Qeydiyyatdan keçin."
          className="text-softBlue"
        >
          Qeydiyyatdan keçin.
        </Link>
        <Link
          to="/SignIn"
          title="Hesabınız var? Giriş edin."
          className="text-red-600"
        >
          Hesabınız var? Giriş edin.
        </Link>
      </div>
      <div className="my-20 text-center bg-rose p-8 rounded-xl shadow-xl">
        <h2 className="my-6 font-semibold text-2xl">Bizimlə əlaqə saxlayın</h2>
        <div className="flex gap-8  cursor-pointer">
          <div className="flex flex-col items-center gap-4 hover:scale-110 transition-all duration-500">
            <a href="tel:+994505594199">
              <img src="./dropUs1.png" alt="" />
            </a>
            <div className="text-center">
              <p className="font-bold text-lg">+994505594199(Az)</p>
              <p className="text-slate-400">E-poçt dəstəyi</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 hover:scale-110 transition-all duration-500">
            <a href="mailto:finsweet@gmail.com">
              <img src="./dropUs2.png" alt="" />
            </a>
            <div className="text-center">
              <p className="font-bold text-lg">finsweet@gmail.com</p>
              <p className="text-slate-400">E-poçt dəstəyi</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 hover:scale-110 transition-all duration-500">
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
  );
};

export default FreeTrialTitle;
