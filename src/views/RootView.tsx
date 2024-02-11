import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from '../components/Header/Header'
import TranslationIcons from '../components/Header/TranslationIcons'

function RootView() {
	return (
		<>
			<ScrollRestoration />
			<span
				style={{
					position: 'absolute',
					right: '20px',
					top: '10px',
					zIndex: 5,
				}}
				className='d-none d-lg-block'>
				<TranslationIcons />
			</span>
			
			<Header />

			<main className='flex-grow-1 bg-white'>
				<Outlet />
			</main>
		</>
	)
}

export default RootView