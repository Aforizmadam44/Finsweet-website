const DropUs = () => {
  return (
    <>
      <p className="text-center my-16 font-bold text-5xl">
        {" "}
        Bizimlə əlaqə saxlayın
      </p>
      <div className="container">
        <div className="bg-violet rounded-xl xl:grid xl:grid-cols-2 md:block  items-center p-8">
          <form className="">
            <div className="p-12">
              <div className="my-6 space-y-3">
                <p className="text-4xl font-semibold">Bizə mesaj göndərin</p>
                <p>Biz ən qısa zamanda sizinlə əlaqə saxlayacağıq.</p>
              </div>

              <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
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
                      name="last-name"
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
                      name="email"
                      type="email"
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
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 border-white focus:border-white"
                    >
                      <option value="" disabled selected>
                        Mövzu
                      </option>
                      <option>Xidmət</option>
                      <option>Əlaqə</option>
                      <option>Məhsullar</option>
                      <option>Qiymətlər</option>
                      <option>Digər</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows="3"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-white focus:border-white"
                      placeholder="Mesajınız"
                      maxLength={15}
                    ></textarea>
                    <button className="bg-primary text-slate-50 p-5 rounded-xl w-full my-6">
                      Göndərin
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
    </>
  );
};

export default DropUs;
