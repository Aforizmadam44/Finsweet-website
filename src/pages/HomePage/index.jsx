import Solution from "../../components/Solution";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar/Navbar";
import Difference from "../../components/Difference";
import Impression from "../../components/Impression";
import Logos from "../../components/Logos";
import Features from "../../components/Features";
import Discover from "../../components/Discover";
import Result from "../../components/Result";
import Ready from "../../components/Ready";
import Footer from "../../components/Footer";
import Dashboard from "../../components/Dashboard";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
const HomePage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Helmet>
          <title>Ana səhifə</title>
        </Helmet>
        <Navbar />
        <Header />
        <Dashboard />
        <Solution />
        <Difference />
        <Impression />
        <Logos />
        <Discover />
        <Features />
        <Result />
        <Ready />
        <Footer />
      </motion.div>
    </>
  );
};

export default HomePage;
