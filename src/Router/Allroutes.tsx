// // // import { Navigate } from "react-router-dom";
// // // import Layout from "../Layout/Layout";
// // // import Applyleave from "../Pages/Applyleave/Applyleave";
// // // import Dashboard from "../Pages/Dashboard/Dashboard";
// // // import Login from "../Pages/Login/Login";
// // // import Manageleaves from "../Pages/Manage Leaves/Manageleaves";
// // // import Manageusers from "../Pages/Mangae Users/Manageusers";
// // // import Myleaves from "../Pages/Myleaves/Myleaves";
// // // import Newpassword from "../Pages/Newpasword/Newpassword";




// // // const AdminRoutes =[
// // //     {path:"/dashboard", element:<Dashboard />},
// // //     { path:"/manageusers",element:<Layout><Manageusers /></Layout>},
// // //     { path:"/manageleaves",element:<Layout><Manageleaves /></Layout>},
// // //     { path:"/applyleave",element:<Layout><Applyleave /></Layout>},
// // //     { path:"/myleaves",element:<Layout><Myleaves /></Layout>},
// // //     { path:"/newpassword",element:<Layout><Newpassword /></Layout>}
// // // ];

// // // const UserRoutes =[
// // //     {path:"/dashboard", element:<Dashboard />},
// // //     { path:"/applyleave",element:<Layout><Applyleave /></Layout>},
// // //     { path:"/myleaves",element:<Layout><Myleaves /></Layout>},
// // //     { path:"/newpassword",element:<Layout><Newpassword /></Layout>}

// // // ]
// // // const publicRoutes=[
// // //     {path:'/',exact:true ,element:<Navigate to='/login'/>},
// // //     {path: '/login', component: <Login />}
// // // ]

// // // export { AdminRoutes,UserRoutes,publicRoutes }


// // // allroute.tsx


import Layout from "../Layout/Layout";
import Applyleave from "../Pages/Applyleave/Applyleave";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Manageleaves from "../Pages/Manage Leaves/Manageleaves";
import Manageusers from "../Pages/Mangae Users/Manageusers";
import Myleaves from "../Pages/Myleaves/Myleaves";
import Newpassword from "../Pages/Newpasword/Newpassword";
import Register from "../Pages/Register/Register";

const AdminRoutes = [
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/manageusers", element: <Layout><Manageusers /></Layout> },
    { path: "/manageleaves", element: <Layout><Manageleaves /></Layout> },
    { path: "/applyleave", element: <Layout><Applyleave /></Layout> },
    { path: "/myleaves", element: <Layout><Myleaves /></Layout> },
    { path: "/newpassword", element: <Layout><Newpassword /></Layout> }
];

const UserRoutes = [
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/applyleave", element: <Layout><Applyleave /></Layout> },
    { path: "/myleaves", element: <Layout><Myleaves /></Layout> },
    { path: "/newpassword", element: <Layout><Newpassword /></Layout> }
];

const publicRoutes = [

    { path: '/', element: <Register /> },
    {path:'/login',element:<Login/>}
];


export { AdminRoutes, UserRoutes,publicRoutes, };


