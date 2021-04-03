import {useState, React} from 'react';
import { Link } from 'react-router-dom';
import Likes from '../components/Likes';
import Modal from '../components/Modal';
import CreatePost from './CreatePost';



function Posts(props) {
  const { posts, setPosts, handleDelete, currentUser } = props;
  const [show, setShow] = useState(false);

  const toggleModal = () => {
   setShow(!show)
  }

  return (
    <div>
       <CreatePost
          currentUser={currentUser}
           posts={posts}
         setPosts={setPosts}/>
   
      <h3>Posts</h3>
     
      {
        posts.map(post => (
          <div key={post.id}>
           <h3>{post.content}</h3>
           {
              currentUser?.id === post.user_id && (
                <div key={post.id}>
                  
                  <button>Like</button>
                  <Link to={`/posts/${post.id}`}>comments</Link>
                  <Link to={`/posts/${post.id}/edit`}><button>Edit</button></Link>

                  <button onClick={() => setShow(post.id)}>delete</button>
                  
                  
                 
                  
                    
                  
          </div>
              )}
            {currentUser?.id !== post.user_id && (
            <>
                {/* <Likes
                  allLikes={post.likes}
                  posts = {posts}
                
                /> */}
                <Link to={`/posts/${post.id}`}>comments</Link>
            </>
            )}

            
          </div>
        ))
      }
     {show && (
                    <Modal posts={posts} handleDelate={handleDelete} show={show} setShow={setShow} toggleModal={toggleModal}>
                    <p>Are you sure?</p>
                      <button onClick={() => setShow(false)}>no</button>
                      <button onClick={() => {
                        handleDelete(show)
                        setShow(false)
                      }}>yes</button>
                   
                    </Modal>
          
                  
      )}
      
      
    </div>
  );
}

export default Posts;