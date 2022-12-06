import React from 'react'

export default function Header() {
  return (
    <>
<nav className=" nav justify-content-end navbar navbar-expand-lg text-danger navbar-light bg-primary">
  <div className="container-fluid ">
   
    <div className=" collapse navbar-collapse" id="navbarSupportedContent">
      <div>
      <a className="navbar-brand mt-2 mt-lg-0" href="#">
          <h1>LOGO</h1>
      </a>
      </div>
      <div>
      <ul className="  navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
      </div>
    </div>
    </div>

</nav>

</>
  )
}
