import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { destroyPost, putPost } from "../services/posts";


function EditPostUser(props) {
  const [userPosts, setUserPosts] = useState([])
  
    const [formData, setFormData] = useState({
      content: ''
    })
    const { content } = formData;
    const { id } = useParams();
    const { posts} = props;
  const history = useHistory()
 
    useEffect(() => {
      const prefillFormData = () => {
        const postData = posts.find((post) =>
          post.id === Number(id));
        setFormData({
          content: postData.content
        })
      }
      if (posts.length) {
        prefillFormData()
      }
    }, [posts, id])

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
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }))
    }
  

    return (
   
      <form onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
      }}>
        <h3>Edit Post</h3>
        <label>
          Post:
        <input
            type='text'
            name='content'
            value={content}
            required
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
      
    )
  
}
  export default EditPostUser;