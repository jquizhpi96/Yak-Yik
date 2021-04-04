import { useState, React } from "react";
import { Link } from "react-router-dom";
import Likes from "../../components/Likes";
import Modal from "../../components/Modal";
import CreatePost from "../CreatePost/CreatePost";
import "./Posts.css"

function Posts(props) {
  const [comments, setComments] = useState([]);
  const { posts, setPosts, handleDelete, currentUser } = props;
  const [show, setShow] = useState(false);
const [postId, setPostId] = useState('')
  const toggleModal = () => {
    setShow(!show);
  };

 
  return (
  
    <div className="body">
      <CreatePost className="createPost" currentUser={currentUser} posts={posts} setPosts={setPosts} />

      <h2 className = "posts">Posts</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <div className="lol">
          <div className="post">{post.content}</div>
          {/* <Link to={`/posts/${post.id}`}>
                comments( {post.comments.length})
              </Link> */}
            
          
          {currentUser?.id === post.user_id && (
            <div className="userContainer" key={post.id}>
              {/* <button>Like</button> */}
              
              <Likes allLikes={post.likes} posts={posts} postId={post.id} />
              <Link to={`/posts/${post.id}`}>
                comments( {post.comments.length})
              </Link>
              <Link to={`/posts/${post.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => {
                setShow(curr => !curr)
                setPostId(post.id)
              }}>delete</button>
            </div>
          )}
          {currentUser?.id !== post.user_id && (
            <div className = 'userContainer'>
              < Likes allLikes={post.likes} posts={posts} postId={post.id} />
              <Link to={`/posts/${post.id}`}>
                comments( {post.comments.length})
              </Link>
              
            </div>
            )}
            </div>
        </div>
      ))}
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
          <button onClick={() => setShow(false)}>no</button>
          <button
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
  );
}

export default Posts;
