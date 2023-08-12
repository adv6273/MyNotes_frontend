import React from 'react'
import {Link,useLocation,useNavigate} from "react-router-dom" ;
const Navbar = () => {
  let location = useLocation();
 let navigate=useNavigate();
  const handleonlogoutClick=()=>{
    localStorage.removeItem('token');
    navigate("/login")
  }

  return (
    <div>
       <nav className="navbar navbar-expand-lg fixed-top 

       navbar-dark bg-dark ">
       {/* bg-body-tertiary"> */}
  <div className="container-fluid">
    <span className="navbar-brand" to="/">My_Notes</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active": ""} `} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="about"?"active": ""} `}  to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
        
         
        </li>
      
      </ul>
         { ! localStorage.getItem('token') ?<form className="d-flex" role="search">
      <Link className="btn btn-primary mx-2" to="/login" role="button">Log in</Link>
      <Link className="btn btn-primary mx-2" to="/signup" role="button">Sign up</Link>
     </form> :
     <button className='btn btn-primary' onClick={handleonlogoutClick} > log out</button>
     
     }
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

