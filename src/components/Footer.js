import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section id="contact-me"></section>
      <h1 className="header">CONTACT ME</h1>


      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>
            {/* <p>Thanks for visiting!</p>
            Sarah Chan © 2024 */}
            Made with React.js. View the source code here.
          </small>
          <div class='social-icons'>
            <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/in/sarahjchan/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <Link
              class='social-icon-link github'
              to='https://github.com/sarahjchan'
              target='_blank'
              aria-label='github'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link gmail'
              to='mailto:sjchan@umich.edu'
              target='_blank'
              aria-label='gmail'
            >
              <i class="far fa-envelope" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
