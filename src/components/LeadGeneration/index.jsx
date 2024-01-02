import CardsAll from "../CardsAll";

const LeadGeneration = () => {
  return (
    <div className="xl:grid xl:grid-cols-2 sm:grid sm:grid-cols-1 sm:space-y-6 items-center w-[80%] gap-16 mx-auto my-20 ">
      <div>
        <p className="text-lightBlue text-xl font-bold">Aparıcı Nəsil</p>
        <p className="text-4xl my-6 font-semibold">
          Dəyişimə uyğun daha çox potensial
        </p>
        <p>
          Qabaqcıl texnologiya ilə müasir standartanların harmoniyası sayəsində
          potensialın fövqündə əmək nəaliyyətlərinə imza atacaqsınız.
        </p>
      </div>
      <div className="shadow-2xl rounded-xl p-6">
        <CardsAll />
      </div>
    </div>
  );
};

export default LeadGeneration;
