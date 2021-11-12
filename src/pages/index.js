import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import aditya from '../assets/images/aditya-saxena.jpg';
import process from '../assets/images/process.svg';
import review from '../assets/images/review2.svg';
// import alexandra from '../assets/images/alexandra-mirghe.jpg';
import survey from '../assets/images/survey.svg';
import Scroll from '../components/Scroll';
// import yangwewe from '../assets/images/yang-wewe.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <section id="banner">
      <header>
        <h3>
            Wszystkie prace wykonujemy za&nbsp;pomocą specjalistycznej maszyny o dużej mocy, która nie niszczy terenu wokół karpiny
        </h3>
      </header>
      {/* <footer>
        <Scroll type="id" element="first">
          <a href="#first" className="button style2 scrolly">Oferta</a>
        </Scroll>
      </footer> */}
    </section>

{/* 
    <article id="first" className="container box style1 right dark">
      <div className="image">
        <img src={yangwewe} alt="" />
      </div>
      <div className="inner">
        <header>
          <h2>
            Nasz proces
          </h2>
        </header>
        <p>
          Obróbka poprzez skrawanie jest procesem tańszym, prostszym i wymaga
          mniejszej ilości pracy niż karczowanie karpiny. Frezowanie pni jest
          również doskonałą alternatywną opcją do wykopywania pniaka. Przy
          wyrywaniu potrzebny jest ciężki sprzęt, wywiezienie karpy oraz
          uzupełnienie ziemią ubytku po wykopalisku. Skrawanie pnia jest mało
          inwazyjne, wykonywane wtedy ,kiedy nie chcemy niszczyć pobliskiego
          otoczenia i zagospodarować teren pod wysianie trawnika, ułożenie kostki
          brukowej lub wykonanie nasadzeń.
        </p>
        <p>
          Wykonujemy frezowanie o głębokości nawet do 35 cm poniżej poziomu
          podłoża.
        </p>
      </div>
    </article> */}

    <article className="container box style1 right dark" id="first">
      <div className="image">
        <img src={process} alt="" />
      </div>
      <div className="inner">
        <header>
          <h2>Realizcja Zamówienia</h2>
        </header>
        <p>Kluczową metryką naszej usługii jest cena uzależniona od następujących parametrów:</p>
        <br />
        <ul>
          <li>gatunku drzewa</li>
          <li>obwodu lub średnicy pnia u nasady (5 cm od&nbsp;ziemi)</li>
          <li>ilości pni do&nbsp;wyfrezowania</li>
          <li>dostępności do&nbsp;pnia</li>
        </ul>
        {/* <p><b>Przy stałej współpracy oferujemy atrakcyjne rabaty.</b></p> */}
      </div>
    </article>

    <article className="container box style3 dark">
      <header>
        <h2>Dojazd i&nbsp;wycenę zlecenia otrzymujesz <b>GRATIS!</b></h2>
        <img src={review} alt="" />
        <p>
          Twoje zamówienie jest realizowane indywidualnie, co&nbsp;oznacza,
          że&nbsp;jest&nbsp;dostosowane do potrzeb Twoich i Twojego ogrodu.
          <br />Napisz do nas a Nasi konsultanci wycenią frezowanie.
        </p>
        <Scroll type="id" element="contact">
          <a href="#first" className="button style2 scrolly">Kontakt</a>
        </Scroll>
      </header>
    </article>

    <article className="container box style1 right dark" id="contact">
      <div className="image">
        <img src={survey} alt="" />
      </div>
      <div className="inner">
        <header>
          <h2>Kontakt</h2>
        </header>
        <p>
          Chcesz złożyć zamówienie lub masz pytania, uwagi, sugestie? Koniecznie skontaktuj
          się&nbsp;z&nbsp;nami! Przyjedziemy i&nbsp;przygotujemy ofertę dopasowaną specjalnie
          dla&nbsp;Twojego ogrodu.
        </p>

        <p>
          <a href="tel:+510277799" target="_blank">
            +48 510 277 799
          </a>
        </p>
        <p>
          <a href="profesjonalnefrezowaniepni@gmail.com" target="_blank">
            Napisz do nas!
          </a>
        </p>
      </div>
    </article>

    <Footer />
  </Layout>
);

export default IndexPage;
