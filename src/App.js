import './styles/index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import assets
import Header from './assets/Header';

// import pages
import WorksPage from './pages/Works';
import HomePage from './pages/Home';
import PageNotFound from './pages/404';
import ProfilePage from './pages/Profile';
import {ReactLenis, useLenis } from 'lenis/react';

function App() {
  const lenis = useLenis(({ scroll }) => {
  })
  return (
    <div className="App">
      {/* <Header/> */}

    <ReactLenis root>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="works" element={<WorksPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
    </BrowserRouter>
    </ReactLenis>
    </div>
  );
}

export default App;

      {/* <Router>
        <Routes>
          <Route path="/works" component={Works}/>
        </Routes>
      </Router> */}