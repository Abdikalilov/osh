import './history.scss'
import historyImg from '../../../shared/libraryImages/image (4).png'

export const History = () => {
    return (
        <div className='history-container'>
            <h1 className='history-container-title'>ИСТОРИЯ</h1>
            <div>
                <img className='history-container-img' src={historyImg} alt="" />
            </div>
            <div className='history-container-text'>
                <div className='history-container-text'>
                    <p className='history-container-text-description'><span className='history-container-text-title'>БИБЛИОТЕКА ИМЕНИ ТОКТОГУЛА САТЫЛГАНОВА</span> – это один из крупнейших культурных и 
                    образовательных центров страны, хранящий богатое наследие киргизской и мировой 
                    литературы.</p>
                </div>
                <div className='history-container-text'>
                    <h3 className='history-container-text-title'>OСНОВАНИЕ БИБЛИОТЕКИ</h3>
                    <p className='history-container-text-description'>Библиотека была основана в [придуманный год] году в честь выдающегося киргизского акына и 
                    народного поэта Токтогула Сатылганова. Его творчество сыграло огромную роль в формировании 
                    национального самосознания, передавая через стихи и песни мудрость, силу духа и любовь к родной
                    земле. Основной целью библиотеки стало сохранение и распространение культурного наследия, 
                    а также популяризация чтения среди населения.</p>
                </div>
                <div className='history-container-text'>
                    <h3 className='history-container-text-title'>ПЕРВЫЕ ГОДЫ РАБОТЫ</h3>
                    <p className='history-container-text-description'>На момент открытия библиотека имела небольшой фонд, состоящий из классической 
                    киргизской литературы, произведений Токтогула Сатылганова и других известных поэтов 
                    и писателей. Однако с каждым годом коллекция пополнялась новыми книгами, в том числе 
                    переводами мировой классики.</p>
                    <p className='history-container-text-description'>В этот период библиотека стала местом встреч писателей, поэтов и исследователей, 
                    которые делились своими знаниями, обсуждали литературу и проводили открытые чтения.</p>
                </div>
                <div className='history-container-text'>
                    <h3 className='history-container-text-title'>РАЗВИТИЕ И МОДЕРНИЗАЦИЯ</h3>
                    <p className='history-container-text-description'>Со временем библиотека расширила свою деятельность, адаптируясь к современным требованиям. 
                    Введены электронные каталоги, обеспечен доступ к цифровым архивам и международным 
                    базам данных. Была создана уютная читальная зона, организованы специализированные 
                    залы для студентов, исследователей и детей.</p>
                    <p className='history-container-text-description'>Открытие Американского уголка стало важным шагом в развитии библиотеки. Это дает 
                    посетителям возможность изучать английский язык, знакомиться с культурой США, 
                    участвовать в образовательных программах и обменах.</p>
                </div>
                <div className='history-container-text'>
                <h3 className='history-container-text-title'>БИБЛИОТЕКА СЕГОДНЯ</h3>
                    <p className='history-container-text-description'>Сегодня библиотека имени Токтогула Сатылганова – это не просто место, где можно 
                    взять книги, но и центр интеллектуального развития. Здесь проходят литературные вечера,
                    мастер-классы, лекции и дискуссии. Работают программы по поддержке молодых авторов, 
                    организуются встречи с известными писателями.</p>
                    <p className='history-container-text-description'>Библиотека активно сотрудничает с международными организациями, внедряя современные 
                    технологии и расширяя свои информационные ресурсы.</p>
                </div>
                <div className='history-container-text'>
                    <h3 className='history-container-text-title'>ЗНАЧЕНИЕ И ВКЛАД В ОБЩЕСТВО</h3>
                    <p className='history-container-text-description'>На протяжении всей своей истории библиотека выполняла важную миссию – она 
                    вдохновляет, образовывает и объединяет людей. Ее деятельность способствует сохранению 
                    национальной культуры, повышению уровня грамотности и развитию научных исследований.</p>
                    <p className='history-container-text-description'>В будущем планируется дальнейшее расширение фонда, внедрение новых образовательных 
                    инициатив и создание еще более комфортной среды для читателей. Библиотека имени 
                    Токтогула Сатылганова остается символом знаний, культурного наследия и прогресса.</p>
                </div>
            </div>
        </div>
    );
}

