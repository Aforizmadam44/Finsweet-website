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
const Product = () => {
  return (
    <div>
      <Helmet>
        <title>Məhsullar</title>
      </Helmet>
      <Navbar />
      <Grow />
      <Logos className="my-20" />
      <Service />
      <Insights />
      <TimeTracker />
      <LeadGeneration />
      <Features />
      <Ready />
      <Footer />
    </div>
  );
};

export default Product;
