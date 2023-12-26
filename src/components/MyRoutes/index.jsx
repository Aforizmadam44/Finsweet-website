import HomePage from "../../pages/HomePage/index";
import ErrorPage from "../../pages/ErrorPage/index";
import Product from "../../pages/Product/index";
import Contact from "../../pages/Contact/index";
import Blog from "../../pages/Blog/index";
import Pricing from "../../pages/Pricing/index";
import AboutUs from "../../pages/AboutUs/index";
import FreeTrial from "../../pages/FreeTrial/index";

export const MyRoutes = [
  { id: 1, path: "/", element: <HomePage />, title: "Ana səhifə" },
  {
    id: 2,
    path: "/product",
    element: <Product />,
    title: "Məhsullar",
  },
  { id: 3, path: "/pricing", element: <Pricing />, title: "Qiymətləndirmə" },
  { id: 4, path: "/blog", element: <Blog />, title: "Bloq" },
  { id: 5, path: "/contact", element: <Contact />, title: "Əlaqə" },
  {
    id: 6,
    path: "/aboutUs",
    element: <AboutUs />,
    title: "Haqqımızda",
  },
  {
    id: 7,
    path: "/freeTrial",
    element: <FreeTrial />,
    title: "Ödənişsiz sınaq",
  },
  { id: 8, path: "*", element: <ErrorPage /> },
];
