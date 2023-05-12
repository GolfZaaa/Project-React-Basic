import React, { Fragment, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import Select from "react-select";
import { NavLink } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { datatable } from "../../datatable.js";
import Table from "react-bootstrap/Table";
import "../../css/DashboardComment.css";

function DashboardComment() {
  return (
    <>
      <NavLink to="/">
        <div className="BackSale">
          <button> Back </button>
        </div>
      </NavLink>

      <div className="px-3">
        <div className="container-fluid"></div>
        <span className="ListText">List Comment</span>


        <button className="download-buttonComment">
          <div className="docsComment">
            <svg
              className="css-i6dzq1"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              strokeWidth={2}
              stroke="currentColor"
              height={20}
              width={20}
              viewBox="0 0 24 24"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line y2={13} x2={8} y1={13} x1={16} />
              <line y2={17} x2={8} y1={17} x1={16} />
              <polyline points="10 9 9 9 8 9" />
            </svg>{" "}
            Docs
          </div>
          <div className="downloadComment">
            <svg
              className="css-i6dzq1"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              strokeWidth={2}
              stroke="currentColor"
              height={24}
              width={24}
              viewBox="0 0 24 24"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line y2={3} x2={12} y1={15} x1={12} />
            </svg>
          </div>
        </button>


        <table class="table caption-top bg-white rounded mt-2">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Email</th> <th scope="col">Text Comment</th>
              <th scope="col">Star Score</th> <th scope="col">Comment date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>golf_1234_ag@hotmail.com</td>
              <td>real-life situations where you have to state your opinion, e.g. a friend asks you for advice, your boss wants.</td>
              <td>3</td> <td>1/10/2023</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>wande@hotmail.com</td>
              <td>hear your opinion on a business matter. In English lessons, this is also a popular way of testing your English writing skills.</td>
              <td>3</td> <td>2/10/2023</td>
            </tr>
            <tr>
              <th scope="row">3</th> <td>Ganda@hotmail.com</td>
              <td>Think about the topic first. What's your opinion? What arguments can you use to support your ideas.</td>
              <td>1</td> <td>7/10/2023</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Bowlingag@hotmail.com</td>
              <td>Define the problem you are going to discuss and provide a short overview on what you think and why.</td>
              <td>4</td> <td>3/10/2023</td>
            </tr>
            <tr>
              <th scope="row">5</th> <td>Bucketag@hotmail.com</td>
              <td>state your opinion and give examples and arguments that support your opinion statement reason example</td>
              <td>5</td> <td>4/10/2023</td>
            </tr>
            <tr>
              <th scope="row">6</th> <td>Crossbody@hotmail.com</td>
              <td>find advantages and disadvantages comment on somebody's opinion (usually in a negative way).</td>
              <td>2</td> <td>5/10/2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DashboardComment;
