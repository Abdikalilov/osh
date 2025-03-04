import './SupportPayment.scss';
import Group from '../../../shared/img/Group.png';
import imageA from '../../../shared/img/imageA.png';
import imageB from '../../../shared/img/imageB.png';
import imageC from '../../../shared/img/imageC.png';


export function SupportPayment() {
    return (
        <div>
            <div className="payment">
                <h1 className="title_payment">СПОСОБЫ ОПЛАТЫ</h1>
                <div className="block_payment">
                    <div className="block">
                        <img className="img_payment" src={Group} alt="" />
                        <h2 className="payment_text">Наличными</h2>
                        <h2 className="payment_p">Оплата наличными курьеру или ресторану при получение заказа.</h2>
                    </div>
                    <div className="block">
                        <img className="img_payment" src={imageA} alt="" />
                        <img className="img_payment" src={imageB} alt="" />
                        <img className="img_payment" src={imageC} alt="" />
                        <h2 className="payment_text">Перевод</h2>
                        <h2 className="payment_p">Перевод через Bakai QR, MBank, Optima Bank</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};