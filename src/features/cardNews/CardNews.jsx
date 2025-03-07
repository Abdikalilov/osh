import "./CardNews.scss";

export const CardNews = ({ image, title, time, description }) => {
  return (
    <div className="card-news__card">
      <img
        src={image}
        alt={title}
        className="card-news__image"
      />
      <div className="card-news__content">
        <h2 className="card-news__card-title">{title}</h2> 
        <hr />
        <p className="card-news__time">{time}</p>
        <p className="card-news__description">{description}</p>
       
      </div>
      <button className="card-news__button">Подробнее</button>
    </div>
  );
};



