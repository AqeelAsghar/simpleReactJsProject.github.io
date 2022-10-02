import React from "react";
import { Link } from "react-router-dom";

const Common = (props)=> {
  return (
    // we use fragmention becuase we cant return multiple view
      <> 
         <section id="header" className="d-flex align-items-center">
          <div className='container-fluid '>
            <div className='row'>
             <div className='col-12 max-auto'> 
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                   
                  <h1>
                    {props.name} <strong className="brand-name">TRA the risk Advisors</strong>
                  </h1>
                  
                  <div>
                  <h2>
                    We are a member of our missions to help you get in touch with us.
                  </h2>
                  <div className="my-3">
                                          <Link to={props.visit} className="btn-get-started" >{props.btnName}</Link>
                  </div>
                  </div>
                </div>
              <div className="col-lg-6 order-1 order-lg-2 header-image">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/employees-solving-problem-2776102-2315077.png" alt="Employees solving Problem Illustration" loading="lazy" width="450" height="350" className="img-fluid animated"/>

              </div>
              </div>
             </div>
            </div> 
          </div>

         </section>
    
      </>
  );
}

export default Common;
