import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from '@/pages/home';
import Layout from '@/components/Layout';
import AboutUs from '@/pages/about';
import ContactUs from '@/pages/contact';
import Products from '@/pages/product';
import Services from '@/pages/ourServices';


const App: React.FC = () => {
  

  return (
       <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/service' element={<Services />} />
            <Route path='/product' element={<Products />} />
            <Route path='/contact' element={<ContactUs />} />
          </Route>
          
        </Routes>
       </Router>
  )
}

export default App
