import { useState } from "react";
import { postPost } from "../../services/posts";
import { useHistory } from "react-router-dom";
import "./CreatePostUser.css"
export default function CreatePostUser(props) {
  const history = useHistory();
  // eslint-disable-next-line
  const [toggle, setToggle] = useState(false);

  const [formData, setFormData] = useState({
    content: "",
  });
  const { content } = formData;

  const { setPosts } = props;

  const handleCreate = async (postData) => {
    const newPost = await postPost(postData);
    setPosts((prevState) => [...prevState, newPost]);
    
    setToggle((curr) => !curr);
    
    history.push("/users");
    history.go(0)
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <label>
        <textarea className="user-post"
          type="text"
          name="content"
          placeholder="What is happening?"
          value={content}
          required
          onChange={handleChange}
        />
      </label>
      <button className= 'post-button'>Post</button>
    </form>
  );
}
