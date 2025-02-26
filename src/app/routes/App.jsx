import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/app.scss';
import { 
  HomePage,
  AfishaPage,
  AfishaDetail,
  ServicesPage,
  ProjectPage,
  ProjectDetail,
  NewsPage,
  NewsDetail,
  CatalogPage,
  ReaderPage,
  AboutPage,
  SupportPage,
  ElectronicPage,
  ElectronicDetail,
  ProfessionalPage
} from '../../pages'; 
import { Footer, Header, Breadcrumb } from '../../widgets';

const routesArr = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/afisha',
    element: <AfishaPage />
  },
  {
    path: '/afisha-detail/:id',
     element: <AfishaDetail />
   },
  {
    path: '/services',
    element: <ServicesPage />
  },
  {
    path: '/project',
     element: <ProjectPage />
  },
  {
    path: '/project-detail/:id',
    element: <ProjectDetail />
   },
  {
    path: '/news',
    element: <NewsPage />
  },
  {
    path: '/news-detail/:id',
    element: <NewsDetail />
  },
  {
    path: '/catalog',
    element: <CatalogPage />
  },
  {
    path: '/reader',
    element: <ReaderPage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/support',
    element: <SupportPage />
  },
  {
    path: '/electronic',
    element: <ElectronicPage />
  },
  {
    path: '/electronic-detail/:id',
    element: <ElectronicDetail />
  },
  {
    path: '/professional',
    element: <ProfessionalPage />
  },
];

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Breadcrumb />
      <Routes>
        {routesArr.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
