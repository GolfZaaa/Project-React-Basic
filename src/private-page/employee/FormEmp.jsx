import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Select from "react-select";
import Dropzone from "react-dropzone";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { BsCalendarDate } from "react-icons/bs";
import '../../css/FormEmp.css'

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function FormEmp() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(null);
  return (
    <>
      <div className="row">
        <div className="form-group col-md-12 text-left">
          <NavLink to={-1}>
            <button type="button" className="btn btn-outline-danger">
              ย้อนกลับ
            </button>
          </NavLink>
          <div className="form-group col-md-12 text-right ">
          <NavLink to={"/"}>
            <button type="button" className="btn btn-outline-primary buttonposition">
              สร้าง
            </button>
          </NavLink>
        </div>
        </div>
      </div>
      <div className="card">
        {/* <div className="card-header">สำหรับทำฟอร์ม</div> */}
        <div className="card-body">
          <Formik
            enableReinitialize={true}
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
              phoneNumber: "",
              status: "",
            }}
            onSubmit={(values) => {
              let data = { ...values };
              console.log("data : " + JSON.stringify(data));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit} className="php-email-form">
                <div className="row">
                  <div className="col-3" style={{borderWidth:1}}>
                    <Dropzone
                      onDrop={(acceptedFiles) => console.log(acceptedFiles)}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <section>
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>
                              Drag 'n' drop some files here, or click to select
                              files
                            </p>
                          </div>
                        </section>
                      )}
                    </Dropzone>
                  </div>
                  <div className="row col-9">
                    <div className="form-group col-md-4">
                      <label htmlFor="name">ชื่อสินค้า</label>
                      <input
                        type="text"
                        name="name"
                        className={
                          "form-control" +
                          (errors.name && touched.name ? " is-invalid" : "")
                        }
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="name">ประเภทสินค้า</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="name">ราคา</label>
                      <input
                        type="text"
                        name="name"
                        className={
                          "form-control" +
                          (errors.name && touched.name ? " is-invalid" : "")
                        }
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="name">จำนวนสินค้า</label>
                      <input
                        type="text"
                        name="name"
                        className={
                          "form-control" +
                          (errors.name && touched.name ? " is-invalid" : "")
                        }
                      />
                    </div>
                    <div className="form-group col-md-16">
                      <label htmlFor="name">รายละเอียดสินค้า</label>
                      <input
                        type="text"
                        name="name"
                        className={
                          "form-control" +
                          (errors.name && touched.name ? " is-invalid" : "")
                        }
                      />
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

    </>
  );
}

export default FormEmp;