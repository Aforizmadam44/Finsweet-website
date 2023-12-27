import axios from "axios";
import { useEffect, useState } from "react";

const Corporate = () => {
  const url = "http://localhost:3000/corporate";
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
    <>
      <div className=" flex flex-col items-center my-28">
        <p className="text-4xl font-semibold my-">Korporativ dəyərlərimiz</p>
        <p>Komandamıza xas xüsusiyyətlər</p>
        <div />
        <div className="container p-12">
          <div className="bg-rose rounded-2xl">
            <div className="grid grid-cols-3  mx-auto my-20 w-[80%]  ">
              {data.map(({ id, icon, description, title }) => (
                <div key={id} className=" my-6  p-6 rounded-xl   ">
                  <img src={icon} alt={title} />
                  <h3 className="text-xl font-bold my-6">{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Corporate;
