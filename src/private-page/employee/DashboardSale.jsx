import React, { Fragment, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import Select from "react-select";
import { NavLink } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { datatable } from "../../datatable.js";
import Table from "react-bootstrap/Table";
import "../../css/DashboardSalePrivate.css";



function DashboardSale() {
  return (
    <>
      <NavLink to="/">
        <div className="BackSale">
          <button> Back </button>
        </div>
      </NavLink>

      <div className="px-3">
        <div className="container-fluid"></div>
        <span className="ListText">List Orders</span>
        
        <button className="download-buttonSale">
          <div className="docsSale">
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
          <div className="downloadSale">
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
          <thead className="Settinglist">
            <tr>
              <th scope="col">Id</th> <th scope="col">Product</th>
              <th scope="col">Category</th> <th scope="col">Price</th>
              <th scope="col">Quantity</th> <th scope="col">SubTotal</th>
              <th scope="col">Buyer's email</th> <th scope="col">Create Order</th>
              <th scope="col" >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="Settinglist" >
            <tr>
              <th scope="row">1</th> <td>Backpack Purse</td> <td>backpack</td>{" "}
              <td>140</td>
              <td>24</td>
              <td>3360</td>
              <td>golf_1234_ag@hotmail.com</td>
              <td>1/17/2023</td>
              <td>
                <lord-icon
                  src="https://cdn.lordicon.com/yqzmiobz.json"
                  trigger="loop"
                  delay="2000"
                  colors="primary:#66ee78"
                  style={{
                    width: 30,
                    height: 25,
                    position: "relative",
                  }}
                ></lord-icon>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th> <td>Baguette Bag</td> <td>luggage</td>
              <td>60</td>
              <td>42</td>
              <td>2520</td>
              <td>golf_1234_ag@hotmail.com</td>
              <td>12/9/2023</td>
              <td>
                <lord-icon
                  src="https://cdn.lordicon.com/yqzmiobz.json"
                  trigger="loop"
                  delay="2000"
                  colors="primary:#66ee78"
                  style={{
                    width: 30,
                    height: 25,
                    position: "relative",
                  }}
                ></lord-icon>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th> <td>Basket Bag</td> <td>backpack</td>
              <td>30</td>
              <td>3</td>
              <td>60</td>
              <td>golf_1234_ag@hotmail.com</td>
              <td>14/5/2023</td>

              <lord-icon
                src="https://cdn.lordicon.com/jfhbogmw.json"
                trigger="loop"
                delay="2000"
                colors="primary:#e83a30"
                style={{
                    width: 30,
                    height: 25,
                    position: "relative",
                    right:11,
                  }}
              ></lord-icon>
            </tr>
            <tr>
              <th scope="row">4</th> <td>Bowling Bag</td> <td>luggage</td>
              <td>90</td>
              <td>140</td>
              <td>12780</td>
              <td>golf_1234_ag@hotmail.com</td>
              <td>17/12/2023</td>

              <lord-icon
                src="https://cdn.lordicon.com/jfhbogmw.json"
                trigger="loop"
                delay="2000"
                colors="primary:#e83a30"
                style={{
                    width: 30,
                    right:11,
                    height: 25,
                    position: "relative",
                  }}
              ></lord-icon>
            </tr>
            <tr>
              <th scope="row">5</th> <td>Bucket Bag</td> <td>luggage</td>
              <td>130</td>
              <td>150</td>
              <td>19500</td>
              <td>golf_1234_ag@hotmail.com</td>
              <td>22/7/2023</td>

              <td>
                <lord-icon
                  src="https://cdn.lordicon.com/yqzmiobz.json"
                  trigger="loop"
                  delay="2000"
                  colors="primary:#66ee78"
                  style={{
                    width: 30,
                    height: 25,
                    position: "relative",
                  }}
                ></lord-icon>
              </td>
            </tr>
            <tr>
              <th scope="row">6</th> <td>Crossbody Bag</td> <td>backpack</td>
              <td>10</td>
              <td>12</td>
              <td>120</td>
              <td>golf_1234_ag@hotmail.com</td>
              <td>12/2/2023</td>

              <td>
                <lord-icon
                  src="https://cdn.lordicon.com/yqzmiobz.json"
                  trigger="loop"
                  delay="2000"
                  colors="primary:#66ee78"
                  style={{
                    width: 30,
                    height: 25,
                    position: "relative",
                  }}
                ></lord-icon>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DashboardSale;
