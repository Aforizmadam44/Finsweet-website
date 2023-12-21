import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Ready from "../../components/Ready";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Bloq</title>
      </Helmet>
      <Navigation />
      <Ready />
      <Footer />
    </div>
  );
};

export default Blog;
