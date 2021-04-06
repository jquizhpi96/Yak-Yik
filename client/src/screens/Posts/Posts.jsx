import { useState, React } from "react";
import { Link } from "react-router-dom";
import Likes from "../../components/Likes";
import Modal from "../../components/Modal";
import CreatePost from "../CreatePost/CreatePost";
import "./Posts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"


function Posts(props) {
  const { posts, setPosts, handleDelete, currentUser } = props;
  const [show, setShow] = useState(false);
  const icon = (
    <FontAwesomeIcon className="commentsbubble" icon={faComments} size="lg" />
  );
  const editIcon = (
    <FontAwesomeIcon className="editIcon" icon={faEdit} size="lg" />
  );
  const trashIcon = (
    <FontAwesomeIcon className="trashIcon" icon={faTrashAlt} size="lg" />
  );
  const [postId, setPostId] = useState("");

  const toggleModal = () => {
    setShow(!show);
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2
    }
  };
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.9
  };
  
 

  return (
    <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    >
    <div className="body">
      <CreatePost
        className="createPost"
        currentUser={currentUser}
        posts={posts}
        setPosts={setPosts}
      />

      <br />

      <div className="index">
        {posts
          .slice(0)
          .reverse()
          .map((post) => (
            <div key={post.id}>
              <div className="lol">
                <div className="post">{post.content}</div>

                {currentUser?.id === post.user_id && (
                  <div className="userContainer" key={post.id}>
                    <div className="small">
                      <Likes
                        allLikes={post.likes}
                        posts={posts}
                        postId={post.id}
                      />
                      <Link to={`/posts/${post.id}`}>
                        {icon} {post.comments.length}
                      </Link>
                      <Link to={`/posts/${post.id}/edit`}>
                        <button className="edit">{editIcon}</button>
                      </Link>
                      <button
                        className="delete"
                        onClick={() => {
                          setShow((curr) => !curr);
                          setPostId(post.id);
                        }}
                      >
                        {trashIcon}
                      </button>
                    </div>
                  </div>
                )}
                {currentUser?.id !== post.user_id && (
                  <div className="userContainer">
                    <Likes
                      allLikes={post.likes}
                      posts={posts}
                      postId={post.id}
                    />
                    <Link className="comments" to={`/posts/${post.id}`}>
                      {icon} {post.comments.length}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
      {show && (
        <Modal
          posts={posts}
          handleDelate={handleDelete}
          show={show}
          postsId={posts.id}
          setShow={setShow}
          toggleModal={toggleModal}
        >
          <p>Are you sure?</p>
          <br />
          <button className="no" onClick={() => setShow(false)}>
            no
          </button>
          <button
            className="yes"
            onClick={() => {
              handleDelete(postId);
              setShow(false);
            }}
          >
            yes
          </button>
        </Modal>
      )}
      </div>
      </motion.div>
  );
}

export default Posts;
