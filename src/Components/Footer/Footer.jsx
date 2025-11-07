import React from 'react';

const Footer = () => {
  return (
<footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <aside>
    <p className='font-bold text-2xl max-w-120'>
      Pet Care
      <br />
      <span className='text-base font-normal'>

      Explore cozy clothing, expert grooming, and winter care tips to ensure your furry friends stay happy and healthy all season.
      </span>
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Pet Grooming</a>
    <a className="link link-hover">Pet Clothing</a>
    <a className="link link-hover">Pet Accessories</a>
    <a className="link link-hover">Pet Health</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>  );
};

export default Footer;
