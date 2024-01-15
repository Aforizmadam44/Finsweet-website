import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./style.module.css";

const Service = () => {
  const url = "http://localhost:3000/service";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className=" container ">
      <h2 className="text-4xl font-bold text-center my-10  ">
        Bizim xidmətlər ilə ən keyfiyyətlisinə sahib olun.
      </h2>
      <div className={`${styles.serviceContainer} p-8 rounded-2xl`}>
        <div className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-2 gap-12  mx-auto my-20 xl:w-[80%]  p-12">
          {data.map(({ id, icon, description, title }) => (
            <div key={id} className=" my-6  p-6 rounded-xl sm:w-full sm:p-0 ">
              <img src={icon} alt={title} />
              <h3 className="text-xl font-bold my-6">{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
