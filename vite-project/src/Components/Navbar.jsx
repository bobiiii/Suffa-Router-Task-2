import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    
<nav className="navbar navbar-expand-lg   bg-body-tertiary"  >
  <div className="container-fluid bg-light">
    <Link className="navbar-brand" to="/">React-Router</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">Contact</Link>
        </li>
        {/* classes  dropdown dropdown-toggle role="button" data-bs-toggle="dropdown" aria-expanded="false"*/}
        <li  className="nav-item ">
          <Link className="nav-link " to="/categories" >
            Categories
          </Link>
          {/* <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="products/phones">Phones</Link></li>
            <li><Link className="dropdown-item" to="products/tablets">Tablets</Link></li>
            <li><Link className="dropdown-item" to="products/laptops">Laptops</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="google.com">Something else here</a></li>
          </ul> */}
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>



  )
}

export default Navbar