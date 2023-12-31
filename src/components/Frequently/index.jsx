import { useState } from "react";

const Frequently = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container my-28">
      <div className="lg:grid lg:grid-cols-2 md:block gap-2 bg-violet p-8 items-center rounded-xl">
        <div>
          <p className="text-4xl font-bold my-4">Tez-tez soruşulan suallar</p>
          <p>Bu bölmədə bizlərə ünvanlanan suallarla tanış ola bilərsiniz.</p>
        </div>
        <div>
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`shadow-lg rounded-lg bg-slate-50 p-4 my-4 ${
                activeIndex === index ? "h-auto" : "h-16"
              }`}
            >
              <div className="flex items-center transition-all duration-500">
                <h3 className="text-lg font-semibold mr-2 ">
                  {index === 0
                    ? "Biznesimi necə böyüdərəm?"
                    : index === 1
                    ? "Abunəliyimi ləğv edə bilərəmmi?"
                    : index === 2
                    ? "Dəstəklə necə əlaqə saxlaya bilərəm?"
                    : index === 3
                    ? "Kredit kartı tələb olunur?"
                    : ""}
                </h3>
                <button
                  onClick={() => toggle(index)}
                  className=" text-2xl text-lightBlue"
                >
                  {activeIndex === index ? "-" : "+"}
                </button>
              </div>
              {activeIndex === index && (
                <div className="mt-2 text-slate-700">
                  <p>
                    {index === 0
                      ? "Biznesinizi peşəkarlara həvalə edərək, professional həll yolları ilə addımlayın."
                      : index === 1
                      ? "Bəli məmnun qalmadığınız təqdirdə, istədiyiniz zaman ləğv edə bilərsiniz."
                      : index === 2
                      ? "7/24 qaynar xəttimizdən və mail adreslərindən bizimlə əlaqə saxlaya bilərsiniz."
                      : index === 3
                      ? "Xeyr, ödənişi digər üsullarlarla (nağd, ödəmə aparatları) vasitəsilə də edə bilərsiniz."
                      : ""}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frequently;
