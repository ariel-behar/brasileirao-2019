import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { library } from '@fortawesome/fontawesome-svg-core'

import './styles/App.scss'

import router from './router/router'

import Loader from './components/Loader'

import { faCalendar, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons'

library.add(faCalendar, faClock, faLocationDot)

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
