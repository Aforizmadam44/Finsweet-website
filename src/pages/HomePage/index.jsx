import Solution from "../../components/Solution";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Difference from "../../components/Difference";
import Impression from "../../components/Impression";
import Logos from "../../components/Logos";
import Features from "../../components/Features";
import Discover from "../../components/Discover";
import Result from "../../components/Result";

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Solution />
      <Difference />
      <Impression />
      <Logos />
      <Discover />
      <Features />
      <Result />
    </div>
  );
};

export default HomePage;
