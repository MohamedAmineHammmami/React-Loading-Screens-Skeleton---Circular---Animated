import React from "react";
import "./navbar.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import AddIcon from "@mui/icons-material/Add";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import me from "../../assets/me.jpg";

function Navbar() {
  return (
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
        <div className="createPost">
          <AddIcon />
          <span>Create</span>
        </div>
        <div className="notifySection">
          <div className="notifyNumber">
            <span>3</span>
          </div>
          <NotificationsOutlinedIcon style={{ fontSize: "30" }} />
        </div>
        <div className="userIcon">
          <img src={me} alt="user" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
