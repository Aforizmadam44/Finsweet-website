const AboutTitle = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="flex flex-col  items-center my-10 gap-4">
        <p className="text-5xl font-semibold w-[60%] text-center">
          Uzun illəri aşan təcrübəmizlə sizlərə xidmət etməkdən qürur hissi
          duyuruq.
        </p>
        <p className="my-4 font-semibold text-slate-500">
          2003-2023 illəri ərzində istər yerli, istərsə də xarici bazarda
          gördüyümüz işlərlə qazandığımız uğurlar keyfiyyətimizdən xəbər verir.{" "}
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-3 gap-4 ">
        <img
          src="./aboutTitle.png"
          alt=""
          className="cursor-pointer transition-all ease duration-500 hover:scale-105 "
        />
        <img
          src="./aboutTitle2.png"
          alt=""
          className="cursor-pointer transition-all ease duration-500 hover:scale-105 "
        />
        <img
          src="./aboutTitle3.png"
          alt=""
          className="cursor-pointer transition-all ease duration-500 hover:scale-105 "
        />
      </div>
      <div className="flex flex-col gap-4 items-center my-28">
        <p className="text-lightBlue text-xl font-bold">Haqqımızda</p>
        <p className="text-4xl font-semibold text-center">
          Biz məlumat analitiklərindən ibarət komandayıq
        </p>
        <p className="w-[70%] text-center my-6">
          Data analizi xam məlumatları əldə edərək, onları istifadəçilərin qərar
          verməsi ilə yararlı vəziyyətə gətirmək üçün istifadə edilən bir
          prosesdir. Əvvəlcə məlumatlar toplanır, sonra isə sualları
          cavablandırmaq, hipotezləri yoxlamaq və ya nəzəriyyələri rədd etmək
          üçün analiz edilir. Analizə giriş kimi tələb olunan məlumatlar,
          analitiklərin və ya təhlilin nəticəsində istifadə ediləcək
          müştərilərin tələblərinə əsasən seçilir. Məlumatlar rəqəmsal və ya
          kateqoriyalı ola bilər. Data müxtəlif mənbələrdən, yol müşahidə
          kameraları, peyklər və qeyd cihazları kimi ətraf mühitdən sensorlar
          vasitəsilə toplana bilər. Müsahibələr, onlayn resursların endirilməsi
          və ya sənədləşdirilməsindən də yararlanmaq mümkündür.
        </p>
      </div>
    </div>
  );
};

export default AboutTitle;
