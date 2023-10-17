import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitialStatePageSlice } from '~types/Page.type'

const initialState: InitialStatePageSlice = {
	page: 1
}

const pageSlice = createSlice({
	name: 'pageStarWars',
	initialState,
	reducers: {
		togglePage: (state, { payload }: PayloadAction<number>) => {
			state.page = payload
		}
	}
})

export const {
	reducer,
	actions: { togglePage }
} = pageSlice
