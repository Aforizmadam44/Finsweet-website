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
      <div className="container flex justify-between items-center flex-wrap p-10 bg-rose rounded-xl w-[80%] mx-auto text-center">
        {data.map(({ id, title, icon, description }) => (
          <div key={id} className="flex  flex-col items-center mx-auto">
            <img src={icon} alt="" className="my-6 mx-auto" />
            <p className="my-4 text-primary text-2xl font-bold">{title} </p>
            <p className="text-slate-500">{description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
