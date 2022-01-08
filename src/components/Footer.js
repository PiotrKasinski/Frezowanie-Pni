import React from 'react';
import faphone from '../assets/images/faphone.svg';
import fafacebookmessenger from '../assets/images/fafacebookmessenger.svg';
import faenvelopeo from '../assets/images/faenvelopeo.svg';
import fafacebooksquare from '../assets/images/fafacebooksquare.svg';

export default function Footer() {
  return (
    <section id="footer">
      <ul className="icons">
        <li>
          <a href="tel:+510277799">
            <img title="Mobile" alt="+48510277799" src={faphone} height="36" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/FrezowaniePni">
            <img
              title="Facebook Messenger"
              alt="FrezowaniePni"
              src={fafacebookmessenger}
              height="36"
            />
          </a>
        </li>
        <li>
          <a href="mailto:profesjonalnefrezowaniepni@gmail.com">
            <img
              title="Email"
              alt="profesjonalnefrezowaniepni@gmail.com"
              src={faenvelopeo}
              height="36"
            />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/FrezowaniePni">
            <img
              title="Facebook"
              alt="facebook.com/FrezowaniePni"
              src={fafacebooksquare}
              height="36"
            />
          </a>
        </li>
      </ul>
      <div className="copyright">
        <ul className="menu">
          <li>Profesjonalne Frezowanie Pni &copy; All&nbsp;rights&nbsp;reserved</li>
          <li><a href="/privacy">Polityka Prywatności</a></li>
        </ul>
        <p>by <a href="https://github.com/qLb" target="_blank">qL.b</a> with <a href="https://github.com/" target="_blank">gh</a> + <a href="https://cloudflare.com/" target="_blank">cf</a> and <a href="https://gatsbyjs.com" target="_blank">gatsbyjs</a> + <a href="https://html5up.net/" target="_blank">html5</a></p>
      </div>
    </section>
  );
}
