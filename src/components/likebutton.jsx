import React, { useState } from 'react'

function Likebutton() {
    const[isLiked,setISLiked]=useState(false)
    const handleLike =()=>{
        setISLiked(!isLiked);
    }

  return (
   <>
   <button onClick={handleLike}>{isLiked?'unlike':'like'}</button>
   </>
  );
}

export default Likebutton