import React from "react";
import "../css/Cart.css";
import { IoTrashBinOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Imagehome8 from '../../src/assets/img/image/home8.png'
import Imagehome5 from '../../src/assets/img/image/home5.png'
import Imagehome2 from '../../src/assets/img/image/home2.png'


const Cart = () => {

  return (
    <div className="Cartbottom">
      {/*================Cart Area =================*/}
      <section className="cart_area">
        <div className="container">
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col" className="Quantityposi">
                      Quantity
                    </th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="media">
                        <div className="d-flex">
                          <img src={Imagehome8} alt="" width={120} height={120} />
                        </div>
                        <div className="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$360.00 </h5>
                    </td>
                    <td>
                      <div className="product_count">
                        <div className="conCart">
                          <span className="next"></span>
                          <span className="prev"></span>
                          <div id="box">
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                      <IoTrashBinOutline
                        color="red"
                        style={{
                          width: 25,
                          height: 80,
                          left: 15,
                          position: "relative",
                        }}
                      />
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="media">
                        <div className="d-flex">
                          <img src={Imagehome5} alt=""  width={120} height={120}/>
                        </div>
                        <div className="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>
                    <td>
                      <div className="product_count">
                        {/* <div class="input-number">
                          <input type="number" value="1" />
                        </div> */}

                        <div className="conCart">
                          <span className="next"></span>
                          <span className="prev"></span>
                          <div id="box">
                            <span>1</span>
                          </div>
                        </div>
                      </div>

                      <IoTrashBinOutline
                        color="red"
                        style={{
                          width: 25,
                          height: 80,
                          left: 15,
                          position: "relative",
                        }}
                      />
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="media">
                        <div className="d-flex">
                        <img src={Imagehome2} alt=""  width={120} height={120}/>
                        </div>
                        <div className="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>
                    <td>
                      <div className="product_count">
                        <div className="conCart">
                          <span className="next"></span>
                          <span className="prev"></span>
                          <div id="box">
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                      <IoTrashBinOutline
                        color="red"
                        style={{
                          width: 25,
                          height: 80,
                          left: 15,
                          position: "relative",
                        }}
                      />
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>
                  </tr>

                  <NavLink className="nav-link scrollto" to="/Products">
                    <div className="buttonCart">
                      <button> Continue To Shopping </button>
                    </div>
                  </NavLink>

                  <NavLink className="nav-link scrollto" to="/Checkout">
                    <div className="Checkout">
                      <button> Checkout </button>
                    </div>
                  </NavLink>

                  <div className="Subtotal">
                    <h5>Subtotal :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $1080.00</h5>
                  </div>
                  <h5 className="TextbuttonSubtotal"> Taxes and shipping calculated at checkout </h5>
                  
                </tbody>
                <tbody>
                  <tr className="linebutton">
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>


                  

              </table>
            </div>
          </div>
        </div>
      </section>
      {/*================End Cart Area =================*/}
    </div>
  );
};

export default Cart;
