const LatestBlog = () => {
  return (
    <div>
      <div className="container text-center space-y-4 my-20">
        <p className="text-5xl font-semibold ">Ən son bloqlarımızı oxuyun</p>
        <p className="my-4 font-semibold text-slate-500">
          Bu bölmədə bloqlar haqqında məlumat və onlarla yaxından tanış ola
          bilərsiniz
        </p>
      </div>
      <div className="container border-1  rounded-xl mx-auto  ">
        <div className=" border-2  p-10 xl:grid xl:grid-cols-2 sm:grid sm:grid-cols-1 gap-10 rounded-xl ">
          <div className="space-y-6">
            <p className="text-xl text-lightBlue font-bold">
              Trend Paylaşımlar
            </p>
            <p className="text-2xl font-semibold">
              Ödənişinizi daha sürətli almağınıza kömək edəcək yeni faktura
              xüsusiyyətləri
            </p>
            <p className="text-slate-800">
              Son bir neçə ay ərzində biz Hesab-fakturaya bir neçə yeni funksiya
              əlavə etdik ki, bu da istənilən biznesin daha sürətli ödəniş
              almasına və yığım işlərinin sürətləndirilməsinə kömək edəcək.
            </p>
            <p className="text-slate-400">Luke Matthews l Noyabr 8, 2021</p>
          </div>
          <div>
            <img
              src="./latest1.png"
              alt=""
              className="hover:scale-105 transition-all duration-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
