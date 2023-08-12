import "./App.css";
import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alerts from "./components/Alerts";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
function App() {
  const [alert, setAlert] = useState(null)
  const showAlert =(messasge, type)=>{
    setAlert({ 
     msg: messasge,
     type : type
    })
    setTimeout(() => {
      setAlert(null);
     
      
      
    }, 3000);
 }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alerts alert={alert}/>
          <div className="container">

          <Routes>
            <Route exact path="/" element={<Home  showAlert={showAlert} />} />

            <Route exact path="/about" element={<About />} />
            {/*  
             IF WE WANT TO RUN THE ABOUT COMPONENT THEN WE HAVE TO SELECT THE PATH "about" , SO WHEN FROM THE NAVBAR TO="/ about"  IS CALLED SO THE PATH OF "about" IS GO TO ABOUT.JS
            */}
            <Route exact path="/login" element={<Login showAlert={showAlert} />}  > </Route>
            <Route exact path="/signup" element={<Signup showAlert={showAlert} />}  > </Route>
          </Routes>
            </div>
        </Router>
      {/* <Footer/> */}
      </NoteState>
    </>
  );
}

export default App;
