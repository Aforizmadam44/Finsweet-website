import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../Footer";
import Button from "../Button";

const AllPostDetails = () => {
  const url = "http://localhost:3000/ourPost/";

  const { id } = useParams();
  const [plan, setPlan] = useState({});

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

  return (
    <>
      <Navbar />{" "}
      <div
        key={id}
        className="
      container mx-auto flex items-center flex-col space-y-4 my-20"
      >
        <div className="flex flex-col items-center">
          <img src={plan.iconDetails} alt="" className="shadow-xl rounded-xl" />
          <div className="text-center my-10">
            <p className="text-2xl font-bold my-5 ">{plan.title}</p>
            <div className="border-2 shadow-xl p-8 rounded-xl text-center space-y-4">
              <p>{plan.longDescription}</p>
              <p className="text-slate-400">{plan.author}</p>
            </div>
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
