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

import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "../components/Footer";

function CreatePage() {
  const formik = useFormik({
    //initial value
    initialValues: { feeTypeName: "", description: "", feeTypeCode: "" },

    //validation scheme
    validationSchema: Yup.object({
      feeTypeName: Yup.string().required().min(1).max(255),
      description: Yup.string().required().min(1).max(4000),
      feeTypeCode: Yup.string().required().min(1).max(36),
    }),

    //handle submit
    onSubmit: (values) => {},
  });

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
              <p className="step-active">Create Fee Type</p>
            </div>
            <h1>Create Fee Type</h1>
          </div>
          <div className="main-detail-field">
            <div className="top-main-content">
              <div className="top-left-content">
                <form
                  onSubmit={formik.handleSubmit}
                  className="type-name-detail"
                >
                  <label>
                    Fee Type Name<span id="mandatory">*</span>
                  </label>
                  <div>
                    <input
                      type="text"
                      name="feeTypeName"
                      value={formik.values.feeTypeName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.feeTypeName &&
                      formik.errors.feeTypeName && (
                        <p id="mandatory-note">Fee Type Code is required</p>
                      )}
                  </div>
                </form>
                <form
                  onSubmit={formik.handleSubmit}
                  className="type-desc-detail"
                >
                  <label>Description</label>
                  <textarea
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  />{" "}
                </form>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className="top-right-content"
              >
                <h4>For Interface Purpose</h4>
                <div
                  className={`type-code-detail ${
                    formik.errors.feeTypeCode && "type-code"
                  }`}
                >
                  <label>
                    Fee Type Code<span id="mandatory">*</span>
                    <FiAlertCircle id="circle-alert" />
                  </label>
                  <div>
                    <input
                      type="text"
                      name="feeTypeCode"
                      value={formik.values.feeTypeCode}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.feeTypeCode &&
                      formik.errors.feeTypeCode && (
                        <p id="mandatory-note">Fee Type Code is required</p>
                      )}
                  </div>
                </div>
              </form>
            </div>
            <div className="bottom-main-content">
              <h4>Translation</h4>
              <div className="bottom-field-content">
                <div className="button-field">
                  <button className="indonesia">Indonesia</button>
                  <button>
                    Chinese Simplified <RiAlertFill id="triangle-icon" />
                  </button>
                  <p id="note">
                    Note:{" "}
                    <span>
                      <RiAlertFill id="triangle-icon-2" />
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
          <div id="button-action">
            <button onClick={formik.handleSubmit} id="save-btn">
              SAVE
            </button>
            <Link to="/">
              <button id="back-btn">CANCEL</button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CreatePage;
