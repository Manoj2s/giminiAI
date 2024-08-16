import React, { useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <div className="menu_box" onClick={() => setExtended((prev) => !prev)}>
          <img className="menu" src={assets.menu_icon} alt="" />
        </div>
        <div className="new_chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent_title">recent</p>
            <div className="recent_entry">
              <img src={assets.message_icon} alt="" />
              <p>What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div
          className="
         recent_entry"
        >
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="botton_item recent_entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="botton_item recent_entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
