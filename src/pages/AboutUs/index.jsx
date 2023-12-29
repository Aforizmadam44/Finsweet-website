import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Ready from "../../components/Ready";
import AboutTitle from "../../components/AboutTitle";
import Goals from "../../components/Goals";
import Corporate from "../../components/Corporate";
import Team from "../../components/Team";
import Navbar from "../../components/Navbar/Navbar";

const AboutUs = () => {
  return (
    <div>
      {" "}
      <Helmet>
        <title>Haqqımızda</title>
      </Helmet>
      <Navbar />
      <AboutTitle />
      <Goals />
      <Corporate />
      <Team />
      <Ready />
      <Footer />
    </div>
  );
};

export default AboutUs;
