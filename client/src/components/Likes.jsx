import { useState, useEffect } from "react";
import { createLike, getAllLikes } from "../services/likes";

function Likes(props) {
  const [likes, setLikes] = useState([]);
  const { allLikes, posts, post_id } = props;

 

 
 

  // useEffect(() => {
  //   const fetchLikes = async (posts) => {
  //     const likesData = await getAllLikes()
  //     setLikes(likesData)
  //   };
  //   fetchLikes();
  // }, [allLikes]);
  return (
    <div className="likes">
      {/* <button onClick={handleLike}>Like</button>
      <h3>test</h3> */}
    </div>
  )

}

export default Likes;