import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
// import DataTables from "datatables.net";
// import $ from "jquery";

import DataTable from "react-data-table-component";

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

  const getDatas = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setDatas(res.data);
        console.log(datas);
      })
      .catch((err) => alert(err));
  };

  const handleDelete = async (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        alert("Telah berhasil menghapus");
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        getDatas();
      });
  };

  useEffect(() => {
    getDatas();
  }, []);

  /*Using datatables.net*/
  // $.DataTable = require("datatables.net");
  // const tableRef = useRef();
  // const tableName = "table1";

  // useEffect(() => {
  //   console.log(datas);
  //   console.log(tableRef.current);
  //   const table = $(tableRef.current).DataTable({
  //     data: datas,
  //     columns: [
  //       { title: "Name" },
  //       { title: "Position" },
  //       { title: "Office" },
  //       { title: "Extn." },
  //       { title: "Start data" },
  //       { title: "Salary" },
  //     ],
  //     destroy: true, // I think some clean up is happening here
  //   });
  //   // Extra step to do extra clean-up.
  //   return function () {
  //     console.log("Table destroyed");
  //     table.destroy();
  //   };
  // }, []);

  /* Using React Datatable */
  // const columns = [
  //   {
  //     name: "Fee Type Code",
  //     selector: (row) => row.id,
  //     sortable: true,
  //     maxWidth: "140px",
  //   },
  //   {
  //     name: "Fee Type Name",
  //     selector: (row) => row.title,
  //     sortable: true,
  //     maxWidth: "300px",
  //   },
  //   {
  //     name: "Description",
  //     selector: (row) => row.title,
  //     sortable: true,
  //     maxWidth: "540px",
  //   },
  //   {
  //     name: "Status",
  //     selector: (row) => (
  //       <p key={row.id}>{row.completed ? "Inactive" : "Active"}</p>
  //     ),
  //     sortable: true,
  //     center: true,
  //     maxWidth: "90px",
  //   },
  //   {
  //     button: true,
  //     name: "Actions",
  //     cell: (row) => (
  //       <div className="action-btn">
  //         <div id="tooltip">
  //           <span id="tooltip-edit">Click to edit</span>
  //           <button>
  //             <HiOutlinePencilAlt />
  //           </button>
  //         </div>
  //         <div id="tooltip">
  //           <span id="tooltip-view">Click to view detail</span>
  //           <Link to={`/todos/${row.id}`}>
  //             <button>
  //               <HiOutlineEye />
  //             </button>
  //           </Link>
  //         </div>
  //         <div id="tooltip">
  //           <span id="tooltip-delete">Click to delete</span>
  //           <button onClick={() => handleDelete(row.id)}>
  //             <HiOutlineTrash />
  //           </button>
  //         </div>
  //       </div>
  //     ),
  //     center: true,
  //   },
  // ];

  // const customStyles = {
  //   rows: {
  //     style: {
  //       minHeight: "40px",
  //     },
  //   },
  //   headCells: {
  //     style: {
  //       color: "#FFF",
  //       background: "#5E5E5E",
  //       paddingLeft: "8px",
  //       paddingRight: "8px",
  //     },
  //   },
  //   cells: {
  //     style: {
  //       paddingLeft: "8px",
  //       paddingRight: "8px",
  //     },
  //   },
  // };

  return (
    <>
      {/* <div>
        <table
          className="display"
          width="100%"
          ref={tableRef}
          id="example"
        ></table>
      </div> */}

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
                      <Link to={`/todos/${item.id}/edit`}>
                        <button>
                          <HiOutlinePencilAlt />
                        </button>
                      </Link>
                    </div>
                    <div id="tooltip">
                      <span id="tooltip-view">Click to view detail</span>
                      <Link to={`/todos/${item.id}`}>
                        <button>
                          <HiOutlineEye />
                        </button>
                      </Link>
                    </div>
                    <div id="tooltip">
                      <span id="tooltip-delete">Click to delete</span>
                      <button onClick={() => handleDelete(item.id)}>
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

      {/* <DataTable
        columns={columns}
        data={datas}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="600px"
        selectableRows
        selectableRowsHighlight
        customStyles={customStyles}
        actions={actionsMemo}
      /> */}
    </>
  );
}

export default Tables;
