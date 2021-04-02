import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../services/posts'
import { getAllComments} from '../services/comments'
import { destroyComment} from '../services/comments'
import CreateComment from './CreateComment';
import Posts from './Posts';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


function PostDetail(props) {
  const [post, setPost] = useState('');
  const { id } = useParams();
  const [ comments, setComments ] = useState([])
  const params = useParams()
  const history = useHistory()

  console.log(params)
  
  const { currentUser } = props
  console.log(currentUser)
  console.log(comments)
  
 
  useEffect(() => {
    const fetchPost = async () => {
      
      const postData = await getOnePost(id);
      setPost(postData)
      // setComments(post.comments)
      
    }
    
    
    fetchPost()
  }, [])
  
  useEffect(() => {
    const fetchComments = async () => {
      const commentData = await getAllComments();
      setComments(commentData);
    };
    fetchComments();
  }, []);
  
  const handleDelete = async (id) => {
    await destroyComment(id);
    setComments((prevState) => prevState.filter((comment) => comment.id !== id));
    history.go(0)
  };
  if (!post) {
    return <h4>Loading...</h4>
  }
  

  return (
    <div>
      
          <h3 >{post.content}</h3>
      {post.comments.map(comment => (
        <React.Fragment key={comment.id} >
        <p >{comment.content}</p>
        
        {
          currentUser?.id === comment.user_id &&
        <div key={comments.id}>
          <button>Like</button>
          <button onClick={()=> {handleDelete(comment.id)}} >delete</button>
        </div>
        
          }
          </React.Fragment>
           ))}
         
      
      <CreateComment
        postId ={post.id}
        currentUser = {currentUser}
      />
    
    
    
      
    </div>
  );
}

export default PostDetail;