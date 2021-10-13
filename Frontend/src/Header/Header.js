import '../App.css';
import './Header.css';
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext';
import { useContext } from 'react';
import { useHistory } from 'react-router'
import Brandlogo from "../Home/IMAGES/brand_logo_3.png";
function Header() {
  const user = useContext(UserContext);
  const history = useHistory();

  const handleLogout = (event) => {
    event.preventDefault();
    if (user.token){
      console.log('fetching logout')
      fetch('http://127.0.0.1:8000/api/token/logout', {
        method: 'POST',
        headers: {
          Authorization: `Token ${user.token}`
        }
      }).then( (res) => {
        window.localStorage.clear();
        user.setToken('');
        user.setLoggedIn(false);
        user.setName('');
      })
    }
    history.push('/login');
    return
  }
  
  if (user.loggedIn === true) {
    return (
      <div className="my-0" >
              <nav className="navbar navbar-expand-lg  bg-dark ">
      <button className="navbar-toggler" type="button" 
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" aria-expanded="false" 
          aria-label="Toggle navigation">
          <h2>bar</h2>
          {/* <FontAwesomeIcon icon={faBars}  size="1x" className="text-white"  /> */}
      </button>
      <Link className="navbar-brand " to="/" >
          <img src={Brandlogo} className="img-fluid Brand_Logo lazy" alt="Brang_Logo"/>
      </Link>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav me-lg-5" >
      
                  <li className="nav-item" >
                      <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item" >
                      <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item" >
                      <Link className="nav-link" to="/profile">profile</Link>
                    </li>
                    <li className="nav-item" >
                <a className="nav-link" onClick={handleLogout} href="/">Logout</a>
                </li>
                  </ul>

      
      </div>
      
      </nav>
      </div>
    );
  } else {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg  bg-dark px-2  ">
<button className="navbar-toggler" type="button" 
    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" 
    aria-label="Toggle navigation">
    <h2>bar</h2>
    {/* <FontAwesomeIcon icon={faBars}  size="1x" className="text-white"  /> */}
</button>
<Link className="navbar-brand " to="/" >
    <img src={Brandlogo} className="img-fluid Brand_Logo lazy" alt="Brang_Logo"/>
</Link>
<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
<ul className="navbar-nav me-lg-5" >

            <li className="nav-item" >
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" to="/signup">SignUp</Link>
              </li>
            </ul>

    <form className="d-flex" >
    <input className="form-control me-2" type="search" placeholder="Filter" aria-label="Search"/>
    <button className="btn btn-outline-success" type="submit">Go</button>
    </form>

</div>

</nav>

      </div>
    );
  }
  
}

export default Header;


