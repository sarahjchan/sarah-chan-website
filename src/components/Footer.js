import React from 'react';
import './Footer.css';
// import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>
            <p>Thanks for visiting!</p>
            {/* Sarah Chan © 2024 */}
            Made with React.js. View the source code {" "}
            <a href="https://github.com/sarahjchan/sarah-chan-website" target="_blank" rel="noopener noreferrer"><small>here</small></a> 
            .
          </small>
          <div class='social-icons'>
            <a
              className='social-icon-link linkedin'
              href='https://www.linkedin.com/in/sarahjchan/'
              target='_blank'
              aria-label='LinkedIn'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin' />
            </a>
            <a
              className='social-icon-link github'
              href='https://github.com/sarahjchan'
              target='_blank'
              aria-label='github'
              rel='noopener noreferrer'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link gmail'
              href='mailto:sjchan@umich.edu'
              target='_blank'
              aria-label='gmail'
              rel='noopener noreferrer'
            >
              <i class="far fa-envelope" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
