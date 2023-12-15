import styles from "./style.module.css";
const Impression = () => {
  return (
    <div className={styles.statisticContainer}>
      <div className="flex w-[80%] mx-auto justify-between">
        <div className="flex-1">
          <p className="text-lightBlue text-2xl my-4 font-bold">
            Discover More
          </p>
          <h2 className="text-primary text-4xl font-bold my-6">
            More impressions, more conversions
          </h2>
          <p className="w-[50%]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua invidunt ut labore.
          </p>
        </div>
        <div className="flex-2">
          <img src="./statistic.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Impression;
