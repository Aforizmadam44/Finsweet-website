import Button from "../Button";
import CardsAll from "../CardsAll";
import styles from "./style.module.css";

const Impression = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);

    history.push("/freeTrial");
  };
  return (
    <div className={styles.statisticContainer}>
      <div className="w-[80%] xl:grid xl:grid-cols-2 justify-center items-baseline mx-auto py-20 my-20 ">
        <div className="xl:items-start xl:text-left md:text-center  md:flex md:flex-col md:items-center md:my-8">
          <h2 className="text-primary text-4xl font-semibold my-6">
            Daha çox nümayiş, daha çox dönüşüm
          </h2>
          <p className="w-[60%] mb-6 text-slate-600">
            Bizim xidmətlərdən istifadə etməklə daha çox istifadəçi ilə təmasda
            olmaqla bərabər, inkişaf və gəlir strukturunu da müntəzəm həll etmiş
            olursunuz
          </p>
          <Button
            title={"Ödənişsiz sına"}
            color={"text-slate-50"}
            to={"/freeTrial"}
            onClick={handleLinkClick}
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
