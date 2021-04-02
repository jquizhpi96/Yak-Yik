import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../services/posts'
import Posts from './Posts';

function PostDetail(props) {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  const {currentuser} = props
  
  useEffect(() => {
    const fetchPost = async () => {
      
      const postData = await getOnePost(id);
      setPost(postData)
      
    }
    fetchPost()
  }, [id])
  
  
  // if (!post) {
  //   return <h4>Loading...</h4>
  // }
  // {post.comments.map((comment) => (
  //       <p>{comment.content}</p>
  
  //           ))}
  console.log(post.comments[0].content)

  return (
    <div>
      
          <h3>{post.content}</h3>
          {/* {post.comments.map((comment) => (
            <p>{comment.content}</p>
  
            ))} */}
       
      
      
    
     
      
      {/* {console.log(post.comments)} */}
      {/* {console.log(post.content)}
      {console.log(post)} */}
     
      
    </div>
  );
}

export default PostDetail;