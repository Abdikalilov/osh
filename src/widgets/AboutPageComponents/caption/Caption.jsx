import './caption.scss'
import Ellipse4 from '../../../shared/libraryImages/Ellipse 4.png'
import Ellipse6 from '../../../shared/libraryImages/Ellipse 6.png'
import Ellipse5 from '../../../shared/libraryImages/Ellipse 5.png'


export const Caption = () => {
    return (
        <div className='caption-container'>
            <div className='caption-container-headline'>
                <div className='caption-container-headline-parts'>
                    <h1 className='caption-container-headline-parts-first-title'>История, которая </h1>
                    <h3 className='caption-container-headline-parts-second-title'>продолжает жить веками</h3>
                    <p className='caption-container-headline-parts-description'>Библиотека имени Токтогула Сатылганова – это культурный и образовательный центр, 
                    предлагающий широкие возможности для обучения, саморазвития и культурного обмена. 
                    Мы стремимся быть местом, где каждый может найти ресурсы, которые помогут развиваться, 
                    учиться и получать новые знания.</p>
                </div>
            </div> 
            <div className='caption-container-images' >
                <div>
                    <img className='caption-container-images-first-img ' src={Ellipse4} alt="" />
                </div>
                <div>
                    <img className='caption-container-images-second-img' src={Ellipse5} alt="" />
                </div>
                <div>
                    <img className='caption-container-images-third-img' src={Ellipse6} alt="" />
                </div>
            </div>
        </div>
        
    );
}

