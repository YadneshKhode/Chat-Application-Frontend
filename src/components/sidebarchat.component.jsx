import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebarchat.style.css"

const SidebarChat = () => {
  return <div className="sidebarChat">
      <Avatar/>
      <div className="sidebar__chatInfo">
          <h2>Room Name</h2>
          <p>This is the last message</p>
      </div>
  </div>;
};

export default SidebarChat;
