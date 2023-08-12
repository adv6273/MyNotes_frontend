// // import React from "react";

// // const Login = () => {
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     fetch();
// //     const response = await fetch("http://localhost:5000/api/auth/login ", {
// //       method: "POST", // *GET, POST, PUT, DELETE, etc.

// //       headers: {
// //         "Content-Type": "application/json",
// //         // "auth-token":
// //         //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNTEzYTNlNjQ5MWVjYjgyN2QxMTk0In0sImlhdCI6MTY4ODU1NDcxNH0.WRJ6hnp8UQVz4OXF1OzIqrMBLMz1cJWhN1YaMCtC9oM",
// //       },
// //     });
// //     const json = await response.json();
// //     console.log(json)
// //   };
// //   return (
// //     <div>
// //       <form  onSubmit={handleSubmit}>
// //         <div className="form-group my-3">
// //           <label htmlFor="email">Email address</label>
// //           <input
// //             type="email"
// //             className="form-control"
// //             id="email"
// //             name="email"
// //             aria-describedby="emailHelp"
// //             placeholder="Enter email"
// //           />
// //           <small id="emailHelp" className="form-text text-muted">
// //             We'll never share your email with anyone else.
// //           </small>
// //         </div>
// //         <div className="form-group my-3">
// //           <label htmlFor="password">Password</label>
// //           <input
// //             type="password"
// //             className="form-control"
// //             id="password"
// //             name="password"
// //             placeholder="Password"
// //           />
// //         </div>

// //         <button
// //           type="submit"
// //           className="btn btn-primary"
          
// //         >
// //           Submit
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;

// import React, {useState} from 'react'
// import { useHistory } from 'react-router-dom'


// const Login = (props) => {
//     const [credentials, setCredentials] = useState({email: "", password: ""}) 
//     let history = useHistory();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch("http://localhost:5000/api/auth/login", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({email: credentials.email, password: credentials.password})
//         });
//         const json = await response.json()
//         console.log(json);
//         if (json.success){
//             // Save the auth token and redirect
//             localStorage.setItem('token', json.authtoken); 
//             history.push("/");

//         }
//         else{
//             alert("Invalid credentials");
//         }
//     }

//     const onChange = (e)=>{
//         setCredentials({...credentials, [e.target.name]: e.target.value})
//     }

//     return (
//         <div>
//             <form  onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email address</label>
//                     <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
//                 </div>

//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Login

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });

      const json = await response.json();
      console.log(json);
      if(json.success) 
      {
        //save the auth-token and redirect
        localStorage.setItem('token',json.authToken);
        navigate("/")
        props.showAlert("logged in Successfully", "success")


      }
      else {
       props.showAlert("Invalid Credentials", "danger")
      }

   
    } catch (error) {
      console.error("Error:", error);
      // Handle error, show error message, etc.
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className='container mt-3 my-3 ' >
      <h2>Log in to continue in iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp"  />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Login;
