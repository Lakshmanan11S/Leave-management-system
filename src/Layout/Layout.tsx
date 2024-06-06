import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";


const Layout: React.FC = ({ children }) => {
  return (
    <div className="row">
      <div className="side col-sm-2">
        <Sidebar />
      </div>
      <div className="content col-sm-10">
        <div className="head">
          <Header />
        </div>
        <div className="maincontent">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
