import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Ready from "../../components/Ready";

const AboutUs = () => {
  return (
    <div>
      {" "}
      <Helmet>
        <title>Haqqımızda</title>
      </Helmet>
      <Navigation />
      <Ready />
      <Footer />
    </div>
  );
};

export default AboutUs;
