import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllPost = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);

    history.push(`/AllPostDetails`);
  };
  const url = "http://localhost:3000/ourPost";
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
      <p className="text-center text-4xl font-semibold my-28">
        Bütün paylaşımlar
      </p>
      <div className="container xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 gap-4">
        {data.map(({ id, description, title, icon, author }) => (
          <Link
            key={id}
            to={`/AllPostDetails/${id}`}
            className="flex text-center  flex-col space-y-6 border-2 p-4 cursor-pointer rounded-lg hover:scale-105 transition-all duration-300 hover:bg-primary hover:text-slate-50"
            onClick={handleLinkClick}
          >
            <img src={icon} alt={title} className="mx-auto" />
            <p className="font-semibold text-lg">{title} </p>

            <p className="text-md">{description}</p>
            <p className="text-slate-400">{author}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllPost;
