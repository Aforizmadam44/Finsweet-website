import Button from "../Button";
import { motion } from "framer-motion";
const Ready = () => {
  return (
    <motion.div
      className="container my-24  text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <p className="text-4xl font-bold w-[40%] mx-auto">
        Biznesinizi bizimlə böyütməyə hazırsınız?
      </p>
      <p className="my-6">
        Elə isə başlanğıc standart və platinium paketlərə nəzər edin:
      </p>
      <Button title={"Qiymətləri gör"} to={"/pricing"} />
    </motion.div>
  );
};

export default Ready;
