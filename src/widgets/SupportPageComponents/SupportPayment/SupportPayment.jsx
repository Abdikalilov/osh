import './SupportPayment.scss';
import imageA from '../../../shared/img/imageA.png';
import imageB from '../../../shared/img/imageB.png';
import imageC from '../../../shared/img/imageC.png';


export function SupportPayment() {
    return (
        <div>
            <div className="payment">
                <h1 className="title_payment">СПОСОБЫ ОПЛАТЫ</h1>
                <div className="block_payment">
                    <div className="block_py">
                        <h1 className="payment_text">+996 555 555 555</h1>
                        <img className="img_payment" src={imageA} alt="" />
                    </div>
                    <div className="block_py">
                        <h1 className="payment_text">+996 555 555 555</h1>
                        <img className="img_payment" src={imageB} alt="" />
                    </div>
                    <div className="block_py">
                        <h1 className="payment_text">+996 555 555 555</h1>
                        <img className="img_payment" src={imageC} alt="" />    
                    </div>
                </div>
            </div>
        </div>
    );
};