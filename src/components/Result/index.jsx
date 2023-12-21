import axios from "axios";
import { useEffect, useState } from "react";

const Result = () => {
  const url = "http://localhost:3000/result";
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
    <div className="container mx-auto w-[100%] my-20">
      <p className="text-3xl text-primary text-center font-bold">
        Daha yaxından tanış olun:
      </p>
      <div className="flex  justify-center mx-auto my-6 gap-2">
        {data.map(({ id, description, name, job, icon }) => (
          <div
            key={id}
            className="flex  w-[29.5%] text-center  flex-col gap-8 border-2 p-4 cursor-pointer rounded-lg hover:scale-105 transition-all duration-300"
          >
            <p className="text-md font-semibold">{description}</p>
            <img src={icon} alt={name} className="mx-auto" />
            <p className="font-semibold text-lg">{name}</p>
            <p>{job}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
