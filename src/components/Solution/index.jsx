import axios from "axios";
import { useEffect, useState } from "react";

const Solution = () => {
  const url = "http://localhost:3000/solution";
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
      <div className="text-center mx-auto flex flex-col my-28 justify-center   ">
        <p className="text-lightBlue text-2xl my-4 font-bold">
          Yüksək keyfiyyət
        </p>
        <h3 className="text-primary text-4xl font-semibold ">
          Biznesiniz üçün optimal həllərə sahibik.
        </h3>
      </div>
      <div className="container flex justify-between items-center flex-wrap p-14 bg-violet  rounded-xl w-[80%] mx-auto">
        {data.map(({ id, title, icon, description }) => (
          <div
            key={id}
            className="xl:w-[25%] lg:w-[45%] md:w-[35%] xl:flex xl:flex-col xl:items-baseline sm:items-center sm:my-8"
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

export default Solution;
