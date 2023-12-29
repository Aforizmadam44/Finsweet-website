import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Ready from "../../components/Ready";
import FreeTrialTitle from "../../components/FreeTrialTitle";
import Navbar from "../../components/Navbar/Navbar";

const FreeTrial = () => {
  return (
    <div>
      <Helmet>
        <title>Ödənişsiz sına</title>
      </Helmet>
      <Navbar />
      <FreeTrialTitle />
      <Ready />
      <Footer />
    </div>
  );
};

export default FreeTrial;
