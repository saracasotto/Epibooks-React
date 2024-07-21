import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyFooter = () => (
  <footer className="text-white text-center mt-2 p-3" 
  style={{
    backgroundColor: '#22908c',
    opacity: '0.9'}}>
      
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-1">
          <h5>About Us</h5>
          <p>
            <strong>EPIBOOKS</strong> 
            <br />“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”
          </p>
        </div>
        <div className="col-md-4 mb-1">
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li>Email: email@example.com</li>
            <li>Phone: +1 123 456 7890</li>
            <li>Address: 123 Main St, Anytown, USA</li>
          </ul>
        </div>
        <div className="col-md-4 mb-1">
          <h5>Follow Us</h5>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white d-block mb-2">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white d-block mb-2">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white d-block">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        <span>
          <strong>EPIBOOKS</strong> - Copyright {new Date().getFullYear()}
        </span>
      </div>
    </div>
  </footer>
);

export default MyFooter;
