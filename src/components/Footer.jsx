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
                    
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-6">
                    <p>&copy; 2024 Ecom-Store. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
   
  )
}
