import { CardAdvertisment } from './../../../features/cardAdvertisment/cardAdvertisment';
export const NewsAdvertisment = ({title}) => {

    
const events = [
  {
    title: "ВЫСТАВКА: КОД ЦИВИЛИЗАЦИЙ",
    date: "Время проведения: с 10 декабря 2024 года по 25 января 2025 года",
    description:
      "Токтогула Сатылганова – место, где книги открывают двери в мир знаний и вдохновения. Наш фонд включает разнообразную литературу – от классики до современных бестселлеров, а также электронные ресурсы для учебы и досуга. Мы создаем уютное пространство для чтения, развития и творчества, регулярно проводим лекции, мастер-классы и встречи с авторами.",
    image: "https://piteronline.tv/wp-content/uploads/2023/08/zimniy-palace-library-scaled.jpg",
  },
  {
    title: "ВЫСТАВКА: КОД ЦИВИЛИЗАЦИЙ",
    date: "Время проведения: с 10 декабря 2024 года по 25 января 2025 года",
    description:
      "Токтогула Сатылганова – место, где книги открывают двери в мир знаний и вдохновения. Наш фонд включает разнообразную литературу – от классики до современных бестселлеров, а также электронные ресурсы для учебы и досуга. Мы создаем уютное пространство для чтения, развития и творчества, регулярно проводим лекции, мастер-классы и встречи с авторами.",
    image: "https://img.freepik.com/premium-photo/girl-reading-book-that-she-took-from-shelves-library_280538-2423.jpg",
  },
  {
    title: "ВЫСТАВКА: КОД ЦИВИЛИЗАЦИЙ",
    date: "Время проведения: с 10 декабря 2024 года по 25 января 2025 года",
    description:
      "Токтогула Сатылганова – место, где книги открывают двери в мир знаний и вдохновения. Наш фонд включает разнообразную литературу – от классики до современных бестселлеров, а также электронные ресурсы для учебы и досуга. Мы создаем уютное пространство для чтения, развития и творчества, регулярно проводим лекции, мастер-классы и встречи с авторами.",
    image: "https://piteronline.tv/wp-content/uploads/2023/08/zimniy-palace-library-scaled.jpg",
  },
  {
    title: "ВЫСТАВКА: КОД ЦИВИЛИЗАЦИЙ",
    date: "Время проведения: с 10 декабря 2024 года по 25 января 2025 года",
    description:
      "Токтогула Сатылганова – место, где книги открывают двери в мир знаний и вдохновения. Наш фонд включает разнообразную литературу – от классики до современных бестселлеров, а также электронные ресурсы для учебы и досуга. Мы создаем уютное пространство для чтения, развития и творчества, регулярно проводим лекции, мастер-классы и встречи с авторами.",
    image: "https://img.freepik.com/premium-photo/girl-reading-book-that-she-took-from-shelves-library_280538-2423.jpg",
  },
  {
    title: "ВЫСТАВКА: КОД ЦИВИЛИЗАЦИЙ",
    date: "Время проведения: с 10 декабря 2024 года по 25 января 2025 года",
    description:
      "Токтогула Сатылганова – место, где книги открывают двери в мир знаний и вдохновения. Наш фонд включает разнообразную литературу – от классики до современных бестселлеров, а также электронные ресурсы для учебы и досуга. Мы создаем уютное пространство для чтения, развития и творчества, регулярно проводим лекции, мастер-классы и встречи с авторами.",
    image: "https://img.freepik.com/premium-photo/girl-reading-book-that-she-took-from-shelves-library_280538-2423.jpg",
  },
];
    return (
        <div className="cardAdvertisment container">
            <h1 className="cardAdvertisment__title">{title}</h1>
            <div className="cardAdvertisment__list">
                {events.map((event, index) => (
                    <CardAdvertisment
                        key={index}
                        date={event.date} 
                        title={event.title} 
                        image={event.image} 
                        description={event.description}
                    />
                ))}
            </div>
        </div>
    );
}

