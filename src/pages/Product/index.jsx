import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Logos from "../../components/Logos";
import Features from "../../components/Features";
import Ready from "../../components/Ready";
import { Helmet } from "react-helmet";
import Grow from "../../components/Grow";
import Service from "../../components/Service";
import Insights from "../../components/Insights";
const Product = () => {
  return (
    <div>
      <Helmet>
        <title>Məhsullar</title>
      </Helmet>
      <Navigation />
      <Grow />
      <Logos className="my-20" />
      <Service />
      <Insights />
      <Features />
      <Ready />
      <Footer />
    </div>
  );
};

export default Product;
