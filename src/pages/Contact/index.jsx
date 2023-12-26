import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Ready from "../../components/Ready";
import DropUs from "../../components/DropUs";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Əlaqə</title>
      </Helmet>
      <Navigation />
      <DropUs />
      <Ready />
      <Footer />
    </div>
  );
};

export default Contact;
