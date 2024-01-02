import axios from "axios";
import { useEffect, useState } from "react";

const Features = () => {
  const url = "http://localhost:3000/features";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        if (data) {
          setData(data);
        } else {
          console.error("Data not found in the response.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <p className="font-bold text-4xl text-center my-28">Xüsusiyyətlər</p>
      <div className="container flex justify-between items-center flex-wrap p-14 bg-rose  rounded-xl w-[80%] mx-auto">
        {data.map(({ id, title, icon, description }) => (
          <div
            key={id}
            className="xl:w-[25%] lg:w-[45%] md:w-[35%] xl:flex xl:flex-col xl:items-baseline"
          >
            <img src={icon} alt="" className="my-6 w-[25%] " />
            <p className="my-4 text-primary text-2xl font-bold">{title} </p>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
