import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Feed from "./components/feed/Feed.jsx";
import axios from "axios";
import "./App.css";
function App() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading);
  const fetchUser = async (url) => {
    setIsLoading(true);
    try {
      const res = await axios.get(url);
      setUser(res.data.user);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUser("http://localhost:5000/api/user");
  }, []);
  return (
    <div className="container">
      <Navbar user={user} isLoading={isLoading} />
      <div className="home">
        <Sidebar isLoading={isLoading} />
        <Feed />
      </div>
    </div>
  );
}

export default App;
