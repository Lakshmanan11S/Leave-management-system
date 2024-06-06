import { Navigate } from "react-router-dom";
import { USER_TYPES, CURRENT_USER_TYPE } from "../Components/UserType/Usertype"

const AdminRouter = ({ children }) => {
  if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER ) {
    return <>{children}</>;
  } else {
    return <div>you not acess this page</div>
  }
};

export default AdminRouter;