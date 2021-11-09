import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import aditya from '../assets/images/aditya-saxena.jpg';
import alexandra from '../assets/images/alexandra-mirghe.jpg';
import survey from '../assets/images/survey.svg';
import Scroll from '../components/Scroll';
import yangwewe from '../assets/images/yang-wewe.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <section id="banner">
      <header>
        <h3>
          W naszej ofercie znajdziesz
          <br />
          kompleksową usługę frezowania pni i korzeni <br />
          po usunięciu drzew i krzewów.
        </h3>
      </header>
      <h4>
        {' '}
        Prace wykonujemy za pomocą specjalistycznej maszyny o dużej mocy, która
        nie niszczy terenu wokół karpiny.
      </h4>
      <br />
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
      <footer>
        <Scroll type="id" element="first">
          <a href="#first" className="button style2 scrolly">
            Realizacja Zamówienia
          </a>
        </Scroll>
      </footer>
    </section>

    <article id="first" className="container box style1 right dark">
      <div className="image fit">
        <img src={yangwewe} alt="" />
      </div>
      <div className="inner">
        <header>
          <h2>Kontakt</h2>
        </header>
        <p>
          Masz pytania, uwagi, sugestie? Koniecznie skontaktuj
          się&nbsp;z&nbsp;nami! Przygotujemy ofertę dopasowaną specjalnie
          dla&nbsp;Ciebie.
        </p>

        <p>
          <a href="tel:+510277799" target="_blank">
            +48 510 277 799
          </a>
        </p>
        <p>
          <a href="profesjonalnefrezowaniepni@gmail.com" target="_blank">
            profesjonalnefrezowaniepni@gmail.com
          </a>
        </p>
      </div>
    </article>

    <article className="container box style1 right dark">
      <div className="image fit">
        <img src={alexandra} alt="" />
      </div>
      <div className="inner">
        <header>
          <h2>
            Dojazd na wycenę i zlecenie otrzymujesz <b>GRATIS</b>
          </h2>
        </header>
        <p>Cena uzależniona od :</p>
        <p>
          - gatunku drzewa <br />
          - obwodu lub średnicy pnia u nasady <br />
          (5 cm od ziemi)
          <br />
          - ilości pni do wyfrezowania <br />- dostępności do pnia
        </p>
        <p>
          <b>*Przy stałej współpracy oferujemy atrakcyjne rabaty.</b>
          <br />
        </p>
      </div>
    </article>

    {/* <article className="container box style1 right dark">
      <div className="image fit">
        <img src={survey} alt="" />
      </div>
      <div className="inner">
        <header>
          <h2>
            Wycena&nbsp;i&nbsp;Kontakt Zwrotny&nbsp;w&nbsp;<b>48h</b>
          </h2>
        </header>
        <p>
          Gdy ocenimy możliwości naszych dostawców w&nbsp;stosunku
          do&nbsp;oferty dopasowanej specjalnie dla&nbsp;Ciebie otrzymasz
          od&nbsp;nas kontakt zwrotny ze&nbsp;szczegółową ofertą i&nbsp;procesem
          realizacji zamówienia -&nbsp;maksymalnie w&nbsp;ciągu 48&nbsp;godzin.
        </p>
      </div>
    </article> */}

    <article className="container box style3 dark">
      <header>
        <h2>Realizcja Zamówienia</h2>
        <p>
          Twoje zamówienie jest realizowane indywidualnie, co&nbsp;oznacza,
          że&nbsp;jest wyjątkowe.
          <br />
        </p>
      </header>
    </article>

    <Footer />
  </Layout>
);

export default IndexPage;
