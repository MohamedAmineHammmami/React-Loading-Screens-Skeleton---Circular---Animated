import React from "react";
import "./post.css";
import me from "../../assets/me.jpg";

function Post({ videos }) {
  return (
    <div className="postContainer">
      <div className="postThumbnail">
        <img src={videos.img} alt="textImg" />
        <div className="duration">
          <span>{videos.duration}</span>
        </div>
      </div>
      <div className="postMetaContainer">
        <div className="chanelLogo">
          <img src={videos.channel.avatar} alt="test" />
        </div>
        <div className="postDesc">
          <h2>{videos.channel.name}</h2>
          <p>{videos.title}</p>
          <p>
            {videos.views} • {videos.date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
