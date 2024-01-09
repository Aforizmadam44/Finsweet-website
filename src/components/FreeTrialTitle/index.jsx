import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

const FreeTrialTitle = () => {
  return (
    <>
      <div className="text-center my-28">
        <h1 className="text-4xl font-semibold">
          Sifarişlərinizi tamamlaya, habelə rəsmiləşdirə bilərsiniz.
        </h1>
        <p className="text-slate-500">
          (Təslim alınan sifarişlər ilə bağlı prosedurlar 12 saat sonra
          istifadəyə uyğun vəziyyətə gətiriləcəkdir.)
        </p>
      </div>
      <div className="container mx-auto my-20 grid grid-cols-1  gap-2 items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-[50%]">
            <h1 className="text-2xl font-semibold my-6 text-center">
              Xahiş olunur ki, sifariş vermək üçün daxil olun və yaxud
              qeydiyyatdan keçin.
            </h1>
            <p className="text-center text-slate-400">
              Sifarişinizi tamamlamaq və rəsmiləşdirmək üçün bir sıra
              məlumatlara ehtiyacımız var. Daxil etdiyiniz məlumatların müəllif
              hüquqları ilə qorunduğuna tam əmin ola bilərsiniz.
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
        <div className="my-20 text-center bg-rose p-6 rounded-xl shadow-xl">
          <div className="space-y-4 mb-10">
            <h2 className="font-semibold text-2xl">Bizimlə əlaqə saxlayın</h2>
            <p className="text-slate-500">
              Bizimlə istənilən zaman və istənilən vasitələrlə əlaqə yarada
              bilərsiniz.{" "}
            </p>
          </div>
          <div className="flex flex-wrap justify-evenly  cursor-pointer">
            <div className="flex flex-col items-center gap-4 hover:scale-110 transition-all duration-500">
              <a href="tel:+994505594199">
                <img src="./dropUs1.png" alt="" />
              </a>
              <div className="text-center">
                <p className="font-semibold text-lg">+994505594199 (Az)</p>
                <p className="text-slate-400">Telefon dəstəyi</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 hover:scale-110 transition-all duration-500">
              <a href="mailto:finsweet@gmail.com">
                <img src="./dropUs2.png" alt="" />
              </a>
              <div className="text-center">
                <p className="font-semibold text-lg">finsweet@gmail.com</p>
                <p className="text-slate-400">E-poçt dəstəyi</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 hover:scale-110 transition-all duration-500">
              <a href="mailto:finsweet@gmail.com">
                <img src="./dropUs3.png" alt="" />
              </a>
              <div className="text-center">
                <p className="font-semibold text-lg">sales@finsweet.com</p>
                <p className="text-slate-400">Satış sorğusu</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 bg-violet p-8 rounded-xl shadow-xl flex flex-col items-center text-center">
          <div className="my-10">
            <p className="text-2xl font-semibold ">Sosyal medyada biz:</p>
            <p className="text-slate-500">
              Bizləri izləməyi və bildirişlərdən xəbərdar olmağı unutmayın.{" "}
            </p>
          </div>
          <div className="w-full grid grid-cols-1  lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-5 gap-6 justify-center items-center">
            <Link
              to={"https://www.instagram.com/finsweet"}
              className="  flex
                  flex-col
                  items-center
             "
            >
              <FaInstagramSquare className="w-6 h-6 hover:scale-110 text-primary" />
              <p className="text-sm text-slate-500">
                https://www.instagram.com/finsweet
              </p>
            </Link>
            <Link
              to={"https://www.linkedin.com/finsweet"}
              className="  flex
                  flex-col
                  items-center
                "
            >
              <GrLinkedin className="w-6 h-6 hover:scale-105 text-primary" />
              <p className="text-sm text-slate-500">
                https://www.linkedin.com/finsweet
              </p>
            </Link>
            <Link
              to={"https://www.facebook.com/finsweet"}
              className="  flex
                  flex-col
                  items-center
               "
            >
              <FaFacebookSquare className="w-6 h-6 hover:scale-105 text-primary" />
              <p className="text-sm text-slate-500">
                https://www.facebook.com/finsweet
              </p>
            </Link>
            <Link
              to={"https://www.twitter.com/finsweet"}
              className="  flex
                  flex-col
                  items-center
             "
            >
              {" "}
              <FaTwitterSquare className="w-6 h-6 hover:scale-105 text-primary" />
              <p className="text-sm text-slate-500">
                https://www.twitter.com/finsweet
              </p>
            </Link>
            <Link
              to={"https://www.whatsapp.com/finsweet"}
              className="flex
                  flex-col
                  items-center
                "
            >
              <FaSquareWhatsapp className="w-6 h-6 hover:scale-105 text-primary" />
              <p className="text-sm text-slate-500">
                https://www.whatsapp.com/finsweet
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeTrialTitle;
