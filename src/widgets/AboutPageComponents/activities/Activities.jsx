import './activities.scss'
import vector1 from '../../../shared/libraryImages/hugeicons_ai-innovation-03.png'
import vector2 from '../../../shared/libraryImages/Vector (1).png'


export const Activities = () => {
    return (
        <div className='activities-container' >
            <h1 className='activities-container-title' >АКТЫ, РЕГУЛИРУЮЩИЕ ДЕЯТЕЛЬНОСТЬ</h1>
            <div className='activities-container-cards' >
                <div className='activities-container-cards-card' >
                    <img className='activities-container-cards-card-img' src={vector1} alt="" />
                    <h3 className='activities-container-cards-card-title'>Управление качеством услуг</h3>
                    <p className='activities-container-cards-card-description'>Акты и регламенты помогают стандартизировать процессы внутри библиотеки, 
                        чтобы обеспечить высокий уровень обслуживания пользователей и соответствие 
                        всем требованиям.</p>
                </div>
                <div className='activities-container-cards-card'>
                    <img className='activities-container-cards-card-img' src={vector2} alt="" />
                    <h3 className='activities-container-cards-card-title'>Соблюдение законодательства</h3>
                    <p className='activities-container-cards-card-description'>Эти документы позволяют библиотеке действовать в рамках закона, 
                        соблюдая как национальные, так и международные нормы в области 
                        интеллектуальной собственности.</p>
                </div>
                <div className='activities-container-cards-card'>
                    <img className='activities-container-cards-card-img' src={vector1} alt="" />
                    <h3 className='activities-container-cards-card-title'>Эффективность работы</h3>
                    <p className='activities-container-cards-card-description third-descritption'>Регулирующие акты помогают оптимизировать процессы работы с читателями, 
                    улучшая доступ к материалам, условия для образовательных и культурных инициатив.</p>
                </div>
                <div className='activities-container-cards-card'>
                    <img className='activities-container-cards-card-img' src={vector2} alt="" />
                    <h3 className='activities-container-cards-card-title'>Прозрачность и ответственность</h3>
                    <p className='activities-container-cards-card-description'>Соблюдение норм и процедур способствует открытости работы библиотеки, 
                        повышает доверие пользователей и дает возможность отслеживать 
                        эффективность работы каждого отдела.</p>
                </div>
            </div>
        </div>
    );
}

