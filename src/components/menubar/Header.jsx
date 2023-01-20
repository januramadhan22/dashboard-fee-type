import React from "react";
import BBTSLogo from "../../assets/BAYU BUANA_LOGO_HORIZONTAL_COLOR.svg";

import { AiFillQuestionCircle, AiOutlineUser } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";
import { ImUser } from "react-icons/im";
import { FaLockOpen } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";

function Headerbar() {
  const [userMenu, setUserMenu] = useState(false);

  return (
    <div id="bbts-header">
      <img src={BBTSLogo} alt="BBTS" width={205} height={49} id="bbts-logo" />

      <div id="right-content">
        <button>
          <AiFillQuestionCircle className="content-icons" />
        </button>
        <button id="notif">
          <IoNotificationsOutline className="content-icons" />
          <div id="badge"></div>
        </button>
        <div id="user" onClick={() => setUserMenu(!userMenu)}>
          <AiOutlineUser className="user-image" />
          {userMenu && (
            <div className="menu">
              <div className="user-info">
                <AiOutlineUser className="user-image" />
                <div className="user-bio">
                  <p id="name">Patrick Jane</p>
                  <p id="job">Administrator</p>
                </div>
              </div>
              <button>
                <ImUser /> My Profile
              </button>
              <button>
                <FaLockOpen /> Change Password
              </button>
              <button>
                <HiOutlineLogout /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Headerbar;
