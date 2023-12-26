import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button";

const PlanCards = ({ planType }) => {
  const url = "http://localhost:3000/planCards";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Veri çekme hatası:", error);
      });
  }, []);

  return (
    <div className="container columns-3">
      {data.map((plan) => (
        <div
          key={plan.id}
          className="card flex flex-col gap-4 cursor-pointer shadow-lg p-10 rounded-xl hover:bg-primary hover:text-slate-50 "
        >
          <div className="flex items-center gap-4">
            <img src={plan.icon} alt={plan.title} className="w-12" />
            <div>
              <h3 className="text-3xl font-bold">{plan.title}</h3>
              <p className="text-slate-400">{plan.description}</p>
            </div>
          </div>

          <hr />
          <div className="flex items-center gap-3">
            <img src={plan.listIcon} alt="" />
            <p>{plan.projects}</p>
          </div>

          <div className="flex items-center gap-3">
            <img src={plan.listIcon} alt="" />
            <p>{plan.support}</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={plan.listIcon} alt="" />
            <p> {plan.time}</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={plan.listIcon} alt="" />
            <p>{plan.strotage}</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={plan.listIcon} alt="" />
            <p>{plan.ads}</p>
          </div>
          <p className="w-[70%] text-sm">{plan.about}</p>
          <div className="text-center flex flex-col gap-3 my-2">
            <p className="text-3xl font-bold">
              {" "}
              {planType === "monthly" ? plan.price : plan.priceYear}
            </p>
            <p className="text-xs text-slate-400">{plan.when}</p>
            <Button
              title={"Başlayın"}
              color={"text-slate-50"}
              className="hover:bg-slate-50 hover:text-primary"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanCards;
