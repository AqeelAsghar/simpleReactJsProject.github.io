/* to use bootstrap navbar first we copy paste the navbar code from the bootstrap offcial website
    1=> replace class with className 
    2=> close all self closing tabs properly
    3=> replace all <a> tag with the <Link> 

*/

import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const NavBar = () =>{
 return(
    <> 
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-12 max-auto'> 
        
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/" exact>TRA The Risk Advisors</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/' exact activeClassName='menu_active'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/service'} exact activeClassName='menu_active'>Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about' exact activeClassName='menu_active'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/contact' exact activeClassName='menu_active'>Contact us</Link>
        </li>
        </ul>
        
      
    </div>
  </div>
</nav>
      
</div>
        </div>
      </div>
    
    </>
 )

}

export default NavBar;
