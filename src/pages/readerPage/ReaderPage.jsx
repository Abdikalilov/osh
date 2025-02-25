import { Banner } from "../../widgets/readerPageComponents/banner/Banner";
import { Graphik } from "../../widgets/readerPageComponents/graphik/Graphik";
import { Video } from "../../widgets/readerPageComponents/video/Video";
import { Catalog } from "../../widgets/readerPageComponents/catalog/Catalog";
import { Rating } from "../../widgets/readerPageComponents/rating/Rating";

export const ReaderPage = () => {
  return (
    <div>
       <Banner />
       <Graphik />
       <Video />
       <Catalog />
       <Rating />
    </div>
  )
}
