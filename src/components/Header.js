import React from 'react';
import Scroll from './Scroll';
import logo from '../assets/images/logo.png';
export default function Header({ title, heading, avatar }) {
  return (
    <section id="header">
      <header>
      <a href="/">
        <img src={logo} alt="" className="logo" />
      </a>
        <p>
          Kompletna usługa na&nbsp;Twoich&nbsp;warunkach
        </p>
      </header>
      <Scroll type="id" element="first">
        <a href="#first" className='icon-scroll'></a>
      </Scroll>
      
      {/* <footer>
        <Scroll type="id" element="contact">
          <a href="#contact" className="button style2 ">
            Zamów
          </a>
        </Scroll>
      </footer> */}
    </section>
  );
}
