import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOnePost } from "../../services/posts";
import { destroyComment } from "../../services/comments";
import CreateComment from "../CreateComment/CreateComment";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments} from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import "./PostDetail.css"
function PostDetail(props) {
  const [post, setPost] = useState("");
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const icon = <FontAwesomeIcon className= "commentsbubble" icon={faComments} size="lg"/>
  const editIcon = <FontAwesomeIcon className="editIcon" icon={faEdit} size="lg"/>
  const trashIcon = <FontAwesomeIcon className="trashIcon" icon={faTrashAlt} size="lg"/>
  const params = useParams();
  const history = useHistory();

  console.log(params);

  const { currentUser } = props;
  console.log(currentUser);
  console.log(comments);

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
    return <h4>Loading...</h4>;
  }

  return (
    <div className="post-detail">
      <div className="post-content">{post.content}</div>
      <p>{post.comments.length} comment</p>
      <div className= "comment-container">
      {post.comments.map((comment) => (
        <React.Fragment key={comment.id}>
          <div className="user-comment">{comment.content}

          {currentUser?.id === comment.user_id && (
            <div className="button2" key={comments.id}>
            
              <button className="trash"
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
