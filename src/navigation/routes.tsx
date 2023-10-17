import { ROUTES, TypeRoute } from '~/@types/Navigation.type'
import { Home } from '~/pages'
import { Favorite, People, Profile, Search } from '~pages'

export const routesHeader: TypeRoute[] = [
	{
		name: 'Home',
		path: ROUTES.HOME,
		component: <Home />
	},
	{
		name: 'People',
		path: ROUTES.PEOPLE,
		component: <People />
	},
	{
		name: 'Search',
		path: ROUTES.SEARCH,
		component: <Search />
	}
]

export const routes: TypeRoute[] = [
	...routesHeader,
	{
		name: 'Favorite',
		path: ROUTES.FAVORITES,
		component: <Favorite />
	},
	{
		name: 'Profile',
		path: ROUTES.PROFILE_BY_ID,
		component: <Profile />
	}
]
