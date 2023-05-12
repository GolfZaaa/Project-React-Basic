import React, { Fragment, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import Select from "react-select";
import { NavLink } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { datatable } from "../../datatable.js";
import Table from "react-bootstrap/Table";
import "../../css/DashboardPrivate.css";

import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);


function Dashboard() {
  return (
    <>
      <div className="px-3">
        <div className="container-fluid">
          <div className="row g-3 my-2">
            <div className="col-md-3 p-1">
            <NavLink  to="/ListProduct">
              <div className="cardDash1">
                <div className="textcard1">
                  <h3 className="fs-2">230</h3> <p className="fs-5">Products</p>
                  <div className="IconDashboard1">
                    <lord-icon
                      src="https://cdn.lordicon.com/slkvcfos.json"
                      trigger="loop-on-hover"
                      colors="primary:#121331,secondary:#08a88a"
                      style={{ width: 100, height: 100 }}
                    ></lord-icon>
                  </div>
                </div>
              </div>
            </NavLink>
            </div>
            <div className="col-md-3 p-1">
            <NavLink to="/Sale">
              <div className="cardDash2">
                <div className="textcard2">
                  <h3 className="fs-2">2450</h3> <p className="fs-5">Sales</p>
                  <div className="IconDashboard2">
                    <lord-icon
                      src="https://cdn.lordicon.com/qhviklyi.json"
                      trigger="loop-on-hover"
                      style={{ width: 100, height: 100 }}
                    ></lord-icon>
                  </div>
                </div>
              </div>
            </NavLink>
            </div>
            <div className="col-md-3 p-1">
            <NavLink  to="/User">
              <div className="cardDash3">
                <div className="textcard3">
                  <h3 className="fs-2">2250</h3>
                  <p className="fs-5">User</p>
                  <div className="IconDashboard3">
                    <lord-icon
                      src="https://cdn.lordicon.com/dxjqoygy.json"
                      trigger="loop-on-hover"
                      style={{ width: 100, height: 100 }}
                    ></lord-icon>
                  </div>
                </div>
              </div>
              </NavLink>
            </div>
            <div className="col-md-3 p-1">
            <NavLink  to="/Comment">
              <div className="cardDash4">
                <div className="textcard4">
                  <h3 className="fs-2">132</h3>
                  <p className="fs-5">Comment</p>
                  <div className="IconDashboard4">
                    <lord-icon
                      src="https://cdn.lordicon.com/puvaffet.json"
                      trigger="loop-on-hover"
                      style={{ width: 100, height: 100 }}
                    ></lord-icon>
                  </div>
                </div>
              </div>
            </NavLink>
            </div>
          </div>
        </div>
        <span className="RecentText">Recent Orders</span>
        <table class="table caption-top bg-white rounded mt-2">
          <thead>
            <tr>
              <th scope="col">Id</th> <th scope="col">Product</th>
              <th scope="col">Category</th> <th scope="col">Price</th>
              <th scope="col">Quantity</th> <th scope="col">SubTotal</th>
              <th scope="col">Buyer's email</th> <th scope="col">Create Order</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th> <td>Backpack Purse</td> <td>backpack</td>{" "}
              <td>140</td>
              <td>24</td>
              <td>3360</td>
              <td>golf_1234_ag@hotmail.com</td>
              <td>1/17/2023</td>
            </tr>
            <tr>
              <th scope="row">2</th> <td>Baguette Bag</td> <td>luggage</td>
              <td>60</td>
              <td>42</td>
              <td>2520</td>
              <td>golf_1234_ag@hotmail.com</td>
              <td>12/9/2023</td>
            </tr>
            <tr>
              <th scope="row">3</th> <td>Basket Bag</td> <td>backpack</td>
              <td>30</td>
              <td>3</td>
              <td>60</td>
              <td>golf_1234_ag@hotmail.com</td>
              <td>14/5/2023</td>
            </tr>
            <tr>
              <th scope="row">4</th> <td>Bowling Bag</td> <td>luggage</td>
              <td>90</td>
              <td>140</td>
              <td>12780</td>
              <td>golf_1234_ag@hotmail.com</td>
              <td>17/12/2023</td>
            </tr>
            <tr>
              <th scope="row">5</th> <td>Bucket Bag</td> <td>luggage</td>
              <td>130</td>
              <td>150</td>
              <td>19500</td>
              <td>golf_1234_ag@hotmail.com</td>
              <td>22/7/2023</td>
            </tr>
            <tr>
              <th scope="row">6</th> <td>Crossbody Bag</td> <td>backpack</td>
              <td>10</td>
              <td>12</td>
              <td>120</td>
              <td>golf_1234_ag@hotmail.com</td>
              <td>12/2/2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
