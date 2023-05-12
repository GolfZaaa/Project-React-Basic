import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/ListProduct.css'
import Select from "react-select";
import { NavLink } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const ListProduct = () => {

  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(null);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [quantitytotal, setQuantityTotal] = useState("");
  const [products, setProduct] = useState([]);

    useEffect(() => {
      (async () => await Load())();
    }, []);
    async function Load() {
      
      const result = await axios.get("https://localhost:7254/api/Product/GetProduct");
      setProduct(result.data);
      console.log(result.data);
    }
    async function save(event) {
    
      event.preventDefault();
      try {
        await axios.post("https://localhost:7254/api/Product/CreateProduct", {
          
          name: name,
          description: description,
          quantity: quantity,
          price: price,
          quantitytotal:quantitytotal,
        
        });
        alert("Product Create Successfully");
            setId("");
            setName("");
            setDescription("");
            setQuantity("");
            setPrice("");
            setQuantityTotal("");
      
        Load();
      } catch (err) {
        alert(err);
      }
    }
   
    async function editProduct(products) {
      setName(products.name);
      setDescription(products.Description);
      setQuantity(products.quantity);
      setPrice(products.price);
      setQuantityTotal(products.quantitytotal)
    
      setId(products.id);
    }
   
    async function DeleteProduct(id) {
    await axios.delete("https://localhost:7254/api/Product/DeleteProduct/" + id);
     alert("Employee deleted Successfully");
     setId("");
     setName("");
     setDescription("");
     setQuantity("");
     setPrice("");
     setQuantityTotal("");

     Load();
    }

   
    async function update(event) {
      event.preventDefault();
      try {
   
    await axios.patch("https://localhost:7254/api/Product/UpdateProduct/"+ products.find((u) => u.id === id).id || id,
          {
          id: id,
          name: name,
          description: description,
          quantity: quantity,
          price: price,
          quantitytotal:quantitytotal,
   
          }
        );
        alert("Update Success");
        setId("");
        setName("");
        setDescription("");
        setQuantity("");
        setPrice("");
        setQuantityTotal("");
      
        Load();
      } catch (err) {
        alert(err);
      }
    }

    return (
      <>
        <NavLink className="nav-link scrollto" to="/">
          <div className="Backlistproduct">
            <button> Back </button>
          </div>
        </NavLink>

        <NavLink to="/CreateProduct">
          <div className="CreateProductlist">
            <button> Create </button>
          </div>
        </NavLink>

        {/* <div className="cardlistproduct">
          <h1 className="Create">Create Product</h1>
          <div className="container mt-4 namecate">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  hidden
                  value={id}
                  onChange={(event) => {
                    setId(event.target.value);
                  }}
                />

                <div className="row col-9">
                  <div className="form-group col-md-6">
                    <label>Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label>Category</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group col-md-8">
                <div className="form-group">
                  <label>Descripttion</label>
                  <input
                    type="text"
                    className="form-control inputarea"
                    id="course"
                    value={description}
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="row col-9">
                <div className="form-group col-md-4">
                  <div className="form-group">
                    <label>Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="course"
                      value={price}
                      onChange={(event) => {
                        setPrice(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="form-group col-md-4">
                  <div className="form-group ">
                    <label>Quantity</label>
                    <input
                      type="text"
                      className="form-control"
                      id="course"
                      value={quantity}
                      onChange={(event) => {
                        setQuantity(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="form-group col-md-4">
                  <div className="form-group">
                    <label>QuantityTotal</label>
                    <input
                      type="text"
                      className="form-control"
                      id="course"
                      value={quantitytotal}
                      onChange={(event) => {
                        setQuantityTotal(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="Createlistproduct">
                  <button onClick={save}> Create </button>
                </div>

                <div className="Updatelistproduct">
                  <button onClick={update}> Update </button>
                </div>


              </div>
            </form>
          </div>
        </div> */}

        <span className="textListProduct">List Product</span>


        <button className="download-buttonProduct">
          <div className="docsProduct">
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
          <div className="downloadProduct">
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


        <table
          className="table caption-top bg-white rounded mt-2 backgroundtable"
          align="center"
        >
          <thead>
            <tr>
              <th scope="col">Product Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              {/* <th scope="col">quantitytotal</th> */}
              <th scope="col" className="Settinglist">
                {" "}
                Setting
              </th>
            </tr>
          </thead>

          {products.map(function fn(product) {
            return (
              <tbody>
                <tr key={product.id}>
                  <th scope="row">{product.id} </th>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                  {/* <td>{product.quantitytotal}</td> */}
                  <td>
                    {/* <button
                      type="button"
                      className="btn btn-warning buttonedit"
                      onClick={() => editProduct(product)}
                    >
                      Edit
                    </button> */}
                    {/* <button
                      type="button"
                      className="btn btn-danger ml-2 buttondelete"
                      onClick={() => DeleteProduct(product.id)}
                    >
                      Delete
                    </button> */}


                    <button
                      className="noselectEdit"
                      type="button"
                      onClick={() => editProduct(product)}
                    >
                      <span className="text">Edit</span>
                      <span className="icon">
                          <AiOutlineCheck className="IconEdit" style={{width:20,height:20}}/>
                      </span>
                    </button>


                    <button
                      className="noselect"
                      type="button"
                      onClick={() => DeleteProduct(product.id)}
                    >
                      <span className="text">Delete</span>
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </>
    );
}

export default ListProduct;