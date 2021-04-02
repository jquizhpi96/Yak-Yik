import React, { useState } from 'react';


import { useParams} from 'react-router-dom';



function UserProfile(props) {
  const [user, setUser] = useState([])
  const { id, userId} = useParams();

  const { currentUser, posts } = props
 
  console.log(currentUser)
  console.log(posts)
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

      
    
      
     
     
    </div>
  );
}

export default UserProfile;