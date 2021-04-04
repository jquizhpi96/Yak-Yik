import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/Modal";
import CreatePostUser from "../CreatePostUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments} from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import './UserProfile.css'

function UserProfile(props) {
  const [show, setShow] = useState(false);
  const icon = <FontAwesomeIcon className= "commentsbubble" icon={faComments} size="lg"/>
  const editIcon = <FontAwesomeIcon className="editIcon" icon={faEdit} size="lg"/>
  const trashIcon = <FontAwesomeIcon className="trashIcon" icon={faTrashAlt} size="lg"/>
  const toggleModal = () => {
    setShow(!show);
  };

  const { currentUser, posts, handleDelete, setPosts } = props;

  if (currentUser?.id === posts.user_id) {
  }

  return (
    <div>
      <h3 className ="greeting">
      
        Hello {currentUser.name.slice(0, 2)} .... I mean User {currentUser.id}!
      </h3>
      <CreatePostUser
        currentUser={currentUser}
        posts={posts}
        setPosts={setPosts}
      />
      <h2 className ="posts">Posts</h2>
      <hr/>
      {currentUser &&
        posts
          .filter((post) => {
            return post.user_id === currentUser.id;
          })
         .reverse().map((post) => (
            <div className = "lol" key={post.id}>
              <p className="post">{post.content} </p>
             <div className="userContainer">
             <div className = "small">
              <Link to={`/posts/${post.id}`}>
               {icon} {post.comments.length}
              </Link>
              <Link to={`/users/${currentUser.id}/posts/${post.id}/edit`}>
                  <button className = "edit">{editIcon}</button>
              </Link>

                 <button className = "delete"onClick={() => setShow(post.id)}> {trashIcon} </button>
                 </div>
                </div>
            </div>
          ))}
      {show && (
        <Modal
          posts={posts}
          handleDelate={handleDelete}
          show={show}
          setShow={setShow}
          toggleModal={toggleModal}
        >
          <p>Are you sure?</p>
          <button onClick={() => setShow(false)}>no</button>
          <button
            onClick={() => {
              handleDelete(show);
              setShow(false);
            }}
          >
            yes
          </button>
        </Modal>
      )}
    </div>
  );
}

export default UserProfile;
