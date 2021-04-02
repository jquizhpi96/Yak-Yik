import { useState } from 'react'
import { postPost } from "../services/posts";
import { useHistory } from "react-router-dom";

export default function CreatePost(props) {
  const history = useHistory()

  const [formData, setFormData] = useState({
    content: ''
  })
  const { content } = formData;
  
  const { posts, setPosts } = props
  const handleCreate = async (postData) => {
    const newPost = await postPost(postData);
    setPosts((prevState) => [...prevState, newPost]);
    history.push("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      user_id: props.currentUser.id,
    }));
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }} >
      
      <label>
        
        <textarea
          type="text"
          name='content'
          placeholder='whats happening?'
          value={content}
          onChange={handleChange}
        />
      </label>
      <button>Post</button>
    </form>
  )
}
