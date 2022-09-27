import logo from './img/logo.svg';
import headline from './img/Headline.svg';
import geo from './geo.svg';
import parrot from './img/parrot.png';
import group from './img/Group.png';
import head from './img/Icon-head.svg';
import img_1 from './img/img_1.png';
import img_2 from './img/img_2.png';
import img_3 from './img/img_3.png';
import vector1 from './img/Vector1.svg';
import twitter from './img/Twitter.svg';
import facebook from './img/Facebook.svg';
import linkedin from './img/LinkedIn.svg';
import Button from './js/Button.jsx';
import Swiper from './js/Swiper.jsx';
import Burger from './js/Burger.jsx';

import './App.css';
import './css/media.css';
function App() {
  return (
    <div>
      <section className="header-section ">
        <section className="header-section__body">
          <header className="App-header">
            <div className="header__body">
              <img src={logo} className="App-logo" alt="logo" />
              <div className="header__nav">
                <div className="header__nav-link header__nav-link_focus">
                  <a href="#">Home</a>
                </div>
                <div className="header__nav-link">
                  <a href="#">Our mission</a>
                </div>
                <div className="header__nav-link">
                  <a href="#">Places</a>
                </div>
                <div className="header__nav-link">
                  <a href="#">Team</a>
                </div>
              </div>
              <input className="button-apply" type="button" value="Apply" />
              <Burger></Burger>
            </div>
          </header>
          <div className="headline __container">
            <div className="headline__body">
              <div className="headline__description">
                <img src={headline} className="headline__img_logo" alt="headline" />
                <p className="headline__text">
                  The scale of the challenges facing our planet can seem daunting, but we can all do
                  something.
                </p>
                <div className="headline__search-form search-form">
                  <div className="search-form__input-container">
                    <img src={geo} className="search-form__input-geo" alt="geo" />
                    <input
                      type="text"
                      className="search-form__input"
                      placeholder="Find the place to help"
                    />
                  </div>
                  <input type="button" className="search-form__button" value="search" />
                </div>
              </div>
              <div className="headline__img">
                <div className="headline__img-parret parret">
                  <img src={parrot} className="parret-img" alt="parrot" />
                </div>
                <div className="headline__img-card card">
                  <div className="card__body">
                    <img src={group} className="card-img" alt="card" />
                    <img src={head} className="card-img__head" alt="head" />
                    <div className="card__description">
                      <span className="card__text">Members</span>
                      <span className="card__number">29 128</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="team">
        <div className="team-body __container">
          <div className="team-description">
            <h2 className="team-title">Our top team</h2>
            <p className="team-text">Learn more about how you can save our planet's nature. </p>
          </div>
          <div className="team__galary">
            <img src={img_1} className="team__galary-img team__galary-img_1" alt="galary img" />
            <img src={vector1} className="team__galary-img team__galary-vector1" alt="galary img" />
            <img src={img_2} className="team__galary-img team__galary-img_2" alt="galary img" />
            <img src={vector1} className="team__galary-img team__galary-vector2" alt="galary img" />
            <img src={img_3} className="team__galary-img team__galary-img_3" alt="galary img" />
          </div>
        </div>
      </section>
      <section className="login">
        <div className="login__body __container">
          <div className="login__description">
            <h2 className="login__title">Get started today!</h2>
            <p className="login__text">
              Learn more about how you can save our planet's nature. From smart consumption to
              switching to renewable energy, each of us can do our part to save the planet.{' '}
            </p>
          </div>
          <div className="login__form">
            <h2 className="login__form-title">Log in</h2>
            <input className="login__form-name" type="text" placeholder="Name" />
            <input className="login__form-email" type="email" placeholder="Email" />
            <input className="login__form-button" type="button" value="Book a demo" />
          </div>
        </div>
      </section>
      <section className="ready">
        <div className="ready__body __container">
          <div className="ready_description">
            <h2 className="ready__title">Ready to Get started?</h2>
            <p className="ready__text">
              When pattern is mentioned in interior design, it is easy to asso- ciate it with a
              geometric patterned wallpaper or colourful prints on interior fabrics.
            </p>
            <input type="button" className="ready__button" value="Contact us" />
          </div>
          <div className="ready__block">
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </div>
        </div>
      </section>
      <section className="swiper__container">
        <Swiper></Swiper>
      </section>
      <footer className="footer">
        <div className="footer__body">
          <div className="footer__contacts contacts">
            <h2 className="contacts__title">Contacts</h2>
            <div className="contacts__wrapper-text">
              <span className="contacts__text">2019 Rootz Foundation</span>
              <span className="contacts__text">All rights reserved</span>
            </div>
          </div>
          <div className="footer__wrapper">
            <div className="footer__local local">
              <h2 className="local__title">Headquarters</h2>
              <div className="local__wrapper-text">
                <span className="local__text">1234 Taliban</span>
                <span className="local__text">Los Angeles, La 1234567</span>
                <span className="local__text">(123) 456-7890</span>
              </div>
            </div>
            <div className="footer__social social">
              <h2 className="social__title">Social media</h2>
              <div className="social__wrapper-text">
                <a href="#">
                  <img src={twitter} className="" alt="link social img" />
                </a>
                <a href="#">
                  <img src={facebook} className="" alt="link social img" />
                </a>
                <a href="#">
                  <img src={linkedin} className="" alt="link social img" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
