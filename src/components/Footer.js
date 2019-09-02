import React from 'react';

function Footer(){
  return (
    <div className="Footer">
      <footer className="page-footer grey darken-4 grey-text text-lighten-4">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Kaushal Patel</h5>
            <p className="grey-text text-lighten-4">Passionate Full Stack Developer</p>
          </div>
          <div className="col l2 offset-l4 s12">
            <a onClick={topFunction} className="btn btn-floating btn-large waves-effect waves-light pulse grey darken-2">
              <i className="material-icons">arrow_upward</i>
            </a>
        </div>
        </div>
      </footer>
    </div>
  )
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export default Footer;