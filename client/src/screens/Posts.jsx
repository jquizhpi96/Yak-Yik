import React from 'react';
import { Link } from 'react-router-dom';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';


function Posts(props) {
  const { posts, setPosts, handleDelete, currentUser } = props;

  return (
    <div>
       <CreatePost
          currentUser={currentUser}
           posts={posts}
         setPosts={setPosts}/>
   
      <h3>Posts</h3>
     
      {
        posts.map(post => (
          <React.Fragment key={post.id}>
           <h3>{post.content}</h3>
           {
              currentUser?.id === post.user_id && (
              <>
                <Link to={`/posts/${post.id}/edit`}><button>Edit</button></Link>
                <button>Like</button>
                <Link to={`/posts/${post.id}`}>comments</Link>
                {/* <button onClick={() => handleOpen(post.id)}>delete</button> */}
              </>
              )}
            {currentUser?.id !== post.user_id && (
            <>
                <button>Like</button>
                <Link to={`/posts/${post.id}`}>comments</Link>
            </>
          )}
          </React.Fragment>
        ))
      }
    
    </div>
  );
}

export default Posts;