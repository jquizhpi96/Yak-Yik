import "./App.css";
import Layout from "./layouts/Layout";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import { getAllPosts } from "./services/posts";
import { destroyPost, putPost } from "./services/posts";
import Register from "./screens/Register/Register";
import PostDetail from "./screens/PostDetail/PostDetail";
import UserProfile from "./screens/UserProfile/UserProfile";
import Posts from "./screens/Posts/Posts";
import EditPost from "./screens/EditPost/EditPost";
import EditPostUser from "./screens/EditPostUser";
import Post from "./screens/Post";
import Home from "./screens/Home/Home";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/posts");
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/posts");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/");
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getAllPosts();
      setPosts(postData);
    };
    fetchPosts();
  }, []);

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
    duration: 0.5
  };

  const pageStyle = {
    position: "absolute"
  };
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  return (
    <div className="App">
      <AnimatePresence>
        {/* <motion.div
          initial="hidden"
          animate="visible"
          variants={variants} */}



        <Switch>
          <Route exact path="/">
            <Home handleLogin={handleLogin} currentUser={currentUser} />
          </Route>
          <Route exact path="/register">
            <Register handleRegister={handleRegister} />
          </Route>
          <Layout currentUser={currentUser} handleLogout={handleLogout}>
            {currentUser && (
              <>
                <Route exact path="/posts">
                  <Posts
                    posts={posts}
                    setPosts={setPosts}
                    currentUser={currentUser}
                    handleDelete={handleDelete}
                    postId={posts.Id}
                  />
                </Route>
                <Route exact path="/post/new">
                  <Post
                    currentUser={currentUser}
                    posts={posts}
                    setPosts={setPosts}
                  />
                </Route>
                <Route exact path="/posts/:id">
                  <PostDetail currentUser={currentUser} posts={posts} />
                </Route>
                <Route exact path="/posts/:id/edit">
                  <EditPost
                    posts={posts}
                    currentUser={currentUser}
                    handleUpdate={handleUpdate}
                  />
                </Route>

                <Route exact path="/users">
                  <UserProfile
                    currentUser={currentUser}
                    posts={posts}
                    setPosts={setPosts}
                    handleDelete={handleDelete}
                  />
                </Route>
                <Route exact path="/users/:id/posts/:id/edit">
                  <EditPostUser currentUser={currentUser} posts={posts} />
                </Route>
              </>
            )}
          </Layout>
        </Switch>
        {/* </motion.div> */}
      </AnimatePresence>
    </div>
  );
}

export default App;
