import React from "react";

import "./SCSS/styles.scss";

import Logo from "./assets/logo.svg";
import Amy from "./assets/image-amy.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

const App = () => {
  return (
    <>
      <header className="header">
        <img src={Logo} alt="Logo" className="header__logo" />
        <button className="header__button">Free Consultation</button>
      </header>

      <main className="main">
        <section className="design">
          <h1 className="design__header">Design solutions made easy</h1>
          <p className="design__description">
            With over ten years of experience in various design disciplines, I'm
            your one-stop shop for your design needs.
          </p>
        </section>

        <section className="skills">
          <h2 className="sr-only">Skills Section</h2>
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
          <h2 className="sr-only">Artist Section</h2>
          <img
            className="artist__portrait"
            src={Amy}
            alt="Headshot of Artist"
          />
          <article className="artist__info">
            <h2 className="artist__heading">
              I'm Amy, and I'd love to work on your next project
            </h2>
            <p className="artist__description">
              I love working with others to create beautiful design solutions.
              I've desgined everything from brand illustrations to complete
              mobile apps. I'm also handy with a camera!
            </p>
            <button className="artist__button">Free Consultation</button>
          </article>
        </section>

        <section className="work">
          <h2 className="work__heading">My Work</h2>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1.37}
            spaceBetween={15}
            centeredSlides={true}
            initialSlide={2}
            slideToClickedSlide={true}
            updateOnWindowResize={true}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              800: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 2.56,
              },
              1500: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <img
                src={require("./assets/image-slide-1.jpg")}
                alt="Work Example"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("./assets/image-slide-2.jpg")}
                alt="Work Example"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("./assets/image-slide-3.jpg")}
                alt="Work Example"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("./assets/image-slide-4.jpg")}
                alt="Work Example"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("./assets/image-slide-5.jpg")}
                alt="Work Example"
              />
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="book">
          <h2 className="sr-only">Booking Section</h2>
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
      </main>

      <footer className="footer">
        <img src={Logo} alt="Logo" className="footer__logo" />
        <button className="footer__button">Free Consultation</button>
      </footer>
    </>
  );
};

export default App;
