import React, { useContext } from 'react';
// import {Link} from "react-router-dom";
import noteContext from "../context/notes/NoteContext"


const NoteItem = (props) => {
  const { note ,updateNote} = props;
  //THE NOTE WHICH U PASSED FROM NOTES.JS LIKE 'NOTE' ={NOTES} S0 HERE ALSO WE HAVE TO WRITE THE KEYWORD 'NOTE'.
  const context =useContext(noteContext);
  const {deleteNote} =context;
  const handleOnClick=()=>
  {
    deleteNote(note._id);
   props.showAlert("Deleted Successfully", "success")

  }
  const handleOnEditClick=()=>
  {
    updateNote(note);
  }
  return (
    <div className='col-md-3'>
      
      <div className="card my-3" 
      >
        <div className="card-body">
        <div className="d-flex">
  <div className="p-2 flex-fill ">
   <h3>

    {note.title}
   </h3>
    </div>
  <div className="p-2 flex-fill">
  <i className="fa-solid fa-pen-to-square" onClick={handleOnEditClick} 
  ></i>
    </div>
  <div className="p-2 flex-fill">
  <i className="fa-solid fa-trash-can mx-3" onClick={handleOnClick}></i>
    </div>
</div>
          <h6>{note.tag}</h6>

          <p className="card-text">{note.description}</p>
        
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
