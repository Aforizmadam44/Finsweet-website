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
    <div className="container mx-auto w-[80%]">
      <p className="text-3xl text-primary text-center font-bold">
        The stunning results our customers have experienced
      </p>
      <div className="flex mx-auto my-6 gap-2">
        {data.map(({ id, description, name, job, icon }) => (
          <div
            key={id}
            className="flex-1 w-[30%] text-center flex flex-col gap-4 border-2 p-4 rounded-lg"
          >
            <p className="text-md font-bold">{description}</p>
            <img src={icon} alt={name} className="mx-auto" />
            <p className="font-bold">{name}</p>
            <p>{job}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
