import { HTMLAttributes } from 'react'

export type PeopleType = {
	id: number
	birth_year: string
	eye_color: string
	films: string[]
	gender: string
	hair_color: string
	height: string
	mass: string
	name: string
	skin_color: string
	url: string
}

export type PeopleResponseType = {
	count: number
	next: string | null
	previous: string | null
	results: PeopleType[]
}

export type PeopleItemsProps = {
	id: number
	duration: VariantTransition
} & Pick<PeopleType, 'name'> &
	Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'onClick'>

export type PeopleByIdPropsType = {
	id: number
}

export const enum VariantTransition {
	LEFT = 'LEFT',
	RIGHT = 'RIGHT'
}
