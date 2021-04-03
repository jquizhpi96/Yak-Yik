import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import Modal from '../components/Modal';
import CreatePostUser from './CreatePostUser';



function UserProfile(props) {
  // const [user, setUser] = useState([])
  // const { id} = useParams();
  const [show, setShow] = useState(false);
 

  const toggleModal = () => {
    setShow(!show)
   }
  

  const { currentUser, posts, handleDelete, setPosts } = props

  if (currentUser?.id === posts.user_id) {

  }

  return (
    <div>
      <h3> Hello {currentUser.name.slice(0, 2)} .... I mean User {currentUser.id}!</h3>
      <CreatePostUser
       currentUser={currentUser}
       posts={posts}
      setPosts={setPosts}
      />
      {currentUser &&
        posts.filter((post) => {
          
          return post.user_id === currentUser.id
        })
          .map((post) => (
            <div key= {post.id}>
         
              <p>{post.content} </p>
              <Link to={`/posts/${post.id}`}>comments({post.comments.length})</Link>
                  <Link to={`/users/${currentUser.id}/posts/${post.id}/edit`}><button>Edit</button></Link>

                  <button onClick={() => setShow(post.id)}>delete</button>
        </div>
          ))}
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

export default UserProfile;