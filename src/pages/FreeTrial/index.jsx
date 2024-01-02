import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Ready from "../../components/Ready";
import FreeTrialTitle from "../../components/FreeTrialTitle";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";
const FreeTrial = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Helmet>
          <title>Ödənişsiz sına</title>
        </Helmet>
        <Navbar />
        <FreeTrialTitle />
        <Ready />
        <Footer />
      </motion.div>
    </div>
  );
};

export default FreeTrial;
