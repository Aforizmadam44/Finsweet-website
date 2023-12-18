import Button from "../Button";
import styles from "./style.module.css";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { TfiPieChart } from "react-icons/tfi";
import { SlChart } from "react-icons/sl";

const Impression = () => {
  return (
    <div className={styles.statisticContainer}>
      <div className="container flex w-[80%] mx-auto justify-between py-20">
        <div className="flex-1">
          <h2 className="text-primary text-4xl font-bold my-6">
            More impressions, more conversions
          </h2>
          <p className="w-[60%] mb-6">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua invidunt ut labore.
          </p>
          <Button title={"Get free trial"} />
        </div>
        <div className="flex-2">
          <div className="clientsCard  flex justify-center items-center p-4 rounded-lg  w-[80%] h-[40%] bg-slate-50">
            <div className="className flex gap-3 items-center justify-center shrink-0">
              <FaUserFriends className="w-12 text-softBlue" />
              <div className="shrink-0">
                <p className="text-slate-400">New clients</p>
                <p>324+</p>
              </div>

              <BsGraphUpArrow className="w-12 text-softBlue" />
            </div>
          </div>
          <div className="impressionCard py-4 px-2 rounded-lg  gap-3 w-[40%] h-[40%] bg-slate-50">
            <p className="text-slate-400">Impression</p>
            <div>
              <div className="flex items-center justify-center mt-4 gap-2">
                <TfiPieChart className="text-softBlue" />
                <p className="text-lg font-bold">32K</p>
              </div>
            </div>
          </div>
          <div className="earningsCard flex justify-center items-center px-6 rounded-lg  w-[40%] h-[40%] bg-slate-50">
            <SlChart />

            <div>
              <p className="text-slate-400">Earnings</p>
              <p className="text-lg font-bold">$7782.40</p>{" "}
            </div>
          </div>
          <div className="finsweetCard"></div>
        </div>
      </div>
    </div>
  );
};

export default Impression;
