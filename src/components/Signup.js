
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({name:"", email: "", password: "" ,cpassword: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,password} =credentials;
    try {
      const response = await fetch("https://mynotes-backend-fx1l.onrender.com/api/auth/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password,name })
      });

      const json = await response.json();
      console.log(json);
      if(json.success) 
      {
        //save the auth-token and redirect
        localStorage.setItem('token',json.authToken);
        navigate("/")
        props.showAlert("Account created Successfully", "success")
    }
    else {
    //   alert("User already exist")
    props.showAlert("user already exist", "danger")
    }
     

   
    } catch (error) {
      console.error("Error:", error);
      // Handle error, show error message, etc.
    }
  };

  const handleClick = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className='container mt-3 my-3'>
    <h2>Signup to create your account in iNotebook</h2>
       <form onSubmit={handleSubmit} >
  <div className="my-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name='name' required minLength={3} onChange={handleClick}   />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' required  onChange={handleClick} />
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" name='password' required minLength={6}  className="form-control" id="password"onChange={handleClick}  />
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" name='cpassword' required minLength={3}  className="form-control" id="cpassword"onChange={handleClick}  />
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      
    </div>
  );
}

export default Signup;
