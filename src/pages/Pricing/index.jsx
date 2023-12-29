import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Ready from "../../components/Ready";
import PricingPlan from "../PricingPlan";
import Frequently from "../../components/Frequently";

const Pricing = () => {
  return (
    <div>
      <Helmet>
        <title>Qiymətləndirmə</title>
      </Helmet>
      <Navbar />
      <PricingPlan />
      <Frequently />
      <Ready />
      <Footer />
    </div>
  );
};

export default Pricing;
