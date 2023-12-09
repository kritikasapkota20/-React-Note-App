import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function Note(props) {
  const [note,setNote]=useState({
    title:"",
    content:""
  });
  const [isexpanded,setexpanded]=useState(false);
  function Handlechange(event){
const {name,value}=event.target;
setNote(prev=>{
  return{
  ...prev,
  [name]:value
  }

})
  }
  function submitbutton(event){
event.preventDefault();
props.onadd(note);
setNote({
  title:"",
    content:""
});
  }
  function expand(){
    setexpanded(true);
  }

  return (
    <div className="note">
      {/* <h1>{props.title}</h1>
      <p>{props.content}</p> */}
      <form>
        {isexpanded &&(
      <input type="text" name="title"onChange={Handlechange} value={note.title} placeholder="Title"/> )}
      <textarea onClick={expand}type="text" name="content" onChange={Handlechange} value={note.content} placeholder="Take a note..." rows={isexpanded?3:1}/><br/>
      <Zoom in={isexpanded}>
      <Fab  onClick={submitbutton}><AddIcon/></Fab>
      </Zoom>
      </form>
    </div>
  );
}

export default Note;
