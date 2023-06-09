import React from "react";
import { Link } from "react-router-dom";
import Container from "../../Utils/Container/Container";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";
import PrayerTimes from "../../Assets/Imgs/Prayer-times.png";
import CRMschool from "../../Assets/Imgs/CRM-school.png";
import Chat from "../../Assets/Imgs/Chat.png";
import ToDo from "../../Assets/Imgs/To-Do-List.png";
import Clock from "../../Assets/Imgs/Clock.png";
import Calculator from "../../Assets/Imgs/Calc-Pro.png";
import ProductsUsers from "../../Assets/Imgs/Products-and-Users.png";
import RickMorty from "../../Assets/Imgs/Rick-and-Morty.png";
import WhoGoesFirst from "../../Assets/Imgs/Who-goes-first.png";
import PhonesCart from "../../Assets/Imgs/Trolley-of-Phones.png";
import Slider from "../../Assets/Imgs/Slider.png";
import GitHub from "../../Assets/Imgs/Pagination.png";
import "./Portfolio.scss";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <section id="portfolio" className="portfolio">
        <h2 className="portfolio__title">{t("portfolio-title")}</h2>
        <ul className="portfolio__list">
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://namoz-vaqtlari-uzb.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Prayer Times</h3>
                <img
                  className="portfolio__img"
                  src={PrayerTimes}
                  alt="Daily-Prayer-Times"
                />
                <p className="portfolio__text">{t("portfolio-PrayerTimes")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://crm-school.vercel.app/" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">CRM-school</h3>
                <img
                  className="portfolio__img"
                  src={CRMschool}
                  alt="CRM-school"
                />
                <p className="portfolio__text">{t("portfolio-crm")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link
              to="https://chat-with-celebrities.netlify.app"
              target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Chat with Celebrities</h3>
                <img
                  className="portfolio__img"
                  src={Chat}
                  alt="Chat with Celebrities"
                />
                <p className="portfolio__text">{t("portfolio-chat")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://to-do-list-ez.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">To-Do</h3>
                <img className="portfolio__img" src={ToDo} alt="To-Do List" />
                <p className="portfolio__text">{t("portfolio-todo")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://clock-uz-tash.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Clock</h3>
                <img className="portfolio__img" src={Clock} alt="Clock" />
                <p className="portfolio__text">{t("portfolio-clock")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://calculator-pro-ez.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Calculator</h3>
                <img
                  className="portfolio__img"
                  src={Calculator}
                  alt="Calculator"
                />
                <p className="portfolio__text">{t("portfolio-calculator")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://products-and-users.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Products and Users</h3>
                <img
                  className="portfolio__img"
                  src={ProductsUsers}
                  alt="Products-and-Users"
                />
                <p className="portfolio__text">
                  {t("portfolio-ProductsUsers")}
                </p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link
              to="https://the-rick-and-morty-reactjs.netlify.app"
              target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Rick and Morty</h3>
                <img
                  className="portfolio__img"
                  src={RickMorty}
                  alt="Rick-and-Morty"
                />
                <p className="portfolio__text">{t("portfolio-RickMorty")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://who-goes-first.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Who goes first ?!</h3>
                <img
                  className="portfolio__img"
                  src={WhoGoesFirst}
                  alt="Who-goes-first"
                />
                <p className="portfolio__text">{t("portfolio-WhoGoesFirst")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link
              to="https://phone-cart-redux-toolkit.netlify.app"
              target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Trolley of Phones</h3>
                <img
                  className="portfolio__img"
                  src={PhonesCart}
                  alt="Trolley-of-Phones"
                />
                <p className="portfolio__text">{t("portfolio-phones")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://slider-react-js-01.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Slider</h3>
                <img className="portfolio__img" src={Slider} alt="Slider" />
                <p className="portfolio__text">{t("portfolio-slider")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link
              to="https://pagination-github-react.netlify.app"
              target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Pagination "GitHub"</h3>
                <img
                  className="portfolio__img"
                  src={GitHub}
                  alt="Pagination-GitHub"
                />
                <p className="portfolio__text">{t("portfolio-github")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
        </ul>
      </section>
    </Container>
  );
};

export default Portfolio;
