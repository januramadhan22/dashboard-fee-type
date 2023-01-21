import React, { useState, useEffect, useRef } from "react";
import DataTables from "datatables.net";

import { MdDragIndicator } from "react-icons/md";
import {
  HiOutlinePencilAlt,
  HiOutlineEye,
  HiOutlineTrash,
} from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";

import axios from "axios";
import { Table } from "react-bootstrap";

function Tables() {
  const [datas, setDatas] = useState([]);
  const [topButton, setTopButton] = useState(false);
  const [status, setStatus] = useState(false);

  // let table = new DataTables("#example", {
  //   // options
  //   autoWidth: true,
  //   data: datas,
  //   columns: [
  //     { data: "name" },
  //     { data: "position" },
  //     { data: "office" },
  //     { data: "extn" },
  //     { data: "start_date" },
  //     { data: "salary" },
  //   ],
  // });

  const getDatas = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setDatas(res.data);
        console.log(datas);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <>
      <div id="data-table">
        {topButton && (
          <div id="table-top-btn">
            <div>
              <button
                className={`status-btn ${status && "status-btn-open"}`}
                onClick={() => setStatus(!status)}
              >
                UPDATE STATUS
                <IoMdArrowDropdown size={24} />
              </button>
              {status && (
                <div id="table-status-btn">
                  <button value="active">Active</button>
                  <button value="inactive">Inactive</button>
                </div>
              )}
            </div>
            <button className="remove-btn">REMOVE FEE TYPE</button>
          </div>
        )}
        <Table striped>
          <thead>
            <tr>
              <th className="top-left checkbox">
                <input
                  type="checkbox"
                  onClick={() => setTopButton(!topButton)}
                />
              </th>
              <th className="code">Fee Type Code</th>
              <th className="name">Fee Type Name</th>
              <th className="desc">Description</th>
              <th className="status">Status</th>
              <th className="top-right action">Actions</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((item) => (
              <tr key={item.id}>
                <td className="checkbox">
                  {item.completed == true ? (
                    <>
                      <MdDragIndicator />
                      <input type="checkbox" checked />
                    </>
                  ) : (
                    <>
                      <MdDragIndicator />
                      <input type="checkbox" />
                    </>
                  )}
                </td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.title}</td>
                <td>{item.completed ? "Inactive" : "Active"}</td>
                <td>
                  <div className="action-btn">
                    <div id="tooltip">
                      <span id="tooltip-edit">Click to edit</span>
                      <button>
                        <HiOutlinePencilAlt />
                      </button>
                    </div>
                    <div id="tooltip">
                      <span id="tooltip-view">Click to view detail</span>
                      <button>
                        <HiOutlineEye />
                      </button>
                    </div>
                    <div id="tooltip">
                      <span id="tooltip-delete">Click to delete</span>
                      <button>
                        <HiOutlineTrash />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Tables;
