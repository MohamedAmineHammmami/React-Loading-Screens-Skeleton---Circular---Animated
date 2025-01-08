import React from "react";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import Skeleton from "../skeleton/Skeleton";

function Sidebar({ isLoading }) {
  return (
    <>
      {!isLoading ? (
        <div className="sidebarContainer">
          <div>
            <HomeIcon />
            <span>Home</span>
          </div>
          <div>
            <ExploreIcon />
            <span>Explore</span>
          </div>
          <div>
            <SubscriptionsIcon />
            <span>Subscriptions</span>
          </div>
          <div>
            <VideoLibraryIcon />
            <span>Library</span>
          </div>
        </div>
      ) : (
        <Skeleton type="sideBarSk" />
      )}
    </>
  );
}

export default Sidebar;
