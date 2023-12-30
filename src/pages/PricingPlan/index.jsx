// PricingPlan.js
import { useState } from "react";
import Button from "../../components/Button";
import PlanCards from "../../components/PlanCards";

const PricingPlan = () => {
  const [isMonthlySelected, setIsMonthlySelected] = useState(true);

  const handleButtonClick = () => {
    setIsMonthlySelected(!isMonthlySelected);
  };

  return (
    <div className="flex flex-col items-center mx-auto text-center gap-4 my-20">
      <p className="text-4xl font-bold">Sizə uyğun qiymət planları</p>
      <p>Aylıq və yaxud illik planlarımızla tanış olun:</p>
      <div className="buttons">
        <Button
          title={"Aylıq plan"}
          bg={isMonthlySelected ? "bg-primary" : "bg-slate-50"}
          color={isMonthlySelected ? "text-slate-50" : "text-primary"}
          onClick={handleButtonClick}
        />
        <Button
          title={"İllik plan"}
          bg={isMonthlySelected ? "bg-slate-50" : "bg-primary"}
          color={isMonthlySelected ? "text-primary" : "text-slate-50"}
          onClick={handleButtonClick}
        />
      </div>
      <PlanCards planType={isMonthlySelected ? "monthly" : "annual"} />
    </div>
  );
};

export default PricingPlan;
