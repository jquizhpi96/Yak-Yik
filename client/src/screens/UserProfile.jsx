import React, { useState, useEffect } from 'react';
import { getUserPost } from "../services/posts";

import { useParams} from 'react-router-dom';



function UserProfile(props) {
  const [user, setUser] = useState([])
  const { id} = useParams();

  const { currentUser, posts } = props
 
  console.log(currentUser)
  console.log(posts)

  // useEffect(() => {
  //   const fetchPosts = async (currentUser_id) => {
  //     const postData = await getUserPost(currentUser.id);
  //     setUser(postData);
  //   };
  //   fetchPosts();
  // }, []);

  if (currentUser?.id === posts.user_id) {

    // posts.map(post => {
    //   <>
    //   <h3>{currentUser.name}</h3>
    //     <p>{post.content} </p>
    //     </>
    // })
  }

  return (
    <div>
      
      {/* <h3>{currentUser.name}</h3>
      <p>{posts.content}</p> */}
      <h3>{currentUser.name}</h3>
      {currentUser &&
        posts.filter((post) => {
          
          return post.user_id === currentUser.id
        })
          .map((post) => (
        <div>
         
          <p>{post.content} </p>
        </div>
          ))}
      
     
     
    </div>
  );
}

export default UserProfile;