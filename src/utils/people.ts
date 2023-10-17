import { PeopleResponseType } from '~types/People.type'
import env from './env'

export const transformResponsePeople = (
	response: PeopleResponseType
): PeopleResponseType => {
	const nerResult = response?.results?.map(res => ({
		...res,
		id: Number(res.url.replace(env.API_SERVER + 'people/', '').slice(0, -1))
	}))
	return {
		...response,
		results: nerResult
	}
}
