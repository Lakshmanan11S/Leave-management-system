// import "bootstrap-icons/font/bootstrap-icons.css";
// import "../../Styles/Sidebar.css";
// import { MdHome } from "react-icons/md";
// import { FaUsersCog } from "react-icons/fa";
// import { FaUserCheck } from "react-icons/fa6";
// import { MdVerifiedUser } from "react-icons/md";
// import { FaUserPlus } from "react-icons/fa";
// import { FaKey } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { useEffect, useState } from "react";

// const Sidebar = () => {
//   const [sidelist, setSidelist] = useState(true);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 576) {
//         setSidelist(false);
//       } else {
//         setSidelist(true);
//       }
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   return (
//     <div className="overmain">
//     <div className="main-div">
//     <GiHamburgerMenu className="Log" onClick={() => setSidelist(!sidelist)} />
//     </div>
//     <hr style={{color:'white'}}></hr>

//       {sidelist && (
//         <div className="sidemenu active ">
//           <ul className="list">
//             <li>
//               <a href="/dashboard ">
//                 <MdHome />
//                 Dashboard
//               </a>
//             </li>

//                 <li>
//               <a href="/manageusers">
//                 <FaUsersCog />
//                 Manage Users
//               </a>
//             </li>
//             <li>
//               <a href="/manageleaves">
//                 <FaUserCheck />
//                 Manage Leaves
//               </a>
//             </li>

//             <li>
//               <a href="/applyleave">
//                 <MdVerifiedUser />
//                 Apply Leave
//               </a>
//             </li>
//             <li>
//               <a href="/myleaves">
//                 <FaUserPlus />
//                 My Leaves
//               </a>
//             </li>
//             <li>
//               <a href="/newpassword">
//                 <FaKey />
//                 Change Password
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;

import React, { useEffect, useState } from "react";
import { MdHome } from "react-icons/md";
import { USER_TYPES, CURRENT_USER_TYPE } from "../UserType/Usertype";
import { FaUsersCog } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "../../Styles/Sidebar.css";

export const Sidebar = () => {
  const [sidelist, setSidelist] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setSidelist(false);
      } else {
        setSidelist(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdHome />,
      show:
        CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER ||
        CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER,
    },
    {
      path: "/manageusers",
      name: "Manage Users",
      icon: <FaUsersCog />,
      show: CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER,
    },
    {
      path: "/manageleaves",
      name: "Manage Leaves",
      icon: <FaUserCheck />,
      show: CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER,
    },
    {
      path: "/applyleave",
      name: "Apply Leave",
      icon: <MdVerifiedUser />,
      show:
        CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER ||
        CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER,
    },
    {
      path: "/myleaves",
      name: "My Leaves",
      icon: <FaUserPlus />,
      show:
        CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER ||
        CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER,
    },
    {
      path: "/newpassword",
      name: "Change Password",
      icon: <FaKey />,
      show:
        CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER ||
        CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER,
    },
  ];

  return (
    <div className="overmain">
      <div className="main-div d-flex justify-content-around align-items-center py-2">
        <h3 className="color-white" style={{ color: "white" }}>
          ENS
        </h3>
        <GiHamburgerMenu
          className="Log"
          onClick={() => setSidelist(!sidelist)}
        />
      </div>
      <hr style={{ color: "white" }} />
      {sidelist && (
        <div className="sidemenu active">
          <ul className="list">
            {items
              .filter((item) => item.show)
              .map((item, index) => (
                <Link to={item.path} key={index}>
                  <li>
                    {item.icon}
                    <span> {item.name}</span>
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
