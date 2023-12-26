import React from "react";
import CardsAll from "../CardsAll";

const LeadGeneration = () => {
  return (
    <div className="flex items-center w-[80%] mx-auto my-20">
      <div>
        <p className="text-lightBlue text-xl font-bold">Aparıcı Nəsil</p>
        <p className="text-4xl">Dəyişimə uyğun daha çox potensial</p>
        <p>
          Qabaqcıl texnologiya ilə müasir standartanların harmoniyası sayəsində
          potensialın fövqündə əmək nəaliyyətlərinə imza atacaqsınız.
        </p>
      </div>

      <CardsAll />
    </div>
  );
};

export default LeadGeneration;
