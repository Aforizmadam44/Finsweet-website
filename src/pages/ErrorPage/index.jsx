import { Helmet } from "react-helmet";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

const ErrorPage = () => {
  return (
    <div>
      <Navigation />
      <Helmet>
        <title>404 Xəta</title>
      </Helmet>
      <div className="flex flex-col items-center gap-2 my-10">
        <p className="text-6xl font-semibold">404 </p>
        <img src="./404.jpg" alt="" className="h-[50vh]" />
        <p className="text-6xl font-semibold mb-6">Səhifə tapılmadı!!!</p>
        <Button title={"Ana səhifəyə keç"} to={"/"} />
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
