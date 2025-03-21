import React, { useState, useEffect, useRef } from 'react';
import './ElectronicSearch.scss';

export const ElectronicSearch = () => {
    const [authorFilter, setAuthorFilter] = useState('');
    const [titleFilter, setTitleFilter] = useState('');
    const [keywordFilter, setKeywordFilter] = useState('');
    const [showPopular, setShowPopular] = useState(false);
    const burgerRef = useRef(null);
    const inpRef = useRef(null);

    const cards = [
        {
            id: 1,
            title: "ПРОЩАЙ, ГУЛЬСАРЫ",
            author: "Чыңгыз Айтматов",
            description: "Роман рассказывает о жизни старого чабана Танабая и его верного коня Гульсары. Это история о дружбе, изменениях в обществе и воспоминаниях о прошлом, наполненная глубокими размышлениями о человеческой судьбе.",
            image: 'https://s1.livelib.ru/boocover/1000508825/200x305/3b0e/Proschaj_Gulsary.jpg', popular: false
        },
        {
            id: 2,
            title: "АННА КАРЕНИНА",
            author: "Лев Толстой",
            description: "История трагической любви Анны Карениной, её страсти к Вронскому и невозможности найти счастье в обществе, где царят строгие правила и лицемерие.",
            image: 'https://static.insales-cdn.com/r/r_ICj07CZPg/rs:fit:1000:0:1/q:100/plain/images/products/1/2753/580430529/1.jpg@jpg', popular: true
        },
        {
            id: 3,
            title: "ГАРРИ ПОТТЕР И ФИЛОСОФСКИЙ КАМЕНЬ",
            author: "Дж. К. Роулинг",
            description: "Первая книга о Гарри Поттере, мальчике, который узнаёт, что он волшебник, и отправляется в Хогвартс, чтобы раскрыть тайну своего прошлого и сразиться с темными силами.",
            image: 'https://cdn.azbooka.ru/cv/w1100/3f68a41d-d7ec-4f1b-ae7b-36376eb66430.jpg', popular: true
        },
        {
            id: 4,
            title: "УНЕСЁННЫЕ ВЕТРОМ",
            author: "Маргарет Митчелл",
            description: "Эпическая история любви и выживания во времена Гражданской войны в США. Скандально независимая Скарлетт О’Хара пытается сохранить свою жизнь и найти счастье.",
            image: 'https://static.insales-cdn.com/r/jn1JoGID1W0/rs:fit:1000:0:1/q:100/plain/images/products/1/7721/767237673/1.jpeg@jpeg', popular: true
        },
        {
            id: 5,
            title: "НОРВЕЖСКИЙ ЛЕС",
            author: "Харуки Мураками",
            description: "Глубокий роман о первой любви, утрате и поиске смысла жизни. История Тору Ватанабэ, вспоминающего свою юность и трагические события, изменившие его навсегда.",
            image: 'https://www.litres.ru/pub/c/cover/10858418.jpg', popular: false
        }
    ];

    const filteredCards = cards.filter((card) => {
        return (
            card.author.toLowerCase().includes(authorFilter.toLowerCase()) &&
            card.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
            card.description.toLowerCase().includes(keywordFilter.toLowerCase())
        );
    });

    const displayedCards = showPopular ? filteredCards.filter(card => card.popular) : filteredCards;

    useEffect(() => {
        const toggleMenu = () => {
            inpRef.current.classList.toggle('open');
        };
        if (burgerRef.current) {
            burgerRef.current.addEventListener('click', toggleMenu);
        }
        return () => {
            if (burgerRef.current) {
                burgerRef.current.removeEventListener('click', toggleMenu);
            }
        };
    }, []);

    return (
        <div className="electronicSearch container">
            <h1 className="electronicSearch_title">ЭЛЕКТРОННЫЕ КАТАЛОГИ</h1>
            <div className="electronicSearch_filters">
                <div className="electronicSearch_filters_btn">
                    <button className={`electronicSearch_filters_btn_all ${!showPopular ? "active" : ""}`} onClick={() => setShowPopular(false)}>Все</button>
                    <button className={`electronicSearch_filters_btn_popular ${showPopular ? "active" : ""}`} onClick={() => setShowPopular(true)}>Популярные</button>
                </div>
                <input
                    className="electronicSearch_filters_inp"
                    type="text"
                    placeholder="Автор"
                    value={authorFilter}
                    onChange={(e) => setAuthorFilter(e.target.value)}
                />
                <input
                    className="electronicSearch_filters_inp"
                    type="text"
                    placeholder="Название документа"
                    value={titleFilter}
                    onChange={(e) => setTitleFilter(e.target.value)}
                />
                <input
                    className="electronicSearch_filters_inp"
                    type="text"
                    placeholder="Ключевое слово"
                    value={keywordFilter}
                    onChange={(e) => setKeywordFilter(e.target.value)}
                />
                <div ref={burgerRef} className="electronicSearch_filters-burger">
                    <span></span>
                </div>
            </div>

            <div className="electronicSearch_info">
                {displayedCards.map((card) => (
                    <div className="electronicSearch_info_block" key={card.id}>
                        <div className="desktop_view">
                            <div className="electronicSearch_info_block_img">
                                <img src={card.image} alt={card.title} />
                            </div>
                            <div className="electronicSearch_info_block_text">
                                <h2 className="electronicSearch_info_block_text_name">📖 {card.title}</h2>
                                <h4 className="electronicSearch_info_block_text_author">✍️ {card.author}</h4>
                                <p className="electronicSearch_info_block_text_description"><span>📜 Описание:</span> {card.description}</p>
                            </div>
                            <div className="electronicSearch_info_block_btn">
                                <button className="electronicSearch_info_block_btn_read">читать</button>
                                <button className="electronicSearch_info_block_btn_download">скачать</button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="electronicSearch_button">
                    <button className="electronicSearch_button-more">Ещё</button>
                </div>
            </div>
        </div>
    );
};






