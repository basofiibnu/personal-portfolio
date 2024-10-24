import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  //   service_y76l33m
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await emailjs.send(
        'service_y76l33m',
        'template_rvkj4ot',
        {
          from_name: form.name,
          to_name: 'Basofi',
          from_email: form.email,
          to_email: 'basofiibnur@gmail.com',
          message: form.message,
        },
        'qrqKZkstGQPQj6V_6'
      );
      setIsLoading(false);
      alert('Your message has been sent!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      alert('Something went wrong!');
    }
  };

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let&apos;s talk</h3>
          <p className="text-lg text-white-600">
            Whether you&apos;re looking to build a new website,
            improve your existing platform, or bring a unique project
            to life, I&apos;m here to help. Let&apos;s build something
            amazing together!
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                className="field-input"
                onChange={handleChange}
                value={form.name}
                required
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                className="field-input"
                onChange={handleChange}
                value={form.name}
                required
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                className="field-input"
                onChange={handleChange}
                value={form.message}
                required
                placeholder="Hi, I want to collaborate with you in..."
                rows={5}
              />
            </label>

            <button
              className="field-btn"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
              <img
                src="/assets/arrow-up.png"
                alt="arrowup"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
