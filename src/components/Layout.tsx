import Navbar from '@/components/navbar'
import Footer from '@/pages/footer';
import { Outlet } from 'react-router-dom'
import Whatsapp from './Whatsapp';


const Layout = () => {
	return (
		<div>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Whatsapp />
			<Footer />
		</div>
	)
}

export default Layout;
