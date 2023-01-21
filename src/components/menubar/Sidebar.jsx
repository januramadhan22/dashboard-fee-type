import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import { HiHome } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { GiHandBag } from "react-icons/gi";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [masterMenu, setMasterMenu] = useState(false);

  return (
    <>
      <div className="">
        <div id="bbts-sidebar" onClick={handleShow}>
          <span>
            <HiHome id="bbts-home-icon" />
          </span>
          <span>
            <GiHandBag id="bbts-bag-icon" />
          </span>
        </div>

        <Offcanvas id="bbts-sidebar-open" show={show} onHide={handleClose}>
          <Offcanvas.Body id="bbts-sidebar-body">
            <ul id="bbts-list-sidebar" className="bbts-sidebar-menu">
              <li className="menu">
                <HiHome id="bbts-home-icon" />
                Dashboard
              </li>
              <li
                onClick={() => setMasterMenu(!masterMenu)}
                className={`menu ${masterMenu && "menu-active"}`}
              >
                <GiHandBag id="bbts-bag-icon" /> Master Data Management
                <IoIosArrowForward id="bbts-arrow-icon" />
              </li>
              {masterMenu && (
                <ul className="bbts-sidebar-submenu">
                  <li>Standard Mark-Up</li>
                  <li>Standard Service Fee</li>
                  <li className="submenu-active">Fee Type</li>
                  <li>Frequent Traveler Program</li>
                  <li>Standard Ancillary Fee</li>
                  <li>Rating Type</li>
                  <li>Setup Flight Commision</li>
                  <li>Special Dates</li>
                  <li>Corporate Rating</li>
                </ul>
              )}
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default Sidebar;
