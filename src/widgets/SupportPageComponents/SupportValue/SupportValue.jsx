import './SupportValue.scss';
import science from '../../../shared/img/science.png';
import star from '../../../shared/img/star.png';

export function SupportValue() {
    return (
        <div>
            <div className="support_value">
                <h1 className="title_value">ЦЕННОСТИ БИБЛИОТЕКИ</h1>
                <div className="value_container">
                    <div className="value_block">
                        <img className="value_img" src={science} alt="" />
                        <h3 className="block_title">ДОСТУПНОСТЬ</h3>
                        <p className="value_p">Знания должны быть доступны каждому, независимо от возраста, социального статуса и места проживания.</p>
                    </div>
                    <div className="value_block">
                        <img className="value_img" src={star} alt="" />
                        <h3 className="block_title">ОБРАЗОВАНИЕ</h3>
                        <p className="value_p">Мы поддерживаем стремление к саморазвитию, предоставляя широкий спектр образовательных ресурсов.</p>
                    </div>
                    <div className="value_block">
                        <img className="value_img" src={science} alt="" />
                        <h3 className="block_title">СОТРУДНИЧЕСТВО</h3>
                        <p className="value_p">Работаем с партнерами и организациями для развития культуры и науки.</p>
                    </div>
                    <div className="value_block">
                        <img className="value_img" src={star} alt="" />
                        <h3 className="block_title">ИННОВАЦИИ</h3>
                        <p className="value_p">Знания должны быть доступны каждому, независимо от внедряем современные технологии.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};