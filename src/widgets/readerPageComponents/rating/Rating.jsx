import './rating.scss'
import img from '../../../shared/images/image(1).png'
import img2 from '../../../shared/images/image(2).png'

// import { Swiper, SwiperSlide } from "swiper/react";


export const Rating = () => {
 
    const newsItems = [
  {
    date: "(01)",
    date2: "(2)",
    date3: "(3)",
    date4: "(4)",
    title: "Иван Иванов (75 книг за месяц).",
  }

];

const Items = [
  {
    data: "(01)",
    data2: "(2)",
    data3: "(3)",
    data4: "(4)",
    title1: 'Книга: "История цивилизаций". Автор: Джон Доу.',
    take: 'Код цивилизаций" — 500 прочтений'
  } 
]

    return (
        <div className='rating'>
          <div>
            
          </div>

      <h1 className='rating-text1'>Рейтинг  читателей(топ-10)</h1>
              <br />
          <div className='rating-div'>
             <div className="rating-row">
               <img className='rating-img' src={img} alt="" />
    
              {newsItems.map((news, index) => (
              <div className="rating-col" key={index}>
                    <span className="rating-date">{news.date}</span>
                    <h3 className='rating-title'>{news.title}</h3>
                </div>
         ))}
    </div> 
             <div className="rating-row2">
    <img className='rating-img' src={img} alt="" />
    
              {newsItems.map((news, index) => (
              <div className="rating-col" key={index}>
                    <span className="rating-date">{news.date2}</span>
                    <h3 className='rating-title'>{news.title}</h3>
                </div>
         ))}
    </div>
    
    <div className="rating-row3">
    <img className='rating-img' src={img} alt="" />
    
              {newsItems.map((news, index) => (
              <div className="rating-col" key={index}>
                    <span className="rating-date">{news.date3}</span>
                    <h3 className='rating-title'>{news.title}</h3>
                </div>
         ))}
    </div>
    
    
    <div className="rating-row4">
    <img className='rating-img' src={img} alt="" />
    
              {newsItems.map((news, index) => (
              <div className="rating-col" key={index}>
                    <span className="rating-date">{news.date4}</span>
                    <h3 className='rating-title'>{news.title}</h3>
                </div>
         ))}
          </div>
           
</div>

<br />
<br />

<h1 className='rating-text2'>Рейтинг книг(топ-10)</h1>
       <br />
<div className='rating-div2'>

         <div className="rating-box">
           <img className='rating-img2' src={img2} alt="" />

          {Items.map((items, index) => (
          <div className="rating-col-1" key={index}>
                <span className="rating-data">{items.data}</span>
                <h3 className='rating-title1'>{items.title1}</h3>
                <br />
                <h3 className='rating-take'>{items.take}</h3>
            </div>
     ))}
</div>

         <div className="rating-box2">
           <img className='rating-img2' src={img2} alt="" />

          {Items.map((items, index) => (
          <div className="rating-col-1" key={index}>
                <span className="rating-data">{items.data2}</span>
                <h3 className='rating-title1'>{items.title1}</h3>
                <br />
                <h3 className='rating-take'>{items.take}</h3>
            </div>
     ))}
</div>

         <div className="rating-box3">
           <img className='rating-img2' src={img2} alt="" />

          {Items.map((items, index) => (
          <div className="rating-col-1" key={index}>
                <span className="rating-data">{items.data3}</span>
                <h3 className='rating-title1'>{items.title1}</h3>
                <br />
                <h3 className='rating-take'>{items.take}</h3>
            </div>
     ))}
</div>

         <div className="rating-box4">
           <img className='rating-img2' src={img2} alt="" />

          {Items.map((items, index) => (
          <div className="rating-col-1" key={index}>
                <span className="rating-data">{items.data4}</span>
                <h3 className='rating-title1'>{items.title1}</h3>
                <br />
                <h3 className='rating-take'>{items.take}</h3>
            </div>
     ))}
</div>
</div>

     

        </div>
    );
}






    // const images = [
    //   { id: 1, src: img, name: "Иван Иванов", books: 75 },
    //   { id: 2, src: img, name: "Петр Петров", books: 60 },
    //   { id: 3, src: img, name: "Анна Смирнова", books: 90 },
    // ];
    
    //   return (
    //     <Swiper spaceBetween={20} slidesPerView={3} direction='horizontal'>
    //       {images.map((item) => (
    //         <SwiperSlide key={item.id}>
    //           <div className="card">
    //             <img src={item.src} alt={item.name} />
    //             <p>({item.id.toString().padStart(2, "0")})</p>
    //             <p>{item.name} ({item.books} книг за месяц)</p>
    //           </div>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   );
    // }

