// import React from 'react';
import './HomeCatalogs.scss';

export function HomeCatalogs() {
    
  return (
    <div className="home-catalogs">
      <h2 className="home-catalogs__title">Каталоги</h2>
      <div className="home-catalogs__cards">
        <div className="home-catalogs__card">
          <img
            src="https://u.livelib.ru/album/1000014611/l/ve6d98g0/o-l.jpg"
            alt="Каталоги"
            className="home-catalogs__image"
          />
          <div className="home-catalogs__content">
            <h3 className="home-catalogs__card-title">КАТАЛОГИ</h3>
            <p className="home-catalogs__description">
              Электронные и печатные каталоги содержат широкий выбор книг,
              научных изданий и цифровых ресурсов.
            </p>
            <button className="home-catalogs__button">Подробнее</button>
          </div>
        </div>
        
        <div className="home-catalogs__card">
          <img
            src="https://natlibraryrm.ru/wp-content/uploads/2020/04/4860331.jpeg"
            alt="Электронная библиотека"
            className="home-catalogs__image"
          />
          <div className="home-catalogs__content">
            <h3 className="home-catalogs__card-title2 ">ЭЛЕКТРОННАЯ БИБЛИОТЕК</h3>
            <p className="home-catalogs__description2  ">
              Доступ к тысячам электронных книг, научных публикаций и архивных
              документов в удобном формате.
            </p>
            <button className="home-catalogs__button">Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
}
