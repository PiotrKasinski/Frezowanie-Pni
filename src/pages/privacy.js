import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import survey from '../assets/images/survey.svg';
import Scroll from '../components/Scroll';
const IndexPage = () => (
  <Layout >

    <Header />
    <section id="banner">
      <div className="policy" id="first">
        <header>
          <h2>Polityka Prywatności</h2>
        </header>
        <p><i>Działając zgodnie z art. 13 ust. 1 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (Dz.U.UE.L.2016.119.1)</i>, dalej jako: „RODO” informujemy, iż:</p><br />
        <p>Administratorem Państwa danych osobowych jest EVENTARYZACJA Marek Sirecki z siedzibą w Łodzi (94-102), przy ul. Maratońskiej 29/7 reprezentujący się numerem NIP: 726-237-80-97.</p><br />
        <p>W sprawach dotyczących przetwarzania danych osobowych prosimy o kontakt pod adresem e-mail: <a href="mailto:profesjonalnefrezowaniepni@gmail.com">profesjonalnefrezowaniepni@gmail.com</a>.</p><br />
        <p>Pani/Pana dane osobowe zawarte w wiadomościach poczty elektronicznej będą przetwarzane w celu realizacji zapytania/zgłoszenia na podstawie art. 6 ust. 1 lit. a) RODO, oraz będą udostępniane:</p>
        <ol>
          <li>podmiotom dostarczającym i wspierającym systemy teleinformatyczne EVENTARYZACJA Marek Sirecki w celu obsługi domeny frezowaniepni.com</li>
          <li>podmiotom, którym EVENTARYZACJA Marek Sirecki ma obowiązek przekazywać dane na gruncie obowiązujących przepisów prawa</li>
        </ol><br />
        <p><i>Dane osobowe będą przechowywane do czasu realizacji celu, dla którego zostały zebrane, a następnie przez okres niezbędny do zabezpieczenia ewentualnych roszczeń związanych z przetwarzaniem danych.</i></p><br />
        <p>Ma Pan/Pani prawo do:</p>
        <ol>
          <li>dostępu do treści swoich danych oraz ich sprostowania, usunięcia lub ograniczenia przetwarzania</li>
          <li>wniesienia sprzeciwu wobec przetwarzania</li>
          <li>przenoszenia danych</li>
          <li>cofnięcia zgody na przetwarzanie danych w dowolnym momencie</li>
          <li>wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych, gdy uzna Pani/Pan, iż przetwarzanie Pani/Pana danych osobowych narusza przepisy RODO</li>
        </ol><br />
        <p><i>Podanie danych jest dobrowolne, ale niezbędne do realizacji powyższego celu.
        Przesyłanie wiadomości drogą elektroniczną na elektroniczny adres pocztowy profesjonalnefrezowaniepni@gmail.com wiąże się z automatycznym wyrażeniem zgody na przetwarzanie Pani/Pana danych osobowych przez EVENTARYZACJA Marek Sirecki w celu realizacji zapytania/zgłoszenia.</i></p>
      <br />
      <Scroll type="id" element="contact">
        <a href="#contact" className='icon-scroll'></a>
      </Scroll>
      </div>
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
