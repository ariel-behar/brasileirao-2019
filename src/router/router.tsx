import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom'


const LazyRootView = lazy(() => import('../views/RootView'))
const LazyHomeView = lazy(() => import('../views/HomeView'))
const LazyLeagueView = lazy(() => import('../views/LeagueView'))
const LazyTeamsView = lazy(() => import('../views/TeamsView'))
const LazyFanClubView = lazy(() => import('../views/FanClubView'))
const LazyEventsView = lazy(() => import('../views/EventsView'))
const LazyTicketsView = lazy(() => import('../views/TicketsView'))

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
			},
			{
				path: "/league",
				element: <LazyLeagueView />,
			},
			{
				path: "/teams",
				element: <LazyTeamsView />,
			},
			{
				path: "/fan-club",
				element: <LazyFanClubView />,
			},
			{
				path: "/events",
				element: <LazyEventsView />,
			},
			{
				path: "/tickets",
				element: <LazyTicketsView />,
			}
		]

    }

])

export default router;