

import { useState } from 'react';
import './ElectronicSearch.scss';
import { CardBook } from '../../../features';

export const ElectronicSearch = () => {

    const [authorFilter, setAuthorFilter] = useState('');
    const [titleFilter, setTitleFilter] = useState('');
    const [keywordFilter, setKeywordFilter] = useState('');

    const cards = [
        {
            id: 1,
            title: "ПРОЩАЙ, ГУЛЬСАРЫ",
            author: "Чыңгыз Айтматов",
            description: "Роман рассказывает о жизни старого чабана Танабая и его верного коня Гульсары. Это история о дружбе, изменениях в обществе и воспоминаниях о прошлом, наполненная глубокими размышлениями о человеческой судьбе.",
            image: 'https://s3-alpha-sig.figma.com/img/a91c/5f80/7ff4a2cb3e95c559be3edecf125b6968?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=o1P1K7uA3ONoTLOvoo4OAx6IJzptTNg5h8~aFPNRpcI5G7Cc9w4dCHvptqh7Cgq-Q67PUP-lBP4p356Pg3RsHb1UxGhhBFaDWEt1kUPcmDOUaiddA-ztY16~2SIWBApqvMwtiw-qVNZDbTXESux7qWT3z~6p6umkrvt--QuHzGyhDJTW~yyzCRm1i~huoq~q8nItakdpEYWUyWEPsHiELf56Nb-LHOpVghn0xSfHOxujbBpMeDccuLIqQn1yvESGx~ktk4GjK9vMcK9fu0ZSnz96ycyjYh09em2BTahkXXhBssSZ7CMT0mF~I9zINkjAIh2WnN3JGLoLbnQcRVXa~A__'
        },
        {
            id: 2,
            title: "АННА КАРЕНИНА",
            author: "Лев Толстой",
            description: "История трагической любви Анны Карениной, её страсти к Вронскому и невозможности найти счастье в обществе, где царят строгие правила и лицемерие.",
            image: 'https://static.insales-cdn.com/r/r_ICj07CZPg/rs:fit:1000:0:1/q:100/plain/images/products/1/2753/580430529/1.jpg@jpg'
        },
        {
            id: 3,
            title: "ГАРРИ ПОТТЕР И ФИЛОСОФСКИЙ КАМЕНЬ",
            author: "Дж. К. Роулинг",
            description: "Первая книга о Гарри Поттере, мальчике, который узнаёт, что он волшебник, и отправляется в Хогвартс, чтобы раскрыть тайну своего прошлого и сразиться с темными силами.",
            image: 'https://cdn.azbooka.ru/cv/w1100/3f68a41d-d7ec-4f1b-ae7b-36376eb66430.jpg'
        },
        {
            id: 4,
            title: "УНЕСЁННЫЕ ВЕТРОМ",
            author: "Маргарет Митчелл",
            description: "Эпическая история любви и выживания во времена Гражданской войны в США. Скандально независимая Скарлетт О’Хара пытается сохранить свою жизнь и найти счастье.",
            image: 'https://static.insales-cdn.com/r/jn1JoGID1W0/rs:fit:1000:0:1/q:100/plain/images/products/1/7721/767237673/1.jpeg@jpeg'
        },
        {
            id: 5,
            title: "НОРВЕЖСКИЙ ЛЕС",
            author: "Харуки Мураками",
            description: "Глубокий роман о первой любви, утрате и поиске смысла жизни. История Тору Ватанабэ, вспоминающего свою юность и трагические события, изменившие его навсегда.",
            image: 'https://www.litres.ru/pub/c/cover/10858418.jpg'
        }
    ];

    const filteredCards = cards.filter((card) => {
        const authorMatch = card.author.toLowerCase().includes(authorFilter.toLowerCase());
        const titleMatch = card.title.toLowerCase().includes(titleFilter.toLowerCase());
        const keywordMatch = card.description.toLowerCase().includes(keywordFilter.toLowerCase());

        return authorMatch && titleMatch && keywordMatch;
    });

    return (
        <div>
            <div className="electronicSearch container">
                <h1 className="electronicSearch_title">ЭЛЕКТРОННЫЕ КАТАЛОГИ</h1>

                <div className="electronicSearch_filters">
                    <div className="electronicSearch_filters_btn">
                        <button className="electronicSearch_filters_btn_all">Все</button>
                        <button className="electronicSearch_filters_btn_popular ">Популярные</button>
                    </div>
                    <input className="electronicSearch_filters_inp" type="text" placeholder="Автор" value={authorFilter} onChange={(e) => setAuthorFilter(e.target.value)} />
                    <input className="electronicSearch_filters_inp" type="text" placeholder="Название документа" value={titleFilter} onChange={(e) => setTitleFilter(e.target.value)} />
                    <input className="electronicSearch_filters_inp" type="text" placeholder="Ключевое слово" value={keywordFilter} onChange={(e) => setKeywordFilter(e.target.value)} />

                </div>
                <div className="electronicSearch_info">
                    {filteredCards.map((card) => (
                       
                        <CardBook key={card.id}
                            image={card.image}
                            author={card.author}
                            description={card.description}
                            title={card.title}

                        />
                    ))}
                </div>
            </div>
        </div>
    );
}



