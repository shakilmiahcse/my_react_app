// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              We are an online store providing high-quality products for all your needs. Visit our shop and explore the best deals today.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/about" className="text-dark">About</a>
              </li>
              <li>
                <a href="/faq" className="text-dark">FAQ</a>
              </li>
              <li>
                <a href="/support" className="text-dark">Support</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">Facebook</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Instagram</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        &copy; 2024 MyStore. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
