import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE
} from 'redux-persist'
import { reducer as backgroundReducer } from './backgroundSlice/backgroundSlice'
import { reducer as pageReducer } from './pageSlice/pageSlice'
import { reducer as favoriteReducer } from './favoriteSlice/favoriteSlice'
import storage from 'redux-persist/lib/storage'
import { baseApiSlice } from '~/api'

const rootReducer = combineReducers({
	backgroundReducer,
	pageReducer,
	favoriteReducer,
	[baseApiSlice.reducerPath]: baseApiSlice.reducer
})

const persistConfig = {
	key: 'reactStarWars',
	storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const setupStore = () => {
	return configureStore({
		reducer: persistedReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
				}
			}).concat(baseApiSlice.middleware)
	})
}

export const store = setupStore()

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
