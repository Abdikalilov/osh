import React from "react";
import "./HomeBanner.scss";
import libraryHomebanner from "../HomeImg/libraryHomebanner.png";
import libraryHomebanner2 from "../HomeImg/libraryHomebanner2.png";
import libraryHomebanner3 from "../HomeImg/libraryHomebanner3.png";
import libraryHomebanner4 from "../HomeImg/libraryHomebanner4.png";
import libraryHomebanner5 from "../HomeImg/libraryHomebanner5.png";

export function HomeBanner  ()  {
  return (
    <div className="home-banner">
      <div className="home-banner-images">
        <img src={libraryHomebanner} alt="Library" className="home-banner-img home-banner-img1" />
        <img src={libraryHomebanner2} alt="Reading" className="home-banner-img home-banner-img2" />
        <img src={libraryHomebanner3} alt="Interior" className="home-banner-img home-banner-img3" />
        <img src={libraryHomebanner4} alt="Browsing" className="home-banner-img home-banner-img4" />
        <img src={libraryHomebanner5} alt="Bookshelf" className="home-banner-img home-banner-img5" />
      </div>
      <div className="home-banner-text">
        <h1>ОТКРЫВАЙ КНИГУ – ОТКРЫВАЙ МИР</h1>
        <p>
          Добро пожаловать в библиотеку имени Токтогула Сатылганова – место, где книги
          открывают двери в мир знаний и вдохновения. Наш фонд включает разнообразную
          литературу – от классики до современных бестселлеров, а также электронные ресурсы
          для учебы и досуга. Мы создаем уютное пространство для чтения, развития и
          творчества, регулярно проводим лекции, мастер-классы и встречи с авторами. Каждая
          книга – это ключ к новым открытиям, и мы рады делиться ими с вами!
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;