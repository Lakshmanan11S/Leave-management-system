// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Login from "./Pages/Login/Login";
// import Dashboard from "./Pages/Dashboard/Dashboard";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Manageusers from "./Pages/Mangae Users/Manageusers";
// import Manageleaves from "./Pages/Manage Leaves/Manageleaves";
// import Myleaves from "./Pages/Myleaves/Myleaves";
// import Newpassword from "./Pages/Newpasword/Newpassword";
// import Applyleave from "./Pages/Applyleave/Applyleave";
// import Layout from "./Layout/Layout";
// import PublicRouter from "./Router/PublicRouter";
// import UserRouter from "./Router/UserRouter";
// import { USER_TYPES, CURRENT_USER_TYPE } from '../src/Components/UserType/Usertype'
// import AdminRouter from "./Router/AdminRouter";
// import Register from "./Pages/Register/Register";

// function App() {

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<PublicRouter><Register/></PublicRouter>}/>
//         <Route path="/login" element={<PublicRouter><Login /></PublicRouter>} />
//         <Route path="/dashboard" element={<UserRouter><Dashboard /></UserRouter>} />
//         <Route
//           path="/manageusers"
//           element={<AdminRouter><Layout>
//             <Manageusers />
//           </Layout></AdminRouter>

//           }
//         />
//         <Route
//           path="/manageleaves"
//           element={<AdminRouter><Layout>
//             <Manageleaves />
//           </Layout></AdminRouter>

//           }
//         />
//         <Route
//           path="/applyleave"
//           element={<UserRouter> <Layout>
//             <Applyleave />
//           </Layout></UserRouter>

//           }
//         />
//         <Route
//           path="/myleaves"
//           element={<UserRouter> <Layout>
//             <Myleaves />
//           </Layout></UserRouter>

//           }
//         />
//         <Route
//           path="/newpassword"
//           element={<UserRouter><Layout>
//             <Newpassword />
//           </Layout></UserRouter>

//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import {Routes,Route} from 'react-router-dom'
// import { AdminRoutes, UserRoutes, publicRoutes } from './Router/Allroutes';
// import { useSelector } from 'react-redux';
// import React from 'react';
// import ProtectedAuth from './Router/ProductedAuth';

// const App = () => {

//   const userType = useSelector((state: unknown) => state.Login.userType);
//   const getAuthenticatedRoutes =()=>{
//     if(userType ==='Admin'){
//       return AdminRoutes;
//     }else if(userType === 'User'){
//       return UserRoutes
//     }else{
//       return []
//     }
//   }

//   const authProtectedRoutes = getAuthenticatedRoutes();

//   return (
//     <React.Fragment>
//       <Routes>
//         {publicRoutes.map((route,idx)=>(
//           <Route path={route.path} key={idx} element={route.element}/>
//         ))}
//       </Routes>
//       <Routes>
//         {authProtectedRoutes.map((route,idx)=>(
//           <Route path={route.path} key={idx} element={<React.Fragment> <ProtectedAuth>{route.element}</ProtectedAuth></React.Fragment>}/>
//         ))}
//       </Routes>
//     </React.Fragment>
//   )
// }

// export default App

// app.tsx

// import { Routes, Route } from 'react-router-dom';
// import { AdminRoutes, UserRoutes, publicRoutes } from './Router/Allroutes';
// import { useSelector } from 'react-redux';
// import React from 'react';
// import ProtectedAuth from '../src/Router/ProductedAuth';

// const App = () => {
//   const userType = useSelector((state: unknown) => state.Login.userType);

//   const getAuthenticatedRoutes = () => {
//     if (userType === 'Admin') {
//       return AdminRoutes;
//     } else if (userType === 'User') {
//       return UserRoutes;
//     } else {
//       return [];
//     }
//   }

//   const authProtectedRoutes = getAuthenticatedRoutes();

//   return (
//     <React.Fragment>
//       <Routes>
//         {publicRoutes.map((route, idx) => (
//           <Route path={route.path} key={idx} element={route.element} />
//         ))}
//         {authProtectedRoutes.map((route, idx) => (
//           <Route path={route.path} key={idx} element={<ProtectedAuth>{route.element}</ProtectedAuth>} />
//         ))}
//       </Routes>
//     </React.Fragment>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Manageusers from "./Pages/Mangae Users/Manageusers";
import Manageleaves from "./Pages/Manage Leaves/Manageleaves";
import Myleaves from "./Pages/Myleaves/Myleaves";
import Newpassword from "./Pages/Newpasword/Newpassword";
import Applyleave from "./Pages/Applyleave/Applyleave";
import Layout from "./Layout/Layout";
import PublicRouter from "./Router/PublicRouter";
import UserRouter from "./Router/UserRouter";
import AdminRouter from "./Router/AdminRouter";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRouter>
              <Register />
            </PublicRouter>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRouter>
              <Login />
            </PublicRouter>
          }
        />
        <Route
          path="/dashboard"
          element={
            <UserRouter>
              <Dashboard />
            </UserRouter>
          }
        />
        <Route
          path="/manageusers"
          element={
            <AdminRouter>
              <Layout>
                <Manageusers />
              </Layout>
            </AdminRouter>
          }
        />
        <Route
          path="/manageleaves"
          element={
            <AdminRouter>
              <Layout>
                <Manageleaves />
              </Layout>
            </AdminRouter>
          }
        />
        <Route
          path="/applyleave"
          element={
            <UserRouter>
              {" "}
              <Layout>
                <Applyleave />
              </Layout>
            </UserRouter>
          }
        />
        <Route
          path="/myleaves"
          element={
            <UserRouter>
              {" "}
              <Layout>
                <Myleaves />
              </Layout>
            </UserRouter>
          }
        />
        <Route
          path="/newpassword"
          element={
            <UserRouter>
              <Layout>
                <Newpassword />
              </Layout>
            </UserRouter>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
