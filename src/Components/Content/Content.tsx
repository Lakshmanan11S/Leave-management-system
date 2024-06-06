// import { useState } from "react";
// import image from "../../Image/image.jpg";
// import "../../Styles/Content.css";
// const Content = () => {
//   const [name,setName]=useState('')
//   const [email,setEmail]=useState('')
//   const [phoneno,setPhoneno]=useState('')
//   const handlesubmit=()=>{
//     alert("Updated Succesfully!")
//   }
//   return (
//     <div className="row ">
//       <div className="person col-sm-6">
//         <div className="card ">
//           <img src={image} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h1 className="card-title">ADMIN</h1>
//             <p className="card-text">Elon Native System ,Software Developer</p>
//             <a href="#" className="btn btn-primary">
//               Change Profile
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="persondata col-sm-6">
//         <h3>PERSONAL DETAILS</h3>
//        <br/>
//         <div>
//         <div className="mb-3">
//   <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Name</label>
//   <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
// </div>
// <div className="mb-3">
//   <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Email</label>
//   <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
// </div>
// <div className="mb-3">
//   <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Phoneno</label>
//   <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Phoneno" value={phoneno} onChange={(e)=>setPhoneno(e.target.value)}/>
// </div>
// </div>
// <div className="btn">
// <button onClick={handlesubmit}>Submit</button>
// </div>
//       </div>
//     </div>
//   );
// };

// export default Content;

import '../../Styles/Content.css'
import Fullcalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const Content = () => {
  return (
    <div className="content">
      <div className=" first-section shadow">
        <h3 className="first-heading">Dashboard</h3>
        <i className="bi bi-caret-right-fill"></i>
      </div>
      <div className='second-section'>
        <button className='first-button'>Pending</button>
        <button className='second-button'>Accepted</button>
        <button className='third-button'>Rejected</button>
      </div>
      <div className='container bottom-section shadow'>
        <Fullcalendar
        plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start:'today prev,next',
          center:'title',
          end:'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        height={"70vh"}
        />
      </div>
    </div>
  )
}

export default Content