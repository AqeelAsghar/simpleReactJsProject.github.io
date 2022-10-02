import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })
  
  const InputEvent = (e) => {
    const { name, value } = e.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      }
    })
 }
  const formSubmit = (e) => { 
    e.preventDefault();
    alert(`${"your full name is " + data.fullName + " your Email is " + data.email + " your phone number is " + data.phone + " your message is " + data.message}`);
  }


  return (
    // we use fragmention becuase we cant return multiple view
      <> 
      <div className="my-5">
       <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name" name="fullName" value={data.fullName} onChange={InputEvent} />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter your Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="abc@example.com" name="email" value={data.email} onChange={InputEvent} />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">phone Number</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="phone" name="number" value={data.phone} onChange={InputEvent} />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent} ></textarea>
              </div>

              <div class="col-12">
                  <button class="btn btn-primary" type="submit">Submit form</button>
              </div>
           </form>
        </div>
        </div>
        </div>
      </>
  );
}

export default Contact;
