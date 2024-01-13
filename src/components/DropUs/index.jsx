import { useState } from "react";
import Swal from "sweetalert2";
import ContactSection from "../ContactSection";

const DropUs = () => {
  const [formMessage, setFormMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isBlank, setIsBlank] = useState(true);

  const handleInputChange = (event) => {
    setIsBlank(event.target.value === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwGD8t0_Ge8Az4f4MQ4toox0kiQY3_rlB1NS4bIabn3v5pNuN8_Z_B5_G19w3iiY-w/exec",
        {
          method: "POST",
          body: new FormData(e.target),
        }
      );

      if (response.ok) {
        setFormMessage("Təşəkkür edirik, sizin mesajınız bizə göndərildi.");

        window.location.reload();
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Təşəkkür edirik, sizin mesajınız bizə göndərildi.",
          showConfirmButton: false,
          timer: 5000,
        });
      } else {
        throw new Error("Xəta baş verdi, mesaj göndərilmədi.");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error!", error.message);
      setFormMessage("Xəta baş verdi, mesaj göndərilmədi.");
    }
  };

  return (
    <>
      <div className="text-center my-16 ">
        <p className="text-center font-semibold text-5xl">
          {" "}
          Bizimlə əlaqə saxlayın
        </p>
        <p className="my-4 font-semibold text-slate-500">
          Biz ən qısa zamanda sizinlə əlaqə saxlayacağıq.
        </p>
      </div>
      <div className="container">
        <div className="bg-violet rounded-xl xl:grid xl:grid-cols-2 md:block  items-center p-8">
          <form
            className=""
            name="contact-form"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="p-12">
              <div className="my-6 space-y-3">
                <p className="text-4xl font-semibold">Bizə mesaj göndərin</p>
              </div>

              <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <input
                      type="text"
                      name="Adınız"
                      id="first-name"
                      onChange={handleInputChange}
                      required
                      autoComplete="given-name"
                      placeholder="Ad"
                      className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-white focus:border-white"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <input
                      type="text"
                      name="Soyadınız"
                      required
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-white focus:border-white"
                      placeholder="Soyad"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <input
                      id="email"
                      name="E-poçt ünvanı"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-white focus:border-white"
                      placeholder="Email adresi"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <select
                      id="country"
                      name="Müraciət səbəbi"
                      autoComplete="country-name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 border-white focus:border-white"
                    >
                      <option value="" disabled selected>
                        Mövzu
                      </option>
                      <option value="Xidmət">Xidmət</option>
                      <option value="Əlaqə">Əlaqə</option>
                      <option value="Məhsullar">Məhsullar</option>
                      <option value="Qiymətlər">Qiymətlər</option>
                      <option value="Digər">Digər</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="Haqqında"
                      rows="3"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-white focus:border-white"
                      placeholder="Mesajınız"
                      maxLength={100}
                    ></textarea>
                    <button
                      disabled={isLoading}
                      className="bg-primary disabled:bg-softBlue text-slate-50 p-5 rounded-xl w-full my-6"
                    >
                      {isLoading
                        ? "Xahiş olunur, gözləyin, göndərilir..."
                        : "Göndərin"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {formMessage && <p>{formMessage}</p>}
          </form>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center gap-4 my-6">
              <a href="tel:+994505594199">
                <img src="./dropUs1.png" alt="" />
              </a>
              <div>
                <p className="font-bold text-lg">+994505594199(Az)</p>
                <p className="text-slate-400">E-poçt dəstəyi</p>
              </div>
            </div>

            <div className="flex items-center gap-4 my-6">
              <a href="mailto:finsweet@gmail.com">
                <img src="./dropUs2.png" alt="" />
              </a>
              <div>
                <p className="font-bold text-lg">finsweet@gmail.com</p>
                <p className="text-slate-400">E-poçt dəstəyi</p>
              </div>
            </div>
            <div className="flex items-center gap-4 my-6">
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
      </div>
      <ContactSection />
    </>
  );
};

export default DropUs;
