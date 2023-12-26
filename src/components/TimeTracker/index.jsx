const TimeTracker = () => {
  return (
    <div className="flex items-center gap-12 w-[80%] mx-auto my-20 ">
      <div className="flex-1 rounded-lg cursor-pointer shadow-lg p-6">
        <img src="./frame3.png" alt="" />
      </div>
      <div className="flex-1">
        <p className="text-lightBlue text-xl font-bold">Zaman izləyicisi</p>
        <p className="text-4xl font-bold my-6">
          Layihə performansınızı izləyin
        </p>

        <p>
          Lahiyənizin zaman içərisindəki dəyişimini müşahidə edərək, gələcək
          planlama və sistem idarəsini tənzimləyə bilərsiniz
        </p>
      </div>
    </div>
  );
};

export default TimeTracker;
