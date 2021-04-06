import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"
import { putPost } from "../services/posts";

function EditPostUser(props) {
  const [userPosts, setUserPosts] = useState([]);
  const [formData, setFormData] = useState({
    content: "",
  });
  const { content } = formData;
  const { id } = useParams();
  const { posts } = props;
  const history = useHistory();

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

  const handleUpdate = async (id, postData) => {
    const updatedPost = await putPost(id, postData);
    setUserPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? updatedPost : post;
      })
    );

    history.push("/users");
    history.go(0);
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
    <div className="edit-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(id, formData);
        }}
      >
        <h3 className="edit-title">Edit Post</h3>
        <div>
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
        </div>
        <button className="edit-button">Submit</button>
      </form>
      </div>
      </motion.div>
  );
}
export default EditPostUser;
