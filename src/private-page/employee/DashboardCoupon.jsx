import React, { Fragment, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import Select from "react-select";
import { NavLink } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { datatable } from "../../datatable.js";
import Table from "react-bootstrap/Table";
import "../../css/DashboardCreateCoupon.css";
import { BiEdit } from "react-icons/bi";


function DashboardCoupon() {
  return (
    <>
      <NavLink to="/">
        <div className="BackSale">
          <button> Back </button>
        </div>
      </NavLink>

      <NavLink to="/CreateCoupon">
        <div className="CreateCoupon">
          <button> Create </button>
        </div>
      </NavLink>

      <div className="px-3">
        <div className="container-fluid"></div>
        <span className="ListText">List Coupon</span>

        <button className="download-buttonUser">
          <div className="docsUser">
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
          <div className="downloadUser">
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
          <thead className="middle">
            <tr >
              <th scope="col" >Id</th> <th scope="col">NameCoupon</th>
              <th scope="col">Discount</th> <th scope="col">Amount</th>
              <th scope="col">Register date</th> <th scope="col">Setting</th>
            </tr>
          </thead>
          <tbody className="middle">
            <tr >
              <th scope="row">1</th> <td>ASH19AJ</td>
              <td>20%</td> <td>54</td>
              <td>1/10/2023</td>
              <td>
              <NavLink to="/UpdateCoupon">
                <BiEdit size={25}  color="red"/>
                </NavLink>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th> <td>N1JAAMW3</td>
              <td>40%</td> <td>17</td>
              <td>2/10/2023</td>
              <td>
                 <NavLink to="/UpdateCoupon">
                <BiEdit size={25}  color="red"/>
                </NavLink>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th> <td>OJW8EQAC</td> <td>15%</td> <td>4</td>
              <td>7/10/2023</td>
              <td>
              <NavLink to="/UpdateCoupon">
                <BiEdit size={25}  color="red"/>
                </NavLink>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th> <td>KMM0A2PR</td> <td>30%</td> <td>71</td>
              <td>3/10/2023</td>
              <td>
              <NavLink to="/UpdateCoupon">
                <BiEdit size={25}  color="red"/>
                </NavLink>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th> <td>S7YQH1LA</td> <td>10%</td> <td>21</td>
              <td>4/10/2023</td>
              <td>
              <NavLink to="/UpdateCoupon">
                <BiEdit size={25}  color="red"/>
                </NavLink>
              </td>
            </tr>
            <tr>
              <th scope="row">6</th> <td>UI91VAZI</td> <td>5%</td> <td>70</td>
              <td>5/10/2023</td>
              <td>
              <NavLink to="/UpdateCoupon">
                <BiEdit size={25}  color="red"/>
                </NavLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DashboardCoupon;
