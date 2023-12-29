import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Ready from "../../components/Ready";
import DropUs from "../../components/DropUs";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Əlaqə</title>
      </Helmet>
      <Navbar />
      <DropUs />
      <Ready />
      <Footer />
    </div>
  );
};

export default Contact;
