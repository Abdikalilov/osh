import BanerImg from '../../shared/libraryimg/BanerImg.png'
import './afishaBanner.scss'
export const AfishaBanner = () => {
    return (
        <div className='baner container'>
            <div className='baner_group'>
                <div className='baner_group_img'>
                    <h1>Обявление о мероприятиях</h1>
                    <img src={BanerImg} alt=""  />
                </div>
            </div>  
                    <div className='baner_group_text'>
                        <p>Библиотека имени Токтогула Сатылганова – это не только книги, но и активная работа по развитию культуры, образования и просвещения. Мы реализуем различные проекты, направленные на популяризацию чтения, поддержку молодежи, сохранение исторического наследия и развитие цифровых технологий.</p>
                    </div>
                
          
           

        </div>

        // <div className="afishaBaner">
        //     <div className="conteiner">
        //         <h1>Обявление о мероприятиях</h1>
        //             <div className="afishaBaner_group">
        //                 <div className="afishaBaner_group_img">
        //                     <img src={BanerImg} alt=""  />
        //                     <p>Библиотека имени Токтогула Сатылганова – это не только книги, но и активная работа по развитию культуры, образования и просвещения. Мы реализуем различные проекты, направленные на популяризацию чтения, поддержку молодежи, сохранение исторического наследия и развитие цифровых технологий.</p>
        //                 </div>
                        
        //             </div>
        //         </div>
        //     </div>
    );
}

