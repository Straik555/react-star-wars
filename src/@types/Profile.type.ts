import { PeopleType } from '~types/People.type'

export type ProfileParamsType = {
	id: string
}

export type ProfileItemsPropsType = {
	isActive: boolean
} & Omit<PeopleType, 'url'>
