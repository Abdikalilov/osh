import img from '../../../shared/image/banner2.png'
import  img2 from '../../../shared/image/banner2.svg'
import img3 from '../../../shared/image/Banner.png'

import './projectbanner.scss'

export const ProjectBanner = () => { 
  return (
    <section className="container projectbanner">
     
      <div className='projectbanner_group'>
      <h1>Наши проекты: читаем, учимся, развиваемся</h1>
      <div className='projectbanner_group_image'>
        <img  className='projectbanner_group_image_img1' src={img} alt="" />
        <img  className='projectbanner_group_image_img2' src={img2} alt="" />
      </div></div>
      <div>
        <img className='projectbanner_img3' src={img3} alt="" />
      </div>
      <h2>Библиотека имени Токтогула Сатылганова </h2>

        
        
    </section>
  )
}

//div className="row">
 //         <div className="col-6">
 //           <div className="banner__content">
// //             <img src={img} alt="" />
 //             <img className='banner__content-img' src={img2} alt="" />
 //           </div>
 //         </div>
 //             <img src={img3} alt="" />
         //   </div>
 //         </div>
// //      </div>