import React from 'react';

function Navbar(){
  return (
    <div className="Navbar">
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper grey darken-4">
            <a href="/" className="center brand-logo">Kaushal Patel</a>
            <a href="/" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="/" className="btn btn-floating btn-large waves-effect waves-light grey darken-2">
                <i className="material-icons">home</i>
                </a>
                <a onClick={topFunction} className="btn btn-floating btn-large waves-effect waves-light grey darken-2">
                <i className="material-icons">email</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-demo">
      <li>
        <a href="/">Home</a>
        <a onClick={topFunction}>Contact</a>
      </li>
      </ul>
    </div>
  )
}

function topFunction() {
  var contactObj = document.getElementById('contact-section');
  document.body.scrollTop = contactObj.offsetTop - 50; // For Safari
  document.documentElement.scrollTop = contactObj.offsetTop - 50; // For Chrome, Firefox, IE and Opera
}

export default Navbar;