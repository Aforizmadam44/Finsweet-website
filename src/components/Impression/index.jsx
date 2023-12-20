import Button from "../Button";
import styles from "./style.module.css";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { TfiPieChart } from "react-icons/tfi";
import { SlChart } from "react-icons/sl";

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
          <Button title={"Ödənişsiz sına"} />
        </div>
        <div>
          <div className="clientsCard flex justify-center ml-56 mx -auto  text-center p-2 rounded-lg  w-[40%] h-[10%] bg-slate-50 mb-[5%]">
            <div className="className flex gap-3 items-center justify-center shrink-0">
              <FaUserFriends className="text-2xl text-softBlue" />
              <div className="shrink-0">
                <p className="text-slate-400">Yeni müştərilər</p>
                <p>324+</p>
              </div>

              <BsGraphUpArrow className="text-2xl text-softBlue" />
            </div>
          </div>
          <div className="allCard flex items-center">
            <div className="impressionCard mr-6 p-4 rounded-lg  gap-3 w-[20%] h-[10%] bg-slate-50 text-center">
              <p className="text-slate-400">Tərəqqi</p>
              <div>
                <div className="flex items-center justify-center mt-4 gap-2">
                  <TfiPieChart className="text-softBlue text-4xl" />
                  <p className="text-lg font-bold">32K</p>
                </div>
              </div>
            </div>
            <div className="bigCard w-[80%] p-8  flex flex-col items-center justify-center mx-auto bg-slate-50 rounded-lg text-center">
              <div className="flex gap-8 ">
                {" "}
                <img src="./Section.png" alt="" />
                <img src="./Section(1).png" alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-3xl font-bold">1.05</p>
                <p className="text-md">Orta diapazon</p>
              </div>
              <div className="flex">
                <img src="./Section(2).png" alt="" />
                <img src="./Section(3).png" alt="" />
              </div>
              <div className="flex flex-wrap justify-center items-center gap-4 my-10">
                <div className="flex items-center justify-center gap-4">
                  <span>
                    <p className="text-blue text-xl ">%</p>
                  </span>
                  <p>11%</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <span>
                    <p className="text-iden1 text-xl">%</p>
                  </span>
                  <p>24%</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <span>
                    <p className="text-iden2 text-xl">%</p>
                  </span>
                  <p>39%</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <span>
                    <p className="text-iden3 ">%</p>
                  </span>
                  <p>26%</p>
                </div>
                <div className="flex items-center mt-2">
                  <p>
                    Finsweet müştəri dəstəyindən ən yaxşı şəkildə yararlanın
                  </p>
                </div>
              </div>
            </div>

            <div className="earningsCard ml-[-10%] shadow-md p-2 flex justify-center items-center gap-4 px-6 rounded-lg  w-[20%] h-[10%] bg-slate-50">
              <SlChart />

              <div>
                <p className="text-slate-400">Qazanclar</p>
                <p className="text-lg font-bold">$7782.40</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impression;
