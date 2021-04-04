import './App.css';
import Layout from './layouts/Layout';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import { getAllPosts } from "./services/posts";
import { destroyPost, putPost } from "./services/posts";
import CreatePost from './screens/CreatePost/CreatePost';
import Login from './screens/Login';
import Register from './screens/Register';
import PostDetail from './screens/PostDetail';
import UserProfile from './screens/UserProfile';
import Posts from './screens/Posts/Posts';
import EditPost from './screens/EditPost';
import EditPostUser from './screens/EditPostUser';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const history = useHistory()


  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }
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
    history.push("/");
  };
  const handleDelete = async (id) => {
    await destroyPost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  return (
    <div className="App">
      {/* <h1>Yak Yik</h1> */}
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}

      >

        <Switch >
          <Route path='/login'>
            <Login
              handleLogin={handleLogin}
            />
          </Route>
          <Route path='/register'>
            <Register
              handleRegister={handleRegister}
            />
          </Route>
          {currentUser && (
            <>
              <Route exact path='/'>
                < Posts
                  posts={posts}
                  setPosts={setPosts}
                  currentUser={currentUser}
                  handleDelete={handleDelete}
                  postId={posts.Id}
                />
              </Route>
              <Route exact path='/posts/:id'>
                <PostDetail
                  currentUser={currentUser}
                  posts={posts}

                />
              </Route>
              <Route exact path='/posts/:id/edit'>
                <EditPost
                  posts={posts}
                  currentUser={currentUser}
                  handleUpdate={handleUpdate}
                />
              </Route>

              <Route exact path="/posts">
                <CreatePost
                  currentUser={currentUser}
                  posts={posts}
                  setPosts={setPosts}
                />
              </Route>

              <Route exact path='/users'>
                <UserProfile
                  currentUser={currentUser}
                  posts={posts}
                  setPosts={setPosts}
                  handleDelete={handleDelete}

                />
              </Route>
              <Route exact path='/users/:id/posts/:id/edit'>
                <EditPostUser
                  currentUser={currentUser}
                  posts={posts}

                />
              </Route>

            </>
          )}

        </Switch>
      </Layout>
    </div>
  );
}

export default App;
