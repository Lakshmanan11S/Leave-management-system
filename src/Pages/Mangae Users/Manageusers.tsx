// import { useEffect, useState } from "react";
// import "../../Styles/Manageusers.css";
// import Usercreate from "../../Components/UserCreate/Usercreate";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
// import Teamleaderedit from "../../Module/Teamleaderedit";

// interface teamLeaderDatas {
//   _id: string;
//   Firstname: string;
//   Lastname: string;
//   Email: string;
//   Role: string;
// }

// const Manageusers = () => {
//   const [edit, setEdit] = useState(false);
//   const [teamLeaderData, setTeamLeaderData] = useState<teamLeaderDatas[]>([]);
//   const [teamleaderEdit, setTeamLeaderEdit] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:4000/api/getallteamleader"
//         );
//         if (response.data && Array.isArray(response.data.data)) {
//           setTeamLeaderData(response.data.data);
//         } else {
//           console.error("Unexpected API response structure:", response.data);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="manageuser">
//       <div className="manageuser-top-section shadow">
//         <h3>Manage User</h3>
//         <button onClick={() => setEdit(true)} className="btn btn-primary">
//           Team Leader Creation
//         </button>
//       </div>
//       <div className="manageuser-bottom-section shadow">
//         <table className="main-table">
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {teamLeaderData.map((data, index) => (
//               <tr key={data._id}>
//                 <td>{index + 1}</td>
//                 <td>{data.Firstname + data.Lastname}</td>
//                 <td>{data.Email}</td>
//                 <td>{data.Role}</td>
//                 <td className="editoption">
//                   <FontAwesomeIcon
//                     icon={faPenToSquare}
//                     style={{ cursor: "pointer" }}
//                     onClick={() => setTeamLeaderEdit(true)}
//                   />
//                   <FontAwesomeIcon
//                     icon={faTrash}
//                     style={{ cursor: "pointer" }}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {edit && <Usercreate show={edit} setShow={setEdit} />}
//       {teamleaderEdit && (
//         <Teamleaderedit show={teamleaderEdit} setShow={setTeamLeaderEdit} />
//       )}
//     </div>
//   );
// };

// export default Manageusers;

import { useEffect, useState } from "react";
import "../../Styles/Manageusers.css";
import Usercreate from "../../Components/UserCreate/Usercreate";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Teamleaderedit from "../../Module/Teamleaderedit";
import toast, { Toaster } from "react-hot-toast";

interface teamLeaderDatas {
  _id: string;
  Firstname: string;
  Lastname: string;
  Email: string;
  Role: string;
}

const Manageusers = () => {
  const [edit, setEdit] = useState(false);
  const [teamLeaderData, setTeamLeaderData] = useState<teamLeaderDatas[]>([]);
  const [teamleaderEdit, setTeamLeaderEdit] = useState(false);
  const [selectedTeamLeader, setSelectedTeamLeader] =
    useState<teamLeaderDatas | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/getallteamleader"
      );
      if (response.data && Array.isArray(response.data.data)) {
        setTeamLeaderData(response.data.data);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditClick = (teamLeader: teamLeaderDatas) => {
    setSelectedTeamLeader(teamLeader);
    setTeamLeaderEdit(true);
  };
  const handleDeleteClick = async (teamleaderid: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/deleteteamleader/${teamleaderid}`
      );
      toast.success(response.data.message, { position: "top-right" });
      setTeamLeaderData((prevData) =>
        prevData.filter((item) => item._id !== teamleaderid)
      );
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="manageuser">
      <div className="manageuser-top-section shadow">
        <h3>Manage User</h3>
        <button onClick={() => setEdit(true)} className="btn btn-primary">
          Team Leader Creation
        </button>
      </div>
      <div className="manageuser-bottom-section shadow">
        <table className="main-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teamLeaderData.map((data, index) => (
              <tr key={data._id}>
                <td>{index + 1}</td>
                <td>
                  {data.Firstname}
                  {data.Lastname}
                </td>
                <td>{data.Email}</td>
                <td>{data.Role}</td>
                <td className="editoption">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleEditClick(data)}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDeleteClick(data._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {edit && (
        <Usercreate show={edit} setShow={setEdit} onUpdate={fetchData} />
      )}
      {teamleaderEdit && (
        <Teamleaderedit
          show={teamleaderEdit}
          setShow={setTeamLeaderEdit}
          teamleaderData={selectedTeamLeader}
          onUpdate={fetchData}
        />
      )}
      <Toaster />
    </div>
  );
};

export default Manageusers;
