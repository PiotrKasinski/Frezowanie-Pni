import React from 'react';
import Scroll from './Scroll';
import config from '../../config';
import logo from '../assets/images/logo.png';
export default function Header({ title, heading, avatar }) {
  return (
    <section id="header">
      <header>
        {/* <h1>{config.authorName}</h1> */}
        <img src={logo} alt="" className="logo" />
        <p>
          Kompletna usługa na&nbsp;Twoich&nbsp;warunkach
        </p>
        <br />
        <Scroll type="id" element="banner">
          <a href="#banner" className="button style2 ">
            Zobacz
          </a>
        </Scroll>
      </header>
      <footer></footer>
    </section>
  );
}
