import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Ready from "../../components/Ready";

const FreeTrial = () => {
  return (
    <div>
      <Helmet>
        <title>Ödənişsiz sına</title>
      </Helmet>
      <Navigation />
      <Ready />
      <Footer />
    </div>
  );
};

export default FreeTrial;
