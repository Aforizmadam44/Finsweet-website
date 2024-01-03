import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Button from "../Button";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";

const DiscoverDetails = () => {
  const url = "http://localhost:3000/salesTracking/";
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    axios
      .get(url + id)
      .then(({ data }) => {
        setDetail(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex items-center flex-col space-y-4 my-20">
        {detail && (
          <div className="flex flex-col items-center" key={id}>
            <p className="text-2xl font-bold my-5 ">{detail.title}</p>
            <img src={detail.longIcon} alt="" className="" />
            <div className="text-center my-10">
              <div className=" rounded-xl shadow-xl p-8 text-center space-y-4">
                <p>{detail.longDescription}</p>
              </div>
            </div>
          </div>
        )}

        <Button
          to={"/"}
          title={"Geri dön"}
          bg={"bg-primary"}
          color={"text-slate-50"}
        />
      </div>
      <Footer />
    </div>
  );
};

export default DiscoverDetails;
