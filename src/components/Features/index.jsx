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
      <p className="font-bold text-4xl text-center">Xüsusiyyətlər</p>
      <div className="flex flex-wrap justify-between items-center  my-20 p-14 bg-rose w-[80%] mx-auto  rounded-xl">
        {data.map(({ id, title, icon, description }) => (
          <div key={id} className="w-[25%]">
            <img src={icon} alt="" className="my-6 w-[25%]" />
            <p className="my-4 text-primary text-2xl font-bold">{title} </p>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
