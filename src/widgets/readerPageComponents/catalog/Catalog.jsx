import './catalog.scss'
import img1 from '../../../shared/images/Rectangle971.png'
import img2 from '../../../shared/images/Rectangle2.png'


export const Catalog = () => {
    return (
        <div className='catalog container'>
             <h1 className='catalog-text1'>Каталоги</h1>
             <h1 className='catalog-text2'>Электронная библиотека</h1>

             <div className='catalog-box'>
                <img className='catalog-img1' src={img1} alt="" />
                <h1 className='catalog-text3'>Каталоги</h1>
                <button className='catalog-btn'>Подробнее</button>    
                <p className='catalog-text4'>Электронные и печатные каталоги содержат
                     широкий выбор книг, научных изданий и цифровых ресурсов.</p>

             </div>
             <div className='catalog-box2'>
             <img className='catalog-img2' src={img2} alt="" />
             <h1 className='catalog-text5'>Электронная библиотека</h1>
             <button className='catalog-btn2'>Подробнее</button>    
             <p className='catalog-text6'>Доступ к тысячам электронных книг, научных публикаций и 
              архивных документов в удобном формате.</p>
             </div>

        </div>
    );
}

 
