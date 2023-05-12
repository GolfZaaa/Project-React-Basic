import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <>
    
    <div className="contact-form">
  <span className="heading">Contact Us</span>
  <form>
    {/* <label htmlFor="name">Name:</label>
    <input type="text" required />
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required /> */}
    <label htmlFor="message" >Message:</label>
    <textarea id="message" name="message" required defaultValue={""} placeholder="Type The Problem..." />
    <form className="form">
  <span className="form-title">Upload your Image</span>
  <p className="form-paragraph">
    File should be an image
  </p>
  <label htmlFor="file-input" className="drop-container">
    <span className="drop-title">Drop files here</span>
    or
    <input type="file" accept="image/*" required id="file-input" />
  </label>
</form>
    <button type="submit">Submit</button>
  </form>
</div>

      
    </>
  );
};

export default Contact;
