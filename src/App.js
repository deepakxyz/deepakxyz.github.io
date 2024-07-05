import './styles/index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import assets
import Header from './assets/Header';

// import pages
import WorksPage from './pages/Works';
import WorkItemPage from './pages/WorkItem';
import HomePage from './pages/Home';
import BlogPage from './pages/Blogs';
import ArtPage from './pages/Arts';
import Showreel from './pages/Showreel';
import PageNotFound from './pages/404';
import ProfilePage from './pages/Profile';
import {ReactLenis, useLenis } from 'lenis/react';

function App() {
  // const lenis = useLenis(({ scroll }) => {
  // })
  return (
    <div className="App">
      {/* <Header/> */}

    {/* <ReactLenis root> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="works" element={<WorksPage />} />
            <Route path="art" element={<ArtPage />} />
            <Route path="blogs" element={<BlogPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="showreel" element={<Showreel/>} />
            <Route path="works/:workitem" element={<WorkItemPage/>}/>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
    </BrowserRouter>
    {/* </ReactLenis> */}
    </div>
  );
}

export default App;

      {/* <Router>
        <Routes>
          <Route path="/works" component={Works}/>
        </Routes>
      </Router> */}