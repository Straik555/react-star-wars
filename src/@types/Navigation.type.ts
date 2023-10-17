import { ReactNode } from 'react'

export type TypeRootStackParamList = {
	Home: undefined
	People: undefined
	Search: undefined
	Favorite: undefined
	Profile: undefined
}

export type TypeRoute = {
	name: keyof TypeRootStackParamList
	component: ReactNode
	path: string
}

export const enum ROUTES {
	HOME = '/',
	PEOPLE = '/people',
	PROFILE_BY_ID = '/profile/:id',
	SEARCH = '/search',
	FAVORITES = '/favorites'
}
