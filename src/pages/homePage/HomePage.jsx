import { AfishaEvent, HomeBanner, HomeNews, HomeRating, HomeViews  } from "../../widgets";
import { CardPartners,CardFhdt, } from "../../features/index"

export const HomePage = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <HomeBanner />    {/*адаптив не готов */}
      <AfishaEvent />
      <CardFhdt/>
      <HomeNews />  {/*  не готов */}
      <HomeViews /> {/*готов */}
      <CardPartners /> {/* готов */}
      <HomeRating />{/*  не готов*/}

    </div>
  );
}