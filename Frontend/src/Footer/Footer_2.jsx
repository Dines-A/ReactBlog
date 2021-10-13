import React from 'react'
// import '../../CSS/Footer.css';
import { SocialIcon } from 'react-social-icons';

class Footer_2 extends React.Component {
  saysometning = (event) =>
  {
    event.preventDefault();
    let msg = document.getElementById('saysometning') 
    if (msg !== " ")
    {
      alert("🙌" );
    }
    else
    {
      alert("😢");
      }
}
  render() {
    
    return (
      <div className="container bg-dark" >
        <div className="row  text-white py-5">

          <div className="col-md-12 col-lg-3 text-center">
            <div className="h5">
              about Us
            </div>
            <p className="mt-5" >
              Bannari amman institute of technology
              sathyamangalam erode
            </p>

          </div>

          <div className="col-md-12 col-lg-3 text-center">
            <div className="h5">
              Foodie
            </div>
            <p className="mt-5" >
              "You can post your thoughts"
            </p>
          </div>

          <div className="col-md-12 col-lg-3 text-center">
            <div className="h5">
              Email
            </div>
            <form action="" className="mt-5" onSubmit={this.saysometning} >
              <div className="input-group mb-3 input-group-lg">
                <input type="text" className="form-control"  id="saysometning" name="saysometning" />
                <button className="btn btn-primary" type='submit'  >sent</button>
              </div>
            </form>
          </div>

          <div className="col-md-12 col-lg-3 text-center pb-5">
            <div className="h5">
              join
            </div>



            <ul className="nav justify-content-center mt-4 socialmedia_icons">

              <li className="nav-item">
                <a className="nav-link " href="update.html"><SocialIcon url="https://www.instagram.com/imdin_sh20/" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="update.html"><SocialIcon url="https://twitter.com/home" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="update.html"><SocialIcon url="https://www.facebook/" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="update.html"><SocialIcon url="https://www.linkedin.com/in/dinesh-a-165729199/" /></a>
              </li>

            </ul>


          </div>

          <hr />






        </div>
      </div>
    )
  }
  };
  export default Footer_2;
 

