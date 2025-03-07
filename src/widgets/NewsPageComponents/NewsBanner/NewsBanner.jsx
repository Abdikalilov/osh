import React from "react";
import "./NewsBanner.scss";
import librarunewsbanner from "../../../shared/libraryimg/librarunewsbanner.png"

export function NewsSection  ()  {
  return (
    <section className="news">
      <h2 className="news__title">НОВОСТИ</h2>
      <div className="news__content">
        <div className="news__image">
          <img src={librarunewsbanner} alt="Книга 'НЕ НОЙ'" />
        </div>
      </div>
      <p className="news__description">
        Библиотека имени Токтогула Сатылганова – это не только книги, но и активная
        работа по развитию культуры, образования и просвещения. Мы реализуем различные
        проекты, направленные на популяризацию чтения, поддержку молодежи, сохранение
        исторического наследия и развитие цифровых технологий.
      </p>
    </section>
  );
};


