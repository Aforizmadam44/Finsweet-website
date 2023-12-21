import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Ready from "../../components/Ready";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Əlaqə</title>
      </Helmet>
      <Navigation />
      <Ready />
      <Footer />
    </div>
  );
};

export default Contact;
