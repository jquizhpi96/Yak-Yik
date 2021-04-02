import React, { useEffect, useState } from 'react';

import { getOneUser } from "../services/user";
import { useParams} from 'react-router-dom';



function UserProfile(props) {
  const [user, setUser] = useState([])
  const { id } = useParams();

  const { currentUser, posts } = props
    // useEffect(() => {
  //   const fetchPost = async () => {
      
  //     const userData = await getOneUser(id);
  //     setUser(userData)
  //   }
  //   fetchPost()
  // }, [id])
  
  if (currentUser?.id === posts.user_id) {

    posts.map(post => {
      <>
      <h3>{currentUser.name}</h3>
        <p>{post.content} </p>
        </>
    })
  }

  return (
    <div>
      
      <h3>{currentUser.name}</h3>

      
    
      
     
      {console.log(currentUser)}
      {console.log(posts)}
    </div>
  );
}

export default UserProfile;