import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import './App.scss'

import router from './router/router'

import Loader from './components/Loader'

function App() {
	return (
		<>
			<HelmetProvider>
				<Suspense fallback={<Loader />}>
					<RouterProvider router={router} />
				</Suspense>
			</HelmetProvider>
		</>
	)
}

export default App
