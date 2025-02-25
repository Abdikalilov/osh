import React from 'react'
import imagee from '../../shared/eventsImg/imagee.png'
import iconca from '../../shared/eventsImg/iconca.png'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";

import './afishaDetailSection.scss'
export const AfishaDetailSection = () => {

  return (

<div>
    <div className="afishaDetail">
        <div className="container">
            <h1 className='afishaDetail_title'>Выставка: Код цивилизаций</h1>
            <div className="afishaDetail_group">
                <div className="afishaDetail_group_img">
                    <img src={imagee} alt="" />
                </div>
                <div className="afishaDetail_group_text">
                    <h3><img src={iconca} alt="" />Выставка</h3>
                    <h3> <MdOutlineCalendarMonth />2025, 04 февраля, Вторник - 2025, 20 февраля, Четверг</h3>
                    <h3> <LuMapPin />Музей Изобразительных Искусств им. Г. Айтиева</h3>
                    <h2>Описание</h2>
                    <div className='afishaDetail_group_text_description'>
                        <p className='afishaDetail_group_text_description_part'>Российские дизайнеры создали комфортные условия для проведения лекций, выставок, дискуссионных клубов, тематических занятий и мастер-классов. Все эти мероприятия будут ориентированы прежде всего на подрастающее поколение.</p>

                        <p className='afishaDetail_group_text_description_part'>Планируется, что до конца года российские ученые, педагоги и разработчики современных средств обучения проведут в центре мастер-классы по физике, биологии, робототехнике для школьников и педагогов. Также будет проведен детский фестиваль научных экспериментов.</p>

                        <p className='afishaDetail_group_text_description_part'>Россотрудничество оснастило центр современной эргономичной мебелью. Для детей до 12 лет предусмотрена игровая зона с уникальными "говорящими" книгами и ручками "Знаток", электронными плакатами, интерактивным столиком и конструкторами</p>

                        <p className='afishaDetail_group_text_description_part'>В открытии центра приняли участие заместитель министра культуры КР Гульбара Абдыкалыкова, замглавы Россотрудничества Павел Шевцов, библиотекари, учителя, а также лидеры движения соотечественников.</p>

                        <p className='afishaDetail_group_text_description_part'>Шевцов отметил, что идея создания центра принадлежит Россотрудничеству.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
  )
}
