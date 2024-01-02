import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Discover = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);

    history.push("/pricing");
  };

  const url = "http://localhost:3000/salesTracking";
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
    <div className="container xl:grid xl:grid-cols-2 items-center gap-8 p-2 w-[80%] mx-auto md:block md:my-6">
      <div className="my-20 lg:flex lg:flex-col lg:items-center xl:items-start">
        <p className="text-lightBlue font-bold text-xl">Daha çox kəşf edin.</p>
        <h2 className="text-primary text-4xl w-[70%] font-semibold my-8 md:w-[100%]">
          Satış və marketinq potensialınızı təhlil edin.
        </h2>
        <p className="w-[70%] md:w-[100%]">
          Satış prosesinin düzgün qurulması hər bir şirkətin uğurunun əsasını
          təşkil edir. Satışın effektiv təşkili üçün işçilərin (satıcıların)
          məhsulu dərindən bilmələri ilə yanaşı, həm də müştərilərin tanımaq,
          müştərilərlə işləmək bacarığı və ünsiyyət bacarıqları önəmlidir. Bu
          fəsildə də məhz bu amillərə diqqət yetirəcəyik.
        </p>
      </div>
      <div className="flex flex-col gap-8 justify-center">
        {data.map(({ id, description, title, icon }) => (
          <Link
            to={`/DiscoverDetails/${id}`}
            key={id}
            className="flex gap-5 items-center p-6 hover:scale-105 hover:rounded-xl hover:bg-primary hover:text-white transition-all duration-500"
            onClick={handleLinkClick}
          >
            {icon && <img src={icon} alt={title} />}
            <div className="space-y-2">
              <p className="font-bold text-lg">{title}</p>
              <p>{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;
