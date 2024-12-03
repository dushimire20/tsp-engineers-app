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
import DPS from './pages/services/solar/dps';
import SolarAccessories from './pages/services/solar/solarAccessories';
import EnergySystems from './pages/services/solar/energySystems';
import Inverters from './pages/services/solar/inverters';
import Pools from './pages/services/pools';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/catalogue" element ={<Catalogue/>} />
          <Route path="/document" element={<Document/>} />
          <Route path="/gallery" element = {<Gallery/>} />
          <Route path="/service/solar" element={<Solars/>} />
          <Route path="/solarPanels" element={<SolarPanels />} />
          <Route path="/waterHeaters" element={<WaterHeaters />} />
          <Route path="/solarControls" element={<SolarPumps />} />
          <Route path="/inverters" element={<Inverters />} />
          <Route path="/digitalSolutions" element={<DPS/>} />
          <Route path="/solarAccessories" element={<SolarAccessories/>} />
          <Route path="/energySystems" element={<EnergySystems/>} />
          {/* swimming pool */}
          <Route path="/service/swimming-pool" element= {<Pools/>} />
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
