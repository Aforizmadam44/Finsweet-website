import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Ready from "../../components/Ready";

const Pricing = () => {
  return (
    <div>
      <Helmet>
        <title>Qiymətləndirmə</title>
      </Helmet>
      <Navigation />
      <Ready />
      <Footer />
    </div>
  );
};

export default Pricing;
