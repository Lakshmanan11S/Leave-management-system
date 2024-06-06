


// const UserRouter = ({children}) => {
//     if(CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER ||CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER ){
//         return <>{children}</>
//     }else{
//         return <div>you not access this page</div>
//     }

// }

// export default UserRouter


import { Navigate } from "react-router-dom";
import { USER_TYPES, CURRENT_USER_TYPE } from "../Components/UserType/Usertype"

const UserRouter = ({ children }) => {
  if (CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER || CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) {
    return <>{children}</>;
  } else {
    return <>not access you</>
  }
};

export default UserRouter;
