import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

function RootView() {
	return (
		<>
			<Header />
			
			<main className='flex-grow-1 bg-white'>
				<Outlet />
			</main>
		</>
	)
}

export default RootView