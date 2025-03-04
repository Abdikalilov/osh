import Rectangle from '../../../shared/img/Rectanglel.jpg';
import './SupportBanner.scss';

export const SupportBanner = () => {
  return (
    <div className="support">
        <div className="rectangle">
          <h1 className="title_rectangle">ПОДДЕРЖИТЕ <br /> РАЗВИТИЕ <br /> ЗНАНИЙ И <br /> КУЛЬТУРЫ</h1>

          <div className="rectangle_sup">
            <img className="rectangle_img" src={Rectangle} alt="" />
            <p className="rectangle_p">Библиотека имени Токтогула Сатылганова – это не только хранилище <br /> знаний, но и динамично развивающееся образовательное и культурное <br /> пространство. Поддержка библиотеки играет ключевую роль в ее <br /> развитии, позволяя нам предоставлять читателям доступ к ценным <br /> ресурсам, организовывать мероприятия и внедрять новые технологии.</p>
        </div>
        </div>
        
    </div>
  );
};