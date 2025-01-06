import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Feed from "./components/feed/Feed.jsx";
import "./App.css";
function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="home">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
