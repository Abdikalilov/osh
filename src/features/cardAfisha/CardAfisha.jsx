import "./CardAfisha.scss";

export const CardAfisha = ({ image, title, date, description }) => {
  return (
    <div className="card-afisha__card">
      <img
        src={image}
        alt={title}
        className="card-afisha__image"
      />
      <div className="card-afisha__content">
        <p className="card-afisha__date">{date}</p>
        <h2 className="card-afisha__card-title">{title}</h2>
        <p className="card-afisha__description">{description}</p>
      </div>
      <button className="card-afisha__button">Подробнее</button>
    </div>
  );
}