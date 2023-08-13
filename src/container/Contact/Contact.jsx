import React, { useState } from 'react';

import mobileImg from '../../assets/mobile.png'; // Ubah impor ini
import emailImg from '../../assets/email.png'; // Ubah impor ini
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name: formName, email, message } = formData; // Ganti variabel name menjadi formName

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <h2 className="head-text">Contact us & chat with <span>VICKERY CHRISTIAN ACADEMY</span></h2>

      <div className="app__contact-cards">
        <div className="app__contact-card ">
          <img src={emailImg} alt="email" />
          <a href="mailto:VICKERY@VCA.SCH.ID" className="p-text">VICKERY@VCA.SCH.ID</a>
        </div>
        <div className="app__contact-card">
          <img src={mobileImg} alt="phone" />
          <a href="tel:+62 215724677" className="p-text">+62 215724677</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className="app__contact-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" value={formName} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea className="p-text" placeholder="Your Message" value={message} name="message" onChange={handleChangeInput} />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">thank you for contacting VICKERY CHRISTIAN ACADEMY.</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, 'app__contact'),
  'contact',
  'app__whitebg',
);
