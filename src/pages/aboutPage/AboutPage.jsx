import "./aboutPage.scss"
import { Activities, Caption, Management, Structure, History } from "../../widgets";


export const AboutPage = () => {
  return (
    <div>
      <Caption />
      <Management />
      <Structure />
      <Activities />
      <History />
    </div>
  )
}
