import Solution from "../../components/Solution";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Difference from "../../components/Difference";
import Impression from "../../components/Impression";
import Logos from "../../components/Logos";
import Features from "../../components/Features";
import Discover from "../../components/Discover";
import Result from "../../components/Result";
import Ready from "../../components/Ready";
import Footer from "../../components/Footer";
import Dashboard from "../../components/Dashboard";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Ana səhifə</title>
      </Helmet>
      <Navigation />
      <Header />
      <Dashboard />
      <Solution />
      <Difference />
      <Impression />
      <Logos />
      <Discover />
      <Features />
      <Result />
      <Ready />
      <Footer />
    </div>
  );
};

export default HomePage;
