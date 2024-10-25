const Footer = () => {
  return (
    <section className="c-space pt-14">
      <div className="border-t border-black-300 flex justify-between items-center flex-wrap gap-5 py-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>

        <div className="flex gap-3">
          <a
            href="https://github.com/basofiibnu"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="social-icon">
              <img
                src="/assets/github.svg"
                alt="github"
                className="w-1/2 h-1/2"
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/basofiibnu/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="social-icon">
              <img
                src="/assets/linkedin.svg"
                alt="linkedin"
                className="w-1/2 h-1/2"
              />
            </div>
          </a>
        </div>

        <p className="text-white-500">
          &copy; 2024 Basofi, All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
