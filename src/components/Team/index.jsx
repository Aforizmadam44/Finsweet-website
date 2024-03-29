import axios from "axios";
import "..//..//assets//imagehover.css";
import { useEffect } from "react";
import { useState } from "react";

const Team = () => {
  const url = "http://localhost:3000/team";
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
    <div className="xl:grid xl:grid-cols-2 items-center sm:block sm:space-y-6 w-[80%] mx-auto">
      <div className="sm:space-y-4 ">
        <p className="text-4xl font-semibold text-pvColor2 my-4">
          Bacarıqlı Komandamız
        </p>
        <p className="text-lg text-slate-400">
          Peşəkar komandamız ilə tanış olun:
        </p>
      </div>
      <div className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2  sm:grid sm:grid-cols-2  gap-4  my-6">
        {data.map(
          ({ id, icon, description, title, experience, age, company }) => (
            <div
              key={id}
              className="bg-violet text-center cursor-pointer xl:hover:scale-110 transition-transform duration-300 "
            >
              <figure className="imghvr-zoom-out rounded-xl ">
                <img src={icon} alt="example-image" />
                <figcaption>
                  <div className="flex items-center gap-2">
                    <p className="font-bold">Yaşı:</p>
                    <p className="text-slate-400">{age}</p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <p className="font-bold">İş vəzifəsi:</p>
                    <p className="text-slate-400">{description}</p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <p className="font-bold">Təcrübə:</p>
                    <p className="text-slate-400">{experience}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold">Şirkət:</p>
                    <p className="text-slate-400">{company}</p>
                  </div>
                </figcaption>
              </figure>
              <div className="p-4">
                {" "}
                <h3 className="text-xl font-bold ">{title}</h3>
                <div className="border-b-2 border-slate-400 my-4  md:hidden lg:hidden xl:hidden" />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Team;
