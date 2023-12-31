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
        <div className="text-center space-y-4 mb-6">
          <p className="text-4xl font-semibold my-">Korporativ dəyərlərimiz</p>
          <p>Komandamıza xas xüsusiyyətlər</p>
        </div>
        <div />
        <div className="bg-rose rounded-2xl">
          <div className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2  mx-auto my-20 w-[80%] p-4  ">
            {data.map(({ id, icon, description, title }) => (
              <div key={id} className=" my-6  p-6 rounded-xl   ">
                <img src={icon} alt={title} />
                <h3 className="text-xl font-semibold my-6">{title}</h3>
                <p className="text-slate-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Corporate;
