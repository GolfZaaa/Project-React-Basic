import React from "react";
import { Formik } from "formik";
import imagelogin from "../assets/img/image/BestSeller1.png";

import "../../src/css/Login.css";
const Login = () => {
  return (
    // <section className="login_box_area section-margin">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-6">
    //         <div className="login_box_img">
    //           <div className="hover">
    //             <img src={imagelogin}  height={100}/>
    //             <h4>New to our website?</h4>
    //             <p>
    //               There are advances being made in science and technology
    //               everyday, and a good example of this is the
    //             </p>
    //             <a className="button button-account" href="register.html">
    //               Create an Account
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-6">
    //         <div className="login_form_inner">
    //           <h3>Log in to enter</h3>
    //           <Formik
    //             initialValues={{ email: "", password: "" }}
    //             validate={(values) => {
    //               let errors = {};
    //               if (!values.email && !values.password) {
    //                 errors.email = "กรุณากรอกอีเมล";
    //                 errors.password = "กรุณากรอกรหัสผ่าน";
    //               } else if (
    //                 !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
    //                   values.email
    //                 )
    //               ) {
    //                 errors.username = "Invalid email address";
    //                 errors.username = "Invalid email address";
    //               }
    //               return errors;
    //             }}
    //             onSubmit={(values, { setSubmitting }) => {
    //               setTimeout(() => {
    //                 alert(JSON.stringify(values, null, 2));
    //                 setSubmitting(false);
    //               }, 400);
    //             }}
    //           >
    //             {({
    //               values,
    //               errors,
    //               touched,
    //               handleChange,
    //               handleBlur,
    //               handleSubmit,
    //               isSubmitting,
    //               /* and other goodies */
    //             }) => (
    //               <form
    //                 onSubmit={handleSubmit}
    //                 className="row login_form"
    //                 action="#/"
    //                 id="contactForm"
    //               >
    //                 <div className="col-md-12 form-group">
    //                   <input
    //                     type="email"
    //                     name="email"
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.email}
    //                     placeholder="Email"
    //                     className="form-control"
    //                   />
    //                   {errors.email && touched.email && errors.email}
    //                 </div>

    //                 <div className="col-md-12 form-group">
    //                   <input
    //                     type="password"
    //                     name="password"
    //                     onChange={handleChange}
    //                     onBlur={handleBlur}
    //                     value={values.password}
    //                     placeholder="Password"
    //                     className="form-control"
    //                   />
    //                   {errors.password && touched.password && errors.password}
    //                 </div>

    //                 <div className="col-md-12 form-group">
    //                   <div className="creat_account">
    //                     <input type="checkbox" id="f-option2" name="selector" />
    //                     <label htmlFor="f-option2">Keep me logged in</label>
    //                   </div>
    //                 </div>

    //                 <button
    //                   type="submit"
    //                   value="submit"
    //                   className="button button-login w-100"
    //                   disabled={isSubmitting}
    //                 >
    //                   Submit
    //                 </button>
    //               </form>
    //             )}
    //           </Formik>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <>
      <div className="container">
        <div className="cardlogin">
          <a className="login">Login</a>
          <div className="inputBox">
            <input type="text" required="required" />
            <span className="user">Username</span>
          </div>
          <div className="inputBox">
            <input type="password" required="required" />
            <span>Password</span>
          </div>
          
          <div className="cntr">
            <input
              defaultChecked
              type="checkbox"
              id="cbx"
              className="hidden-xs-up"
            />
            <label htmlFor="cbx" className="cbx" />
          </div>
          
          <span className="remember">Keep me logged in</span>

          <button className="enter">Login</button>
          <a className="Registernow" href="/Register">Not a member? Register Now</a>
        </div>
      </div>
    </>
  );
};

export default Login;
