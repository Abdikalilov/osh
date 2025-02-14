import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../style/app.scss';
import { HomePage } from '../../pages';
import { Footer, Header } from '../../widgets';

function App() {
  const routesArr = [
    {
      path: '/',
      element: <HomePage />
    }
  ]

  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route index element={<HomePage />} />
            {routesArr?.map((item, index) => (
                <Route key={index} path={item.path} element={item.element} />
            ))}
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App;
