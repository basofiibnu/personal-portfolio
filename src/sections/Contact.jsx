import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef();
  const { showAlert, hideAlert, alert } = useAlert();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        import.meta.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Basofi',
          from_email: form.email,
          to_email: 'basofiibnur@gmail.com',
          message: form.message,
        },
        import.meta.env.NEXT_PUBLIC_EMAIL_KEY
      )
      .then(
        () => {
          setIsLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setIsLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        }
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let’s Connect</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to create a new website, enhance an
            existing platform, or bring a unique idea to life, I’m
            here to help make it happen. Let’s collaborate and build
            something exceptional together!
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
                value={form.email}
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
              {!isLoading && (
                <img
                  src="/assets/arrow-up.png"
                  alt="arrowup"
                  className="field-btn_arrow"
                />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
