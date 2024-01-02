import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Ready from "../../components/Ready";
import LatestBlog from "../../components/LatestBlog";
import AllPost from "../../components/AllPost";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";
const Blog = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Helmet>
          <title>Bloq</title>
        </Helmet>
        <Navbar />
        <LatestBlog />
        <AllPost />
        <Ready />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Blog;
