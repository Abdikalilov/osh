import { HomeBanner, HomeRating, HomeViews } from "../../widgets";
import { CardAfisha,CardPartners,CardFhdt,CardNews} from "../../features/index"

export const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <HomeBanner />    {/*адаптив не готов */}
      <CardAfisha />  {/* готов*/}
      <CardFhdt/>
      <CardNews />  {/*  не готов */}
      <HomeViews /> {/*готов */}
      <CardPartners /> {/* готов */}
      <HomeRating />{/*  не готов*/}

    </div>
  );
}