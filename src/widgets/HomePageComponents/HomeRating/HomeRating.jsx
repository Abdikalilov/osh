import React from "react";
import "./HomeRating.scss";

const readers = [
  { id: "02", name: "Иван Иванов", books: " (75 книг за месяц).", image: "https://www.pravilamag.ru/upload/img_cache/01e/01e8a856c03c4553a3e7da221f2af2ec_cropped_510x309.webp" },
  { id: "01", name: "Иван Иванов", books: " (75 книг за месяц).", image: "https://www.pravilamag.ru/upload/img_cache/01e/01e8a856c03c4553a3e7da221f2af2ec_cropped_510x309.webp" },
  { id: "03", name: "Иван Иванов", books: " (75 книг за месяц).", image: "https://www.pravilamag.ru/upload/img_cache/01e/01e8a856c03c4553a3e7da221f2af2ec_cropped_510x309.webp" },
];

const books = [
  { id: "02", title: "Книга: История цивилизаций.", author: "Автор: Джон Доу", votes: "Код цивилизаций — 500 прочтений", image: "https://avatars.dzeninfra.ru/get-zen_doc/9852052/pub_64b4f692338eaf5590d9975e_64b4f7546c48c6430dd9352c/scale_1200" },
  { id: "01", title: "Книга: История цивилизаций.", author: "Автор: Джон Доу", votes: "Код цивилизаций — 500 прочтений", image: "https://avatars.dzeninfra.ru/get-zen_doc/9852052/pub_64b4f692338eaf5590d9975e_64b4f7546c48c6430dd9352c/scale_1200" },
  { id: "03", title: "Книга: История цивилизаций.", author: "Автор: Джон Доу", votes: "Код цивилизаций — 500 прочтений", image: "https://avatars.dzeninfra.ru/get-zen_doc/9852052/pub_64b4f692338eaf5590d9975e_64b4f7546c48c6430dd9352c/scale_1200" },
];

export function HomeRating() {
  return (
    <div className="home-rating-container">
      <h2 className="home-rating-title">Рейтинг читателей (ТОП-3)</h2>
      <div className="home-rating-grid">
        {readers.map((reader) => (
          <div key={reader.id} className={`home-rating-card ${reader.id === "01" ? "home-rating-card--featured" : ""}`}>
            <img src={reader.image} alt={reader.name} className="home-rating-image" />
            <h3 className="home-rating-name">({reader.id})</h3>
            <h4 className="home-rating-books">{reader.name} {reader.books} </h4>
          </div>
        ))}
      </div>
      <h2 className="home-rating-title">Рейтинг книг (ТОП-3)</h2>
      <div className="home-rating-grid">
        {books.map((book) => (
          <div key={book.id} className={`home-rating-card ${book.id === "01" ? "home-rating-card--featured" : ""}`}>
            <img src={book.image} alt={book.title} className="home-rating-image" />
            <h3 className="home-rating-name">({book.id})</h3>
            <div className="box" style={{display: 'flex', flexDirection: 'column'}}>
              <h4>{book.title}</h4>
              <h4>{book.author}</h4>
              {/* <h4 className="home-rating-title-text">{book.title}</h4>
              <h4 className="home-rating-author">{book.author}</h4> */}
            </div>
            <h4 className="home-rating-votes">{book.votes}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
