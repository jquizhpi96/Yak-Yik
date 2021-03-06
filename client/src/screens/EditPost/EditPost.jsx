import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"

import "./EditPost.css";

function EditPost(props) {
  const [formData, setFormData] = useState({
    content: "",
  });
  const { content } = formData;
  const { id } = useParams();
  const { posts, handleUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const postData = posts.find((post) => post.id === Number(id));
      setFormData({
        content: postData.content,
      });
    };
    if (posts.length) {
      prefillFormData();
    }
  }, [posts, id]);

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
    <div className="edit-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(id, formData);
        }}
      >
        <h3 className="edit-title">Edit Post</h3>
        <label>
          Post:
          <input
            className="post-content2"
            type="text"
            name="content"
            value={content}
            required
            onChange={handleChange}
          />
        </label>
        <button className="edit-button">Submit</button>
      </form>
      </div>
      </motion.div>
  );
}
export default EditPost;
