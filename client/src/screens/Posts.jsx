import {useState, React} from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';


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
                <Link to={`/posts/${post.id}/edit`}><button>Edit</button></Link>
                <button>Like</button>
                  <Link to={`/posts/${post.id}`}>comments</Link>
                  
                  <button onClick={() => setShow(post.id)}>delete</button>
                  
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
              )}
            {currentUser?.id !== post.user_id && (
            <>
                <button>Like</button>
                <Link to={`/posts/${post.id}`}>comments</Link>
            </>
            )}
             {show && (
                    <Modal posts={posts} handleDelate={handleDelete} show={show} setShow={setShow}toggleModal={toggleModal}/>
          
                  
                  )}
          </div>
        ))
      }
    
    </div>
  );
}

export default Posts;