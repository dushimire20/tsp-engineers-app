import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/home';
import Layout from '@/components/Layout';
import AboutUs from '@/pages/about';
import ContactUs from '@/pages/contact';
import Solars from './pages/services/solar';
import SolarPanels from './pages/services/solar/solarPanels';
import WaterHeaters from './pages/services/solar/waterHeaters';
import SolarPumps from './pages/services/solar/solarPumps';
import Catalogue from './pages/catalogue';
import Document from './pages/document';
import Gallery from './pages/gallery';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service/solar" element={<Solars/>} />
          <Route path="/solarPanels" element={<SolarPanels />} />
          <Route path="/waterHeaters" element={<WaterHeaters />} />
          <Route path="/solarControls" element={<SolarPumps />} />
          <Route path="/catalogue" element ={<Catalogue/>} />
          <Route path="/document" element={<Document/>} />
          <Route path="/gallery" element = {<Gallery/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
