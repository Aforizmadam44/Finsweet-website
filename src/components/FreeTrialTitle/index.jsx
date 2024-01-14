import { Link } from "react-router-dom";

const FreeTrialTitle = () => {
  return (
    <>
      <div className="text-center my-20">
        <h1 className="text-5xl font-semibold w-[50%] mx-auto">
          Sifarişlərinizi tamamlaya, habelə rəsmiləşdirə bilərsiniz.
        </h1>
        <p className="my-4 font-semibold text-slate-500">
          (Təslim alınan sifarişlər ilə bağlı əməliyyatlar 12 saat sonra
          istifadəyə uyğun vəziyyətə gətiriləcəkdir.)
        </p>
      </div>
      <div className="container mx-auto my-20 grid grid-cols-1  gap-2 items-center justify-center">
        <div className="flex flex-col items-center  p-6  rounded-xl bg-violet shadow-xl">
          <div>
            <h1 className="text-3xl font-semibold my-6 text-center">
              Xahiş olunur ki, sifariş vermək üçün daxil olun və yaxud
              qeydiyyatdan keçin.
            </h1>
            <p className="text-center text-slate-400">
              (Sifarişinizi tamamlamaq və rəsmiləşdirmək üçün bir sıra
              məlumatlara ehtiyacımız var. Daxil etdiyiniz məlumatların müəllif
              hüquqları ilə qorunduğuna tam əmin ola bilərsiniz.)
            </p>
          </div>
          <div className="flex justify-center w-full gap-6 my-10">
            <Link
              to="/SignUp"
              title="Qeydiyyatdan keçin."
              className="text-softBlue"
            >
              Qeydiyyatdan keçin.
            </Link>
            <div className="flex gap-1">
              <span className="text-slate-500"> Hesabınız var?</span>
              <Link to="/SignIn" title="Giriş edin." className="text-red-600">
                Giriş edin.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeTrialTitle;
