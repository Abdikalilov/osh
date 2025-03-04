import './ElectronicPartners.scss';
import Sponsors from '../../../shared/img/Sponsors.jpg';


export const ElectronicPartners = () => {
    return (
        <div>
            <div className="eletronic_sponsors">
                <h1 className="sponsors_title">НАШИ ПАРТНЁРЫ, ГЛАВНЫЕ СПОНСОРЫ</h1>
                <img className="sponsors_img" src={Sponsors} alt="" />
            </div>
        </div>
    );
}

