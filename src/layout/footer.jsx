import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-3 mt-5 ">
      <div className="container">
        <div className="row ">

          <div className="col-md-4 mb-3">
            <h5 style={{ color: "#ffde00" }}>Learning Resources</h5>
            <p className='pt-2'>
              Curated articles and videos to support better learning. Built to help parents and learners explore quality content easily.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5 style={{ color: "#ffde00" }}>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/" className="text-light text-decoration-none">About</a></li>
              <li><a href="/" className="text-light text-decoration-none">Resources</a></li>
              <li><a href="/" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5 style={{ color: "#ffde00" }}>Contact Us</h5>
            <p className='mb-0'>Email: support@learningresources.com</p>
            <p>Phone: +91-8319686051</p>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center">
          <small>&copy; {new Date().getFullYear()} Learning Resources Browser. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
