import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


function EditPost(props) {
  
    const [formData, setFormData] = useState({
      content: ''
    })
    const { content } = formData;
    const { id } = useParams();
    const { posts, handleUpdate } = props;
  
 
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
  export default EditPost;