import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Ready from "../../components/Ready";
import PricingPlan from "../PricingPlan";
import Frequently from "../../components/Frequently";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Helmet>
          <title>Qiymətləndirmə</title>
        </Helmet>
        <Navbar />
        <PricingPlan />
        <Frequently />
        <Ready />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Pricing;
