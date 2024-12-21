import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className="container">
        <h2>Contact Us</h2>
        <p>Our friendly team would love to hear from you! </p>
        <div className="mb-3">
          <label for="fullname" className="form-label">Full name</label>
          <input type="text" className="form-control" id="fullname" placeholder="full name" />
        </div>        
        <div className="mb-3">
          <label for="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label for="phone" className="form-label">Phone</label>
          <input type="phone" className="form-control" id="phone" placeholder="+47 4111122" />
        </div>
        <div className="mb-3">
          <label for="subject" className="form-label">Subject</label>
          <input type="text" className="form-control" id="subject" placeholder="subject" />
        </div>
        <div className="mb-3">
          <label for="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="8" placeholder="Type your message here" ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mb-3">Send</button>    
      </div> 
    </div>
  )
}
