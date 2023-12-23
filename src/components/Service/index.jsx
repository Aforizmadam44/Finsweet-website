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
    <div className={`${styles.serviceContainer} p-8`}>
      <div className="my-20">
        <h2 className="text-4xl font-bold text-center  ">
          Bizim xidmətlər ilə ən keyfiyyətlisinə sahib olun.
        </h2>
        <div className="flex flex-wrap mx-auto my-20 w-[80%]">
          {data.map(({ id, icon, description, title }) => (
            <div key={id} className="w-1/2 my-6 bg-slate-50 p-6 ">
              <img src={icon} alt={title} />
              <h3 className="text-xl font-bold my-6">{title}</h3>
              <p>{description}</p>
              {/* Diğer bilgileri de ekleyebilirsiniz */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
