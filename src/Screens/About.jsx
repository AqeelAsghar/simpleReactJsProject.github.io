import React from "react";
import Common from "../Components/Common";

const About = ()=> {
  return (
    // we use fragmention becuase we cant return multiple view
      <> 
         <Common name='Welcome to Contact Page' visit='/contact' btnName='contact us'/>
    
      </>
  );
}

export default About;
