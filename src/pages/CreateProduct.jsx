import React from "react";
import '../css/DashboardCreateProduct.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CreateProduct = () => {

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
        alert("Registation Updateddddd");
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
<h1>Create Product</h1>
        <div className="container mt-4">
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
            <div className="form-group ">
              <label>Descripttion</label>
              <input
                type="text"
                className="form-control Descriptposition"
                id="course"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
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
            <div>
              
            <Link to="/ListProduct" onClick={save}>
              <button className="btn btn-primary mt-4" >
                Create
              </button>
             </Link>

              <button className="btn btn-warning mt-4" onClick={update}>
                Update
              </button>
            </div>
          </form>
        </div>
</>



  )
}

export default CreateProduct;