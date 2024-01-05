import React, { useState } from "react";
import './contact.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (name && email && phone && message) {

      setSubmitted(true);
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };
  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    setPhone(numericValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h2>Contact</h2>
        {submitted ? (
          <div className="thank-you-message">
            Thank you for your submission!
          </div>
        ) : (
          <div className="form-contact">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter your phone number"
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        )}
      </div>
    </form>
  );
}

export default Contact;
