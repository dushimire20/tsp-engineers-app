import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/home';
import Layout from '@/components/Layout';
import AboutUs from '@/pages/about';
import ContactUs from '@/pages/contact';
import Solars from './pages/services/solar';
import SolarPanels from './pages/services/solar/solarPanels';
import WaterHeaters from './pages/services/solar/waterHeaters';
import SolarPumps from './pages/services/solar/solarPumps';


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
          <Route path="/solar-panels" element={<SolarPanels />} />
          <Route path="/water-heaters" element={<WaterHeaters />} />
          <Route path="/solar-pumps--controls" element={<SolarPumps />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
