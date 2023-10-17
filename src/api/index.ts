import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import env from '~utils/env'

export const baseApiSlice = createApi({
	reducerPath: 'baseApiStarWars',
	baseQuery: fetchBaseQuery({
		baseUrl: env.API_SERVER
	}),
	endpoints: () => ({})
})
