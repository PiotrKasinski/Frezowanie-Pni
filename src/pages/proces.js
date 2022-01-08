import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import treasure from '../assets/images/treasure.svg';
import measure from '../assets/images/measure.svg';
import process from '../assets/images/process.svg';
import survey from '../assets/images/survey.svg';
import Scroll from '../components/Scroll';

const IndexPage = () => (
  <Layout>

    <Header />

    <article id="first" className="container box style3 right dark">

      <header>
        <h2>Dlaczego lepiej skrawać?</h2>
        <br/>
        <p>
          <b>Obróbka poprzez skrawanie</b> jest&nbsp;procesem tańszym, prostszym i&nbsp;wymaga
          mniejszej ilości pracy niż&nbsp;<b>karczowanie karpiny</b>.
        </p>
        <img src={process} alt="" />
        <p>Skrawanie Pnia jest&nbsp;<b>mało inwazyjne</b>, wykonywane wtedy, kiedy <b>nie&nbsp;chcemy niszczyć pobliskiego
          otoczenia</b> i&nbsp;zagospodarować teren pod&nbsp;<b>wysianie trawnika</b>, <b>ułożenie kostki
          brukowej</b> lub&nbsp;<b>wykonanie nasadzeń</b>.</p>
      </header>
      <hr />
      <br />
      <Scroll type="id" element="second">
        <a href="#second" className='icon-scroll'></a>
      </Scroll>
    </article>

    <article id="second" className="container box style3 right dark">

      <header>
        <h2>Czemu nie&nbsp;wykopać?</h2>
        <img src={measure} alt="" />
        <p>Przy wyrywaniu pni potrzebne&nbsp;są:</p>
        <ul>
          <li><b>ciężki sprzęt</b></li>
          <li><b>usługa wywiezienia karpy</b></li>
          <li><b>uzupełnienie ziemią ubytku po&nbsp;wykopalisku</b></li>
        </ul>
        <br/>
        <p>Wszystko to&nbsp;okazuje się&nbsp;kosztowne skomplikowane i&nbsp;pełne niespodzianek.</p>
        <img src={treasure} alt="" />
        <br/>
        <p><b>Frezowanie Pni</b> jest&nbsp;doskonałą alternatywną opcją do&nbsp;wykopywania pniaka. Korzystając z&nbsp;tej metody będziesz znów cieszyć się&nbsp;aranżancją ogrodu i&nbsp;każdej innej powierzchni naturalnie powiększając jej przestrzeń.</p>
        <p><i>Wykonujemy frezy na&nbsp;głębokości nawet 35cm poniżej poziomu podłoża.</i></p>
        <br/>
        <Scroll type="id" element="contact">
          <a href="#contact" className="button style2 scrolly">Zamów teraz</a>
        </Scroll>
      </header>
      <hr />
      <br />
      <Scroll type="id" element="contact">
        <a href="#contact" className='icon-scroll'></a>
      </Scroll>
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
