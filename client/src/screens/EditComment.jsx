import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { putComment } from "../services/comments";



function EditComment(props) {
  const [formData, setFormData] = useState({
    content: ''
  })
  const { content } = formData;
  const { id } = useParams();
  const { comments, setComments } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const commentItem = comments.find(comment => comment.id === Number(id));
      setFormData({
        name: commentItem.name
      })
    }
    if (comments.length) {
      prefillFormData()
    }
  }, [comments, id])
  const handleUpdate = async (id, commentData) => {
    const updatedComment = await putComment(id, commentData);
    setComments((prevState) =>
      prevState.map((comment) => {
        return comment.id === Number(id) ? updatedComment : comment;
      })
    );
    
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
      <h3>Edit Comment</h3>
      <label>
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
  );
}

export default EditComment;