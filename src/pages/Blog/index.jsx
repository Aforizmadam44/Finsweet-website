import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Ready from "../../components/Ready";
import LatestBlog from "../../components/LatestBlog";
import AllPost from "../../components/AllPost";
import Navbar from "../../components/Navbar/Navbar";
const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Bloq</title>
      </Helmet>
      <Navbar />
      <LatestBlog />
      <AllPost />
      <Ready />
      <Footer />
    </div>
  );
};

export default Blog;
