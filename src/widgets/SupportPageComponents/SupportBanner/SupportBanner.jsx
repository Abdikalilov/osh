import rectanglebanner from '../../../shared/img/rectanglebanner.png';
import './SupportBanner.scss';

export const SupportBanner = () => {
  return (
    <div className="support__container">
        <div className="rectangle__banner">
          <h1 className="rectangle__banner-title">ПОДДЕРЖИТЕ РАЗВИТИЕ ЗНАНИЙ И КУЛЬТУРЫ</h1>
          <div className="rectangle__sup">
            <img className="rectangle__sup-img" src={rectanglebanner} alt="" />
            <p className="rectangle__sup-description">Библиотека имени Токтогула Сатылганова – это не только хранилище знаний, но и динамично развивающееся образовательное и культурное пространство. Поддержка библиотеки играет ключевую роль в ее развитии, позволяя нам предоставлять читателям доступ к ценным ресурсам, организовывать мероприятия и внедрять новые технологии.</p>
        </div>
        </div>
        
    </div>
  );
};