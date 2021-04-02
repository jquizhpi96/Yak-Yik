import React, { useEffect, useState } from 'react';

import { getAllPosts } from "../services/posts";
import { useParams} from 'react-router-dom';

const UserProfile = (props) => {
  const [localPosts, setLocalPosts] = useState(null);
  const { id } = useParams();
  const {currentUser} = props
  let filteredPosts;

  // useEffect(() => {
  //   fetchPosts();
  //   fetchUser();
  // }, [id]);

  const fetchPosts = async () => {
    const response = await getAllPosts();
    setLocalPosts(response);
  };

  // const fetchUser = async () => {
  //   const resp = await getUser(id);
  //   setUser(resp.data);
  // };

  // if (localPosts) {
  //   filteredPosts = localPosts.filter(post => post.user_id === +id);
  // }

  return (
    <>
        {/* <div>{user} </div> */}
    </>
  );
};

export default UserProfile;