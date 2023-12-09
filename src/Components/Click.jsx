import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';


const Click = (props) => {
  function handleClick(){
    props.ondelete(props.id);

  }
  return (
    <div className='click'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick} >
        <DeleteIcon/>
      </button>
      
    </div>
  )
}

export default Click
