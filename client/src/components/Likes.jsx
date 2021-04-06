import { useState, useEffect } from "react";
import { createLike, getAllLikes } from "../services/likes";
import Yak from "../images/yak.png";
import "./Likes.css";

function Likes(props) {
  const [likes, setLikes] = useState([]);
  const { allLikes, postId } = props;

  useEffect(() => {
    const fetchLikes = async () => {
      const resp = await getAllLikes(postId);
      setLikes(resp);
    };
    fetchLikes();
  }, [allLikes, postId]);

  const handleLike = async () => {
    const newLike = await createLike(postId);
    setLikes((prevState) => [...prevState, newLike]);
  };

  return (
    <div className="likes-container">
      <button className="like">
        <img src={Yak} alt="Yak" className="likebutton" onClick={handleLike} />
        {likes?.length}
      </button>
    </div>
  );
}

export default Likes;
