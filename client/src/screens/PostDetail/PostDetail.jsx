import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOnePost } from "../../services/posts";
import { destroyComment } from "../../services/comments";
import CreateComment from "../CreateComment/CreateComment";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./PostDetail.css";

function PostDetail(props) {
  const [post, setPost] = useState("");
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  const trashIcon = (
    <FontAwesomeIcon className="trashIcon" icon={faTrashAlt} size="lg" />
  );

  const history = useHistory();

  const { currentUser } = props;

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getOnePost(id);
      setPost(postData);
    };

    fetchPost();
  }, [id]);

  const handleDelete = async (id) => {
    await destroyComment(id);
    setComments((prevState) =>
      prevState.filter((comment) => comment.id !== id)
    );
    history.go(0);
  };
  if (!post) {
    return <h4 className="loading">Loading...</h4>;
  }

  return (
    <div className="post-detail">
      <div className="post-content">{post.content}</div>
      <p>{post.comments.length} comments</p>
      <div className="comment-container">
        {post.comments.map((comment) => (
          <React.Fragment key={comment.id}>
            <div className="user-comment">
              {comment.content}

              {currentUser?.id === comment.user_id && (
                <div className="button2" key={comments.id}>
                  <button
                    className="trash"
                    onClick={() => {
                      handleDelete(comment.id);
                    }}
                  >
                    {trashIcon}
                  </button>
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>

      <CreateComment postId={post.id} currentUser={currentUser} />
    </div>
  );
}

export default PostDetail;
