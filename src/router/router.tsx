import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom'


const LazyRootView = lazy(() => import('../views/RootView'))
const LazyHomeView = lazy(() => import('../views/HomeView'))
import ErrorView from '../views/ErrorView';

const router = createBrowserRouter([
    {
		path: "/",
		element: <LazyRootView />,
		errorElement: <ErrorView />,
		children: [
			{
				path: "/",
				element: <LazyHomeView />,
			}
		]

    }

])

export default router;