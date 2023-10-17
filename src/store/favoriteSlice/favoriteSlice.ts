import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitialStateFavorite } from '~types/Favorite.type'

const initialState: InitialStateFavorite = {
	favorite: []
}

const favoriteSlice = createSlice({
	name: 'favoriteStarWars',
	initialState,
	reducers: {
		toggleFavorite: (state, { payload }: PayloadAction<number>) => {
			if (state.favorite.includes(payload)) {
				state.favorite = [...state.favorite, payload]
			} else {
				state.favorite = state.favorite.filter(el => el !== payload)
			}
		}
	}
})

export const {
	actions: { toggleFavorite },
	reducer
} = favoriteSlice
