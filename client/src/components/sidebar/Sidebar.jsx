import React from "react";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div className="homeContainer">
        <HomeIcon />
        <span>Home</span>
      </div>
      <div className="exploreContainer">
        <ExploreIcon />
        <span>Explore</span>
      </div>
      <div className="subscriptionContainer">
        <SubscriptionsIcon />
        <span>Subscriptions</span>
      </div>
      <div className="libraryContainer">
        <VideoLibraryIcon />
        <span>Library</span>
      </div>
    </div>
  );
}

export default Sidebar;
