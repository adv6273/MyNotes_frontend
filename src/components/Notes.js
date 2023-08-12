import React, { useContext, useEffect,useRef ,useState} from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const {showAlert}=props;
  const context = useContext(noteContext);
  const { notes, getNote,editNote } = context;
  let  navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token'))
    {

      getNote();
    }
    else
    {
      navigate("/login")
    }
    
    //  eslint-disable-next-line
  }, [ ]);

  const ref=useRef(null)
  const refClose = useRef(null)
  const [note, setNote] = useState({
    etitle: "",
    edescription: "",
    etag: "",
    id:""
  });
  const updateNote = (currentNote) => {
    // ref.toggle();
    ref.current.click();
    setNote( {etitle: currentNote.title,
      etag: currentNote.tag, edescription : currentNote.description,
      id: currentNote._id} );
      // showAlert("Updated Successfully", "success")
  };
  const HandleOnClick = (e) => {
    e.preventDefault();
    editNote(note.id,note.etitle,note.edescription,note.etag)
    refClose.current.click();
    console.log("updating", {note})
    showAlert("Updated Successfully", "success")
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <AddNote showAlert={showAlert} />
      <button  ref={ref} type="button"   className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"

        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">

            <form className="my-3">
          <div className="mb-3">
            <label htmlFor="etitle" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="etitle"
              name="etitle"
              aria-describedby="emailHelp"
              onChange={onChange}
              value={note.etitle}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="edescription" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="edescription"
              name="edescription"
              onChange={onChange}
              value={note.edescription}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="etag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="etag"
              name="etag"
              onChange={onChange}
              value={note.etag}
            />
          </div>
          {/* <button
            type="submit"
            className="btn btn-primary"
            onClick={HandleOnClick}
          >
            Add Note
          </button> */}
        </form>

            </div>
            <div className="modal-footer">
              <button
                type="button"
                ref={refClose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button 
               disabled={note.etitle.length<5 || note.edescription.length<5}
              type="button" className="btn btn-primary" onClick={HandleOnClick} >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row my-3">
          <h2> Your Note</h2>
          <div className="container mx-3" > 
          
          {notes.length===0 &&    'No notes to display' }
           </div>   
          {notes.map((notes) => {
            return (
              <NoteItem key={notes._id} note={notes} updateNote={updateNote} showAlert={showAlert} />
            );
            // IN NOTEITEM ALSO U HAVE TO WRITE CONST {NOTE}= PROPS;
            // BECUASE U GIVEN FROM HERE NOTE VARIABLE .
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
















// import React, { useContext, useEffect, useRef, useState } from "react";
// import noteContext from "../context/notes/NoteContext";
// import NoteItem from "./NoteItem";
// import AddNote from "./AddNote";

// const Notes = () => {
//   const context = useContext(noteContext);
//   const { notes, getNote, editNote } = context;
//   useEffect(() => {
//     getNote();
//     // eslint-disable-next-line
//   }, []);
//   const ref = useRef(null);
//   const refClose = useRef(null);
//   const [note, setNote] = useState({
//     id: "",
//     etitle: "",
//     edescription: "",
//     etag: "",
//   });

//   const updateNote = (currentNote) => {
//     ref.current.click();
//     setNote({
//       id: currentNote._id,
//       etitle: currentNote.title,
//       edescription: currentNote.description,
//       etag: currentNote.tag,
//     });
//   };

//   const handleClick = (e) => {
//     editNote(note.id, note.etitle, note.edescription, note.etag);
//     refClose.current.click();
//   };

//   const onChange = (e) => {
//     setNote({ ...note, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//       <AddNote />
//       <button
//         ref={ref}
//         type="button"
//         className="btn btn-primary d-none"
//         data-bs-toggle="modal"
//         data-bs-target="#exampleModal"
//       >
//         Launch demo modal
//       </button>
//       <div
//         className="modal fade"
//         id="exampleModal"
//         tabIndex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 Edit Note
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <form className="my-3">
//                 <div className="mb-3">
//                   <label htmlFor="title" className="form-label">
//                     Title
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="etitle"
//                     name="etitle"
//                     value={note.etitle}
//                     aria-describedby="emailHelp"
//                     onChange={onChange}
//                     minLength={5}
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="description" className="form-label">
//                     Description
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="edescription"
//                     name="edescription"
//                     value={note.edescription}
//                     onChange={onChange}
//                     minLength={5}
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="tag" className="form-label">
//                     Tag
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="etag"
//                     name="etag"
//                     value={note.etag}
//                     onChange={onChange}
//                   />
//                 </div>
//               </form>
//             </div>
//             <div className="modal-footer">
//               <button
//                 ref={refClose}
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button
//                 disabled={
//                   note.etitle.length < 5 || note.edescription.length < 5
//                 }
//                 onClick={handleClick}
//                 type="button"
//                 className="btn btn-primary"
//               >
//                 Update Note
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="row my-3">
//         <h2>You Notes</h2>
//         <div className="container mx-2">
//           {notes.length === 0 && "No notes to display"}
//         </div>
//         {notes.map((note) => {
//           return (
//             <NoteItem key={note._id} updateNote={updateNote} note={note} />
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Notes;
