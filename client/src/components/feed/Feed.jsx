import React, { useEffect, useState } from "react";
import "./feed.css";
import axios from "axios";
import Post from "../post/Post";

function Feed() {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async (endpoint) => {
    try {
      const res = await axios.get(endpoint);
      setVideos(res.data.videos);
      console.log(res.data.videos);
    } catch (err) {}
  };

  useEffect(() => {
    fetchVideos("http://localhost:5000/api/videos");
  }, []);

  return (
    <div className="feedContainer">
      {videos.map((el, i) => {
        return <Post videos={el} key={i} />;
      })}
    </div>
  );
}

export default Feed;
