import React, { useState } from "react";
import noteContext from "./NoteContext";
// import { useState } from "react";

const NoteState = (props) => {
  // const host = "http://localhost:5000";
  const host = "https://mynotes-backend-fx1l.onrender.com";
  //   const s1 = {
  //     name: "aditya",
  //     class: "7 sem",
  //   };
  //   const [state, setState] = useState(s1);
  //  const  update = () => {
  //     setTimeout(() => {
  //       setState({
  //         // name : "aditi",
  //         // class: " 2b",
  //       });
  //     } ,2000);
  //   };
  const notesInitial = [];

  const [notes, setnotes] = useState(notesInitial);

  //   FETCH ALL NOTE
  const getNote = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

     
    });
    const json =await response.json();
    console.log(json);
    setnotes(json);
    
  };

  // ADD A NOTE
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

      body: JSON.stringify({ title, description, tag }),
    });
    // const json = response.json();
    console.log("adding a new note");
    // CALL API
    const note = await response.json();
    // const   note=null;

    setnotes(notes.concat(note));
  };

  //DELETE A NOTE
  const deleteNote = async (id) => {
    // console.log("deleting note with id " + id);
    // const newNotes = notes.filter((note) => {
    //   return note._id !== id;
    // });
    // setnotes(newNotes);
    try {
      console.log("deleting note with ID:", id);
      // Perform API call to delete the note from the backend
      await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')   ,     },
      });
  
      // Update the state in the frontend by filtering out the deleted note
      setnotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  /// EDIT A NOTE

  const editNote = async (id, title, description, tag) => {
    // API CALL

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

      body: JSON.stringify({ title, description, tag, id }),
    });
    // const json = await response.json(); 
    //     console.log(JSON);
    //  let newNotes=JSON.parse{JSON.stringify(notes)}
    //     for (let index = 0; index < newNotes.length; index++) {
      //       const element = newNotes[index];
      //       if (element._id === id) {
        //         element.title = title;
        //         element.description = description;
        //         element.tag = tag;
        //         break;
        //       }
        //     }
        //     setnotes(newNotes);
        //   };


      const json = await response.json(); 
        // parses JSON response into native JavaScript objects

  let newNotes = JSON.parse(JSON.stringify(notes))
 // Logic to edit in client
 for (let index = 0; index < newNotes.length; index++) {
   const element = newNotes[index];
   if (element._id === id) {
     newNotes[index].title = title;
     newNotes[index].description = description;
     newNotes[index].tag = tag; 
     break; 
   }
 }  
 setnotes(newNotes);
}

  return (
    <noteContext.Provider value={{ notes, addNote, editNote, deleteNote,getNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;

