import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from '@/pages/home';
import Layout from '@/components/Layout';


const App: React.FC = () => {
  

  return (
       <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
          </Route>
          
        </Routes>
       </Router>
  )
}

export default App
