import { RouterProvider } from 'react-router-dom'

import './App.css'

import router from './router/router'
import { HelmetProvider } from 'react-helmet-async'

function App() {
	return (
		<>
			<HelmetProvider>
				<RouterProvider router={router} />
			</HelmetProvider>
		</>
	)
}

export default App
