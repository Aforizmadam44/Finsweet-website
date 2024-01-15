import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Logos from "../../components/Logos";
import Features from "../../components/Features";
import Ready from "../../components/Ready";
import { Helmet } from "react-helmet";
import Grow from "../../components/Grow";
import Service from "../../components/Service";
import Insights from "../../components/Insights";
import TimeTracker from "../../components/TimeTracker";
import LeadGeneration from "../../components/LeadGeneration";
import { motion } from "framer-motion";

const Product = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Helmet>
          <title>Məhsullar</title>
        </Helmet>
        <Navbar />

        <Grow />
        <Logos />
        <Service />
        <Insights />
        <TimeTracker />
        <LeadGeneration />
        <Features />
        <Ready />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Product;
