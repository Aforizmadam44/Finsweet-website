const Discover = () => {
  return (
    <div className=" grid grid-cols-2 mx-auto w-[80%] my-20 gap-4">
      <div className="flex-1">
        <p className="text-lightBlue font-bold text-lg">Daha çox kəşf edin</p>
        <h2 className="text-primary text-4xl w-[70%] font-bold my-8">
          Satış və marketinq potensialınızı təhlil edin
        </h2>
        <p className="w-[70%]">
          Satış prosesinin düzgün qurulması hər bir şirkətin uğurunun əsasını
          təşkil edir. Satışın effektiv təşkili üçün işçilərin (satıcıların)
          məhsulu dərindən bilmələri ilə yanaşı, həm də müştərilərin tanımaq,
          müştərilərlə işləmək bacarığı və ünsiyyət bacarıqları önəmlidir. Bu
          fəsildə də məhz bu amillərə diqqət yetirəcəyik.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-4 my-4 ">
          <img src="./discoverIcon1.svg" alt="" />
          <div>
            <p className="font-bold text-lg">Satış İzləmə</p>
            <p>
              Fürsət, Təklif, Sifariş, Malların Qeydi, Faktura mərhələlərinin
              bütün detaylarını hər yerdən, istənilən vaxt və istənilən
              cihazınızdan həyata keçirməyə imkan verir.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 my-4">
          <img src="./discoverIcon2.svg" alt="" />
          <div>
            <p className="font-bold text-lg">Layihənin idarə olunması</p>
            <p>
              Layihə idarəetməsinin formalaşdırılması və təkmilləşdirilməsi -
              sistemli inkişafa keçid və müəssisə və təşkilatların fəaliyyətini
              təmin etmək
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 my-4">
          <img src="./discoverIcon3.svg" alt="" />
          <div>
            <p className="font-bold text-lg">Fəaliyyət Hesabatı</p>
            <p>
              Mühasibat (maliyyə) hesabatları - mühasibat uçotu məlumatları
              əsasında hazırlanan müəssisənin maliyyə vəziyyəti, onun
              fəaliyyətinin maliyyə nəticələri və onun maliyyə vəziyyətinin
              dəyişməsi barədə vahid məlumat sistemidir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
