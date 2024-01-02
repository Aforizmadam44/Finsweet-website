const TimeTracker = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center gap-16 w-[80%] mx-auto my-28">
      <div className="order-2 xl:order-1 rounded-lg cursor-pointer shadow-lg p-6">
        <img src="./frame3.png" alt="" />
      </div>
      <div className="order-1 xl:order-2 my-6">
        <p className="text-lightBlue text-xl font-bold">Zaman izləyicisi</p>
        <p className="text-4xl font-semibold my-6">
          Layihə performansınızı izləyin
        </p>

        <p>
          Lahiyənizin zaman içərisindəki dəyişimini müşahidə edərək, gələcək
          planlama və sistem idarəsini tənzimləyə bilərsiniz. Və inkişafa
          meyilli statistikaya yol açmış olarsınız.
        </p>
      </div>
    </div>
  );
};

export default TimeTracker;
