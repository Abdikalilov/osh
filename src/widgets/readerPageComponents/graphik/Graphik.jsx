import './graphik.scss'

import { useState } from "react";

const initialData = [
  { day: "Понедельник", time: "08:00-20:00" },
  { day: "Вторник", time: "08:00-20:00" },
  { day: "Среда", time: "08:00-20:00" },
  { day: "Четверг", time: "08:00-20:00" },
  { day: "Пятница", time: "08:00-20:00" },
  { day: "Суббота", time: "08:00-20:00" },
  { day: "Воскресенье", time: "Выходной" },
];

const initialTime = [
  { day2: "Директор-Паланчаев Паланча ", time2: "Вторник 16:00-18:00-Директор" },
  { day2: "Директор-Паланчаев Паланча ", time2: "Вторник 11:00-13:00-Зам-Директор" },
];

export const Graphik = () => {
  const [schedule, setSchedule] = useState(initialData);
  const [data, setData] = useState(initialTime);


  return (
    <div className='grap'>
      <h2 className='grap-graphik' >График работы</h2>
      <table className='grap-table1'border="1" width="100%" >
        <thead>
          <tr>
            <th className='grap-data'>День недели</th>
            <th className='grap-time'>Время</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index}>
              <td className='grap-day'>{item.day}</td>
              <td className='grap-time2'>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className='grap-graphik2' >График личного приема граждан директора</h2>
      <table className='grap-table2'border="1" width="100%" >
        <thead>
          <tr>
            <th className='grap-data2'>Принимающие</th>
            <th className='grap-time3'>Календарь приёмов</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item1, index1) => (
            <tr key={index1}>
              <td className='grap-day2'>{item1.day2}</td>
              <td className='grap-time4'>{item1.time2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};






   
   //  return (
   //    <div className='grap'>

   //          <h1 className='grap-text1'>График работы</h1>


   //     <table className='grap-table1'>
   //          <tr>
   //             <th className='grap-data'>ДЕНЬ НЕДЕЛИ</th>
   //             <th class="grap-time">ВРЕМЯ</th>
   //         </tr>
   //         <tr >
   //             <td>Понедельник</td>
   //             <td class="time">08:00 - 20:00</td>
   //         </tr>
   //          <tr>
   //             <td>Вторник</td>
   //             <td class="time">08:00 - 20:00</td>
   //         </tr>
   //          <tr>
   //             <td>Среда</td>
   //             <td class="time">08:00 - 20:00</td>
   //          </tr>
   //          <tr>
   //             <td>Четверг</td>
   //             <td class="time">08:00 - 20:00</td>
   //          </tr>
   //           <tr>
   //             <td>Пятница</td>
   //             <td class="time">08:00 - 20:00</td>
   //          </tr>
   //           <tr>
   //             <td>Суббота</td>
   //             <td class="time">08:00 - 20:00</td>
   //          </tr>
   //          <tr>
   //             <td className='holiday'>Воскресенье</td>
   //             <td class="holiday">Выходной</td>
   //          </tr>
   //      </table>
      

   //      <h1 className='grap-text2'>График личного приема граждан директора</h1>

   //        <table className='grap-table2'>
   //        <tr>
   //             <th className='grap-data2'>ПРИНИМАЮЩИЕ</th>
   //             <th class="grap-time2">КАЛЕНДАРЬ ПРИЁМОВ</th>
   //         </tr>
   //        <tr>
   //             <td >Директор-Паланчаев Паланча </td>
   //             <td >Вторник 16:00-18:00-Директор</td>
   //          </tr>
   //          <tr>
   //             <td >Директор-Паланчаев Паланча </td>
   //             <td >Вторник 11:00-13:00-Зам-Директор</td>
   //          </tr>
   //        </table>

   //    </div>
      
   //  );
// }