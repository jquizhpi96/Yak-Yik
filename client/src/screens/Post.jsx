import React from 'react';
import {useState, useEffect} from 'react'
import CreatePost from "./CreatePost";
import { getAllComments } from "../services/comments";


function Post(props) {
  const [postItems, setPostItems] = useState([])
   const {posts} = props
  
  useEffect(() => {
    const fetchComments = async (posts_id) => {
      const commentData = await getAllComments(posts_id);
      setPostItems(commentData);
    };
    fetchComments();
  }, []);

  
  return (
    
    <div>
      
    </div>
  );
}

export default Post;