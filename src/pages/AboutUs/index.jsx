import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Ready from "../../components/Ready";
import AboutTitle from "../../components/AboutTitle";
import Goals from "../../components/Goals";
import Corporate from "../../components/Corporate";
import Team from "../../components/Team";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <div>
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Helmet>
          <title>Haqqımızda</title>
        </Helmet>
        <Navbar />
        <AboutTitle />
        <Goals />
        <Corporate />
        <Team />
        <Ready />
        <Footer />
      </motion.div>
    </div>
  );
};

export default AboutUs;
