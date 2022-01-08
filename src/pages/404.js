import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SVG from '../assets/images/404.svg';
import survey from '../assets/images/survey.svg';

const IndexPage = () => (
  <Layout>

    <section id="banner">
      <header>
        <h3>
        Wskazany adres nie istnieje!
        </h3>
      </header>
      <hr />
      <div className="notfound">
        <img src={SVG} alt="Wskazany adres nie istnieje!" />
      </div>
      <footer>
        <a onClick={() => window.history.back()} className="button style2">Wróć</a>
      </footer>
    </section>

    <article className="container box style1 right dark" id="contact">
      <div className="image">
        <img src={survey} alt="" />
      </div>
      <div className="inner">
        <header>
          <h2>Kontakt Zamówienia i&nbsp;Obsługa Klienta</h2>
        </header>
        <p>
          Jesteś już naszym zadowolonym klientem lub chcesz się nim stać?<br/>
          A może Masz pytania, uwagi, sugestie? Skontaktuj się&nbsp;z&nbsp;nami już&nbsp;teraz!
        </p>
        <br />
        <p>
          <a href="tel:+510277799" target="_blank">
            +48 510 277 799
          </a>
        </p>
        <p>
          <a href="profesjonalnefrezowaniepni@gmail.com" target="_blank">
            Napisz do&nbsp;nas!
          </a>
        </p>
      </div>
    </article>

    <Footer />
    
  </Layout>
);

export default IndexPage;
