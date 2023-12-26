import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Ready from "../../components/Ready";
import PricingPlan from "../PricingPlan";
import PlanCards from "../../components/PlanCards";
import Frequently from "../../components/Frequently";

const Pricing = () => {
  return (
    <div>
      <Helmet>
        <title>Qiymətləndirmə</title>
      </Helmet>
      <Navigation />
      <PricingPlan />
      <PlanCards />
      <Frequently />
      <Ready />
      <Footer />
    </div>
  );
};

export default Pricing;
