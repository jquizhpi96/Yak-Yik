import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Posts from "../screens/Posts";
import { getAllPosts } from "../services/posts";
import { destroyPost, postPost, putPost } from "../services/posts";

function MainContainer(props) {
  const [posts, setPosts] = useState([]);
  // const [comments, setComments] = useState([]);

  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getAllPosts();
      setPosts(postData);
    };
    fetchPosts();
  }, []);

  const handleCreate = async (postData) => {
    const newPost = await postPost(postData);
    setPosts((prevState) => [...prevState, newPost]);
    history.push("/posts");
  };
  const handleUpdate = async (id, postData) => {
    const updatedPost = await putPost(id, postData);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? updatedPost : post;
      })
    );
    history.push("/posts");
  };
  const handleDelete = async (id) => {
    await destroyPost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  return (
    <div>
      <Switch>
        <Route path="/">
          <Posts
            posts={posts}
            handleDelete={handleDelete}
            currentUser={currentUser}

          />
        </Route>
        <Route path="/posts/new"></Route>
        <Route path='/posts/:id/edit'></Route>
        
      </Switch>
    </div>
  );
}

export default MainContainer;
