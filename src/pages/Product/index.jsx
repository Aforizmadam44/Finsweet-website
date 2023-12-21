import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Logos from "../../components/Logos";
import Features from "../../components/Features";
import Ready from "../../components/Ready";
import { Helmet } from "react-helmet";
const Product = () => {
  return (
    <div>
      <Helmet>
        <title>Məhsullar</title>
      </Helmet>
      <Navigation />
      <Logos />
      <Features />
      <Ready />
      <Footer />
    </div>
  );
};

export default Product;
