import { useState, useEffect, React } from "react";
import { Link } from "react-router-dom";
import Likes from "../components/Likes";
import Modal from "../components/Modal";
import CreatePost from "./CreatePost";
import { getAllComments } from "../services/comments";
import { useParams } from "react-router-dom";

function Posts(props) {
  const [comments, setComments] = useState([]);
  const { posts, setPosts, handleDelete, currentUser } = props;
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

 
  return (
    <div>
      <CreatePost currentUser={currentUser} posts={posts} setPosts={setPosts} />

      <h3>Posts</h3>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.content}</h3>
          <Link to={`/posts/${post.id}`}>
                comments( {post.comments.length})
              </Link>
            
          
          {currentUser?.id === post.user_id && (
            <div key={post.id}>
              {/* <button>Like</button> */}
              <Link to={`/posts/${post.id}/edit`}>
                <button>Edit</button>
              </Link>
              <Likes allLikes={post.likes} posts={posts} postId={post.id} />

              <button onClick={() => setShow(post.id)}>delete</button>
            </div>
          )}
          {currentUser?.id !== post.user_id && (
            <>
              <Likes allLikes={post.likes} posts={posts} postId={post.id} />
              {/* <button>Like</button> */}
{/* 
              <Link to={`/posts/${post.id}`}>
                comments( {post.comments.length})
              </Link> */}
            </>
          )}
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

export default Posts;
