import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Router>
        <div className=" flex justify-between mx-14 my-6">
          <Link to="/">
            <img src="./Logo.png" alt="" />
          </Link>
          <div className="links flex gap-4">
            <Link to="/">Ana səhifə</Link>
            <Link to="/product">Məhsullar</Link>
            <Link to="/pricing">Qiymətləndirmə</Link>
            <Link to="/aboutUs">Haqqımızda</Link>
            <Link to="/blog">Bloq</Link>
            <Link to="/contact">Əlaqə</Link>
            <Link to="/freeTrial">Ödənişsiz sınaq </Link>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Navbar;
