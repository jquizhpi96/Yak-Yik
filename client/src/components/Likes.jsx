import { useState, useEffect } from "react";
import { createLike } from "../services/likes";

function Likes(props) {
  const [likes, setLikes] = useState([]);
  const { allLikes, postId } = props;

  useEffect(() => {
    const loadLikes = () => {
      setLikes(allLikes);
    };
    loadLikes();
  }, [allLikes]);

  const handleLike = async () => {
    const newLike = await createLike(postId);
    setLikes((prevState) => [...prevState, newLike]);
  };

  return (
    <div className="likes">
      <button onClick={handleLike}>Like</button>
      <h3>{likes.length}</h3>
    </div>
  );
}

export default Likes;