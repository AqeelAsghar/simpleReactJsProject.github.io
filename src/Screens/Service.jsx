import React from "react";
import { Link } from "react-router-dom";

const Service = ()=> {
  return (
    // we use fragmention becuase we cant return multiple view
      <> 
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              
              <div className="col-md-4 col-10 mx-auto">
                 <div class="card" >
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/employees-working-on-project-which-has-deadline-2776099-2315074.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">React Native </h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" class="btn btn-primary">Go somewhere</Link>
                    </div>
                  </div>
              </div>
              
              <div className="col-md-4 col-10 mx-auto">
                 <div class="card" >
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/unhappy-man-sitting-on-office-table-with-lots-of-work-papers-2776098-2315079.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">React Js</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" class="btn btn-primary">Go somewhere</Link>
                    </div>
                  </div>
              </div>


              <div className="col-md-4 col-10 mx-auto">
                 <div class="card" >
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/group-of-people-working-on-problem-solution-2776103-2315078.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">React Hooks</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" class="btn btn-primary">Go somewhere</Link>
                    </div>
                  </div>
              </div>

              
              <div className="col-md-4 col-10 mx-auto">
                 <div class="card" >
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/business-team-working-in-office-2776100-2315075.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Redux</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" class="btn btn-primary">Go somewhere</Link>
                    </div>
                  </div>
              </div>

              
              <div className="col-md-4 col-10 mx-auto">
                 <div class="card" >
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/business-team-working-on-solution-2776101-2315076.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">FireBase Authentication</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" class="btn btn-primary">Go somewhere</Link>
                    </div>
                  </div>
              </div>

              
              <div className="col-md-4 col-10 mx-auto">
                 <div class="card" >
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/employees-solving-problem-2776102-2315077.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Aritficial inteligence</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" class="btn btn-primary">Go somewhere</Link>
                    </div>
                  </div>
              </div>

              
             </div>
          </div>
        </div>
      </div>
    
      </>
  );
}

export default Service;
