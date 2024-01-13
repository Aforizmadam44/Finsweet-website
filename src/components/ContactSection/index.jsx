import { FaInstagramSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { TiSocialYoutube } from "react-icons/ti";
import { Link } from "react-router-dom";
const ContactSection = () => {
  return (
    <div className="w-[80%] mx-auto rounded-xl shadow-xl my-28 p-6">
      <div className="rounded-xl flex flex-col items-center text-center">
        <div>
          <p className="text-2xl font-semibold ">Sosyal medyada biz:</p>
          <p className="text-slate-500 my-6">
            Bizləri izləməyi və bildirişlərdən xəbərdar olmağı unutmayın.{" "}
          </p>
        </div>
        <div className="w-full grid grid-cols-1  md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 gap-6 justify-center items-center">
          <Link
            to={"https://www.instagram.com/finsweet"}
            className="  flex
            flex-col
            items-center hover:scale-110 py-2 rounded-2xl hover:shadow-xl  transition-all duration-500
       "
          >
            <FaInstagramSquare className="w-6 h-6  " />
            <p className="text-sm text-slate-500">
              https://www.instagram.com/finsweet
            </p>
          </Link>
          <Link
            to={"https://www.linkedin.com/finsweet"}
            className="  flex
            flex-col
            items-center hover:scale-110 py-2 rounded-2xl hover:shadow-xl  transition-all duration-500
          "
          >
            <GrLinkedin className="w-6 h-6  " />
            <p className="text-sm text-slate-500">
              https://www.linkedin.com/finsweet
            </p>
          </Link>
          <Link
            to={"https://www.facebook.com/finsweet"}
            className="  flex
            flex-col
            items-center hover:scale-110 py-2 rounded-2xl hover:shadow-xl  transition-all duration-500
         "
          >
            <FaFacebookSquare className="w-6 h-6 " />
            <p className="text-sm text-slate-500">
              https://www.facebook.com/finsweet
            </p>
          </Link>
          <Link
            to={"https://www.twitter.com/finsweet"}
            className="  flex
            flex-col
            items-center hover:scale-110 py-2 rounded-2xl hover:shadow-xl  transition-all duration-500
       "
          >
            {" "}
            <FaTwitterSquare className="w-6 h-6 " />
            <p className="text-sm text-slate-500">
              https://www.twitter.com/finsweet
            </p>
          </Link>
          <Link
            to={"https://www.whatsapp.com/finsweet"}
            className="flex
            flex-col
            items-center hover:scale-110 py-2 rounded-xl hover:shadow-xl  transition-all duration-500
          "
          >
            <FaSquareWhatsapp className="w-6 h-6" />
            <p className="text-sm text-slate-500">
              https://www.whatsapp.com/finsweet
            </p>
          </Link>
          <Link
            to={"https://www.youtube.com/finsweet"}
            className="flex
            flex-col
            items-center hover:scale-110 py-2 rounded-xl hover:shadow-xl  transition-all duration-500
          "
          >
            <TiSocialYoutube className="w-6 h-6" />
            <p className="text-sm text-slate-500">
              https://www.youtube.com/finsweet
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
