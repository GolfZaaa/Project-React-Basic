import React, { Fragment, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import Select from "react-select";
import { Link, NavLink } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { datatable } from "../../datatable.js";
import Table from 'react-bootstrap/Table'

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function ShowEmp() {
  const [selectedOption, setSelectedOption] = useState(null);

  const [search, setSearch] = useState("");

  return (

    <>
          <div className="row">
        <div className="form-group col-md-12 text-right">
          <NavLink to="/ListProduct">
            <button type="button" className="btn btn-outline-primary">
              Create
            </button>
          </NavLink>
        </div>
      </div>

      <div className="App" >
        <Container>
          <h1 className="text-center mt-4">ListProduct</h1>
          <Form>
            <InputGroup className="my-3">
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search contacts"
              />
            </InputGroup>
          </Form>
          <Table class="table table-bordered" >
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>QuantityTotal</th>
              </tr>
            </thead>
            <tbody>
              {datatable
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.name.toLowerCase().includes(search);
                })
                .map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.Quantity}</td>
                    <td>{item.QuantityTotal}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
}

export default ShowEmp;
