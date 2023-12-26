import DashboardLinks from "../DashboardLinks";
import DashboardNavbar from "../DashboardNavbar";
import DashboardCards from "../DashboardCards";
import DashboardProjects from "../DashboardProjects";
import DashboardCompanies from "../DashboardCompanies";

const Dashboard = () => {
  return (
    <div className="w-[80%] border-slate-300 shadow-lg mx-auto p-16 rounded-lg">
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
