import React from "react";

const Goals = () => {
  return (
    <div className="bg-violet container mx-auto xl:grid xl:grid-cols-2 md:grid md:grid-cols-1  gap-2 py-10">
      <div className="space-y-4 mx-auto w-[60%]">
        <p className="text-xl font-bold text-lightBlue">Məqsədlərimiz</p>
        <p className="text-3xl font-semibold">
          Biznesinizi ən yüksək səviyyəyə daşımaqı hədəfləyirik
        </p>
        <p className="text-slate-400">
          Bu yolda bizlərlə çalışan peşəkar komandamızın dəstəyi, illəri aşan
          təcrübəmiz və qabaqcıl metodların istifadəsi ilə axtardığınız xidməti
          sizə təqdim etmək.
        </p>
      </div>
      <div className="xl:hidden lg:hidden md:space-y-4 md:block " />
      <div className="space-y-4 xl:mt-0 sm:mt-4 my-6 mx-auto w-[60%]">
        <p className="text-xl font-bold text-lightBlue">Vizyonumuz</p>
        <p className="text-3xl font-semibold">
          Şirkətinizə lazımi həllər təqdim etmək və planlaşdırma
        </p>

        <p className="text-slate-400">
          İstər kiçik, istər orta, istərsə də iri miqyaslı şirkətlərinizə
          gələcəyə addımlama yolunda dəstəklər verərək qısa zaman ərzində
          maksimum inkişafa sövq etmək.
        </p>
      </div>
    </div>
  );
};

export default Goals;
