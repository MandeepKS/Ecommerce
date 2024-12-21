import React from 'react'

export default function Footer() {
  return (   
        <footer className="footer p-5">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h3>Ecom-Store</h3>
                </div>
                <div className="col-md-3">
                    <h5>About Us</h5>
                    
                </div>
                <div className="col-md-3">
                    <h5>Contact Us</h5>                    
                </div>
                <div className="col-md-3">
                    <h5>Follow Us</h5>
                    <ul className="list-inline footer-links">
                        <li className="list-inline-item">
                          <a href="/">
                                <i className="fab fa-facebook"></i>
                          </a>
                          </li>
                        <li className="list-inline-item">
                          <a href="/">
                                <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="/">
                                <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="/">
                                <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-6">
                    <p>&copy; 2024 Ecom-Store. All rights reserved.</p>
                </div>
                <div className="col-md-6 text-end">
                    <ul className="list-inline footer-links">
                        <li className="list-inline-item">
                            <a href="/" className="text-white">
                                Privacy Policy
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/" className="text-white">
                                Terms of Service
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/" className="text-white">
                                Sitemap
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
   
  )
}
