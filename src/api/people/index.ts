import { baseApiSlice } from '~/api'
import {
	PeopleByIdPropsType,
	PeopleResponseType,
	PeopleType
} from '~types/People.type'
import { transformResponsePeople } from '~utils/people'
import env from '~utils/env'

const enhancedBaseApiSlice = baseApiSlice.enhanceEndpoints({})

const peopleApi = enhancedBaseApiSlice.injectEndpoints({
	overrideExisting: true,
	endpoints: build => ({
		getAllPeople: build.query<PeopleResponseType, number>({
			query: page => ({
				url: `people/?page=${page}`,
				method: 'GET'
			}),
			transformResponse: (response: PeopleResponseType) =>
				transformResponsePeople(response)
		}),
		getPeopleById: build.query<PeopleType, PeopleByIdPropsType>({
			query: ({ id }) => ({
				url: `people/${id}`,
				method: 'GET'
			}),
			transformResponse: (response: PeopleType) => ({
				...response,
				id: Number(
					response.url.replace(env.API_SERVER + 'people/', '').slice(0, -1)
				)
			})
		})
	})
})

export const { useGetAllPeopleQuery, useGetPeopleByIdQuery } = peopleApi
