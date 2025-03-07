import "./CardFhdt.scss";

export function CardFhdt() {
  const cards = [
    {
      title: "КАТАЛОГИ",
      description:
        "Электронные и печатные каталоги содержат широкий выбор книг, научных изданий и цифровых ресурсов.",
      imgSrc: "https://u.livelib.ru/album/1000014611/l/ve6d98g0/o-l.jpg",
      alt: "Каталоги",
    },
    {
      title: "ЭЛЕКТРОННАЯ БИБЛИОТЕКА",
      description:
        "Доступ к тысячам электронных книг, научных публикаций и архивных документов в удобном формате.",
      imgSrc: "https://natlibraryrm.ru/wp-content/uploads/2020/04/4860331.jpeg",
      alt: "Электронная библиотека",
    },
  ];

  return (
    <div className="cardFhdt">
      <h2 className="cardFhdt__title">Каталоги</h2>
      <div className="cardFhdt__cards row">
        {cards.map((card, index) => (
          <div className="cardFhdt__card col-6" key={index}>
            <img src={card.imgSrc} alt={card.alt} className="cardFhdt__image" />
            <div className="cardFhdt__content">
              <h3 className="cardFhdt__card-title">{card.title}</h3>
              <p className="cardFhdt__description">{card.description}</p>
              <button className="cardFhdt__button">Подробнее</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
