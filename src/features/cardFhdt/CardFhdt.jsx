import './CardFhdt.scss';

export function CardFhdt() {
  return (
    <div className="cardFhdt">
      <h2 className="cardFhdt__title">Каталоги</h2>
      <div className="cardFhdt__cards">
        <div className="cardFhdt__card">
          <img
            src="https://u.livelib.ru/album/1000014611/l/ve6d98g0/o-l.jpg"
            alt="Каталоги"
            className="cardFhdt__image"
          />
          <div className="cardFhdt__content">
            <h3 className="cardFhdt__card-title">КАТАЛОГИ</h3>
            <p className="cardFhdt__description">
              Электронные и печатные каталоги содержат широкий выбор книг,
              научных изданий и цифровых ресурсов.
            </p>
            <button className="cardFhdt__button">Подробнее</button>
          </div>
        </div>
        
        <div className="cardFhdt__card">
          <img
            src="https://natlibraryrm.ru/wp-content/uploads/2020/04/4860331.jpeg"
            alt="Электронная библиотека"
            className="cardFhdt__image"
          />
          <div className="cardFhdt__content">
            <h3 className="cardFhdt__card-title">ЭЛЕКТРОННАЯ БИБЛИОТЕКА</h3>
            <p className="cardFhdt__description">
              Доступ к тысячам электронных книг, научных публикаций и архивных
              документов в удобном формате.
            </p>
            <button className="cardFhdt__button">Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
}
