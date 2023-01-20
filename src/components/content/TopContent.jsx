import React from "react";
import { IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";
import {
  AiOutlineSearch,
  AiOutlineDownload,
  AiOutlinePrinter,
  AiOutlineSync,
} from "react-icons/ai";
import { RxDoubleArrowDown } from "react-icons/rx";
import { FiFilePlus } from "react-icons/fi";
import { FaSync } from "react-icons/fa";

import { useState } from "react";

function TopContent() {
  const [advOption, setAdvOption] = useState(false);
  const [statChange, setStatChange] = useState(false);

  return (
    <div className="top-content">
      <div id="flow-step">
        <p>Master Data Management</p>
        <IoIosArrowForward />
        <p className="step-active">Fee Type</p>
      </div>
      <h1>Fee Type</h1>
      <div id="option-bar">
        <div className="top-option">
          <div className="left-items">
            <form className="search-form">
              <input
                type="text"
                placeholder="Search..."
                className="search-bar"
                minLength={0}
                maxLength={255}
              />
              <button className="search-btn">
                <AiOutlineSearch />
              </button>
            </form>
            <button
              onClick={() => setAdvOption(!advOption)}
              className="option-btn"
            >
              Advance Options <RxDoubleArrowDown className="option-arrow" />
            </button>
          </div>
          <div className="right-items">
            <button className="download-btn">
              <AiOutlineDownload />
            </button>
            <button className="print-btn">
              <AiOutlinePrinter />
            </button>
            <button className="new-btn">
              <FiFilePlus /> Create New
            </button>
          </div>
        </div>
        {advOption && (
          <div className="advanced-option">
            <div className="status-field">
              <h3>Status</h3>
              <button
                className={`status-btn ${statChange && "status-btn-open"}`}
                onClick={() => setStatChange(!statChange)}
              >
                Active <IoMdArrowDropdown size={24} />
              </button>
              {statChange && (
                <div className="status-menu">
                  <button value="active">Active</button>
                  <button value="inactive">Inactive</button>
                </div>
              )}
            </div>
            <button className="sync-btn">
              <AiOutlineSync className="sync-icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopContent;
