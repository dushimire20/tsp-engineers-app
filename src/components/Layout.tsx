import Navbar from '@/components/navbar'
import Footer from '@/pages/footer';
import { Outlet } from 'react-router-dom'


const Layout = () => {
	return (
		<div>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout;
