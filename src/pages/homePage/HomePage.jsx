import { HomeBanner, HomeCatalogs,  HomeNews,  HomeRating, HomeViews } from "../../widgets";

import { CardAfisha,CardPartners} from "../../features/index"

export const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      
      <HomeBanner />    {/*адаптив не готов */}
      <CardAfisha />  {/* готов*/}
      <HomeCatalogs />  {/*готов */}
      <HomeNews />  {/*  не готов */}
      <HomeViews /> {/*готов */}
      <CardPartners /> {/* готов */}
      <HomeRating />{/*  не готов*/}

    </div>
  );
}