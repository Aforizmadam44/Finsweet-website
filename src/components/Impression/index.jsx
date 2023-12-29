import Button from "../Button";
import CardsAll from "../CardsAll";
import styles from "./style.module.css";

const Impression = () => {
  return (
    <div className={styles.statisticContainer}>
      <div className="flex w-[80%]  justify-center items-baseline mx-auto py-20 my-20 columns-2 ">
        <div>
          <h2 className="text-primary text-4xl font-bold my-6">
            Daha çox nümayiş, daha çox dönüşüm
          </h2>
          <p className="w-[60%] mb-6">
            Bizim xidmətlərdən istifadə etməklə daha çox istifadəçi ilə təmasda
            olmaqla bərabər, inkişaf və gəlir strukturunu da müntəzəm həll etmiş
            olursunuz
          </p>
          <Button
            title={"Ödənişsiz sına"}
            color={"text-slate-50"}
            to={"/freeTrial"}
          />
        </div>
        <div>
          <CardsAll />
        </div>
      </div>
    </div>
  );
};

export default Impression;
