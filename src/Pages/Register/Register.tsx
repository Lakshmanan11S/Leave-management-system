// import { Link } from "react-router-dom";
// import "../../Styles/Register.css";
// import { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// const Register = () => {
//   const initialstate = {
//     username: "",
//     useremail: "",
//     userphoneno: "",
//     userpassword: "",
//   };
//   const [formData, setFormData] = useState(initialstate);

//   const inputchange = (e: { target: { name: any; value: any } }) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const handlesubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:7500/api/register",
//         formData
//       );

//       toast.success(response.data.message, { position: "top-right" });
//       setFormData(initialstate);
//     } catch (err) {
//       toast.error("An error occurred while creating the stock", {
//         position: "top-right",
//       });
//       console.log(err);
//     }
//   };

//   return (
//     <div className="row register">
//       <div className="col reg-first-section"></div>
//       <div className="col reg-second-section">
//         <div className="main-cont">
//           <h3>Register Page</h3>
//           <hr />
//           <form onSubmit={handlesubmit}>
//             <label>User Name</label>
//             <input
//               name="username"
//               value={formData.username}
//               onChange={inputchange}
//               id="username"
//               required
//             ></input>
//             <label>User Email</label>
//             <input
//               name="useremail"
//               type="email"
//               id="useremail"
//               value={formData.useremail}
//               onChange={inputchange}
//               required
//             ></input>
//             <label>User PhoneNo</label>
//             <input
//               name="userphoneno"
//               type="tel"
//               id="userphoneno"
//               value={formData.userphoneno}
//               onChange={inputchange}
//               required
//             ></input>
//             <label>User Password</label>
//             <input
//               name="userpassword"
//               type="password"
//               id="userpassword"
//               value={formData.userpassword}
//               onChange={inputchange}
//               required
//             ></input>
//             <Link to="/">
//               {" "}
//               <button className="btn btn-primary">Submit</button>
//             </Link>
//           </form>
//           <span>Already registered? Click Login</span>
//           <Link to="/login">
//             <button className="btn btn-primary">Login</button>
//           </Link>
//         </div>
//       </div>
//       <Toaster />
//     </div>
//   );
// };

// export default Register;

import { Link } from "react-router-dom";
import "../../Styles/Register.css";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const initialstate = {
    userName: "",
    userEmail: "",
    userPhoneno: "",
    userPassword: "",
  };
  const [formData, setFormData] = useState(initialstate);

  const inputchange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlesubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:40000/api/register",
        formData
      );

      toast.success(response.data.message, { position: "top-right" });
      setFormData(initialstate);
    } catch (err) {
      toast.error("An error occurred ", {
        position: "top-right",
      });
      console.log(err);
    }
  };

  return (
    <div className="row register">
      <div className="col reg-first-section"></div>
      <div className="col reg-second-section">
        <div className="main-cont">
          <h3>Register Page</h3>
          <hr />
          <form onSubmit={handlesubmit}>
            <label>User Name</label>
            <input
              name="userName"
              value={formData.userName}
              onChange={inputchange}
              id="userName"
              required
            ></input>
            <label>User Email</label>
            <input
              name="userEmail"
              type="email"
              id="userEmail"
              value={formData.userEmail}
              onChange={inputchange}
              required
            ></input>
            <label>User PhoneNo</label>
            <input
              name="userPhoneno"
              type="tel"
              id="userPhoneno"
              value={formData.userPhoneno}
              onChange={inputchange}
              required
            ></input>
            <label>User Password</label>
            <input
              name="userPassword"
              type="password"
              id="userPassword"
              value={formData.userPassword}
              onChange={inputchange}
              required
            ></input>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
          <span>Already registered? Click Login</span>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
