import Content from "../../Components/Content/Content";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../Styles/Dashboard.css'
const Dashboard = () => {
  return (
    <div className="row">
      <div className="side col-sm-2">
        <Sidebar />
      </div>
      <div className="content col-sm-10">
        <div className="head"><Header/></div>
        <div className="maincontent">
        <Content />
        </div>
      
      </div>
    </div>
  );
};

export default Dashboard;

