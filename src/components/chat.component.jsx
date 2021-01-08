import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./chat.style.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { AttachFile, InsertEmoticon } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {/* you can make this a component everything between this */}

        <p className="chat__message">
          <span className="chat__name">Yadnesh Bhau</span>
          This is a message here
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        {/*                    and this                 */}
        <p className="chat__message chat__receiver">
          <span className="chat__name">Yadnesh Bhau</span>
          This is a message here
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Yadnesh Bhau</span>
          This is a message here
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">Yadnesh Bhau</span>
          This is a message here
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form action="">
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send message</button>
        </form>
        <IconButton>
          <SendIcon />
        </IconButton>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
