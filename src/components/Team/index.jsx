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
    <div className="container grid grid-cols-2 items-center ">
      <div>
        <p className="text-4xl font-semibold my-4">Bacarıqlı Komandamız</p>
        <p>Peşəkar komandamız ilə tanış olun.</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data.map(
          ({ id, icon, description, title, experience, age, company }) => (
            <div
              key={id}
              className="rounded-lg bg-violet text-center cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <figure className="imghvr-zoom-out ">
                <img src={icon} alt="example-image" />
                <figcaption>
                  <div className="flex items-center gap-2">
                    <p className="font-bold">Yaşı:</p>
                    <p className="text-slate-400">{age}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold">İş vəzifəsi:</p>
                    <p className="text-slate-400">{description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold">İş təcrübəsi:</p>
                    <p className="text-slate-400">{experience}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold">Şirkət:</p>
                    <p className="text-slate-400">{company}</p>
                  </div>
                </figcaption>
                <a href="#"></a>
              </figure>
              {/* <img src={icon} alt={title} /> */}
              <div className="p-4">
                {" "}
                <h3 className="text-xl font-bold ">{title}</h3>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Team;
