import React, { useRef } from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {

  const form = useRef();

  const sendMessage = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    /* EMAIL SEND */
    emailjs.sendForm(
      "service_id",
      "template_id",
      form.current,
      "public_key"
    )
    .then(() => {
      alert("Message Sent Successfully!");
    })
    .catch(() => {
      alert("Failed to send message");
    });

    /* WHATSAPP MESSAGE */
    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    window.open(`https://wa.me/916282300667?text=${text}`);

    e.target.reset();
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        {/* TITLE */}
        <div className="contact-title">
          <h2>Contact <span className="text-warning">Me</span></h2>
          <p>Let's work together</p>
        </div>

        <div className="contact-content">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <div className="info-box">
              <FaPhoneAlt className="icon"/>
              <div>
                <h4>Phone</h4>
                <p>+91 6282300667</p>
              </div>
            </div>

            <div className="info-box">
              <FaEnvelope className="icon"/>
              <div>
                <h4>Email</h4>
                <p>ad7777808@gmail.com</p>
              </div>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt className="icon"/>
              <div>
                <h4>Location</h4>
                <p>Vadakara, Kerala, India</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-form">

            <form ref={form} onSubmit={sendMessage}>

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>

              <button type="submit">Send Message</button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;