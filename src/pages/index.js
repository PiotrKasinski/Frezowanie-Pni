import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import process from '../assets/images/process.svg';
import review from '../assets/images/review2.svg';
import measure from '../assets/images/measure.svg';
import survey from '../assets/images/survey.svg';
import Scroll from '../components/Scroll';

const IndexPage = () => (
  <Layout>
    <Header />

    <section id="banner">
      <header>
        <h3>
            Wszystkie prace wykonujemy za&nbsp;pomocą specjalistycznej maszyny o dużej mocy, <b>nie&nbsp;niszcząc terenu wokół karpiny</b>
        </h3>
      </header>
    </section>


    <article className="container box style3 dark" id="first">
      <header>
        <h2>Frezowanie Pni</h2>
        <img src={measure} alt="" />
        <h3>Przeszkadzają Ci&nbsp;pniaki w&nbsp;ogrodzie?</h3>
        <br />
        <div className="inner">
        <p><b>Frezowanie pni</b> doskonale zastępuje wyrywanie uciążliwych pozostałości po&nbsp;wycince drzew.</p>
        <p><b>Korzystając z&nbsp;tej metody będziesz znów cieszyć się&nbsp;aranżancją ogrodu i&nbsp;każdej innej powierzchni.</b></p>
        <br />
        <br />
        </div>
        <a href="/proces" className="button style2">POKAŻ WIĘCEJ</a>
        <hr />
        <Scroll type="id" element="second">
          <a href="#second" className='icon-scroll'></a>
        </Scroll>
      </header>
    </article>

    <article className="container box style1 right dark" id="second">
      <div className="image">
        <img src={process} alt="" />
      </div>
      <div className="inner">
        <header>
          <h2>Wycena Zamówienia</h2>
        </header>
        <p>Cena usług uzależniona jest od&nbsp;parametrów zamówienia:</p>
        <br />
        <ul>
          <li>gatunku drzewa</li>
          <li>obwodu lub&nbsp;średnicy pnia u&nbsp;nasady (na wysokości 5 cm od&nbsp;ziemi)</li>
          <li>ilości pni do&nbsp;wyfrezowania</li>
          <li>dostępu do&nbsp;pnia</li>
        </ul>
      </div>
      <hr />
      <br />
      <Scroll type="id" element="third">
        <a href="#third" className='icon-scroll'></a>
      </Scroll>
    </article>

    <article className="container box style3 dark" id="third">
      <header>
        <h2>Dojazd i&nbsp;wycena zlecenia <b>GRATIS!</b></h2>
        <img src={review} alt="" />
        <p>
          Zamówienia są&nbsp;dostosowane do&nbsp;indywidualnych potrzeb i&nbsp;Twojego zamysłu.
          Napisz do nas, a&nbsp;wycenimy usługę wedle Twego zapotrzebowania.
          W razie potrzeby, konsultacje i&nbsp;wyceny dokonujemy na miejscu wykonania usługi.
        </p>
        <hr />
        <Scroll type="id" element="contact">
          <a href="#contact" className='icon-scroll'></a>
        </Scroll>
      </header>
    </article>

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
