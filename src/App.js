import React from "react";

import "./SCSS/styles.scss";

import Logo from "./assets/logo.svg";
import Amy from "./assets/image-amy.webp";

const App = () => {
  return (
    <main className="main">
      <header className="header">
        <img src={Logo} alt="Logo" className="header__logo" />
        <button className="header__button">Free Consultation</button>
      </header>

      <section className="design">
        <h1 className="design__header">Design solutions made easy</h1>
        <p className="design__description">
          With over ten years of experience in various design disciplines, I'm
          your one-stop shop for your design needs.
        </p>
      </section>

      <section className="skills">
        <ul className="skills__list">
          <li className="skills__item graphic">Graphic Design</li>
          <li className="skills__item ui">UI/UX</li>
          <li className="skills__item apps">Apps</li>
          <li className="skills__item illustrations">Illustrations</li>
          <li className="skills__item photography">Photography</li>
          <li className="skills__item motion">Motion Graphics</li>
        </ul>
      </section>

      <section className="artist">
        <img className="artist__portrait" src={Amy} alt="Headshot of Artist" />
        <article className="artist__info">
          <h2 className="artist__heading">
            I'm Amy, and I'm love to work on your next project
          </h2>
          <p className="artist__description">
            I love working with others to create beautiful design solutions.
            I've desgined everything from brand illustrations to complete mobile
            apps. I'm also handy with a camera!
          </p>
          <button className="artist__button">Free Consultation</button>
        </article>
      </section>

      {/* <section className="work">
        <h2 className="work__heading">My Work</h2>
        <ul className="work__list">
          <li className="work__item">
            <img
              src={require("./assets/image-slide-1.jpg")}
              alt="Work Example"
            />
          </li>
          <li className="work__item">
            <img
              src={require("./assets/image-slide-2.jpg")}
              alt="Work Example"
            />
          </li>
          <li className="work__item">
            <img
              src={require("./assets/image-slide-3.jpg")}
              alt="Work Example"
            />
          </li>
          <li className="work__item">
            <img
              src={require("./assets/image-slide-4.jpg")}
              alt="Work Example"
            />
          </li>
          <li className="work__item">
            <img
              src={require("./assets/image-slide-5.jpg")}
              alt="Work Example"
            />
          </li>
        </ul>

        <button className="work__button"></button>
        <button className="work__button"></button>
      </section> */}

      <section className="book">
        <article className="book__info">
          <h3 className="book__heading">Book a call with me</h3>
          <p className="book__description">
            I'd love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
        </article>
        <button className="book__button">Free Consultation</button>
      </section>

      <footer className="footer">
        <img src={Logo} alt="Logo" className="footer__logo" />
        <button className="footer__button">Free Consultation</button>
      </footer>
    </main>
  );
};

export default App;
