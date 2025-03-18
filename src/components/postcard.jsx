import React from 'react'
import Likebutton from './likebutton'
function Postcard({username, isLiked,content,profileImage}) {
  return (
    <div>
        <div><img src={profileImage}/></div>
        <div><strong>Name:{username}</strong></div>
        <Likebutton/>
        <div><strong>Content:{content}</strong></div>
    </div>
  )
}

export default Postcard