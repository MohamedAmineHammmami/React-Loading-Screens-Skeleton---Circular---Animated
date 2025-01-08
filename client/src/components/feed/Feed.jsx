import React, { useEffect, useState } from "react";
import "./feed.css";
import axios from "axios";
import Post from "../post/Post";
import Skeleton from "../skeleton/Skeleton";

function Feed() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchVideos = async (url) => {
    setIsLoading(true);
    try {
      const res = await axios.get(url);
      setVideos(res.data.videos);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchVideos("http://localhost:5000/api/videos");
  }, []);

  return (
    <div className="feedContainer">
      {isLoading ? (
        <Skeleton type="feedSk" />
      ) : (
        videos.map((el, i) => {
          return <Post videos={el} key={i} />;
        })
      )}
    </div>
  );
}

export default Feed;
