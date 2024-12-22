import React, {useState} from 'react'

 function Contact() {
  const [formData, setFormData] = useState({
   fullname :'',
    email :'',
    phone :'',
    subject :'',
    message :''
  });
  const [errors,setErrors] = useState({});

  const handleChange = (e) => {
    const {id, value} = e.target;
    setFormData({...formData, [id]: value});
  };

  const validate = () => {
    const validationErrors = {};
    if(!formData.fullname.trim()){
      validationErrors.fullname = 'Please enter your full name';
    } else if (formData.fullname.length < 3) {
      validationErrors.fullname ='Minimum 3 characters required';
    }
     // Email validation
     if (!formData.email) {
      validationErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Enter a valid email address';
    }
    // Phone validation
    if (!formData.phone.trim()) {
      validationErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9]{7,15}$/.test(formData.phone)) {
      validationErrors.phone = 'Enter a valid phone number';
    }
    // Subject validation
    if (!formData.subject.trim()) {
      validationErrors.subject = 'Subject is required';
    }else if (formData.subject.length < 3) {
      validationErrors.subject = 'Minimum 3 characters required';
    }

    // Message validation
    if (!formData.message.trim()) {
      validationErrors.message = 'Message is required';
    }else if (formData.message.length < 3 ) {
      validationErrors.message = 'Minimum 3 characters required';
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Thank you for your message!');
      // Reset form fields after successful submission
      setFormData({
        fullname: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setErrors({});
    }
  };

  
  return (
    <div>
      <div className="section_contact-us">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Our friendly team would love to hear from you! </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullname" className="d-flex justify-content-start form-label fw-bold mt-5">Full name</label>
              <input type="text" className="form-control" id="fullname" placeholder="full name"  value={formData.fullname} onChange={handleChange}/>
              {errors.fullname && <p className="text-danger">{errors.fullname}</p>}
            </div>        
            <div className="mb-3">
              <label htmlFor="email" className="d-flex justify-content-start form-label fw-bold mt-5">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" value={formData.email} onChange={handleChange}/>
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="d-flex justify-content-start form-label fw-bold mt-5">Phone</label>
              <input type="phone" className="form-control" id="phone" placeholder="+47 4111122" value={formData.phone} onChange={handleChange}/>
              {errors.phone && <p className="text-danger">{errors.phone}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="d-flex justify-content-start form-label fw-bold mt-5">Subject</label>
              <input type="text" className="form-control" id="subject" placeholder="subject"  value={formData.subject} onChange={handleChange}/>
              {errors.subject && <p className="text-danger">{errors.subject}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="d-flex justify-content-start form-label fw-bold mt-5">Message</label>
              <textarea className="form-control" id="message" rows="8" placeholder="Type your message here"  value={formData.message} onChange={handleChange}></textarea>
              {errors.message && <p className="text-danger">{errors.message}</p>}
            </div>
            <button type="submit" className="cta-button mb-3">Send</button>
          </form>    
        </div>
        </div> 
    </div>
  )
}
export default Contact;