import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Ready from "../../components/Ready";
import FreeTrialTitle from "../../components/FreeTrialTitle";

const FreeTrial = () => {
  return (
    <div>
      <Helmet>
        <title>Ödənişsiz sına</title>
      </Helmet>
      <Navigation />
      <FreeTrialTitle />
      <Ready />
      <Footer />
    </div>
  );
};

export default FreeTrial;
