import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Ready from "../../components/Ready";
import DropUs from "../../components/DropUs";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Helmet>
          <title>Əlaqə</title>
        </Helmet>
        <Navbar />
        <DropUs />
        <Ready />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Contact;
