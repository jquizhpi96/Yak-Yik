import { useState } from "react";
import { postComment } from "../../services/comments";
import { useHistory } from "react-router-dom";
import './CreateComment.css'

function CreateComment(props) {
  const history = useHistory();

  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    content: "",
  });

  const { content } = formData;
  const { postId, currentUser, posts } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleComment = async () => {
    const newComment = await postComment(postId, {
      content: content,
    });
    setComments((prevState) => [...prevState, newComment]);
    history.push(`/posts/${posts.id}`);
  };

  return (
    
      <form onSubmit={handleComment}>
        <input className = "create-comment"
          type="text"
          name="content"
          placeholder="New Comment"
          value={content}
          required
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    
  );
}

export default CreateComment;
