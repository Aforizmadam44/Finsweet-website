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
      <div className="text-center mx-auto flex flex-col my-20 justify-center   ">
        <p className="text-lightBlue text-2xl my-4 font-bold">
          Yüksək keyfiyyət
        </p>
        <h3 className="text-primary text-4xl font-bold ">
          Biznesiniz üçün optimal həllərə sahibik.
        </h3>
      </div>
      <div className="container flex justify-between p-14 bg-violet  mx-auto rounded-xl w-[80%]">
        {data.map(({ id, title, icon, description }) => (
          <div key={id} className="w-[25%]">
            <img src={icon} alt="" className="my-6" />
            <p className="my-4 text-primary text-2xl font-bold">{title} </p>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Solution;
