import React from "react";

const Goals = () => {
  return (
    <div className="bg-violet container flex gap-8 py-16">
      <div className="flex-1 flex flex-col gap-6 ">
        <p className="text-lg font-bold text-lightBlue">Məqsədlərimiz</p>
        <p className="text-2xl font-semibold">
          Biznesinizi ən yüksək səviyyəyə daşımaqı hədəfləyirik
        </p>
        <p>
          Bu yolda bizlərlə çalışan peşəkar komandamızın dəstəyi, illəri aşan
          təcrübəmiz və qabaqcıl metodların istifadəsi ilə axtardığınız xidməti
          sizə təqdim etmək.
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-6 ">
        <p className="text-lg font-bold text-lightBlue">Vizyonumuz</p>
        <p className="text-2xl font-semibold">
          Şirkətinizə lazımi həllər təqdim etmək
        </p>

        <p>
          İstər kiçik, istər orta, istərsə də iri miqyaslı şirkətlərinizə
          gələcəyə addımlama yolunda dəstəklər verərək qısa zaman ərzində
          maksimum inkişafa sövq etmək.
        </p>
      </div>
    </div>
  );
};

export default Goals;
