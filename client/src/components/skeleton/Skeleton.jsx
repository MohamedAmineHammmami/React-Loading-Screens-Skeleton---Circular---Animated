import React from "react";
import "./skeleton.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

const FeedSkeleton = () => (
  <div className="postContainerSk">
    <div className="postThumbnailSk">
      <div className="imgRepSk"></div>
    </div>
    <div className="postMetaContainerSk">
      <div className="chanelLogoSk"></div>
      <div className="postDescSk">
        <h2></h2>
        <p></p>
        <p></p>
      </div>
    </div>
  </div>
);
const NavbarSkeleton = () => (
  <nav className="navbar">
    <div className="logo">
      <DehazeIcon style={{ fontSize: "30" }} />
      <div className="logoIconContainer">
        <div className="logoIcon">
          <div className="whiteTriangle"></div>
          <YouTubeIcon style={{ fontSize: "42", color: "red", zIndex: 2 }} />
        </div>
        <span>MAH</span>
      </div>
    </div>
    <div className="searchContainer">
      <div className="searchSection">
        <input type="text" placeholder="Search" />
        <SearchIcon />
      </div>
      <div className="vocalSection">
        <MicIcon />
      </div>
    </div>
    <div className="userSection">
      <div className="createPostSk"></div>
      <div className="notifySectionSk"></div>
      <div className="userIconSk"></div>
    </div>
  </nav>
);
const SidebarSkeleton = () => (
  <div className="sidebarContainerSk">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
function Skeleton({ type }) {
  if (type === "navbarSk") {
    return <NavbarSkeleton />;
  }
  if (type === "feedSk") {
    return Array(8).fill(<FeedSkeleton />);
  }
  if (type === "sideBarSk") {
    return <SidebarSkeleton />;
  }
}

export default Skeleton;
