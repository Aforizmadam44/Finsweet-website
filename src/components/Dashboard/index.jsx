import DashboardLinks from "../DashboardLinks";
import DashboardNavbar from "../DashboardNavbar";
import DashboardCards from "../DashboardCards";
import DashboardProjects from "../DashboardProjects";
import DashboardCompanies from "../DashboardCompanies";

const Dashboard = () => {
  return (
    <div className=" sm:block  border-2  container  xl:w-[80%] lg:w-[50%] hidden border-slate-300 shadow-lg mx-auto p-8 rounded-xl">
      <DashboardNavbar />
      <div className="flex justify-evenly">
        <DashboardLinks />
        <DashboardCards />
        <DashboardProjects />
      </div>
      <DashboardCompanies />
    </div>
  );
};

export default Dashboard;
