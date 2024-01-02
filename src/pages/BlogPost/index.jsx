import Navbar from "../../components/Navbar/Navbar";
import Ready from "../../components/Ready";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
const BlogPost = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Navbar />
        <Ready />
        <Footer />
      </motion.div>
    </div>
  );
};

export default BlogPost;
