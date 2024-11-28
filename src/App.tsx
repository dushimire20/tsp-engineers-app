import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/home';
import Layout from '@/components/Layout';
import AboutUs from '@/pages/about';
import ContactUs from '@/pages/contact';
import ServiceList from '@/components/ServiceList'; // Updated component
import SubServiceList from "@/components/subServiceList"; // Updated component
import ProductList from '@/components/ProductList'; // Updated component
import ProductDetails from "@/components/ProductDeatails"; // Updated component
import sampleData from "@/data/services"; // Import the sample data

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Service Routes */}
          <Route path="/services" element={<ServiceList services={sampleData} />} />
          <Route
            path="/services/:serviceId"
            element={<SubServiceList services={sampleData} />}
          />
          <Route
            path="/services/:serviceId/:subServiceId"
            element={<ProductList services={sampleData} />}
          />
          <Route
            path="/services/:serviceId/:subServiceId/:productId"
            element={<ProductDetails services={sampleData} />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
