import Offcanvas from "react-bootstrap/Offcanvas";
import "../../Styles/Usercreate.css";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Usercreate = (props) => {
  const initialstate = {
    Firstname: "",
    Lastname: "",
    Email: "",
    Role: "",
  };

  const [teamcreateformData, setteamcreateFormData] = useState(initialstate);

  const inputchange = (e) => {
    const { name, value } = e.target;
    setteamcreateFormData({ ...teamcreateformData, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/teamleadercreation",
        teamcreateformData
      );
      toast.success(response.data.message, { position: "top-right" });
      setteamcreateFormData(initialstate);
      props.setShow(false);
      props.onUpdate();
    } catch (error) {
      toast.error("An error occurred", { position: "top-right" });
    }
  };

  return (
    <div>
      <Offcanvas
        show={props.show}
        onHide={() => props.setShow(false)}
        placement="end"
      >
        <Offcanvas.Header className="off-top-section">
          <h3>Team Leader Creation</h3>
          <button
            onClick={() => props.setShow(false)}
            className="btn btn-primary"
          >
            Close
          </button>
        </Offcanvas.Header>
        <hr />
        <Offcanvas.Body>
          <form className="row g-3 canvas-content" onSubmit={handlesubmit}>
            <div className="first">
              <label htmlFor="validationDefault01" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="Firstname"
                name="Firstname"
                value={teamcreateformData.Firstname}
                onChange={inputchange}
                required
              />
            </div>
            <div className="second">
              <label htmlFor="validationDefault02" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="Lastname"
                name="Lastname"
                value={teamcreateformData.Lastname}
                onChange={inputchange}
              />
            </div>
            <div className="third">
              <label htmlFor="validationDefaultEmail" className="form-label">
                Email
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="Email"
                  aria-describedby="inputGroupPrepend2"
                  name="Email"
                  value={teamcreateformData.Email}
                  onChange={inputchange}
                  required
                />
              </div>
            </div>
            <div className="fourth">
              <label htmlFor="validationDefault04" className="form-label">
                Role
              </label>
              <select
                className="form-select"
                id="Role"
                name="Role"
                value={teamcreateformData.Role}
                onChange={inputchange}
                required
              >
                <option selected disabled value="">
                  Choose...
                </option>
                <option>R&D</option>
                <option>Operation</option>
                <option>Developer</option>
                <option>HR</option>
                <option>Accounts</option>
              </select>
            </div>
            <div className="fifth">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </Offcanvas.Body>
        <Toaster />
      </Offcanvas>
    </div>
  );
};

export default Usercreate;
