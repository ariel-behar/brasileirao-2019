import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


function RootView() {
	return (
		<>
			<Header />
			<main className='flex-grow-1 bg-white'>
				<Outlet />
			</main>

			<Footer />
		</>
	)
}

export default RootView