import { NewsAdvertisment } from "../../widgets/NewsPageComponents/NewsAdvertisment/NewsAdvertisment";
import { NewsSection} from "../../widgets/NewsPageComponents/NewsBanner/NewsSection";
import { NewsBooksUpdate } from "../../widgets/NewsPageComponents/NewsBooksUpdate/NewsBooksUpdate";


export const NewsPage = () => {
  return (
    <div>
      <NewsSection />    {/*адаптив готов */}
      <NewsAdvertisment title="Обьявление о мероприятиях"/>
      <NewsBooksUpdate />
      <NewsAdvertisment title="Сми о нас"/>
    </div>
  );
}