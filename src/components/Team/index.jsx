import axios from "axios";
import React from "react";
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
        {data.map(({ id, icon, description, title }) => (
          <div
            key={id}
            className="rounded-xl bg-violet text-center cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            <img src={icon} alt={title} />
            <div className="p-4">
              {" "}
              <h3 className="text-xl font-bold ">{title}</h3>
              <p className="">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
