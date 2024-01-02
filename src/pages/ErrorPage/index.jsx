import { Helmet } from "react-helmet";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";
const ErrorPage = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Navbar />
        <Helmet>
          <title>404 Xəta</title>
        </Helmet>
        <div className="flex flex-col items-center gap-2 my-10">
          <p className="text-6xl font-semibold">404 </p>
          <img src="./404.jpg" alt="" className="h-[50vh]" />
          <p className="text-6xl font-semibold mb-6">Səhifə tapılmadı!!!</p>
          <Button
            title={"Ana səhifəyə keç"}
            to={"/"}
            bg={"bg-slate-50"}
            color={"text-primary"}
          />
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default ErrorPage;
