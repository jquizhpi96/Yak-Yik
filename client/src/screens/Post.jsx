import React from 'react';

import CreatePost from "./CreatePost/CreatePost";
import './Post.css'

function Post(props) {
  const { currentUser, posts, setPosts } = props
  return(
  <div className="createForm">
    < CreatePost
    currentUser={currentUser}
    posts={posts}
    setPosts={setPosts}/>
 </div>
  )
}
export default Post;