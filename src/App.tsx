import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/home';
import Layout from '@/components/Layout';
import AboutUs from '@/pages/about';
import ContactUs from '@/pages/contact';
import WaterTreatment from './pages/services/waterTreatment';
import Catalogue from './pages/catalogue';
import Document from './pages/document';
import Gallery from './pages/gallery';
import Partners from './pages/partners';
import WaterDisalination from './pages/services/waterDisalination';
import GrayWaterTreatment from './pages/services/greyWaterTreatment';
import WaterRecycling from './pages/services/waterRecycling';
import SurfaceWaterTreatment from './pages/services/surfaceWatertreatment';
import SpringWaterTreatment from './pages/services/springWaterTreatment';
import RainWaterTreatment from './pages/services/rainWaterTreatment';


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
          <Route path="/partners" element={<Partners/>} />
          <Route path="/service/seaWaterTreatment" element={<WaterTreatment/>} />
          <Route path="/service/waterDesalination" element={<WaterDisalination/>} />
          <Route path="/service/grayWaterTreatment" element={<GrayWaterTreatment/>} />
          <Route path="service/waterRecycling" element={<WaterRecycling/>} />
          <Route path="/service/surfaceWaterTreatment" element={<SurfaceWaterTreatment/>} />
          <Route path="/service/springWaterTreatment" element={<SpringWaterTreatment/>} />
          <Route path="/service/rainWaterTreatment" element={<RainWaterTreatment/>} />
         
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
