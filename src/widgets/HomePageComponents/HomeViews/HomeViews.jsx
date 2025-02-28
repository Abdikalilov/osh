import React from "react";
import ReactPlayer from "react-player";
import "./HomeViews.scss";

export function HomeViews() {
    return (
        <div className="home-views">
            <h2>ПРЕДЛАГАЕМ К ПРОСМОТРУ</h2>
            <div className="content">
                <div className="video-wrapper">
                    {/* <ReactPlayer 
                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                        controls 
                    /> */}

                   <iframe 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=8PmZDTPS3KT798PK" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="text-block">
                    <h3>ПОДБОРКА ДЛЯ ВАС</h3>
                    <p>
                        Добро пожаловать! Здесь вы найдете подборку интересного и разнообразного контента, 
                        который мы тщательно отбираем для вас. Будь то познавательные статьи, увлекательные видео, 
                        аналитические обзоры или вдохновляющие истории — каждый материал создан, 
                        чтобы расширить кругозор, подарить новые идеи и оставить яркие впечатления.
                    </p>
                    <p>
                    Добро пожаловать! Здесь вы найдете подборку интересного и разнообразного контента, который мы тщательно отбираем для вас. Будь то познавательные статьи, увлекательные видео, аналитические обзоры или вдохновляющие истории — каждый материал создан, чтобы расширить кругозор, подарить новые идеи и оставить яркие впечатления.
Мы следим за актуальными трендами, новыми открытиями и качественным контентом, чтобы предложить вам только 
                    </p>
                    <button className="details-button">Подробнее</button>
                </div>
            </div>
        </div>
    );
}

export default HomeViews;
