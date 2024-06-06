// import { useEffect, useState } from "react";
// import "../../Styles/ManageLeave.css";
// import axios from "axios";
// import {
//   faCircleCheck,
//   faRectangleXmark,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// interface leavedetails {
//   _id: string;
//   fromDate: string;
//   toDate: string;
//   leaveType: string;
//   leaveReason: string;
// }
// const Manageleaves = () => {
//   const [leavedetails, setLeavedetails] = useState<leavedetails[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:4000/api/getallapplyleave"
//         );
//         if (response.data && Array.isArray(response.data.data)) {
//           setLeavedetails(response.data.data);
//         } else {
//           console.log("api error found", response.data);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <div className="manageleave">
//       <div className="manageleave-top-section shadow">
//         <h3>Manage Leaves</h3>
//       </div>
//       <div className="manageleave-bottom-section shadow">
//         <table className="manage-main-table">
//           <thead>
//             <tr>
//               <th>S.NO</th>
//               <th>Name</th>
//               <th>From Date</th>
//               <th>To Date</th>
//               <th>No Of Days</th>
//               <th>Leave Type</th>
//               <th>Reason</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leavedetails.map((data, index) => (
//               <tr key={data._id}>
//                 <td>{index + 1}</td>
//                 <td>sundhar</td>
//                 <td>{data.fromDate}</td>
//                 <td>{data.toDate}</td>
//                 <td>3</td>
//                 <td>{data.leaveType}</td>
//                 <td>{data.leaveReason}</td>
//                 <td>
//                   <div className="icons">
//                     <FontAwesomeIcon
//                       icon={faCircleCheck}
//                       className="text-success"
//                     />
//                     <FontAwesomeIcon
//                       icon={faRectangleXmark}
//                       className="text-danger"
//                     />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Manageleaves;

import { useEffect, useState } from "react";
import "../../Styles/ManageLeave.css";
import axios from "axios";
import {
  faCircleCheck,
  faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface leavedetails {
  _id: string;
  fromDate: string;
  toDate: string;
  leaveType: string;
  leaveReason: string;
}
const Manageleaves = () => {
  const [leavedetails, setLeavedetails] = useState<leavedetails[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/getallapplyleave"
        );
        if (response.data && Array.isArray(response.data.data)) {
          setLeavedetails(response.data.data);
        } else {
          console.log("api error found", response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="manageleave">
      <div className="manageleave-top-section shadow">
        <h3>Manage Leaves</h3>
      </div>
      <div className="manageleave-bottom-section shadow">
        <table className="manage-main-table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Name</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>No Of Days</th>
              <th>Leave Type</th>
              <th>Reason</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leavedetails.map((data, index) => (
              <tr key={data._id}>
                <td>{index + 1}</td>
                <td>sundhar</td>
                <td>{data.fromDate}</td>
                <td>{data.toDate}</td>
                <td>3</td>
                <td>{data.leaveType}</td>
                <td>{data.leaveReason}</td>
                <td>
                  <div className="icons">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-success"
                    />
                    <FontAwesomeIcon
                      icon={faRectangleXmark}
                      className="text-danger"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manageleaves;
