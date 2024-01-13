import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../Footer";
import Button from "../Button";
import { Link } from "react-router-dom";

const AllPostDetails = () => {
  const url = "http://localhost:3000/ourPost/";
  const urlLimited = "http://localhost:3000/ourPost/?_start=4&_end=7";
  const { id } = useParams();
  const [plan, setPlan] = useState({});
  const [limited, setLimited] = useState([]);
  const navigate = useNavigate();
  const handleClick = (clickedId) => {
    navigate.push(`/AllPostDetails/${clickedId}`);
  };
  useEffect(() => {
    axios
      .get(url + id)
      .then(({ data }) => {
        setPlan(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(urlLimited)
      .then(({ data }) => {
        setLimited(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto flex items-center flex-col space-y-4 my-20">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold my-5 ">{plan.title}</p>
          <img
            src={plan.iconDetails}
            alt=""
            className="shadow-xl rounded-xl w-[900px] h-[400px] object-cover"
          />
          <div className="text-center my-10">
            <div className="shadow-xl p-8 rounded-xl text-center space-y-4">
              <p>{plan.longDescription}</p>
              <p className="text-slate-400">{plan.author}</p>
            </div>
          </div>
        </div>
        <div className="my-28">
          <p className="text-2xl text-center font-semibold my-6">
            Digər bloqlar:
          </p>
          <div className="grid grid-cols-1 md:grid md:grid-cols-3 gap-2">
            {limited.map((item) => (
              <Link
                key={item.id}
                to={`/AllPostDetails/${item.id}`}
                onClick={() => handleClick(item.id)}
                className="flex flex-1 text-center  flex-col space-y-6 border-2 p-4 cursor-pointer rounded-lg hover:scale-105 transition-all duration-300 hover:bg-primary hover:text-slate-50"
              >
                <img src={item.icon} alt={item.title} className="mx-auto" />
                <p className="font-semibold text-lg">{item.title} </p>
                <p className="text-md">{item.description}</p>
                <p className="text-slate-400">{item.author}</p>
              </Link>
            ))}
          </div>
        </div>
        <Button
          to={"/blog"}
          title={"Geri dön"}
          bg={"bg-primary"}
          color={"text-slate-50"}
        />
      </div>
      <Footer />
    </>
  );
};

export default AllPostDetails;
