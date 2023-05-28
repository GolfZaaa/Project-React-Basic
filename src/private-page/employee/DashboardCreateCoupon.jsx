import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../css/DashboardCreateCoupon.css'
import Select from "react-select";
import { NavLink } from "react-router-dom";


const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const DashboardCreateCoupon = () => {

  const [selectedOption, setSelectedOption] = useState(null);

    return (
      <>

      <NavLink className="nav-link scrollto" to="/">
        <div className="Backlistproduct">
          <button> Back </button>
        </div>
      </NavLink>

        <div className="cardlistcoupon">
          <h1 className="Create">Create Coupon</h1>
          <div className="container mt-4 namecate">
            <form>
              <div className="row col-9">
                <div className="form-group col-md-4">
                  <div className="form-group">
                    <label>Name Coupon</label>
                    <input
                      type="text"
                      className="form-control"
                      id="course"
                    />
                  </div>
                </div>
                <div className="form-group col-md-4">
                  <div className="form-group ">
                    <label>Discount</label>
                    <input
                      type="number"
                      className="form-control"
                      id="course"
                    />
                  </div>
                </div>

                <div className="form-group col-md-4">
                  <div className="form-group">
                    <label>Amount</label>
                    <input
                      type="number"
                      className="form-control"
                      id="course"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="CreatelistCoupon">
                  <button > Create </button>
                </div>

              </div>
            </form>
          </div>
        </div>

      </>
    );
}

export default DashboardCreateCoupon;