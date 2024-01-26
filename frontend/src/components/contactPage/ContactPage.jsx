import React, { useState } from "react";
import "./ContactPage.scss";
function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  let email ,subject, name, message;
  return (
    <section className="contact-section">
      <div className="container">
        <div className=" toast-container top-center"></div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
          <div className="wrapper lg:col-span-1">
            <div className="bg-white p-8 shadow-md rounded-lg contact-wrap">
              <h3 className="mb-4 text-2xl font-semibold">Send us a message</h3>
              <form
                id="contactForm"
                className="contactForm"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control border border-gray-300 p-2 w-full rounded"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control border border-gray-300 p-2 w-full rounded"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control border border-gray-300 p-2 w-full rounded"
                        name="subject"
                        placeholder="Subject"
                        value={subject}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="form-group">
                      <textarea
                        type="text"
                        className="form-control border border-gray-300 p-2 w-full rounded"
                        name="message"
                        placeholder="Message"
                        rows="6"
                        value={message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary bg-purple-600 text-white p-2 rounded"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1 ">
            <div className="bg-white p-8 shadow-md rounded-lg info-wrap">
              <h3 className="mb-4 text-2xl font-semibold">Contact us</h3>
              <p className="mb-4">
                We're open for any suggestion or just to have a chat
              </p>
              <div className="d-box flex items-start mb-4 d-box">
                <div className="icon flex items-center justify-center">
                  <span className="fa fa-map-marker"></span>
                </div>
                <div className="text pl-3">
                  <p>
                    <span>Address:</span> 198 West 21th Street, Suite 721 New
                    York NY 10016
                  </p>
                </div>
              </div>
              <div className="d-box flex items-center mb-4">
                <div className="icon flex items-center justify-center">
                  <span className="fa fa-phone"></span>
                </div>
                <div className="text pl-3">
                  <p>
                    <span>Phone:</span>
                    <a href="tel://123456789">+1235 2355 98</a>
                  </p>
                </div>
              </div>
              <div className="d-box flex items-center mb-4">
                <div className="icon flex items-center justify-center">
                  <span className="fa fa-paper-plane"></span>
                </div>
                <div className="text pl-3">
                  <p>
                    <span>Email:</span>
                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                  </p>
                </div>
              </div>
              <div className=" d-box flex items-center">
                <div className="icon flex items-center justify-center">
                  <span className="fa fa-globe"></span>
                </div>
                <div className="text pl-3">
                  <p>
                    <span>Website:</span>
                    <a href="#">yoursite.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
