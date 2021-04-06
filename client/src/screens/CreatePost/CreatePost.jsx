import { useState } from "react";
import { postPost } from "../../services/posts";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"
import "./CreatePost.css";

export default function CreatePost(props) {
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
    setFormData({ content: "" });
    setToggle((curr) => !curr);

    history.push("/posts");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}
    >
    <div className="post-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData);
        }}
      >
        <label className="create-form">
          <textarea
            type="text"
            name="content"
            placeholder="What is happening?"
            value={content}
            required
            onChange={handleChange}
          />
        </label>
        <button className="post-button">Post</button>
      </form>
      </div>
      </motion.div>
  );
}
