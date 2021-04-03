import { useState, useEffect } from "react";
import { createLike, getAllLikes } from "../services/likes";

function Likes(props) {
  const [likes, setLikes] = useState([]);
  const { allLikes, postId, posts } = props;

  useEffect(() => {
    const fetchLikes = async () => {
      const resp = await getAllLikes(postId);
      setLikes(resp)
    };
    fetchLikes()
  }, [allLikes, postId]);

  const handleLike = async () => {
    const newLike = await createLike(postId);
    setLikes((prevState) => [...prevState, newLike]);
  };

  return (
    <div className="likes">
      <button onClick={handleLike}>Like</button>
      <h3>{likes?.length}</h3>
    </div>
  );
}

export default Likes;