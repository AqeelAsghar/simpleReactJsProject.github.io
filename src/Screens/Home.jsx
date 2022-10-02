import React from "react";
import { Link } from "react-router-dom";
import Common from "../Components/Common";

const Home = ()=> {
  return (
    // we use fragmention becuase we cant return multiple view
      <> 
         <Common name='Grow your business with' visit='/service' btnName='Getting Started'/>
    
      </>
  );
}

export default Home;
