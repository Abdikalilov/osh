import img4 from '../../../shared/image/main.svg';
import img12 from '../../../shared/image/image.svg';
import img9 from '../../../shared/image/image.png';

import './americancorner.scss'
const DataProjects = [
  {
    img: img4,
    titlle: 'Читающий город',
    description: 'Проект, направленный на развитие культуры чтения среди жителей. Организуем книжные выставки, литературные конкурсы, публичные чтения.'
  },
  {
    img: img12,
    titlle: 'Читающий город',
    description: 'Проект, направленный на развитие культуры чтения среди жителей. Организуем книжные выставки, литературные конкурсы, публичные чтения.'
  },
  {
    img: img9,
    titlle: 'Образовательный центр',
    description: 'Проект, направленный на развитие культуры чтения среди жителей. Организуем книжные выставки, литературные конкурсы, публичные чтения.'
  },
  {
    img: img4,
    titlle: 'Читающий город',
    description: 'Проект, направленный на развитие культуры чтения среди жителей. Организуем книжные выставки, литературные конкурсы, публичные чтения.'
  },


]



export const AmericanCorner = () => {
  return (
    <div className='projects container'>
      <h1 className='main'>Американский уголок</h1>
      <div className="projects-grup">
        {DataProjects.map((item, index) => (
          <div className="projects-grup-card" key={index}>
            <img src={item.img} alt="" />
            <h4>{item.titlle}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
