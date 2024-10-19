import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/header';
// import { Projects } from './components/projects';
import { Tecnologias } from './components/tecnologias';
import { Footer } from './components/footer';
import { About } from './components/about';
import { Home } from './pages/home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
