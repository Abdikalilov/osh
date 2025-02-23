import React from "react";
import "./CardAfisha.scss";

const events = [
  {
    title: "ВЫСТАВКА: КОД ЦИВИЛИЗАЦИЙ",
    date: "Время проведения: с 10 декабря 2024 года по 25 января 2025 года",
    description:
      "Токтогула Сатылганова – место, где книги открывают двери в мир знаний и вдохновения. Наш фонд включает разнообразную литературу – от классики до современных бестселлеров, а также электронные ресурсы для учебы и досуга. Мы создаем уютное пространство для чтения, развития и творчества, регулярно проводим лекции, мастер-классы и встречи с авторами.",
    image: "https://piteronline.tv/wp-content/uploads/2023/08/zimniy-palace-library-scaled.jpg",
  },
  {
    title: "ВЫСТАВКА: КОД ЦИВИЛИЗАЦИЙ",
    date: "Время проведения: с 10 декабря 2024 года по 25 января 2025 года",
    description:
      "Токтогула Сатылганова – место, где книги открывают двери в мир знаний и вдохновения. Наш фонд включает разнообразную литературу – от классики до современных бестселлеров, а также электронные ресурсы для учебы и досуга. Мы создаем уютное пространство для чтения, развития и творчества, регулярно проводим лекции, мастер-классы и встречи с авторами.",
    image: "https://img.freepik.com/premium-photo/girl-reading-book-that-she-took-from-shelves-library_280538-2423.jpg",
  },
  {
    title: "ВЫСТАВКА: КОД ЦИВИЛИЗАЦИЙ",
    date: "Время проведения: с 10 декабря 2024 года по 25 января 2025 года",
    description:
      "Токтогула Сатылганова – место, где книги открывают двери в мир знаний и вдохновения. Наш фонд включает разнообразную литературу – от классики до современных бестселлеров, а также электронные ресурсы для учебы и досуга. Мы создаем уютное пространство для чтения, развития и творчества, регулярно проводим лекции, мастер-классы и встречи с авторами.",
    image: "https://piteronline.tv/wp-content/uploads/2023/08/zimniy-palace-library-scaled.jpg",
  },
  {
    title: "ВЫСТАВКА: КОД ЦИВИЛИЗАЦИЙ",
    date: "Время проведения: с 10 декабря 2024 года по 25 января 2025 года",
    description:
      "Токтогула Сатылганова – место, где книги открывают двери в мир знаний и вдохновения. Наш фонд включает разнообразную литературу – от классики до современных бестселлеров, а также электронные ресурсы для учебы и досуга. Мы создаем уютное пространство для чтения, развития и творчества, регулярно проводим лекции, мастер-классы и встречи с авторами.",
    image: "https://img.freepik.com/premium-photo/girl-reading-book-that-she-took-from-shelves-library_280538-2423.jpg",
  },
];

export function CardAfisha() {
  return (
    <div className="card-afisha">
      <h1 className="card-afisha__title">АФИША МЕРОПРИЯТИЙ</h1>
      <div className="card-afisha__list">
        {events.map((event, index) => (
          <div className="card-afisha__card" key={index}>
            <img
              src={event.image}
              alt={event.title}
              className="card-afisha__image"
            />
            <div className="card-afisha__content">
              <p className="card-afisha__date">{event.date}</p>
              <h2 className="card-afisha__card-title">{event.title}</h2>
              <p className="card-afisha__description">{event.description}</p>
            </div>
            <button className="card-afisha__button">Подробнее</button>
          </div>
        ))}
      </div>
    </div>
  );
}
