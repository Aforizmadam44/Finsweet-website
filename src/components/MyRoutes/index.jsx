import HomePage from "../../pages/HomePage/index";
import ErrorPage from "../../pages/ErrorPage/index";
import Product from "../../pages/Product/index";
import Contact from "../../pages/Contact/index";
import Blog from "../../pages/Blog/index";
import Pricing from "../../pages/Pricing/index";
import AboutUs from "../../pages/AboutUs/index";
import Trial from "../../pages/Trial/index";
import AllPostDetails from "../AllPostDetails";
import DiscoverDetails from "../DiscoverDetails";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

export const MyRoutes = [
  { id: 1, path: "/", element: <HomePage />, title: "Ana səhifə" },
  {
    id: 2,
    path: "/product",
    element: <Product />,
    title: "Məhsullar",
  },
  { id: 3, path: "/pricing", element: <Pricing />, title: "Qiymətləndirmə" },
  { id: 4, path: "/aboutUs", element: <AboutUs />, title: "Haqqımızda" },
  { id: 5, path: "/contact", element: <Contact />, title: "Əlaqə" },
  {
    id: 6,
    path: "/blog",
    element: <Blog />,
    title: "Bloq",
  },
  {
    id: 7,
    path: "/AllPostDetails/:id",
    element: <AllPostDetails />,
  },
  {
    id: 8,
    path: "/trial",
    element: <Trial />,
    title: "Sifariş et ",
  },
  {
    id: 9,
    path: "/signIn",
    element: <SignIn />,
  },
  {
    id: 10,
    path: "/signUp",
    element: <SignUp />,
  },
  {
    id: 11,
    path: "/DiscoverDetails/:id",
    element: <DiscoverDetails />,
  },
  { id: 11, path: "*", element: <ErrorPage /> },
];
