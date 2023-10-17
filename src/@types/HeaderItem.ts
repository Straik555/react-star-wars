import { To } from 'react-router-dom'
import { TypeRootStackParamList } from '~types/Navigation.type'

export type HeaderTypeProps = {
	active: boolean
	to: To
	title: keyof TypeRootStackParamList
}
