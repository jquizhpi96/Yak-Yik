import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../services/posts'

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
  
  
  if (!post) {
    return <h4>Loading...</h4>
  }

  return (
    <div>
      {
        post && (
        <div>
          <h3>{post.content}</h3>
          {/* {post.comments.map((comment) => (
              <p >
                 {comment.content}
              </p>
            ))}
       */}
    
        </div>
    
        )}
      
      {console.log(post.comments)}
      {console.log(post.content)}
      {console.log(post)}
     
      
    </div>
  );
}

export default PostDetail;