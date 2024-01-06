import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_urvalueplz', 'template_urvalueplz2', form.current, 'urvalueplz2actual').then(
      (result) => {
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
      },
    );
  };
  return (
    <div className="main-wrapper ">
      <section className="page-title bg-1">
        <img
          src="../images/bg/home-2.jpeg"
          style={{
            visibility: 'hidden',
            width: '100%',
            height: 'auto',
          }}
        />
        <div
          className="container"
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Contact Us</span>
                <h1 className="text-capitalize mb-4 text-lg">Contact</h1>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="index.html" className="text-white">
                      Home
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <span className="text-white">/</span>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-white-50">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact form start */}
      <section className="contact-form-wrap section">
        <div
          style={{
            position: 'absolute',
            right: 10,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <form id="contact-form" className="contact__form" onSubmit={sendEmail} ref={form}>
                <h3 className="text-md mb-4">Contact</h3>
                <div className="form-group">
                  <input type="text" name="user_name" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="email" name="from_name" className="form-control" placeholder="Email Address" />
                </div>
                <div className="form-group-2 mb-4">
                  <textarea
                    name="message"
                    className="form-control"
                    rows={4}
                    placeholder="Your Message"
                    defaultValue={''}
                  />
                </div>
                <button className="btn btn-main" name="submit" type="submit">
                  Send Message
                </button>
              </form>
            </div>

            <div className="col-lg-5 col-sm-12">
              <div className="contact-content pl-lg-5 mt-5 mt-lg-0">
                <span className="text-muted">We are Professionals</span>
                <h2 className="mb-5 mt-2">Don’t Hesitate to contact with us for any kind of information</h2>

                <ul className="address-block list-unstyled">
                  <li>
                    <i className="ti-direction mr-3"></i>North Main Street,Brooklyn Australia
                  </li>
                  <li>
                    <i className="ti-email mr-3"></i>Email: contact@mail.com
                  </li>
                  <li>
                    <i className="ti-mobile mr-3"></i>Phone:+88 01672 506 744
                  </li>
                </ul>

                <ul className="social-icons list-inline mt-5">
                  <li className="list-inline-item">
                    <a href="https://linkedin.com/login">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ flex: 1, maxWidth: '100%' }}>
              <video src="/images/video.mp4" autoPlay muted loop style={{ width: '100%' }}></video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
