import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/detail.css";

import Sidebar from "../components/menubar/Sidebar";
import Headerbar from "../components/menubar/Header";
import TopContent from "../components/content/TopContent";
import "bootstrap/dist/css/bootstrap.min.css";

import { IoIosArrowForward } from "react-icons/io";
import { RiAlertFill } from "react-icons/ri";
import { FiAlertCircle } from "react-icons/fi";

function DetailPage(props) {
  const params = useParams();
  const { id } = params;

  const [detail, setDetail] = useState({});

  const getDetail = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div id="bbts-container">
      <Sidebar />
      <div id="bbts-main-container">
        <Headerbar />
        <div className="main-container">
          <div className="top-content">
            <div id="flow-step">
              <p>Master Data Management</p>
              <IoIosArrowForward />
              <Link to="/">
                <p>Fee Type</p>
              </Link>
              <IoIosArrowForward />
              <p className="step-active">Fee Type Details</p>
            </div>
            <h1>Fee Type Details</h1>
          </div>
          <div className="main-detail-field">
            <div className="top-main-content">
              <div className="top-left-content">
                <div className="type-name-detail">
                  <p>Fee Type Name</p>
                  <input disabled type="text" value={detail.title} />
                </div>
                <div className="type-desc-detail">
                  <p>Description</p>
                  <textarea disabled value={detail.title} />
                </div>
              </div>
              <div className="top-right-content">
                <h4>For Interface Purpose</h4>
                <div className="type-code-detail">
                  <p>
                    Fee Type Code <FiAlertCircle id="circle-alert" />
                  </p>
                  <input type="text" disabled placeholder={detail.id} />
                </div>
              </div>
            </div>
            <div className="bottom-main-content">
              <h4>Translation</h4>
              <div className="bottom-field-content">
                <div className="button-field">
                  <button className="indonesia">Indonesia</button>
                  <button>
                    Chinese Simplified <RiAlertFill id="triangle-icon" />
                  </button>
                  <p>
                    Note:{" "}
                    <span>
                      <RiAlertFill />
                    </span>{" "}
                    Incomplete data
                  </p>
                </div>
                <div className="input-field">
                  <div className="type-name-detail">
                    <p>Fee Type Name</p>
                    <input type="text" placeholder="" />
                  </div>
                  <div className="type-desc-detail">
                    <p>Description</p>
                    <textarea placeholder="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/">
            <button id="back-btn">BACK</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
