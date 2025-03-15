import rectanglebanner from '../../../shared/img/rectanglebanner.png';
import './SupportBanner.scss';

export const SupportBanner = () => {

  const item_left = [
    {
      id: 1,
      title: 'ПОДДЕРЖИТЕ РАЗВИТИЕ ЗНАНИЙ И КУЛЬТУРЫ',
      description: ' Библиотека имени Токтогула Сатылганова – это культурный и образовательный центр, предлагающий широкие возможности для обучения, саморазвития и культурного обмена. Мы стремимся быть местом, где каждый может найти ресурсы, которые помогут развиваться, учиться и получать новые знания. '
    }
  ];

  const item_right = [
    {
      id: 1,
      image: 'https://s3-alpha-sig.figma.com/img/02ce/2bb1/6166f207c7c31b5bdd746a128d5c665b?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GQXzXdNPXdftOdlKw3tzd8C6X5VgZgdrMRqyHjV3tTOstRn1Wr7aF2w8014FIoYczC~j7Y6L79GY5yVX3no~RTzRJhplVzSdAv6tBeRzZL9~mOYkpIQGDl0NixcgOY-wXQcKuawbiGHR7Oi-gR4Pjmw~iI2VLL8~1u0DmIcEjgm7L8FFytvqUYyXLfQI8uBbUD26zk1pj2o1A7AHAK6sfL~JEXuQTOycCx1ciqjCrgbmQA3j6ZX3ejKB51yWL67zyu33rEUEBDNwN9WbM2xcn-HIhJ6uCfEuC6QTrlQXSxRKwIfe-ZCCzRO6uImYjpEpNK-eico6vsgLldA-WrUzpg__',
      description: 'Библиотека имени Токтогула Сатылганова – это культурный и образовательный центр, предлагающий широкие возможности для обучения, саморазвития и культурного обмена. Мы стремимся быть местом, где каждый может найти ресурсы, которые помогут развиваться, учиться и получать новые знания.'
    }
  ];

  return (
    <section className="support__banner-container">
      <div className="support__banner-container-left">
        {
          item_left.map((item) => (
            <div className="support__banner-container-left-box" key={item.id} >
              <h1 className="support__banner-container-left-box-title">{item.title}</h1>
              <p className="support__banner-container-left-box-description">{item.description}</p>
            </div>
          ))
        }
      </div>
      <div className="support__banner-container-right">
        {
          item_right.map((item) => (
            <div key={item.id} className='support__banner-container-right-box'>
              <img className="support__banner-container-right-box-image" src={item.image} alt="image" />
              <p className="support__banner-container-right-box-description">{item.description}</p>
            </div>
          ))
        }
      </div>
    </section>
  );
};