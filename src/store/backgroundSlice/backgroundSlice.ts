import {
	BACKGROUND_TYPE,
	InitialStateBackgroundSlice
} from '~/@types/Background.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: InitialStateBackgroundSlice = {
	side: BACKGROUND_TYPE.SOLO
}

const backgroundSlice = createSlice({
	name: 'backgroundStarWars',
	initialState,
	reducers: {
		toggleSide(state, { payload }: PayloadAction<BACKGROUND_TYPE>) {
			state.side = payload
		}
	}
})

export const {
	actions: { toggleSide },
	reducer
} = backgroundSlice
