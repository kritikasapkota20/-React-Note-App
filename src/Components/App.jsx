import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Click from "./Click";
// import list from "../Notes"

function App() {
  const [Notes,setNotes]=useState([]);
  function add(newnote){
setNotes(prevnote=>{
  return [...prevnote,newnote]

});
  }
  function deleteitem(id){
    setNotes(prevnote=>{

      return prevnote.filter((array,index)=>{
return index!=id;
      })

    })

  }
  return (
    <div>
      <Header />
      
      {/* {list.map((noteitem)=>
    (
        <Note  key={noteitem.key}title={noteitem.title} content={noteitem.content}/>
    )
)} */}
<Note onadd={add}/>
{Notes.map((noteitem,index)=>{
return (<Click key={index} id={index}title={noteitem.title} content={noteitem.content} ondelete={deleteitem}/>)
})}

      <Footer />
    </div>
  );
}

export default App;
