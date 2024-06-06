// import  { useState } from "react";
// import {
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBInput,
//   MDBCheckbox,
// } from "mdb-react-ui-kit";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const handlesubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:7500/api/login", { username, password })
//       .then((res) => {
//         console.log(res);
//         if (res.data.message === "login successfuly") {
//           navigate("/dashboard");
//         }
//       })
//       .catch((err) => console.log(err));
//   };


//   return (
//     <MDBContainer fluid className="p-3 my-5">
//       <MDBRow>
//         <MDBCol col="10" md="6">
//           <img
//             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
//             className="img-fluid"
//             alt="Phone image"
//           />
//         </MDBCol>

//         <MDBCol col="4" md="6">
//           <h1>Welocome To All ! </h1>
//           <p>Login into your account</p>
//           <br></br>
//           <form onSubmit={handlesubmit}>
//             <label>Email</label>
//             <MDBInput
//               wrapperClass="mb-4"
//               id="formControlLg"
//               type="text"
//               size="lg"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <label>Password</label>
//             <MDBInput
//               wrapperClass="mb-4"
//               id="formControlLg"
//               type="password"
//               size="lg"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <div className="d-flex justify-content-between mx-4 mb-4">
//               <MDBCheckbox
//                 name="flexCheck"
//                 value=""
//                 id="flexCheckDefault"
//                 label="Remember me"
//               />
//               <a onClick={}>Forgot password?</a>
//             </div>
//             <Link to="/dashboard">
//               <button className="btn btn-primary " >
//                 Log in
//               </button>
//             </Link>
//           </form>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// export default Login;
// // import '../../Styles/Login.css'
// // import { Link } from "react-router-dom";
// // const Login = () => {
// //   return (
// //     <div className="row login">
// //       <div className="logmain-cont">
// //         <h3>Login Page</h3>
// //         <hr />
// //         <label>User Name</label>
// //         <input></input>
// //         <label>Password </label>
// //         <input></input>
// //         <Link to="/dashboard">
// //           <button className="btn btn-primary">Login</button>
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;


// import { useState } from "react";
// import {
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBInput,
//   MDBCheckbox,
// } from "mdb-react-ui-kit";
// import axios from "axios";
// import {Link, useNavigate, } from "react-router-dom";
// import Forgotpassword from '../../Module/Forgotpassword';
// import toast, { Toaster } from "react-hot-toast";

// function Login() {
//   const initialstate={
//     userEmail:'',
//     userPassword:''
//   }

//   const [showForgotPassword, setShowForgotPassword] = useState(false);
//   const [formdata,setformdata]=useState(initialstate)

//  const navigate = useNavigate()
//   const inputhandler = (e)=>{
//     const {name,value}=e.target
//     setformdata({...formdata,[name]:value})
//   }
//  const handleSubmit =async (e)=>{
//   e.preventDefault()
//   try{
//     const response = await axios.post("http://localhost:7500/api/login",formdata)
//     toast.success(response.data.message,{position:'top-right'})
//     setformdata(initialstate)
//     navigate('/dashboard')
//   }catch(err){
//     toast.error("An error acquired",{position:'top-right'})
//   }
//  }

 

//   const handleForgotPasswordClick = () => {
//     setShowForgotPassword(true);
//   };

//   return (
//     <MDBContainer fluid className="p-3 my-5">
//       <MDBRow>
//         <MDBCol col="10" md="6">
//           <img
//             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
//             className="img-fluid"
//             alt="Phone image"
//           />
//         </MDBCol>

//         <MDBCol col="4" md="6">
//           <h1>Welcome To All!</h1>
//           <p>Login into your account</p>
//           <br />
//           <form >
//             <label>Email</label>
//             <MDBInput
//               wrapperClass="mb-4"
//               id="userEmail"
//               name="userEmail"
//               type="text"
//               size="lg"
//               value={formdata.userEmail}
//               onChange={inputhandler}
//               required
//             />
//             <label>Password</label>
//             <MDBInput
//               wrapperClass="mb-4"
//               id="userPassword"
//               type="password"
//               name="userPassword"
//               size="lg"
//               value={formdata.userPassword}
//               onChange={inputhandler}
//               required
//             />

//             <div className="d-flex justify-content-between mx-4 mb-4">
//               <MDBCheckbox
//                 name="flexCheck"
//                 value=""
//                 id="flexCheckDefault"
//                 label="Remember me"
//               />
//               <a onClick={handleForgotPasswordClick} style={{cursor:'pointer',color:'blue'} }>Forgot password?</a>
//             </div>
            
//             <button className="btn btn-primary" type="submit" onSubmit={handleSubmit}>
//               Log in
//             </button>
//             </form>
        
//         </MDBCol>
//         <Toaster />
//       </MDBRow>

//       <Forgotpassword
//         show={showForgotPassword}
//         setShow={setShowForgotPassword}
//         user={{ userName: '', newPassword:'' }} // Adjust as needed
//       />
      
//     </MDBContainer>
//   );
// }

// export default Login;



import { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import axios from "axios";

import Forgotpassword from '../../Module/Forgotpassword';
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function Login() {
  const initialstate = {
    userEmail: '',
    userPassword: ''
  };

  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [formdata, setformdata] = useState(initialstate);
 
 const navigate = useNavigate()
  const inputhandler = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/login", formdata);
      toast.success(response.data.message, { position: 'top-right' });
      setformdata(initialstate);
      navigate('/dashboard')
  
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred", { position: 'top-right' });
    }
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="Phone image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <h1>Welcome To All!</h1>
          <p>Login into your account</p>
          <br />
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <MDBInput
              wrapperClass="mb-4"
              id="userEmail"
              name="userEmail"
              type="text"
              size="lg"
              value={formdata.userEmail}
              onChange={inputhandler}
              required
            />
            <label>Password</label>
            <MDBInput
              wrapperClass="mb-4"
              id="userPassword"
              type="password"
              name="userPassword"
              size="lg"
              value={formdata.userPassword}
              onChange={inputhandler}
              required
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a onClick={handleForgotPasswordClick} style={{ cursor: 'pointer', color: 'blue' }}>Forgot password?</a>
            </div>
            
            <button className="btn btn-primary" type="submit">
              Log in
            </button>
            
          </form>
        </MDBCol>
        <Toaster />
      </MDBRow>

      <Forgotpassword
        show={showForgotPassword}
        setShow={setShowForgotPassword}
        user={{ userName: '', newPassword: '' }} // Adjust as needed
      />
    </MDBContainer>
  );
}

export default Login;
