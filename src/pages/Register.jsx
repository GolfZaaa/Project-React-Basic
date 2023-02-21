import React from "react";
import { Formik } from "formik";

const Register = () => {
    return (
        <>
            <section className="login_box_area section-margin">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="login_box_img">
                  <div className="hover">
                    <h4>Already have an account?</h4>
                    <p>
                      There are advances being made in science and technology
                      everyday, and a good example of this is the
                    </p>
                    <a className="button button-account" href="login.html">
                      Login Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="login_form_inner register_form_inner">
                  <h3>Create an account</h3>

                  <Formik
                    initialValues={{
                      username: "",
                      email: "",
                      password: "",
                      confirmpassword: "",
                    }}
                    validate={(values) => {
                      let errors = {};
                      if (
                        !values.email &&
                        !values.password &&
                        !values.username &&
                        !values.confirmpassword
                      ) {
                        errors.email = "กรุณาป้อนอีเมล";
                        errors.password = "กรุณาป้อนรหัสผ่าน";
                        errors.username = "กรุณาป้อนชื่อผู้ใช้";
                        errors.confirmpassword = "กรุณาป้อนรหัสผ่าน";
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email
                        )
                      ) {
                        errors.email = "Invalid email address";
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
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
                      /* and other goodies */
                    }) => (
                      <form
                        onSubmit={handleSubmit}
                        className="row login_form"
                        action="#/"
                        id="register_form"
                      >
                        <div className="col-md-12 form-group">
                          <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            className="form-control"
                            placeholder="Email"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Email'"
                          />
                          {errors.email && touched.email && errors.email}
                        </div>

                        <div className="col-md-12 form-group">
                          <input
                            type="username"
                            name="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            className="form-control"
                            placeholder="Username"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Username'"
                          />
                          {errors.username &&
                            touched.username &&
                            errors.username}
                        </div>

                        <div className="col-md-12 form-group">
                          <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            className="form-control"
                            placeholder="Password"
                          />
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </div>

                        <div className="col-md-12 form-group">
                          <input
                            type="confirmpassword"
                            name="confirmpassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmpassword}
                            className="form-control"
                            placeholder="ConfirmPassword"
                          />
                          {errors.confirmpassword &&
                            touched.confirmpassword &&
                            errors.confirmpassword}
                        </div>

                        <div className="col-md-12 form-group">
                          <div className="creat_account">
                            <input
                              type="checkbox"
                              id="f-option2"
                              name="selector"
                            />
                            <label htmlFor="f-option2">Keep me logged in</label>
                          </div>
                        </div>

                        <div className="col-md-12 form-group">
                          <button
                            type="submit"
                            value="submit"
                            className="button button-register w-100"
                            disabled={isSubmitting}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default Register;