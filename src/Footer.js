import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faFreeCodeCamp from '@fortawesome/fontawesome-free-brands/faFreeCodeCamp';
import faCodepen from '@fortawesome/fontawesome-free-brands/faCodepen';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faAngellist from '@fortawesome/fontawesome-free-brands/faAngellist';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faStackOverflow from '@fortawesome/fontawesome-free-brands/faStackOverflow';
import faMedium from '@fortawesome/fontawesome-free-brands/faMedium';
import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faSpotify from '@fortawesome/fontawesome-free-brands/faSpotify';
import faLastfm from '@fortawesome/fontawesome-free-brands/faLastfm';
import faQuora from '@fortawesome/fontawesome-free-brands/faQuora';
import faReddit from '@fortawesome/fontawesome-free-brands/faReddit';

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://github.com/ncaron" target="_blank">
          <FontAwesomeIcon className="social-github" icon={ faGithub } />
        </a>

        <a href="https://www.freecodecamp.org/ncaron" target="_blank">
          <FontAwesomeIcon className="social-freecodecamp" icon={ faFreeCodeCamp } />
        </a>

        <a href="https://codepen.io/ncaron/" target="_blank">
          <FontAwesomeIcon className="social-codepen" icon={ faCodepen } />
        </a>
      </div>

      <div>
        <a href="https://www.linkedin.com/in/nikocaron/" target="_blank">
          <FontAwesomeIcon className="social-linkedin" icon={ faLinkedin } />
        </a>

        <a href="https://angel.co/niko-caron" target="_blank">
          <FontAwesomeIcon className="social-angel" icon={ faAngellist } />
        </a>

        <a href="https://twitter.com/niko_caron" target="_blank">
          <FontAwesomeIcon className="social-twitter" icon={ faTwitter } />
        </a>

        <a href="https://stackoverflow.com/users/7078401/niko-caron" target="_blank">
          <FontAwesomeIcon className="social-stackoverflow" icon={ faStackOverflow } />
        </a>

        <a href="https://medium.com/@ncaron16" target="_blank">
          <FontAwesomeIcon className="social-medium" icon={ faMedium } />
        </a>
      </div>

      <div>
        <a href="https://www.facebook.com/niko.caron" target="_blank">
          <FontAwesomeIcon className="social-facebook" icon={ faFacebookSquare } />
        </a>

        <a href="https://www.instagram.com/nikoc16/" target="_blank">
          <FontAwesomeIcon className="social-instagram" icon={ faInstagram } />
        </a>
      </div>

      <div>
        <a href="https://open.spotify.com/user/1289387931" target="_blank">
          <FontAwesomeIcon className="social-spotify" icon={ faSpotify } />
        </a>

        <a href="https://www.last.fm/user/ncaron16" target="_blank">
          <FontAwesomeIcon className="social-lastfm" icon={ faLastfm } />
        </a>
      </div>

      <div>
        <a href="https://www.quora.com/profile/Niko-Caron" target="_blank">
          <FontAwesomeIcon className="social-quora" icon={ faQuora } />
        </a>

        <a href="https://www.reddit.com/user/ncaron/" target="_blank">
          <FontAwesomeIcon className="social-reddit" icon={ faReddit } />
        </a>
      </div>

      <a className="email" href="mailto:niko.caron90@gmail.com" target="_top">niko.caron90@gmail.com</a>
    </footer>
  );
};

export default Footer;
