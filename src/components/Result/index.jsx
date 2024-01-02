import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Result = () => {
  const url = "http://localhost:3000/result";
  const [data, setData] = useState([]);
  const handleLinkClick = () => {
    window.scrollTo(0, 0);

    history.push("/aboutUs");
  };
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
    <div className="container mx-auto">
      <p className="text-3xl text-primary text-center font-bold my-20">
        Daha yaxından tanış olun:
      </p>
      <div className="xl:flex xl:justify-center lg:flex lg:justify-center lg:space-y-0 md:flex md:justify-center md:space-y-0 mx-auto my-6 gap-2 sm:block sm:space-y-6">
        {data.map(({ id, description, name, job, icon }) => (
          <NavLink
            key={id}
            to={"/aboutUs"}
            className="flex xl:w-[29.5%] md:w-[35%] text-center flex-col gap-4 border-2 p-4 cursor-pointer rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            onClick={handleLinkClick}
          >
            <p className="text-md font-semibold">{description}</p>
            <img src={icon} alt={name} className="mx-auto mt-4" />
            <p className="font-bold text-xl">{name}</p>
            <p className="text-slate-400">{job}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Result;
