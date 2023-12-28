import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Ready from "../../components/Ready";
import LatestBlog from "../../components/LatestBlog";
import AllPost from "../../components/AllPost";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Bloq</title>
      </Helmet>
      <Navigation />
      <LatestBlog />
      <AllPost />
      <Ready />
      <Footer />
    </div>
  );
};

export default Blog;
