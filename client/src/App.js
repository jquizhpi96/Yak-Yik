import './App.css';
import Layout from './layouts/Layout';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import MainContainer from './containers/MainContainer';
import { getAllPosts } from "./services/posts";
import { destroyPost, postPost, putPost } from "./services/posts";

import Login from './screens/Login';
import Register from './screens/Register';
import PostDetail from './screens/PostDetail';
import UserProfile from './screens/UserProfile';
import Posts from './screens/Posts';
import EditPost from './screens/EditPost';

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
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
        handleDelete={handleDelete}
      >
        <Switch>
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
                  currentUser={currentUser}
                  handleDelete={handleDelete}
                />
              </Route>
              <Route exact path='/posts/:id'>
                <PostDetail
                  currentUser={currentUser}

                />
              </Route>
              <Route exact path='/posts/:id/edit'>
                <EditPost
                  posts={posts}
                  handleUpdate={handleUpdate}
                />
              </Route>

              <Route exact path='/user'>
                <UserProfile
                  currentUser={currentUser}
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
