// import { Modal } from "react-bootstrap";
// import "../Styles/Teamleaderedit.css";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";

// const Teamleaderedit = (props: {
//   show: boolean | undefined;
//   setShow: (arg0: boolean) => void;
// }) => {
//   const teamleaders = {
//     Email: "",
//     Role: "",
//   };
//   const [teamleaderformData, setTeamleaderFormData] = useState(teamleaders);

//   const { id } = useParams();
//   const inputchange = (e) => {
//     const { name, value } = e.target;
//     setTeamleaderFormData({ ...teamleaderformData, [name]: value });
//   };
//   console.log(teamleaderformData);
//   useEffect(() => {
//     axios
//       .get(`http://localhost:4000/api/teamleaderedit/${id}`)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [id]);

//   const updatesubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(
//         `http://localhost:4000/api/teamleaderupdate/${id}`,
//         teamleaders
//       );
//       toast.success(response.data.message, { position: "top-right" });
//     } catch (error) {
//       toast.error("An error acquired", { position: "top-right" });
//     }
//   };

//   return (
//     <Modal
//       className="main-modal"
//       show={props.show}
//       onHide={() => props.setShow(false)}
//     >
//       <Modal.Header closeButton className="modal-head">
//         <h3>Edit</h3>
//       </Modal.Header>
//       <Modal.Body>
//         <form className="modal-form" onSubmit={updatesubmit}>
//           <div>
//             <label>Email</label>
//             <input
//               name="Email"
//               type="text"
//               id="Email"
//               value={teamleaderformData.Email}
//               onChange={inputchange}
//             ></input>
//           </div>

//           <div>
//             <label>Role</label>
//             <input
//               name="Role"
//               type="text"
//               id="Role"
//               value={teamleaderformData.Role}
//               onChange={inputchange}
//             ></input>
//           </div>
//           <div className="modal-button">
//             <button className="btn btn-primary">Update</button>
//           </div>
//         </form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default Teamleaderedit;

import { Modal } from "react-bootstrap";
import "../Styles/Teamleaderedit.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Teamleaderedit = (props: {
  show: boolean | undefined;
  setShow: (arg0: boolean) => void;
  teamleaderData: { Email: string; Role: string } | null;
  onUpdate: () => void;
}) => {
  const [teamleaderformData, setTeamleaderFormData] = useState({
    Email: "",
    Role: "",
  });

  useEffect(() => {
    if (props.teamleaderData) {
      setTeamleaderFormData(props.teamleaderData);
    }
  }, [props.teamleaderData]);

  const inputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTeamleaderFormData({ ...teamleaderformData, [name]: value });
  };

  const updatesubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4000/api/teamleaderupdate/${props.teamleaderData?._id}`,
        teamleaderformData
      );
      toast.success(response.data.message, { position: "top-right" });
      props.setShow(false);
      props.onUpdate();
    } catch (error) {
      toast.error("An error occurred", { position: "top-right" });
    }
  };

  return (
    <Modal
      className="main-modal"
      show={props.show}
      onHide={() => props.setShow(false)}
    >
      <Modal.Header closeButton className="modal-head">
        <h3>Edit</h3>
      </Modal.Header>
      <Modal.Body>
        <form className="modal-form" onSubmit={updatesubmit}>
          <div>
            <label>Email</label>
            <input
              name="Email"
              type="text"
              id="Email"
              value={teamleaderformData.Email}
              onChange={inputchange}
            ></input>
          </div>

          <div>
            <label>Role</label>
            <input
              name="Role"
              type="text"
              id="Role"
              value={teamleaderformData.Role}
              onChange={inputchange}
            ></input>
          </div>
          <div className="modal-button">
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Teamleaderedit;
