import React from 'react'
import Brandlogo from "../Home/IMAGES/brand_logo_3.png"

function Footer_3()
{
    return   <div className="container text-white bg-dark">
<div className="row justify-content-evenly text-center">

          <div className="col-12  col-lg-3  my-3  ">
                <ul className="nav ">
                      <li className="nav-item">
                      <a className="nav-link" href="Terms.html">Terms</a>
                      </li>
                      <li className="nav-item Footer_ul_li_border">
                      <a className="nav-link" href="privacy.html">privacy</a>
                      </li>
                      <li className="nav-item">
                      <a className="nav-link" href="Policy.html"> Policy</a>
                      </li>
                </ul>
          </div>

          <div className="col-12  col-lg-3  my-3 text-center ">
                <a className="navbar-brand img-fluid" href="Index.html">
                <img src={Brandlogo} className="img-fluid Brand_Logo" alt="Brang_Logo"/>
                </a>
          </div>

      <div className="col-12  col-lg-3 my-3 ">
            <p className="Designerborder" >
            This website was designed by  <span>dineshaa</span> 
            </p>
      </div>


        <div className="col-12  col-lg-3 my-3 ">
          <p>
          &#169; All copywrites reserved 2021
          </p>
          </div>
          </div>
  </div>;
  

};

export default Footer_3;