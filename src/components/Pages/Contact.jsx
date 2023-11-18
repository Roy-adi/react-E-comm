import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'

// Import your sendDataFromApi function
import { sendDataFromApi } from '../../Utils/api';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create an object with the same structure as the example from Strapi documentation
      const dataToSend = {
        Name: formData.name,
        phone: formData.phone,
        message: formData.message,
        email: formData.email,
      };

      // Make a POST request using the sendDataFromApi function
      const response = await sendDataFromApi('/api/contacts', { data: dataToSend });

      // Handle the response (you can show a success message or redirect the user)
      console.log('Contact data sent successfully:', response);
    } catch (error) {
      // Handle any errors (you can show an error message to the user)
      console.error('Error sending contact data:', error);
    }
  };

  return (
    <div>
      <section className="main-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="left-contact">
                <h2 className="contact-title">
                  <span>Send Us</span> Message
                </h2>
                <form className="rd-mailform" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="form-label">Your name</label>
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="form-label">Your phone</label>
                        <input
                          className="form-control"
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-label">Your e-mail</label>
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-label">Message</label>
                        <textarea
                          className="form-control"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <button className="btn-send" type="submit">
                    Send message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-5">
              <div className="map-box">
                {/* ... Google Maps iframe ... */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
